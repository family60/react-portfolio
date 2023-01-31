import React from "react";

export default function Home() {
    return(
        <div className="home-content container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Hi! I'm Kush Patel</h1>
                </div>
                <div className="col-md-5">
                    <img className="portfolio-pic" src={require("../../assets/images/snorlax.png")} alt="snorlax img"/>
                </div>
            </div>
        </div>
    );
};