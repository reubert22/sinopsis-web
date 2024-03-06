'use client';

import { Input } from '@/components/Input/Input';
import { ITrendingItem, useTrending } from '@/store/trendingStore';

export const RenderTrending = () => {
  const { filter, setFilter, trending } = useTrending();
  const trendingItems = trending || [];

  return (
    <div className="w-auto">
      <Input value={filter} onChange={setFilter} />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {trendingItems.map((item: ITrendingItem) => (
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
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 line-clamp-3`}>
              {item.overview}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
