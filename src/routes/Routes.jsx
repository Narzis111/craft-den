import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('/residential.json'),
        },
        {
          path: '/asset/:id',
          // element:<PrivateRoutes><ViewDetail></ViewDetail></PrivateRoutes>,
          loader: () => fetch('/residential.json'),
        },
        
        {
          path: "/register",
          element: <Register></Register>
        },
    
        {
          path: "/login",
          element: <Login></Login>
        }
    
  
      ]
    },
  ]);
  export default router;