import React from "react";
import LOGO from "~/assets/logos/icon.svg";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white  ">
      <img src={LOGO} className="w-44 animate-ping" />
    </div>
  );
};

export default Loading;
