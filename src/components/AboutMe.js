import Card from 'react-bootstrap/Card';
import './components.css';

function AboutMe() {
  return (
    <div class="container">    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
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





