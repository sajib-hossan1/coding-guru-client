import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import New from '../New/New';
import Trainers from '../Trainers/Trainers';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <New></New>
            <Courses></Courses>
            <Trainers></Trainers>
            <Contact></Contact>
        </div>
    );
};

export default Home;