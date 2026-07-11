import axios from 'axios'
import React, { useEffect } from 'react'
import axiosAuthInstance from '../../API/axiosAuthInstance';
import { useCounterStore } from '../../Store/useCounterStore';
import { useUserStore } from '../../Store/useUserStore';

export default function Cart() {

    const x  = useCounterStore( (state)=> state.counter);
    const name = useUserStore ( (state) => state.userName);

    const token = localStorage.getItem('accessToken')

    const getItems = async ()=>{
      const response = await axiosAuthInstance.get(`${import.meta.env.VITE_BURL}/Carts`);
      console.log(response);
    }

    useEffect( ()=>{
      getItems();
    }, [])
  return (
    <div>Cart  - {name} </div>
  )
}
