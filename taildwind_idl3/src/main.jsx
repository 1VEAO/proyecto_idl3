// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"; // ¡IMPORTANTE! usar react-router-dom, no "react-router"
import "./styles/index.css";

import Layout from "./components/Layout.jsx";
import Main from "./components/Main.jsx"; // Página de inicio
import Test from "./pages/Test.jsx";
import Lenguajes from "./pages/Lenguajes.jsx";
import Blog from "./pages/Blog.jsx";
import Contacto from "./pages/Contacto.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> }, // Home page
      { path: "test", element: <Test /> },
      { path: "lenguajes", element: <Lenguajes /> },
      { path: "blog", element: <Blog /> },
      { path: "contacto", element: <Contacto /> },
    ]
  },
  {
    path: "*",
    element: <h1>404 - Página no encontrada</h1>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
