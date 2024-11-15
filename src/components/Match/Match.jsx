import React from "react";
import { TbLocation } from "react-icons/tb";

const Match = ({ match }) => {
  return (
    <div className="bg-zinc-100 rounded-md border p-3 flex flex-col gap-2">
      <div className="w-full py-2 px-5 bg-white rounded-md flex justify-between items-center">
        <h1 className="text-primary flex gap-x-1">
          {" "}
          <div>{match.city} şehrinde</div>
          {match.address} adresinde maçınız var.
        </h1>
        <div className="text-primary flex gap-x-1 items-center">
          <span className="pr-2 mr-2 border-r">
            <TbLocation />
          </span>
          {match.date}
        </div>
      </div>
    </div>
  );
};

export default Match;
