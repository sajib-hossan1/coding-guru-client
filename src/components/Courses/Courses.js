import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
        .finally(() => setLoader(false))
    } ,[])

    return (
        <>
        <Header></Header>
            <div className="courses-container">
                <h1 className="section-title">All Our Courses</h1>
                <div className='course-loading-spinner'>
                    { loader && <Spinner className='spinner' animation="border" variant="primary" /> }
                </div>
                <Container>
                    <Row className="g-4">
                    {
                        courses.map(course => 
                            <Course
                                key={course.id}
                                course={course}
                            >

                            </Course>
                        )
                    }
                    </Row>
                </Container>
            </div>
        <Footer></Footer>
        </>
    );
};

export default Courses;