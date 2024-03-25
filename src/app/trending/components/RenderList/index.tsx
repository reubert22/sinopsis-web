import { ITrendingRequest } from '@/api/usefetchTrending';
import { Card } from '@/components/Card';
import { ITrendingItem } from '@/store/trendingStore';
import { posterApiUrl } from '@/utils/apiConstants';
import { InfiniteData } from '@tanstack/react-query';

export const RenderList = ({
  data,
}: {
  data: InfiniteData<ITrendingRequest, unknown> | undefined;
}) => (
  <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left w-full">
    {data?.pages &&
      data.pages.map((page) =>
        page.results.map((item: ITrendingItem) => (
          <Card
            key={item.id}
            href="#"
            title={item.media_type === 'tv' ? item.name : item.title}
            desc={item.overview}
            topic={item.media_type.toUpperCase()}
            arrow={false}
            imgUrl={`${posterApiUrl('original')}${item.backdrop_path}`}
          />
        ))
      )}
  </div>
);
