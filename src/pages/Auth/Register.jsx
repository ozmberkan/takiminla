import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerService } from "~/redux/slices/userSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { lineSpinner } from "ldrs";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerScheme } from "~/validation/scheme";
import Logo from "~/assets/logos/logotypedark.svg";
import { TbLock, TbMail } from "react-icons/tb";
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

  const registerHandle = (data) => {
    try {
      dispatch(registerService(data));
    } catch (error) {
      console.log(error);
    }
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
        <img src={Logo} className="w-44" />
      </div>
      <div className="w-full  flex-grow p-3 flex justify-center items-center">
        <div className=" max-w-[500px] h-full p-2 flex flex-col gap-y-3">
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
              <Link
                to="/auth/login"
                className="text-sm hover:underline text-neutral-700"
              >
                Hesabın var mı?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-primary rounded-xl text-white px-4 py-2 font-semibold hover:shadow-[inset_-12px_-8px_40px_#46464670] transition-shadow duration-300"
            >
              Kayıt ol
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
