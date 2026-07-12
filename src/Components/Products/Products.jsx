import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Products = ()=>{
  const {data, isLoading,isError,error} = useProducts();

  if(isLoading) return <CircularProgress />
  console.log(data.response.data);

  return (
    <>
      <Box className="products" component="section">
        <Typography component="h2" variant="h2">Products </Typography>
        <Grid container spacing={{xs:2, md:3}} sx={{textAlign:'center'}}>
          {data.response.data.map((product)=>{
            return <Grid item size={{xs:12, sm:6, md:4}}>
              <Link to={`/products/${product.id}`} style={{textDecoration:'none', color:'inherit'}}>
                  <Card>
                    <CardMedia 
                      component="img"
                      image = {product.image}
                      sx = {{width:'200px'}}
                    ></CardMedia>
                    <CardContent>
                      <Typography component="h6" variant="h6"> {product.name}</Typography>
                      <Typography component="span" variant="span"> {product.price}$</Typography>
                    </CardContent>
                  </Card>

              </Link>
            </Grid>
            
            })}
        </Grid>
      </Box>


    </>
  )
}

export default Products