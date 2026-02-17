import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import 'leaflet/dist/leaflet.css';
import { App } from './app/App.jsx';
import { I18nProvider } from './lib/i18n.jsx';
import { ThemeProvider } from './lib/theme.jsx';
import { WizardProvider } from './features/wizard/WizardState.jsx';
import { ToastProvider } from './components/Toast.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <ToastProvider>
          <WizardProvider>
            <App />
          </WizardProvider>
        </ToastProvider>
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>
);
