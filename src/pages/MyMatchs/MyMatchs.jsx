import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  TbBuildingStadium,
  TbLayoutDistributeHorizontal,
} from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import List from "~/components/List/List";
import Loading from "~/components/Loading/Loading";
import Match from "~/components/Match/Match";
import { getAllMatches } from "~/redux/slices/matchSlice";
import { getUsersTeams } from "~/redux/slices/teamsSlice";

const MyMatchs = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);

  const { myMatchs, status } = useSelector((store) => store.matches);

  useEffect(() => {
    dispatch(getAllMatches(user.uid));
  }, []);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden"
    >
      <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5 flex gap-x-2 items-center">
        <TbBuildingStadium />
        Maçlarım
      </h1>
      <div className=" container mx-auto rounded-xl grid grid-cols-2 gap-5">
        {myMatchs.map((match) => (
          <Match match={match} />
        ))}
      </div>
    </motion.div>
  );
};

export default MyMatchs;
