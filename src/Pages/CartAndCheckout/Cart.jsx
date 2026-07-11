import axios from 'axios'
import React, { useEffect } from 'react'
import axiosAuthInstance from '../../API/axiosAuthInstance';
import { UserContext } from '../../Context/UserContext';

export default function Cart() {
    const x = UserContext(UserContext);

    const token = localStorage.getItem('accessToken')

    const getItems = async ()=>{
      const response = await axiosAuthInstance.get(`${import.meta.env.VITE_BURL}/Carts`);
      console.log(response);
    }

    useEffect( ()=>{
      getItems();
    }, [])
  return (
    <div>Cart - {x.userName}</div>
  )
}
