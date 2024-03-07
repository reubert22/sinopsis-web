'use client';

import { Card } from '@/components/Card';
import { Input } from '@/components/Input/Input';
import { ITrendingItem, useTrending } from '@/store/trendingStore';

export const RenderTrending = () => {
  const { filter, setFilter, trending } = useTrending();
  const trendingItems = trending || [];

  return (
    <div className="w-auto lg:max-w-5xl lg:w-full">
      <Input value={filter} onChange={setFilter} />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left w-full">
        {trendingItems.map((item: ITrendingItem) => (
          <Card
            key={item.id}
            href="#"
            title={item.media_type === 'tv' ? item.name : item.title}
            desc={item.overview}
            topic={item.media_type.toUpperCase()}
            arrow={false}
            imgUrl={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
};
