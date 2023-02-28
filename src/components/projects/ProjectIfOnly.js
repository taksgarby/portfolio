import Card from 'react-bootstrap/Card';
import '../bottomComponents.css';
import  Ifonly_top from './ifonly_top.png'
import Badge from 'react-bootstrap/Badge';
import { BsGithub } from 'react-icons/bs';

function ProjectIfOnly() {
  return (
    <div class="project">
    <Card style={{ width: '23rem' }}>

      <Card.Body>
      <Card.Title className="text-center">If Only App</Card.Title>
      <div class="img2">
      <img src={Ifonly_top} />
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
   
      </div>
      <Card.Text class="project-text">
       This is my post-CodeClan project that is being developed. Humour and regret are the main themes of this app.
       This app lets users see how much profit they could have made in the last five years, had they made the right choice at the right time.
       The would-have-been profit is calculated by the highest and lowest point of the chosen stock, within users' would-have-been budget.
    
        </Card.Text>
       <div class="repo-container"> 

        <Card.Link class="github-link-sm" href="https://github.com/taksgarby/IfOnlyStock" target="_blank">
        <BsGithub /> Backend Repo</Card.Link>

        <Card.Link class="github-link-sm" href="https://github.com/taksgarby/IfOnly_Front" target="_blank" >
        <BsGithub /> Frontend Repo</Card.Link>
 
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectIfOnly;



