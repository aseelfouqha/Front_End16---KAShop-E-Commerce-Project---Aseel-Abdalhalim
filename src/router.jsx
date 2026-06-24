import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: 
      {
        
        
      }
  },
]);
