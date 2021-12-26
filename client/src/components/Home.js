import React from "react";
import Greeting from "./greeting/Greeting.js";
import About from "./about/About.js";
import Experience from "./experience/Experience.js";
import Projects from "./projects/Projects.js";

export default function Home() {
  return (
    <React.Fragment>
      <Greeting />
      <About />
      <Experience />
      <Projects />
    </React.Fragment>
  );
}
