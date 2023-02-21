import React from "react";
import ProjectRecipe from "./ProjectRecipe";
import Stack from 'react-bootstrap/Stack';
import './bottomComponents.css';
import {FaDesktop} from 'react-icons/fa'

const ProjectList = () => {
    return ( 
   
<>
    <h2 class="project-list-title">
        <FaDesktop /> Projects <FaDesktop /></h2>    
    <div class="project-list">    

    <ProjectRecipe />
    {/* <ProjectOrgan class="project"/>
    <ProjectIfOnly class="project"/>
    <ProjectRecord class="project"/> */}
    </div>

</>
     );
}
 
export default ProjectList;