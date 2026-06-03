import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope, Heart, Baby, Users, Scissors, FlaskConical,
  Brain, Bone, Sparkles, Pill, Ear, Eye, ArrowRight
} from 'lucide-react';
import { StaggerChildren, StaggerItem, FadeIn } from '../animations/FadeIn';
import SectionHeader from '../ui/SectionHeader';

const iconMap = { Stethoscope, Heart, Baby, Users, Scissors, FlaskConical, Brain, Bone, Sparkles, Pill, Ear, Eye };

const colorMap = {
  green: { bg: 'bg-green-50', icon: 'bg-green-600', text: 'text-green-700', hover: 'group-hover:bg-green-600' },
  red: { bg: 'bg-red-50', icon: 'bg-red-500', text: 'text-red-700', hover: 'group-hover:bg-red-500' },
  blue: { bg: 'bg-blue-50', icon: 'bg-blue-500', text: 'text-blue-700', hover: 'group-hover:bg-blue-500' },
  pink: { bg: 'bg-pink-50', icon: 'bg-pink-500', text: 'text-pink-700', hover: 'group-hover:bg-pink-500' },
  purple: { bg: 'bg-purple-50', icon: 'bg-purple-600', text: 'text-purple-700', hover: 'group-hover:bg-purple-600' },
  teal: { bg: 'bg-teal-50', icon: 'bg-teal-600', text: 'text-teal-700', hover: 'group-hover:bg-teal-600' },
  indigo: { bg: 'bg-indigo-50', icon: 'bg-indigo-600', text: 'text-indigo-700', hover: 'group-hover:bg-indigo-600' },
  orange: { bg: 'bg-orange-50', icon: 'bg-orange-500', text: 'text-orange-700', hover: 'group-hover:bg-orange-500' },
  amber: { bg: 'bg-amber-50', icon: 'bg-amber-500', text: 'text-amber-700', hover: 'group-hover:bg-amber-500' },
  emerald: { bg: 'bg-emerald-50', icon: 'bg-emerald-600', text: 'text-emerald-700', hover: 'group-hover:bg-emerald-600' },
  cyan: { bg: 'bg-cyan-50', icon: 'bg-cyan-600', text: 'text-cyan-700', hover: 'group-hover:bg-cyan-600' },
  sky: { bg: 'bg-sky-50', icon: 'bg-sky-600', text: 'text-sky-700', hover: 'group-hover:bg-sky-600' },
};

const featuredServices = [
  { id: 'general-medicine', title: 'General Medicine', icon: 'Stethoscope', color: 'green', description: 'Comprehensive primary care for all adult conditions.' },
  { id: 'cardiology', title: 'Cardiology', icon: 'Heart', color: 'red', description: 'Advanced heart care with state-of-the-art diagnostics.' },
  { id: 'pediatrics', title: 'Pediatrics', icon: 'Baby', color: 'blue', description: 'Dedicated child healthcare from newborns to teens.' },
  { id: 'maternity', title: 'Maternity & OB-GYN', icon: 'Users', color: 'pink', description: 'Full-spectrum women\'s health and safe delivery care.' },
  { id: 'surgery', title: 'Surgery', icon: 'Scissors', color: 'purple', description: 'Modern surgical suites with expert surgeons.' },
  { id: 'diagnostics', title: 'Diagnostics & Lab', icon: 'FlaskConical', color: 'teal', description: 'Rapid, accurate lab and imaging services.' },
  { id: 'neurology', title: 'Neurology', icon: 'Brain', color: 'indigo', description: 'Expert care for brain and nervous system disorders.' },
  { id: 'orthopedics', title: 'Orthopedics', icon: 'Bone', color: 'orange', description: 'Bone, joint, and musculoskeletal care for all ages.' },
  { id: 'pharmacy', title: 'Pharmacy', icon: 'Pill', color: 'emerald', description: '24/7 in-house pharmacy with full medication range.' },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="What We Offer"
            title="Comprehensive Medical Services"
            description="From routine check-ups to complex surgical procedures, our multidisciplinary team delivers exceptional care across 12+ specialties."
          />
          <Link to="/services" className="btn-secondary flex-shrink-0 self-start md:self-end">
            All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
          {featuredServices.map((service) => {
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
  );
}
