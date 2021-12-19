import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])

    return (
        <div className="courses-container">
            <h1 className="section-title">All Our Courses</h1>
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
    );
};

export default Courses;