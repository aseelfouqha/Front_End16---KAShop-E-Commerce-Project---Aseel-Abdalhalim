import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Home";
import ProductGallery from "./Pages/Products/ProductGallery";
import Cart from "./Pages/CartAndCheckout/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProductDetail from "./Pages/Products/ProductDetail";
import ProudectedRouter from "./PoudectedRouter";

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
        path: 'Products/:id',
        element: <ProductDetail />
      },
      {
        path: "cart",
        element:
          <ProudectedRouter>
            <Cart />
          </ProudectedRouter>
    

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