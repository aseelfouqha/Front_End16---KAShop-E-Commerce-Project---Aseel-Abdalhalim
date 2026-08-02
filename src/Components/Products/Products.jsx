import React from "react";
import useProducts from "../../hooks/useProducts";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useAddToCart from "../../hooks/useAddToCart";

const Products = () => {
  const { data, isLoading, isError, error } = useProducts();
  const { mutate: addToCart, isPending } = useAddToCart();

  if (isLoading) return <CircularProgress />;
  console.log(data.response.data);
  const handleAddToCart = (productId) => {
  console.log("Product ID:", productId);

  addToCart(
    {
      ProductId: productId,
      Count: 1,
    },
    {
      onSuccess: (data) => {
        console.log("Added successfully:", data);
      },
    }
  );
};
  return (
    <>
      <Box
        className="products"
        component="section"
        sx={{ py: { sx: 6, md: 9 }, px: { xs: 2, sm: 4, md: 8 } }}
      >
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            color="primary"
            sx={{
              fontSize: "0.95rem",
              letterSpacing: 2,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Featured
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontWeight: 700,
              mt: 1,
            }}
          >
            Our Products
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{ maxWidth: 1200, mx: "auto" }}
          >
            {data?.response?.data?.map((product) => {
              return (
                <Grid item="true" size={{ xs: 12, sm: 6, md: 4 }}>
                  {/* <Link
                    to={`/Products/${product.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  > */}
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        textDecoration: "none",
                        color: "text.primary",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 4,
                        boxShadow: "none",
                        overflow: "hidden",
                        transition: "all 0.3s ease",

                        "&:hover": {
                          transform: "translateY(-6px)",
                          borderColor: "primary.main",
                          boxShadow: 4,
                        },

                        "&:hover .product-image": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <Box
                        component={Link}
                        to={`/Products/${product.id}`}
                        sx={{
                          height: 260,
                          bgcolor: "background.default",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                          p: 2,
                          textDecoration: "none",
                        }}
                      >
                        <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          transition: "transform 0.3s ease",
                        }}
                      ></CardMedia>
                      </Box>
                      
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          p: 3,
                        }}
                      >
                        <Typography
                          component="h3"
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          component="span"
                          variant="span"
                          sx={{
                            fontWeight: 700,
                            mt: "auto",
                          }}
                        >
                          {product.price}$
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Button
                          fullWidth
                          variant="contained"
                          startIcon={<AddShoppingCartIcon />}
                          disabled={isPending}
                          onClick={() => handleAddToCart(product.productId)}
                          sx={{
                            borderRadius: 3,
                            textTransform: "none",
                            py: 1.2,
                          }}
                        >
                          {isPending ? "Adding..." : "Add To Cart"}
                        </Button>
                      </CardActions>
                    </Card>
                  {/* </Link> */}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Products;
