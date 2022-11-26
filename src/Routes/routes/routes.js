import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import Orders from "../../Pages/Orders/Orders";
import Payment from "../../Pages/Payment/Payment";
import Products from "../../Pages/Products/Products";
import Regsiter from "../../Pages/Regsiter/Regsiter";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Regsiter></Regsiter>
            },
            {
                path: "/products/:cattegoryId",
                loader: async ({ params }) => fetch(`${process.env.REACT_APP_SERVER_URL}/products/${params.cattegoryId}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/dashboard/add-product",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/myproducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: "/dashboard/orders",
                element: <Orders></Orders>
            },
            {
                path: "/dashboard/payment/:id",
                loader: async ({ params }) => fetch(`${process.env.REACT_APP_SERVER_URL}/orders/${params.id}`),
                element: <Payment></Payment>
            }
        ]
    }
]);