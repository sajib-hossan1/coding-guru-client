import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row className="p-4">
                    <Col sm={12} md={6} className="b-left">
                        <div className="banner-text mt-4">
                            <h1>Welcome to Coding <span className="brand-secondary-color">Guru</span></h1>
                            <h3>You Will Learn Here
                                <br />
                            <span className="typewriter">
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={[ 'Artificial Intelligence (AI)', 'Data Strucutre', 'Web Design & Development' , 'C Program', 'Python']}
                                        loop
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </span>
                            </h3>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;