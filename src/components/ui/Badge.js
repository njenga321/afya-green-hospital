import React from 'react';

const variants = {
  green: 'bg-green-100 text-green-700',
  red: 'bg-red-100 text-red-700',
  blue: 'bg-blue-100 text-blue-700',
  amber: 'bg-amber-100 text-amber-700',
  teal: 'bg-teal-100 text-teal-700',
  gray: 'bg-gray-100 text-gray-700',
  white: 'bg-white/20 text-white',
};

export default function Badge({ children, variant = 'green', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
