import React from "react";
import Project from "./Project";
import Stack from 'react-bootstrap/Stack';

const ProjectList = () => {
    return ( 
        <>  
    <div class="container">    
        <h3>Project List</h3>
    <Stack direction="horizontal" gap={3}>
    <Project />
    <Project />
    </Stack>
    </div>
    </>

     );
}
 
export default ProjectList;