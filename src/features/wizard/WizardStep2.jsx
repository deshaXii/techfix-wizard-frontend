import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper } from '../../components/Stepper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Button } from '../../components/ui/Button.jsx';
import { Badge } from '../../components/ui/Badge.jsx';
import { Icon } from '../../components/icons.jsx';
import { api, formatEUR } from '../../lib/api.js';
import { useI18n } from '../../lib/i18n.jsx';
import { useWizard } from './WizardState.jsx';

const COLOR_OPTIONS = [
  { key: 'black', swatch: '#111827', labelKey: 'colors.black' },
  { key: 'lavender', swatch: '#EFE6F6', labelKey: 'colors.lavender' },
  { key: 'mistBlue', swatch: '#BAC8D9', labelKey: 'colors.mistBlue' },
  { key: 'sage', swatch: '#B8C2A4', labelKey: 'colors.sage' },
  { key: 'white', swatch: '#FFFFFF', labelKey: 'colors.white' }
];

function RepairIcon({ repairKey }) {
  const k = String(repairKey || '').toUpperCase();
  if (k.includes('BATTERY')) return <Icon.Battery className="text-slate-400" />;
  if (k.includes('WATER')) return <Icon.Droplet className="text-slate-400" />;
  if (k.includes('CHARG')) return <Icon.Lightning className="text-slate-400" />;
  return <Icon.Wrench className="text-slate-400" />;
}

function priceLabel(t, pricingType, priceCents) {
  if (pricingType === 'FREE') return t('common.free');
  if (pricingType === 'REQUEST') return t('common.priceOnRequest');
  if (pricingType === 'STARTING_AT') return `${t('common.startingAt')} ${formatEUR(priceCents)}`;
  return formatEUR(priceCents);
}

function computeDiscount(subtotalCents, selectedCount) {
  if (selectedCount >= 2) return Math.min(1500, subtotalCents);
  return 0;
}

