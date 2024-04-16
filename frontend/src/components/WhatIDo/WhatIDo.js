import React from "react";
import { useState, useEffect } from "react";
import "./WhatIDo.css";

export default function WhatIDo() {
  return (
    <div id="what-i-do">
      <div className="header">
        <h2>What I do</h2>
      </div>
      <div className="whati-do">
        <p>
          I’ve been busy for the past couple of months working on LemonChord.v3,
          an aesthetically overhauled Spotify-Clone, really focusing my
          Aesthetic tastes. As a group, several friends and I created Pacer, a
          social media platform for casual athletes. I am always on the lookout
          for new technologies
        </p>
      </div>
    </div>
  );
}
