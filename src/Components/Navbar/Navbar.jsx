import React from 'react'
import { Link } from 'react-router-dom';
import { useCounterStore } from '../../Store/useCounterStore';
import { useUserStore } from '../../Store/useUserStore';


export default function Navbar({userName}) {

  
  return (
    
        <nav bg="primary" data-bs-theme="dark">
          <Link to="/">Home</Link>
          <Link to="/products">ProductGallery</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>

    
  )
}
