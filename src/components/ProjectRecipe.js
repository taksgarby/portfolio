import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './bottomComponents.css';
import  Recipe_top from './recipe_top.png'
import Badge from 'react-bootstrap/Badge';
import { BsGithub } from 'react-icons/bs';

function ProjectRecipe() {
  return (
    <div class="project">
    <Card style={{ width: '20rem' }}>

      <Card.Body>
      <Card.Title>Recipe Planner</Card.Title>
      <img src={Recipe_top} />
  
      
        <Badge bg="primary">
        Java
      </Badge>{' '}
      <Badge bg="primary">
        JavaScript
      </Badge>{' '}
      <Badge bg="primary">
        H2 db
      </Badge>{' '}
      <Badge bg="danger">
        React
      </Badge>{' '}
      <Badge bg="danger">
        Spring
      </Badge>{' '}
      <Badge bg="danger">
        Agile
      </Badge>{' '}
    
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

export default ProjectRecipe;



