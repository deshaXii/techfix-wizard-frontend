import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n.jsx';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-primary-100 bg-surface">
      <div className="px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-extrabold tracking-tight text-ink">FastoFix</div>
            <p className="mt-3 text-sm text-ink/70 max-w-sm">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-semibold text-ink">{t('footer.product')}</div>
              <ul className="mt-3 space-y-2 text-sm text-ink/70">
                <li><Link className="hover:text-ink" to="/wizard">{t('nav.wizard')}</Link></li>
                <li><Link className="hover:text-ink" to="/#how">{t('nav.how')}</Link></li>
                <li><Link className="hover:text-ink" to="/#faq">{t('nav.faq')}</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">{t('footer.company')}</div>
              <ul className="mt-3 space-y-2 text-sm text-ink/70">
                <li><Link className="hover:text-ink" to="/login">{t('nav.login')}</Link></li>
                <li><a className="hover:text-ink" href="#" onClick={(e)=>e.preventDefault()}>{t('footer.privacy')}</a></li>
                <li><a className="hover:text-ink" href="#" onClick={(e)=>e.preventDefault()}>{t('footer.terms')}</a></li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink">{t('footer.contact')}</div>
            <div className="mt-3 text-sm text-ink/70 space-y-2">
              <div>{t('footer.supportLine')}</div>
              <div className="inline-flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <span>support@fastofix.nl</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink/60">
          <div>© {new Date().getFullYear()} FastoFix. {t('footer.rights')}</div>
          <div className="flex items-center gap-3">
            <span>EUR €</span>
            <span className="inline-flex items-center gap-1"><span aria-hidden>🇳🇱</span> NL</span>
            <span className="inline-flex items-center gap-1"><span aria-hidden>🇺🇸</span> EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
