import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {RiBearSmileLine} from 'react-icons/ri';
import {FaDesktop} from 'react-icons/fa';
import {GrContact} from 'react-icons/gr'


function NavBar() {
  return (
    <>
      <Navbar bg="info" variant="light">
        <Container id="home">
          <Navbar.Brand href="#home" > Welcome!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#projects"><FaDesktop /> Projects</Nav.Link>
            <Nav.Link href="#contact"><GrContact /> Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
  
  </>
  )
  };
      export default NavBar;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './components.css';
// import Contact from './Contact';
// import React from 'react';
// import ProjectList from './ProjectList';

// const NavBar = () => {

//     return (
//         <>
//           <Navbar bg="info" variant="light">  
//             <Container>
            
//               <Navbar.Brand class="nav-text">Welcome to my portfolio page!</Navbar.Brand>
           
//               <div class="nav-welcome">
//               <Nav className="me-auto">
//                 {/* <Nav.Link href="#aboutme">About Me</Nav.Link>
//                 <Nav.Link href="#projects">Projects</Nav.Link> */}
//                 <Nav.Link href="#projects" element={<ProjectList />}>Projects</Nav.Link>
//                 <Nav.Link href="#contact" element={<Contact />}>Contact</Nav.Link>
//               </Nav>
//               </div>
//             </Container>
//             </Navbar>
      
         
//         </>
//       );



    
// }
 
// export default NavBar;
