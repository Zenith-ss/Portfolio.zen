import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";
import ScrollGears from "./components/ScrollGears";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070C16] text-[#F4EDE0] font-sans selection:bg-[#F4EDE0] selection:text-[#14213D] overflow-x-clip relative transition-colors duration-300">
      <ScrollGears />
      <ProgressBar />

      {/* Full-Width Navigation Bar extending edge-to-edge */}
      <Navigation />

      {/* TenET-Inspired Framed Container with 3D Side Borders (Responsive for Android & Desktop) */}
      <div className="w-full max-w-6xl mx-auto border-x-0 sm:border-x border-[#F4EDE0]/15 bg-[#0A1120] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10 transition-colors duration-300">
        <main>
          <Hero />
          <About />
          <Projects />
          <Achievements />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
