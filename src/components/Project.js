import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Project Name</Card.Title>
        <Card.Text>
          Explanation of each project
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>
  );
}

export default Project;



