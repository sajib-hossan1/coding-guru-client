import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
        <Header></Header>
        <div className="about-container">
            <h1>Coding <span className="brand-secondary-color">Guru</span></h1>
            <Container>
                <Row>
                    <Col className="mb-4" sm={12} md={12} lg={6}>
                        <div>
                            <h3>Who We Are</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas eaque facilis excepturi inventore debitis impedit quasi quos odio minus.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quasi inventore soluta quidem quibusdam error.</p>
                        </div>
                    </Col>
                    <Col className="mb-4" sm={12} md={12} lg={6}>
                        <div>
                            <h3>Our Goals</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas eaque facilis excepturi inventore debitis impedit quasi quos odio minus.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quasi inventore soluta quidem quibusdam error.</p>
                        </div>
                    </Col>
                    <Col className="mb-4" sm={12} md={12} lg={6}>
                        <div>
                            <h3>Our Success</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas eaque facilis excepturi inventore debitis impedit quasi quos odio minus.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quasi inventore soluta quidem quibusdam error.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer></Footer>
        </>
    );
};

export default AboutUs;