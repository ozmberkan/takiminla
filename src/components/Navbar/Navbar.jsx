import React from "react";
import { Link } from "react-router-dom";
import Logo from "~/assets/Logoo.svg";

const Navbar = () => {
  return (
    <div className="w-full py-5 flex justify-between items-center container drop-shadow-2xl mx-auto ">
      <span className="font-black text-xl  text-primary ">Takımınla</span>
      {/* <img src={Logo} className="w-64" /> */}
      <div className="flex gap-x-5 items-center ">
        <Link className="text-zinc-800 font-medium">Hakkımızda</Link>
        <Link className="text-zinc-800 font-medium">Hizmetler</Link>
        <Link className="text-zinc-800 font-medium">İletişim</Link>
      </div>
      <div className="flex items-center">
        {/* <Link
          to="/auth/register"
          className="px-4 py-2 rounded-full text-sm bg-primary text-white font-medium"
        >
          Kayıt Ol
        </Link> */}
        <Link
          to="/auth/login"
          className="px-4 py-2 rounded-full text-sm bg-primary text-white font-medium"
        >
          Giriş Yap
        </Link>
        {/* <button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FaixW6ggFhtcOFPZAo5G2_efWCGW4kbVgb2-Y-qNU51A171TIWcSOktBgCZ6esaece0&usqp=CAU"
            alt=""
            className="w-10 h-10 rounded-full ring-1 ring-primary ring-offset-2"
          />
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
