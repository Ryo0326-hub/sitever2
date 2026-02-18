"use client";

import Hero from "@/app/Hero";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import BlogPreview from "@/components/BlogPreview";

export default function HomePage() {
  const bgColor = "#4682B4";
  
  const testimonials = [
    {
      quote:
        "Multi-threaded AI agentic system using async call management to optimize Catan gameplay. Project presented @ CxC Datathon 2026.",
      name: "Catan Agent",
      designation: "Python, Gemini API, OpenAI, Async",
      src: "/projects/catan-agent.png",
      links: {
        devpost: "https://devpost.com/software/catana-7m83u5"
      }
    },
    {
      quote:
        "Random forest regression model to predict next-quarter revenue, operating income, and net profit for three Japanese public companies.",
      name: "Financial Forecasting Model",
      designation: "Python, scikit-learn, pandas",
      src: "/projects/financial-forecast.png",
      links: {
        code: "https://colab.research.google.com/drive/1QVUp-jYklTIS6Fw4vRmCpyGBNKOgL6Qn",
        report: "https://docs.google.com/document/d/1rtRevoSyVGVwqHZtH3wG0XEVqjaqrddZQcJ-YVLcAdk/edit?tab=t.0"
      }
    },
    {
      quote:
        "TCP port scanner from scratch using Scapy, implementing both TCP SYN and TCP Connect scan. Developed an ARP spoofing attack tool.",
      name: "Hand-Crafted Port Scanner",
      designation: "Scapy, Python, TCP/IP, ARP",
      src: "/projects/port-scanner.png",
      links: {
        github: "https://github.com/Ryo0326-hub/personal_portscan"
      }
    },
    {
      quote:
        "MCP database server that allows Claude LLM to safely query a relational database using structured tools.",
      name: "Database MCP Server with Safe Querying",
      designation: "Python, SQLite, MCP, SQL",
      src: "/projects/database-mcp.png",
      links: {
        github: "https://github.com/Ryo0326-hub/db_mcp"
      }
    },
    {
      quote: "Malware classification pipeline using the EMBER dataset to distinguish malicious ones from benign.",
      name: "Malware Detection using Neural Network",
      designation: "Python, TensorFlow/Keras",
      src: "/projects/malware-detection.png",
      links: {}
    },
    {
      quote: "Hands-on demonstration of building a functional AI-powered chatbot agent using AWS services and modern prompt-based tooling.",
      name: "AWS AI Agent",
      designation: "AWS Lambda, Python",
      src: "/projects/aws-ai-agent.png",
      links: {
        github: "https://github.com/Ryo0326-hub/agent-handson"
      }
    },
    {
      quote: "An interactive Valentine's Day website with spotlight effects and animations.",
      name: "Valentine Site",
      designation: "JavaScript, CSS, Vite",
      src: "/projects/valentine-site.png",
      links: {
        github: "https://github.com/Ryo0326-hub/valentine_site",
        site: "https://valentine-ver1.vercel.app/"
      }
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
          marginTop: "-10px",
          padding: "0px 24px 80px",
        }}
      >
        <div className="mx-auto max-w-4xl">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
    </main>
  );
}