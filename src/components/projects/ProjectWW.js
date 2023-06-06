import Card from 'react-bootstrap/Card';
import '../bottomComponents.css';
import  WWW from './WWW.png'
import Badge from 'react-bootstrap/Badge';


function ProjectWW() {
  return (
    <div class="project">
    <Card style={{ width: '23rem' }}>

      <Card.Body>
      <Card.Title className="text-center">Wisdom Works</Card.Title>
      <div class="img6">
      <img src={WWW} />
      </div>
  
      <div class="badge-container">
  
      <Badge bg="danger">
        Figma
      </Badge>{' '}
      <Badge bg="secondary">
        Pair Project
      </Badge>{' '}
      <Card.Text class="project-text">
      This is my fantasy business with <a href="https://www.linkedin.com/in/raquel-revelles-conde-a82387129/" target="_blank"> Raquel Revelles Conde</a>. 
      We thought it would be fantastic if I could create a community-oriented career consultancy 
      specifically catered to women who have made the brave decision to change their careers in the middle of their lives. 
      I have created a UI using Figma and now I am planning to turn it into a JavaScript/Java/SQL project.
   
        </Card.Text>

        </div>  
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectWW;



