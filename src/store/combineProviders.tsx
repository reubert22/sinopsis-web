import React, { ComponentProps, ComponentType, FC } from 'react'
import { TrendingProvider } from './trendingStore'

type Providers = [ComponentType<any>, ComponentProps<any>?][]

const combineProviders = (providers: Providers): FC =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      function Func({ children }: any) {
        return (
          <AccumulatedProviders>
            <Provider {...props}>
              <>{children}</>
            </Provider>
          </AccumulatedProviders>
        )
      },
    ({ children }: any) => <>{children}</>
  )

export const AllProviders = combineProviders([[TrendingProvider, {}]])
