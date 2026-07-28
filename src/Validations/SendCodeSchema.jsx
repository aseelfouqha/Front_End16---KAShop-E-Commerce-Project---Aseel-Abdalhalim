import React from 'react'
import * as yup from 'yup';


export const sendCodeSchema = yup.object ({
    code:yup.string().required(),
})