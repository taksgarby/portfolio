import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './bottomComponents.css';
import  Record_top from './record_top.png'
import Badge from 'react-bootstrap/Badge';
import { BsGithub } from 'react-icons/bs';

function ProjectRecord() {
  return (
    <div class="project">
    <Card style={{ width: '23rem' }}>

      <Card.Body>
      <Card.Title className="text-center">Record Shop Inventory APp</Card.Title>
      <img src={Record_top} />
  
      <div class="badge-container">
        <Badge bg="primary">
        Python
      </Badge>{' '}
      <Badge bg="primary">
        PostgreSQL
      </Badge>{' '}
    
      <Badge bg="danger">
        Flask
      </Badge>{' '}
      <Badge bg="danger">
        TDD
      </Badge>{' '}
      <Badge bg="secondary">
        Solo Project
      </Badge>{' '}
   
      </div>
      <Card.Text class="project-text">
        A group of friends from my CodeClan cohort decided to create this multi-functional recipe app, following Agile method. 
        This let users to search recipes by ingredients, cuisine type and diet type. It also lets authenticated users to access their Dashboard, 
        where the users can use the calender-planner, comment form, shopping list.   
    
        </Card.Text>
        <Card.Link class="github-link-sm" href="https://www.linkedin.com/in/t-onozuka/" target="_blank">
        <BsGithub /> View this repo</Card.Link>

      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectRecord;



