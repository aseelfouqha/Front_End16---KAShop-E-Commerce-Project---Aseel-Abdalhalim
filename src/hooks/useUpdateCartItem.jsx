import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance';

export default function useUpdateCartItem() {

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async({productId, Count})=>{
      await axiosAuthInstance.patch(`/Carts/${productId}`,{count:Count})
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey: ['cart']
      })
    }
  })
}
