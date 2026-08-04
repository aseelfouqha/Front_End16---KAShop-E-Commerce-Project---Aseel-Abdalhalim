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

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import useCheckout from "../../hooks/useCheckout";

export default function Checkout() {
  const { data, isLoading, isError, error } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { mutate: checkOut } = useCheckout();

  if (isLoading) return <CircularProgress />;
  if (isError) return <Box color="error">{error}</Box>;

  return (
    <Box
      component="main"
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 2, sm: 4, md: 8 },
        minHeight: "70vh",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 5 }}>
          <Typography
            color="primary"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Final Step
          </Typography>

          <Typography
            component="h1"
            variant="h3"
            sx={{
              mt: 1,
              fontWeight: 700,
            }}
          >
            Checkout
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Review your order and choose your preferred payment method.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1.6fr) minmax(300px, 0.8fr)",
            },
            gap: 4,
            alignItems: "start",
          }}
        >
          {/* Order summary */}
          <Box>
            <Typography
              component="h2"
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Order Summary
            </Typography>

            <TableContainer
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 1,
                bgcolor: "background.paper",
                overflowX: "auto",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      bgcolor: "background.default",
                    }}
                  >
                    <TableCell sx={{ fontWeight: 700 }}>Product</TableCell>

                    <TableCell sx={{ fontWeight: 700 }}>Price</TableCell>

                    <TableCell sx={{ fontWeight: 700 }}>Quantity</TableCell>

                    <TableCell sx={{ fontWeight: 700 }}>Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data?.items?.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        "&:last-child td": {
                          borderBottom: 0,
                        },
                      }}
                    >
                      <TableCell>
                        <Typography sx={{ fontWeight: 600 }}>
                          {item.productName}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography color="text.secondary">
                          ${item.price}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography>{item.count}</Typography>
                      </TableCell>

                      <TableCell>
                        <Typography color="primary" sx={{ fontWeight: 700 }}>
                          ${item.totalPrice}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Payment panel */}
          <Box
            component="aside"
            sx={{
              p: { xs: 3, md: 4 },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              bgcolor: "background.paper",
              position: {
                md: "sticky",
              },
              top: {
                md: 100,
              },
            }}
          >
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700 }}>
              Payment Method
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 1,
                mb: 3,
              }}
            >
              Select how you would like to pay for your order.
            </Typography>

            <FormControl fullWidth>
              <InputLabel id="payment-method-label">Payment Method</InputLabel>

              <Select
                labelId="payment-method-label"
                id="payment-method"
                value={paymentMethod}
                label="Payment Method"
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <MenuItem value="Cash">Cash on Delivery</MenuItem>

                <MenuItem value="Visa">Visa</MenuItem>
              </Select>
            </FormControl>

            <Box
              sx={{
                mt: 3,
                p: 2,
                borderRadius: 0.5,
                bgcolor: "background.default",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Selected payment
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontWeight: 700,
                }}
              >
                {paymentMethod || "Not selected"}
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              disabled={!paymentMethod}
              onClick={() => checkOut({ paymentMethod })}
              sx={{
                mt: 3,
                minHeight: 50,
                borderRadius: 0.5,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Pay Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
  // return (
  //   <Box>
  //     <TableContainer>
  //       <Table>
  //         <TableHead>
  //           <TableCell>Product Name</TableCell>
  //           <TableCell>Price</TableCell>
  //           <TableCell>Quantity</TableCell>
  //           <TableCell>Total</TableCell>
  //         </TableHead>

  //         <TableBody>
  //           {data?.items?.map((item) => {
  //             return (
  //               <TableRow key={item.id}>
  //                 <TableCell>{item.productName}</TableCell>
  //                 <TableCell>{item.price}$</TableCell>
  //                 <TableCell>
  //                   <Box sx={{ display: "flex", alignItems: "center" }}>
  //                     <Typography>{item.count}</Typography>
  //                   </Box>
  //                 </TableCell>
  //                 <TableCell>{item.totalPrice}$</TableCell>
  //               </TableRow>
  //             );
  //           })}
  //         </TableBody>
  //       </Table>
  //     </TableContainer>
  //     <FormControl fullWidth>
  //       <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
  //       <Select
  //         labelId="demo-simple-select-label"
  //         id="demo-simple-select"
  //         value={paymentMethod}
  //         label="Payment"
  //         onChange={(e)=>setPaymentMethod(e.target.value)}
  //       >
  //         <MenuItem value={'Cash'}>Cash</MenuItem>
  //         <MenuItem value={'Visa'}>Visa</MenuItem>
  //       </Select>
  //     </FormControl>

  //     <Button variant="contained" color='success' onClick={()=>checkOut({paymentMethod})}>Pay Now</Button>
  //   </Box>
  // );
}
