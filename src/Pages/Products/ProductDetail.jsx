import React from 'react'
import useProduct from '../../hooks/useProduct'
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';

export default function ProductDetail() {

  const {id} = useParams();

  const {mutate:addToCart} = useAddToCart();

  const {data, isError, isLoading, error} = useProduct(id);
  if(isLoading) return <CircularProgress />

  console.log(data);

  return (
    <Box>
      <Typography> {data.response.name} </Typography>
      <Typography> {data.response.description} </Typography>

      <Button onClick={()=>{addToCart(data.response.id,1)}}>Add to Cart</Button>


    </Box>
  )
}
