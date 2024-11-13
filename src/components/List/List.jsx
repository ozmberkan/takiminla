import { deleteDoc, doc } from "firebase/firestore";
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
import { useDispatch } from "react-redux";
import { db } from "~/firebase/firebase";
import { getUsersTeams } from "~/redux/slices/teamsSlice";
import EditTeamModal from "../UI/Modals/EditTeamModal";

const List = ({ team }) => {
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
  const [selectedList, setSelectedList] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const deleteTeam = async (teamID) => {
    try {
      const teamRef = doc(db, "teams", teamID);
      await deleteDoc(teamRef);
      toast.success("İlan başarıyla silindi.");
      dispatch(getUsersTeams(createdBy));
    } catch (error) {
      console.log(error);
    }
  };

  const openEdit = (team) => {
    setIsEditMode(true);
    setSelectedList(team);
  };

  return (
    <>
      {isEditMode && (
        <EditTeamModal
          selectedList={selectedList}
          setIsEditMode={setIsEditMode}
        />
      )}
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
          <p className="flex gap-x-1 items-center pb-3 border-b">
            <img
              src={createdPhoto ? createdPhoto : Avatar}
              className="w-10 h-10 rounded-md shadow"
            />
            {createdName ? createdName : "Kullanıcı"}
          </p>
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
        <div className="w-full flex justify-end items-start py-2 gap-x-2">
          <button
            onClick={() => deleteTeam(teamID)}
            className="px-3 py-1 rounded-md hover:bg-red-500 transition-colors hover:text-white text-sm border flex bg-red-50  border-red-500 text-red-500 items-center gap-x-1"
          >
            <TbTrash /> Sil
          </button>
          <button
            onClick={() => openEdit(team)}
            className="px-3 py-1 rounded-md hover:bg-blue-500 transition-colors hover:text-white text-sm border flex bg-blue-50  border-blue-500 text-blue-500 items-center gap-x-1"
          >
            <TbEdit /> Düzenle
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
