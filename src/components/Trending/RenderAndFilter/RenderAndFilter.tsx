'use client';

import { useFetchTrending } from '@/api/usefetchTrending';
import { Input } from '@/components/Input/Input';
import { shouldScroll } from '@/utils/functions';
import { useState } from 'react';

export const RenderTrending = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading, fetchNextPage, error, isFetching } =
    useFetchTrending(query);

  const handleScroll = (e: React.UIEvent<HTMLElement>) =>
    shouldScroll(e) ? fetchNextPage() : null;

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  return (
    <div className=" w-auto overflow-auto h-screen" onScroll={handleScroll}>
      <Input value={query} onChange={setQuery} />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((item) => (
                <a
                  href="#"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  rel="noopener noreferrer"
                  key={item.id}
                >
                  <h2 className={`text-1xl font-normal opacity-80`}>
                    {item.media_type.toUpperCase()}
                  </h2>
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    {item.media_type === 'tv' ? item.name : item.title}{' '}
                  </h2>
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 line-clamp-3`}
                  >
                    {item.overview}
                  </p>
                </a>
              ))
            )
          : null}
      </div>
      {isLoading || isFetching ? <h2>Loading ...</h2> : null}
    </div>
  );
};
