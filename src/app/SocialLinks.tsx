"use client";

import React from "react";

type Props = {
  linkedinUrl: string;
  resumeUrl: string;
  githubUrl: string;
  discordUrl: string;
};

export default function SocialLinks(props: Props) {
  return (
    <div className="flex items-center justify-center gap-48">
      <div className="transform -translate-y-12">
        <a href={props.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition">
          <img src="/icons/linkedin.png" alt="LinkedIn" height="48" width="48" className="object-contain" />
        </a>
      </div>

      <div className="transform translate-y-12">
        <a href={props.discordUrl} target="_blank" rel="noreferrer" aria-label="Discord" className="hover:opacity-80 transition">
          <img src="/icons/discord.png" alt="Discord" height="48" width="48" className="object-contain" />
        </a>
      </div>

      <div className="transform -translate-y-12">
        <a href={props.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-80 transition">
          <img src="/icons/githublogo.png" alt="GitHub" height="48" width="48" className="object-contain" />
        </a>
      </div>

      <div className="transform translate-y-12">
        <a href={props.resumeUrl} target="_blank" rel="noreferrer" aria-label="Resume" className="hover:opacity-80 transition">
          <img src="/icons/resume.png" alt="Resume" height="36" width="36" className="object-contain" />
        </a>
      </div>
    </div>
  );
}