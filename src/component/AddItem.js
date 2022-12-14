import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {Typography} from '@mui/material';
import { useFormik } from "formik"
import { TextField } from '@mui/material';
import { useCreatePostMutation } from './ApiFetch'
import { useNavigate } from 'react-router-dom';
import { ModalSchema } from './YupModal';


const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  //border: '1px solid black',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

const KeepMountedModal = () => {
  const [dataArray, setDataArray] = useState([])
  const initialValues = {
    cate: "",
    price: "",
    des: "",
    img: "https://.com/imfakestoreapig/71li-ujtlUL._AC_UX679_."
  }
  const [createData, dataaa] = useCreatePostMutation()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: ModalSchema,
    onSubmit: async (values, action) => {
      //const saveValue = {...values}
      let array = dataArray
      array.push(values)
      setDataArray(array)
      await createData(dataArray)

      action.resetForm();
    }
  })
  console.log(dataArray, "valluessss")
  // const navigate = useNavigate()
  // const navi =(path,data)=>{
  //  navigate(path ,data)
  //  console.log(data,"gfggfgfgfgf")
  // }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //{ console.log({ values }) }

  return (
    <Box component='form' sx={{
      //marginTop: 0,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }} >

      <Box><Button variant="outlined" color="primary" onClick={handleOpen}>AddItem</Button></Box>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box component='form' onSubmit={handleSubmit} sx={style} > Please Fill The Product Details.

          <TextField type="text"
            margin="normal"
            label="image"
            placeholder='image'
            autoComplete='off'
            name='img'
            value={values.img}
            onChange={handleChange}
            onBlur={handleBlur}
          //required
          />
          <Typography sx={{ color: 'red' }}>{errors.email && touched.email ? <p>{errors.email}</p> : null}</Typography>

          <TextField type="text"
            margin="normal"
            label="Category"
            placeholder='category'
            autoComplete='off'
            name='cate'
            value={values.cate}
            onChange={handleChange}
            onBlur={handleBlur}
          //required
          />
          <Typography sx={{ color: 'red' }}>{errors.cate && touched.cate ? <p>{errors.cate}</p> : null}</Typography>

          <TextField type="number"
            margin="normal"
            label="price"
            placeholder='price'
            autoComplete='off'
            name='price'
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
          //required
          />
          <Typography sx={{ color: 'red' }}>{errors.price && touched.price ? <p>{errors.price}</p> : null}</Typography>

          <TextField type="text"
            margin="normal"
            label="Description"
            placeholder='description'
            autoComplete='off'
            name='des'
            value={values.des}
            onChange={handleChange}
            onBlur={handleBlur}
          //required
          />
          <Typography sx={{ color: 'red' }}>{errors.des && touched.des ? <p>{errors.des}</p> : null}</Typography>
          <br></br>
          <Button type="submit" variant="contained" color="primary">submit</Button>
          {/* onClick={()=>{createData(values)}} */}
        </Box>
      </Modal>
    </Box>
  );
}
export default KeepMountedModal;

