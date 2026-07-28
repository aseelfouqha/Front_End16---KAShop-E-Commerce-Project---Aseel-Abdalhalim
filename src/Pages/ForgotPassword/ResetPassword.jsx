import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useResetPasswordStore } from '../../Store/useResetPasswordStore';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPassowrdSchema } from '../../Validations/ResetPasswordSchema';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import axios from "axios";

export default function ResetPassword() {

  const navigate = useNavigate();

  const [serverErrors, setServerErrors] = useState([]);

  const email = useResetPasswordStore((state)=>state.email);

  const code = useResetPasswordStore((state)=> state.code);

  const clearResetPasswordData = useResetPasswordStore((state)=>state.clearResetPasswordData);

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  }=useForm({
    resolver: yupResolver(resetPassowrdSchema),
  });

  const resetPassword = async (data)=>{
    setServerErrors([]);

    const requestData = {
      email,
      code,
      newPassword: data.newPassword,
    };

    try {
      const response = await axios.patch(`${import.meta.env.VITE_BURL}//auth/Account/ResetPassword`, requestData);

      console.log("Satuts:", response.statues);

      clearResetPasswordData();
      navigate("/login");
    } catch (err) {
      setServerErrors(err?.response?.data?.errors);
    }
  }
  return (
    <Box component="section">
      <Typography component="h1" variant='h4'> Reset Password</Typography>

      <Typography sx={{mt:1}}>Enter your new Password.</Typography>
      {console.log(serverErrors)}
      {serverErrors?.length > 0 ? serverErrors.map((error)=>(
        <Typography color="error">{error}</Typography>
      )): ""}

      <Box
      component="form"
      onSubmit={handleSubmit(resetPassword)}
      sx={{
        mt:2,
        display:"flex",
        flexDirection:"column",
        gap: 2,
      }}
      >
        <TextField 
          fullWidth
          type='password'
          label="New Password"
          {...register("newPassword")}
          helperText={errors.newPassword?.message}
        />
        <Button variant='contained' type='submit' disabled={isSubmitting}>
          {isSubmitting? (
            <CircularProgress size={24} color='inherit' />): ("Reset Password")}
        </Button>
      </Box>

    </Box>
  );
}
