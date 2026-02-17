import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function MarketingLayout({ children }) {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </div>
      </main>
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pb-10">
        <div className="border border-primary-100 rounded-3xl overflow-hidden shadow-soft bg-white">
          <Footer />
        </div>
      </div>
    </div>
  );
}
