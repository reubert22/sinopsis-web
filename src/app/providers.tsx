'use client';

import { ToggleThemeBtn } from '@/components/ToggleThemeBtn';
import { CombineProviders } from '@/store/combineProviders';
import { TrendingProvider } from '@/store/trendingStore';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: any) {
  return (
    <CombineProviders providers={[[TrendingProvider, {}]]}>
      <ThemeProvider attribute="class">
        <ToggleThemeBtn />
        {children}
      </ThemeProvider>
    </CombineProviders>
  );
}
