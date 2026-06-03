import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Lock, Mail, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/patient-portal';

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setServerError('');
    try {
      await login(data);
      navigate(from, { replace: true });
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
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
          <h1 className="text-2xl font-black text-gray-900">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to access your patient portal</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          {serverError && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('email')}
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                />
              </div>
              {errors.email && <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email.message}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <Link to="/forgot-password" className="text-xs text-green-600 hover:text-green-700 font-medium">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-11 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-green-600/20"
            >
              {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" />Signing in...</> : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/register" className="text-green-600 hover:text-green-700 font-semibold">Create one free</Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            By signing in, you agree to our{' '}
            <Link to="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link>
            {' '}and{' '}
            <Link to="/terms" className="text-green-600 hover:underline">Terms of Service</Link>
          </p>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
          <p className="text-xs text-amber-700 font-medium">Medical Emergency?</p>
          <a href="tel:+254719073000" className="text-sm font-bold text-red-600 hover:text-red-700">Call Emergency: 0719 073 000</a>
        </div>
      </div>
    </main>
  );
}
