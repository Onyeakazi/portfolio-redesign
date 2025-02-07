import React from "react";
import { Card, Row, Col, Container, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion"; // Import Framer Motion
import "./projectCard.css"; 
import project1 from "../../assets/images/firstD.jpeg";
import project2 from "../../assets/images/secondD.jpeg";
import project3 from "../../assets/images/thirdD.jpeg";
import project4 from "../../assets/images/fourthD.jpeg";

const ProjectsCard = () => {
  const projects = [project1, project2, project3, project4];

  return (
    <section className="projects-section" style={{ marginTop: "-10px" }}>
      <Container className="custom-container">
        <h2 className="section-title text-center mb-5">Recent Projects</h2>
        <Row>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            // Animation variants for left and right slide-in
            const cardVariants = {
              hidden: { opacity: 0, x: isEven ? -100 : 100 }, // Left (-100) for odd, Right (100) for even
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.8, ease: "easeOut", delay: index * 0.2 } // Staggered effect
              },
              hover: { scale: 1.05, transition: { duration: 0.3 } }, // Hover effect
            };

            return (
              <Col key={index} xs={12} sm={12} md={6} lg={6}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Card className="project-card mb-4">
                    <Card.Img variant="top" src={project} />
                    <Card.Body>
                      <Card.Title>Project {index + 1}</Card.Title>
                      <Card.Text>
                        Brief description of Project {index + 1}. This could include technologies used and other details.
                      </Card.Text>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="github-link">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <ListGroup horizontal className="list-group">
                        <ListGroup.Item className="list-item">Feature 1</ListGroup.Item>
                        <ListGroup.Item className="list-item">Feature 2</ListGroup.Item>
                        <ListGroup.Item className="list-item">Feature 3</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            );
          })}
        </Row>
        <motion.a
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
          whileHover={{ scale: 1.1 }}
        >
          See All Projects
        </motion.a>
      </Container>
    </section>
  );
};

export default ProjectsCard;
