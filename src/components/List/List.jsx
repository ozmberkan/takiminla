import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { PiCityLight } from "react-icons/pi";
import Avatar from "~/assets/avatar.jpg";
import {
  TbCalendar,
  TbCirclePlus,
  TbCurrentLocation,
  TbEdit,
  TbEditCircle,
  TbLocation,
  TbMapSearch,
  TbMinus,
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
      <div className="w-full rounded-lg shadow border flex flex-col  ">
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
            onClick={() => openEdit(team)}
            className="px-4 py-1 bg-sky-50 border hover:shadow-md transition-shadow border-sky-600 text-sky-600 rounded-md flex items-center gap-x-1 text-sm"
          >
            <TbEditCircle size={17} />
            İlanı Düzenle
          </button>
          <button
            onClick={() => deleteTeam(teamID)}
            className="px-4 py-1 bg-red-50 border hover:shadow-md transition-shadow border-red-600 text-red-600 rounded-md flex items-center gap-x-1 text-sm"
          >
            <TbTrash size={17} />
            İlanı Sil
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
