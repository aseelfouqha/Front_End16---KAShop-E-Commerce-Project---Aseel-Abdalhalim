import React from 'react'
import * as yup from 'yup';


  export  const loginSchema = yup.object ({
    userName:yup.string().required().min(3).max(20),
    fullName:yup.string().required().min(3).max(20),
    email:yup.string().email().required(),
    phoneNumber:yup.string().required(),
    password:yup.string().required(),
  })
