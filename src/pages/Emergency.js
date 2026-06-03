import React from 'react';
import { motion } from 'framer-motion';
import { Phone, AlertTriangle, Heart, Clock, MapPin, ChevronRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/animations/FadeIn';
import SectionHeader from '../components/ui/SectionHeader';

const emergencyNumbers = [
  { label: 'Emergency Line', number: '0719 073 000', primary: true },
  { label: 'Ambulance', number: '0732 163 000', primary: true },
  { label: 'Emergency Dept Direct', number: '0719 073 051', primary: false },
  { label: 'General Enquiries', number: '+254 726 990 825', primary: false },
];

const emergencyServices = [
  { icon: Heart, title: 'Cardiac Emergency', description: 'Immediate response for chest pain, heart attack, and cardiac arrest.', color: 'bg-red-50 text-red-600' },
  { icon: AlertTriangle, title: 'Trauma & Accidents', description: 'Rapid trauma care for road accidents and serious injuries.', color: 'bg-orange-50 text-orange-600' },
  { icon: Heart, title: 'Stroke Response', description: 'Fast-track stroke protocol — every minute matters.', color: 'bg-purple-50 text-purple-600' },
  { icon: Heart, title: 'Obstetric Emergency', description: '24/7 maternity emergency team for complications during pregnancy.', color: 'bg-pink-50 text-pink-600' },
  { icon: Heart, title: 'Pediatric Emergency', description: 'Dedicated emergency care for infants, children, and adolescents.', color: 'bg-blue-50 text-blue-600' },
  { icon: Heart, title: 'Respiratory Distress', description: 'Immediate treatment for breathing difficulties and respiratory failure.', color: 'bg-teal-50 text-teal-600' },
];

const steps = [
  { step: '1', title: 'Call Us Immediately', desc: 'Dial 0719 073 000. Our team will guide you while help is on the way.' },
  { step: '2', title: 'Share Your Location', desc: 'Give us your exact location so we can dispatch our ambulance immediately.' },
  { step: '3', title: 'Stay Calm & Stay on Line', desc: 'Our trained responders will give first-aid instructions over the phone.' },
  { step: '4', title: 'We Come to You', desc: 'Our ambulance team arrives rapidly, fully equipped to stabilize and transport.' },
];

export default function Emergency() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,100,100,0.3),transparent)]" />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute right-20 top-10 w-64 h-64 bg-red-500 rounded-full"
        />
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-200" />
              <span className="text-red-200 font-bold uppercase tracking-widest text-xs">Emergency Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Emergency Care.<br />
              <span className="text-red-200">24 Hours. 7 Days.</span>
            </h1>
            <p className="text-red-100 text-lg mb-10 max-w-xl">
              Our emergency team is always ready. Call us immediately — we respond fast, every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+254719073000" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-700 font-black rounded-xl hover:bg-red-50 transition-all shadow-xl text-lg">
                <Phone className="w-6 h-6" />
                0719 073 000
              </a>
              <a href="tel:+254732163000" className="inline-flex items-center gap-3 px-8 py-4 bg-red-800 text-white font-bold rounded-xl hover:bg-red-900 transition-all border border-red-600">
                <Phone className="w-5 h-5" />
                Ambulance: 0732 163 000
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyNumbers.map((en, i) => (
              <FadeIn key={en.label} delay={i * 0.08}>
                <a
                  href={`tel:${en.number.replace(/\s/g, '')}`}
                  className={`block rounded-2xl p-5 transition-all hover:-translate-y-1 ${en.primary ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 'bg-gray-50 text-gray-900 border border-gray-200 hover:border-red-300'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${en.primary ? 'bg-white/20' : 'bg-red-50'}`}>
                    <Phone className={`w-5 h-5 ${en.primary ? 'text-white' : 'text-red-600'}`} />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${en.primary ? 'text-red-100' : 'text-gray-500'}`}>{en.label}</div>
                  <div className={`text-xl font-black ${en.primary ? 'text-white' : 'text-gray-900'}`}>{en.number}</div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <FadeIn className="text-center mb-14">
            <SectionHeader eyebrow="Emergency Services" title="What Our Emergency Team Handles" description="Fully equipped to manage all medical emergencies around the clock." center />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {emergencyServices.map((service) => (
              <StaggerItem key={service.title}>
                <div className={`card-premium p-6 h-full`}>
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* What to Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-14">
            <SectionHeader eyebrow="In An Emergency" title="What To Do When You Call Us" description="Follow these steps to get the fastest possible help." center />
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="flex gap-5 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0">{s.step}</div>
                    {i < steps.length - 1 && <div className="flex-1 w-0.5 bg-red-200 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionHeader eyebrow="Find Us" title="We're Here for You" description="Located on Off Mombasa Road in Kaloleni, Voi. Our A&E entrance is open 24/7." light />
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Our Location</div>
                    <div className="text-gray-400 text-sm">Off Mombasa Road, Kaloleni, Voi, Kenya</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Emergency Hours</div>
                    <div className="text-gray-400 text-sm">24 Hours · 7 Days a Week · 365 Days a Year</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="font-bold text-white text-xl mb-6">Quick Action</h3>
                <div className="space-y-3">
                  <a href="tel:+254719073000" className="flex items-center justify-between w-full bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-xl font-bold transition-colors">
                    <span className="flex items-center gap-3"><Phone className="w-5 h-5" /> Call Emergency</span>
                    <ChevronRight className="w-5 h-5" />
                  </a>
                  <a href="tel:+254732163000" className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-600 text-white px-5 py-4 rounded-xl font-semibold transition-colors">
                    <span className="flex items-center gap-3"><Phone className="w-5 h-5" /> Request Ambulance</span>
                    <ChevronRight className="w-5 h-5" />
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-600 text-white px-5 py-4 rounded-xl font-semibold transition-colors">
                    <span className="flex items-center gap-3"><MapPin className="w-5 h-5" /> Get Directions</span>
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
