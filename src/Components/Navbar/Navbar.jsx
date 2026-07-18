import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../Store/useAuthStore';
import useCart from '../../hooks/useCart';


export default function Navbar({userName}) {

  const navigate = useNavigate();

  const token = useAuthStore( (state)=>state.token);
  const logout = useAuthStore( (state)=>state.logout);

  const {data} = useCart();
  const cartCount = data?.items.length || 0;

  const handleLogout = ()=>{
    logout();
    navigate('/login')

  }


  
  return (
    
        <nav bg="primary" data-bs-theme="dark">
          <Link to="/">Home</Link>
          <Link to="/products">ProductGallery</Link>
        
          {token? <><Link to="/cart">Cart - {cartCount} </Link> <Link to="/login" component ="button" onClick={logout}>logout</Link></> : <> <Link to="/login">Login</Link> <Link to="/register">Register</Link></>
}
        </nav>

    
  )
}
