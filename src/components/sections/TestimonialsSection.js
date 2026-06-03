import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const getVisible = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section className="section-padding bg-gradient-to-br from-green-900 via-green-800 to-teal-900 overflow-hidden">
      <div className="container-custom">
        <FadeIn>
          <SectionHeader
            eyebrow="Patient Stories"
            title="What Our Patients Say"
            description="Real experiences from the people who matter most — our patients and their families."
            center
            light
            className="mb-14"
          />
        </FadeIn>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {getVisible().map((testimonial, i) => (
              <motion.div
                key={`${testimonial.id}-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 relative ${i === 1 ? 'scale-105 bg-white/15' : ''}`}
              >
                <Quote className="w-8 h-8 text-green-300/50 mb-4" />
                <p className="text-white/85 text-sm leading-relaxed mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-green-300 text-xs">{testimonial.location}</div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <Quote className="w-8 h-8 text-green-300/50 mb-4" />
                <p className="text-white/85 text-sm leading-relaxed mb-6">{testimonials[current].text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonials[current].name}</div>
                    <div className="text-green-300 text-xs">{testimonials[current].location}</div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonials[current].rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
