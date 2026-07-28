import React from 'react'
import * as yup from 'yup';


export const resetPasswordEmailSchema = yup.object ({
    email:yup.string().email().required(),
})