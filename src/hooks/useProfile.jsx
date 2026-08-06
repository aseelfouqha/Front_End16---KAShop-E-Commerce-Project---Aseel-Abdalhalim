import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance'
import { useQuery } from '@tanstack/react-query';

export default function useProfile() {
  
  const getProfile = async () =>{
    const response = await axiosAuthInstance.get("/Profile");
    return response.data;
  }

  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  })
}
