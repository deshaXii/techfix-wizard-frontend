import React from 'react';

const ThemeContext = React.createContext(null);

export const THEMES = [
  { id: 'ocean', label: 'Ocean' },
  { id: 'midnight', label: 'Midnight' },
  { id: 'slate', label: 'Slate' },
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(() => {
    const stored = localStorage.getItem('fastofix_theme');
    return stored || 'ocean';
  });

  React.useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('fastofix_theme', theme);
  }, [theme]);

  const value = React.useMemo(() => ({ theme, setTheme, themes: THEMES }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
