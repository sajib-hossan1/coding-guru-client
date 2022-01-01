import { Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './GiveReview.css'

const GiveReview = () => {
    const { user } = useAuth();

    // initial info
    const initialInfo = { customerName: user.displayName, feedback : '' };
    
    // review state
    const [review, setReview] = useState(initialInfo)

    
    // reset input form
    const { reset } = useForm();

    // using history to redirect
    const navigate = useNavigate();

        
    // get customer review values
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        setReview(newInfo);
    }

    
    // customer review handle submit
    const handleSubmit = e => {
        const customerReview = {
            ...review
        }
        fetch('https://limitless-chamber-53235.herokuapp.com/customerReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customerReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Give Review Successful')
                    navigate('/home');
                    reset();
                }
            });
        e.preventDefault();
    }

    return (
        <Container>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 , textAlign : 'center', mt:4}}>
                Please Rating About Our Services
            </Typography>
            <Grid item xs={12} md={12} sx={{ my: 5 }}>
                <form onSubmit={handleSubmit} className='review-form' >
                    <TextField
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        name="customerName"
                        defaultValue={user.displayName}
                        label="Your Name"
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        label="Your Feedback"
                        name="feedback"
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <Button type="submit" className="review-btn" variant="contained">Submit</Button>
                </form>
            </Grid>
        </Container>
    );
};

export default GiveReview;