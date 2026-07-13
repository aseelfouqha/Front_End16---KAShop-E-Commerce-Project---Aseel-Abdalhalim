import { useMutation } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance';

export default function useAddToCart() {

    useMutation({
      mutationFn: async() => {
        await axiosAuthInstance.post('/Carts');
      }
    });

  return (
    <div>useAddToCart</div>
  )
}
