import React from 'react';
import { Icon, Flag } from './icons.jsx';
import { useI18n } from '../lib/i18n.jsx';

export function HeaderBar({ onBack, title, subtitle, right }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="px-6 py-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {onBack ? (
          <button
            className="w-11 h-11 rounded-xl2 bg-primary-50 text-primary border border-primary-100 flex items-center justify-center hover:bg-primary-100"
            onClick={onBack}
            aria-label="Back"
          >
            <Icon.ArrowLeft />
          </button>
        ) : (
          <div className="w-11 h-11" />
        )}

        <div>
          <div className="text-xl sm:text-2xl font-extrabold text-ink leading-tight">{title}</div>
          {subtitle ? <div className="text-sm text-primary font-semibold">{subtitle}</div> : null}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {right}
        <div className="relative">
          <button
            className="inline-flex items-center gap-2 rounded-xl2 bg-white border border-slate-200 px-3 py-2 shadow-soft hover:bg-slate-50"
            onClick={() => setOpen(v => !v)}
          >
            <Flag code={lang === 'nl' ? 'nl' : 'en'} />
            <span className="text-sm font-semibold text-slate-700 uppercase">{lang}</span>
            <span className="text-slate-400">▾</span>
          </button>

          {open ? (
            <div className="absolute right-0 mt-2 w-40 rounded-xl2 bg-white border border-slate-200 shadow-card overflow-hidden z-20">
              <button
                className={`w-full px-3 py-2 text-left text-sm font-semibold hover:bg-slate-50 flex items-center gap-2 ${lang === 'en' ? 'text-primary' : 'text-slate-700'}`}
                onClick={() => {
                  setLang('en');
                  setOpen(false);
                }}
              >
                <Flag code="en" /> English
              </button>
              <button
                className={`w-full px-3 py-2 text-left text-sm font-semibold hover:bg-slate-50 flex items-center gap-2 ${lang === 'nl' ? 'text-primary' : 'text-slate-700'}`}
                onClick={() => {
                  setLang('nl');
                  setOpen(false);
                }}
              >
                <Flag code="nl" /> Nederlands
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
