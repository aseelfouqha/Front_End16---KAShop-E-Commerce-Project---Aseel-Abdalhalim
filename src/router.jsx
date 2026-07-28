import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Home";
import ProductGallery from "./Pages/Products/ProductGallery";
import Cart from "./Pages/CartAndCheckout/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProductDetail from "./Pages/Products/ProductDetail";
import ProudectedRouter from "./PoudectedRouter";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import VerifyCode from "./Pages/ForgotPassword/VerifyCode";
import ResetPassword from "./Pages/ForgotPassword/ResetPassword";

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
        element: <ProductGallery />,
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
