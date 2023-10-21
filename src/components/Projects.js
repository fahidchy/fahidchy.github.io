import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.svg";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const completedProjects = [
    {
      title: "Enterprise Resource Planning System",
      description: "Using Laravel and PHP built an enterprise resource planning system for the company Medlab",
      tech:"Laravel/PHP",
      imgUrl: projImg1,
    },
    {
      title: "Customer Relationship Management System",
      description: "Developed a chat feature using React and Node.js to connect with the customers regarding their orders",
      tech:"React and Node.js",
      imgUrl: projImg2,
    },
    {
      title: "Restaurant Food Ordering System",
      description: "Developed a food ordering system using Java which would allow customers to make on order right from their table",
      tech:"Java",
      imgUrl: projImg3,
    },
    {
      title: "Food Calorie Calculator",
      description: "Developed a food calorie calculator which would record the intake of their food and calories",
      tech:"Java",
      imgUrl: projImg1,
    }
  ];

  const ongoingProjects = [
    {
      title: "Perishable Tracker",
      description: "The objective of this application is to help eliminate wastage by tracking expiry date of products",
      tech:"Java/Kotlin",
      imgUrl: projImg1,
    },
    {
      title: "Stock Manager",
      description: "The objective of this application is to provide a store to orgnisae their stock and inventory properly",
      tech:"Python",
      imgUrl: projImg2,
    },
    {
      title: "Employee Management",
      description: "The objective this application is to enable clients to store the employee and payroll details safely",
      tech:"Python",
      imgUrl: projImg3,
    }
  ];

  const conceptProjects = [
    {
      title: "Gaming Buddy",
      description: "The objective of this application is to enable people nearby to connect and play multiplayer games",
      tech:"Java/Kotlin",
      imgUrl: projImg1,
    },
    {
      title: "Football Blog",
      description: "The objective of this application will be to provide a platform for football enthusiaists to come together and talk about football",
      tech:"React and Node.js",
      imgUrl: projImg2,
    },
    {
      title: "Life Hacks",
      description: "The objective of this application is to send the user certain life hacks everyday which could help them in making their life easier",
      tech:"Java/Kotlin",
      imgUrl: projImg3,
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Completed Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Ongoing Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Concept Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>This section is displaying all the projects I ahvee worked on until now and has been completed. </p>
                      <Row>
                        {
                          completedProjects.map((project, index) => {
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
                      <p>These are some fo the projects which I am currently working on. </p>
                      <Row>
                        {
                          ongoingProjects.map((project, index) => {
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
                      <p>These are some of the projects that I would like to work on.</p>
                      <Row>
                        {
                          conceptProjects.map((project, index) => {
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
