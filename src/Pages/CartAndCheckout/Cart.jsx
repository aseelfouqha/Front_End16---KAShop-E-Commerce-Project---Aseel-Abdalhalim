import axios from 'axios'
import React, { useEffect } from 'react'
import axiosAuthInstance from '../../API/axiosAuthInstance';
import { useAuthStore } from '../../Store/useAuthStore';
import useCart from '../../hooks/useCart';
import { Box, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, Typography, TableRow, Button } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';

export default function Cart() {


  const {data,isLoading,isError,error} = useCart()
  const {mutate:removeItem, isPending} = useRemoveFromCart();

    const token = useAuthStore ( (state)=> state.token);

    if(isLoading) return <CircularProgress />
    if(isError) return <Typography>Error.... {error}</Typography>
    // console.log(data);
  return (
    <Box component="section">
      <Typography variant='h1'>Cart</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>

          </TableHead>

          <TableBody>
            {data?.items?.map((item)=>{ 
              return(               
                <TableRow key={item.id}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.price}$</TableCell>
                  <TableCell>{item.count}</TableCell>
                  <TableCell>{item.totalPrice}$</TableCell>
                  <TableBody><Button
                    color='error'
                    disabled={isPending}
                    onClick={()=>removeItem(item.productId)}>Remove</Button></TableBody>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </Box>

  )
}
