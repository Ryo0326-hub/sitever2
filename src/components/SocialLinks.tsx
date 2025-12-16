"use client";

import React from "react";

type Props = {
  linkedinUrl: string;
  tryhackmeUrl: string;
  spotifyUrl: string;
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
        <a href={props.spotifyUrl} target="_blank" rel="noreferrer" aria-label="Spotify" className="hover:opacity-80 transition">
          <img src="/icons/spotify.png" alt="Spotify" height="48" width="48" className="object-contain" />
        </a>
      </div>

      <div className="transform translate-y-12">
        <a href={props.tryhackmeUrl} target="_blank" rel="noreferrer" aria-label="TryHackMe" className="hover:opacity-80 transition">
          <img src="/icons/tryhackme.png" alt="TryHackMe" height="48" width="48" className="object-contain" />
        </a>
      </div>
    </div>
  );
}