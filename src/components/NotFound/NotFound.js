import React from 'react';
import './NotFound.css'
import notFoundImg from '../../images/notFound.png'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <>
            <Header></Header>
            <div className="not-found-container">
                <img src={notFoundImg} alt="" />
                <div>
                <Link to="/home"><button className="back-to-home-btn">Back To Home</button></Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;