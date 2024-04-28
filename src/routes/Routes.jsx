import {createBrowserRouter} from "react-router-dom";
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
import Category from "../components/Category/Category";
import DetailCat from "../pages/DetailCat/DetailCat";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://y-iwokcgsfg-narzis-nahars-projects.vercel.app/item'),
      },
      {
        path: "/item/add",
        element: <PrivateRoutes><AddCraftItems></AddCraftItems></PrivateRoutes>
      },
      {
        path: "/item/table",
        element:<AllItemsTable></AllItemsTable>,
        loader: () => fetch(`https://y-iwokcgsfg-narzis-nahars-projects.vercel.app/item`),
      },
      {
        path: '/item/:id',
        element: <PrivateRoutes><ViewDetail></ViewDetail></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://y-iwokcgsfg-narzis-nahars-projects.vercel.app/item/${params.id}`),
      },
      {
        path: "updateItem/:id",
        element: <PrivateRoutes><UpdateItem></UpdateItem></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://y-iwokcgsfg-narzis-nahars-projects.vercel.app/item/${params.id}`)
      },

      {
        path: "/myCart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
      },
      {
        path: "/category",
        element: <Category></Category>,
        
      },
      {
        path: "/category/:catID",
        element: <DetailCat></DetailCat>,
        loader: ({params})=> fetch(`https://y-iwokcgsfg-narzis-nahars-projects.vercel.app/category/${params.catID}`)
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