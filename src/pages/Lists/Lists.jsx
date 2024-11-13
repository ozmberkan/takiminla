import React, { useEffect } from "react";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeams } from "~/redux/slices/teamsSlice";

const Lists = () => {
  const dispatch = useDispatch();

  const { teams } = useSelector((store) => store.teams);

  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  console.log(teams);

  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden">
      <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5 flex gap-x-2 items-center">
        <TbLayoutDistributeHorizontal />
        İlanlarım
      </h1>
      <div className="bg-white shadow-2xl container mx-auto rounded-xl p-12 flex flex-col gap-4">
        {teams.map((team) => (
          <div key={team.teamID}>{team.city}</div>
        ))}
      </div>
    </div>
  );
};

export default Lists;
