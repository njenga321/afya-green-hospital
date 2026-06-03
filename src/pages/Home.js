import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import DoctorsSection from '../components/sections/DoctorsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PartnersSection from '../components/sections/PartnersSection';
import CTASection from '../components/sections/CTASection';
import HealthTipsSection from '../components/sections/HealthTipsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <HealthTipsSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}
