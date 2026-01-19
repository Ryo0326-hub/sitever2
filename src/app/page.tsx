"use client";

import { useState, useEffect } from "react";
import Hero from "@/app/Hero";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import BlogPreview from "@/components/BlogPreview";

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);
  const bgColor = isDark ? "#000000" : "#4682B4";
  
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.documentElement.style.backgroundColor = bgColor;
  }, [bgColor]);
  const testimonials = [
    {
      quote:
        "A robust data access layer designed to simplify database management for AI workflows.",
      name: "Database MCP",
      designation: "Project",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "A network scanning tool built with Scapy to analyze ports and services efficiently.",
      name: "Port Scanner using Scapy",
      designation: "Project",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "A modern website built for the UWJSA community with a focus on clarity and speed.",
      name: "UWJSA Website",
      designation: "Project",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Details coming soon.",
      name: "Project Four",
      designation: "Project",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Details coming soon.",
      name: "Project Five",
      designation: "Project",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main
      className="relative overflow-x-hidden min-h-screen"
      style={{ maxWidth: "100vw", width: "100%", backgroundColor: bgColor, paddingTop: "40px", margin: 0 }}
    >
      <section className="relative" style={{ backgroundColor: bgColor }}>
        <div
          className="mx-auto max-w-4xl px-6 pt-0 pb-0"
          style={{ maxWidth: "100%", width: "100%" }}
        >
          <Hero />
          {/* <BlogPreview /> */}
        </div>
      </section>
      <section
        className="relative"
        style={{
          backgroundColor: bgColor,
          marginTop: "15px",
          padding: "0px 24px 80px",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
        
        {/* Theme Toggle Button */}
        <div className="flex justify-center" style={{ marginTop: "9px" }}>
          <button
            onClick={() => setIsDark(!isDark)}
            className="px-5 py-2.5 rounded-full border border-white/30 hover:border-white/50 transition-all text-base"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#ffffff" }}
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </section>
    </main>
  );
}