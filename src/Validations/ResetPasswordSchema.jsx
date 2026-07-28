import React from 'react'
import * as yup from 'yup';


  export  const resetPassowrdSchema = yup.object ({
    newPassword:yup.string().required(),
  })
