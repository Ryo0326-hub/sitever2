import Hero from "@/components/Hero";
// import BlogPreview from "@/components/BlogPreview";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Hero />
        {/* <BlogPreview /> */}
      </div>
    </main>
  );
}