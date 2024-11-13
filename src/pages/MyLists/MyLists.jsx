import { motion } from "framer-motion";
import { useEffect } from "react";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/Loading/Loading";
import { getUsersTeams } from "~/redux/slices/teamsSlice";

const MyLists = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);

  const { myTeams, status } = useSelector((store) => store.teams);

  useEffect(() => {
    dispatch(getUsersTeams(user.uid));
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
        <TbLayoutDistributeHorizontal />
        İlanlarım
      </h1>
      <div className="bg-white shadow-2xl container mx-auto rounded-xl p-12 flex flex-col gap-4">
        {myTeams.map((team) => (
          <div key={team.teamID}>{team.city}</div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyLists;
