import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import axiosInstance from '../API/axiosInstance';



export default function useCategories() {

    const getCategories = async()=>{
      const response = await axiosInstance.get(`/Categories`,);
    return response.data;
  }

    const {data, isLoading, isError, error} = useQuery({
      queryKey : ['categories'],
      queryFn : getCategories,
      staleTime: 1000 * 60 * 5

    })

  return query;
}
