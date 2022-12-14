import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardActionArea, Button, Pagination, Typography, TextField } from '@mui/material';
import axios from "axios";
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { add, decreaseCart } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { useGetAllPostQuery , useCreatePostMutation} from './ApiFetch'
import Add from './Add';
import { useLocation } from 'react-router-dom';
//import AddItem from './AddItem';


//const url = "https://jsonplaceholder.typicode.com/posts"

//let url = "https://fakestoreapi.com/products/"

const Dashboard = () => {
  const [category, setCategory] = useState("")
  const [loading, setLoading] = useState(false)
  const products = useSelector((state) => state.cart.carts)
  // const limitSize = 5
  // const [limit, setLimit] = useState(limitSize)
  //const { data } = useGetAllPostQuery({ limit: limit })
  //const [createData, dataaa] = useCreatePostMutation()
  const { data,isLoading,} = useGetAllPostQuery()



  //console.log("response informotuiin" , responseInfo)
  //console.log("response informotuiin", data)

  // FETCH API WITH AXIOS METHOD-------------------------------
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setData(response.data);
  //     console.log(setData)
  //   })
  // }, []);


  // FOR PAGINATION-----------------------------
  // let updatedUrl = url
  // let length = 5 / 20
  // url += `?limit=${length}`
  // axios.get(url).then((response) => {
  //   setData(response.data);
  //   console.log(setData)
  // })

  // -------------------------------------------------------------

  // const handleChange = async (e) => {
  //   console.log(e, 'eeeeeeeeeee');
  //   setLimit(e * limitSize)
  // }

  // ------------------------------------------------------------------
  // const location = useLocation();
  // const {img,cate,dec,price}=location



  const navigate = useNavigate()
  const navigateToUrl = (path, imageData) => {
    navigate(path, { state: imageData })
    //console.log(path, imageData);
  }

  const dispatch = useDispatch()
  const handelAdd = (api) => {
    dispatch(add(api))
  }

  const handelDecreaseCart = (product) => {
    dispatch(decreaseCart(product))
  }

  // const aa = (id)=>{
  //    const cc = products.find(element.id == id)
  //    return cc
  // }

  //if (isError) return <Box sx={{ marginTop: 3 }}>An error has occurred!</Box>
  //if (isLoading) return <Box variant='h1' sx={{ marginTop: 3 }}>loading</Box>


  const findProduct = (data) => {
    return products.filter(item => item.id === data.id)
  }

  // --------------------------------------------------------------
  const onEndReachedFetchNext = () => {
    // if (hasNext && !isFetching) {
    //   fetchNext();
  }
  // };

  return (
    //isLoading ? "Loading" :


    <Box sx={{
      marginTop: 8,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }} >
      <TextField size="small" variant="standard" type="search"
        margin="normal"
        label="search" onChange={(e) => setCategory(e.target.value)}></TextField>
      <Typography sx={{ marginTop: 1 }} variant='h3'>My Products
      </Typography>
     
      {isLoading ? "Loading" :
        <Card margin="normal"
          sx={{ width: 1000, marginTop: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}
          initialNumToRender={4}
          scrollEventThrottle={4}
          // refreshing={refreshing}
          // onRefresh={() => refetch()}
          // keyExtractor={keyExtractor}
          // renderItem={renderSiteItem}
          onEndReachedThreshold={0.01}
          onEndReached={onEndReachedFetchNext}
        >

          {data?.filter((value) => {
            if (category === "") {
              return value
            } else if (value.category.toLowerCase().includes(category.toLowerCase())) {
              return value
            }
          })
            .map((api) => {
              return (



                <React.Fragment
                  // reusableData={api}

                  key={api.id}>
                  <CardActionArea sx={{ border: '1px solid', marginTop: 3 }}>
                  {/* {img}
                      {dec}
                      {price}
                      {cate} */}
                  <img onClick={() => navigateToUrl('/products', api)} style={{maxWidth: 220}} src={api.image }></img>
                     
                   
                    {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    TITLE = {api.title}
                  </Typography>
                  <Typography variant="h6" >
                    PRICE = {api.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    CATEGORY = {api.category}
                  </Typography>
                </CardContent> */}
                    <Box textAlign='center'
                      sx={{
                        marginTop: 3,
                        marginBottom: 2
                      }}
                    >
                      {/* {findProduct(api).length ?
                        <Box><button onClick={() => handelDecreaseCart(findProduct(api)[0])}>-</button>
                          &nbsp;{findProduct(api)[0].cartQuantity}&nbsp;<button onClick={() => handelAdd(findProduct(api)[0])}>+</button></Box>
                        :
                        <Button variant="outlined" color="success" onClick={() => handelAdd(api)}>Add to Cart</Button>
                      }
                      <Button variant="contained" color="success" onClick={() => navigateToUrl('/products', api)}>Explore</Button> */}
                      
                      <Add reusableData={api}  />
                    </Box>
                    {/* <Link to='/products'>Explore</Link> */}
                  </CardActionArea>



                  {/* <tr>
                <td> {api.userId}</td>
                <td>{api.title}</td>cartQuantity

                <td>{api.image}</td>
                <td>{api.price}</td>
              </tr> */}
                </React.Fragment>)
            }
            )

          }

        </Card>}
      {/* <Box
        style={{
          width: 400,
          height: 200,
          marginTop: 20,
        }}
      >
        <Pagination onChange={(e, page) => handleChange(page)}
          sx={{
            p: 8,
            border: '1px solid',
          }}
          count={5} color="secondary" /></Box> */}

      <Box
        style={{
          width: 400,
          height: 200,
          marginTop: 20,
        }}
      >
        <Pagination
          sx={{
            p: 8,
            border: '1px solid',
          }}
          count={5} color="secondary" /></Box>
{/* <AddItem/> */}
    </Box>
  )
}

export default Dashboard
