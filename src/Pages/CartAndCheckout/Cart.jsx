import axios from 'axios'
import React, { useEffect } from 'react'
import axiosAuthInstance from '../../API/axiosAuthInstance';
import { useAuthStore } from '../../Store/useAuthStore';
import useCart from '../../hooks/useCart';
import { Box, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, Typography, TableRow, Button, IconButton } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import useClearCart from '../../hooks/useClearCart';
import { Navigate, useNavigate } from 'react-router-dom';


export default function Cart() {

  const navigate = useNavigate();

  const {data,isLoading,isError,error} = useCart()
  const {mutate:removeItem, isPending} = useRemoveFromCart();
  const {mutate:updateItem, isPending:updateItemPending} = useUpdateCartItem();
  const {mutate:clearCart, isPending:clearCartPending} = useClearCart();

    const token = useAuthStore ( (state)=> state.token);

    if(isLoading) return <CircularProgress />
    if(isError) return <Typography>Error.... {error}</Typography>
    // console.log(data);
    const handleUpdate = (productId, action) =>{
      const item = data.items.find(i=>i.productId == productId);
      if (action == '+'){
        updateItem({productId, Count:item.count+1})

      }else{
        if (item.count === 1){
          removeItem(productId);
        } else {
          updateItem({productId, Count:item.count-1});
        }

      }
    }

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: 2,
          mb: 4,
        }}
      >
        <Box>
          <Typography
            color="primary"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Your Selection
          </Typography>

          <Typography
            component="h1"
            variant="h3"
            sx={{
              mt: 1,
              fontWeight: 700,
            }}
          >
            Shopping Cart
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Review your products before proceeding to checkout.
          </Typography>
        </Box>

        <Button
          color="error"
          variant="outlined"
          startIcon={<DeleteIcon />}
          disabled={
            clearCartPending ||
            data?.items?.length === 0
          }
          onClick={() => clearCart()}
          sx={{
            borderRadius: 0.5,
            textTransform: "none",
            px: 2.5,
            py: 1,
          }}
        >
          {clearCartPending
            ? "Clearing..."
            : "Clear Basket"}
        </Button>
      </Box>

      {data?.items?.length === 0 ? (
        <Box
          sx={{
            py: 10,
            px: 3,
            textAlign: "center",
            border: "1px dashed",
            borderColor: "divider",
            borderRadius: 1,
            bgcolor: "background.paper",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            Your cart is empty
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Start exploring products and add your favorites.
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              mt: 3,
              borderRadius: 0.5,
              textTransform: "none",
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <>
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
                  <TableCell sx={{ fontWeight: 700 }}>
                    Product
                  </TableCell>

                  <TableCell sx={{ fontWeight: 700 }}>
                    Price
                  </TableCell>

                  <TableCell sx={{ fontWeight: 700 }}>
                    Quantity
                  </TableCell>

                  <TableCell sx={{ fontWeight: 700 }}>
                    Total
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{ fontWeight: 700 }}
                  >
                    Action
                  </TableCell>
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
                      <Typography
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {item.productName}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography color="text.secondary">
                        ${item.price}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: 0.5,
                          overflow: "hidden",
                        }}
                      >
                        <IconButton
                          size="small"
                          disabled={updateItemPending}
                          onClick={() =>
                            handleUpdate(
                              item.productId,
                              "-"
                            )
                          }
                          sx={{ borderRadius: 0 }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>

                        <Typography
                          sx={{
                            minWidth: 42,
                            textAlign: "center",
                            fontWeight: 600,
                          }}
                        >
                          {item.count}
                        </Typography>

                        <IconButton
                          size="small"
                          disabled={updateItemPending}
                          onClick={() =>
                            handleUpdate(
                              item.productId,
                              "+"
                            )
                          }
                          sx={{ borderRadius: 0 }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Typography
                        color="primary"
                        sx={{ fontWeight: 700 }}
                      >
                        ${item.totalPrice}
                      </Typography>
                    </TableCell>

                    <TableCell align="right">
                      <IconButton
                        color="error"
                        disabled={isPending}
                        onClick={() =>
                          removeItem(item.productId)
                        }
                        aria-label={`remove ${item.productName}`}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Bottom actions */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: {
                xs: "stretch",
                sm: "center",
              },
              flexDirection: {
                xs: "column-reverse",
                sm: "row",
              },
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => navigate("/")}
              sx={{
                borderRadius: 0.5,
                textTransform: "none",
                px: 3,
                py: 1.2,
              }}
            >
              Continue Shopping
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/checkout")}
              sx={{
                borderRadius: 0.5,
                textTransform: "none",
                px: 4,
                py: 1.3,
                fontWeight: 600,
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  </Box>
);
  // return (
  //   <Box component="section">
  //     <Box sx={{
  //       display:"flex",
  //       justifyContent: "space-between",
  //       alignItems: "center",
  //       mb: 2,
  //     }}
  //     >
  //       <Typography variant='h1'>Cart</Typography>
  //       <Button 
  //       color='error'
  //       variant='outlined'
  //       startIcon={<DeleteIcon/>}
  //       disabled={clearCartPending || data?.items?.length === 0}
  //       onClick={()=>clearCart()}>
  //         {clearCartPending? "Clearing...":"clear Basket"}</Button>
  //     </Box>

  //     <TableContainer>
  //       <Table>
  //         <TableHead>
  //           <TableCell>Product Name</TableCell>
  //           <TableCell>Price</TableCell>
  //           <TableCell>Quantity</TableCell>
  //           <TableCell>Total</TableCell>
  //           <TableCell>Actions</TableCell>

  //         </TableHead>

  //         <TableBody>
  //           {data?.items?.map((item)=>{ 
  //             return(               
  //               <TableRow key={item.id}>
  //                 <TableCell>{item.productName}</TableCell>
  //                 <TableCell>{item.price}$</TableCell>
  //                 <TableCell>
  //                   <Box sx={{display:'flex', alignItems:'center'}}>
  //                     <IconButton size="small"><RemoveIcon onClick={()=>handleUpdate(item.productId ,'-')}/></IconButton>
  //                     <Typography>{item.count}</Typography>
  //                     <IconButton size="small" ><AddIcon onClick={()=>handleUpdate(item.productId ,'+')}/></IconButton>

  //                   </Box>
  //                 </TableCell>
  //                 <TableCell>{item.totalPrice}$</TableCell>
  //                 <TableBody><Button
  //                   color='error'
  //                   startIcon={<DeleteIcon />}
  //                   disabled={isPending}
  //                   onClick={()=>removeItem(item.productId)}></Button></TableBody>
  //               </TableRow>
  //             )
  //           })}
  //         </TableBody>
  //       </Table>
  //     </TableContainer>

  //     <Box>
  //       <Button onClick={()=>navigate('/checkout')}>Process To CheckOut</Button>
  //       <Button onClick={()=>navigate('/')}>Continue Shopping</Button>
  //     </Box>

  //   </Box>

  // )
}
