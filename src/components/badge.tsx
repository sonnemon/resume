import { FC } from 'react';

interface BadgeProps {
  text: string;
}

export const Badge: FC<BadgeProps> = ({ text }) => {
  return (
    <p className="text-pretty font-mono text-xs bg-zinc-300 print:text-[12px] p-1 rounded-md font-semibold w-fit">
      {text}
    </p>
  );
};
