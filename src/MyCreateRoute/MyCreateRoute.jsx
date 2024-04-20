import {
    createBrowserRouter
} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Pages/Home/Home";
import AddProducts from "../Components/Pages/AddProducts/AddProducts";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";

const MyCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addproducts',
                element: <PrivetRoute><AddProducts></AddProducts></PrivetRoute>
            }
        ]
    }

])
export default MyCreateRoute;