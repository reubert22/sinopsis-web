'use client';

import { useFetchTrending } from '@/api/usefetchTrending';
import { shouldScroll } from '@/utils/functions';
import { RenderList } from '../RenderList';
import { CATEGORIES } from '../Wrapper';

export const Tv = () => {
  const { data, isLoading, fetchNextPage, error, isFetching } =
    useFetchTrending('', CATEGORIES.tv_series);

  const handleScroll = (e: React.UIEvent<HTMLElement>) =>
    shouldScroll(e) ? fetchNextPage() : null;

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  return (
    <div className="w-auto overflow-auto h-screen mt-4" onScroll={handleScroll}>
      <RenderList data={data} />
      {isLoading || isFetching ? <h2>Loading ...</h2> : null}
    </div>
  );
};
