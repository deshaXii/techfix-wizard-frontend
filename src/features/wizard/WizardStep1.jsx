import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderBar } from '../../components/HeaderBar.jsx';
import { Stepper } from '../../components/Stepper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Input } from '../../components/ui/Input.jsx';
import { Icon } from '../../components/icons.jsx';
import { api } from '../../lib/api.js';
import { useI18n } from '../../lib/i18n.jsx';
import { useWizard } from './WizardState.jsx';

// Keep a curated order for the UI (we still fetch available brands from the API).
const BRAND_META = [
  { name: 'Apple', mark: 'A' },
  { name: 'Samsung', mark: 'S' },
  { name: 'Google', mark: 'G' },
  { name: 'Oppo', mark: 'O' },
  { name: 'Xiaomi', mark: 'Mi' },
  { name: 'OnePlus', mark: '1+' },
  { name: 'Huawei', mark: 'H' },
  { name: 'Realme', mark: 'R' },
  { name: 'Microsoft', mark: 'MS' },
  { name: 'LG', mark: 'LG' },
  { name: 'Motorola', mark: 'M' },
  { name: 'Sony', mark: 'S' }
];

const DEVICE_TYPES = [
  { key: 'phone', icon: Icon.Phone },
  { key: 'tablet', icon: Icon.Tablet },
  { key: 'laptop', icon: Icon.Laptop }
];

function BrandTile({ label, mark, selected, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative h-24 sm:h-28 rounded-xl2 bg-white border shadow-soft flex items-center justify-center transition ${
        selected ? 'border-primary ring-4 ring-primary/10' : disabled ? 'border-slate-100 opacity-50 cursor-not-allowed' : 'border-slate-100 hover:border-slate-200'
      }`}
    >
      <div className="absolute left-4 top-4 w-10 h-10 rounded-xl2 bg-slate-50 border border-slate-100 flex items-center justify-center">
        <div className="text-slate-400 font-extrabold text-xs tracking-wide">{mark}</div>
      </div>
      <div className="text-slate-500 font-extrabold tracking-wide uppercase" style={{ opacity: selected ? 0.95 : 0.6 }}>{label}</div>
    </button>
  );
}

function TypePill({ label, selected, IconCmp, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl2 border text-sm font-semibold transition ${
        selected ? 'bg-primary text-white border-primary shadow-soft' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
      }`}
    >
      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-xl2 ${selected ? 'bg-white/15' : 'bg-slate-50 border border-slate-100'}`}>
        <IconCmp />
      </span>
      {label}
    </button>
  );
}

function ModelCard({ model, onClick }) {
  const img = model.imageKey ? `/devices/${model.imageKey}.png` : '/devices/placeholder.png';
  return (
    <button
      onClick={onClick}
      className="group rounded-xl2 bg-white border border-slate-100 shadow-soft hover:shadow-card transition p-5 text-left"
    >
      <div className="h-28 rounded-xl2 bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden">
        <img
          src={img}
          alt={model.name}
          className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
          onError={(e) => {
            // eslint-disable-next-line no-param-reassign
            e.currentTarget.src = '/devices/placeholder.png';
          }}
        />
      </div>
      <div className="mt-4">
        <div className="text-sm font-extrabold text-slate-800">{model.name}</div>
        {model.modelCodes?.length ? (
          <div className="text-xs text-primary font-semibold mt-1">{model.modelCodes.slice(0, 2).join(', ')}{model.modelCodes.length > 2 ? '…' : ''}</div>
        ) : (
          <div className="text-xs text-slate-400 mt-1">&nbsp;</div>
        )}
      </div>
    </button>
  );
}

export function WizardStep1() {
  const { t } = useI18n();
  const nav = useNavigate();
  const { clear, setModel, setRepairs } = useWizard();

  const [brands, setBrands] = React.useState([]);
  const [brand, setBrand] = React.useState('Apple');
  const [type, setType] = React.useState('phone');
  const [q, setQ] = React.useState('');
  const [models, setModels] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    clear();
    setRepairs([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    let alive = true;
    api
      .brands()
      .then((d) => {
        if (!alive) return;
        const list = (d.brands || []).filter(Boolean);
        setBrands(list);
        if (list.length && !list.includes(brand)) setBrand(list[0]);
      })
      .catch(() => {
        if (!alive) return;
        setBrands([]);
      });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    let alive = true;
    setLoading(true);
    const query = q.trim();
    // UX: when the user types a query, search globally across all brands & types.
    // Otherwise, show the selected brand + device type.
    const params = query ? { q: query } : { brand, type };
    api
      .models(params)
      .then((d) => {
        if (!alive) return;
        setModels(d.models || []);
      })
      .catch(() => {
        if (!alive) return;
        setModels([]);
      })
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [brand, q]);

  const availableSet = new Set(brands.map((b) => String(b).toLowerCase()));
  const tiles = React.useMemo(() => {
    const meta = BRAND_META.map((b) => ({ ...b }));
    // Add any API brands that are not in BRAND_META.
    const known = new Set(meta.map((m) => m.name.toLowerCase()));
    for (const b of brands) {
      const key = String(b).toLowerCase();
      if (!known.has(key)) meta.push({ name: b, mark: b.slice(0, 2).toUpperCase() });
    }
    return meta;
  }, [brands]);

  return (
    <div>
      <HeaderBar title={t('wizard.step1Title')} />
      <Stepper step={1} />

      <div className="px-6 pb-10">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <div className="text-sm font-semibold text-slate-700">{t('wizard.step1Hint')}</div>
          </div>

          <div className="mt-4">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('common.search')}
              icon={<Icon.Search />}
            />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <div className="text-sm font-semibold text-slate-700">{t('wizard.orSelectType')}</div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {DEVICE_TYPES.map((it) => (
              <TypePill
                key={it.key}
                label={t(`wizard.deviceTypes.${it.key}`)}
                selected={type === it.key}
                IconCmp={it.icon}
                onClick={() => setType(it.key)}
              />
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <div className="text-sm font-semibold text-slate-700">{t('wizard.orSelectBrand')}</div>
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {tiles.map((b) => (
              <BrandTile
                key={b.name}
                label={b.name}
                mark={b.mark}
                selected={brand.toLowerCase() === b.name.toLowerCase()}
                disabled={brands.length ? !availableSet.has(b.name.toLowerCase()) : false}
                onClick={() => setBrand(b.name)}
              />
            ))}
          </div>
        </Card>

        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-600">
            {t('wizard.allModels')} <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-primary text-white text-xs font-bold">{loading ? '…' : models.length}</span>
          </div>
          <div className="text-xs font-semibold text-slate-400 inline-flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl2 bg-white border border-slate-200">
              <Icon.Info />
            </span>
            {t('wizard.findMyModel')}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {loading ? (
            Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="rounded-xl2 bg-white border border-slate-100 shadow-soft p-5 animate-pulse">
                <div className="h-28 rounded-xl2 bg-slate-100" />
                <div className="mt-4 h-4 bg-slate-100 rounded" />
                <div className="mt-2 h-3 w-2/3 bg-slate-100 rounded" />
              </div>
            ))
          ) : models.length ? (
            models.map((m) => (
              <ModelCard
                key={m._id}
                model={m}
                onClick={() => {
                  setModel(m);
                  nav('/wizard/repairs');
                }}
              />
            ))
          ) : (
            <div className="col-span-full">
              <Card className="p-8 text-center text-slate-500">
                {t('wizard.noModels')}
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Allow default import (App.jsx uses default import).
export default WizardStep1;
