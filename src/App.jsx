import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScrollToTop from "./Config/ScrollToTop";
import Login from './Components/Pages/Login';
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
      path: '*',
      element: (
        <Layout>
          <NotFound />
        </Layout>
      )
    }
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <ScrollToTop />
    </React.Fragment>
  );
}

export default App;