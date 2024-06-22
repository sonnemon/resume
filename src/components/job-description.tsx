import React from "react";
import { Badge } from "./badge";

export const JobDescription = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-base">Moonshot Partners</h3>
          <Badge />
        </div>
        <p className="text-pretty font-mono text-sm text-zinc-500 print:text-[12px]">
          2020 - Present
        </p>
      </div>
      <h3 className="text-sm font-light font-mono">Software Engineer</h3>
      <p className="text-pretty font-mono text-xs text-zinc-500 print:text-[12px]">
        Leading the development of the Film.io platform. Technologies: React,
        TypeScript, Node.js
      </p>
    </div>
  );
};
