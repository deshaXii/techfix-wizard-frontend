import React from 'react';

export function Toggle({ checked, onChange, label }) {
  return (
    <label className="inline-flex items-center gap-3 select-none cursor-pointer">
      {label ? <span className="text-sm text-slate-600">{label}</span> : null}
      <span
        className={`w-11 h-6 rounded-full transition flex items-center ${checked ? 'bg-emerald-500' : 'bg-slate-300'}`}
        onClick={() => onChange?.(!checked)}
        role="switch"
        aria-checked={checked}
      >
        <span className={`w-5 h-5 bg-white rounded-full shadow-soft transition ml-0.5 ${checked ? 'translate-x-5' : ''}`} />
      </span>
    </label>
  );
}
