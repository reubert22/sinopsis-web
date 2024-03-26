'use client';

import { useState } from 'react';
import { BackButton } from '@/components/BackButton/BackButton';
import { CategoryToggler } from '../CategoryToggler';
import { Movies } from '../Movies';
import { All } from '../All/All';
import { Tv } from '../Tv';
import { People } from '../People';

export const CATEGORIES = {
  all: 'all',
  movies: 'movies',
  people: 'person',
  tv_series: 'tv',
};

export const Wrapper = () => {
  const [category, setCategory] = useState<string>(CATEGORIES.all);

  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <BackButton />

        <CategoryToggler category={category} setCategory={setCategory} />
      </div>

      {category === CATEGORIES.all && <All />}
      {category === CATEGORIES.movies && <Movies />}
      {category === CATEGORIES.people && <People />}
      {category === CATEGORIES.tv_series && <Tv />}
    </>
  );
};
