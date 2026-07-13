import axios from 'axios'
import React, { useEffect } from 'react'
import axiosAuthInstance from '../../API/axiosAuthInstance';
import { useAuthStore } from '../../Store/useAuthStore';
import useCart from '../../hooks/useCart';
import { Box, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material';

export default function Cart() {


  const {data,isLoading,isError,error} = useCart()

    const token = useAuthStore ( (state)=> state.token);

    if(isLoading) return <CircularProgress />
    if(isError) return <Typography>Error.... {error}</Typography>

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
            {data.items.map((item)=>{
              <TableRow>
                <TableCell key={item.id}>{item.productname}</TableCell>
                <TableCell>{item.price}$</TableCell>
                <TableCell>{item.count}</TableCell>
                <TableCell>{item.totalprice}$</TableCell>
              </TableRow>

            })}
          </TableBody>
        </Table>
      </TableContainer>

    </Box>

  )
}
