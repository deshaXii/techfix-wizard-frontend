import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AppShell from './AppShell.jsx';
import MarketingLayout from './MarketingLayout.jsx';
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
    <>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <MarketingLayout>
              <HomePage />
            </MarketingLayout>
          }
        />

        <Route
          path="/wizard"
          element={
            <AppShell>
              <WizardStep1 />
            </AppShell>
          }
        />
        <Route
          path="/wizard/repairs"
          element={
            <AppShell>
              <WizardStep2 />
            </AppShell>
          }
        />
        <Route
          path="/wizard/finish"
          element={
            <AppShell>
              <WizardStep3 />
            </AppShell>
          }
        />

        <Route
          path="/login"
          element={
            <AppShell>
              <LoginPage />
            </AppShell>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
