import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { partners } from '../../data/partners';

export default function PartnersSection() {
  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="section-padding bg-gray-50">
      <div className="container-custom">
        <FadeIn className="mb-12 text-center">
          <SectionHeader
            eyebrow="Insurance & Partners"
            title="Accepted Insurance Partners"
            description="We work with leading insurance providers to ensure you get the care you need without financial worry."
            center
          />
        </FadeIn>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: '-50%' }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6 w-max"
          >
            {doubled.map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-36 h-20 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-4 hover:shadow-md hover:border-green-200 transition-all duration-300 group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-gray-400 text-center">${partner.name}</span>`;
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <FadeIn className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Don't see your insurer?{' '}
            <a href="/contact" className="text-green-600 font-semibold hover:text-green-700">Contact us</a> — we accept most major providers.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
