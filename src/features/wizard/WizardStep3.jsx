import React from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../../components/Stepper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Input } from '../../components/ui/Input.jsx';
import { Button } from '../../components/ui/Button.jsx';
import { Icon } from '../../components/icons.jsx';
import { api, formatEUR } from '../../lib/api.js';
import { useI18n } from '../../lib/i18n.jsx';
import { useWizard } from './WizardState.jsx';
import { useToast } from '../../components/Toast.jsx';

const LOCATIONS = [
  {
    name: 'Breda',
    address: 'Ginnekenweg 77',
    zip: '4818JB'
  },
  {
    name: 'Dordrecht',
    address: 'van Oldenbarneveltplein 60',
    zip: 'Dordrecht'
  },
  {
    name: 'Amsterdam (Leidsestraat)',
    address: 'Leidsestraat 17',
    zip: '1017NT'
  }
];

function ServiceOption({ title, subtitle, selected, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl2 border bg-white shadow-soft p-5 flex items-center justify-between transition ${selected ? 'border-primary ring-4 ring-primary/10' : 'border-slate-100 hover:border-slate-200'}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-slate-500">{icon}</div>
        <div className="text-left">
          <div className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
            {title}
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-lg bg-primary-50 text-primary text-[11px] font-extrabold border border-primary-100">FREE</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">{subtitle}</div>
        </div>
      </div>
      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center ${selected ? 'bg-primary border-primary text-white' : 'border-slate-200 text-transparent'}`}>✓</div>
    </button>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <div className="text-[11px] font-extrabold text-slate-500 tracking-wide uppercase mb-2">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </div>
      {children}
    </div>
  );
}

export function WizardStep3() {
  const nav = useNavigate();
  const { t, lang } = useI18n();
  const { model, repairs, color } = useWizard();
  const { show } = useToast();

  const subtotalCents = repairs.reduce((sum, r) => sum + (r.priceCents || 0), 0);
  const discountCents = repairs.length >= 2 ? Math.min(1500, subtotalCents) : 0;
  const totalCents = subtotalCents - discountCents;

  const [locationSearch, setLocationSearch] = React.useState('');
  const [location, setLocation] = React.useState(LOCATIONS[0]);
  const [serviceMethod, setServiceMethod] = React.useState('COME_BY_STORE');

  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    houseNumber: '',
    streetName: '',
    city: '',
    zipcode: '',
    country: 'Netherlands',
    email: '',
    phone: '',
    imei: ''
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [offerId, setOfferId] = React.useState('');

  React.useEffect(() => {
    if (!model?._id) nav('/wizard');
    if (!repairs.length) nav('/wizard/repairs');
  }, [model, repairs, nav]);

  const filteredLocations = LOCATIONS.filter((l) => {
    const q = locationSearch.trim().toLowerCase();
    if (!q) return true;
    return `${l.name} ${l.address} ${l.zip}`.toLowerCase().includes(q);
  });

  async function submit() {
    setSubmitting(true);
    try {
      const payload = {
        modelId: model._id,
        color,
        repairIds: repairs.map((r) => r._id),
        language: lang,
        delivery: {
          addressSearch: locationSearch,
          locationLabel: location ? `${location.name} — ${location.address} ${location.zip}` : '',
          serviceMethod
        },
        customer: form
      };
      const res = await api.createOffer(payload);
      setOfferId(res.offerId);
      show(t('common.offerCreated'));
    } catch (e) {
      show(e.message || 'Failed');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">{t('wizard.step3')}</div>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-ink">{t('wizard.finishTitle')}</h1>
        <p className="mt-1 text-sm text-ink/60">{t('wizard.finishSubtitle')}</p>
      </div>

      <Stepper step={3} />

      <div className="mt-6 bg-white border border-primary-100 rounded-3xl shadow-soft overflow-hidden">
      <div className="relative">
        <button
          className="absolute right-4 top-4 w-10 h-10 rounded-xl2 border border-slate-200 bg-white shadow-soft flex items-center justify-center text-slate-500 hover:bg-slate-50"
          onClick={() => nav('/wizard/repairs')}
          aria-label="Close"
        >
          <Icon.X />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="p-6 lg:p-8">
            <div className="text-2xl font-extrabold text-slate-800">{t('wizard.receiveOfferByEmail')}</div>
            <div className="text-sm text-primary font-semibold mt-1">{t('wizard.fillInfo')}</div>

            <div className="mt-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <div className="text-sm font-semibold text-slate-700">{t('wizard.selectLocation')}</div>
              </div>

              <div className="mt-3">
                <Button variant="secondary" className="w-full justify-start gap-2" type="button">
                  <Icon.MapPin />
                  <span className="text-xs font-extrabold tracking-wide">{t('wizard.currentLocation')}</span>
                </Button>
              </div>

              <div className="mt-3">
                <Input
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  placeholder={t('wizard.searchLocation')}
                  icon={<Icon.Search />}
                />
              </div>

              <div className="mt-4 space-y-3">
                {filteredLocations.map((l) => {
                  const selected = location?.name === l.name;
                  return (
                    <Card
                      key={l.name}
                      className={`p-4 cursor-pointer transition ${selected ? 'border-primary ring-4 ring-primary/10' : 'hover:border-slate-200'}`}
                      onClick={() => setLocation(l)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-extrabold text-slate-800">{l.name}</div>
                          <div className="text-xs text-slate-500 mt-1">{l.address}<br />{l.zip}</div>
                        </div>
                        <div className="text-slate-300">ⓘ</div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-8">
                <div className="text-sm font-semibold text-slate-700">{t('wizard.selectServiceMethod')}</div>
                <div className="mt-3 space-y-3">
                  <ServiceOption
                    title={t('wizard.comeByStore')}
                    subtitle={t('wizard.doneWhileWaiting')}
                    selected={serviceMethod === 'COME_BY_STORE'}
                    onClick={() => setServiceMethod('COME_BY_STORE')}
                    icon={<span className="inline-flex w-10 h-10 rounded-xl2 bg-slate-50 border border-slate-200 items-center justify-center">🛍️</span>}
                  />
                  <ServiceOption
                    title={t('wizard.shipDevice')}
                    subtitle={t('wizard.repairWithin24h')}
                    selected={serviceMethod === 'SHIP_DEVICE'}
                    onClick={() => setServiceMethod('SHIP_DEVICE')}
                    icon={<span className="inline-flex w-10 h-10 rounded-xl2 bg-slate-50 border border-slate-200 items-center justify-center">📦</span>}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-slate-100 bg-surface">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl2 bg-white border border-slate-200 shadow-soft flex items-center justify-center">
                <div className="w-8 h-10 rounded-xl bg-slate-50 border border-slate-200" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-800">{model?.name}</div>
                <div className="text-sm text-slate-500">{formatEUR(totalCents)} • EUR</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label={t('wizard.firstName')} required>
                <Input value={form.firstName} onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))} />
              </Field>
              <Field label={t('wizard.lastName')} required>
                <Input value={form.lastName} onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))} />
              </Field>
              <Field label={t('wizard.number')} required>
                <Input value={form.houseNumber} onChange={(e) => setForm((p) => ({ ...p, houseNumber: e.target.value }))} />
              </Field>
              <Field label={t('wizard.streetName')} required>
                <Input value={form.streetName} onChange={(e) => setForm((p) => ({ ...p, streetName: e.target.value }))} />
              </Field>
              <Field label={t('wizard.city')} required>
                <Input value={form.city} onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))} />
              </Field>
              <Field label={t('wizard.zipcode')} required>
                <Input value={form.zipcode} onChange={(e) => setForm((p) => ({ ...p, zipcode: e.target.value }))} />
              </Field>
              <Field label={t('wizard.country')} required>
                <Input value={form.country} onChange={(e) => setForm((p) => ({ ...p, country: e.target.value }))} />
              </Field>
              <Field label={t('wizard.email')} required>
                <Input value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
              </Field>
              <Field label={t('wizard.phone')} required>
                <Input value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} />
              </Field>
              <Field label={t('wizard.imei')}>
                <Input value={form.imei} onChange={(e) => setForm((p) => ({ ...p, imei: e.target.value }))} />
              </Field>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">{t('common.total')}</div>
                <div className="text-2xl font-extrabold text-slate-800">{formatEUR(totalCents)}</div>
              </div>

              <Button size="lg" onClick={submit} disabled={submitting}>
                {submitting ? '…' : t('wizard.send')}
              </Button>
            </div>

            {offerId ? (
              <div className="mt-4 rounded-xl2 bg-white border border-slate-200 p-4">
                <div className="text-sm font-extrabold text-slate-800">{t('common.offerCreated')}</div>
                <div className="text-xs text-slate-500 mt-1">ID: <span className="font-mono">{offerId}</span></div>
                <div className="mt-3 flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard?.writeText(offerId);
                      show(t('common.copyId'));
                    }}
                  >
                    {t('common.copyId')}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => nav('/wizard/repairs')}>Close</Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

// Allow default import (App.jsx uses default import).
export default WizardStep3;
