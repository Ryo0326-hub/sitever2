"use client";

import React from "react";
import SocialLinks from "@/app/SocialLinks";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function Hero() {
  return (
    <div className="relative max-w-4xl mx-auto pb-40">
        {/* Content */}
        <div
          className="relative z-20 text-center"
          style={{ marginTop: "-5px" }}
          suppressHydrationWarning
        >
        <div className="flex justify-center" style={{ marginTop: '0px', marginBottom: '6px' }}>
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

        <p className="text-base md:text-lg mt-2 text-white font-normal inter-var text-center">
          <EncryptedText
            text="Mathematics @ UWaterloo"
            encryptedClassName="text-white/70"
            revealedClassName="text-white"
            revealDelayMs={50}
          />
        </p>

        <div className="mt-4 flex justify-center">
          <SocialLinks
            linkedinUrl="https://www.linkedin.com/in/ryo-kitano"
            resumeUrl="https://drive.google.com/file/d/1CbC_Q4y48mqkErDvSLoNuAwDVhM_puCs/view?usp=sharing"
            githubUrl="https://github.com/Ryo0326-hub"
            discordUrl="https://discord.com/users/654344733195239435"
          />
        </div>

        <div className="flex justify-center items-center" style={{ marginTop: '12px' }}>
          <div style={{ marginLeft: '0px' }} className="md:ml-[190px]">
            <iframe 
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=6271990" 
              style={{ border: 'none', width: '100%', maxWidth: '520px', height: '120px', overflow: 'hidden' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}