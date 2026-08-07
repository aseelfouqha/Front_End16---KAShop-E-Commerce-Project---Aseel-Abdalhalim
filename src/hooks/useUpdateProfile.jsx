import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance';

export default function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values) =>{
      const response = await axiosAuthInstance.patch("/profile",
      values);
        return response.data;
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries({
        queryKey:["profile"],
      });
    }
  })
}
