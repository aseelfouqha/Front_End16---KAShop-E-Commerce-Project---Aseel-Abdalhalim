import React from 'react'
import router from './router'
import { RouterProvider } from 'react-router-dom'

export default function App(){

  const queryClient = new QueryClient()


  return(
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </>

  )

}