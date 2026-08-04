import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import useShopProducts from "../../hooks/useShopProducts";
import useCategories from "../../hooks/useCategories";

export default function Shop() {
  // to tell the shop that is start from page=1
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    category: "",
    sort: "asc",
  });

  const { data, isLoading, isFetching, isError, error } = useShopProducts({
    page,
    limit: 6,
    sortBy: "price",
    ascending: filters.sort === "asc",
  });

  const products = data?.response?.data || [];

  const totalPages =
    data?.response?.totalPages || data?.response?.pageCount || 1;

  const { data: categoriesData, isLoading: categoriesLoading } =
    useCategories();

  const categories = categoriesData?.response?.data || [];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value,
    }));

    setPage(1);
  };

  // to reset the filter and go back to page = 1
  const handleReset = () => {
    setFilters({
      minPrice: "",
      maxPrice: "",
      category: "",
      sort: "asc",
    });

    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filteredProducts = products.filter((product) => {
    const productPrice = Number(product.price);

    const matchesMinPrice =
      filters.minPrice === "" || productPrice >= Number(filters.minPrice);

    const matchesMaxPrice =
      filters.maxPrice === "" || productPrice <= Number(filters.maxPrice);

    const productCategory =
      product.category?.name || product.categoryName || product.category || "";

    const matchesCategory =
      filters.category === "" ||
      productCategory.toLowerCase() === filters.category.toLowerCase();

    return matchesMinPrice && matchesMaxPrice && matchesCategory;
  });

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography color="error" textAlign="center" sx={{ py: 10 }}>
        {error?.response?.data?.message ||
          error?.message ||
          "Failed to load products"}
      </Typography>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontSize: "0.95rem",
            letterSpacing: 2,
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Discover
        </Typography>

        <Typography
          component="h1"
          variant="h3"
          sx={{
            fontWeight: 700,
            mt: 1,
          }}
        >
          Shop All Products
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "280px 1fr",
          },
          gap: 4,
          maxWidth: 1300,
          mx: "auto",
          alignItems: "start",
        }}
      >
        <Box
          component="aside"
          sx={{
            p: 3,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            position: {
              md: "sticky",
            },
            top: {
              md: 100,
            },
          }}
        >
          <Box>
            <Typography
              component="h2"
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              Filters
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Refine your product results
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Min Price"
            name="minPrice"
            type="number"
            value={filters.minPrice}
            onChange={handleChange}
            slotProps={{
              htmlInput: {
                min: 0,
              },
            }}
          />

          <TextField
            fullWidth
            label="Max Price"
            name="maxPrice"
            type="number"
            value={filters.maxPrice}
            onChange={handleChange}
            slotProps={{
              htmlInput: {
                min: 0,
              },
            }}
          />

          {/* https://mui.com/material-ui/api/form-control/ */}

          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>

            {/* https://mui.com/material-ui/react-select/ */}

            <Select
              labelId="category-label"
              label="Category"
              name="category"
              value={filters.category}
              onChange={handleChange}
              disabled={categoriesLoading}

            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.name.toLowerCase()}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="sort-label">Sort by</InputLabel>

            <Select
              labelId="sort-label"
              label="Sort by"
              name="sort"
              value={filters.sort}
              onChange={handleChange}
            >
              <MenuItem value="asc">Price: Low to High</MenuItem>

              <MenuItem value="desc">Price: High to Low</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            onClick={handleReset}
            sx={{
              borderRadius: 0.2,
              py: 1.2,
              textTransform: "none",
            }}
          >
            Reset Filters
          </Button>
        </Box>

        <Box component="section">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              mb: 3,
            }}
          >
            <Box>
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  fontWeight: 700,
                }}
              >
                Products
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {filteredProducts.length} products found
              </Typography>
            </Box>

            {isFetching && <CircularProgress size={24} />}
          </Box>

          {filteredProducts.length === 0 ? (
            <Box
              sx={{
                py: 10,
                px: 3,
                textAlign: "center",
                border: "1px dashed",
                borderColor: "divider",
                borderRadius: 0.2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                No products found
              </Typography>

              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Try changing or resetting your filters.
              </Typography>

              <Button
                variant="outlined"
                onClick={handleReset}
                sx={{
                  mt: 3,
                  borderRadius: 1.5,
                  textTransform: "none",
                }}
              >
                Reset Filters
              </Button>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filteredProducts.map((product) => (
                <Grid
                  key={product.id}
                  size={{
                    xs: 12,
                    sm: 6,
                    lg: 4,
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid",
                      borderColor: "divider",
                      boxShadow: "none",
                      overflow: "hidden",
                      transition: "all 0.3s ease",

                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "primary.main",
                        boxShadow: 4,
                      },

                      "&:hover .shop-product-image": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Box
                      component={Link}
                      to={`/Products/${product.id}`}
                      sx={{
                        height: 230,
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "background.default",
                        overflow: "hidden",
                        textDecoration: "none",
                      }}
                    >
                      <CardMedia
                        className="shop-product-image"
                        component="img"
                        image={product.image}
                        alt={product.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        p: 3,
                      }}
                    >
                      <Typography
                        component={Link}
                        to={`/Products/${product.id}`}
                        variant="h6"
                        sx={{
                          color: "text.primary",
                          textDecoration: "none",
                          fontWeight: 600,

                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {product.name}
                      </Typography>

                      <Typography
                        color="primary"
                        sx={{
                          mt: "auto",
                          pt: 2,
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        ${product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {totalPages > 1 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 6,
              }}
            >
              {/* https://mui.com/material-ui/react-pagination/ */}
              <Pagination
                page={page}
                count={totalPages}
                onChange={handlePageChange}
                color="primary"
                shape="rounded"
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
