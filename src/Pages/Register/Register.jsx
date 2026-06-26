import React from 'react'
import { Box } from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import axios from 'axios'


export default function Register() {
  const {register, handleSubmit} = useForm();
  const RegisterForm = async(data) => {
    try{
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);
      console.log(response);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <Box component="section" className="registerPage"> 
        <Typography component="h1" variant="h2">
          Register
        </Typography>
        <Box onSubmit={handleSubmit(RegisterForm)} component="form" sx={{marginTop:2, display:'flex', flexDriection:'Column', gap:2}}>
          <TextField fullWidth {...register("userName")} label="userName" variant="outlined"/>
          <TextField fullWidth {...register("fullName")} label="fullName" variant="outlined"/>
          <TextField fullWidth {...register("email")} label="email" variant="outlined"/>
          <TextField fullWidth {...register("phoneNumber")} label="phoneNumber" variant="outlined"/>
          <TextField fullWidth {...register("password")} label="password" variant="outlined"/>
          <Button variant="contained" type="sumbit">
            Register
          </Button>
        </Box>
    </Box>
  )
}
