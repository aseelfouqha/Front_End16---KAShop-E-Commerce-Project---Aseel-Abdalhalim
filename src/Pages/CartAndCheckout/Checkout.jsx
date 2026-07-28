import React from "react";
import useCart from "../../hooks/useCart";
import { Box, CircularProgress } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
  TableRow,
  Button,
  IconButton,
} from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import useCheckout from "../../hooks/useCheckout";


export default function Checkout() {
  const { data, isLoading, isError, error } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const { mutate:checkOut} = useCheckout();

  if (isLoading) return <CircularProgress />;
  if (isError) return <Box color="error">{error}</Box>;
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
          </TableHead>

          <TableBody>
            {data?.items?.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.price}$</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography>{item.count}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{item.totalPrice}$</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={paymentMethod}
          label="Payment"
          onChange={(e)=>setPaymentMethod(e.target.value)}
        >
          <MenuItem value={'Cash'}>Cash</MenuItem>
          <MenuItem value={'Visa'}>Visa</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color='success' onClick={()=>checkOut({paymentMethod})}>Pay Now</Button>
    </Box>
  );
}
