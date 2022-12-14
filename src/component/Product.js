import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
const Product = () => {
    const location = useLocation();
    const { id,image, price, description, category, rating, rate } = location.state;
    //console.log(id, price, "vheck")



    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant='h3'>
                Details My Product
            </Typography>
            <img style={{height:200, width:200}} src={image}></img>
            <Typography variant='h5'>I,D = {id}</Typography>
            <Typography variant='h5'>Price = {price}</Typography>
        
            <Typography variant='h5'>Category = {category}</Typography>
            <Typography variant='h5'>Description = {description}</Typography><br />
            <Button variant="outlined" color="success"><Link to='/' style={{ textDecoration: 'none' }}>Back to Dashboard</Link></Button>
        </Box>
    )
}
export default Product;
