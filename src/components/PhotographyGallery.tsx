"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function PhotographyGallery() {
  return (
    <section id="photography" className="min-h-screen py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Photography
        </h2>
        
        {/* 3D Card with Bird Image */}
        <div className="flex justify-center mb-12">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[18rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                Bird!
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xs max-w-sm mt-3 dark:text-neutral-300"
              >
                Quick snapshot of a northern cardinal 👀
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-5">
                <div className="w-full aspect-square overflow-hidden rounded-xl">
                  <img
                    src="/photos/bird.jpg"
                    height="1000"
                    width="1000"
                    className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Northern Cardinal"
                  />
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-4">
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}

