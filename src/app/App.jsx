import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AppShell from './AppShell.jsx';
import WizardStep1 from '../features/wizard/WizardStep1.jsx';
import WizardStep2 from '../features/wizard/WizardStep2.jsx';
import WizardStep3 from '../features/wizard/WizardStep3.jsx';
import HomePage from '../pages/HomePage.jsx';
import LoginPage from '../pages/LoginPage.jsx';

function ScrollToHash() {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    // Let layout render first.
    const t = setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  return null;
}

function AppRoutes() {
  return (
    <AppShell>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/wizard" element={<WizardStep1 />} />
        <Route path="/wizard/repairs" element={<WizardStep2 />} />
        <Route path="/wizard/finish" element={<WizardStep3 />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
