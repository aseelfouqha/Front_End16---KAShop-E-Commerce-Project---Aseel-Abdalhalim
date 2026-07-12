import axios from 'axios'
import React, { useEffect } from 'react'
import axiosAuthInstance from '../../API/axiosAuthInstance';
import { useAuthStore } from '../../Store/useAuthStore';

export default function Cart() {

    const token = useAuthStore ( (state)=> state.token);

    console.log(token);

    const getItems = async ()=>{
      const response = await axiosAuthInstance.get(`${import.meta.env.VITE_BURL}/Carts`);
      console.log(response);
    }

    useEffect( ()=>{
      getItems();
    }, [])
  return (
    <>
    <div>Cart   </div>
    
    
    
    </>


  )
}
