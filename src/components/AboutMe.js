import Card from 'react-bootstrap/Card';
import './components.css';
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import {GrLinkedin} from 'react-icons/gr';
import {SiAmazonaws} from 'react-icons/si';
import {SiCisco} from 'react-icons/si'

function AboutMe() {
  return (

    <div class="aboutme">

    <Card style={{ width: '25rem' }} className="mb-5 mt-5 pt-4">
      <Card.Body>
        {/* <Card.Title >Card Title</Card.Title> */}
        <div class="full-name">Takako Onozuka</div>

        <p class="h3">Junior Software Developer</p>

        <div class="button-container-language">
        <button type="button" class="btn btn-info mb-2">Java</button>
        <button type="button" class="btn btn-info mb-2">JavaScript</button>
        <button type="button" class="btn btn-info mb-2">Python</button>
        {/* <button type="button" class="btn btn-info mb-2">CSS</button> */}
        {/* </div>
        <div class="button-container-others"> */}
        <button type="button" class="btn btn-info mb-2">MySQL</button>
        <button type="button" class="btn btn-info mb-2">MongoDB</button>
        <button type="button" class="btn btn-info mb-2">React</button>
        <button type="button" class="btn btn-info mb-2">Spring</button>
        <button type="button" class="btn btn-info mb-2">Agile</button>
        <button type="button" class="btn btn-info mb-2">TDD</button>
        </div>

        <div class="link-container">
       
        <Card.Link class="github-link" href="https://github.com/taksgarby" target="_blank"> 
        <BsGithub /> Github</Card.Link>
        <Card.Link class="linkedin-link" href="https://www.linkedin.com/in/t-onozuka/" target="_blank">
        <GrLinkedin /> LinkedIn</Card.Link>
        </div>
   
        <div class="link-container">
        <Card.Link class="aws-link" href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank"> 
        <SiAmazonaws /> AWS Certified Cloud Practitioner</Card.Link>
        </div>

        <div class="link-container">
        <Card.Link class="cisco-link" href="https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity" target="_blank"> 
        <SiCisco /> CISCO Introduction to Cybersecurity </Card.Link>
        </div>
        <div class="cisco-sub"><strong>(completed)</strong></div>

      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }} className="m-5">
        <Card.Body>
          {/* <Card.Title >Card Title</Card.Title> */}
          <div class="aboutme-right">
          <p class="aboutme-texts">
                
            </p>
  
            <p class="aboutme-headline">
                About Takako
            </p>
            <p class="aboutme-texts">
                Originally from Japan, I worked in Tokyo's publishing sector before moving to Scotland. 
                For the past 10 years, I have worked in education, teaching literacy to young people all over 
                Scotland at a weekend Japanese high school. Both experiences trained me to be a detail oriented content creator. 
                I have decided to shift my career into software development in recent years, and I love coding and working in Agile-style teamwork.            </p>
            <p class="aboutme-headline">
                Technical Education
            </p>
            <p class="aboutme-texts">
            Completed CodeClan's intensive software development course. 
            Development languages, databases, testing and methodologies. 
            Daily pair programming exercises. For group projects, we followed Agile methodology, 
            running regular stand-ups while organising collaborative work using Trello board and Github. 
            Completed Professional Development Award: Software Development at Level 8.
            </p>
            <p class="aboutme-headline">
                Currently I am:
            </p>
            <p class="aboutme-texts">
            Developing <a href="#ifonly"><strong>If Only App (Java + JS + SQL)</strong></a><br/>
            Working on <a href="https://github.com/taksgarby/Jardle" target="_blank"><strong>Jardle (Python)</strong></a>
             - it is like Wordle, but for Japanese language learners.<br></br>
            Working on a data analysis project at  <a href="https://www.scottishtecharmy.org/" target="_blank">
              <strong>Scottish Tech Army</strong></a><br/>
            </p>
             </div>
        </Card.Body>
      </Card>
 
</div>

  );
}

export default AboutMe;







