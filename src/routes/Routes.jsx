import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import ViewDetail from "../components/ViewDetail/ViewDetail";
import AddCraftItems from "../pages/AddCraftItems/AddCraftItems";
import AllItemsTable from "../pages/AllItemsTable/AllItemsTable";
import MyCart from "../components/MyCart/MyCart";
import UpdateItem from "../pages/UpdateItem/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/item'),
      },
      {
        path: "/item/add",
        element: <PrivateRoutes><AddCraftItems></AddCraftItems></PrivateRoutes>
      },
      {
        path: "/item/table",
        element:<AllItemsTable></AllItemsTable>,
        loader: () => fetch(`http://localhost:5000/item`),
      },
      {
        path: '/item/:id',
        element: <PrivateRoutes><ViewDetail></ViewDetail></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/item/${params.id}`),
      },
      {
        path: "updateItem/:id",
        element: <PrivateRoutes><UpdateItem></UpdateItem></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/item/${params.id}`)
      },

      {
        path: "/myCart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
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