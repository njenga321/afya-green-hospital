import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/animations/FadeIn';
import SectionHeader from '../components/ui/SectionHeader';

const schema = z.object({
  firstName: z.string().min(2, 'Required'),
  lastName: z.string().min(2, 'Required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter a message'),
});

const departments = [
  { name: 'General Enquiries', phone: '+254 726 990 825', email: 'info@afyagreenhospital.org' },
  { name: 'Emergency', phone: '0719 073 000', email: 'emergency@afyagreenhospital.org' },
  { name: 'Appointments', phone: '+254 726 990 825', email: 'appointments@afyagreenhospital.org' },
  { name: 'Billing', phone: '+254 726 990 826', email: 'billing@afyagreenhospital.org' },
];

const hours = [
  { day: 'Monday – Thursday', time: '9:00 AM – 5:00 PM' },
  { day: 'Friday', time: '9:00 AM – 4:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 1:30 PM' },
  { day: 'Sunday', time: '9:30 AM – 12:00 PM' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = () => setSent(true);

  return (
    <main>
      <section className="py-24 bg-gradient-to-br from-green-900 to-teal-800">
        <div className="container-custom">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-5">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 max-w-2xl leading-tight">Get in Touch. We're Here.</h1>
            <p className="text-green-100 text-lg max-w-xl">Have a question, need an appointment, or want to find out more? We'd love to hear from you.</p>
          </FadeIn>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: 'Call Us', value: '+254 726 990 825', href: 'tel:+254726990825', color: 'bg-green-600' },
              { icon: Mail, title: 'Email Us', value: 'info@afyagreenhospital.org', href: 'mailto:info@afyagreenhospital.org', color: 'bg-blue-600' },
              { icon: MapPin, title: 'Visit Us', value: 'Off Mombasa Road, Kaloleni, Voi', href: '#', color: 'bg-teal-600' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <a href={c.href} className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <c.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-0.5">{c.title}</div>
                    <div className="text-gray-500 text-sm group-hover:text-green-700 transition-colors">{c.value}</div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <SectionHeader eyebrow="Send a Message" title="We'll Get Back to You" description="Fill in the form and our team will respond within 24 hours." className="mb-8" />

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border border-gray-100 p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {['firstName', 'lastName'].map((field) => (
                        <div key={field}>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                          <input {...register(field)} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder={field === 'firstName' ? 'John' : 'Doe'} />
                          {errors[field] && <p className="mt-1 text-xs text-red-500">{errors[field].message}</p>}
                        </div>
                      ))}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                        <input {...register('email')} type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone (optional)</label>
                        <input {...register('phone')} type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="+254 7XX XXX XXX" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                      <input {...register('subject')} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="How can we help?" />
                      {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                      <textarea {...register('message')} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" placeholder="Tell us more..." />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3.5">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    Opening Hours
                  </h3>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span className="text-gray-500">{h.day}</span>
                        <span className="font-semibold text-gray-900">{h.time}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm pt-2 border-t border-gray-100">
                      <span className="text-red-600 font-semibold">Emergency</span>
                      <span className="font-semibold text-red-600">24/7</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    Department Contacts
                  </h3>
                  <div className="space-y-4">
                    {departments.map((dept) => (
                      <div key={dept.name} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="font-semibold text-gray-900 text-sm mb-1">{dept.name}</div>
                        <a href={`tel:${dept.phone}`} className="text-xs text-green-600 hover:text-green-700 block">{dept.phone}</a>
                        <a href={`mailto:${dept.email}`} className="text-xs text-gray-500 hover:text-green-700">{dept.email}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-gray-900 rounded-2xl p-6 text-white">
                  <MapPin className="w-6 h-6 text-green-400 mb-3" />
                  <h3 className="font-bold mb-2">Our Location</h3>
                  <p className="text-gray-400 text-sm mb-3">Off Mombasa Road, Kaloleni, Voi, Taita Taveta County, Kenya</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-green-400 hover:text-green-300">
                    Open in Google Maps →
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
