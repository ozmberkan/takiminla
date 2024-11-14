import { collection, doc, setDoc } from "firebase/firestore";
import moment from "moment";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiCityLight } from "react-icons/pi";
import {
  TbCalendar,
  TbCurrentLocation,
  TbLocation,
  TbTemplate,
  TbUser,
} from "react-icons/tb";
import { useDispatch } from "react-redux";
import { db } from "~/firebase/firebase";
import { getUsersTeams } from "~/redux/slices/teamsSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import Avatar from "~/assets/avatar.jpg";

import { useNavigate } from "react-router-dom";

const CreateUserListModal = ({ setIsCreateUserModal, user }) => {
  const modalRoot = document.getElementById("root-modal");

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createHandle = async (data) => {
    try {
      const userListRef = doc(collection(db, "userList"));

      if (
        user.displayName === null ||
        user.foot === null ||
        user.position === null
      ) {
        toast.error("Önce profil bilgilerini güncellemelisin..");
        setIsCreateUserModal(false);
        return;
      }

      await setDoc(userListRef, {
        city: data.city,
        position: data.position,
        createdBy: user.uid,
        createdName: user.displayName,
        createdPhoto: user.photoURL ? user.photoURL : Avatar,
        foot: user.foot,
        age: user.age,
        weight: user.weight,
        height: user.height,
        startDate: moment(data.startDate).format("DD.MM.YYYY HH:mm"),
        endDate: moment(data.endDate).format("DD.MM.YYYY HH:mm"),
        createdAt: moment().format("DD.MM.YYYY HH:mm"),
      });

      toast.success("İlan başarıyla oluşturuldu..");
      setIsCreateUserModal(false);
      dispatch(getUsersTeams(user.uid));
      navigate("/my-lists");
    } catch (error) {
      console.log(error);
    }
  };

  return ReactDOM.createPortal(
    <div
      className="modal-overlay fixed inset-0 bg-black/75  flex justify-center items-center z-30"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-0">
        <div className="flex items-start p-6 border-b border-gray-200">
          <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
            <TbUser className="text-green-500" />
          </div>
          <div className="ml-4">
            <h3
              className="text-lg font-semibold text-gray-900 flex justify-between items-center"
              id="modal-title"
            >
              Halısaha'da oynamak mı istiyorsun?
              <button
                className="hover:text-primary"
                onClick={() => setIsCreateUserModal(false)}
              >
                <IoCloseCircleOutline size={20} />
              </button>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Eğer canın sıkıldıysa ve maç yapmak istiyorsan buradan ilan
              oluşturabilirsin.
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
                {...register("city", { required: true })}
                className="w-full outline-none ml-2"
              >
                <option value="">Şehir seçiniz</option>
                <option value="İzmir">İzmir</option>
                <option value="İstanbul">İstanbul</option>
                <option value="Ankara">Ankara</option>
                <option value="Bursa">Bursa</option>
                <option value="Antalya">Antalya</option>
                <option value="Tekirdag">Tekirdağ</option>
              </select>
            </label>
          </div>

          <div className="relative">
            <label className="flex items-center h-10 bg-white border rounded-md pl-4">
              <TbCurrentLocation size={16} />
              <select
                {...register("position", { required: true })}
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
          <div className="w-full  text-sm col-span-2">
            Başlangıç ve bitiş tarihi seçiniz..
          </div>
          <div className="flex justify-start items-center h-10  bg-white border rounded-md pl-4 col-span-2 ">
            <TbCalendar size={16} />
            <input
              type="datetime-local"
              {...register("startDate")}
              className="w-full outline-none px-4"
            />
          </div>
          <div className="flex justify-start items-center h-10  bg-white border rounded-md pl-4 col-span-2 ">
            <TbCalendar size={16} {...register("endDate")} />
            <input type="datetime-local" className="w-full outline-none px-4" />
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

export default CreateUserListModal;
