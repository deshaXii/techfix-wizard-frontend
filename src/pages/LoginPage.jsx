import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n.jsx';
import { IconUser } from '../components/icons.jsx';

function SocialButton({ label, icon }) {
  return (
    <button
      type="button"
      disabled
      className="w-full h-12 rounded-2xl bg-white border border-primary-100 text-ink font-semibold shadow-soft opacity-70 cursor-not-allowed flex items-center justify-center gap-2"
      title="Coming soon"
    >
      <span className="text-ink/70">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default function LoginPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left visual */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden h-full bg-white border border-primary-100 rounded-3xl shadow-soft p-8">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 blur-3xl rounded-full ff-blob" />
            <div className="absolute -bottom-14 -right-14 w-72 h-72 bg-primary/15 blur-3xl rounded-full ff-blob" style={{ animationDelay: '2.2s' }} />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-xs font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {t('login.comingSoonPill')}
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink">
                {t('login.leftTitle')}
              </h1>
              <p className="mt-3 text-sm text-ink/70">
                {t('login.leftDesc')}
              </p>

              <div className="mt-6 rounded-3xl border border-primary-100 bg-surface overflow-hidden shadow-soft">
                <img
                  src="/illustrations/login-side.svg"
                  alt="Login preview"
                  className="w-full h-auto ff-float"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white border border-primary-100 shadow-soft p-4">
                  <div className="text-xs text-ink/60 font-semibold">{t('login.kpiOffersLabel')}</div>
                  <div className="mt-1 text-lg font-extrabold text-ink">{t('login.kpiOffersValue')}</div>
                </div>
                <div className="rounded-2xl bg-white border border-primary-100 shadow-soft p-4">
                  <div className="text-xs text-ink/60 font-semibold">{t('login.kpiStatusLabel')}</div>
                  <div className="mt-1 text-lg font-extrabold text-ink">{t('login.kpiStatusValue')}</div>
                </div>
                <div className="rounded-2xl bg-white border border-primary-100 shadow-soft p-4">
                  <div className="text-xs text-ink/60 font-semibold">{t('login.kpiCheckoutLabel')}</div>
                  <div className="mt-1 text-lg font-extrabold text-ink">{t('login.kpiCheckoutValue')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div>
          <div className="relative overflow-hidden bg-white border border-primary-100 rounded-3xl shadow-soft p-8">
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-primary/15 blur-3xl rounded-full ff-blob" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-ink">{t('login.title')}</h1>
                <p className="mt-2 text-sm text-ink/70">{t('login.desc')}</p>
              </div>
              <div className="h-11 w-11 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary">
                <IconUser className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <SocialButton label={t('login.continueGoogle')} icon={<span className="text-sm">G</span>} />
              <SocialButton label={t('login.continueApple')} icon={<span className="text-sm"></span>} />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-primary-100" />
              <div className="text-xs font-semibold text-ink/50">{t('login.or')}</div>
              <div className="h-px flex-1 bg-primary-100" />
            </div>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-bold text-ink/60">{t('login.emailLabel')}</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full h-12 px-4 rounded-2xl bg-surface border border-primary-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  disabled
                />
              </div>
              <div>
                <label className="text-xs font-bold text-ink/60">{t('login.passwordLabel')}</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 w-full h-12 px-4 rounded-2xl bg-surface border border-primary-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  disabled
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full h-12 rounded-2xl bg-primary text-white font-semibold shadow-soft opacity-70 cursor-not-allowed"
              >
                {t('login.signInSoon')}
              </button>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/wizard"
                  className="ff-shimmer inline-flex justify-center items-center h-12 px-6 rounded-2xl bg-white border border-primary-100 text-ink font-semibold shadow-soft hover:shadow-md hover:-translate-y-0.5 transition w-full"
                >
                  {t('login.goWizard')}
                </Link>
                <Link
                  to="/"
                  className="inline-flex justify-center items-center h-12 px-6 rounded-2xl bg-white border border-primary-100 text-ink font-semibold shadow-soft hover:shadow-md hover:-translate-y-0.5 transition w-full"
                >
                  {t('login.goHome')}
                </Link>
              </div>
            </form>

            <div className="mt-8 rounded-2xl bg-surface border border-primary-100 p-5">
              <div className="text-sm font-bold text-ink">{t('login.noteTitle')}</div>
              <p className="mt-2 text-sm text-ink/70">{t('login.noteDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
