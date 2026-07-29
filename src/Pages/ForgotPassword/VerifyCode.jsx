import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetPasswordStore } from "../../Store/useResetPasswordStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendCodeSchema } from "../../Validations/SendCodeSchema";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function VerifyCode() {
  const navigate = useNavigate();

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

  const submitCode = (data) => {
    setCode(data.code);
    navigate("/reset-password");
  };

  // state Variable to store the 4 digit pin in an array and setter function to initailize with empty string
  const [otp, setOtp] = useState(["", "", "", ""]);

  // created a function to handle each input change
  const handleChange = (value, index) => {
    // allow only one digit for each (0-9)
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      // update specific otp box
      newOtp[index] = value;
      setOtp(newOtp);

      setValue("code", newOtp.join(""),{shouldValidate: true,});

      // move to the next input if not empty automatically
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

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
          onSubmit={handleSubmit(submitCode)}
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
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                sx={{
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
            <Button variant="contained" type="submit" disabled={isSubmitting}>
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
