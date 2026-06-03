import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Calendar, Shield, Clock, Monitor, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/animations/FadeIn';
import SectionHeader from '../components/ui/SectionHeader';

const features = [
  { icon: Video, title: 'HD Video Consultations', description: 'Crystal-clear video calls with specialists from the comfort of your home.', color: 'bg-blue-50 text-blue-600' },
  { icon: Shield, title: 'Secure & Private', description: 'All consultations are encrypted and fully HIPAA-compliant for your privacy.', color: 'bg-green-50 text-green-600' },
  { icon: Clock, title: 'Flexible Scheduling', description: 'Book consultations at times that suit you, including evenings and weekends.', color: 'bg-amber-50 text-amber-600' },
  { icon: Monitor, title: 'Cross-Device', description: 'Join from your phone, tablet, or computer — no special software needed.', color: 'bg-purple-50 text-purple-600' },
];

const steps = [
  { step: '01', title: 'Book Online', description: 'Choose your specialist and pick a convenient date and time through our portal.' },
  { step: '02', title: 'Get Confirmation', description: 'Receive a secure consultation link via email and SMS within 2 hours.' },
  { step: '03', title: 'Join Your Session', description: 'Click your link at the scheduled time — no downloads or setup required.' },
  { step: '04', title: 'Get Your Care Plan', description: 'Receive your prescription, referral, or care plan digitally after the session.' },
];

export default function Telemedicine() {
  return (
    <main>
      <section className="py-24 bg-gradient-to-br from-blue-900 via-green-900 to-teal-800 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-5">Telemedicine</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                See a Doctor From Anywhere
              </h1>
              <p className="text-green-100 text-lg mb-8 max-w-lg">
                Expert medical consultations via secure video call. No travel required. Same expert care, delivered to your screen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointments?type=telemedicine" className="btn-primary">
                  <Calendar className="w-4 h-4" />
                  Book Video Consultation
                </Link>
                <a href="tel:+254726990825" className="btn-ghost">
                  <Phone className="w-4 h-4" />
                  Call Us First
                </a>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Video className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-white font-bold">Video Consultation</div>
                      <div className="text-green-400 text-sm">Ready to connect</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">ON</div>
                      <div>
                        <div className="text-white text-sm font-semibold">Dr. Amara Osei</div>
                        <div className="text-green-400 text-xs">Cardiologist · Connected</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Video className="w-4 h-4 text-white" /></div>
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"><Phone className="w-4 h-4 text-white" /></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse-slow">● LIVE</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-14">
            <SectionHeader eyebrow="Why Telemedicine" title="Healthcare Without Boundaries" description="Expert doctors, no waiting room, no travel — just quality care wherever you are." center />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="text-center p-6 card-premium h-full">
                  <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mx-auto mb-4`}>
                    <f.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <FadeIn className="text-center mb-14">
            <SectionHeader eyebrow="How It Works" title="4 Simple Steps to Your Consultation" center />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-black text-green-100 mb-3">{s.step}</div>
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                  <p className="text-gray-500 text-sm">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-green-700 to-teal-700 text-white">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-5">Ready for Your First Virtual Consultation?</h2>
            <p className="text-green-100 mb-8 max-w-lg mx-auto">Experienced specialists available 6 days a week. Book today and see a doctor within 24 hours.</p>
            <Link to="/appointments?type=telemedicine" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all shadow-xl">
              <Video className="w-5 h-5" />
              Book Video Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
