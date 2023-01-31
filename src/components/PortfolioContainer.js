import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
    //setting the default state to the 'home' page/tab
    const [currentPage, setCurrentPage] = useState("Home");

    //function that will return one parent node/tag which in this case is the component/page that I want to render
    const renderPage = () => {
        if(currentPage === "Home"){
            return <Home />
        };
        if(currentPage === "About"){
            return <About />
        };
        if(currentPage === "Projects"){
            return <Projects />
        };
        if(currentPage === "Contact"){
            return <Contact />
        };
    };

    //changes the state of currentPage based on which tab was clicked
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
};