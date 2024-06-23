import React, { FC } from 'react';
import { Badge } from './badge';

interface JobDescriptionProps {
  company: string;
  date: string;
  role: string;
  description: string;
  isRemote: boolean;
}

export const JobDescription: FC<JobDescriptionProps> = ({
  company,
  date,
  role,
  isRemote,
  description,
}) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-base">{company}</h3>
          <Badge text={isRemote ? 'Remote' : 'Onsite'} />
        </div>
        <p className="text-pretty font-mono text-sm text-zinc-500 print:text-[12px]">
          {date}
        </p>
      </div>
      <h3 className="text-sm font-light font-mono">{role}</h3>
      <p className="text-pretty font-mono text-xs text-zinc-500 print:text-[12px]">
        {description}
      </p>
    </div>
  );
};
