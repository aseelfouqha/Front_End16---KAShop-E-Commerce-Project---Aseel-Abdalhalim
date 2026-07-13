import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance'
import { useQuery } from '@tanstack/react-query';

export default function useCart() {

  const getItem = async()=>{
    const response = await axiosAuthInstance.get('/Carts');
    return response.data;
  }

  return useQuery({
    queryKey:['cart','en'],
    queryFn: getItem,
    staleTime: 1000*60*5

  });

}
