import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import AuthContainer from "~/containers/AuthContainer";

const AuthLayout = () => {
  return (
    <AuthContainer>
      <Outlet />
      <Toaster position="top-left" />
    </AuthContainer>
  );
};

export default AuthLayout;
