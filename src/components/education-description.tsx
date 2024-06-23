import React, { FC } from 'react';

interface EducationDescriptionProps {
  institution: string;
  description: string;
}

export const EducationDescription: FC<EducationDescriptionProps> = ({
  institution,
  description,
}) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-base">{institution}</h3>
        </div>
      </div>
      <p className="text-pretty font-mono text-xs text-zinc-500 print:text-[12px]">
        {description}
      </p>
    </div>
  );
};
