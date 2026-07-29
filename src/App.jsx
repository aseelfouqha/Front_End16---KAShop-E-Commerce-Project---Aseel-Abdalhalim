import React, { useEffect } from 'react'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './i18n'
import { useTranslation } from 'react-i18next'
import { CssBaseline, ThemeProvider } from '@mui/material'
import getTheme from './Theme'
import { useThemeStore } from './Store/useThemeStore'
export default function App(){

  const{i18n} = useTranslation();
  useEffect( ()=>{
    const dir = i18n.language === "ar"?"rtl":"ltr";
    document.documentElement.dir=dir;
  },
  [ i18n.language ]
)

  const queryClient = new QueryClient()

  const mode = useThemeStore((state)=> state.mode)

  return(
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={getTheme(mode)}>
          <CssBaseline/>
          <RouterProvider router={router} />
        </ThemeProvider>
        
        
      </QueryClientProvider>
    </>

  )

}