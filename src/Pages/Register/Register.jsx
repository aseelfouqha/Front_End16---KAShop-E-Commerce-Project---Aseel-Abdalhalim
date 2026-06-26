import React from 'react'
import { Box } from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../Validations/RegisterSchema';



export default function Register() {


  const {register, handleSubmit, formState:{errors}} = useForm(
    {
      resolver : yupResolver(registerSchema)
    }
  );

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
          <TextField fullWidth {...register("userName")} label="userName" variant="outlined"
            error={errors.userName}
            helperText={errors.userName.message}
          />
          <TextField fullWidth {...register("fullName")} label="fullName" variant="outlined"
            error={errors.fullName}
            helperText={errors.fullName.message}
          />
            
          <TextField fullWidth {...register("email")} label="email" variant="outlined"
            error={errors.email}
            helperText={errors.email.message}
          />
          <TextField fullWidth {...register("phoneNumber")} label="phoneNumber" variant="outlined"
            error={errors.phoneNumber}
            helperText={errors.phoneNumber.message}
          />
          <TextField fullWidth {...register("password")} label="password" variant="outlined"
            error={errors.password}
            helperText={errors.password.message}
          />
          <Button variant="contained" type="sumbit">
            Register
          </Button>
        </Box>
    </Box>
  )
}
