import Card from 'react-bootstrap/Card';
import './components.css';
import Button from 'react-bootstrap/Button';
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import {GrLinkedin} from 'react-icons/gr'

function AboutMe() {
  return (

    <div class="aboutme">

    <Card style={{ width: '25rem' }} className="mb-5 mt-5 pt-4">
      <Card.Body>
        {/* <Card.Title >Card Title</Card.Title> */}
        <div class="full-name">Takako Onozuka</div>

        <p class="h3">Junior Software Developer</p>

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

        <div class="link-container">
       
        <Card.Link class="github-link" href="https://github.com/taksgarby" target="_blank"> 
        <BsGithub /> Github</Card.Link>
        <Card.Link class="linkedin-link" href="https://www.linkedin.com/in/t-onozuka/" target="_blank">
        <GrLinkedin /> LinkedIn</Card.Link>
        </div>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }} className="m-5">
        <Card.Body>
          {/* <Card.Title >Card Title</Card.Title> */}
          <div class="aboutme-right">
          <p class="aboutme-texts">
                
            </p>
  
            <p class="aboutme-headline">
                About Takako
            </p>
            <p class="aboutme-texts">
                Originally from Japan, I worked in Tokyo's publishing sector before moving to Scotland due to family commitment. 
                For the past 10 years, I have worked in education, teaching literacy to young people all over 
                Scotland at a weekend Japanese high school. Both experiences trained me to be a detail oriented content creator. 
                I have decided to shift my career into software development in recent years, and I love coding and working in Agile-style teamwork.            </p>
            <p class="aboutme-headline">
                Technical Education
            </p>
            <p class="aboutme-texts">
            Completed 16 weeks intensive software development course. 
            800 hours worth of coding lessons on development languages, databases, testing and methodologies. 
            Daily pair programming exercises. For group projects, we followed Agile methodology, 
            running regular stand-ups while organising collaborative work using Trello board and Github. 
            Completed Professional Development Award: Software Development at Level 8.
            </p>
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





