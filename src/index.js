import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


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
        element: <App />,
      },
      {
        path: '/about',
        element: <h1>A propos</h1>,
      },
      {
        path: '/appartements',
        element: <h1>Appartements</h1>,
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

