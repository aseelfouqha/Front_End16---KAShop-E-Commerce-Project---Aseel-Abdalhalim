import {Box, CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import useCategories from '../../hooks/useCategories';

export default function Categories() {


    const {data, isLoading, isError, error} = useCategories();

    if(isLoading) return <CircularProgress />
    if(isError) return <Typography color="red">{error}</Typography>

    console.log(data);


  return (

    <div>
      {data.response.data.map((category) => <Box key={category.id}> <Typography>{category.name}</Typography></Box>)}
    </div>
    
  )
}
