import React from 'react'
import { useQuery  } from '@tanstack/react-query';
import axios from 'axios'
import axiosInstance from '../API/axiosInstance';



export default function useProducts() {

    const getProducts = async()=>{
      const response = await axiosInstance.get(`/Products`,);
    return response.data;
  }

    const query = useQuery({
      queryKey : ['Products'],
      queryFn : getProducts,
      staleTime: 1000 * 60 * 5

    })

  return query;
}
