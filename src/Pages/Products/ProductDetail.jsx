import React from 'react'
import useProduct from '../../hooks/useProduct'
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, IconButton, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import { useTranslation } from 'react-i18next';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function ProductDetail() {

  const {id} = useParams();
  const {t} = useTranslation();

  const {mutate:addToCart} = useAddToCart();

  const {data, isError, isLoading, error} = useProduct(id);


  if(isLoading) return <CircularProgress />

  console.log(data);

  //since getting the data is erroring we use function to handle it in order to minimize the error
  const handleAddToCart = ()=>{
    addToCart({ProductId:data.response.id,Count:1})
    
  }


  return (
    <Box>
      <Typography> {data.response.name} </Typography>
      <Typography> {data.response.description} </Typography>

      <IconButton 
        color="primary"
        aria-label="add to shopping cart"
        onClick={handleAddToCart}><AddShoppingCartIcon /></IconButton>


    </Box>
  )
}
