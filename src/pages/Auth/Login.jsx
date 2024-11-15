import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginScheme } from "~/validation/scheme";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { loginService } from "~/redux/slices/userSlice";
import toast from "react-hot-toast";
import { lineSpinner } from "ldrs";
import Logo from "~/assets/logos/logotypedark.svg";
import { TbLock, TbMail } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { BsStars } from "react-icons/bs";

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
    <div className="flex flex-col justify-start gap-12 items-center p-8 min-h-screen">
      <div className="w-full flex items-center ">
        <img src={Logo} className="w-44" />
      </div>
      <div className="w-full  flex-grow p-3 flex justify-center items-center">
        <div className=" max-w-[500px] h-full p-2 flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-2 mb-3">
            <h1 className="font-black text-3xl text-primary relative">
              Yeniden hoş geldin!
              <span className="absolute top-0 text-primaryDark ">
                <BsStars size={15} />
              </span>
            </h1>

            <p className="text-sm text-zinc-500">
              Halısaha planında eğer oyuncuya ihtiyacın varsa ya da oyuncu olmak
              istiyorsan bilgilerini girerek sisteme ücretsiz bir şekilde
              erişebilirsin.
            </p>
          </div>
          <form
            className="flex flex-col  gap-y-3"
            onSubmit={handleSubmit(loginHandle)}
          >
            <div className="flex flex-col gap-y-1">
              <label className="text-sm text-zinc-600">E-Posta</label>
              <div className="w-full border flex items-center  h-10 rounded-xl">
                <span
                  className={`text-xl flex justify-center items-center px-4 h-full transition-colors duration-500 border-r ${
                    errors.email && "text-red-600"
                  }`}
                >
                  <TbMail size={20} />
                </span>
                <input
                  className="h-full w-full outline-none bg-transparent pl-3"
                  placeholder="E-Posta"
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-sm text-zinc-600">Parola</label>
              <div className="w-full border flex items-center h-10 rounded-xl peer-focus-within:border-primary peer">
                <span
                  className={`text-xl flex justify-center items-center px-4 h-full transition-colors duration-500 border-r ${
                    errors.email && "text-red-600"
                  }`}
                >
                  <TbLock size={20} />
                </span>
                <input
                  className="h-full w-full outline-none bg-transparent pl-3"
                  placeholder="Parola"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <div className="w-full  p-1 flex justify-between items-center">
              <Link className="text-sm hover:underline text-neutral-700">
                Parolamı unuttum
              </Link>
              <Link
                to="/auth/register"
                className="text-sm hover:underline text-neutral-700"
              >
                Hesabın yok mu?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-primary rounded-xl text-white px-4 py-2 font-semibold hover:shadow-[inset_-12px_-8px_40px_#46464670] transition-shadow duration-300"
            >
              Oturum aç
            </button>

            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">YA DA</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              type="button"
              className="flex gap-x-2 items-center border px-4 py-2 rounded-xl justify-center hover:bg-zinc-100 transition-colors duration-300"
            >
              <FcGoogle /> Google ile giriş yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
