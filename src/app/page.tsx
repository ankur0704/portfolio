import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <About />
      {/* Other sections will go here */}
      <div className="h-screen flex items-center justify-center border-t border-white/10">
        <h2 className="text-4xl font-serif uppercase text-white/20">Scroll to explore</h2>
      </div>
    </div>
  );
}
