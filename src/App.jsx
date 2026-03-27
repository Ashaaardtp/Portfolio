import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="relative overflow-hidden min-h-screen bg-[radial-gradient(ellipse_at_top_left,var(--primary-cta)_0%,var(--bg-card)_35%,var(--bg-main)_78%,#000_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,55,0.12)_0%,rgba(212,175,55,0.02)_35%,rgba(0,0,0,0.45)_100%)]" />
        <Navbar />
        <section
          id="home"
          className="scroll-mt-24">
          <Hero />
        </section>
        <section
          id="about"
          className="scroll-mt-24 mt-14 md:mt-20 lg:mt-24">
          <About />
        </section>
      </div>

      <section
        id="skills"
        className="scroll-mt-24">
        <Skills />
      </section>
      <div className="relative overflow-hidden bg-black">
        {/* Background layers (red gradient) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary-cta)_0%,var(--bg-card)_42%,var(--bg-main)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_42%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-(--primary-cta)/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-[520px] w-[520px] rounded-full bg-(--bg-card)/60 blur-3xl" />

        <div className="relative">
          <section
            id="project"
            className="scroll-mt-24">
            <Project />
          </section>
          <section
            id="contact"
            className="scroll-mt-24">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}
