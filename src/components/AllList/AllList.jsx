import { arrayUnion, deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { PiCityLight } from "react-icons/pi";
import Avatar from "~/assets/avatar.jpg";
import {
  TbCalendar,
  TbCirclePlus,
  TbCurrentLocation,
  TbEdit,
  TbLocation,
  TbLocationCode,
  TbMapSearch,
  TbShoe,
  TbTrash,
  TbUser,
} from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { db } from "~/firebase/firebase";
import { getUserByID } from "~/redux/slices/userSlice";
import { nanoid } from "nanoid";
import moment from "moment";

const AllList = ({ team }) => {
  const { user } = useSelector((store) => store.user);

  const {
    city,
    address,
    date,
    position,
    createdName,
    createdPhoto,
    createdBy,
    teamID,
  } = team;
  const dispatch = useDispatch();

  const sendInvite = async (team) => {
    try {
      const userRef = doc(db, "users", team.createdBy);

      if (
        !user.displayName ||
        user.foot === undefined ||
        user.position === undefined
      ) {
        toast.error("Önce profil bilgilerini güncellemelisin..");
        return;
      }

      const inviteContent = {
        fromName: user.displayName || "Unknown",
        fromAge: user.age || "N/A",
        fromPhoto: user.photoURL || Avatar,
        fromFoot: user.foot || "Unknown",
        fromPosition: user.position || "Unknown",
        fromID: user.uid,
        teamID: team.teamID,
        matchDate: team.date,
        matchAddress: team.address,
        matchCity: team.city,
        notificationID: nanoid(),
        notificationDate: moment().format("DD.MM.YYYY HH:mm"),
      };

      await updateDoc(userRef, {
        notifications: arrayUnion(inviteContent),
      });

      toast.success("Davet Gönderildi");
      dispatch(getUserByID(user.uid));
    } catch (error) {
      console.log(error);
    }
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow border flex flex-col  ">
        <div className="w-full p-3  flex justify-between items-center">
          <div className="flex items-center justify-between gap-x-2 w-full  pb-2 border-b ">
            <div className="flex items-center gap-x-2">
              <img
                src={createdPhoto ? createdPhoto : Avatar}
                className="w-10 h-10 rounded-md object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm text-zinc-700">Organizatör</span>
                <span className="text-xs font-medium text-primaryDark">
                  {createdName}
                </span>
              </div>
            </div>
            <span className="bg-zinc-50 border px-4 py-1 rounded-md text-zinc-600 text-xs">
              {date}
            </span>
          </div>
        </div>
        <div className="px-3 py-2  grid grid-cols-1 gap-3">
          <div className="flex items-center gap-x-2">
            <TbCurrentLocation />
            <span className="font-medium text-sm">
              {position === "ortaSaha" && "Orta Saha"}
              {position === "defans" && "Defans"}
              {position === "forvet" && "Forvet"}
              {position === "kaleci" && "Kaleci"}
              {position === "sagKanat" && "Sağ Kanat"}
              {position === "solKanat" && "Sol Kanat"}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <PiCityLight />
            <span className="font-medium text-sm">{city}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <TbLocation />
            <span className="font-medium text-sm">{address}</span>
          </div>
        </div>
        <div className="w-full p-3 bg-neutral-50 rounded-b-lg flex justify-end items-center gap-x-2">
          <button
            onClick={openGoogleMaps}
            className="px-4 py-1 bg-sky-50 border hover:shadow-md transition-shadow border-sky-600 text-sky-600 rounded-md flex items-center gap-x-1 text-sm"
          >
            <TbMapSearch size={17} />
            Konumu Görüntüle
          </button>
          <button
            onClick={() => sendInvite(team)}
            className="px-4 py-1 bg-emerald-50 border hover:shadow-md transition-shadow border-emerald-600 text-emerald-600 rounded-md flex items-center gap-x-1 text-sm"
          >
            <TbCirclePlus size={17} />
            Davet Gönder
          </button>
        </div>
      </div>
    </>
  );
};

export default AllList;
