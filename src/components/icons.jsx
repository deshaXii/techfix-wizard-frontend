import React from 'react';

export const Icon = {
  ArrowLeft: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Search: (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Check: (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Phone: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M10 19h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Tablet: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M11.25 18h1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Laptop: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 6h16v10H4V6Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M2 18h20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Lightning: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13 2L3 14h8l-1 8 11-14h-8l0-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  ),
  Battery: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M17 7H3v10h14V7Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M21 10v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Droplet: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13Z" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  ),
  Wrench: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 12l-2-2 2.7-3.7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  ),
  X: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  MapPin: (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  ),
  Info: (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M12 10v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M12 7h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
    </svg>
  )
};

export function Flag({ code }) {
  if (code === 'nl') {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full overflow-hidden border border-slate-200">
        <span className="w-full h-full flex flex-col">
          <span className="flex-1 bg-[#AE1C28]" />
          <span className="flex-1 bg-white" />
          <span className="flex-1 bg-[#21468B]" />
        </span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full overflow-hidden border border-slate-200">
      <span className="w-full h-full bg-[#B22234] relative">
        <span className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0 7.7%, rgba(178,34,52,1) 7.7% 15.4%, rgba(255,255,255,1) 15.4% 23.1%, rgba(178,34,52,1) 23.1% 30.8%, rgba(255,255,255,1) 30.8% 38.5%, rgba(178,34,52,1) 38.5% 46.2%, rgba(255,255,255,1) 46.2% 53.9%, rgba(178,34,52,1) 53.9% 61.6%, rgba(255,255,255,1) 61.6% 69.3%, rgba(178,34,52,1) 69.3% 77%, rgba(255,255,255,1) 77% 84.7%, rgba(178,34,52,1) 84.7% 92.4%, rgba(255,255,255,1) 92.4% 100%)' }} />
        <span className="absolute left-0 top-0 w-[55%] h-[55%] bg-[#3C3B6E]" />
      </span>
    </span>
  );
}

export function IconMenu({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconUser({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21a8 8 0 10-16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconPalette({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3C6.477 3 2 7.253 2 12.5 2 17.747 6.477 22 12 22h2a2 2 0 002-2c0-1.105-.895-2-2-2h-1.5a1.5 1.5 0 01-1.5-1.5c0-.828.672-1.5 1.5-1.5H15c3.866 0 7-2.91 7-6.5S18.866 3 15 3h-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" />
      <circle cx="9.5" cy="7.5" r="1" fill="currentColor" />
      <circle cx="13.5" cy="7" r="1" fill="currentColor" />
      <circle cx="15.8" cy="10.2" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconChevronDown({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Back arrow used in the navbar when inside the wizard.
// Navbar imports it by name (IconBackArrow), so we keep this named export.
export function IconBackArrow({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
