import { collection, doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { contactInputs } from "~/data/data";
import { db } from "~/firebase/firebase";
import contactSVG from "~/assets/contact.svg";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector((store) => store.user);

  const sendMessage = async (data) => {
    try {
      const contactsRef = doc(collection(db, "contacts"));

      await setDoc(contactsRef, {
        messageID: contactsRef.id,
        name: data.name,
        email: data.email,
        title: data.title,
        content: data.content,
        user: user ? user.uid : null,
      });

      toast.success("Mesajınız başarıyla gönderildi.");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden">
      <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5">
        İletişim
      </h1>
      <div className=" container mx-auto rounded-xl  flex items-start justify-start gap-4">
        <form
          className="flex flex-col gap-4 w-1/2  h-full"
          onSubmit={handleSubmit(sendMessage)}
        >
          {contactInputs.map((input, i) => {
            return input.name === "content" ? (
              <div className="flex flex-col gap-1">
                <label className="text-xs  text-zinc-600">{input.label}</label>

                <textarea
                  key={input.name}
                  placeholder={input.placeholder || "Mesajınızı yazınız.."}
                  {...register("content", { required: true })}
                  className="px-4 py-2 min-h-44 max-h-44 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <label className="text-xs  text-zinc-600">{input.label}</label>
                <input
                  key={input.name}
                  {...register(input.name, { required: true })}
                  type={input.type || "text"}
                  placeholder={input.placeholder || "Bilgi giriniz.."}
                  className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            );
          })}

          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-primary text-white"
          >
            Gönder
          </button>
        </form>
        <div className="flex justify-center items-center gap-3  h-full p-3 w-1/2">
          <img
            src={contactSVG}
            className="w-2/3  object-cover drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
