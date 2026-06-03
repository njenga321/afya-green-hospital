import React from 'react';

export default function SectionHeader({ eyebrow, title, description, center = false, light = false, className = '' }) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${light ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
