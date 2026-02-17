import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center">
      <div className="w-full max-w-[1200px] px-3 sm:px-6 pt-8 pb-10 flex-1">
        <div className="bg-surface border border-primary-100 rounded-3xl shadow-soft overflow-hidden">
          <Navbar />
          <main className="px-4 sm:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
