import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './components.css';
import ContactForm from './ContactForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

const NavBar = () => {

    return (
        <>
          <Navbar bg="info" variant="light">  
            <Container>
              <Navbar.Brand class="nav-text" >Welcome to my portfolio page</Navbar.Brand>
              <Nav className="me-auto">
                {/* <Nav.Link href="#aboutme">About Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link> */}
                <Nav.Link href="/contact" element={<ContactForm />}>Contact</Nav.Link>
              </Nav>

            </Container>
            </Navbar>
      
         
        </>
      );



    
}
 
export default NavBar;
