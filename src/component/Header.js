import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import AddItem from './AddItem';


const Header = (props) => {
    //const {aaaa} = props

    const items = useSelector((state) => state.cart.carts)
    return (
        <AppBar sx={{ bgcolor: "pink", position: 'fix' }}>
            <Toolbar>
                <Stack spacing={2} direction='row'>

                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                        <Typography sx={{ color: 'black' }}>Dashboard</Typography>
                    </Link>
                    <Link to={"/login"} style={{ textDecoration: 'none' }}>
                        <Typography sx={{ color: 'black' }}>Login</Typography>
                    </Link>
                    <Link to={"/cart"} style={{ textDecoration: 'none' }}>
                        <Typography sx={{ color: 'black' }}>Cart</Typography>
                    </Link>
                    <Typography sx={{ color: "black" }}>  <AddShoppingCartIcon /> {items.length}
                    </Typography>
                    <AddItem/>
                    {/* <Link to={"/"} style={{ textDecoration: 'none' }}><AddItem/> </Link> */}

                </Stack>
            </Toolbar>


            <Outlet />
        </AppBar>

    )
}
export default Header
