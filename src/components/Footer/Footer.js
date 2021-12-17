import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import playStoreImg from '../../images/play-sotre.png'
import ssl from '../../images/ssl.png'

const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
                <Row className="g-4">
                    <Col sm={12} md={4}>
                        <h1 className="brand brand-title">Coding <span className="brand-secondary-color">Guru</span></h1>
                        <div className="contact-info">
                            <address><i className="fas fa-map-marker-alt"></i> Address : 32/B, Dhanmondi, Dhaka, Bangladesh</address>
                            <p><i className="fas fa-envelope"></i> E-mail us : travel.bd@gmail.com</p>
                            <p><i className="fas fa-phone-alt"></i> Phone : 0123456789</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="app-download">
                            <h4>Get Our App On Google Play Store</h4>
                            <a href="#"><img src={playStoreImg} alt="play-store-icon" /></a>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="payment-method">
                            <h4>Our Payment Method</h4>
                            <img className="img-fluid" src={ssl} alt="play-store-icon" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="copyright-text">
                <p>Copyright &copy; 2021 Md. Sajib Hossan</p>
            </div>
        </div>
    );
};

export default Footer;