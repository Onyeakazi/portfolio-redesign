import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import image1 from "../../assets/images/firstD.jpeg";
import image2 from "../../assets/images/secondD.jpeg";
import image3 from "../../assets/images/thirdD.jpeg";
import image4 from "../../assets/images/fourthD.jpeg";
import './projects.css'

function Projects() {
    return (
        <div className='section'>
            <h1 className='title'>My Latest Projects</h1>
            <p className='sub mb-5'>Driving Innovation Through Advanced Tech Development and Design.</p>

            <Row>
                {/* Project 2 */}
                <Col xs={12} sm={12} md={6} lg={4}>
                    <Card className="project-card mb-4">
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>Project 2</Card.Title>
                        <Card.Text>Brief description of Project 2. This could include technologies used and any other details.</Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer" className="github-link1">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="project-link1">
                            <i class="fa-solid fa-link"></i>
                        </a>
                        <ListGroup horizontal className="list-group">
                            <ListGroup.Item className="list-item">This</ListGroup.Item>
                            <ListGroup.Item className="list-item">ListGroup</ListGroup.Item>
                            <ListGroup.Item className="list-item">renders</ListGroup.Item>
                            <ListGroup.Item className="list-item">horizontally!</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    </Card>
                </Col>

                {/* Project 2 */}
                <Col xs={12} sm={12} md={6} lg={4}>
                    <Card className="project-card mb-4">
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>Project 2</Card.Title>
                        <Card.Text>
                        Brief description of Project 2. This could include technologies used and any other details.
                        </Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer" className="github-link1">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="project-link1">
                            <i class="fa-solid fa-link"></i>
                        </a>
                        <ListGroup horizontal className="list-group">
                            <ListGroup.Item className="list-item">This</ListGroup.Item>
                            <ListGroup.Item className="list-item">ListGroup</ListGroup.Item>
                            <ListGroup.Item className="list-item">renders</ListGroup.Item>
                            <ListGroup.Item className="list-item">horizontally!</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    </Card>
                </Col>

                {/* Project 3 */}
                <Col xxs={12} sm={12} md={6} lg={4}>
                    <Card className="project-card mb-4">
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>Project 3</Card.Title>
                        <Card.Text>
                        Brief description of Project 3. This could include technologies used and any other details.
                        </Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer" className="github-link1">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="project-link1">
                            <i class="fa-solid fa-link"></i>
                        </a>
                        <ListGroup horizontal className="list-group">
                            <ListGroup.Item className="list-item">This</ListGroup.Item>
                            <ListGroup.Item className="list-item">ListGroup</ListGroup.Item>
                            <ListGroup.Item className="list-item">renders</ListGroup.Item>
                            <ListGroup.Item className="list-item">horizontally!</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    </Card>
                </Col>

                {/* Project 4 */}
                <Col xxs={12} sm={12} md={6} lg={4}>
                    <Card className="project-card mb-4">
                        <Card.Img variant="top" src={image4} />
                        <Card.Body>
                            <Card.Title>Project 4</Card.Title>
                            <Card.Text>
                            Brief description of Project 4. This could include technologies used and any other details.
                            </Card.Text>
                            <a href="" target="_blank" rel="noopener noreferrer" className="github-link1">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer" className="project-link1">
                                <i class="fa-solid fa-link"></i>
                            </a>
                            <ListGroup horizontal className="list-group">
                                <ListGroup.Item className="list-item">This</ListGroup.Item>
                                <ListGroup.Item className="list-item">ListGroup</ListGroup.Item>
                                <ListGroup.Item className="list-item">renders</ListGroup.Item>
                                <ListGroup.Item className="list-item">horizontally!</ListGroup.Item>
                                <ListGroup.Item className="list-item">horizontally!</ListGroup.Item>

                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Projects;
