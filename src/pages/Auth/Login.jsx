import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex-grow bg-authBg bg-cover bg-center min-h-screen flex justify-center items-center">
      <div className=" bg-white rounded-xl border   shadow-primary flex flex-col p-5">
        <div className="w-full pb-6 border-b flex justify-center items-center text-center flex-col gap-3">
          <h1 className="text-4xl font-black text-primary">Oturum Aç</h1>
          <span className="text-zinc-600 w-2/3">
            Oturum açarak sende kendine takım bulabilir ya da ilan
            oluşturabilirsin.
          </span>
        </div>
        <form className="w-full  p-3 mt-5 h-full flex justify-start items-center flex-col gap-3">
          <div className="flex flex-col gap-1 w-2/3">
            <label className="text-sm text-zinc-500">E-Posta</label>
            <input
              type="text"
              placeholder="E-Posta giriniz.."
              className="px-4 py-2 rounded-md border outline-none "
            />
          </div>
          <div className="flex flex-col gap-1 w-2/3">
            <label className="text-sm text-zinc-500">Parola</label>
            <input
              type="password"
              placeholder="Parola giriniz.."
              className="px-4 py-2 rounded-md border outline-none "
            />
          </div>
          <div className="w-2/3 flex justify-end items-center">
            <Link className="text-sm hover:underline"> Şifremi unuttum</Link>
          </div>
          <button
            type="submit"
            className="bg-primary font-medium hover:bg-primaryDark text-white px-4 py-2 rounded-md w-2/3"
          >
            Oturum aç
          </button>
          <div className="relative flex items-center w-2/3 my-5">
            <div className="h-px w-full bg-zinc-500"></div>
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-zinc-500">
              YA DA
            </span>
          </div>
          <button
            type="button"
            className="flex items-center gap-x-2 w-2/3 bg-white hover:bg-zinc-50 border px-4 py-2 rounded-md justify-center font-semibold text-lg"
          >
            <FcGoogle size={20} /> Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
