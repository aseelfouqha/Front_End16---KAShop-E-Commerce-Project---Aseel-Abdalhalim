import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetPasswordStore } from "../../Store/useResetPasswordStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendCodeSchema } from "../../Validations/SendCodeSchema";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function VerifyCode() {
  const navigate = useNavigate();

   // state Variable to store the 4 digit pin in an array and setter function to initailize with empty string
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputsRef =useRef([])
  const setCode = useResetPasswordStore((state) => state.setCode);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(sendCodeSchema),
    defaultValues:{
      code: "",
    },
  });

  // ==============================================
  // created a function to handle each input change
  //Functions 
  // ==============================================
  // Function HandelChange
  // ==============================================
  const handelChange = (value , index )=> { 
    if (!/^\d?$/.test(value)) return ; 
      const newOtp =[...otp]
      newOtp[index] = value
      setOtp(newOtp)
      if(value && index < otp.length - 1){
        inputsRef.current[index + 1]?.focus()
      }
    }
  // ==============================================
  //  End Function Handel Change 
  // ==============================================

  // ==============================================
  //  Start  Function Handel Key Down 
  // ==============================================
    const handleKeyDown = (e , index) => {
      if(e.key === "Backspace" && !otp[index] && index > 0 ){
        inputsRef.current[index - 1]?.focus()
      }
    }
  // ==============================================
  //  End Function Handel Key Down
  // ==============================================
    
  // ==============================================
  //  Start  Function Handel Submit 
  // ==============================================
    const handelSubmit =(e)=> {
      e.preventDefault()
      const code = otp.join("")
      if(code.length !== 4 ){
        alert("Please Enter the 4 digit code ")
        return ;
      }
      navigate("/reset-password")
      console.log(code);
      setCode(code)

    }
  // ==============================================
  //  End Function Handel Submit
  // ==============================================
    
  // ==============================================
  

  return (
    <Box
      component="section"
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Paper elevation={2}>
        <Box
          sx={{
            m: 5,
            display: "flex",
            flexDirection: "column",
            flexWrap: 'wrap',
            gap: 1,
            alignItems: "center",
            
          }}
        >
          <Typography component="h1" variant="h4">
            Verify Code
          </Typography>

          <Typography>Enter the 4 digit code sent to your email.</Typography>
        </Box>

        <Box
          component="form"
        
          sx={{
            m: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
          id="outlined-basic"
          variant="outlined"
        >
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            {otp.map((digit, index) => (
              <TextField
                fullWidth
                key={index}
                id={`otp-${index}`}
                type="text"
                inputRef={(el) => (inputsRef.current[index] = el)}
                                onKeyDown={(e)=>{
                  handleKeyDown(e ,index)
                }}
                                inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
                maxLength="1"
                value={digit}
                onChange={(e) => handelChange(e.target.value, index)}                sx={{
                  width: "50px",
                  height: "100px",
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button variant="contained" onClick={handelSubmit} type="submit" disabled={isSubmitting}>
              Verify Code
            </Button>
            <Typography>Didn't recieve the code?</Typography>
            <Button variant="contained" type="button" disabled={isSubmitting}>
              Resend Code
            </Button>
          </Box>

          {/* <TextField
          fullWidth
          label="Verfication Code"
          {...register("code")}
          variant="outlined"
          error={errors.code}
          helperText={errors.code?.message}
        />
 */}
          {/* <Button variant="contained" type="submit" disabled={isSubmitting}>
          Continue
        </Button> */}
        </Box>
      </Paper>
    </Box>
  );
}
