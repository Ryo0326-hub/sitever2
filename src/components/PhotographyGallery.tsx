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
        
        {/* 3D Cards with Bird Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-12 gap-6 md:gap-8 lg:gap-10">
          <CardContainer className="inter-var w-full max-w-[18rem]">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xs max-w-sm mt-3 dark:text-neutral-300 text-center"
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
          <CardContainer className="inter-var w-full max-w-[18rem]">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xs max-w-sm mt-3 dark:text-neutral-300 text-center"
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
          <CardContainer className="inter-var w-full max-w-[18rem]">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xs max-w-sm mt-3 dark:text-neutral-300 text-center"
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

