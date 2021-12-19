import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './BuyNow.css'

const BuyNow = () => {
    const {courseId} = useParams();
    
    const [course, setCourse] = useState({});

    // firebase authentication user
    const { user } = useAuth();
    const { email } = user;


    // some hooks from react hook form
    const { register, handleSubmit, reset } = useForm();

    // using history to redirect
    const navigate = useNavigate();


    // order submit
    const onSubmit = data => {
        const order = course;
        data.order = order;

        const userEmail = email;
        data.email = userEmail;

        const status = 'Pending'
        data.status = status;

        fetch('http://localhost:5000/order', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(data => data.json())
        .then(result => {
            if(result.insertedId){
                alert('Your Order Placed Successfully.')
                reset();
                navigate('/home');
            }
        })
    };


     // get item/order item details from database
    useEffect(()=> {
        fetch(`http://localhost:5000/courseDetails/${courseId}`)
        .then(res => res.json())
        .then(data => setCourse(data))
    }, [])
    
    return (
        <div className="buyNow-container">
            <h4 className="section-title">Please give necessary information to buy <span style={{color:'#1c9fff'}}>{course?.courseName}</span> Course </h4>
            <Container className='mt-5'>
                <Row>
                    <Col sm={12} md={6}>
                        <div>
                            <img style={{width : '100%'}} src={course?.image} alt="" />
                            <h4>Course Name : {course?.courseName}</h4>
                            <h5>Mentor : {course?.mentor}</h5>
                            <h3>Price : ${course?.price}</h3>
                            <div>
                                <p>{course?.details}</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="booking">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name")} />
                                <input defaultValue={user.email} {...register("email")} />
                                <input {...register("address")} placeholder="Your Address" />
                                <input {...register("city")} placeholder="City" />
                                <input type="number" {...register("number")} placeholder="Your phone number" />
                                <input className="order-btn" value="Confirm Order" type="submit"  />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BuyNow;