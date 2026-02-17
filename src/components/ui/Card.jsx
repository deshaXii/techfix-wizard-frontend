import React from 'react';

export function Card({ className = '', ...props }) {
  return (
    <div
      className={`rounded-xl2 bg-white border border-slate-100 shadow-soft ${className}`}
      {...props}
    />
  );
}
