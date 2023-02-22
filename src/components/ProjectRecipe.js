import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './bottomComponents.css';
import  Recipe_top from './recipe_top.png'
import Badge from 'react-bootstrap/Badge';
import { BsGithub } from 'react-icons/bs';

function ProjectRecipe() {
  return (
    <div class="project">
    <Card style={{ width: '23rem' }}>

      <Card.Body>
      <Card.Title className="text-center">Recipe Planner</Card.Title>
      <img src={Recipe_top} />
  
      <div class="badge-container">
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
      <Badge bg="danger">
        TDD
      </Badge>{' '}
      <Badge bg="secondary">
        Group Project
      </Badge>{' '}
      </div>
      <Card.Text class="project-text">
        A group of friends from my CodeClan cohort decided to create this multi-functional recipe app, following Agile method. 
        This let users to search recipes by ingredients, cuisine type and diet type. It also lets authenticated users to access their Dashboard, 
        where the users can use the calender-planner, comment form, shopping list.   
    
        </Card.Text>
        <div class="repo-container">
        <Card.Link class="github-link-sm" href="https://github.com/taksgarby/Recipe_Generator_Back_End" target="_blank">
        <BsGithub /> Backend Repo</Card.Link>
        <Card.Link class="github-link-sm" href="https://github.com/taksgarby/Recipe_Generator_FrontEnd" target="_blank">
        <BsGithub /> Frontend Repo</Card.Link>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectRecipe;



