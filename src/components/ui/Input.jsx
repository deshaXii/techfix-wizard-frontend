import React from 'react';

export function Input({ className = '', icon, ...props }) {
  return (
    <div className={`relative ${className}`}>
      {icon ? (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>
      ) : null}
      <input
        className={`w-full h-12 rounded-xl2 bg-white border border-slate-200 px-4 ${icon ? 'pl-12' : ''} text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 outline-none`}
        {...props}
      />
    </div>
  );
}
