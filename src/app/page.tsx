import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiGmail,
} from "@icons-pack/react-simple-icons";
import { IconLink } from "@/components/icon-link";
import { JobDescription } from "@/components/job-description";
import { Badge } from "@/components/badge";

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 bg-white">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold ">Carlos Huarcaya</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-zinc-500 print:text-[12px]">
              I&apos;m a software engineer who enjoys creating innovative and
              complex solutions.
            </p>
            <p className="font-mono text-pretty text-sm text-zinc-500">
              Lima, Perú 🇵🇪
            </p>
            <div className="mt-4 flex space-x-3">
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
        <div>
          <h2 className="text-xl font-bold mb-1">About</h2>
          <p className="text-pretty font-mono text-sm text-zinc-500 print:text-[12px]">
            Solid backend knowledge implementing rest API with Express.js,
            Nest.js, MongoDB, MySql, jsonwebtoken, GraphQl and Typescript.
            Strong understanding frontend with HTML/CSS, React.js, Next.js,
            react-hooks, Redux, Redux-Saga, Webpack, Sass, CSS Module. And I’ve
            experience deploying apps with Docker, Docker Compose, Kubernetes.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">Work Experience</h2>
          <div className="mt-4 flex flex-col space-y-4">
            <JobDescription />
            <JobDescription />
            <JobDescription />
            <JobDescription />
            <JobDescription />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">Education</h2>
          <div className="mt-4 flex flex-col space-y-4">
            <JobDescription />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">Skills</h2>
          <div className="mt-4 flex flex-row gap-x-2 gap-y-2 flex-wrap">
            <p className="text-pretty font-mono text-xs text-zinc-100 print:text-[12px] p-1 rounded-md font-semibold bg-zinc-700">
              React
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="border border-gray-200 rounded-md p-2">
              <h3 className="text-md font-semibold">Parabol</h3>
              <p className="text-xs font-mono text-zinc-500 mt-2 mb-4">
                Parabol is a remote retrospective meeting tool that helps teams
                run engaging and productive meetings.
              </p>
              <div className="flex flex-row gap-1 flex-wrap">
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
