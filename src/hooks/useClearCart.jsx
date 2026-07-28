import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance';

export default function useClearCart() {
  const queryClient = useQueryClient();

  return useMutation ({
    mutationFn: ()=>{
      return axiosAuthInstance.delete("/Carts/clear");
    },

    onSuccess: ()=>{
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
  
}
