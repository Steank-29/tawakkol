import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner'; 
import ScrollToTop from "./Config/ScrollToTop";
import Login from './Components/Pages/Login';
import Contact from './Components/Pages/Contact'; 
import Layout from './Config/Layout';
import NotFound from './Config/Notfound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Login />
        </Layout>
      )
    },
    {
      path: '/contact',
      element: (
        <Layout>
          <Contact />
        </Layout>
      )
    },
    {
      path: '/login',
      element: (
        <Layout>
          <Login />
        </Layout>
      )
    },
    {
      path: '*',
      element: (
        <Layout>
          <NotFound />
        </Layout>
      )
    }
  ]);

  return (
    <>
      {/* Global Toaster - Must be at root level */}
      <Toaster
        position="top-right"
        expand={true}
        richColors
        closeButton={false}
        toastOptions={{
          style: {
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            padding: 0,
          },
          duration: 5000,
        }}
      />

      {/* Router & Scroll */}
      <RouterProvider router={router} />
      <ScrollToTop />
    </>
  );
}

export default App;