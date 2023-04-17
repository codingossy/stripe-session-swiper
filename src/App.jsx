import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/error-page";
import Home from "./pages/home/Home";


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/addgig",
        //   element: <Addgig />,
        // },
        // {
        //   path: "/singlegig/:id",
        //   element: <Singlegig />,
        // },
        // {
        //   path: "/allgigs",
        //   element: <Allgigs />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
