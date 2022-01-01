import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'
import { Spinner } from 'react-bootstrap';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [loader, setLoader] = useState(false);

    const {user} = useAuth();

    // load an user's order(s)
    useEffect( () => {
        setLoader(true)
        fetch(`https://safe-refuge-53186.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
        .finally(()=> setLoader(false))
    } ,[user.email])


    // handle delete an order for an user
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `https://safe-refuge-53186.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = myOrders.filter(order => order._id !== id)
                        setMyOrders(remaining)
                    }

                })
        }
    }


    return (
        <Container  className='table-responsive'>
            <h2 className='text-center'>Your Total Orders : {myOrders.length}</h2>
            <p className='text-center m-0'>{ loader && <Spinner animation="border" variant="primary" /> }</p>
            <TableContainer style={{boxShadow : '0px 0px 20px rgba(0,0,0,0.20)'}} sx={{mt:5}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Course Name</TableCell>
                            <TableCell align="right">Course Image</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row.order._id}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.name}
                                </TableCell>
                                <TableCell align="center">{row?.order.courseName}</TableCell>
                                <TableCell align="right"><img style={{ width: "90px", height: "60px", borderRadius: '2px' }} src={row?.order.image} alt="" /></TableCell>
                                <TableCell align="right">${row?.order.price}</TableCell>
                                <TableCell align="right">{row?.status}</TableCell>
                                <TableCell align="right"><button onClick={() => handleDelete(row._id)} className="action-btn">Delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrders;