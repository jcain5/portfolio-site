import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
