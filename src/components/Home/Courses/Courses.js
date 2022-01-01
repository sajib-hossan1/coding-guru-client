import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Course from '../../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data.slice(0,3)))
        .finally(() => setLoader(false))
    } ,[])

    return (
        <div className="courses-container">
            <h1 className="section-title">Our Courses</h1>
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
            <div className="mt-3" style={{textAlign: 'center'}}>
                <Link to="/courses"><button className="all-courses-btn">See All Courses</button></Link>
            </div>
        </div>
    );
};

export default Courses;