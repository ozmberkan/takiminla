import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Ball from "~/assets/soccerball.svg";

const Home = () => {
  return (
    <div className="bg-primary h-screen  flex justify-end items-center relative overflow-hidden px-5 ">
      <motion.img
        initial={{ rotate: 100, x: -400 }}
        animate={{ rotate: 0, x: -120 }}
        transition={{ duration: 0.7 }}
        src={Ball}
        className="w-[1000px] absolute -left-48"
      />
      <div className=" w-1/2 h-[200px] rounded-2xl  flex-col drop-shadow-2xl flex justify-center items-center gap-5">
        <h1 className="text-[150px] font-nunito font-bold tracking-tighter leading-tight italic text-white">
          Takımınla
        </h1>
        <p className="w-2/3 text-center text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam est
          quae, impedit omnis animi quidem voluptatibus hic soluta, ipsum
          commodi velit earum facilis quibusdam dolor.
        </p>
        <button className="bg-white rounded-full text-primary font-semibold px-8 py-1">
          Başla!
        </button>
      </div>
    </div>
  );
};

export default Home;
