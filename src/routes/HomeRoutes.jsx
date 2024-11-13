import Layout from "~/layouts/Layout";
import Home from "~/pages/Home/Home";
import About from "~/pages/About/About";
import Services from "~/pages/Services/Services";
import Contact from "~/pages/Contacts/Contact";
import Beta from "~/pages/Beta/Beta";
import MyAccount from "~/pages/MyAccount/MyAccount";
import { roleLoader } from "~/loader/roleLoader";
import Lists from "~/pages/Lists/Lists";
import MyNotifications from "~/pages/MyNotifications/MyNotifications";
import MyLists from "~/pages/MyLists/MyLists";
import UserLists from "~/pages/UsersLists/UserLists";
import MyMatchs from "~/pages/MyMatchs/MyMatchs";

export const HomeRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
    { path: "/beta", element: <Beta /> },
    {
      path: "/my-account",
      element: <MyAccount />,
      loader: () => roleLoader(["admin", "user"]),
    },
    {
      path: "/lists",
      element: <Lists />,
      loader: () => roleLoader(["admin", "user"]),
    },
    {
      path: "/user-lists",
      element: <UserLists />,
      loader: () => roleLoader(["admin", "user"]),
    },
    {
      path: "/my-notifications",
      element: <MyNotifications />,
      loader: () => roleLoader(["admin", "user"]),
    },
    {
      path: "/my-lists",
      element: <MyLists />,
      loader: () => roleLoader(["admin", "user"]),
    },
    {
      path: "/my-matchs",
      element: <MyMatchs />,
      loader: () => roleLoader(["admin", "user"]),
    },
  ],
};
