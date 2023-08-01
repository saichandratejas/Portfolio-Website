import { Container, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import projImg1 from "../assets/img/news feed application.jpg";
import projImg2 from "../assets/img/email spam detection.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import {React} from 'react';

export const Projects = () => {

  const projects = [
    {
      title: "News Feed Application",
      description: "A....",
      imgUrl: projImg1,
      link: "/https://github.com/saichandratejas/News_App",
      
    },
    {
      title: "Email Spam Detection",
      description: "B.....",
      imgUrl: projImg2,
      link: "/https://github.com/saichandratejas/Email-Spam-Detection-Using-Python",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col >
                  <h2>Projects</h2>
                  <p>My Projects!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      defaultActiveKey="/home"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    /> 
                            )
                            })
                            }
                        </Row>
                    </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    /> 
                            )
                            })
                            }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    /> 
                            )
                            })
                            }
                        </Row>
                      </Tab.Pane>
                </Tab.Content>
                  </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
