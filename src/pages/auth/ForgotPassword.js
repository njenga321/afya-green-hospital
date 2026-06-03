import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, AlertCircle, Loader2, CheckCircle, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState('');
  const { forgotPassword } = useAuth();

  const { register, handleSubmit, getValues, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setServerError('');
    try {
      await forgotPassword(data);
      setSent(true);
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
          <h1 className="text-2xl font-black text-gray-900">Reset your password</h1>
          <p className="text-gray-500 text-sm mt-1">Enter your email and we'll send reset instructions</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          {sent ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl font-black text-gray-900 mb-2">Check your email</h2>
              <p className="text-gray-500 text-sm mb-2">
                We've sent password reset instructions to:
              </p>
              <p className="font-semibold text-gray-900 text-sm mb-6">{getValues('email')}</p>
              <p className="text-gray-400 text-xs mb-6">
                Didn't receive it? Check your spam folder or{' '}
                <button onClick={() => setSent(false)} className="text-green-600 font-semibold hover:underline">try again</button>.
              </p>
              <Link to="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700">
                <ArrowLeft className="w-4 h-4" />
                Back to Sign In
              </Link>
            </div>
          ) : (
            <>
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
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-600/20"
                >
                  {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> : 'Send Reset Instructions'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link to="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-green-700">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
