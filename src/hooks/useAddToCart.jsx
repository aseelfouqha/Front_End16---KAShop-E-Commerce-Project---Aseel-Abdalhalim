import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance';
import { useParams } from 'react-router-dom';

export default function useAddToCart() {

  const {id} = useParams();

    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: async(values) => {
        await axiosAuthInstance.post('/Carts',{
          ProductId: values.ProductId,
          Count: values.Count
        });
        },
      onSuccess:()=>{
        queryClient.invalidateQueries(['carts']);
      }
    });
  

  }
