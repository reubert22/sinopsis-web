'use client';

import { ToggleThemeBtn } from '@/components/ToggleThemeBtn';
import { CombineProviders } from '@/store/combineProviders';
import { TrendingProvider } from '@/store/trendingStore';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <CombineProviders providers={[[TrendingProvider, {}]]}>
        <ThemeProvider attribute="class">
          <ToggleThemeBtn />
          {children}
        </ThemeProvider>
      </CombineProviders>
    </QueryClientProvider>
  );
}
