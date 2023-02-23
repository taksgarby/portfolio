import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './bottomComponents.css';
import  Organ_top from './organ_top.png'
import Badge from 'react-bootstrap/Badge';
import { BsGithub } from 'react-icons/bs';

function ProjectOrgan() {
  return (
    <div class="project">
    <Card style={{ width: '23rem' }}>

      <Card.Body>
      <Card.Title className="text-center">Biology Education App</Card.Title>
      <img src={Organ_top} />
  
      <div class="badge-container">
        <Badge bg="primary">
        JavaScript
      </Badge>{' '}
      <Badge bg="primary">
        MongoDB
      </Badge>{' '}
      <Badge bg="primary">
        Node JS
      </Badge>{' '}
      <Badge bg="danger">
        React
      </Badge>{' '}
      <Badge bg="danger">
        Insomnia
      </Badge>{' '}
      <Badge bg="danger">
        Agile
      </Badge>{' '}
      <Badge bg="secondary">
        Group Project
      </Badge>{' '}
      </div>
      <Card.Text class="project-text">
      Group project designed as an educational app for BBC to 
      teach biology to high school students. Aimed to allow users to choose 
      from 3 organs to learn where they can watch videos, read diagrams and test 
      knowledge on a quiz that will display a final mark. Teamwork was manage by stand-ups, Trello board and code reviews. I particularly enjoyed creating a non-relational database
      for our app using MongoDB. 
    
        </Card.Text>
        <div class="repo-container">
        <Card.Link class="github-link-sm" href="https://github.com/taksgarby/Organ_app" target="_blank">
        <BsGithub /> View this repo</Card.Link>
    
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectOrgan;



