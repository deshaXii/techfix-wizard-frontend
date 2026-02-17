import React from 'react';

export function Button({ variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl2 font-semibold transition active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-primary text-white shadow-soft hover:bg-primary-600',
    secondary: 'bg-primary-50 text-primary border border-primary-100 hover:bg-primary-100',
    ghost: 'bg-transparent text-primary hover:bg-primary-50'
  };
  const sizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-5 text-sm',
    lg: 'h-14 px-6 text-base'
  };
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
