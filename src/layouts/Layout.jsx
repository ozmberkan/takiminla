import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "~/components/Navbar/Navbar";
import Container from "~/containers/Container";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default Layout;
