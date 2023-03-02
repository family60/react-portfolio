import React from "react";

export default function Nav({currentPage, handlePageChange}){
    return(
        <div className="container nav-section">
            <div className="row">
                <p className="col-md-3 initials">{"<KP/>"}</p>
                <ul className="nav nav-pills col-md-6">
                    <li className="nav-item">
                        <a href="#home" onClick={() => handlePageChange("Home")} className={currentPage ==="Home" ? "nav-link active" : "nav-link"}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" onClick={() => handlePageChange("About")} className={currentPage ==="About" ? "nav-link active" : "nav-link"}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" onClick={() => handlePageChange("Projects")} className={currentPage ==="Projects" ? "nav-link active" : "nav-link"}>Projects</a>
                    </li>
                </ul>
                <div className="col-md-3 icons">
                    <a href="https://www.linkedin.com/in/kush-patel-b73230202/" target="_blank"><img className="icon" src={require("../../src/assets/images/linkedin_white.png")}/></a>
                    <a href="https://github.com/family60" target="_blank"><img className="icon" src={require("../../src/assets/images/github_white.png")}/></a>
                    <a href={require("../../src/assets/Kush-Patel.pdf")} target="_blank"><img className="icon" src={require("../../src/assets/images/resume_icon_white.png")}/></a>
                </div>
            </div>
        </div>
    );
};