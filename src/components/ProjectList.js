import React from "react";
import ProjectRecipe from "./ProjectRecipe";

import './bottomComponents.css';
import {FaDesktop} from 'react-icons/fa'
import ProjectOrgan from "./ProjectOrgan";
import ProjectRecord from "./ProjectRecord";
import ProjectIfOnly from "./ProjectIfOnly";

const ProjectList = () => {
    return ( 
   
<>
    <h2 class="project-list-title">
        <FaDesktop /> Projects <FaDesktop /></h2>    
    <div class="project-list">    

    <ProjectRecipe />
    <ProjectOrgan />
    <ProjectRecord />
    <ProjectIfOnly />
    {/* <ProjectOrgan class="project"/>
    <ProjectIfOnly class="project"/>
    <ProjectRecord class="project"/> */}
    </div>

</>
     );
}
 
export default ProjectList;