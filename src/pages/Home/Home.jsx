import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-mainBg bg-cover h-screen rounded-t-[70px] flex justify-center items-center ">
      <div className="w-full bg-white relative p-3  flex justify-center items-center">
        <Link
          to="/register"
          className="w-32 h-32 hover:scale-110 transition-all duration-300 rounded-full bg-white font-medium  absolute flex justify-center items-center drop-shadow-2xl text-2xl"
        >
          Başla!
        </Link>
      </div>
    </div>
  );
};

export default Home;
