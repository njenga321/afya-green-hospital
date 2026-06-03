import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, Heart, Award, Users, CheckCircle } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import SectionHeader from '../ui/SectionHeader';

const features = [
  {
    icon: Shield,
    title: 'Advanced Technology',
    description: 'State-of-the-art medical equipment and digital health systems for precise diagnosis and treatment.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Award,
    title: 'Expert Specialists',
    description: 'Over 40 board-certified specialists across 12+ departments, committed to clinical excellence.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Care',
    description: 'Round-the-clock emergency services with rapid response teams and intensive care units.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Every care plan is personalized, compassionate, and built around your unique health needs.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Zap,
    title: 'Rapid Results',
    description: 'Fast-track diagnostics and streamlined processes so you spend less time waiting and more time healing.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'Proudly serving Voi and the wider Taita Taveta region with accessible, affordable healthcare.',
    color: 'bg-teal-50 text-teal-600',
  },
];

const achievements = [
  'Over 25,000 patients treated annually',
  'Fully equipped Intensive Care Unit (ICU)',
  'Accredited diagnostic laboratory',
  'Modern theatre suites with advanced equipment',
  'Dedicated maternity wing',
  'Comprehensive insurance cover accepted',
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <FadeIn direction="right" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-56 shadow-xl">
                  <img src="/afya.jpg" alt="Hospital care" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-36 shadow-xl">
                  <img src="/afya2.jpg" alt="Medical team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden h-36 shadow-xl">
                  <img src="/motherandkid.jpg" alt="Patient care" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-56 shadow-xl">
                  <img src="/doctorandkid.jpg" alt="Pediatrics" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 bg-green-600 text-white rounded-2xl p-5 shadow-2xl"
            >
              <div className="text-3xl font-black">2018</div>
              <div className="text-green-200 text-xs font-medium">Est. Year</div>
              <div className="text-xs text-green-100 mt-1">Serving with pride</div>
            </motion.div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn direction="left">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Healthcare You Can Trust, Every Single Day"
              description="Since 2018, Afya Green Hospital has been the region's leading healthcare provider — blending world-class medicine with genuine compassion."
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Our Commitments</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {achievements.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
