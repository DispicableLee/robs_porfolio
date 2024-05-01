import React from "react";
import "./ProjectsSection.css"

export default function ProjectsSection({doneReading, setDoneReading}){



    const projectObjectArray = [
        {
            name: "project",
            github: "project github link",
            live: "project live link (if applicable)",
            description: "project description"
        },
        {
            name: "LemonChord.v3",
            github: "project github link",
            live: "project live link (if applicable)",
            description: "Aesthetically-overhauled spotify clone"
        },
        {
            name: "LemonChord.v3",
            github: "project github link",
            live: "project live link (if applicable)",
            description: "Aesthetically-overhauled spotify clone"
        }
    ]

    const renderedProjects = projectObjectArray.map((project)=>{
        return (
            <div id="project-card"
                className={doneReading ? "done" : ""}
            >
                <div className="project-card-header">
                    <h2>{project.name}</h2>
                </div>
                <img alt="project image"/>
                <div className="project-description">
                    <p>{project.description}</p>
                </div>
            </div>
        )
    })






    return (
        <div id="projects-section-main"
            className={doneReading ? "done" : ""}
            onMouseEnter={()=>setDoneReading(!doneReading)}
            onMouseLeave={()=>setDoneReading(!doneReading)}
        >
            <div id="project-tab-open"
                className={doneReading ? "done" : ""}
            >
                <h1>Projects</h1>
            </div>
            <div className={doneReading ? "project-card-section-done" : "project-card-section"}>
                {renderedProjects}

            </div>


        </div>
    )
}