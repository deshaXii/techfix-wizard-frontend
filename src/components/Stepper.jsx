import React from 'react';
import { useI18n } from '../lib/i18n.jsx';

export function Stepper({ step }) {
  const { t } = useI18n();
  const items = [
    { n: 1, label: t('wizard.selectDevice') },
    { n: 2, label: t('wizard.selectRepair') },
    { n: 3, label: t('wizard.finish') }
  ];

  return (
    <div className="px-6 pb-2">
      <div className="flex items-center justify-center gap-0">
        {items.map((it, idx) => {
          const active = step === it.n;
          const done = step > it.n;
          return (
            <React.Fragment key={it.n}>
              <div className="flex flex-col items-center min-w-[110px]">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border transition ${done ? 'bg-primary text-white border-primary' : active ? 'bg-primary text-white border-primary' : 'bg-white text-slate-400 border-slate-200'}`}
                >
                  {it.n}
                </div>
                <div className={`mt-2 text-xs font-semibold ${active ? 'text-slate-700' : 'text-slate-400'}`}>{it.label}</div>
              </div>
              {idx < items.length - 1 ? (
                <div className="h-[2px] w-20 sm:w-28 bg-slate-200 rounded-full -mt-4">
                  <div className={`h-full rounded-full ${step > it.n ? 'bg-primary' : 'bg-transparent'}`} style={{ width: step > it.n ? '100%' : '0%' }} />
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// Allow both named and default imports.
export default Stepper;
