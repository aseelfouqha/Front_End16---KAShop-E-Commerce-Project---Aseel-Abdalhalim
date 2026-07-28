import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useResetPasswordStore } from '../../Store/useResetPasswordStore';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendCodeSchema } from '../../Validations/SendCodeSchema';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function VerifyCode() {
  const navigate = useNavigate();

  const setCode = useResetPasswordStore((state)=>state.setCode);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting},
  } = useForm({
    resolver: yupResolver(sendCodeSchema),
  });

  const submitCode = (data)=>{
    setCode(data.code);
    navigate("/reset-password");
  };

  return(
    <Box component="section">
      <Typography component="h1" variant="h4">Verify Code</Typography>

      <Typography>Enter the 4-digit code sent to your email.</Typography>

      <Box
       component="form"
       onSubmit={handleSubmit(submitCode)}
       sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        gap:2,
      }}>
        <TextField 
        fullWidth
        label="Verfication Code" 
        {...register("code")}
        variant="outlined"
        error={errors.code}
        helperText={errors.code?.message}/>

        <Button variant='contained' type='submit' disabled={isSubmitting}>
          Continue
        </Button>
      </Box>

    </Box>
  );
}
