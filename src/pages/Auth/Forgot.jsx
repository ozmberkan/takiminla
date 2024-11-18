import { Link } from "react-router-dom";
import Logo from "~/assets/logos/logotypedark.svg";
import { TbEye, TbEyeClosed, TbLock, TbMail } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "~/firebase/firebase";
import toast from "react-hot-toast";

const Forgot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const forgotHandle = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      toast.success("Parola sıfırlama e-postası gönderildi.");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

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
              Parolamı Unuttum
              <span className="absolute top-0 text-primaryDark ">
                <BsStars size={15} />
              </span>
            </h1>

            <p className="text-sm text-zinc-500">
              Eğer parolanızı unuttuysanız, lütfen e-posta adresinizi girerek
              yeni bir parola oluşturun.
            </p>
          </div>
          <form
            className="flex flex-col  gap-y-3"
            onSubmit={handleSubmit(forgotHandle)}
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

            <div className="w-full  p-1 flex justify-between items-center">
              <Link
                to="/auth/login"
                className="text-sm hover:underline text-neutral-700"
              >
                Parolanı hatırlıyor musun ?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-primary rounded-xl text-white px-4 py-2 font-semibold hover:shadow-[inset_-12px_-8px_40px_#46464670] transition-shadow duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
