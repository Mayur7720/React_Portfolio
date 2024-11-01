
import "./App.css";
import { lazy } from "react";

const Headers = lazy(() => import("./Pages/Headers"));
const HeroSection = lazy(() => import("./Pages/HeroSection"));

const Skills = lazy(() => import("./Pages/Skills"));

const Projects = lazy(() => import("./Pages/Projects"));

const Contact = lazy(() => import("./Pages/Contact"));

const Footer = lazy(() => import("./Pages/Footer"));

function App() {
  return (
    <>
      <Headers />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
