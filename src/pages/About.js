import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Award, Users, Target, Eye, Calendar, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/animations/FadeIn';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const values = [
  { icon: Heart, title: 'Compassion', description: 'We treat every patient with empathy, dignity, and genuine care.', color: 'text-red-500 bg-red-50' },
  { icon: Shield, title: 'Integrity', description: 'Honest, transparent healthcare built on trust and ethical practice.', color: 'text-blue-500 bg-blue-50' },
  { icon: Award, title: 'Excellence', description: 'Continuously raising the bar for clinical quality and patient outcomes.', color: 'text-amber-500 bg-amber-50' },
  { icon: Users, title: 'Community', description: 'Rooted in Voi, committed to the health of every family we serve.', color: 'text-green-500 bg-green-50' },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'Afya Green Hospital opens its doors in Kaloleni, Voi.' },
  { year: '2019', title: 'Maternity Wing', description: 'Dedicated maternity and postnatal care unit launched.' },
  { year: '2020', title: 'ICU Expansion', description: 'Full intensive care unit established to serve critical patients.' },
  { year: '2021', title: 'Specialist Clinics', description: 'Cardiology, neurology, and orthopedics departments added.' },
  { year: '2022', title: 'Telemedicine Launch', description: 'Remote consultation services introduced for patient convenience.' },
  { year: '2023', title: 'Lab Accreditation', description: 'Diagnostic laboratory achieves national accreditation standards.' },
  { year: '2024', title: 'Digital Health', description: 'Electronic health records and patient portal system launched.' },
];

const leadership = [
  { name: 'Dr. James Odhiambo', role: 'Medical Director', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face', bio: '20+ years in healthcare leadership across East Africa.' },
  { name: 'Dr. Priya Sharma', role: 'Chief of Medicine', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face', bio: 'Specialist in internal medicine and hospital administration.' },
  { name: 'Mr. David Maina', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', bio: 'Healthcare business strategist with 15 years\' experience.' },
  { name: 'Dr. Amina Yusuf', role: 'Head of Nursing', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=300&fit=crop&crop=face', bio: 'Dedicated to nursing excellence and patient safety standards.' },
];

const stats = [
  { value: 25000, suffix: '+', label: 'Patients Treated' },
  { value: 40, suffix: '+', label: 'Specialists' },
  { value: 12, suffix: '+', label: 'Departments' },
  { value: 6, suffix: '+', label: 'Years of Service' },
];

export default function About() {
  return (
    <main className="pt-0">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-900 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.05),transparent)]" />
        <div className="container-custom relative z-10">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-5">About Us</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-3xl leading-tight">
              More Than a Hospital. A <span className="text-green-300">Healthcare Partner.</span>
            </h1>
            <p className="text-green-100 text-lg max-w-2xl mb-8 leading-relaxed">
              Since 2018, Afya Green Hospital has been a beacon of modern healthcare excellence in Voi, Kenya — delivering world-class medical care with genuine compassion.
            </p>
            <Link to="/appointments" className="btn-primary">
              <Calendar className="w-4 h-4" />
              Book an Appointment
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-1">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-gray-500 text-sm font-medium">{s.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="/afya.jpg" alt="Hospital" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white">
                    <div className="font-bold text-lg">Kaloleni, Voi</div>
                    <div className="text-green-200 text-sm">Off Mombasa Road, Taita Taveta County</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <SectionHeader eyebrow="Our Story" title="Built on a Foundation of Care" className="mb-6" />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Located in the heart of Kaloleni in Voi, Afya Green Hospital was established in 2018 with a singular vision: to bring world-class healthcare to underserved communities in Taita Taveta County and beyond.</p>
                <p>What began as a small clinic has grown into a comprehensive healthcare institution offering over 12 specialist departments, a fully equipped ICU, modern maternity facilities, and accredited diagnostic services.</p>
                <p>Today, we are proud to be the most trusted healthcare provider in the region — serving over 25,000 patients annually and continuously investing in the latest medical technology and talent.</p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link to="/services" className="btn-primary">
                  Our Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/doctors" className="btn-secondary">Meet Our Doctors</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-14">
            <SectionHeader eyebrow="Our Foundation" title="Mission, Vision & Values" center />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn>
              <div className="rounded-2xl bg-gradient-to-br from-green-600 to-teal-600 p-8 text-white h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-green-100 leading-relaxed">
                  To deliver compassionate, accessible, and technologically advanced healthcare that improves the quality of life for every patient and community we serve — with excellence, integrity, and dignity at every step.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be East Africa's most trusted community hospital — a place where every patient feels seen, heard, and healed, and where innovation meets genuine human care.
                </p>
              </div>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <FadeIn className="text-center mb-14">
            <SectionHeader eyebrow="Our Journey" title="Milestones & Achievements" description="A history of continuous growth and commitment to better healthcare." center />
          </FadeIn>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.07}>
                  <div className={`flex items-start gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 inline-block max-w-xs md:max-w-sm">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wide">{m.year}</span>
                        <h4 className="font-bold text-gray-900 mt-1 mb-2">{m.title}</h4>
                        <p className="text-gray-500 text-sm">{m.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center shadow-lg z-10 relative">
                      {i + 1}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-14">
            <SectionHeader eyebrow="Leadership" title="Our Leadership Team" description="Experienced healthcare leaders driving excellence at Afya Green Hospital." center />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {leadership.map((person) => (
              <StaggerItem key={person.name}>
                <div className="group text-center card-premium p-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 shadow-lg">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=200&background=16a34a&color=fff`; }}
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{person.name}</h4>
                  <p className="text-green-600 text-xs font-semibold mb-2">{person.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{person.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-green-800 to-teal-800">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Ready to Experience the Difference?</h2>
            <p className="text-green-100 mb-8 max-w-xl mx-auto">Join the thousands of patients who trust Afya Green Hospital for their family's healthcare.</p>
            <Link to="/appointments" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all shadow-xl">
              <Calendar className="w-5 h-5" />
              Book Your First Appointment
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
