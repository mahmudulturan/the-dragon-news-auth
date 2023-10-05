import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsDetails";
import LoginRegister from "../pages/LoginRegister";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                loader: ()=> fetch('/news.json'),
                element: <Home></Home>
            },
            {
                path: '/news/:id',
                element: <NewsDetails></NewsDetails>
            },
            {
                path: '/login',
                element: <LoginRegister></LoginRegister>,
                children: [
                    {
                        path: '/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/login/register',
                        element: <Register></Register>
                    },
                ]
            }
        ]
    }
])

export default MainRoutes;