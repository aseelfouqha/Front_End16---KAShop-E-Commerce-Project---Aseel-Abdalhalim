import React from 'react'
import { useState } from "react";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography'
import TextField from "@mui/material/TextField";
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../Validations/LoginSchema';
import { CircularProgress } from '@mui/material';



export default function Login() {


  const [serverErrors, setServerErrors] = useState([]);



  const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm(
    {
      resolver : yupResolver(loginSchema)
    }
  );

  const LoginForm = async(data) => {
    try{
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`,data);
      console.log(response.data.accessToken);
      localStorage.setItem("accessToken", response.data.accessToken)
    }catch(err){
      setServerErrors(err.response.data.errors)
    }
  }
  return (
    <Box component="section" className="LoginPage"> 
        <Typography component="h1" variant="h2">
          Login 
        </Typography>
        {console.log(serverErrors)}
        {serverErrors?.length > 0 ? serverErrors.map((error)=> 
        <Typography color='error'>(error)</Typography>
      ) :''}
        <Box onSubmit={handleSubmit(LoginForm)} component="form" sx={{marginTop:2, display:'flex', flexDirection:'column', gap:2}}>
            
          <TextField fullWidth {...register("email")} label="email" variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
          />
        
          <TextField fullWidth {...register("password")} label="password" variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
          />

          <Button variant="contained" type="sumbit" disabled={isSubmitting}>
            {isSubmitting? <CircularProgress/> :'Login'}
          </Button>
        </Box>
    </Box>
  )
}
