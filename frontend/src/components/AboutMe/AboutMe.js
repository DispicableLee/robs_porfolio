import React from "react";
import { useState, useEffect } from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div id="about-me-main">
      <div className="about-me-header">
        <h2>About Me</h2>
      </div>
      <div className="about-me">
        <p>
          My name is Robert Lee. I am a Software Engineer currently focusing on
          developing personal projects, but am looking for work. I am proficient
          with the MERN Stack, as well as Ruby-On-Rails/React. I have proven
          expertise in backend-management and design, but I prefer to work on
          the front-end, client-facing aspects of software and web development.
        </p>
      </div>
    </div>
  );
}
