'use client';

import React, { ComponentProps, ComponentType, FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Providers = [ComponentType<any>, ComponentProps<any>?][];

const queryClient = new QueryClient();

export const CombineProviders = ({
  providers,
  children,
}: {
  providers: Providers;
  children: React.ReactNode;
}) => {
  const CombinedProviders = providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      function Func({ children }: any) {
        return (
          <AccumulatedProviders>
            <Provider {...props}>
              <>{children}</>
            </Provider>
          </AccumulatedProviders>
        );
      },
    ({ children }: any) => <>{children}</>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <CombinedProviders>{children}</CombinedProviders>
    </QueryClientProvider>
  );
};
