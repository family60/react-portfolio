import React from "react";

export default function Projects() {
    return(
        <div className="project-section">
            <h2>Projects</h2>
            <div className="container d-flex">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Online Text Editor</div>
                        <img src={require("../../assets/images/note_taker.PNG")} className="card-img-top project-preview" alt="Just Another Text Editor"></img>
                        <div className="card-body">
                            <p className="card-text">
                            Users may view already existing notes they may have taken on the left hand side of the webpage. Clicking on any pre-existing note will then load the title of the note in the center of the page and its body/content underneath it. Additionally the use can make new notes and save them by clicking the plus and save icons on the top right hand side of the page respectively. If the user wishes to go back to the home page, they can click the top left icon/logo. Notes can be deleted by clicking on the red trash bin next to said note on the left hand side of the page.
                            </p>
                            <a href="https://github.com/family60/Online-Note-Taking" target="_blank" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">CMS Hospital Database</div>
                        <img src={require("../../assets/images/hospital_database.PNG")} className="card-img-top project-preview" alt="Just Another Text Editor"></img>
                        <div className="card-body">
                            <p className="card-text">
                            When a user first enters the website, they are prompted with a login/signup screen. If they already have an account with us, they can login, if not, they can fil out a sign up form to get started. Once either form is submitted, the user is redirected to the homepage. From there, the user may read about the appointments that some patients have with some doctors, read about the top doctors working at the hospital, or click on any link in the navbar. There is an option to logout or view Floor or Patients tables. Clicking on their table link with allow the user to view and run CRUD operations on each table (if they have permission).
                            </p>
                            <a href="https://github.com/family60/cms-hospital-database" target="_blank" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">Tech Blog</div>
                        <img src={require("../../assets/images/the_tech_blog.PNG")} className="card-img-top project-preview" alt="Just Another Text Editor"></img>
                        <div className="card-body">
                            <p className="card-text">
                            CMS styled technology blog. Users (mainly developers) can make posts and comment on other users posts as well. Even when not logged in, users may still view posts on the homepage. Dashboard only works for logged in users as it is meant as a place to view their posts and comments.
                            </p>
                            <a href="https://github.com/family60/technology-blog" target="_blank" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Team Profile Generator</div>
                        <img src={require("../../assets/images/team_profile_generator.PNG")} className="card-img-top project-preview" alt="Just Another Text Editor"></img>
                        <div className="card-body">
                            <p className="card-text">
                                Command Line application that uses Inquirer to prompt the user with questions. THe user can generate a profile for their team and once satisfied with the number of cards/employees entered, the app generates a html file that can then be downloaded/copy and pasted for real use.
                            </p>
                            <a href="https://github.com/family60/Team-Profile-Generator" target="_blank" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">README.md Generator</div>
                        <img src={require("../../assets/images/readme_generator.PNG")} className="card-img-top project-preview" alt="Just Another Text Editor"></img>
                        <div className="card-body">
                            <p className="card-text">
                            An application using node.js and inquirer v8.2.4 that uses inline commands for developers to create professional looking README.md files for their personal or even professional projects. The end result file is written into a README.md file in the Develop/ directory of this project folder.
                            </p>
                            <a href="https://github.com/family60/ReadMe-Generator" target="_blank" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">Weather Dashboard</div>
                        <img src={require("../../assets/images/weather_dashboard.PNG")} className="card-img-top project-preview" alt="Just Another Text Editor"></img>
                        <div className="card-body">
                            <p className="card-text">
                            The program allows users to enter a city name and search for the current forecast and also the next five days for that city. Unique city names are stored in the users local storage and rendered as input fields that the user can click on to search via their search history. The page background also changes dynamically based on the city the user has searched for. This application uses HTML, CSS, JavaScript, Bootstrap, and two third party API's: "Open Weather Api" for the weather data and "Unsplashed" for the background images.
                            </p>
                            <a href="https://github.com/family60/Weather-Dashboard" target="_blank" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};