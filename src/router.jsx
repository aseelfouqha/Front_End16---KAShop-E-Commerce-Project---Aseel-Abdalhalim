import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Home";
import ProductGallery from "./Pages/Products/ProductGallery";
import Cart from "./Pages/CartAndCheckout/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UserContextProvider from "./Context/UserContext";

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
        element: 
          <UserContextProvider>
              <Cart />
          </UserContextProvider>

      },
      {
        path: "login",
        element:          
         <UserContextProvider>
              <Login />
          </UserContextProvider>

      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
]);

export default router;