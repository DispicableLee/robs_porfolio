import React from "react";
import githubIcon from '../../icons/githubicon.png'
import linkedInIcon from '../../icons/linkedinicon.png'
import "./Header.css"

export default function AppHeader(){


    const headerNavLinks = [
        // {
        //     icon: "",
        //     url: "https://www.instagram.com/hawtcurryans/",
        //     username: "@hawtcurryans"

        // },
        {
            icon: githubIcon,
            url: "https://github.com/DispicableLee",
            username: "DispicableLee"
        },
        {
            icon: linkedInIcon,
            url: "https://www.linkedin.com/in/robert-lee-webdeveloper/",
            username: "Robert Lee"
        }
    ]


    return (
        <div id="header-main">
            <h1 className="header-main-header">Robert Lee</h1>

            <div className="nav-links-container">
                <div className="nav-link">
                    <a href="https://www.linkedin.com/in/robert-lee-webdeveloper/"
                        target="_blank"
                    >
                        <img src={linkedInIcon}/>
                    </a>
                </div>
            </div>
        </div>
    )
}