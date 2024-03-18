'use client';

import {
  useMemo,
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export interface ITrendingItem {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name?: string;
  title?: string;
  original_language: string;
  original_name?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: any[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: any[];
}

export interface TrendingContextProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  trending: ITrendingItem[];
}

export const TrendingProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<string>('');
  const [trending, setTrending] = useState<ITrendingItem[]>([]);

  const filteredTrending = useMemo(
    () =>
      trending.filter((t) =>
        (t.name || t.title)?.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, trending]
  );

  return (
    <TrendingContext.Provider
      value={{
        filter,
        setFilter,
        trending: filteredTrending,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

export const TrendingContext = createContext<TrendingContextProps | null>({
  filter: '',
  setFilter: () => {},
  trending: [],
});

export const useTrending = () => useContext(TrendingContext)!;
