import Hero from "@/components/Hero";
import PhotographyGallery from "@/components/PhotographyGallery";
// import BlogPreview from "@/components/BlogPreview";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ maxWidth: '100vw', width: '100%' }}>
      <div className="mx-auto max-w-4xl px-6 py-20" style={{ maxWidth: '100%', width: '100%' }}>
        <Hero />
        {/* <BlogPreview /> */}
      </div>
      <PhotographyGallery />
    </main>
  );
}