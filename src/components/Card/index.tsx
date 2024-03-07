'use client';

import { blackAndWhite, descriptionClassName } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

interface ICardProps {
  href: string;
  title: string | undefined;
  topic?: string;
  desc: string;
  arrow?: boolean;
  imgUrl?: string;
}

export const Card = ({
  href,
  title,
  topic,
  desc,
  arrow = true,
  imgUrl,
}: ICardProps) => {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      {imgUrl && (
        <Image
          src={imgUrl || ''}
          alt={`${title}`}
          className="object-contain w-full"
          width={64}
          height={64}
        />
      )}
      {topic && (
        <h2
          className={`text-[12px] my-[5px] font-normal opacity-80 ${descriptionClassName}`}
        >
          {topic}
        </h2>
      )}
      <h2
        className={`mb-3 text-2xl font-semibold line-clamp-3 ${blackAndWhite} `}
      >
        {title || ''}
        {arrow && (
          <span className="ml-[5px] inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        )}
      </h2>
      <p
        className={`m-0 max-w-[30ch] text-sm text-balance line-clamp-3 ${descriptionClassName}`}
      >
        {desc}
      </p>
    </Link>
  );
};
