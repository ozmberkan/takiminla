import { collection, doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { contactInputs } from "~/data/data";
import { db } from "~/firebase/firebase";

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
      <div className="bg-white shadow-2xl container mx-auto rounded-xl p-12 flex gap-4">
        <form
          className="grid grid-cols-1 gap-5 w-1/2"
          onSubmit={handleSubmit(sendMessage)}
        >
          {contactInputs.map((input) => {
            return input.name === "content" ? (
              <textarea
                key={input.name}
                placeholder={input.placeholder || "Mesajınızı yazınız.."}
                {...register("content", { required: true })}
                className="px-4 py-2 min-h-44 max-h-44 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            ) : (
              <input
                key={input.name}
                {...register(input.name, { required: true })}
                type={input.type || "text"}
                placeholder={input.placeholder || "Bilgi giriniz.."}
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            );
          })}

          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-primary text-white"
          >
            Gönder
          </button>
        </form>
        <div className="w-1/2 flex flex-col gap-3">
          Bizimle iletişime geçmek için soldaki formu kullanabilirsiniz. Sisteme
          dair her türlü sorunuz için, sayfanın en altında yer alan iletişim
          adreslerinden de bizimle iletişime geçebilirsiniz.
        </div>
      </div>
    </div>
  );
};

export default Contact;
