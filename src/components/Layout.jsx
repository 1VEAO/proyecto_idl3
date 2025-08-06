// src/components/Layout.jsx
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Aquí se carga la página actual */}
      <Footer />
    </>
  );
};

export default Layout;
