import React from "react";
import { TbBell } from "react-icons/tb";

const MyNotifications = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden">
      <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5 flex gap-x-2 items-center">
        <TbBell />
        Bildirimlerim
      </h1>
      <div className="bg-white shadow-2xl container mx-auto rounded-xl p-12 flex flex-col gap-4">
        Bildirim.
      </div>
    </div>
  );
};

export default MyNotifications;