export function WizardStep2() {
  const { t } = useI18n();
  const nav = useNavigate();
  const { model, repairs, toggleRepair, color, setColor, setRepairs } = useWizard();

  const [catalogRepairs, setCatalogRepairs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!model?._id) {
      nav('/wizard');
      return;
    }
    let alive = true;
    setLoading(true);
    api
      .repairs(model._id)
      .then((d) => alive && setCatalogRepairs(d.repairs || []))
      .catch(() => alive && setCatalogRepairs([]))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [model, nav]);

  const subtotalCents = repairs.reduce((sum, r) => sum + (r.priceCents || 0), 0);
  const discountCents = computeDiscount(subtotalCents, repairs.length);
  const totalCents = subtotalCents - discountCents;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">{t('wizard.step2')}</div>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-ink">{t('wizard.selectRepairTitle')}</h1>
        {model ? (
          <p className="mt-1 text-sm text-ink/60">{model.brand} • {model.name}</p>
        ) : null}
      </div>

      <Stepper step={2} />

      <div className="mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          {/* Left */}
          <div>
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <div className="text-sm font-semibold text-slate-700">{t('wizard.selectColor')}</div>
              </div>

              <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-3">
                {COLOR_OPTIONS.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setColor(c.key)}
                    className={`rounded-xl2 border bg-white p-3 text-left shadow-soft transition ${color === c.key ? 'border-primary ring-4 ring-primary/10' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg border border-slate-200" style={{ background: c.swatch }} />
                      <div className="text-[11px] font-extrabold tracking-wide text-slate-500">{t(c.labelKey)}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <div className="text-sm font-semibold text-slate-700">{t('wizard.selectRepairLabel')}</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="rounded-xl2 bg-white border border-slate-100 shadow-soft p-5 animate-pulse">
                      <div className="h-4 w-1/2 bg-slate-100 rounded" />
                      <div className="mt-3 h-3 w-3/4 bg-slate-100 rounded" />
                      <div className="mt-2 h-3 w-2/3 bg-slate-100 rounded" />
                    </div>
                  ))
                ) : (
                  catalogRepairs.map((r) => {
                    const selected = repairs.some((x) => x._id === r._id);
                    return (
                      <button
                        key={r._id}
                        onClick={() => toggleRepair(r)}
                        className={`text-left rounded-xl2 bg-white border shadow-soft p-5 transition hover:shadow-card ${selected ? 'border-primary ring-4 ring-primary/10' : 'border-slate-100 hover:border-slate-200'}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              <RepairIcon repairKey={r.key} />
                            </div>
                            <div>
                              <div className="text-sm font-extrabold text-slate-800">{r.title}</div>
                              <div className="text-xs font-bold text-primary mt-1">{r.durationMinutes} MINUTES</div>
                            </div>
                          </div>
                          <Badge tone="blue" className="shrink-0">
                            {priceLabel(t, r.pricingType, r.priceCents)}
                          </Badge>
                        </div>
                        <div className="mt-3 text-sm text-slate-500 leading-relaxed">
                          {r.description}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 sm:hidden">
                <div className="text-sm font-semibold text-slate-600">{t('common.total')}</div>
                <div className="text-2xl font-extrabold text-slate-800">{formatEUR(totalCents)}</div>
              </div>

              {/* Mobile sticky action */}
              <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40">
                <div className="max-w-[1320px] mx-auto px-4 pb-4">
                  <div className="bg-white border border-slate-200 shadow-card rounded-2xl p-3 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-slate-500">{t('common.total')}</div>
                      <div className="text-lg font-extrabold text-slate-800">{formatEUR(totalCents)}</div>
                    </div>
                    <Button className="flex-1" onClick={() => nav('/wizard/finish')} disabled={!repairs.length}>
                      {t('common.nextStep')}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right summary */}
          <div className="hidden sm:block">
            <div className="sticky top-6">
              <Card className="p-6">
                <div className="text-2xl font-extrabold text-primary">{t('wizard.repairList')}</div>
                <div className="mt-2 text-sm text-slate-600">
                  {model?.brand} {model?.name} {color ? `• ${t(`colors.${color}`)}` : ''}
                </div>

                <div className="mt-5 space-y-3">
                  {repairs.length ? (
                    repairs.map((r) => (
                      <div key={r._id} className="flex items-start justify-between gap-3">
                        <button
                          className="mt-1 text-slate-300 hover:text-slate-500"
                          onClick={() => toggleRepair(r)}
                          aria-label="remove"
                        >
                          <Icon.X />
                        </button>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-slate-700">{r.title}</div>
                          <div className="text-xs text-slate-400">{r.pricingType === 'REQUEST' ? t('common.priceOnRequest') : r.pricingType === 'FREE' ? t('common.free') : ''}</div>
                        </div>
                        <div className="min-w-[64px] text-right">
                          <div className="inline-flex items-center justify-center min-w-[54px] h-8 px-3 rounded-lg bg-primary text-white font-extrabold text-sm">
                            {r.pricingType === 'REQUEST' ? '—' : formatEUR(r.priceCents)}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-slate-500">Select a repair to see the summary.</div>
                  )}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{t('common.subtotal')}</span>
                    <span className="font-semibold text-slate-700">{repairs.length ? formatEUR(subtotalCents) : '—'}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-slate-500">
                    <span>{t('common.comboDiscount')}</span>
                    <span className="font-semibold text-primary">{discountCents ? `-${formatEUR(discountCents)}` : '—'}</span>
                  </div>

                  <div className="mt-4 flex items-start gap-2 text-xs text-emerald-700">
                    <span className="mt-0.5">🍀</span>
                    <span>{t('common.addExtraRepairDiscount')}</span>
                  </div>

                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <div className="text-lg font-extrabold text-slate-800">{t('common.total')}</div>
                      <div className="text-xs text-slate-400">EUR</div>
                    </div>
                    <div className="text-4xl font-extrabold text-slate-800">{formatEUR(totalCents).replace('€', '€')}</div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button variant="secondary" className="w-full" onClick={() => nav('/wizard/finish')} disabled={!repairs.length}>
                      <div className="flex flex-col items-center leading-tight">
                        <div className="font-extrabold">{t('common.sendOfferPdf')}</div>
                        <div className="text-[11px] font-semibold text-primary/80">{t('common.directMailbox')}</div>
                      </div>
                    </Button>

                    <Button className="w-full" size="lg" onClick={() => nav('/wizard/finish')} disabled={!repairs.length}>
                      <div className="flex flex-col items-center leading-tight">
                        <div className="font-extrabold">{t('common.nextStep')}</div>
                        <div className="text-[11px] font-semibold text-white/80">{t('common.youOnlyPayAfter')}</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </Card>

              {repairs.length ? (
                <button
                  className="mt-3 w-full text-center text-xs font-semibold text-slate-400 hover:text-slate-600"
                  onClick={() => setRepairs([])}
                >
                  Clear selection
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Allow default import (App.jsx uses default import).
export default WizardStep2;
