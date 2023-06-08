import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import ErrorPages from "../components/shares/ErrorPages/ErrorPages";
import Home from "../components/pages/Home/Home";
import Blog from "../components/pages/Blog/Blog";
import About from "../components/pages/About/About";
import Login from "../components/pages/Login/Login";
import Sign from "../components/pages/Sign/Sign";
import Products from "../components/pages/Products/Products";
import ProductCart from "../components/pages/ProductCart/ProductCart";
import Items from "../components/pages/Items/Items";


const router = createBrowserRouter([
    {
      path:'/' ,
      element: <Main /> ,
      errorElement: <ErrorPages />,
      children: [
        {
            path: '/',
            element: <Home />
        }, 
        {
          path:'/blog',
          element: <Blog />
        },
        // {
        //   path:'/items',
        //   element:<Items />,
        //   loader: () =>fetch('/data/items.json')
        // },
        {
          path:'/products',
          element: <Products/>
         
        },
        {
          path:'/productCart/:id',
          element: <ProductCart />,
          // loader: ({params}) =>fetch(`/data/products.json/${params.id}`)
        },
        {
          path:'/about',
          element: <About />
        },
        {
          path:'/sign',
          element: <Sign />
        },
        {
          path:'/login',
          element: <Login />
        }
      ]
    }
])

export default router;