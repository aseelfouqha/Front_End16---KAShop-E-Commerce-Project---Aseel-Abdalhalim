import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { resetPasswordEmailSchema } from '../../Validations/ResetPasswordEmailSchema';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import axios from 'axios';

export default function ForgotPassword() {
  
  const [serverErrors, setServerErrors] = useState([]);

  const{
    register,
    handleSubmit,
    formState:{errors, isSubmitting},
  } = useForm({
    resolver: yupResolver(resetPasswordEmailSchema),
  })

  const sendCode = async (data) =>{
    setServerErrors([]);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/SendCode`,
        data,
      );
      console.log("Status:", response.status);

      console.log("The verification code was sent to your email.");

    } catch (err){
      console.log("full error:", err);
      setServerErrors(err?.response?.data?.errors);
    }
  };

  return(
    <Box component="section" className="ForgetPassPage">
      <Typography  component="h1" variant="h4">
        Forget Password
      </Typography>
      {console.log(serverErrors)}
      {serverErrors?.length > 0? serverErrors.map((errors) =>(
        <Typography color="error">(error)
        </Typography>
      ))
    : ""}
    <Box 
      onSubmit = {handleSubmit(sendCode)}
      component='form'
      sx={{ marginTop: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        fullWidth{...register("email")}
        label='Email'
        variant='outlined'
        error={errors.email}
        helperText={errors.emai?.message}
      />
      <Button variant='contained' type='submit' disabled={isSubmitting}>
        {isSubmitting? (<CircularProgress size={24} color='inherit'/>): ("Send Code")}
      </Button>

    </Box>
    </Box>
  );

}
