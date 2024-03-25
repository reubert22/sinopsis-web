import { useInfiniteQuery } from '@tanstack/react-query';

import { ITrendingItem } from '@/store/trendingStore';
import { fetchFunction } from './fetchFunction';
import { ITrendingPersonItem } from '@/app/trending/api/person/interfaces';

export type ITrendingRequest = {
  page: number;
  results: ITrendingItem[];
  total_pages: number;
  total_results: number;
};

export type ITrendingPeopleRequest = {
  page: number;
  results: ITrendingPersonItem[];
  total_pages: number;
  total_results: number;
};

export const useFetchTrending = (search: string, category: string) => {
  return useInfiniteQuery<ITrendingRequest>({
    queryKey: ['trending', search],
    queryFn: ({ pageParam }) =>
      fetchFunction(
        `/trending/api/${category}?search=${search}&page=${pageParam}`
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage: ITrendingRequest) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
    refetchOnWindowFocus: false,
  });
};

export const useFetchTrendingPeople = (search: string) => {
  return useInfiniteQuery<ITrendingPeopleRequest>({
    queryKey: ['trending', search],
    queryFn: ({ pageParam }) =>
      fetchFunction(`/trending/api/person?search=${search}&page=${pageParam}`),
    initialPageParam: 1,
    getNextPageParam: (lastPage: ITrendingPeopleRequest) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
    refetchOnWindowFocus: false,
  });
};
