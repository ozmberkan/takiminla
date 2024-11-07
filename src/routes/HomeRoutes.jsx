import Layout from "~/layouts/Layout";
import Home from "~/pages/Home/Home";

export const HomeRoutes = {
  path: "/",
  element: <Layout />,
  children: [{ path: "/", element: <Home /> }],
};
