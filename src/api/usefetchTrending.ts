import { useInfiniteQuery } from '@tanstack/react-query';

import { ITrendingItem } from '@/store/trendingStore';
import { fetchFunction } from './fetchFunction';

export type ITrendingRequest = {
  page: number;
  results: ITrendingItem[];
  total_pages: number;
  total_results: number;
};

export const useFetchTrending = (search: string) => {
  return useInfiniteQuery<ITrendingRequest>({
    queryKey: ['trending', search],
    queryFn: ({ pageParam }) =>
      fetchFunction(`/trending/api?search=${search}&page=${pageParam}`),
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
