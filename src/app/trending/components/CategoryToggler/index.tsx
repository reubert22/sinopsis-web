'use client';

import { CATEGORIES } from '../Wrapper';

interface ICategoryTogglerProps {
  category: string;
  setCategory: (category: ICategoryTogglerProps['category']) => void;
}

export const CategoryToggler = ({
  category,
  setCategory,
}: ICategoryTogglerProps) => {
  const categories = [
    { title: 'All', id: CATEGORIES.all },
    { title: 'Movies', id: CATEGORIES.movies },
    { title: 'People', id: CATEGORIES.people },
    { title: 'Tv Series', id: CATEGORIES.tv_series },
  ];

  return (
    <div className="flex justify-between w-[35%]">
      {categories.map((btn) => (
        <Button
          key={btn.id}
          title={btn.title}
          selected={btn.id === category}
          onClick={() => setCategory(btn.id)}
        />
      ))}
    </div>
  );
};

interface IButtonProps {
  title: string;
  onClick: () => void;
  selected: boolean;
}

const Button = ({ title, onClick, selected }: IButtonProps) => {
  const darkSelectedText = selected
    ? 'dark:text-[#fff]'
    : 'dark:text-neutral-500';
  const lightSelectedText = selected ? 'text-[#000]' : 'text-neutral-400';

  return (
    <p
      role="button"
      onClick={onClick}
      className={`w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ${lightSelectedText} ${darkSelectedText}`}
    >
      {title}
    </p>
  );
};
