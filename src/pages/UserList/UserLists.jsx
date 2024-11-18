import { motion } from "framer-motion";
import { useEffect } from "react";
import { TbUsers } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import UserListBox from "~/components/List/UserListBox";
import Loading from "~/components/Loading/Loading";
import { getAllUserList } from "~/redux/slices/userListSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { userList, status } = useSelector((store) => store.userList);

  useEffect(() => {
    dispatch(getAllUserList(user.uid));
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
        <TbUsers />
        Oyuncu İlanları
      </h1>
      <div className="container mx-auto  grid grid-cols-2 gap-4">
        {userList.map((userL, i) => (
          <UserListBox key={i} userL={userL} />
        ))}
      </div>
    </motion.div>
  );
};

export default UserList;
