import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Validations/LoginSchema";
import { useUserStore } from "../../Store/useUserStore";
import { useAuthStore } from "../../Store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import { Alert, CircularProgress, Paper } from "@mui/material";

export default function Login() {
  const setToken = useAuthStore((state) => state.setToken);

  const name = useUserStore((state) => state.userName);
  const navigate = useNavigate();

  const [serverErrors, setServerErrors] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const LoginForm = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/Login`,
        data,
      );
      setToken(response.data.accessToken);
      // console.log(response.data.accessToken);
      navigate("/");
    } catch (err) {
      setServerErrors(err?.response?.data?.errors);
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
          maxWidth: 480,
          p: { xs: 3, sm: 5 },
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
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
            Welcome Back
          </Typography>

          <Typography
            component="h1"
            variant="h3"
            sx={{
              mt: 1,
              fontWeight: 700,
            }}
          >
            Login
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 1.5,
              lineHeight: 1.7,
            }}
          >
            Sign in to continue shopping with Nexora.
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
          onSubmit={handleSubmit(LoginForm)}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
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
            {...register("password")}
            label="Password"
            type="password"
            variant="outlined"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />

          <Typography
            component={Link}
            to="/forgot-password"
            color="primary"
            sx={{
              alignSelf: "flex-end",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,

              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Forgot Password?
          </Typography>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            sx={{
              minHeight: 50,
              mt: 1,
              borderRadius: 0.5,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            {isSubmitting ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Login"
            )}
          </Button>

          <Typography color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
            Don&apos;t have an account?{" "}
            <Typography
              component={Link}
              to="/register"
              color="primary"
              sx={{
                textDecoration: "none",
                fontWeight: 700,

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Create account
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
  // return (
  //   <Box component="section" className="LoginPage">
  //     <Typography component="h1" variant="h2">
  //       Login {name}
  //     </Typography>
  //     {console.log(serverErrors)}
  //     {serverErrors?.length > 0
  //       ? serverErrors.map((error) => (
  //           <Typography color="error">(error)</Typography>
  //         ))
  //       : ""}
  //     <Box
  //       onSubmit={handleSubmit(LoginForm)}
  //       component="form"
  //       sx={{ marginTop: 2, display: "flex", flexDirection: "column", gap: 2 }}
  //     >
  //       <TextField
  //         fullWidth
  //         {...register("email")}
  //         label="email"
  //         variant="outlined"
  //         error={errors.email}
  //         helperText={errors.email?.message}
  //       />

  //       <TextField
  //         fullWidth
  //         {...register("password")}
  //         label="password"
  //         variant="outlined"
  //         error={errors.password}
  //         helperText={errors.password?.message}
  //       />
  //       <Typography component={Link} to="/forgot-password"
  //       sx = {{
  //         alignSelf: "flex-end",
  //         textDecoration: "none",
  //       }}>
  //         Forget Password?
  //       </Typography>

  //       <Button variant="contained" type="sumbit" disabled={isSubmitting}>
  //         {isSubmitting ? <CircularProgress /> : "Login"}
  //       </Button>
  //     </Box>
  //   </Box>
  // );
}
