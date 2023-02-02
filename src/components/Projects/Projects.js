import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pOne from "../../Assets/Projects/1.jpg";
import pTwo from "../../Assets/Projects/2.jpg";
import pThree from "../../Assets/Projects/7.jpg";
import pFour from "../../Assets/Projects/4.jpg";
import pFive from "../../Assets/Projects/5.jpg";
import pSix from "../../Assets/Projects/6.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pOne}
              isBlog={false}
              title="Astro Static Blog"
              description="A static blog built using React JSX components. It feature Markdown text exportation directly in HTML without needind to create a new page everytime."
              ghLink="https://github.com/albertoslavicadev/techwithalberto-blog"
              demoLink="https://techwithalberto.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pTwo}
              isBlog={false}
              title="MERN Social-Network"
              description="A simple social media platform made using the MERN stack( React, ExpressJS, MongoDb, NodeJs).
              Feature Auth, POST and LIKES. First project using this stack."
              ghLink="https://github.com/albertoslavicadev/social-network"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pThree}
              isBlog={false}
              title="Crowdfund-Dapp"
              description="Blockchain App built using Solidity and the Truffle Framework. It does start a crowdfund where the creator can start, end and retire the funds meanwhile the users can pledge tokens"
              ghLink="https://github.com/albertoslavicadev/crowdfund-dapp"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pFour}
              isBlog={false}
              title="Web-Scraping with RUST"
              description="A CLI tool for looking at repos for a specific username.
              It's going to ask you for a github username and then displaying all repos he has to a max of 100."
              ghLink="https://github.com/albertoslavicadev/repo-finder-rust"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pFive}
              isBlog={false}
              title="Golang Todo Restapi"
              description="Simple rest API built in Golang that enable a server Todos where you can add and check items in a JSON format utilizingGET POST PATCH and DELETE."
              ghLink="https://github.com/albertoslavicadev/goland-todos-restapi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pSix}
              isBlog={false}
              title="Portfolio-Laravel"
              description="Laravel application. It has newsletters, a blog with a rich text-editor, with comments and likes and a portfolio section.
              This is my biggest personal project and I'm planning to expand it even more with new features."
              ghLink="https://github.com/albertoslavicadev/portfolio-blog"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
