import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./Components/Loading";
const Headers = lazy(() => import("./Pages/Headers"));
const HeroSection = lazy(() => import("./Pages/HeroSection"));
const Skills = lazy(() => import("./Pages/Skills"));
const Projects = lazy(() => import("./Pages/Projects"));
const Contact = lazy(() => import("./Pages/Contact"));
const Footer = lazy(() => import("./Pages/Footer"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Headers />
        <HeroSection />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
