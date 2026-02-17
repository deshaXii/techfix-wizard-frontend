import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useI18n } from '../lib/i18n.jsx';
import { useTheme } from '../lib/theme.jsx';
import { IconBackArrow, IconChevronDown, IconClose, IconMenu, IconPalette, IconUser } from './icons.jsx';

function useOnClickOutside(ref, handler) {
  React.useEffect(() => {
    function onDown(e) {
      if (!ref.current) return;
      if (ref.current.contains(e.target)) return;
      handler();
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown, { passive: true });
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
    };
  }, [ref, handler]);
}

function Flag({ code }) {
  // Lightweight flags (emoji). Works well for EN/NL.
  const map = { en: '🇺🇸', nl: '🇳🇱' };
  return <span aria-hidden className="text-base">{map[code] || '🌐'}</span>;
}

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const localeLabels = { en: { label: 'English' }, nl: { label: 'Nederlands' } };
  const { theme, setTheme, themes } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const isWizard = location.pathname.startsWith('/wizard');

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [themeOpen, setThemeOpen] = React.useState(false);

  const langRef = React.useRef(null);
  const themeRef = React.useRef(null);
  const mobileRef = React.useRef(null);

  useOnClickOutside(langRef, () => setLangOpen(false));
  useOnClickOutside(themeRef, () => setThemeOpen(false));
  useOnClickOutside(mobileRef, () => setMobileOpen(false));

  const go = (to) => {
    setMobileOpen(false);
    navigate(to);
  };

  const links = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.wizard'), to: '/wizard' },
    { label: t('nav.how'), to: '/#how' },
    { label: t('nav.faq'), to: '/#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur border-b border-primary-100">
      <div className="px-4 sm:px-8 py-4">
        <div className="grid grid-cols-3 items-center gap-3">
          {/* Left */}
          <div className="flex items-center gap-2 min-w-0">
            {isWizard ? (
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white border border-primary-100 shadow-soft hover:shadow-md transition"
                aria-label={t('nav.back')}
              >
                <IconBackArrow className="h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex lg:hidden items-center justify-center h-10 w-10 rounded-xl bg-white border border-primary-100 shadow-soft hover:shadow-md transition"
                aria-label={t('nav.menu')}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <IconClose /> : <IconMenu />}
              </button>
            )}

            <nav className="hidden lg:flex items-center gap-6 text-sm text-ink/80">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="hover:text-ink transition whitespace-nowrap"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <Link to="/" className="select-none">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
                FastoFix
              </span>
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center justify-end gap-2">
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-white border border-primary-100 shadow-soft hover:shadow-md transition text-sm"
            >
              <IconUser className="h-4 w-4" />
              <span>{t('nav.login')}</span>
            </Link>

            {/* Language */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => {
                  setLangOpen((v) => !v);
                  setThemeOpen(false);
                }}
                className="inline-flex items-center gap-2 h-10 px-3 rounded-xl bg-white border border-primary-100 shadow-soft hover:shadow-md transition"
                aria-label={t('nav.language')}
              >
                <Flag code={lang} />
                <span className="text-sm font-semibold uppercase">{lang}</span>
                <IconChevronDown />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white border border-primary-100 shadow-soft overflow-hidden">
                  {Object.keys(localeLabels).map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        setLang(code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-surface transition ${
                        code === lang ? 'font-semibold text-ink' : 'text-ink/80'
                      }`}
                    >
                      <Flag code={code} />
                      <span>{localeLabels[code].label}</span>
                      {code === lang ? <span className="ml-auto text-primary">•</span> : null}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme (chrome color) */}
            <div className="relative" ref={themeRef}>
              <button
                type="button"
                onClick={() => {
                  setThemeOpen((v) => !v);
                  setLangOpen(false);
                }}
                className="inline-flex items-center gap-2 h-10 px-3 rounded-xl bg-white border border-primary-100 shadow-soft hover:shadow-md transition"
                aria-label={t('nav.theme')}
              >
                <IconPalette className="h-4 w-4" />
                <span className="hidden sm:inline text-sm font-semibold">{t('nav.theme')}</span>
                <IconChevronDown />
              </button>
              {themeOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white border border-primary-100 shadow-soft overflow-hidden">
                  {themes.map((th) => (
                    <button
                      key={th.id}
                      type="button"
                      onClick={() => {
                        setTheme(th.id);
                        setThemeOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-surface transition ${
                        th.id === theme ? 'font-semibold text-ink' : 'text-ink/80'
                      }`}
                    >
                      <span>{t(`theme.${th.id}`)}</span>
                      {th.id === theme ? <span className="text-primary">•</span> : null}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && !isWizard && (
          <div ref={mobileRef} className="lg:hidden mt-4 rounded-2xl bg-white border border-primary-100 shadow-soft overflow-hidden">
            <div className="grid">
              {links.map((l) => (
                <button
                  key={l.to}
                  type="button"
                  onClick={() => go(l.to)}
                  className="text-left px-4 py-3 text-sm hover:bg-surface transition"
                >
                  {l.label}
                </button>
              ))}
              <div className="border-t border-primary-100" />
              <button
                type="button"
                onClick={() => go('/login')}
                className="text-left px-4 py-3 text-sm hover:bg-surface transition"
              >
                {t('nav.login')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
