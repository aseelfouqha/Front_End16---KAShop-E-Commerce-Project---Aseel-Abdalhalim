import axios from 'axios'
import React from 'react'
import axiosInstance from '../API/axiosInstance'
import { useQuery } from '@tanstack/react-query'
import i18next from 'i18next'

export default function useProduct(id){

  const getProduct = async()=>{
    const response = await axiosInstance.get(`/Products/${id}`)
    return response.data;
  }

  const query = useQuery({
    queryKey: ['product',i18next.language,id],
    queryFn: getProduct,
    staleTime: 1000 * 60 *5,

  });
  return query;

}
