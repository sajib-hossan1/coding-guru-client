import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const {courseId} = useParams();
    
    const [courseDetail, setCourseDetail] = useState({});
    
    useEffect(()=> {
        fetch(`http://localhost:5000/courseDetails/${courseId}`)
        .then(res => res.json())
        .then(data => setCourseDetail(data))
    }, [])
    
    
    return (
        <div className="course-detail-container container">
            <div className="course-detail-img-div">
                <img src={courseDetail?.image} alt="" />
                <h3>{courseDetail?.courseName}</h3>
                <button className="addto-cart-btn"><Link style={{color : 'white', textDecoration:'none'}} to={`/buyNow/${courseId}`}>Buy This Course</Link></button>
            </div>
            <h3>Price : ${courseDetail?.price}</h3>
            <div className="course-common-details mt-5">
                <h4>What You Will Get</h4>
                <ul>
                    <li>16+ Hours On Demand Videos</li>
                    <li>Live Support When You Got Stuck</li>
                    <li>3+ Downloadable Resources</li>
                    <li>5+ Projects</li>
                </ul>
            </div>
            <div className="course-description">
                <h4>Descrition</h4>
                <p>{courseDetail?.courseDetails1}</p>
                <p>{courseDetail?.courseDetails2}</p>
                <p>{courseDetail?.courseDetails3}</p>
            </div>
        </div>
    );
};

export default CourseDetails;