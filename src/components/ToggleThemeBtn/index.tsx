'use client';

import React from 'react';
import { useCurrentTheme } from '@/hooks/useCurrentTheme';
import Image from 'next/image';

export const ToggleThemeBtn = () => {
  const { handleToggleTheme, isThemeDark } = useCurrentTheme();

  return (
    <>
      <button
        onClick={handleToggleTheme}
        className="absolute right-[30px] top-[30px] w-[30px] h-[30px] border flex items-center justify-center rounded border-[#cecece]"
      >
        <Image
          src={isThemeDark ? '/sun.png' : '/moon.png'}
          alt="Vercel Logo"
          className="dark:invert"
          width={20}
          height={20}
          priority
        />
      </button>
    </>
  );
};
