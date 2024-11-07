import React from "react";

const AuthContainer = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default AuthContainer;
