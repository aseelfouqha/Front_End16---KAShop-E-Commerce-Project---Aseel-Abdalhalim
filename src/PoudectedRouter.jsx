import React from 'react'
import { useAuthStore } from './Store/useAuthStore'
import { Navigate } from 'react-router-dom';

export default function ProudectedRouter({children}) {

  const token = useAuthStore( (state)=>state.token);

  if (!token){
    return <Navigate to='/login'/>
  }

  return children;
}
