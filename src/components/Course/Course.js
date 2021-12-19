import React from 'react';
import { Card, Col} from 'react-bootstrap';
import './Course.css'
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {courseName,image, courseDetails1, mentor, _id, price} = course;
    return (
        <Col sm={12} md={6} lg={4}>
            <Card className="course-card">
                <Card.Img className="course-img" variant="top" src={image} />
                <Card.Body>
                <h4>Course : {courseName}</h4>
                <h5>Mentor : {mentor}</h5>
                <h3>Price : ${price}</h3>
                <Card.Text>
                    {courseDetails1.slice(0,200)}......
                </Card.Text>
                </Card.Body>
                <div style={{textAlign: 'center'}}>
                    <Link to={`/courseDetails/${_id}`}><button className="course-details-btn">Course Details</button></Link>
                </div>
            </Card>
        </Col>
    );
};

export default Course;