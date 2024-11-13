import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PiCityLight } from "react-icons/pi";
import {
  TbCurrentLocation,
  TbEdit,
  TbMail,
  TbPhoneCall,
  TbPhotoEdit,
  TbShoe,
  TbUser,
  TbUserScan,
  TbWeight,
} from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { RxHeight } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "~/assets/avatar.jpg";
import { FiSave } from "react-icons/fi";
import { getUserByID } from "~/redux/slices/userSlice";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import toast from "react-hot-toast";
import PhotoModal from "~/components/UI/Modals/UpdateProfile/PhotoModal";

const MyAccount = () => {
  const { user } = useSelector((store) => store.user);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isPhotoModal, setIsPhotoModal] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user && user.uid) {
      dispatch(getUserByID(user.uid));
    }
  }, [dispatch, user?.uid]);

  useEffect(() => {
    // `user` bilgileri yüklendiğinde formu güncelleyin
    if (user) {
      reset({
        displayName: user.displayName || "Kullanıcı",
        phoneNumber: user.phoneNumber || "+90 *** *** ** **",
        email: user.email,
        age: user.age || "Yaş Belirlenmemiş",
        foot: user.foot || "Ayak Belirlenmemiş",
        position: user.position || "Mevkii Belirlenmemiş",
        city: user.city || "Şehir Belirlenmemiş",
        weight: user.weight || "",
        height: user.height || "",
      });
    }
  }, [user, reset]);

  const handleEdit = async (data) => {
    try {
      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        displayName: data.displayName,
        phoneNumber: data.phoneNumber,
        age: data.age,
        foot: data.foot,
        position: data.position,
        city: data.city,
        weight: data.weight,
        height: data.height,
      });

      toast.success("Profil bilgileriniz başarıyla güncellendi.");
      setIsEditMode(false);

      dispatch(getUserByID(user.uid));
    } catch (error) {
      console.log(error);
      toast.error("Profil bilgileri güncellenirken bir hata oluştu.");
    }
  };

  const userInfo = [
    {
      label: "İsim Soyisim",
      value: user.displayName || "Kullanıcı",
      icon: <TbUser size={16} />,
      name: "displayName",
      type: "text",
    },
    {
      label: "Telefon Numarası",
      value: user.phoneNumber || "+90 *** *** ** **",
      icon: <TbPhoneCall size={16} />,
      name: "phoneNumber",
      type: "text",
    },
    {
      label: "E-posta",
      value: user.email,
      icon: <TbMail size={16} />,
      name: "email",
      type: "text",
      disabled: true,
    },
    {
      label: "Yaş",
      value: user.age || "Yaş Belirlenmemiş",
      icon: <TbUserScan size={16} />,
      name: "age",
      type: "text",
    },
    {
      label: "Ayak Tercihi",
      value: user.foot || "Ayak Belirlenmemiş",
      icon: <TbShoe size={16} />,
      name: "foot",
      type: "select",
      options: ["Sağ", "Sol", "Hepsi"],
    },
    {
      label: "Mevkii",
      value: user.position || "Mevkii Belirlenmemiş",
      icon: <TbCurrentLocation size={16} />,
      name: "position",
      type: "select",
      options: [
        "Forvet",
        "Orta Saha",
        "Defans",
        "Kaleci",
        "Sol Kanat",
        "Sağ Kanat",
      ],
    },
    {
      label: "Şehir",
      value: user.city || "Şehir Belirlenmemiş",
      icon: <PiCityLight size={16} />,
      name: "city",
      type: "select",
      options: ["İstanbul", "İzmir", "Ankara", "Antalya", "Bursa", "Tekirdağ"],
    },
    {
      label: "Kilo",
      value: user.weight,
      icon: <TbWeight size={16} />,
      name: "weight",
      type: "text",
    },
    {
      label: "Boy",
      value: user.height,
      icon: <RxHeight size={16} />,
      name: "height",
      type: "text",
    },
  ];

  return (
    <>
      {isPhotoModal && (
        <PhotoModal key={user.uid} setIsPhotoModal={setIsPhotoModal} />
      )}
      <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden">
        <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5">
          Profilim
        </h1>
        <div className="bg-white shadow-2xl container mx-auto rounded-xl p-12 flex flex-col gap-4">
          <div className="flex flex-row gap-x-2 w-full">
            <div className="relative">
              <img
                src={user.photoURL ? user.photoURL : Avatar}
                className="w-24 h-24 rounded-md shadow-xl object-cover"
                alt="Profile Avatar"
              />
              <button
                onClick={() => setIsPhotoModal(true)}
                className="absolute -top-1 -left-1 border bg-white rounded-xl p-2"
              >
                <TbPhotoEdit />
              </button>
            </div>
            <div className="flex flex-col gap-x-1">
              <h1 className="text-xl font-bold text-primary">
                {user.displayName || "Kullanıcı"}
              </h1>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(handleEdit)}>
            <div className="w-full flex justify-end items-center gap-x-3">
              {isEditMode && (
                <button
                  className="bg-primary/10 text-primary font-medium px-2 py-0.5 rounded-md border border-primary flex items-center gap-x-1 text-sm"
                  type="submit"
                >
                  <FiSave />
                  Kaydet
                </button>
              )}
              <button onClick={() => setIsEditMode(!isEditMode)} type="button">
                {!isEditMode ? (
                  <span className="flex items-center gap-x-1 text-sm border border-blue-500 bg-blue-500/10 text-blue-500 font-medium px-2 py-0.5 rounded-md">
                    <TbEdit /> Düzenle
                  </span>
                ) : (
                  <span className="flex items-center gap-x-1 text-sm border border-red-500 bg-red-500/10 text-red-500 font-medium px-2 py-0.5 rounded-md">
                    <IoIosClose size={20} />
                    Vazgeç
                  </span>
                )}
              </button>
            </div>
            <div className="w-full mt-1 grid grid-cols-3 grid-rows-2 gap-3">
              {userInfo.map((info, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <label className="text-sm text-zinc-600">{info.label}</label>
                  <div
                    className={`flex gap-x-2 items-center rounded-md border pl-2 h-10 ${
                      isEditMode ? "bg-white" : "bg-neutral-100"
                    }`}
                  >
                    <span className="text-zinc-700 bg-white p-1 border rounded-md">
                      {info.icon}
                    </span>
                    {info.type === "select" ? (
                      <select
                        {...register(info.name)}
                        disabled={!isEditMode}
                        className="bg-transparent h-full w-full text-sm outline-none disabled:text-zinc-500"
                        defaultValue={info.value}
                      >
                        {info.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        defaultValue={info.value}
                        className="bg-transparent h-full w-full text-sm outline-none disabled:text-zinc-500"
                        {...register(info.name)}
                        disabled={!isEditMode || info.disabled}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
