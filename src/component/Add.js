import React from 'react'
import { Box,Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add, decreaseCart } from '../store/cartSlice'


const Add = (props) => {
    const {reusableData} = props
    const DifferentComponent = useSelector((state) => state.cart.carts)

    const navigate = useNavigate()
  const navigateToUrl = (path, imageData) => {
    navigate(path, { state: imageData })
    console.log(path, imageData);
  }
    
    const dispatch = useDispatch()

    const handelAdd = (DifferentComponent) => {
        dispatch(add(DifferentComponent))
    }
    const handelDecreaseCart = (DifferentComponent) => {
        dispatch(decreaseCart(DifferentComponent))
    }
    const findProduct = (data) => {
        return DifferentComponent.filter(item => item.id === data.id)
      }


    return (
        <Box textAlign='center'
        sx={{
          marginTop: 3,
          marginBottom: 2
        }}
      >
        {findProduct(reusableData).length ?
          <Box><button onClick={() => handelDecreaseCart(findProduct(reusableData)[0])}>-</button>
            &nbsp;{findProduct(reusableData)[0].cartQuantity}&nbsp;<button onClick={() => handelAdd(findProduct(reusableData)[0])}>+</button></Box>
          :
          <Button variant="outlined" color="success" onClick={() => handelAdd(reusableData)}>Add to Cart</Button>
        }
        {/* <Button variant="contained" color="success" onClick={() => navigateToUrl('/products', reusableData)}>Explore</Button> */}
        
        
      </Box>
    )
}

export default Add;