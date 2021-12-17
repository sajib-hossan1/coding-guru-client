import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import New from '../New/New';
import Trainers from '../Trainers/Trainers';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <New></New>
            <Courses></Courses>
            <Trainers></Trainers>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;