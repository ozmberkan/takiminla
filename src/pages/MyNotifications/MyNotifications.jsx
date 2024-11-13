import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import toast from "react-hot-toast";
import { TbBell } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { db } from "~/firebase/firebase";
import { getUserByID } from "~/redux/slices/userSlice";

const MyNotifications = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const confirmInvite = async (notification) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const teamsRef = doc(db, "teams", notification.teamID);

      const deleteNotification = user.notifications.filter(
        (noti) => noti.notificationID !== notification.notificationID
      );

      await updateDoc(userRef, {
        notifications: deleteNotification,
      });

      await deleteDoc(teamsRef);

      toast.success("Davet Kabul Edildi");
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
      <div className="bg-white shadow-2xl container mx-auto rounded-xl p-12 flex flex-col gap-4">
        {user.notifications.length > 0 ? (
          user.notifications.map((notification) => (
            <div
              key={notification.notificationID}
              className="px-4 py-2 rounded-md bg-zinc-50 border flex justify-between items-center"
            >
              <div className="border flex flex-col gap-2 px-5 py-2 rounded-md bg-white">
                {" "}
                <div className="flex items-center gap-x-3 pb-2 border-b">
                  <img
                    src={notification.fromPhoto}
                    className="w-10 h-10 rounded-md"
                  />
                  <span className="text-zinc-700 font-semibold">
                    {notification.fromName}
                  </span>{" "}
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <span className="text-zinc-700 bg-zinc-50 border rounded-md flex justify-center items-center">
                    {notification.fromAge}
                  </span>{" "}
                  <span className="text-zinc-700 bg-zinc-50 border rounded-md flex justify-center items-center">
                    {notification.fromFoot}
                  </span>{" "}
                  <span className="text-zinc-700 bg-zinc-50 border rounded-md flex justify-center items-center">
                    {notification.fromPosition}
                  </span>
                </div>
              </div>
              <div className="flex gap-x-3 items-center">
                <button
                  onClick={() => confirmInvite(notification)}
                  className="px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary text-sm"
                >
                  Kabul Et
                </button>
                <button className="px-3 py-1 rounded-md bg-red-600/10 text-red-600 border border-red-600 text-sm">
                  Reddet
                </button>
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
