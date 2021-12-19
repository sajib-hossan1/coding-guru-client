import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'
import banner1 from '../../../images/banner/banner1.png'
import banner2 from '../../../images/banner/banner2.png'
import banner3 from '../../../images/banner/banner3.png'
import banner4 from '../../../images/banner/banner4.png'

const Banner = () => {
    return (
        <div className="banner-container">
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
                                        words={[ 'Artificial Intelligence (AI)', 'Data Strucutre', 'Web Design & Development', 'App Development' , 'C Programming', 'Python']}
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
                        <div className="carousel-container">
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img className="img-fluid" src={banner1} class="d-block w-75" alt="bannerImg" />
                                    </div>
                                    <div class="carousel-item">
                                        <img className="img-fluid" src={banner2} class="d-block w-75" alt="bannerImg" />
                                    </div>
                                    <div class="carousel-item">
                                        <img className="img-fluid" src={banner3} class="d-block w-75" alt="bannerImg" />
                                    </div>
                                    <div class="carousel-item">
                                        <img className="img-fluid" src={banner4} class="d-block w-75" alt="bannerImg" />
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