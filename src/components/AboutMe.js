import Card from 'react-bootstrap/Card';
import './components.css';
import Button from 'react-bootstrap/Button';
import React from 'react'
import { BsGithub } from 'react-icons/bs';


function AboutMe() {
  return (
    <div class="aboutme">

    <Card style={{ width: '25rem' }} className="m-5">
      <Card.Body>
        {/* <Card.Title >Card Title</Card.Title> */}
        <div class="full-name">Takako Onozuka</div>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <p class="h3">Junior Full Stack Developer</p>
        {/* <Card.Text class="skills"> */}
          {/* Java | JavaScript | Python | HTML | CSS | MySQL | MongoDB */}
        {/* </Card.Text> */}
        <div class="button-container-language">
        <button type="button" class="btn btn-info">Java</button>
        <button type="button" class="btn btn-info">JavaScript</button>
        <button type="button" class="btn btn-info">Python</button>
        <button type="button" class="btn btn-info">HTML/CSS</button>
        </div>
        <div class="button-container-others">
        <button type="button" class="btn btn-info">MySQL</button>
        <button type="button" class="btn btn-info">MongoDB</button>
        <button type="button" class="btn btn-info">Agile</button>
        <button type="button" class="btn btn-info">TDD</button>
        </div>
        {/* <Button style={{ width: '5rem', height: '2rem'}} className="m-2">Java</Button>
        <Button>JavaScript</Button>
        <Button>Python</Button>
        <Button>MySQL</Button>
        <Button>MongoDB</Button>
        <Button>Agile</Button> */}
        <div class="link-container">
       
        <Card.Link href="#"> <BsGithub /> Github</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        </div>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }} className="m-5">
        <Card.Body>
          {/* <Card.Title >Card Title</Card.Title> */}
          <div class="aboutme-right">
            <p class="aboutme-headline">
                adkalfdjakldjakldfajkdls
     </p>
            <p class="aboutme-texts">
                adfjakldjfaldfajkl;
            </p>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>s
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
             </div>
        </Card.Body>
      </Card>
 
</div>
  );
}

export default AboutMe;



// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


// const AboutMe = () => {
//   return (
//     <Container>
//       <Row>
//         <Col sm={4}>name</Col>
//         <Col sm={8}>details</Col>
//       </Row>
    

//     </Container>
//   );
// }

// export default AboutMe;





