import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiGmail,
} from '@icons-pack/react-simple-icons';
import { Badge } from '@/components/badge';
import { IconLink } from '@/components/icon-link';
import { JobDescription } from '@/components/job-description';
import cvData from '@/data/cv.json';
import { EducationDescription } from '@/components/education-description';
import Project from '@/components/project';

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 bg-white">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold ">Carlos Huarcaya</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-zinc-500 print:text-[12px] mt-4">
              I&apos;m a software engineer who enjoys creating innovative and
              complex solutions.
            </p>
            <p className="font-mono text-pretty text-sm text-zinc-500">
              Lima, Perú 🇵🇪
            </p>
            <div className="mt-4 flex space-x-3 print:hidden">
              <IconLink href="www.github.om">
                <SiGithub />
              </IconLink>
              <IconLink href="www.github.om">
                <SiLinkedin className="w-4 h-4" />
              </IconLink>
              <IconLink href="www.github.om">
                <SiX />
              </IconLink>
              <IconLink href="www.github.om">
                <SiGmail />
              </IconLink>
            </div>
          </div>
          <span className="relative flex shrink-0 overflow-hidden rounded-xl size-28">
            <img
              className="aspect-square h-full w-full"
              src="/profile.jpg"
              alt="Carlos Huarcaya"
            />
          </span>
        </div>
        <div className="w-full hidden print:block">
          <p className="font-mono text-sm text-zinc-500  print:flex">
            carlosh.mitma@gmail.com
          </p>
          <p className="font-mono text-sm text-zinc-500 print:flex">
            +51 993083804
          </p>
          <p className="font-mono text-sm text-zinc-500 print:flex">
            https://www.linkedin.com/in/carlos-huarcaya-595886171/
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p className="text-pretty font-mono text-sm text-zinc-500 print:text-[12px]">
            {cvData.about}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">Work Experience</h2>
          <div className="mt-4 flex flex-col space-y-4">
            {cvData.expirience.map((job, idx) => (
              <JobDescription {...job} key={`job_${idx}`} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">Education</h2>
          <div className="mt-4 flex flex-col space-y-4">
            {cvData.education.map((item, idx) => (
              <EducationDescription {...item} key={`education_${idx}`} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <div className="grid grid-cols-3 gap-3">
            {cvData.projects.map((project, idx) => (
              <Project {...project} key={`project_${idx}`} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">Strong Skills</h2>
          {cvData.skills.map((skill, idx) => {
            return (
              <div className="mb-4" key={`skill_${idx}`}>
                <h3 className="text-sm font-semibold">{skill.title}</h3>
                <div className="flex gap-2 flex-wrap mt-1">
                  {skill.items.map((item, badgeIdx) => (
                    <Badge text={item} key={`badge_key_${badgeIdx}`} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
