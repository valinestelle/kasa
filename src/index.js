import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages/HomePage';
import { createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppartementPage from './Pages/AppartementPage';


const HeaderFooter = () => {
  return <>
  <main>
     <Navbar />
     <Outlet />
  </main>
     <Footer />
  </>
}

const router = createBrowserRouter([
  {
    element: <HeaderFooter />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <h1>A propos</h1>,
      },
      {
        path: '/appartements',
        element: <AppartementPage />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

