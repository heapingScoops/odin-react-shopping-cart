import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Home from "./pages/Home"
import ShoppingCart from "./pages/ShoppingCart";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            // element: <Home />
            element: (
                <>
                 <Navbar />
                  <Home />
                </>
              )
        },
        {
            path: "/shop",
            element: 
            (
                <>
                  <Navbar /> 
                  <Shop />
                </>
              )
        },
        {
            path: "/cart",
            element: 
            (
                <>
                  <Navbar /> 
                  <ShoppingCart />
                </>
              )
        },

    ])
    return <RouterProvider router={router} />;
}

export default Router