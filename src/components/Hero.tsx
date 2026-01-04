"use client";

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import SocialLinks from "@/components/SocialLinks";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function Hero() {
  return (
    <div className="relative">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        {/* Content */}
        <div className="relative z-20 text-center" suppressHydrationWarning>
        <div className="flex justify-center" style={{ marginTop: '20px', marginBottom: '8px' }}>
          <img src="/icons/spinning matrix.png" alt="Spinning Matrix" className="object-contain" style={{ width: '80px', height: '80px', animation: 'spin 3s linear infinite' }} />
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          <EncryptedText
            text="Ryo Kitano"
            encryptedClassName="text-white/70"
            revealedClassName="text-white"
            revealDelayMs={50}
          />
        </h1>

        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          <EncryptedText
            text="Honours Mathematics @ UWaterloo"
            encryptedClassName="text-white/70"
            revealedClassName="text-white"
            revealDelayMs={50}
          />
        </p>

        <div className="mt-8 flex justify-center">
          <SocialLinks
            linkedinUrl="https://www.linkedin.com/in/ryo-kitano"
            tryhackmeUrl="https://tryhackme.com/p/01ryobyte10"
            spotifyUrl="https://open.spotify.com/playlist/36nprrZRqI7aDKrfPEOMg3?si=0abf0974e5ed463d"
            discordUrl="https://discord.com/users/654344733195239435"
          />
        </div>

        <div className="flex justify-center overflow-hidden" style={{ marginTop: '20px', width: '100%', maxWidth: '100%' }}>
          <iframe 
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=6271990" 
            style={{ border: 'none', width: '100%', maxWidth: '100%', overflow: 'hidden' }}
          ></iframe>
        </div>
      </div>
    </WavyBackground>
    </div>
  );
}