import React from 'react';

const variants = {
  primary: 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-500/30',
  secondary: 'bg-white text-green-700 border-2 border-green-600 hover:bg-green-50',
  ghost: 'text-white border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm',
  gold: 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg',
  danger: 'bg-red-600 text-white hover:bg-red-700 shadow-lg',
  outline: 'bg-transparent text-green-700 border-2 border-green-200 hover:border-green-600 hover:bg-green-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
  xl: 'px-10 py-5 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  as: Tag = 'button',
  href,
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer';

  const cls = [base, variants[variant], sizes[size], fullWidth ? 'w-full' : '', className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {icon && icon}
        {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : children}
        {iconRight && iconRight}
      </a>
    );
  }

  return (
    <Tag type={type} className={cls} onClick={onClick} disabled={disabled || loading} {...props}>
      {icon && icon}
      {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : children}
      {iconRight && iconRight}
    </Tag>
  );
}
