
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-300 bg-black body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}