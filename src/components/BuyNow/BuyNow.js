import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './BuyNow.css'

const BuyNow = () => {
    const {courseId} = useParams();
    const [loader, setLoader] = useState(false);
    const [loaderOrder, setLoaderOrder] = useState(false);
    
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

        
        setLoaderOrder(true)
        fetch('https://safe-refuge-53186.herokuapp.com/order', {
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
        .finally(() => setLoaderOrder(false))
    };


     // get item/order item details from database
    useEffect(()=> {
        setLoader(true)
        fetch(`https://safe-refuge-53186.herokuapp.com/courseDetails/${courseId}`)
        .then(res => res.json())
        .then(data => setCourse(data))
        .finally(() => setLoader(false))
    }, [])
    
    return (
        <>
            <Header></Header>
            <div className="buyNow-container">
                <h4 className="section-title">Please give necessary information to buy <span style={{color:'#1c9fff'}}>{course?.courseName}</span> Course </h4>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={6}>
                            <div>
                                { loader && <Spinner className='spinner' animation="border" variant="primary" /> }
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
                                    <p className='text-center'>
                                        { loaderOrder && <Spinner animation="border" variant="primary" /> }
                                    </p>
                                    <input className="order-btn" value="Confirm Order" type="submit"  />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default BuyNow;