'use client';
import { useTheme } from 'next-themes';

export const useCurrentTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleSetThemeLight = () => setTheme('light');
  const handleSetThemeDark = () => setTheme('dark');

  const handleToggleTheme = () =>
    theme == 'dark' ? handleSetThemeLight() : handleSetThemeDark();

  return {
    currentTheme,
    isThemeDark: theme == 'dark',
    handleSetThemeLight,
    handleSetThemeDark,
    handleToggleTheme,
  };
};
