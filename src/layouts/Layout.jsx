import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "~/components/Footer/Footer";
import Navbar from "~/components/Navbar/Navbar";
import Container from "~/containers/Container";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-left" />
    </Container>
  );
};

export default Layout;
