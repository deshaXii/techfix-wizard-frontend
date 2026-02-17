import React from 'react';

const WizardContext = React.createContext(null);

export function WizardProvider({ children }) {
  const [model, setModel] = React.useState(null);
  const [repairs, setRepairs] = React.useState([]); // selected repair docs
  const [color, setColor] = React.useState('black');

  const toggleRepair = React.useCallback((repair) => {
    setRepairs((prev) => {
      const exists = prev.some((r) => r._id === repair._id);
      if (exists) return prev.filter((r) => r._id !== repair._id);
      return [...prev, repair];
    });
  }, []);

  const clear = React.useCallback(() => {
    setModel(null);
    setRepairs([]);
    setColor('black');
  }, []);

  return (
    <WizardContext.Provider value={{ model, setModel, repairs, setRepairs, toggleRepair, color, setColor, clear }}>
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const ctx = React.useContext(WizardContext);
  if (!ctx) throw new Error('useWizard must be used within WizardProvider');
  return ctx;
}
