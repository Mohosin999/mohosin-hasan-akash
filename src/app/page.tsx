import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#0a0a0a] text-[#ededed] light:bg-white light:text-zinc-900">
      <Navbar />
      <main id="main">
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
