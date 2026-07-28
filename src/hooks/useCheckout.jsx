import { useMutation } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance'

export default function useCheckout() {

  return useMutation({
    mutationFn: async({paymentMethod})=>{
      console.log(paymentMethod)
      return await axiosAuthInstance.post('/Checkouts',{paymentMethod})
    }, onSuccess:()=>{
      if (response?.data?.url){
        location.href = response.data.url;
      }
    }
  })
}
