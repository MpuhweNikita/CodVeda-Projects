import React from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ScrollRevealSection from "./components/ScrollRevealSection";
import PageTransition from "./components/PageTransition";
import "./App.css";

function App() {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <div className="App">
          <HeroSection />
          <ProjectsSection />
          <ScrollRevealSection />
        </div>
      </PageTransition>
    </AnimatePresence>
  );
}

export default App;
