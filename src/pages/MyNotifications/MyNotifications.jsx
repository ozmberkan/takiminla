import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import toast from "react-hot-toast";
import {
  TbBell,
  TbCurrentLocation,
  TbFilterCancel,
  TbShoe,
  TbUserScan,
} from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { db } from "~/firebase/firebase";
import { getUserByID } from "~/redux/slices/userSlice";
import moment from "moment";
import "moment/locale/tr.js";
import { FiCheck } from "react-icons/fi";
import { FcCancel } from "react-icons/fc";

moment.locale("tr");
React;

const MyNotifications = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const confirmInvite = async (notification) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const teamsRef = doc(db, "teams", notification.teamID);

      const matchesRef = doc(collection(db, "matches"));

      const deleteNotification = user.notifications.filter(
        (noti) => noti.notificationID !== notification.notificationID
      );

      await updateDoc(userRef, {
        notifications: deleteNotification,
      });

      await setDoc(matchesRef, {
        matchID: matchesRef.id,
        teamID: notification.teamID,
        userID: user.uid,
        date: notification.matchDate,
        address: notification.matchAddress,
        city: notification.matchCity,
      });

      toast.success("Davet Kabul Edildi");
      dispatch(getUserByID(user.uid));
    } catch (error) {
      console.log(error);
    }
  };

  const cancelInvite = async (notification) => {
    try {
      const userRef = doc(db, "users", user.uid);

      const deleteNotification = user.notifications.filter(
        (noti) => noti.notificationID !== notification.notificationID
      );

      await updateDoc(userRef, {
        notifications: deleteNotification,
      });

      toast.success("Davet Reddedildi.");
      dispatch(getUserByID(user.uid));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden">
      <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5 flex gap-x-2 items-center">
        <TbBell />
        Bildirimlerim
      </h1>
      <div className=" container mx-auto rounded-xl grid grid-cols-2 gap-4">
        {user.notifications.length > 0 ? (
          user.notifications.map((notification) => (
            <div key={notification.notificationID} className="rounded-xl">
              <div className="border flex  gap-2 p-3 rounded-md bg-white ">
                {" "}
                <div className="flex gap-x-3 w-full justify-between items-center">
                  <div className="relative flex gap-x-2 items-center">
                    <img
                      src={notification.fromPhoto}
                      className="w-14 h-full rounded-md"
                    />
                    <span className="absolute -top-0.5 -left-0.5 border bg-red-500 rounded-full w-3 h-3"></span>
                    <div className="flex flex-col ">
                      <span className="text-zinc-700 text-sm ">
                        <strong> {notification.fromName}</strong> size bir davet
                        gönderdi
                      </span>{" "}
                      <span className="text-xs text-zinc-500">
                        {moment(
                          notification.notificationDate,
                          "DD.MM.YYYY HH:mm"
                        )
                          .locale("tr")
                          .fromNow()}
                      </span>
                      <div className="flex gap-x-2 items-center">
                        <span className="px-3 py-0.5 rounded-md border bg-neutral-100 border-neutral-300 text-xs flex items-center gap-x-1">
                          <TbUserScan />
                          {notification.fromAge}
                        </span>
                        <span className="px-3 py-0.5 rounded-md border bg-neutral-100 border-neutral-300 text-xs flex items-center gap-x-1">
                          <TbShoe />
                          {notification.fromFoot}
                        </span>
                        <span className="px-3 py-0.5 rounded-md border bg-neutral-100 border-neutral-300 text-xs flex items-center gap-x-1">
                          <TbCurrentLocation />
                          {notification.fromPosition}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-y-2 text-xs">
                    <button
                      onClick={() => confirmInvite(notification)}
                      className="flex items-center w-full gap-x-1 bg-primary text-green-100 px-4 py-1 rounded-md"
                    >
                      <FiCheck /> Daveti Kabul Et
                    </button>
                    <button
                      onClick={() => cancelInvite(notification)}
                      className="flex items-center w-full gap-x-1 bg-red-300 text-red-700 px-4 py-1 rounded-md"
                    >
                      <FcCancel /> Daveti Reddet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Henüz bildiriminiz bulunmamaktadır.</div>
        )}
      </div>
    </div>
  );
};

export default MyNotifications;
