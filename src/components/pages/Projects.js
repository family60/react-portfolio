import React from "react";

export default function Projects() {
    return(
        <div className="project-section">
            
            <h2>Professional Projects</h2>
            <div className="d-flex">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">Baby Phoenix Studios</div>
                        <img src={require("../../assets/images/bps_transparent.png")} className="card-img-top project-preview" alt="Welcome to Anime Bootcamp"></img>
                        <div className="card-body">
                            <p className="card-text">
                                Working with the devs at Baby Phoenix Studios to help create a professional looking landing page for their studio website. Helping them with the early stages of development - planning out meetings and figuring out project requirements. Currently discussing mvp's to be met and possible deadlines for early stages of features to be developed.
                            </p>
                            <span className="badge badge-info">Bootstrap</span>
                            <span className="badge badge-info">React</span>
                            <span className="badge badge-info">Agile</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">Anime Bootcamp</div>
                        <img src={require("../../assets/images/anime_bootcamp.PNG")} className="card-img-top project-preview" alt="Welcome to Anime Bootcamp"></img>
                        <div className="card-body">
                            <p className="card-text">
                                Collaborated with a group of individual developers to create a unique and friendly method for users to browse for their favourite anime and manga. Anime Bootcamp is a MERN stack application that uses JWT for login and signup authentication and allows users to serach for manga and books through two different API's. Their saved books are then tied to their user account and is fetched from MongoDB using queries and mutations from GraphQL each time the user logs in.
                            </p>
                            <a href="https://github.com/renfunny/anime-bootcamp" target="_blank" className="btn btn-primary">GitHub</a>
                            <span className="badge badge-info">JWT</span>
                            <span className="badge badge-info">React</span>
                            <span className="badge badge-info">GraphQL</span>
                            <span className="badge badge-info">MongoDB</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <div className="card-header">CMS Hospital Database</div>
                        <img src={require("../../assets/images/hospital_database.PNG")} className="card-img-top project-preview" alt="Just Another Text Editor"></img>
                        <div className="card-body">
                            <p className="card-text">
                            Worked with a small group of developers to help create a better version of the CMS styled applications that hospitals have been using for a long period of time. Worked on Authentication using JSON Web Tokens (JWT), and created the express handlebar template for Patients table page and it's corresponding CRUD operations.
                            </p>
                            <a href="https://github.com/family60/cms-hospital-database" target="_blank" className="btn btn-primary">GitHub</a>
                            <span className="badge badge-info">Authentication</span>
                            <span className="badge badge-info">CRUD</span>
                            <span className="badge badge-info">Express Handlebars</span>
                            <span className="badge badge-info">MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <h2>Personal Projects</h2>
            <div className="container d-flex">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Google Book Search Engine</div>
                        <img src={require("../../assets/images/google_books.png")} className="card-img-top project-preview" alt="Search Books"></img>
                        <div className="card-body">
                            <p className="card-text">
                            Used JWT to allow users to login and sign up. From here, users have the options of searching for books, adding and removing books from their collection, and see more details on each book. This program uses the MERN stack, specifically: GraphQL to query for google books api data, Mongoose to save user info and saved books, Express and Apollo for server and React.
                            </p>
                            <a href="https://github.com/family60/google-books-search" target="_blank" className="btn btn-primary">GitHub</a>
                            <span className="badge badge-info">JWT</span>
                            <span className="badge badge-info">GraphQL</span>
                            <span className="badge badge-info">React</span>
                            <span className="badge badge-info">MongoDB</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">Online Text Editor</div>
                        <img src={require("../../assets/images/note_taker.PNG")} className="card-img-top project-preview" alt="Just Another Text Editor"></img>
                        <div className="card-body">
                            <p className="card-text">
                            Users may view already existing notes they may have taken on the left hand side of the webpage. Clicking on any pre-existing note will then load the title of the note in the center of the page and its body/content underneath it. Additionally the use can make new notes and save them by clicking the plus and save icons on the top right hand side of the page respectively. If the user wishes to go back to the home page, they can click the top left icon/logo. Notes can be deleted by clicking on the red trash bin next to said note on the left hand side of the page.
                            </p>
                            <a href="https://github.com/family60/Online-Note-Taking" target="_blank" className="btn btn-primary">GitHub</a>
                            <span className="badge badge-info">JSON</span>
                            <span className="badge badge-info">Data Persistency</span>
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
                            <span className="badge badge-info">Sessions</span>
                            <span className="badge badge-info">Bycrpt</span>
                            <span className="badge badge-info">Express Handlebars</span>
                            <span className="badge badge-info">Session</span>
                            <span className="badge badge-info">MySQL</span>
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
                            <span className="badge badge-info">Inquirer</span>
                            <span className="badge badge-info">Jest</span>
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
                            <span className="badge badge-info">Inquirer</span>
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
                            <span className="badge badge-info">API</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};