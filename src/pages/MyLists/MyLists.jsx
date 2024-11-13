import { motion } from "framer-motion";
import { useEffect } from "react";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import List from "~/components/List/List";
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
      <div className="bg-white shadow-2xl container mx-auto rounded-xl p-12 grid grid-cols-2 gap-5">
        {myTeams.length > 0 ? (
          myTeams.map((team) => <List key={team.teamID} team={team} />)
        ) : (
          <div className="col-span-2 bg-red-50 px-4 py-2 rounded-md border border-red-600 text-red-600">
            Henüz herhangi bir ilan oluşturmadınız.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MyLists;
