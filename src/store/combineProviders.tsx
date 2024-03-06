import React, { ComponentProps, ComponentType, FC } from 'react';

type Providers = [ComponentType<any>, ComponentProps<any>?][];

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

  return <CombinedProviders>{children}</CombinedProviders>;
};
