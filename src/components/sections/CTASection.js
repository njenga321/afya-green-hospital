import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight, AlertTriangle } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-teal-600 p-10 md:p-16 shadow-2xl">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.06),transparent)]" />

          <div className="relative z-10 max-w-3xl">
            <FadeIn>
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white/90 px-3 py-1.5 rounded-full mb-5">
                Your Health Matters
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-green-100 text-base md:text-lg mb-10 max-w-xl leading-relaxed">
                Book an appointment today with one of our expert specialists. Available Monday through Saturday, with emergency care around the clock.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/appointments" className="inline-flex items-center gap-2 px-7 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5">
                  <Calendar className="w-5 h-5" />
                  Book an Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+254726990825" className="inline-flex items-center gap-2 px-7 py-4 bg-green-800/50 text-white font-bold rounded-xl border-2 border-white/20 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Emergency pill */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-8 bottom-8 hidden md:block"
          >
            <Link
              to="/emergency"
              className="flex items-center gap-3 bg-red-600 text-white px-5 py-3 rounded-2xl shadow-xl hover:bg-red-700 transition-colors"
            >
              <div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide">Emergency?</div>
                <div className="text-sm font-semibold">0719 073 000</div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
