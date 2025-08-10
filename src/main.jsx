// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"; // ✅ Corrección importante

import "./styles/index.css";

// Componentes y páginas
import Layout from "./components/Layout.jsx";
import Main from "./components/Main.jsx";
import Test from "./pages/Test.jsx";
import Lenguajes from "./pages/Lenguajes.jsx";
import Blog from "./pages/Blog.jsx";
import Contacto from "./pages/Contacto.jsx";

// Rutas definidas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "test", element: <Test /> },
      { path: "lenguajes", element: <Lenguajes /> },
      { path: "blog", element: <Blog /> },
      { path: "contacto", element: <Contacto /> },
    ],
  },
  {
    path: "*",
    element: (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600">404 - Página no encontrada</h1>
      </main>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
