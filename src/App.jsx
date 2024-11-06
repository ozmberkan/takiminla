import { motion } from "framer-motion";
import React from "react";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[200px] italic px-5 drop-shadow-4xl  font-black tracking-tighter  bg-clip-text text-transparent bg-gradient-to-l from-white to-white"
      >
        Takımınla
      </motion.span>
    </div>
  );
};

export default App;
