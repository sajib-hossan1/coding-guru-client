import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Register.css'

const Register = () => {
    
    // firebase authentication
    const {signInUsingGoogle, createNewUser, isLoading, error } = useAuth();


    // set user's name, email and password values for new user registration
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    // get name, email and password values for new user registration
    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    
    // redirect history for returning from log in page to where user came
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/home';


    // google sign in
    const handleGoogleSignIn = () => {
      signInUsingGoogle()
      .then(result => {
        navigate(redirect_uri);
      })
    }

    // new user registration
    const handleRegister = e => {
      e.preventDefault();
      createNewUser(name,email,password,navigate,redirect_uri);
    }
    

    return (
        <>
            <Header></Header>
            <div className="register-container">
                <h1 className="section-title">Please Register</h1>
                <div className="register-form-container container">
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        </Form.Group>
                        <p style={{color: 'red'}}>{error}</p>
                        <p>
                            { isLoading && <Spinner animation="border" variant="primary" /> }
                        </p>
                        <Button className="register-btn" type="submit">
                            Register
                        </Button>
                        <p className="m-0 pt-3">Already Registered? <Link to="/login">Please Log In Here</Link> </p>
                        <div>
                            <p className="m-0 pt-3 pb-3">or</p>
                            <button onClick={handleGoogleSignIn} className="btn btn-warning"><i className="fab fa-google"></i>oogle Sign In</button>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;