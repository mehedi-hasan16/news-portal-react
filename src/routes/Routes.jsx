import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import UserVerifiLayout from "../layouts/UserVerifiLayout";
import Login from "../pages/UserVerification/Login/Login";
import Signup from "../pages/UserVerification/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element:<UserVerifiLayout></UserVerifiLayout>,
        children:[
            {
                path:'/',
                element: <Navigate to={'/category/0'}></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
             path: '/news/:id',
             element:<PrivateRoute><News></News></PrivateRoute>,
             loader: ({params}) =>fetch(`http://localhost:5000/news/${params.id}`)  
            }
        ]
    }
])
export default router;