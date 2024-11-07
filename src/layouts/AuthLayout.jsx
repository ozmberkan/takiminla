import { Outlet } from "react-router-dom";
import AuthContainer from "~/containers/AuthContainer";

const AuthLayout = () => {
  return (
    <AuthContainer>
      <Outlet />
    </AuthContainer>
  );
};

export default AuthLayout;
