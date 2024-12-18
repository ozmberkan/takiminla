import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerService } from "~/redux/slices/userSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { lineSpinner, ring2 } from "ldrs";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerScheme } from "~/validation/scheme";
import Logo from "~/assets/logos/logotypedark.svg";
import { TbEye, TbEyeClosed, TbLock, TbMail } from "react-icons/tb";
import { BsStars } from "react-icons/bs";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerScheme),
  });
  const { status } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  lineSpinner.register();
  ring2.register();

  const [hide, setHide] = useState("password");

  const registerHandle = (data) => {
    try {
      dispatch(registerService(data));
    } catch (error) {
      console.log(error);
    }
  };

  const changeVisible = () => {
    setHide(hide === "password" ? "text" : "password");
  };

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("Kayıt işlemi başarılı, yönlendiriliyorsunuz..");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    if (status === "failed") {
      toast.error("Kayıt işlemi başarısız, lütfen tekrar deneyin.");
    }
  }, [status]);

  return (
    <div className="flex flex-col justify-start gap-12 items-center p-8 min-h-screen">
      <div className="w-full flex items-center ">
        <Link to="/">
          <img src={Logo} className="w-44" />
        </Link>
      </div>
      <div className="w-full  h-[600px] p-3 flex justify-center items-center">
        <div className=" max-w-[500px] h-full p-2 flex flex-col justify-center gap-y-3">
          <div className="flex flex-col gap-y-2 mb-3">
            <h1 className="font-black text-3xl text-primary relative">
              Hoş geldin
              <span className="absolute top-0 text-primaryDark ">
                <BsStars size={15} />
              </span>
            </h1>

            <p className="text-sm text-zinc-500">
              Halısaha planında eğer oyuncuya ihtiyacın varsa ya da oyuncu olmak
              istiyorsan kendine ücretsiz bir hesap oluşturabilirsin. Unutma
              hesabını güncelleyerek ilan oluşturabilirsin!
            </p>

            <Link
              to="/auth/terms"
              className="text-xs hover:underline text-primary"
            >
              Kaydolarak hizmet şartlarımızı kabul etmiş olursunuz
            </Link>
          </div>
          <form
            className="flex flex-col  gap-y-3"
            onSubmit={handleSubmit(registerHandle)}
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
              <div className="w-full border flex items-center h-10 rounded-xl peer-focus-within:border-primary peer pr-3">
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
                  type={hide === "password" ? "password" : "text"}
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  className="hover:text-primary"
                  onClick={changeVisible}
                >
                  {hide === "password" ? <TbEye /> : <TbEyeClosed />}
                </button>
              </div>
            </div>

            <div className="w-full  p-1 flex justify-between items-center">
              <Link
                to="/auth/login"
                className="text-sm hover:underline text-neutral-700"
              >
                Hesabın var mı?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-primary flex justify-center items-center rounded-xl text-white px-4 py-2 font-semibold hover:shadow-[inset_-12px_-8px_40px_#46464670] transition-shadow duration-300"
            >
              {status === "loading" ? (
                <l-ring-2
                  size="23"
                  stroke="4"
                  stroke-length="0.25"
                  bg-opacity="0.1"
                  speed="0.8"
                  color="white"
                />
              ) : (
                "Kayıt Ol"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
