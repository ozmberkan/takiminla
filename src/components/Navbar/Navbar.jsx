import React from "react";
import Logo from "~/assets/FullLogo.svg";

const Navbar = () => {
  return (
    <div className="w-full py-5 flex justify-between items-center container mx-auto">
      <span className="font-nunito text-4xl font-black text-primary ">
        Takımınla
      </span>
      <div className="flex gap-x-4 items-center">
        <button className="px-4 py-2 rounded-full text-sm bg-primary text-white font-medium">
          Yeni takım
        </button>
        <button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FaixW6ggFhtcOFPZAo5G2_efWCGW4kbVgb2-Y-qNU51A171TIWcSOktBgCZ6esaece0&usqp=CAU"
            alt=""
            className="w-10 h-10 rounded-full ring-1 ring-primary ring-offset-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
