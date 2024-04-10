import React from "react";
import { useState, useEffect } from "react";
import "./MainBody.css"
import AboutMe from "../AboutMe/AboutMe";
import WhatIDo from "../WhatIDo/WhatIDo";
import ProjectsSection from "../Projects/ProjectsSection";

export default function MainBody(){
    const [doneReading, setDoneReading] = useState(false)
    return (
        <div id="main-body-main">
            <div className="bio-main">
                <AboutMe/>
                <WhatIDo/>


            </div>
            <ProjectsSection 
                doneReading={doneReading}
                setDoneReading={setDoneReading}
            />
        </div>
    )
}