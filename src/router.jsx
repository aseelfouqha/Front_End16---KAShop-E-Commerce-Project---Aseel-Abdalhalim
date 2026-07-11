import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Home";
import ProductGallery from "./Pages/Products/ProductGallery";
import Cart from "./Pages/CartAndCheckout/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: 
    [
      {
        index : true,
        element: <Home />
        
      },
      {
        path: "products",
        element: <ProductGallery />
      },
      {
        path: "cart",
        element:<Cart />
    

      },
      {
        path: "login",
        element:<Login />

      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
]);

export default router;