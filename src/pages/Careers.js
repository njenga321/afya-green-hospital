import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Users, Award, TrendingUp, Search } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/animations/FadeIn';
import SectionHeader from '../components/ui/SectionHeader';

const openings = [
  { id: 1, title: 'Registered Nurse — ICU', department: 'Nursing', type: 'Full-time', location: 'Voi', urgency: 'Urgent' },
  { id: 2, title: 'Clinical Officer — General Practice', department: 'General Medicine', type: 'Full-time', location: 'Voi', urgency: null },
  { id: 3, title: 'Medical Laboratory Technologist', department: 'Diagnostics', type: 'Full-time', location: 'Voi', urgency: null },
  { id: 4, title: 'Radiographer', department: 'Radiology', type: 'Full-time', location: 'Voi', urgency: 'Urgent' },
  { id: 5, title: 'Pharmacist', department: 'Pharmacy', type: 'Full-time', location: 'Voi', urgency: null },
  { id: 6, title: 'Health Records & Information Officer', department: 'Administration', type: 'Full-time', location: 'Voi', urgency: null },
  { id: 7, title: 'Physiotherapist', department: 'Rehabilitation', type: 'Part-time', location: 'Voi', urgency: null },
  { id: 8, title: 'Customer Experience Officer', department: 'Front Desk', type: 'Full-time', location: 'Voi', urgency: null },
];

const perks = [
  { icon: Heart, title: 'Comprehensive Benefits', description: 'Medical cover, pension scheme, and life insurance for you and your dependants.' },
  { icon: TrendingUp, title: 'Career Growth', description: 'Structured career development paths, mentorship, and continuing medical education.' },
  { icon: Users, title: 'Collaborative Culture', description: 'Join a team of passionate healthcare professionals in a supportive environment.' },
  { icon: Award, title: 'Staff Recognition', description: 'Regular recognition programs and performance bonuses for outstanding team members.' },
];

export default function Careers() {
  const [search, setSearch] = useState('');
  const filtered = openings.filter((o) => o.title.toLowerCase().includes(search.toLowerCase()) || o.department.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <section className="py-24 bg-gradient-to-br from-green-900 to-teal-800">
        <div className="container-custom">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-5">Careers</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 max-w-3xl leading-tight">Join Our Team of Healthcare Heroes</h1>
            <p className="text-green-100 text-lg max-w-2xl mb-8">Build a meaningful career at Afya Green Hospital. We're always looking for passionate, skilled healthcare professionals.</p>
          </FadeIn>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <perk.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{perk.title}</h4>
                    <p className="text-gray-500 text-sm">{perk.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeader eyebrow="Open Positions" title="Current Vacancies" description={`${openings.length} positions available across our departments.`} />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
              />
            </div>
          </FadeIn>

          <div className="space-y-4">
            {filtered.map((job, i) => (
              <FadeIn key={job.id} delay={i * 0.05}>
                <div className="group bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">{job.title}</h3>
                        {job.urgency && <span className="text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">{job.urgency}</span>}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/contact" className="btn-secondary text-sm px-5 py-2.5 flex-shrink-0">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 text-center">
            <p className="text-gray-500 text-sm">Don't see a suitable position?{' '}
              <Link to="/contact" className="text-green-600 font-semibold hover:text-green-700">Send us your CV anyway</Link> — we always welcome talented healthcare professionals.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
