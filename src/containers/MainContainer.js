import React from "react";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import ProjectList from "../components/ProjectList";
import './container.css';
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const MainContainer = () => {
    return ( 
     <div>
        <NavBar />
        <div class="mainContainer">
        <AboutMe />
        <ProjectList/>
       <Contact />
        </div>
        <Footer />
        </div> 
     );
}
 
export default MainContainer;