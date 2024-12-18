import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "~/firebase/firebase";
import toast from "react-hot-toast";
import CreateTeamModal from "../UI/Modals/CreateTeamModal";

import Logo from "~/assets/logos/logotypedark.svg";
import Notification from "./Notification";
import ProfileDown from "./ProfileDown";
import { navbarLinks } from "~/data/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const [isCreateModal, setIsCreateModal] = useState(false);

  const exitHandle = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");

      toast.success("Çıkış yapıldı");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isCreateModal && (
        <CreateTeamModal setIsCreateModal={setIsCreateModal} user={user} />
      )}
      <div className="w-full py-5 flex justify-between items-center container  mx-auto ">
        <div className="flex gap-x-2 items-center ">
          <Link to="/" className="font-black text-xl text-primary">
            <img src={Logo} className="w-44" />
          </Link>
        </div>

        <div className="flex gap-x-5 justify-center items-center ">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="text-zinc-800 hover:text-zinc-500 font-medium"
            >
              {link.title}
            </Link>
          ))}
          {user && (
            <Link
              to="/team-list"
              className="text-zinc-800 hover:text-zinc-500 font-medium"
            >
              Takım İlanları
            </Link>
          )}
        </div>

        <div className="flex items-center justify-center">
          {user ? (
            <div className="flex items-center gap-x-3">
              <button
                onClick={() => setIsCreateModal(true)}
                className="min-w-32 page-header px-4 py-2 rounded-full text-sm bg-primary text-white font-medium border border-transparent hover:border-primary hover:bg-white hover:text-primary transition-colors duration-200"
              >
                Hızlı ilan ver
              </button>
              <Notification />
              <ProfileDown user={user} exitHandle={exitHandle} />
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="px-4 py-2 rounded-full text-sm bg-primary text-white font-medium border border-transparent hover:border-primary hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Oturum aç
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
