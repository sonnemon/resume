import Link from "next/link";
import { FC, ReactNode } from "react";

interface IconButtonProps {
  href: string;
  children: ReactNode;
}

export const IconLink: FC<IconButtonProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="h-8 w-8 border border-zinc-200 flex items-center justify-center rounded-md text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800 p-2"
    >
      {children}
    </Link>
  );
};
