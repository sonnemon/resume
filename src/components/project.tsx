import { FC } from 'react';
import { Badge } from './badge';
import { classNames } from '@/utils/utils';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  skills: string[];
  link?: string;
}

const Project: FC<ProjectProps> = ({ title, description, skills, link }) => {
  return (
    <div className="border border-gray-200 rounded-md p-2">
      <h3
        className={classNames(
          'text-md font-semibold w-full',
          link && 'hover:hover:text-teal-600 cursor-pointer'
        )}
      >
        {link ? (
          <Link href={link} target="_blank">
            {title} 🔗
          </Link>
        ) : (
          title
        )}
      </h3>
      <p className="text-xs font-mono text-zinc-500 mt-2 mb-4">{description}</p>
      <div className="flex flex-row gap-1 flex-wrap">
        {skills.map((skill, idx) => (
          <Badge text={skill} key={`badge_key_${idx}`} />
        ))}
      </div>
    </div>
  );
};

export default Project;
