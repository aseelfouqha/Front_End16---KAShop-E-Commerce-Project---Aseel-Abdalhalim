import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Home";
// import ProductGallery from "./Pages/Products/ProductGallery";
import Cart from "./Pages/CartAndCheckout/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProductDetail from "./Pages/Products/ProductDetail";
import ProudectedRouter from "./ProutectedRouter";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import VerifyCode from "./Pages/ForgotPassword/VerifyCode";
import ResetPassword from "./Pages/ForgotPassword/ResetPassword";
import Checkout from "./Pages/CartAndCheckout/Checkout";
import Profile from "./Pages/Profile/Profile";
import ProfileInfo from "./Pages/Profile/ProfileInfo";
import ProfileOrders from "./Pages/Profile/ProfileOrders";
import Shop from "./Pages/Shop/Shop";
import Products from "./Components/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "Products/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: (
          <ProudectedRouter>
            <Cart />
          </ProudectedRouter>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProudectedRouter>
            <Checkout />
          </ProudectedRouter>
        ),
      },
      {
        path: "profile",
        element: 
          <ProudectedRouter>
            <Profile />
          </ProudectedRouter>,
          children:[
            {
              index:true,
              element: <ProfileInfo/>
            },
            {
              path:'orders',
              element: <ProfileOrders/>
            }
          ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-code",
        element: <VerifyCode />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
