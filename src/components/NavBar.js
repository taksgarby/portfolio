import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {

    return (
        <>
          <Navbar bg="info" variant="light">
            <Container>
              <Navbar.Brand href="#welcome">Welcome</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#aboutme">About Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
         
        </>
      );



    
}
 
export default NavBar;
