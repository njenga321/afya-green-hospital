import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Calendar, Shield } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/animations/FadeIn';
import SectionHeader from '../components/ui/SectionHeader';

const packages = [
  {
    id: 'basic-wellness',
    name: 'Basic Wellness',
    price: 'KES 3,500',
    tagline: 'Essential health screening',
    color: 'border-gray-200',
    badge: null,
    tests: [
      'Full Blood Count', 'Blood Pressure Check', 'Blood Sugar (Fasting)',
      'BMI Assessment', 'Urine Analysis', 'Doctor Consultation',
    ],
  },
  {
    id: 'executive',
    name: 'Executive Checkup',
    price: 'KES 12,500',
    tagline: 'Comprehensive health assessment',
    color: 'border-green-500',
    badge: 'Most Popular',
    badgeColor: 'bg-green-600',
    tests: [
      'Full Blood Count', 'Comprehensive Metabolic Panel', 'Lipid Profile',
      'Thyroid Function Tests', 'Liver Function Tests', 'Kidney Function Tests',
      'ECG (12-lead)', 'Chest X-Ray', 'Abdominal Ultrasound',
      'PSA / Pap Smear', 'Doctor Consultation & Report',
    ],
  },
  {
    id: 'family',
    name: 'Family Wellness',
    price: 'KES 22,000',
    tagline: 'For a family of 4',
    color: 'border-blue-500',
    badge: 'Best Value',
    badgeColor: 'bg-blue-600',
    tests: [
      'Basic screening for all 4 members', 'Paediatric assessment',
      'Blood sugar & pressure for adults', 'BMI & nutritional counselling',
      'Immunization review (children)', 'Family doctor consultation',
    ],
  },
  {
    id: 'corporate',
    name: 'Corporate Health',
    price: 'From KES 2,500/person',
    tagline: 'Tailored for teams',
    color: 'border-purple-500',
    badge: 'For Business',
    badgeColor: 'bg-purple-600',
    tests: [
      'Occupational health assessment', 'Pre-employment screening',
      'Annual wellness checks', 'Mental health evaluation',
      'Ergonomics assessment', 'Dedicated HR health report',
    ],
  },
  {
    id: 'senior',
    name: 'Senior Citizen',
    price: 'KES 8,500',
    tagline: 'Designed for ages 60+',
    color: 'border-amber-500',
    badge: 'Specialist',
    badgeColor: 'bg-amber-500',
    tests: [
      'Full Blood Count', 'Bone Density Screening', 'Cardiac Screening',
      'Vision & Hearing Test', 'Prostate/Breast Cancer Screening',
      'Arthritis Panel', 'Geriatric Doctor Consultation',
    ],
  },
  {
    id: 'maternity',
    name: 'Maternity Package',
    price: 'KES 15,000',
    tagline: 'Complete pregnancy care',
    color: 'border-pink-500',
    badge: 'Comprehensive',
    badgeColor: 'bg-pink-500',
    tests: [
      '4 Antenatal visits', 'Obstetric Ultrasound x2', 'TORCH Screen',
      'Blood Grouping & Rhesus', 'HIV, Hepatitis B, Syphilis screen',
      'Nutritional counselling', 'Breastfeeding support',
    ],
  },
];

export default function HealthPackages() {
  return (
    <main>
      <section className="py-24 bg-gradient-to-br from-green-900 to-teal-800">
        <div className="container-custom">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-5">Health Packages</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 max-w-3xl leading-tight">Invest in Your Health Today</h1>
            <p className="text-green-100 text-lg max-w-2xl">Comprehensive health screening packages designed for individuals, families, and corporations — at transparent, affordable prices.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <FadeIn className="text-center mb-14">
            <SectionHeader
              eyebrow="Our Packages"
              title="Choose the Right Package for You"
              description="All packages include a consultation with a senior doctor and a detailed health report."
              center
            />
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.07}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.id}>
                <div className={`relative bg-white rounded-2xl border-2 ${pkg.color} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full`}>
                  {pkg.badge && (
                    <div className="absolute -top-3 left-6">
                      <span className={`${pkg.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>{pkg.badge}</span>
                    </div>
                  )}
                  <div className="p-7 flex-1">
                    <h3 className="text-xl font-black text-gray-900 mb-1">{pkg.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{pkg.tagline}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-black text-green-700">{pkg.price}</span>
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.tests.map((test) => (
                        <li key={test} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {test}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-7 pt-0">
                    <Link to={`/appointments?service=${pkg.id}`} className="btn-primary w-full justify-center">
                      <Calendar className="w-4 h-4" />
                      Book This Package
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-green-50 border border-green-200 rounded-2xl px-8 py-6">
              <Shield className="w-10 h-10 text-green-600 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="font-bold text-gray-900">Need a custom package?</div>
                <p className="text-sm text-gray-500">We offer tailored packages for corporations and groups. Contact us to discuss.</p>
              </div>
              <Link to="/contact" className="btn-secondary flex-shrink-0">
                Get Custom Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
