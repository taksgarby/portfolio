// import React from 'react';
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
      <Card.Title className="text-center">Record Shop Inventory App</Card.Title>
      <div class="img2">
      <img src={Record_top} />
      </div>
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
      This is my very first project, after 4 weeks of the CodeClan course. 
        This app is designed for record shop owners to keep track of their inventory.
        The app lets users:<br/>
        - Search records by genre and artist.<br/>
        - Create a new record entry.<br/>
        - Create a new genre / artist entry. <br/>
        - Get notified when a particular record stock becomes low by mesesages displayed on the main page.
        </Card.Text>
        <div class="repo-container">
        <Card.Link class="github-link-sm" href="https://github.com/taksgarby/record_shop_project_new" target="_blank">
        <BsGithub /> View this repo</Card.Link>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectRecord;



