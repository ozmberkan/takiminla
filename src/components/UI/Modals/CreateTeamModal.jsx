import { collection, doc, setDoc } from "firebase/firestore";
import moment from "moment";
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiCityLight } from "react-icons/pi";
import { TbCurrentLocation, TbTemplate } from "react-icons/tb";
import { db } from "~/firebase/firebase";

const CreateTeamModal = ({ setIsCreateModal, user }) => {
  const modalRoot = document.getElementById("root-modal");

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsCreateModal(false);
    }
  };

  const { register, handleSubmit } = useForm();

  const createHandle = async (data) => {
    try {
      const teamRef = doc(collection(db, "teams"));

      await setDoc(teamRef, {
        position: data.position,
        city: data.city,
        createdBy: user.uid,
        createdAt: moment().format("DD.MM.YYYY HH:mm"),
      });

      toast.success("Takım oluşturuldu");
      setIsCreateModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return ReactDOM.createPortal(
    <div
      className="modal-overlay fixed inset-0 bg-black/75 z-10 flex justify-center items-center"
      onClick={handleClickOutside}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-0">
        <div className="flex items-start p-6 border-b border-gray-200">
          <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
            <TbTemplate className="text-green-500" />
          </div>
          <div className="ml-4">
            <h3
              className="text-lg font-semibold text-gray-900"
              id="modal-title"
            >
              Halısaha İlanı Oluştur
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Eğer takımında eksik varsa, buradan ilan oluşturarak yeni
              oyuncular bulabilirsin. Durma hemen oluştur!
            </p>
          </div>
        </div>

        <form
          className="p-6 grid grid-cols-2 gap-4"
          onSubmit={handleSubmit(createHandle)}
        >
          <div className="relative">
            <label className="flex items-center h-10 bg-white border rounded-md pl-4">
              <PiCityLight size={16} />
              <select
                {...register("city")}
                className="w-full outline-none ml-2"
              >
                <option value="">Şehir seçiniz</option>
                <option value="izmir">İzmir</option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="bursa">Bursa</option>
                <option value="antalya">Antalya</option>
                <option value="tekirdag">Tekirdağ</option>
              </select>
            </label>
          </div>

          <div className="relative">
            <label className="flex items-center h-10 bg-white border rounded-md pl-4">
              <TbCurrentLocation size={16} />
              <select
                {...register("position")}
                className="w-full outline-none ml-2"
              >
                <option value="">Mevkii seçiniz</option>
                <option value="forvet">Forvet</option>
                <option value="ortaSaha">Orta Saha</option>
                <option value="defans">Defans</option>
                <option value="kaleci">Kaleci</option>
                <option value="solKanat">Sol Kanat</option>
                <option value="sagKanat">Sağ Kanat</option>
              </select>
            </label>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Oluştur
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default CreateTeamModal;
