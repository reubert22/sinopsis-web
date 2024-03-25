import { IInputProps } from './interfaces';

export const Input = ({ value, onChange }: IInputProps) => (
  <div className="w-full">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="search"
      className=" my-3 w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl border-neutral-300 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-full lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-[#000] dark:text-[#fff] placeholder-[#000] dark:placeholder-[#fff] placeholder-opacity-50 border-b"
    />
  </div>
);
