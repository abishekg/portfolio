import { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState<string>(
    typeof window !== 'undefined' ? localStorage.theme : 'dark',
  );
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  console.log('>>>>theme', theme);
  console.log('>>>>colorTheme ', colorTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
