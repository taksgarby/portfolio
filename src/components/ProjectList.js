import React from "react";
import ProjectRecipe from "./projects/ProjectRecipe";

import './bottomComponents.css';
import {FaDesktop} from 'react-icons/fa'
import ProjectOrgan from "./projects/ProjectOrgan";
import ProjectRecord from "./projects/ProjectRecord";
import ProjectIfOnly from "./projects/ProjectIfOnly";
import ProjectWords from "./projects/ProjectWords";
import ProjectWW from "./projects/ProjectWW";
import ProjectMugs from "./projects/ProjectMugs";


const ProjectList = () => {
    return ( 
   
<>
    <h2 class="project-list-title" id="projects">
        <FaDesktop /> Projects <FaDesktop /></h2>    
    <div class="project-list" >    

    <ProjectRecipe />

    <ProjectRecord />
    <ProjectIfOnly />
    <ProjectWords />
    <ProjectWW />
    <ProjectOrgan />
    <ProjectMugs />
    </div>

</>
     );
}
 
export default ProjectList;