import React from "react";
import { PiCityLight } from "react-icons/pi";
import {
  TbCurrentLocation,
  TbEdit,
  TbEditCircle,
  TbMail,
  TbPhoneCall,
  TbPhoto,
  TbPhotoEdit,
  TbShoe,
  TbUser,
  TbUserCheck,
  TbUserScan,
} from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "~/assets/avatar.jpg";

const MyAccount = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden">
      <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5">
        Profilim
      </h1>
      <div className="bg-white shadow-2xl container mx-auto rounded-xl p-12 flex flex-col gap-4">
        <div className="flex flex-row gap-x-2 w-full">
          <div className="relative">
            <img
              src={user.photoURL ? user.photoURL : Avatar}
              className="w-24 h-24 rounded-md shadow-xl"
            />
            <button className="absolute -top-1 -left-1 border bg-white rounded-xl p-2">
              <TbPhotoEdit />
            </button>
          </div>
          <div className="flex flex-col gap-x-1">
            <h1 className="text-xl font-bold text-primary">
              {user.displayName ? user.displayName : "Kullanıcı"}
            </h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <button className="bg-primary/10 text-primary font-medium px-2 py-0.5 rounded-md border border-primary flex items-center gap-x-1 text-sm">
            <TbEdit /> Düzenle
          </button>
        </div>
        <div className="w-full mt-1 grid grid-cols-3 grid-rows-2 gap-8">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-600">İsim Soyisim</label>
            <div className="flex gap-x-2 items-center bg-neutral-100 rounded-md border pl-2 h-10">
              <span className="text-zinc-700 bg-white p-1 border rounded-md">
                <TbUser size={16} />
              </span>
              <input
                defaultValue={user.displayName ? user.displayName : "Kullanıcı"}
                className="bg-transparent h-full w-full text-sm outline-none disabled:text-zinc-500"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-600">Telefon Numarası</label>
            <div className="flex gap-x-2 items-center bg-neutral-100 rounded-md border pl-2 h-10">
              <span className="text-zinc-700 bg-white p-1 border rounded-md">
                <TbPhoneCall size={16} />
              </span>
              <input
                defaultValue={
                  user.phoneNumber ? user.phoneNumber : "+90 *** *** ** **"
                }
                className="bg-transparent h-full w-full text-sm outline-none disabled:text-zinc-500"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-600">E-posta</label>
            <div className="flex gap-x-2 items-center bg-neutral-100 rounded-md border pl-2 h-10">
              <span className="text-zinc-700 bg-white p-1 border rounded-md">
                <TbMail size={16} />
              </span>
              <input
                defaultValue={user.email}
                className="bg-transparent h-full w-full text-sm outline-none disabled:text-zinc-500"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-600">Yaş</label>
            <div className="flex gap-x-2 items-center bg-neutral-100 rounded-md border pl-2 h-10">
              <span className="text-zinc-700 bg-white p-1 border rounded-md">
                <TbUserScan size={16} />
              </span>
              <input
                defaultValue={user.age ? user.age : "Yaş Belirlenmemiş"}
                className="bg-transparent h-full w-full text-sm outline-none disabled:text-zinc-500"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-600">Ayak Tercihi</label>
            <div className="flex gap-x-2 items-center bg-neutral-100 rounded-md border pl-2 h-10">
              <span className="text-zinc-700 bg-white p-1 border rounded-md">
                <TbShoe size={16} />
              </span>
              <input
                defaultValue={user.foot ? user.foot : "Ayak Belirlenmemiş"}
                className="bg-transparent h-full w-full text-sm outline-none disabled:text-zinc-500"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-600">Mevkii</label>
            <div className="flex gap-x-2 items-center bg-neutral-100 rounded-md border pl-2 h-10">
              <span className="text-zinc-700 bg-white p-1 border rounded-md">
                <TbCurrentLocation size={16} />
              </span>
              <input
                defaultValue={
                  user.position ? user.position : "Mevkii Belirlenmemiş"
                }
                className="bg-transparent h-full w-full text-sm outline-none disabled:text-zinc-500"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-600">Şehir</label>
            <div className="flex gap-x-2 items-center bg-neutral-100 rounded-md border pl-2 h-10">
              <span className="text-zinc-700 bg-white p-1 border rounded-md">
                <PiCityLight size={16} />
              </span>
              <input
                defaultValue={user.city ? user.city : "Şehir Belirlenmemiş"}
                className="bg-transparent h-full w-full text-sm outline-none disabled:text-zinc-500"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
