import React from 'react'
import useProduct from '../../hooks/useProduct'
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function ProductDetail() {

  const {id} = useParams();

  const {data, isError, isLoading, error} = useProduct(id);
  if(isLoading) return <CircularProgress />

  console.log(data);

  return (
    <Box>
      <Typography> {data.response.name} </Typography>
      <Typography> {data.response.description} </Typography>


    </Box>
  )
}
