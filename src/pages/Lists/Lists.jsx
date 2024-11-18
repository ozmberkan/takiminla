import { motion } from "framer-motion";
import { useEffect } from "react";
import { TbListDetails } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import AllList from "~/components/AllList/AllList";
import Loading from "~/components/Loading/Loading";
import { getAllTeams } from "~/redux/slices/teamsSlice";

const Lists = () => {
  const dispatch = useDispatch();

  const { teams, status } = useSelector((store) => store.teams);

  useEffect(() => {
    dispatch(getAllTeams());
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
        <TbListDetails />
        Takım İlanları
      </h1>
      <div className="container mx-auto rounded-xl  grid grid-cols-2 gap-4">
        {teams.length > 0 ? (
          teams.map((team) => <AllList key={team.teamID} team={team} />)
        ) : (
          <div className=" col-span-2 bg-red-50 px-4 py-2 rounded-md border border-red-600 text-red-600">
            Henüz herhangi bir ilan oluşturulmamış.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Lists;
