"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  links?: {
    github?: string;
    site?: string;
    code?: string;
    report?: string;
    devpost?: string;
  };
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto font-sans antialiased" style={{ maxWidth: "500px", padding: "16px 16px", marginLeft: "calc(50% - 250px + 50px)", marginRight: "calc(50% - 250px - 50px)" }}>
      <div className="relative grid grid-cols-2" style={{ gap: "16px" }}>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="font-bold text-white" style={{ fontSize: "18px" }}>
              {testimonials[active].name}
            </h3>
            <p className="text-white/70" style={{ fontSize: "12px" }}>
              {testimonials[active].designation}
            </p>
            <motion.p className="text-white/80" style={{ marginTop: "8px", fontSize: "12px" }}>
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            {testimonials[active].links && Object.keys(testimonials[active].links || {}).length > 0 && (
              <div className="flex gap-3 mt-5 flex-wrap">
                {testimonials[active].links?.devpost && (
                  <a
                    href={testimonials[active].links.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-gray-600 text-white transition-colors duration-200 border-2 border-white"
                  >
                    Devpost
                  </a>
                )}
                {testimonials[active].links?.github && (
                  <a
                    href={testimonials[active].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-gray-600 text-white transition-colors duration-200 border-2 border-white"
                  >
                    GitHub
                  </a>
                )}
                {testimonials[active].links?.site && (
                  <a
                    href={testimonials[active].links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-gray-600 text-white transition-colors duration-200 border-2 border-white"
                  >
                    Live Site
                  </a>
                )}
                {testimonials[active].links?.code && (
                  <a
                    href={testimonials[active].links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-gray-600 text-white transition-colors duration-200 border-2 border-white"
                  >
                    Code
                  </a>
                )}
                {testimonials[active].links?.report && (
                  <a
                    href={testimonials[active].links.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-gray-600 text-white transition-colors duration-200 border-2 border-white"
                  >
                    Report
                  </a>
                )}
              </div>
            )}
          </motion.div>
          <div className="flex justify-end md:pt-0" style={{ gap: "16px", paddingTop: "12px", paddingRight: "0px", paddingLeft: "215px" }}>
            <button
              onClick={handlePrev}
              className="group/button flex items-center justify-center rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40"
              style={{ width: "48px", height: "32px" }}
            >
              <IconArrowLeft className="text-white transition-all duration-300 group-hover/button:-translate-x-1" style={{ width: "20px", height: "20px" }} />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex items-center justify-center rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40"
              style={{ width: "48px", height: "32px" }}
            >
              <IconArrowRight className="text-white transition-all duration-300 group-hover/button:translate-x-1" style={{ width: "20px", height: "20px" }} />
            </button>
          </div>
        </div>
        <div>
          <div className="relative" style={{ width: "120px", height: "160px" }}>
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
