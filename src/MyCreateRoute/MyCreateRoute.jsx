import {
    createBrowserRouter
} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Pages/Home/Home";
import AddProducts from "../Components/Pages/AddProducts/AddProducts";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";

const MyCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            }
        ]
    }

])
export default MyCreateRoute;