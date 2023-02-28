import Card from 'react-bootstrap/Card';
import '../bottomComponents.css';
import  Words_top from './words_top.png'
import Badge from 'react-bootstrap/Badge';
import { BsGithub } from 'react-icons/bs';

function ProjectWords() {
  return (
    <div class="project">
    <Card style={{ width: '23rem' }}>

      <Card.Body>
      <Card.Title className="text-center">Japanese Word Finder</Card.Title>
      <div class="img4">
      <img src={Words_top} />
      </div>
  
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
        Spring
      </Badge>{' '}
      <Badge bg="danger">
        React
      </Badge>{' '}
      <Badge bg="danger">
        TDD
      </Badge>{' '}
      <Badge bg="secondary">
        Solo Project
      </Badge>{' '}
      <Card.Text class="project-text">
      As a Japanese speaker living in Scotland, I get asked questions like "can you recommend a good 
      Japanese word for my pet/tatoo/project?" I thought of this app for anyone seeking a Japanese word
      for naming or decoration purposes. Users can search words by categories such as "mentality", "relationships",
      "nature" and "popular culture". 
    
        </Card.Text>
        <div class="repo-container">
        <Card.Link class="github-link-sm" href="https://github.com/taksgarby/JapaneseWordFinder_Spring" target="_blank">
        <BsGithub /> Backend Repo</Card.Link>
        <Card.Link class="github-link-sm" href="https://github.com/taksgarby/JapaneseWordFinder_React" target="_blank">
        <BsGithub /> Frontend Repo</Card.Link>
        </div>
    
        </div>  
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectWords;



