import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n.jsx';
import { useRevealOnScroll } from '../lib/useReveal.jsx';
import { Icon } from '../components/icons.jsx';

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary-100 text-xs text-ink/70 shadow-soft">
      <span className="h-2 w-2 rounded-full bg-primary" />
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, desc, right }) {
  return (
    <div className="ff-reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</div>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">{title}</h2>
        {desc ? <p className="mt-3 text-sm sm:text-base text-ink/70 max-w-2xl">{desc}</p> : null}
      </div>
      {right ? <div className="sm:pb-1">{right}</div> : null}
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="ff-reveal group bg-white border border-primary-100 rounded-2xl shadow-soft p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-11 w-11 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary transition group-hover:scale-[1.03]">
        {icon}
      </div>
      <div className="mt-4 text-base font-bold text-ink">{title}</div>
      <div className="mt-2 text-sm text-ink/70">{desc}</div>
      <div className="mt-4 h-[2px] w-10 bg-primary/30 rounded-full transition-all group-hover:w-16 group-hover:bg-primary/60" />
    </div>
  );
}

function DeviceChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-primary-100 shadow-soft text-xs font-semibold text-ink/70 hover:shadow-md hover:-translate-y-0.5 transition">
      <span className="text-primary">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function ScreenshotCard({ t }) {
  return (
    <div className="relative">
      <div className="absolute -top-10 -right-10 w-56 h-56 bg-primary/20 blur-3xl rounded-full ff-blob" />
      <div className="absolute -bottom-14 -left-10 w-64 h-64 bg-primary/15 blur-3xl rounded-full ff-blob" style={{ animationDelay: '1.8s' }} />

      <div className="relative bg-white border border-primary-100 rounded-3xl shadow-soft p-4 sm:p-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(31,115,201,0.35) 1px, transparent 0)', backgroundSize: '18px 18px' }} />

        <div className="relative flex items-center justify-between">
          <div className="text-sm font-semibold text-ink">{t('home.previewTitle')}</div>
          <div className="text-[11px] font-semibold text-primary bg-primary-50 border border-primary-100 px-3 py-1 rounded-full">
            {t('home.previewLabel')}
          </div>
        </div>

        <div className="relative mt-4 rounded-2xl border border-primary-100 bg-surface overflow-hidden">
          <img
            src="/illustrations/hero-wizard.svg"
            alt="FastoFix wizard preview"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* floating mini cards */}
        <div className="absolute left-6 bottom-6 hidden sm:flex gap-2">
          <div className="bg-white/90 backdrop-blur border border-primary-100 rounded-2xl shadow-soft px-3 py-2">
            <div className="text-[11px] font-semibold text-ink/70">{t('home.metricAvgLabel')}</div>
            <div className="text-sm font-extrabold text-ink">{t('home.metricAvgValue')}</div>
          </div>
          <div className="bg-white/90 backdrop-blur border border-primary-100 rounded-2xl shadow-soft px-3 py-2">
            <div className="text-[11px] font-semibold text-ink/70">{t('home.metricDiscountLabel')}</div>
            <div className="text-sm font-extrabold text-primary">{t('home.metricDiscountValue')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t } = useI18n();
  useRevealOnScroll();

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative">
        <div className="ff-reveal relative overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-soft">
          <div className="absolute -top-16 -left-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full ff-blob" />
          <div className="absolute -bottom-20 -right-24 w-80 h-80 bg-primary/15 blur-3xl rounded-full ff-blob" style={{ animationDelay: '2.4s' }} />

          <div className="relative p-6 sm:p-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <DeviceChip icon={<Icon.Phone className="h-4 w-4" />} label={t('wizard.deviceTypes.phone')} />
                <DeviceChip icon={<Icon.Tablet className="h-4 w-4" />} label={t('wizard.deviceTypes.tablet')} />
                <DeviceChip icon={<Icon.Laptop className="h-4 w-4" />} label={t('wizard.deviceTypes.laptop')} />
              </div>

              <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-ink">
                {t('home.heroTitle')}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-ink/70 max-w-xl">
                {t('home.heroSubtitle')}
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/wizard"
                  className="ff-shimmer inline-flex justify-center items-center h-12 px-6 rounded-2xl bg-primary text-white font-semibold shadow-soft hover:shadow-lg transition"
                >
                  {t('home.ctaPrimary')}
                </Link>
                <a
                  href="#how"
                  className="inline-flex justify-center items-center h-12 px-6 rounded-2xl bg-white border border-primary-100 text-ink font-semibold shadow-soft hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  {t('home.ctaSecondary')}
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <Pill>{t('home.pill1')}</Pill>
                <Pill>{t('home.pill2')}</Pill>
                <Pill>{t('home.pill3')}</Pill>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="group rounded-2xl border border-primary-100 bg-surface p-4 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition"
                  >
                    <div className={`h-10 w-10 rounded-2xl flex items-center justify-center ${n === 1 ? 'bg-primary text-white' : 'bg-white text-ink/60 border border-primary-100'} transition group-hover:scale-[1.03]`}>
                      <span className="font-bold">{n}</span>
                    </div>
                    <div className="mt-3 text-sm font-bold text-ink">{t(`home.step${n}Title`)}</div>
                    <div className="mt-1 text-xs text-ink/60">{t(`home.step${n}Desc`)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-6">
              <ScreenshotCard t={t} />
            </div>
          </div>
        </div>

        {/* supported device visual strip */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="ff-reveal group bg-white border border-primary-100 rounded-3xl shadow-soft p-6 flex items-center gap-5 hover:shadow-lg hover:-translate-y-1 transition">
            <img src="/illustrations/device-phone.svg" alt="Phone" className="w-20 h-20" loading="lazy" />
            <div>
              <div className="text-sm font-extrabold text-ink">{t('wizard.deviceTypes.phone')}</div>
              <div className="mt-1 text-xs text-ink/70">{t('home.supportPhoneDesc')}</div>
            </div>
          </div>
          <div className="ff-reveal group bg-white border border-primary-100 rounded-3xl shadow-soft p-6 flex items-center gap-5 hover:shadow-lg hover:-translate-y-1 transition">
            <img src="/illustrations/device-tablet.svg" alt="Tablet" className="w-20 h-20" loading="lazy" />
            <div>
              <div className="text-sm font-extrabold text-ink">{t('wizard.deviceTypes.tablet')}</div>
              <div className="mt-1 text-xs text-ink/70">{t('home.supportTabletDesc')}</div>
            </div>
          </div>
          <div className="ff-reveal group bg-white border border-primary-100 rounded-3xl shadow-soft p-6 flex items-center gap-5 hover:shadow-lg hover:-translate-y-1 transition">
            <img src="/illustrations/device-laptop.svg" alt="Laptop" className="w-20 h-20" loading="lazy" />
            <div>
              <div className="text-sm font-extrabold text-ink">{t('wizard.deviceTypes.laptop')}</div>
              <div className="mt-1 text-xs text-ink/70">{t('home.supportLaptopDesc')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="scroll-mt-24">
        <SectionTitle
          eyebrow={t('home.howEyebrow')}
          title={t('home.howTitle')}
          desc={t('home.howDesc')}
          right={
            <Link
              to="/wizard"
              className="inline-flex items-center justify-center h-11 px-5 rounded-2xl bg-white border border-primary-100 text-ink font-semibold shadow-soft hover:shadow-md hover:-translate-y-0.5 transition"
            >
              {t('home.previewCtaBtn')}
            </Link>
          }
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <FeatureCard
            icon={<Icon.Search className="h-5 w-5" />}
            title={t('home.howCard1Title')}
            desc={t('home.howCard1Desc')}
          />
          <FeatureCard
            icon={<Icon.Wrench className="h-5 w-5" />}
            title={t('home.howCard2Title')}
            desc={t('home.howCard2Desc')}
          />
          <FeatureCard
            icon={<Icon.Check className="h-5 w-5" />}
            title={t('home.howCard3Title')}
            desc={t('home.howCard3Desc')}
          />
        </div>

        <div className="mt-8 ff-reveal bg-white border border-primary-100 rounded-3xl shadow-soft p-6 sm:p-8 overflow-hidden relative">
          <div className="absolute -top-14 -right-14 w-64 h-64 bg-primary/15 blur-3xl rounded-full ff-blob" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-sm font-bold text-ink">{t('home.previewCtaTitle')}</div>
              <div className="mt-2 text-sm text-ink/70">{t('home.previewCtaDesc')}</div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/wizard"
                  className="ff-shimmer inline-flex items-center justify-center h-12 px-6 rounded-2xl bg-primary text-white font-semibold shadow-soft hover:shadow-lg transition"
                >
                  {t('home.previewCtaBtn')}
                </Link>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-2xl bg-white border border-primary-100 text-ink font-semibold shadow-soft hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  {t('home.faqTitle')}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-primary-100 bg-surface overflow-hidden shadow-soft">
                <img
                  src="/illustrations/hero-wizard.svg"
                  alt="Wizard flow"
                  className="w-full h-auto ff-float"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section>
        <SectionTitle
          eyebrow={t('home.benefitsEyebrow')}
          title={t('home.benefitsTitle')}
          desc={t('home.benefitsDesc')}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {[{ k: 1 }, { k: 2 }, { k: 3 }].map(({ k }) => (
            <div
              key={k}
              className="ff-reveal group bg-white border border-primary-100 rounded-3xl shadow-soft p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-ink">{t(`home.b${k}Title`)}</div>
                  <p className="mt-2 text-sm text-ink/70">{t(`home.b${k}Desc`)}</p>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary">
                  {k === 1 ? <Icon.Phone className="h-5 w-5" /> : k === 2 ? <Icon.Info className="h-5 w-5" /> : <Icon.Lightning className="h-5 w-5" />}
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm text-ink/70">
                <span className="text-primary">✓</span>
                <span>{t(`home.b${k}Point`)}</span>
              </div>
              <div className="mt-5 h-[2px] w-10 bg-primary/30 rounded-full transition-all group-hover:w-16 group-hover:bg-primary/60" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24">
        <SectionTitle eyebrow="FAQ" title={t('home.faqTitle')} desc={t('home.faqDesc')} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[1, 2, 3, 4].map((n) => (
            <details
              key={n}
              className="ff-reveal group bg-white border border-primary-100 rounded-2xl shadow-soft p-5 transition hover:shadow-md"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-ink">{t(`home.faq${n}Q`)}</span>
                <span className="h-9 w-9 rounded-2xl border border-primary-100 bg-primary-50 text-primary flex items-center justify-center group-open:rotate-180 transition">
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink/70">{t(`home.faq${n}A`)}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ff-reveal">
        <div className="relative overflow-hidden bg-primary text-white rounded-3xl shadow-soft p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="absolute -top-14 -left-14 w-64 h-64 bg-white/15 blur-3xl rounded-full ff-blob" />
          <div className="relative">
            <div className="text-2xl font-extrabold tracking-tight">{t('home.ctaTitle')}</div>
            <div className="mt-2 text-sm text-white/85 max-w-2xl">{t('home.ctaDesc')}</div>
          </div>
          <Link
            to="/wizard"
            className="relative ff-shimmer inline-flex items-center justify-center h-12 px-7 rounded-2xl bg-white text-primary font-bold shadow-soft hover:shadow-lg transition"
          >
            {t('home.ctaBtn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
