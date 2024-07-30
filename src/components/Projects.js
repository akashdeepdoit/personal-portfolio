import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Cryptodashboard.png";
import projImg2 from "../assets/img/internshala.png"
import projImg3 from "../assets/img/polyglot.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Cryptocurrency-dashboard",
      description: "A dashboard to track cryptocurrency prices and trends.",
      techStack: "React, Javascript,Tailwind CSS",
      imgUrl: projImg1,
      repoLink: "https://github.com/akashdeepdoit/Cryptocurrency-dashboard.git"
    },
    {
      title: "Internshala Automation",
      description: "An automation tool for managing Internshala tasks.",
      techStack: "Node.js",
      imgUrl: projImg2,
      repoLink: "https://github.com/akashdeepdoit/Automation_Hackathon_Internshala-master"
    },
    {
      title: "PolyglotCode",
      description: "A tool for converting code between different programming languages.",
      techStack: "React, Node.js, Express.js",
      imgUrl: projImg3,
      repoLink: "https://github.com/akashdeepdoit/PolyglotCode"
    },
    {
      title: "Internshala Automation",
      description: "An automation tool for managing Internshala tasks.",
      techStack: "Python, Selenium",
      imgUrl: projImg1,
      repoLink: "https://github.com/yourusername/internshala-automation"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I've worked on, showcasing my skills in web development and automation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="project-row">
                        <Col sm={12} md={12} lg={6} className="project-col">
                          <div className="project-card">
                            <img src={projects[0].imgUrl} alt={projects[0].title} className="project-image" />
                            <div className="project-info">
                              <h3>{projects[0].title}</h3>
                              <p><strong>Description:</strong> {projects[0].description}</p>
                              <p><strong>Tech Stack:</strong> {projects[0].techStack}</p>
                              <a href={projects[0].repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="project-row">
                        <Col sm={12} md={12} lg={6} className="project-col">
                          <div className="project-card">
                            <img src={projects[1].imgUrl} alt={projects[1].title} className="project-image" />
                            <div className="project-info">
                              <h3>{projects[1].title}</h3>
                              <p><strong>Description:</strong> {projects[1].description}</p>
                              <p><strong>Tech Stack:</strong> {projects[1].techStack}</p>
                              <a href={projects[1].repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="project-row">
                        <Col sm={12} md={12} lg={6} className="project-col">
                          <div className="project-card">
                            <img src={projects[2].imgUrl} alt={projects[2].title} className="project-image" />
                            <div className="project-info">
                              <h3>{projects[2].title}</h3>
                              <p><strong>Description:</strong> {projects[2].description}</p>
                              <p><strong>Tech Stack:</strong> {projects[2].techStack}</p>
                              <a href={projects[2].repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row className="project-row">
                        <Col sm={12} md={12} lg={6} className="project-col">
                          <div className="project-card">
                            <img src={projects[3].imgUrl} alt={projects[3].title} className="project-image" />
                            <div className="project-info">
                              <h3>{projects[3].title}</h3>
                              <p><strong>Description:</strong> {projects[3].description}</p>
                              <p><strong>Tech Stack:</strong> {projects[3].techStack}</p>
                              <a href={projects[3].repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
