import AuthLayout from "~/layouts/AuthLayout";

export const AuthRoutes = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    { path: "login", element: <div>Login</div> },
    { path: "register", element: <div>Register</div> },
  ],
};
