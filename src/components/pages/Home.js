import React from "react";

export default function Home() {
    return(
        <div className="home-content container">
            <div className="row d-flex justify-content-center align-content-center">
                <div className="image-cropper col-md-3">
                    <img className="portfolio-pic circle-pic" src={require("../../assets/images/casual_pic.jpeg")} alt="snorlax img"/>
                </div>
                <div className="col-md-6 hi">
                    <h1>Hi! I'm Kush Patel</h1>
                    <h2>A Web Developer based in the GTA</h2>
                </div>
                <div className="image-cropper2 col-md-3">
                    <img className="portfolio-pic circle-pic2" src={require("../../assets/images/casual_pic2.jpg")} alt="snorlax img"/>
                </div>
            </div>
            
        </div>
    );
};