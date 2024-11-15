import AuthLayout from "~/layouts/AuthLayout";
import Login from "~/pages/Auth/Login";
import Register from "~/pages/Auth/Register";
import Terms from "~/pages/Auth/Terms";

export const AuthRoutes = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "terms", element: <Terms /> },
  ],
};
