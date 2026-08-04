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
  <Box
    component="main"
    sx={{
      py: { xs: 5, md: 9 },
      px: { xs: 2, sm: 4, md: 8 },
    }}
  >
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, minmax(0, 1fr))",
        },
        gap: { xs: 5, md: 8 },
        alignItems: "center",
      }}
    >
      {/* Product image */}
      <Box
        sx={{
          minHeight: { xs: 350, md: 520 },
          p: { xs: 3, md: 5 },
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={data.response.image}
          alt={data.response.name}
          sx={{
            width: "100%",
            height: { xs: 300, md: 440 },
            objectFit: "contain",
            transition: "transform 0.3s ease",

            "&:hover": {
              transform: "scale(1.04)",
            },
          }}
        />
      </Box>

      {/* Product content */}
      <Box>
        <Typography
          color="primary"
          sx={{
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          Product Details
        </Typography>

        <Typography
          component="h1"
          variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {data.response.name}
        </Typography>

        {data.response.price && (
          <Typography
            color="primary"
            sx={{
              mt: 2,
              fontSize: "1.7rem",
              fontWeight: 700,
            }}
          >
            ${data.response.price}
          </Typography>
        )}

        <Box
          sx={{
            width: 70,
            height: 2,
            bgcolor: "primary.main",
            my: 3,
          }}
        />

        <Typography
          color="text.secondary"
          sx={{
            lineHeight: 1.9,
            fontSize: "1rem",
          }}
        >
          {data.response.description}
        </Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleAddToCart}
          sx={{
            mt: 4,
            px: 4,
            py: 1.4,
            borderRadius: 0.5,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  </Box>
  )
}
