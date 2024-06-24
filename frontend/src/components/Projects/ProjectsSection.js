import React from "react";
import lemonChordLogo from "../../icons/lemonchord.png"
import pacerLogo from "../../icons/pacer.png"
import "./ProjectsSection.css"

export default function ProjectsSection({doneReading, setDoneReading}){



    const projectObjectArray = [
        {
            name: "Dear Diary",
            github: "project github link",
            image: "image",
            live: "project live link (if applicable)",
            description: "Project Description"
        },
        {
            name: "LemonChord.v3",
            github: "https://github.com/DispicableLee/LemonChordv3",
            image: lemonChordLogo,
            live: "project live link (if applicable)",
            description: "Aesthetically-overhauled Spotify clone"
        },
        {
            name: "Pacer",
            github: "https://github.com/garysbot/pacer",
            image: pacerLogo,
            live: "project live link (if applicable)",
            description: "Aesthetically-overhauled Spotify clone"
        },
        {
            name: "Notify",
            github: "https://github.com/DispicableLee/not-ify",
            image: "image",
            live: "project live link (if applicable)",
            description: "Its not Spotify"
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
                <img alt="project image" 
                    src={project.image}
                    className="project-card-image"
                />
                <div className="project-description">
                    <p>{project.description}</p>
                    <a href={project.github} target="_blank">Github</a>
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