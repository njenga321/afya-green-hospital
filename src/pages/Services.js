import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Stethoscope, Heart, Baby, Users, Scissors, FlaskConical,
  Brain, Bone, Sparkles, Pill, Ear, Eye, ArrowRight, Calendar,
  CheckCircle, Phone, ChevronDown
} from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/animations/FadeIn';
import { services } from '../data/services';

const iconMap = { Stethoscope, Heart, Baby, Users, Scissors, FlaskConical, Brain, Bone, Sparkles, Pill, Ear, Eye };
const colorMap = {
  green: { bg: 'bg-green-50', icon: 'bg-green-600', text: 'text-green-700', border: 'border-green-200' },
  red: { bg: 'bg-red-50', icon: 'bg-red-500', text: 'text-red-700', border: 'border-red-200' },
  blue: { bg: 'bg-blue-50', icon: 'bg-blue-500', text: 'text-blue-700', border: 'border-blue-200' },
  pink: { bg: 'bg-pink-50', icon: 'bg-pink-500', text: 'text-pink-700', border: 'border-pink-200' },
  purple: { bg: 'bg-purple-50', icon: 'bg-purple-600', text: 'text-purple-700', border: 'border-purple-200' },
  teal: { bg: 'bg-teal-50', icon: 'bg-teal-600', text: 'text-teal-700', border: 'border-teal-200' },
  indigo: { bg: 'bg-indigo-50', icon: 'bg-indigo-600', text: 'text-indigo-700', border: 'border-indigo-200' },
  orange: { bg: 'bg-orange-50', icon: 'bg-orange-500', text: 'text-orange-700', border: 'border-orange-200' },
  amber: { bg: 'bg-amber-50', icon: 'bg-amber-500', text: 'text-amber-700', border: 'border-amber-200' },
  emerald: { bg: 'bg-emerald-50', icon: 'bg-emerald-600', text: 'text-emerald-700', border: 'border-emerald-200' },
  cyan: { bg: 'bg-cyan-50', icon: 'bg-cyan-600', text: 'text-cyan-700', border: 'border-cyan-200' },
  sky: { bg: 'bg-sky-50', icon: 'bg-sky-600', text: 'text-sky-700', border: 'border-sky-200' },
};

function ServiceDetail({ service }) {
  const [openFaq, setOpenFaq] = useState(null);
  const Icon = iconMap[service.icon];
  const colors = colorMap[service.color];

  return (
    <main>
      <section className={`py-24 ${colors.bg}`}>
        <div className="container-custom">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <Link to="/services" className="text-sm text-gray-500 hover:text-green-700">Services</Link>
              <span className="text-gray-300">/</span>
              <span className="text-sm font-medium text-gray-900">{service.title}</span>
            </div>
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}>
                {Icon && <Icon className="w-8 h-8 text-white" />}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">{service.title}</h1>
                <p className="text-lg text-gray-600 max-w-2xl">{service.description}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <FadeIn>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 text-sm font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {service.faqs.length > 0 && (
                <FadeIn>
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="flex items-center justify-between w-full px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {faq.q}
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === i && (
                          <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </FadeIn>
              )}
            </div>

            <div className="space-y-6">
              <FadeIn>
                <div className={`rounded-2xl ${colors.bg} border ${colors.border} p-6`}>
                  <h3 className="font-bold text-gray-900 mb-4">Book This Service</h3>
                  <p className="text-gray-600 text-sm mb-5">Ready to schedule a consultation? Our team is here to help.</p>
                  <Link to={`/appointments?service=${service.id}`} className="btn-primary w-full justify-center mb-3">
                    <Calendar className="w-4 h-4" /> Book Appointment
                  </Link>
                  <a href="tel:+254726990825" className="btn-secondary w-full justify-center">
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="rounded-2xl bg-gray-900 text-white p-6">
                  <h3 className="font-bold mb-2">Emergency?</h3>
                  <p className="text-gray-400 text-sm mb-4">Our emergency team is available 24/7.</p>
                  <a href="tel:+254719073000" className="flex items-center gap-2 text-green-400 font-bold hover:text-green-300">
                    <Phone className="w-4 h-4" /> 0719 073 000
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

export default function Services() {
  const { serviceId } = useParams();
  const service = serviceId ? services.find((s) => s.id === serviceId) : null;

  if (service) return <ServiceDetail service={service} />;

  return (
    <main>
      <section className="py-24 bg-gradient-to-br from-green-900 to-teal-800">
        <div className="container-custom">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-5">Medical Services</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 max-w-3xl leading-tight">Comprehensive Care Across 12+ Specialties</h1>
            <p className="text-green-100 text-lg max-w-2xl">World-class medical services delivered by expert specialists using advanced technology — all under one roof.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" staggerDelay={0.05}>
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              const colors = colorMap[service.color];
              return (
                <StaggerItem key={service.id}>
                  <Link to={`/services/${service.id}`} className="group block card-premium p-6 h-full">
                    <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {Icon && <Icon className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className={`text-xs font-semibold ${colors.text} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black mb-4">Not sure which service you need?</h2>
            <p className="text-green-100 mb-8">Our general practitioners will guide you to the right specialist.</p>
            <Link to="/appointments" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg">
              <Calendar className="w-5 h-5" />
              Book a General Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
