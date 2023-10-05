import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsDetails";

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
            }
        ]
    }
])

export default MainRoutes;