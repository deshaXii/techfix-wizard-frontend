import React from 'react';

export function Badge({ className = '', tone = 'blue', children }) {
  const tones = {
    blue: 'bg-primary-50 text-primary border-primary-100',
    gray: 'bg-slate-50 text-slate-600 border-slate-200',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100'
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold border ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
