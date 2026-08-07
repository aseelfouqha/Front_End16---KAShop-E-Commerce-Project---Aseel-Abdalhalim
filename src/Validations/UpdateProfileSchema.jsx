import React from 'react'
import * as yup from 'yup';



export const updateProfileSchema = yup.object({
  email: yup.string().email().required(),
})