import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User, ChevronRight, CheckCircle, Clock, Shield, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/animations/FadeIn';
import { services } from '../data/services';
import { doctors } from '../data/doctors';

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  department: z.string().min(1, 'Please select a department'),
  doctor: z.string().optional(),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  notes: z.string().optional(),
});

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
];

const steps = ['Your Details', 'Appointment', 'Review & Confirm'];

export default function Appointments() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const defaultDoctor = searchParams.get('doctor') || '';
  const defaultService = searchParams.get('service') || '';

  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      department: defaultService || '',
      doctor: defaultDoctor || '',
    },
  });

  const onSubmit = () => {
    if (step < 3) { setStep(step + 1); return; }
    setSubmitted(true);
  };

  const watchedDept = watch('department');
  const filteredDoctors = watchedDept
    ? doctors.filter((d) => services.find((s) => s.id === watchedDept)?.title.toLowerCase().includes(d.specialty.toLowerCase().split(' ')[0]))
    : doctors;

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  if (submitted) {
    const vals = getValues();
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="container-custom max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-10 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-3">Appointment Booked!</h2>
            <p className="text-gray-500 mb-6">Thank you, <strong>{vals.firstName}</strong>. We've received your appointment request and will confirm via email and phone within 2 hours.</p>
            <div className="bg-green-50 rounded-2xl p-5 text-left mb-8 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date</span>
                <span className="font-semibold">{vals.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Time</span>
                <span className="font-semibold">{vals.time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Department</span>
                <span className="font-semibold">{services.find((s) => s.id === vals.department)?.title}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Contact</span>
                <span className="font-semibold">{vals.phone}</span>
              </div>
            </div>
            <a href="/" className="btn-primary w-full justify-center">Return to Home</a>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="py-24 bg-gradient-to-br from-green-900 to-teal-800">
        <div className="container-custom">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-5">Appointments</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Book Your Appointment</h1>
            <p className="text-green-100 text-lg max-w-xl">Schedule a consultation with any of our specialists. Quick, easy, and confirmed within 2 hours.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          {/* Stepper */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={`flex items-center gap-2 ${i + 1 <= step ? 'text-green-700' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${i + 1 < step ? 'bg-green-600 text-white' : i + 1 === step ? 'bg-green-600 text-white ring-4 ring-green-100' : 'bg-gray-200 text-gray-500'}`}>
                    {i + 1 < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className="text-sm font-semibold hidden sm:block">{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-12 md:w-24 h-0.5 mx-3 ${i + 1 < step ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  {step === 1 && (
                    <div className="space-y-5">
                      <h2 className="text-xl font-bold text-gray-900 mb-6">Your Personal Details</h2>
                      <div className="grid sm:grid-cols-2 gap-5">
                        {['firstName', 'lastName'].map((field) => (
                          <div key={field}>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                            <input {...register(field)} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder={field === 'firstName' ? 'John' : 'Doe'} />
                            {errors[field] && <p className="mt-1 text-xs text-red-500">{errors[field].message}</p>}
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                        <input {...register('phone')} type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="+254 7XX XXX XXX" />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                        <input {...register('email')} type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="john@example.com" />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-5">
                      <h2 className="text-xl font-bold text-gray-900 mb-6">Appointment Details</h2>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department / Service</label>
                        <select {...register('department')} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                          <option value="">Select a department</option>
                          {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                        </select>
                        {errors.department && <p className="mt-1 text-xs text-red-500">{errors.department.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Doctor (Optional)</label>
                        <select {...register('doctor')} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                          <option value="">Any available doctor</option>
                          {filteredDoctors.map((d) => <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>)}
                        </select>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Date</label>
                          <input {...register('date')} type="date" min={minDateStr} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                          {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Time</label>
                          <select {...register('time')} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option value="">Select time</option>
                            {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                          {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Notes (Optional)</label>
                        <textarea {...register('notes')} rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" placeholder="Describe your symptoms or any relevant information..." />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold text-gray-900 mb-6">Review Your Appointment</h2>
                      {[
                        ['Name', `${getValues('firstName')} ${getValues('lastName')}`],
                        ['Phone', getValues('phone')],
                        ['Email', getValues('email')],
                        ['Department', services.find((s) => s.id === getValues('department'))?.title],
                        ['Date', getValues('date')],
                        ['Time', getValues('time')],
                        ['Notes', getValues('notes') || 'None'],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-start justify-between py-3 border-b border-gray-100">
                          <span className="text-sm text-gray-500 font-medium">{label}</span>
                          <span className="text-sm font-semibold text-gray-900 text-right max-w-xs">{value}</span>
                        </div>
                      ))}
                      <div className="bg-green-50 rounded-xl p-4 mt-4 flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">Your information is safe and will only be used to confirm your appointment. We'll contact you within 2 hours.</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                    {step > 1 ? (
                      <button type="button" onClick={() => setStep(step - 1)} className="btn-secondary text-sm px-5 py-2.5">← Back</button>
                    ) : <div />}
                    <button type="submit" className="btn-primary text-sm px-6 py-2.5">
                      {step < 3 ? <>Next <ChevronRight className="w-4 h-4" /></> : <><CheckCircle className="w-4 h-4" /> Confirm Booking</>}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Info sidebar */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-sm">Why Book With Us?</h3>
                {[
                  { icon: Clock, text: 'Confirmation within 2 hours' },
                  { icon: Shield, text: 'Secure & private' },
                  { icon: Heart, text: 'Expert specialist care' },
                  { icon: User, text: 'Personalized attention' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 py-2">
                    <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">{text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2 text-sm">Need Urgent Help?</h3>
                <p className="text-gray-400 text-xs mb-3">For emergencies, contact us immediately.</p>
                <a href="tel:+254719073000" className="block font-bold text-green-400 hover:text-green-300 text-sm mb-1">Emergency: 0719 073 000</a>
                <a href="tel:+254726990825" className="block font-bold text-green-400 hover:text-green-300 text-sm">General: +254 726 990 825</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
