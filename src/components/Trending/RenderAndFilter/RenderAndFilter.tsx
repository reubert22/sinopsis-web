'use client';

import { useFetchTrending } from '@/api/usefetchTrending';
import { Card } from '@/components/Card';
import { shouldScroll } from '@/utils/functions';

export const RenderTrending = () => {
  const { data, isLoading, fetchNextPage, error, isFetching } =
    useFetchTrending('');

  const handleScroll = (e: React.UIEvent<HTMLElement>) =>
    shouldScroll(e) ? fetchNextPage() : null;

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  return (
    <div className="w-auto overflow-auto h-screen mt-4" onScroll={handleScroll}>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left w-full">
        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((item) => {
                console.log(item);
                return (
                  <Card
                    key={item.id}
                    href="#"
                    title={item.media_type === 'tv' ? item.name : item.title}
                    desc={item.overview}
                    topic={item.media_type.toUpperCase()}
                    arrow={false}
                    imgUrl={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  />
                );
              })
            )
          : null}
      </div>
      {isLoading || isFetching ? <h2>Loading ...</h2> : null}
    </div>
  );
};
