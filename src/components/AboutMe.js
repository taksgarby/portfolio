import Card from 'react-bootstrap/Card';
import './components.css';

function AboutMe() {
  return (
    <div class="aboutme">

    <Card style={{ width: '25rem' }} className="m-5">
      <Card.Body>
        {/* <Card.Title >Card Title</Card.Title> */}
        <div class="full-name">Takako Onozuka</div>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <p class="h3">Junior Full Stack Developer</p>
        <Card.Text class="skills">
          Java | JavaScript | Python | HTML | CSS | MySQL | MongoDB
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }} className="m-5">
        <Card.Body>
          {/* <Card.Title >Card Title</Card.Title> */}
          <h1>Takako Onozuka</h1>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
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





