import { Box, Card, CardContent, CardMedia, CardActionArea, Button, Pagination, Typography, Table } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { add, decreaseCart, remove } from '../store/cartSlice'
import { useState } from 'react'
import Add from './Add';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const [price, setPrice] = useState(0)

  //console.log(price)

  const products = useSelector((state) => state.cart.carts)
  const dispatch = useDispatch();
  const handelRemove = (productId) => {
    dispatch(remove(productId))
  }

  //const dispatch = useDispatch()
  const handelAdd = (product) => {
    dispatch(add(product))
  }
  const handelDecreaseCart = (product) => {
    dispatch(decreaseCart(product))
  }

  // Total my cart products------------------------------- 
  const total = () => {
    let price = 0
    products.map((ele, key) => {
      price = ele.price * ele.cartQuantity + price
    })
    setPrice(price)
  }
  useEffect(() => {
    total()
  }, [total])


  // --------------------------------------------------------------
  // useEffect(() => {
  // }, [products])
  // const removed = (products) =>{
  //  return [...new Set(products)]
  // }
  //console.log( removed(products),"test")

  return (

    <Box sx={{
      marginTop: 8, alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}><Typography sx={{ marginTop: 3 }} variant='h3'>My Selected Products</Typography>
      {products.length > 0 ?
        <Table style={{ marginTop: '30px' }}>
          <tr>
            <th>PRODUCT</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
          {/* {removed(products)?.map((product) => { */}
          {products.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <tr style={{ marginTop: '50px' }}>
                  <td><img src={product.image} style={{ height: '100px' }}></img>
                    {/* &nbsp;<td style={{ marginLeft: 3 }}><Box><button onClick={() => handelDecreaseCart(product)}>-</button>&nbsp;{product.cartQuantity}&nbsp;
                    <button onClick={() => handelAdd(product)}>+</button></Box></td> */}
                  </td>
                  <td>{product.title}</td>
                  <td>$ {product.price}</td>
                  <td style={{ marginLeft: 3 }}>
                    {/* <Box><button onClick={() => handelDecreaseCart(product)}>-</button>&nbsp;{product.cartQuantity}&nbsp;
                  <button onClick={() => handelAdd(product)}>+</button></Box> */}
                    <Add reusableData={product} />
                  </td>
                  <td>Price : $ {Number(product.price * product.cartQuantity).toFixed(2)}</td>
                  <td><Button variant="outlined" color="success" onClick={() => handelRemove(product.id)}>Remove</Button></td>
                </tr><hr />
              </React.Fragment>)
          }
          )
          }
        </Table> : <Box sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Typography>Your Cart is Empty</Typography></Box>}
      <Box sx={{
        marginBottom: 4, alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid'
      }}><Typography sx={{ marginTop: 1 }} variant='h3'>SubTotal : $ {price}</Typography>
      </Box>
      {products.length > 0 ? <Box>
        <StripeCheckout 
        name='Payment Method'
          stripeKey='pk_test_51ME5hQSJUfnTzXEcySIAkVo5JyDMkGscs1QWdGLDMnDk5Tul1al0t1nyv2ts47M3ycO2Zy1526X5wuZE4yz4sPM800e6ULNb8a'
          billingAddress
          shippingAddress
          >

        </StripeCheckout>
      </Box>
        : ""
      }

    </Box >
  )
}

export default Cart

