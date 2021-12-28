import React from "react";
import Greeting from "./greeting/Greeting.js";
import About from "./about/About.js";
import Experience from "./experience/Experience.js";
import Projects from "./projects/Projects.js";
import Accomplishments from "./accomplishments/Accomplishments.js";

export default function Home() {
  return (
    <React.Fragment>
      <Greeting />
      <About />
      <Experience />
      <Projects />
      <Accomplishments />
    </React.Fragment>
  );
}
