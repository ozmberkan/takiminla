import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import { PiCityLight } from "react-icons/pi";
import {
  TbCirclePlus,
  TbCurrentLocation,
  TbLineHeight,
  TbShoe,
  TbUserScan,
  TbWeight,
} from "react-icons/tb";
import { useSelector } from "react-redux";
import { db } from "~/firebase/firebase";
import { getUserByID } from "~/redux/slices/userSlice";

const UserListBox = ({ userL }) => {
  const { user } = useSelector((store) => store.user);

  const {
    createdName,
    createdPhoto,
    age,
    city,
    startDate,
    endDate,
    foot,
    height,
    weight,
    position,
  } = userL;

  const sendInvite = async (userL) => {
    try {
      const userRef = doc(db, "users", userL.createdBy);

      const inviteContent = {
        fromID: user.uid,
        fromName: user.displayName || "Unknown",
        fromPhoneNumber: user.phoneNumber || "N/A",
        notifactionContent: "Sizi takımına davet etmek istiyor.",
        notificationID: nanoid(),
      };

      await updateDoc(userRef, {
        notifications: arrayUnion(inviteContent),
      });

      toast.success("Davet Gönderildi");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full rounded-lg shadow border flex flex-col  ">
      <div className="w-full p-3  flex justify-between items-center">
        <div className="flex items-center justify-between gap-x-2 w-full  pb-2 border-b ">
          <div className="flex items-center gap-x-2">
            <img
              src={createdPhoto ? createdPhoto : Avatar}
              className="w-10 h-10 rounded-md object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm text-zinc-700">Oyuncu</span>
              <span className="text-xs font-medium text-primaryDark">
                {createdName}
              </span>
            </div>
          </div>
          <span className="bg-zinc-50 border px-4 py-1 rounded-md text-zinc-600 text-xs">
            {startDate} - {endDate}
          </span>
        </div>
      </div>
      <div className="p-3  grid grid-cols-4 place-items-start gap-5">
        <div className="flex items-center gap-x-2">
          <TbUserScan />
          <span className="font-medium text-sm">{age} Yaş</span>
        </div>
        <div className="flex items-center gap-x-2">
          <PiCityLight />
          <span className="font-medium text-sm">{city}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <TbShoe />
          <span className="font-medium text-sm">{foot}</span>
        </div>
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
          <TbWeight />
          <span className="font-medium text-sm">{weight}kg</span>
        </div>

        <div className="flex items-center gap-x-2">
          <TbLineHeight />
          <span className="font-medium text-sm">{height}cm</span>
        </div>
      </div>
      <div className="w-full p-3 bg-neutral-50 rounded-b-lg flex justify-end items-center gap-x-2">
        <button
          onClick={() => sendInvite(userL)}
          className="px-4 py-1 bg-emerald-50 border hover:shadow-md transition-shadow border-emerald-600 text-emerald-600 rounded-md flex items-center gap-x-1 text-sm"
        >
          <TbCirclePlus size={17} />
          Davet Gönder
        </button>
      </div>
    </div>
  );
};

export default UserListBox;
