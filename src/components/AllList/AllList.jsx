import { arrayUnion, deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { PiCityLight } from "react-icons/pi";
import Avatar from "~/assets/avatar.jpg";
import {
  TbCalendar,
  TbCurrentLocation,
  TbEdit,
  TbLocation,
  TbTrash,
  TbUser,
} from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { db } from "~/firebase/firebase";
import { getUserByID } from "~/redux/slices/userSlice";
import { nanoid } from "nanoid";

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

      const inviteContent = {
        fromName: user.displayName,
        fromAge: user.age,
        fromPhoto: user.photoURL,
        fromFoot: user.foot,
        fromPosition: user.position,
        fromID: user.uid,
        teamID: team.teamID,
        notificationID: nanoid(),
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
      <div className="w-full rounded-xl border p-3 flex flex-col gap-3 shadow-md">
        <div className="w-full flex justify-between items-center border bg-zinc-500  text-zinc-200 px-4 py-2 rounded-md">
          <span className="flex gap-x-1 items-center font-medium">
            <PiCityLight />
            {city}
          </span>
          <span className="flex gap-x-1 items-center font-medium">
            <TbCalendar />
            {date}
          </span>
        </div>
        <div className="w-full bg-zinc-100 border rounded-md px-4 py-2 flex flex-col gap-3">
          <div className="flex gap-x-1 items-center justify-between  border-b w-full pb-3">
            <div className="flex items-center gap-x-3">
              <img
                src={createdPhoto ? createdPhoto : Avatar}
                className="w-10 h-10 rounded-md shadow"
              />
              <span> {createdName ? createdName : "Kullanıcı"}</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <button
                onClick={() => sendInvite(team)}
                className="px-4 py-2 rounded-md text-xs  bg-primary/10 border border-primary font-bold hover:bg-primary hover:text-white transition-colors duration-300 text-primary"
              >
                Davet Gönder
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs flex items-center gap-x-1  bg-blue-500/10 border border-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300 text-blue-500"
                onClick={openGoogleMaps}
              >
                <TbLocation />
                Lokasyonu Gör
              </button>
            </div>
          </div>
          <p className="flex gap-x-1 items-center">
            <TbLocation />
            {address}
          </p>
          <p className="flex gap-x-1 items-center">
            <TbCurrentLocation />
            {position === "forvet" && "Forvet"}
            {position === "kaleci" && "Kaleci"}
            {position === "ortaSaha" && "Orta Saha"}
            {position === "defans" && "Defans"}
            {position === "solKanat" && "Sol Kanat"}
            {position === "sagKanat" && "Sağ Kanat"}
          </p>
        </div>
      </div>
    </>
  );
};

export default AllList;
