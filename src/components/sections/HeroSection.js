import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, AlertTriangle, ChevronLeft, ChevronRight, Shield, Award, Users, Star } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';

const slides = [
  {
    image: '/afya2.jpg',
    eyebrow: 'Excellence in Healthcare',
    headline: 'A Legacy of\nCompassionate Care',
    description: 'World-class medical expertise delivered with warmth and dignity. Your health, our mission — since 2018.',
  },
  {
    image: '/doctorandkid.jpg',
    eyebrow: 'Advanced Medicine',
    headline: 'Modern Diagnostics.\nBetter Outcomes.',
    description: 'State-of-the-art facilities and cutting-edge technology, right here in Voi. Precision healthcare for every patient.',
  },
  {
    image: '/motherandkid.jpg',
    eyebrow: 'Family Healthcare',
    headline: 'Healing Every\nLife Stage',
    description: 'From newborns to seniors, our specialists provide complete, continuous care for every member of your family.',
  },
];

const stats = [
  { value: 25000, suffix: '+', label: 'Patients Served', icon: Users },
  { value: 40, suffix: '+', label: 'Specialists', icon: Award },
  { value: 12, suffix: '+', label: 'Departments', icon: Shield },
  { value: 6, suffix: '+', label: 'Years of Service', icon: Star },
];

const floatingCards = [
  { icon: Shield, label: 'JCI Accredited', sub: 'Certified Excellence', color: 'bg-green-600' },
  { icon: Award, label: '4.9★ Rating', sub: '2,400+ reviews', color: 'bg-amber-500' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section
      className="relative h-[92vh] min-h-[600px] max-h-[900px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom w-full">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1.5 rounded-full mb-6">
                  {slides[current].eyebrow}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" style={{ whiteSpace: 'pre-line' }}>
                  {slides[current].headline}
                </h1>
                <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
                  {slides[current].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/appointments" className="btn-primary text-sm md:text-base px-7 py-3.5">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Link>
                  <Link to="/emergency" className="btn-ghost text-sm md:text-base px-7 py-3.5">
                    <AlertTriangle className="w-4 h-4" />
                    Emergency Care
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-10">
        {floatingCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 w-44 hover:bg-white/15 transition-colors"
            style={{ animation: `float ${6 + i}s ease-in-out infinite` }}
          >
            <div className={`w-9 h-9 ${card.color} rounded-xl flex items-center justify-center mb-3`}>
              <card.icon className="w-4.5 h-4.5 text-white" size={18} />
            </div>
            <div className="text-white font-bold text-sm">{card.label}</div>
            <div className="text-gray-300 text-xs">{card.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container-custom">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-t-3xl px-6 py-5 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-black text-white">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs md:text-sm text-gray-300 font-medium mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nav Controls */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-32 md:bottom-36 flex items-center gap-3 z-10">
        <button onClick={prev} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-green-400' : 'w-2 h-2 bg-white/40'}`}
            />
          ))}
        </div>
        <button onClick={next} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
