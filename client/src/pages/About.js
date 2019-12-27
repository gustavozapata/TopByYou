import React from "react";

import "./styles/About.css";
import imagen from "../images/about.png";

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <div>
        <img src={imagen} alt="about graph" />
      </div>
    </div>
  );
}
