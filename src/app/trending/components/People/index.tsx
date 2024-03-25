'use client';

import { useFetchTrendingPeople } from '@/api/usefetchTrending';
import { shouldScroll } from '@/utils/functions';
import { Card } from '@/components/Card';
import { posterApiUrl } from '@/utils/apiConstants';

export const People = () => {
  const { data, isLoading, fetchNextPage, error, isFetching } =
    useFetchTrendingPeople('');

  const handleScroll = (e: React.UIEvent<HTMLElement>) =>
    shouldScroll(e) ? fetchNextPage() : null;

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  return (
    <div className="w-auto overflow-auto h-screen mt-4" onScroll={handleScroll}>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left w-full">
        {data?.pages &&
          data.pages.map((page) =>
            page.results.map((item) => {
              const knownForFirstItem = item?.known_for
                ? item?.known_for[0]
                : null;
              return (
                <Card
                  key={item.id}
                  href="#"
                  title={item.name}
                  desc={
                    knownForFirstItem?.media_type === 'tv'
                      ? knownForFirstItem?.name
                      : knownForFirstItem?.title
                  }
                  arrow={false}
                  imgUrl={`${posterApiUrl('original')}${item.profile_path}`}
                />
              );
            })
          )}
      </div>
      {isLoading || isFetching ? <h2>Loading ...</h2> : null}
    </div>
  );
};
