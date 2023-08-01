import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.tsx';
import Home from './routes/Home.tsx';
import Cart from './routes/Cart.tsx';
import ProductDetails from './routes/ProductDetails.tsx';
import { CartProvider } from './context/CartContext';
import './index.css';

const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/products/:id',
                element: <ProductDetails />,
            },
            {
                path: '/cart', 
                element: <Cart />
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </React.StrictMode>
);
