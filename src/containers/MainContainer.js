import React from "react";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import ProjectList from "../components/ProjectList";
import './container.css';

const MainContainer = () => {
    return ( 
        <div class="body">
        <NavBar />
        <AboutMe/ >
        <ProjectList/>
        </div>
     );
}
 
export default MainContainer;