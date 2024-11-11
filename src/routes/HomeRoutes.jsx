import Layout from "~/layouts/Layout";
import Home from "~/pages/Home/Home";
import About from "~/pages/About/About";
import Services from "~/pages/Services/Services";
import Contact from "~/pages/Contacts/Contact";
import Beta from "~/pages/Beta/Beta";

export const HomeRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
    { path: "/beta", element: <Beta /> },
  ],
};
