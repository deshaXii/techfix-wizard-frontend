import React from 'react';

const ToastContext = React.createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = React.useState(null);

  const show = React.useCallback((message) => {
    setToast({ message, id: Date.now() });
    setTimeout(() => setToast(null), 2800);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className={`fixed left-1/2 top-6 -translate-x-1/2 z-[60] transition-all ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}`}>
        <div className="bg-white border border-slate-200 shadow-card rounded-full px-4 py-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm">✓</span>
          <div className="text-sm font-semibold text-slate-800">{toast?.message}</div>
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
