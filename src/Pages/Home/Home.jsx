import React from 'react'
import Button from '@mui/material/Button';
import Categories from '../../Components/Categories/Categories';
import Products from '../../Components/Products/Products';
import Hero from '../../Components/Hero/Hero';


export default function Home() {

  return (
    <>
      <Hero/> 
      <Categories />
      <Products />
    </>
  )
}
