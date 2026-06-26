import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'



export default function useCategories() {

    const getCategories = async()=>{
    const response = await axios.get(`${import.meta.env.VITE_BURL}/Categories`,{
      headers:{
        "Accept-Language":"en"
      }
    });
    return response.data;
  }

    const {data, isLoading, isError, error} = useQuery({
      queryKey : ['categories'],
      queryFn : getCategories,
      staleTime: 1000 * 60 * 5

    })

  return query;
}
