// import React from 'react'
// import { useState } from 'react';
// import { Link } from 'react-router-dom'

// const Login = () => {
//   const [emaill, setEmaill]= useState("")
//   const [passwordd, setPasswordd]= useState("")

//   // ---------------------NEW STATE TO STORE OUR FORM DATA---------------------

//   const [storeData, setStoreData] = useState([])
//   const submitForm = (e) =>{
//     e.preventDefault();
//     const newEntry = {email1:emaill, password1:passwordd};

//     setStoreData([...storeData,newEntry]);
//   }
//   return (
//     <div className='container mt-5'>

//       <form action='/' onSubmit={submitForm}>
//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input type="email"
//             placeholder='email'
//             className="form-control w-25"
//             autoComplete='off'
//             name='email'
//             value={emaill}
//             onChange={(e)=>{setEmaill(e.target.value)}}
//             required />

//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password"
//             placeholder='password'
//             className="form-control w-25"
//             autoComplete='off'
//             name='pass'
//             value={passwordd}
//             onChange={(e)=>{setPasswordd(e.target.value)}}
//             required />

//         </div>

//         <Link to='/forgot'>Forgot Password</Link><br></br><br></br>

//         <button type="submit" className="btn btn-primary">Submit</button>

//       </form>

//       <div>
//         {
//           storeData.map((tt)=>{
//             return(
//               <div>
//               <h3>{tt.email1}</h3>
//               <h3>{tt.password1}</h3>
//               </div>
//             )

//           })
//         }
//       </div>

//     </div>
//   )
// }
// export default Login

// ----------------------Form Validation by Formik and Yup---------------------

import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from "formik"
import { loginSchema } from './YupSchema'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Box, Stack, TextField, Toolbar, Typography, Button } from '@mui/material';

//import styled from '@emotion/styled'
import styled from 'styled-components'

const Container = styled.div`
 width:100%;
 height:100vh;
 display:flex;
align-items:center;
justify-content:center;
background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
background-size:cover;
 overflow-y:hidden;
 background-position:0px 60px;
 background-repeat:no-repeat;
`;

// const Wrapper = styled.div`
// width:25%;
// // height:50%;
// padding:20px;
// background-color:white;
// // margin-top:5%
// `;

// const Typography = styled.h1`
// font-size:24px;
// font-weight:300;
// `;

// const Box = styled.form`
// display:flex;
// flex-direction:column;
// `;

// const Input = styled.input`
// flex:1;
// min-width:40%;
// margin:10px 0px;
// padding:10px;
// `;

// const Button = styled.button`
// width:40%;
// border:none;
// padding:15px 20px;
// background-color:teal;

// `;

const Error = styled.span`
color:red;
`;

// const Link = styled.a`
// margin:5px 0px;
// font-size:12px;
// `;


const initialValues = {
  email: "",
  pass: "",
}

const Login = () => {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      //console.log(values,"aman")
      const value = JSON.stringify({ email: values.email, pass: values.pass });
      sessionStorage.setItem("user", value)
      navigate('/')
      action.resetForm();
    }
  })

  const navigate = useNavigate()
  useEffect(() => {
    let login = sessionStorage.getItem("user")
    if (login) {
      navigate('/')
    }
  })

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h3'>SIGN IN</Typography>

      <Box component='form' onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', }}
      >
        <TextField type="email"
          margin="normal"
          label="Email Address"
          placeholder='email'
          autoComplete='off'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        //required 
        />
        <Typography sx={{ color: 'red' }}>{errors.email && touched.email ? <p>{errors.email}</p> : null}</Typography>

        <TextField type="password"
          margin="normal"
          label="Password"
          placeholder='password'
          autoComplete='off'
          name='pass'
          value={values.pass}
          onChange={handleChange}
          onBlur={handleBlur}
        //required 
        />
        <Typography sx={{ color: 'red' }}>{errors.pass && touched.pass ? <p>{errors.pass}</p> : null}</Typography>
        <Typography><Link to='/forgot'>Forgot Password</Link></Typography><br />
        <Button type="submit" variant="contained" color="success">LOG IN</Button>

      </Box>


    </Box>



  )
}
export default Login;
