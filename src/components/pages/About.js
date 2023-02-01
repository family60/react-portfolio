import React from "react";

export default function About() {
    return(
        <div className="about-content container">
            <div className="about-section">
                <h2>About Me</h2>
                <p>
                    I've always had a natural curiosity towards technology and so it was only a matter of time that
                    I would take up the chance to pursue a career in it. For me, coding gives me the ability to make
                    a real difference in the real world, provide value and solve problems that really matter. I want to keep
                    learning more about web development and new technologies to grow my skill set better mature my mind as a developer.
                     I hope to meet and work with like minded individuals who share the same passion. When I'm not coding, you can find me going on drives, reading, 
                    playing video games, rewatching my favourite shows and movies, etc.
                </p>
            </div>
            <div className="about-section">
                <h2>Education</h2>
                <p>
                    I graduated from Humber college with a diploma in "Computer Programming". My graduation happened
                    during the pandemic and so pursuing further studies became difficult as most bridge programs were no longer supported.
                    I decided to take a free online certification in "Javascript Algorithms and Data Structures" to pass time and try to learn coding on my own.
                    I quickly realized how intimidating learning to code on your own can be and how real imposter syndrome is when looking for jobs.
                    After not finding much success I decided to return to my studies at the University of Toronto, in their school of continuing studies.
                    There, I received a certificate for successfully completing their "Full-Stack Flex" Bootcamp.
                    Here, I became a fully certified Full-Stack developer and even added many different technologies and tools to my arsenal.
                </p>
            </div>
            <div className="about-section">
                <h2>Skill Set</h2>
                <div className="about-icons">
                    <img src={require("../../assets/images/js.png")}/>
                    <img src={require("../../assets/images/nodejs.png")}/>
                    <img src={require("../../assets/images/react.png")}/>
                    <img src={require("../../assets/images/mongodb.png")}/>
                    <img src={require("../../assets/images/mysql.png")}/>
                    <img src={require("../../assets/images/graphql.png")}/>
                </div>
            </div>
            <div className="about-section">
                <h2>Tools</h2>
                <div className="about-icons">
                    <img src={require("../../assets/images/git.png")}/>
                    <img src={require("../../assets/images/vscode.png")}/>
                    <img src={require("../../assets/images/postman.png")}/>
                    <img src={require("../../assets/images/bootstrap.png")}/>
                </div>
            </div>
        </div>
            
    );
};