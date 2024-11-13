import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TbPhotoEdit, TbUpload } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { db } from "~/firebase/firebase";
import { getUserByID } from "~/redux/slices/userSlice";

const PhotoModal = ({ setIsPhotoModal }) => {
  const modalRoot = document.getElementById("root-modal");
  const { user } = useSelector((store) => store.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsPhotoModal(false);
    }
  };

  const { register, handleSubmit } = useForm();

  const photoUpdateHandle = async (data) => {
    setLoading(true);
    try {
      const file = data.photoURL[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
      formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadedImage = await res.json();

      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        photoURL: uploadedImage.secure_url,
      });

      toast.success("Profil fotoğrafı güncellendi.");
      dispatch(getUserByID(user.uid));
      setIsPhotoModal(false);
    } catch (error) {
      console.log(error);
      toast.error("Fotoğraf yükleme sırasında bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div
      className="modal-overlay fixed inset-0 bg-black/75 flex justify-center items-center z-30"
      onClick={handleClickOutside}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-0">
        <div className="flex items-start p-6 border-b border-gray-200">
          <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
            <TbPhotoEdit className="text-green-500" />
          </div>
          <div className="ml-4">
            <h3
              className="text-lg font-semibold text-gray-900"
              id="modal-title"
            >
              Profil Fotoğrafını Güncelle
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Profil fotoğrafı yükleyerek güncelleme yapabilirsiniz.
            </p>
          </div>
        </div>

        <form
          className="p-6 grid grid-cols-1 gap-4"
          onSubmit={handleSubmit(photoUpdateHandle)}
        >
          <label
            htmlFor="uploadFile1"
            className="flex w-full bg-gray-800 items-center gap-x-3 hover:bg-gray-700 text-white text-base px-5 py-3 outline-none rounded cursor-pointer mx-auto"
          >
            {loading ? (
              <span className="w-full flex items-center gap-x-2">
                <div className="animate-spin h-5 w-5 rounded-full border-t-2 border-white border-opacity-70"></div>
                Yükleniyor...
              </span>
            ) : (
              <>
                <TbUpload size={20} />
                Fotoğraf Yükle
              </>
            )}
            <input
              type="file"
              id="uploadFile1"
              className="hidden"
              {...register("photoURL")}
            />
          </label>

          <div className="col-span-1">
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 rounded-md hover:bg-green-700 transition-colors"
              disabled={loading}
            >
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default PhotoModal;
