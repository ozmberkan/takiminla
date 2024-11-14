import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  TbLayoutDistributeHorizontal,
  TbUser,
  TbUsers,
  TbUsersGroup,
} from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import List from "~/components/List/List";
import Loading from "~/components/Loading/Loading";
import CreateTeamModal from "~/components/UI/Modals/CreateTeamModal";
import CreateUserListModal from "~/components/UI/Modals/User/CreateUserListModal";
import { getUsersTeams } from "~/redux/slices/teamsSlice";

const MyLists = () => {
  const dispatch = useDispatch();
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isCreateUserModal, setIsCreateUserModal] = useState(false);
  const { user } = useSelector((store) => store.user);

  const { myTeams, status } = useSelector((store) => store.teams);

  useEffect(() => {
    dispatch(getUsersTeams(user.uid));
  }, []);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      {isCreateModal && (
        <CreateTeamModal setIsCreateModal={setIsCreateModal} user={user} />
      )}
      {isCreateUserModal && (
        <CreateUserListModal
          setIsCreateUserModal={setIsCreateUserModal}
          user={user}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden"
      >
        <h1 className="container  justify-between mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5  flex items-center">
          <span className="flex gap-x-2 items-center">
            <TbLayoutDistributeHorizontal />
            İlanlarım
          </span>
          <div className="flex gap-x-2">
            <button
              onClick={() => setIsCreateModal(true)}
              className="px-4 py-2 rounded-md text-sm  bg-primary text-white flex gap-x-2 items-center border border-transparent hover:border-primary hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <TbUsersGroup />
              Oyuncu Arıyorum
            </button>
            <button
              onClick={() => setIsCreateUserModal(true)}
              className="px-4 py-2 rounded-md text-sm  bg-primary text-white flex gap-x-2 items-center border border-transparent hover:border-primary hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <TbUser />
              Takım Arıyorum
            </button>
          </div>
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
    </>
  );
};

export default MyLists;
