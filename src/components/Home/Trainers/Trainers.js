import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import trainer1 from '../../../images/trainers/trainer1.jpg'
import './Trainers.css'

const Trainers = () => {
    return (
        <div>
            <h1 className="section-title">Our Trainers</h1>
            <Container>
                <Row className="g-4">
                    <Col sm={12} md={6} lg={4}>
                        <Card className="trainer-card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="img-fluid" src={trainer1} />
                            <Card.Body>
                                <Card.Title>John Abraham</Card.Title>
                                <p>Python Developer</p>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <div className="tariner-social">
                                    <a href="https://www.linkedin.com/in/md-sajib-hossan/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/sajib-hossan1"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/mdsajibhossan14"><i className="fab fa-twitter"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className="trainer-card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="img-fluid" src={trainer1} />
                            <Card.Body>
                                <Card.Title>John Abraham</Card.Title>
                                <p>Python Developer</p>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <div className="tariner-social">
                                    <a href="https://www.linkedin.com/in/md-sajib-hossan/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/sajib-hossan1"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/mdsajibhossan14"><i className="fab fa-twitter"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className="trainer-card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="img-fluid" src={trainer1} />
                            <Card.Body>
                                <Card.Title>John Abraham</Card.Title>
                                <p>Python Developer</p>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <div className="tariner-social">
                                    <a href="https://www.linkedin.com/in/md-sajib-hossan/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/sajib-hossan1"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/mdsajibhossan14"><i className="fab fa-twitter"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className="trainer-card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="img-fluid" src={trainer1} />
                            <Card.Body>
                                <Card.Title>John Abraham</Card.Title>
                                <p>Python Developer</p>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <div className="tariner-social">
                                    <a href="https://www.linkedin.com/in/md-sajib-hossan/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/sajib-hossan1"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/mdsajibhossan14"><i className="fab fa-twitter"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className="trainer-card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="img-fluid" src={trainer1} />
                            <Card.Body>
                                <Card.Title>John Abraham</Card.Title>
                                <p>Python Developer</p>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <div className="tariner-social">
                                    <a href="https://www.linkedin.com/in/md-sajib-hossan/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/sajib-hossan1"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/mdsajibhossan14"><i className="fab fa-twitter"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className="trainer-card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="img-fluid" src={trainer1} />
                            <Card.Body>
                                <Card.Title>John Abraham</Card.Title>
                                <p>Python Developer</p>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <div className="tariner-social">
                                    <a href="https://www.linkedin.com/in/md-sajib-hossan/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/sajib-hossan1"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/mdsajibhossan14"><i className="fab fa-twitter"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Trainers;