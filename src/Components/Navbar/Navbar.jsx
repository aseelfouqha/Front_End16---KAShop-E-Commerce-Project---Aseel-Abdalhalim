import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../Store/useAuthStore';
import useCart from '../../hooks/useCart';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Button } from '@mui/material';


export default function Navbar({userName}) {

  const navigate = useNavigate();

  const token = useAuthStore( (state)=>state.token);
  const logout = useAuthStore( (state)=>state.logout);
  const {t} = useTranslation();
  const changeLanguage = () =>{
    const newLang = i18next.language =="ar"?"en":"ar";
    i18next.changeLanguage(newLang);
  }

  const {data} = useCart();
  const cartCount = data?.items.length || 0;

  const handleLogout = ()=>{
    logout();
    navigate('/login')

  }


  
  return (
    
        <nav bg="primary" data-bs-theme="dark">
          <Button onClick={changeLanguage}>
            
            {i18next.language === "ar"?"EN":"AR"}
          </Button>
          

          <Link to="/">{t('Home')}</Link>
          <Link to="/products">{t('Products')}</Link>
        
          {token? <><Link to="/cart">{t('Cart')} - {cartCount} </Link> <Link to="/login" component ="button" onClick={logout}>{t('Logout')}</Link></> : <> <Link to="/login">{t('Login')}</Link> <Link to="/register">{t('Register')}</Link></>
          }

        </nav>

    
  )
}
