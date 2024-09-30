import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Shop from "./components/Shop/Shop";
import NotFound from "./components/NotFound/NotFound";

function App() {
    let routes = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "contact", element: <Contact /> },
                { path: "checkout", element: <Checkout /> },
                { path: "cart", element: <Cart /> },
                { path: "shop", element: <Shop /> },
                { path: "product/:id", element: <Product /> },
            ]
        },
        { path: "*", element: <NotFound /> }
    ])
    return (
        <div className="App">
            <RouterProvider router={routes}></RouterProvider>
        </div>
    );
}

export default App;
