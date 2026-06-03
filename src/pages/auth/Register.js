import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Lock, Mail, User, Phone, AlertCircle, Loader2, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const passwordStrength = (pwd) => {
  if (!pwd) return { score: 0, label: '', color: '' };
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  const levels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['', 'bg-red-400', 'bg-amber-400', 'bg-blue-400', 'bg-green-500'];
  return { score, label: levels[score], color: colors[score] };
};

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [serverError, setServerError] = useState('');
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const watchPwd = watch('password', '');
  const strength = passwordStrength(watchPwd);

  const onSubmit = async (data) => {
    setServerError('');
    try {
      await registerUser({ name: data.name, email: data.email, phone: data.phone, password: data.password });
      navigate('/patient-portal', { replace: true });
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-green-50 border border-green-100 flex items-center justify-center">
              <img src="/logo.png" alt="Afya Green Hospital" className="w-full h-full object-contain p-1" />
            </div>
            <div className="text-left">
              <div className="font-black text-green-700 text-sm leading-tight">AFYA GREEN</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">Hospital</div>
            </div>
          </Link>
          <h1 className="text-2xl font-black text-gray-900">Create your account</h1>
          <p className="text-gray-500 text-sm mt-1">Join thousands of patients managing their health online</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          {serverError && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('name')}
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                />
              </div>
              {errors.name && <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('email')}
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                />
              </div>
              {errors.email && <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('phone')}
                  type="tel"
                  autoComplete="tel"
                  placeholder="+254 700 000 000"
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                />
              </div>
              {errors.phone && <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Min. 8 characters"
                  className={`w-full pl-10 pr-11 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {watchPwd && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= strength.score ? strength.color : 'bg-gray-200'}`} />
                    ))}
                  </div>
                  {strength.label && <p className="text-xs text-gray-500">Strength: <span className="font-semibold">{strength.label}</span></p>}
                </div>
              )}
              {errors.password && <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('confirmPassword')}
                  type={showConfirm ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Repeat your password"
                  className={`w-full pl-10 pr-11 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.confirmPassword.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-green-600/20 mt-2"
            >
              {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" />Creating account...</> : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-green-600 hover:text-green-700 font-semibold">Sign in</Link>
            </p>
          </div>
        </div>

        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-green-800">Your data is secure</p>
              <p className="text-xs text-green-700 mt-0.5">We protect your health information with industry-standard encryption and comply with Kenya's Data Protection Act 2019.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
