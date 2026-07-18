import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance';

export default function useRemoveFromCart() {

  // this line is when I want to validate
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:(cartItemId)=>{
      return axiosAuthInstance.delete(`/Carts/${cartItemId}`)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:['cart']
      })
    }
  })

}
