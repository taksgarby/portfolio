import Card from 'react-bootstrap/Card';
import '../bottomComponents.css';
import  Mugs from './mugs.png'
import Badge from 'react-bootstrap/Badge';
import { BsGithub } from 'react-icons/bs';

function ProjectMugs() {
  return (
    <div class="project">
    <Card style={{ width: '23rem' }}>

      <Card.Body>
      <Card.Title className="text-center">Curiosity Mugs</Card.Title>
      <div class="img2">
      <img src={Mugs} />
      </div>
  
      <div class="badge-container">
      <Badge bg="primary">
        JavaScript
      </Badge>{' '}
      <Badge bg="danger">
        React
      </Badge>{' '}
      <Badge bg="danger">
        AI prompt
      </Badge>{' '}
      <Badge bg="secondary">
        Solo Project
      </Badge>{' '}
      <Card.Text class="project-text">
     I wanted to make a user-friendly e-commerce website.
      I chose mugs and cups because 99% of my friends love coffee breaks. 
      All the mugs and cups are created by me with the assistance of AI. These are my fantasy mugs and cups - 
      my favourites are forest-themed portable cups on the second row. 
    Users can "Add basket" button to store items they like in the shopping basket. The shopping basket can be edited using 
    a delete button. 
      </Card.Text>
      <div class="repo-container"> 

      <Card.Link class="github-link-sm" href="https://github.com/taksgarby/curiositymugs" target="_blank" >
      <BsGithub /> View this repo</Card.Link>
      </div>

</div>
      
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectMugs;



