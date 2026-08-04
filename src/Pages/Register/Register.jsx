import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Validations/RegisterSchema";
import { CircularProgress } from "@mui/material";
import { Alert, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function Register() {
  const [serverErrors, setServerErrors] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const RegisterForm = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/Register`,
        data,
      );
      console.log(response);
    } catch (err) {
      setServerErrors(err.response.data.errors);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
        bgcolor: "background.default",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 560,
          p: { xs: 3, sm: 5 },
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1.5,
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            color="primary"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Join Nexora
          </Typography>

          <Typography
            component="h1"
            variant="h3"
            sx={{
              mt: 1,
              fontWeight: 700,
            }}
          >
            Create Account
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 1.5,
              lineHeight: 1.7,
            }}
          >
            Create your account and start exploring our products.
          </Typography>
        </Box>

        {serverErrors?.length > 0 && (
          <Box sx={{ mb: 3 }}>
            {serverErrors.map((error, index) => (
              <Alert
                key={index}
                severity="error"
                sx={{
                  mb: 1,
                  borderRadius: 0.5,
                }}
              >
                {error}
              </Alert>
            ))}
          </Box>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit(RegisterForm)}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: 2.5,
            }}
          >
            <TextField
              fullWidth
              {...register("userName")}
              label="Username"
              variant="outlined"
              error={Boolean(errors.userName)}
              helperText={errors.userName?.message}
            />

            <TextField
              fullWidth
              {...register("fullName")}
              label="Full Name"
              variant="outlined"
              error={Boolean(errors.fullName)}
              helperText={errors.fullName?.message}
            />
          </Box>

          <TextField
            fullWidth
            {...register("email")}
            label="Email"
            type="email"
            variant="outlined"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />

          <TextField
            fullWidth
            {...register("phoneNumber")}
            label="Phone Number"
            type="tel"
            variant="outlined"
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber?.message}
          />

          <TextField
            fullWidth
            {...register("password")}
            label="Password"
            type="password"
            variant="outlined"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            sx={{
              minHeight: 50,
              mt: 1,
              borderRadius: 1,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            {isSubmitting ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Create Account"
            )}
          </Button>

          <Typography color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
            Already have an account?{" "}
            <Typography
              component={Link}
              to="/login"
              color="primary"
              sx={{
                textDecoration: "none",
                fontWeight: 700,

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Login
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
  // return (
  //   <Box component="section" className="registerPage">
  //       <Typography component="h1" variant="h2">
  //         Register
  //       </Typography>
  //       {console.log(serverErrors)}
  //       {serverErrors?.length > 0 ? serverErrors.map((error)=>
  //       <Typography color='error'>(error)</Typography>
  //     ) :''}
  //       <Box onSubmit={handleSubmit(RegisterForm)} component="form" sx={{marginTop:2, display:'flex', flexDirection:'column', gap:2}}>
  //         <TextField fullWidth {...register("userName")} label="userName" variant="outlined"
  //           error={errors.userName}
  //           helperText={errors.userName?.message}
  //         />
  //         <TextField fullWidth {...register("fullName")} label="fullName" variant="outlined"
  //           error={errors.fullName}
  //           helperText={errors.fullName?.message}
  //         />

  //         <TextField fullWidth {...register("email")} label="email" variant="outlined"
  //           error={errors.email}
  //           helperText={errors.email?.message}
  //         />
  //         <TextField fullWidth {...register("phoneNumber")} label="phoneNumber" variant="outlined"
  //           error={errors.phoneNumber}
  //           helperText={errors.phoneNumber?.message}
  //         />
  //         <TextField fullWidth {...register("password")} label="password" variant="outlined"
  //           error={errors.password}
  //           helperText={errors.password?.message}
  //         />

  //         <Button variant="contained" type="sumbit" disabled={isSubmitting}>
  //           {isSubmitting? <CircularProgress/> :'register'}
  //         </Button>
  //       </Box>
  //   </Box>
  // )
}
