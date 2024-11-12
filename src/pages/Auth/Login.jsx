import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { loginScheme } from "~/validation/scheme";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { loginService } from "~/redux/slices/userSlice";
import toast from "react-hot-toast";
import { TbLock, TbMail, TbUser } from "react-icons/tb";
import { lineSpinner } from "ldrs";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginScheme),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  lineSpinner.register();
  const { status } = useSelector((store) => store.user);

  const loginHandle = (data) => {
    try {
      dispatch(loginService(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("Giriş işlemi başarılı, yönlendiriliyorsunuz..");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    if (status === "failed") {
      toast.error("Giriş işlemi başarısız, lütfen tekrar deneyin.");
    }
  }, [status]);

  return (
    <div className="flex-grow bg-authBg bg-cover bg-center min-h-screen flex justify-center items-center">
      <div className=" bg-white rounded-xl border w-[600px]  shadow-primary flex flex-col p-5">
        <div className="w-full pb-6 border-b flex justify-center items-center text-center flex-col gap-3">
          <h1 className="text-4xl font-black text-primary">Oturum Aç</h1>
          <span className="text-zinc-600 w-2/3">
            Oturum açarak sende kendine takım bulabilir ya da ilan
            oluşturabilirsin.
          </span>
        </div>
        <form
          className="w-full  p-3 mt-5 h-full flex justify-start items-center flex-col gap-3"
          onSubmit={handleSubmit(loginHandle)}
        >
          <div className="flex flex-col gap-1 w-2/3">
            <label className="text-sm text-zinc-500">E-Posta</label>
            <div
              className={`px-4 h-12 rounded-md border outline-none flex justify-start gap-x-3 items-center transition-colors duration-500 ${
                errors.email && "border-red-500"
              } `}
            >
              <TbMail
                size={20}
                className={
                  errors.email && "text-red-500 transition-colors duration-300"
                }
              />
              <input
                type="text"
                placeholder="E-Posta giriniz.."
                className="w-full outline-none h-full"
                {...register("email")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-2/3">
            <label className="text-sm text-zinc-500">Parola</label>
            <div
              className={`px-4 h-12 rounded-md border outline-none flex justify-start gap-x-3 items-center transition-colors duration-500 ${
                errors.password && "border-red-500"
              } `}
            >
              <TbLock
                size={20}
                className={
                  errors.password &&
                  "text-red-500 transition-colors duration-300"
                }
              />
              <input
                type="password"
                placeholder="Parola giriniz.."
                className="w-full outline-none h-full"
                {...register("password")}
              />
            </div>
          </div>
          <div className="w-2/3 flex justify-between items-center">
            <Link to="/auth/register" className="text-sm hover:underline">
              Hesabın yok mu?
            </Link>
            <Link className="text-sm hover:underline">Parolamı unuttum</Link>
          </div>
          <button
            type="submit"
            className="bg-primary font-semibold flex justify-center items-center hover:bg-primaryDark text-white px-4 h-10  rounded-md w-2/3"
          >
            {status === "loading" ? (
              <span className=" w-full p-0 h-10 flex justify-center items-center">
                <l-line-spinner size="25" stroke="3" speed="1" color="white" />
              </span>
            ) : (
              "Oturum aç"
            )}
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
