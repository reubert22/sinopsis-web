'use client';

import { ITrendingItem, useTrending } from '@/store/trendingStore';
import { useRouter } from 'next/navigation';

export default function Trending() {
  const { filter, setFilter, trending } = useTrending();
  const router = useRouter();
  const trendingItems = trending || [];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p
          onClick={() => router.back()}
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          &lt;
        </p>
        <div>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="search"
            className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          />
        </div>
        <p className="w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Trending Topic&nbsp;
        </p>
      </div>

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
    </main>
  );
}
