import React from "react";
import "./Header.css"

export default function AppHeader(){


    const headerNavLinks = [
        {
            icon: "",
            url: "https://www.instagram.com/hawtcurryans/",
            userName: "@hawtcurryans"

        }
    ]


    return (
        <div id="header-main">
            <h1 className="header-main-header">Robert Lee</h1>
        </div>
    )
}