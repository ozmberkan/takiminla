import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "~/assets/avatar.jpg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  TbBell,
  TbChevronDown,
  TbLogout,
  TbMailStar,
  TbMoon,
  TbNotification,
  TbSettings,
  TbUser,
} from "react-icons/tb";
import { PiShootingStar } from "react-icons/pi";
import { Transition } from "@headlessui/react"; // Import Transition component
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase/firebase";
import toast from "react-hot-toast";
import CreateTeamModal from "../UI/Modals/CreateTeamModal";

import LogoWhite from "~/assets/logos/logodark.svg";

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
      <div className="w-full py-5 flex justify-between items-center container drop-shadow-2xl mx-auto ">
        <div className=" flex gap-x-2 items-center">
          <Link to="/" className="font-black text-xl text-primary">
            <img src={LogoWhite} className="w-56" />
            {/* <span>Takımınla </span> */}
          </Link>
          <span className="text-xs uppercase font-bold px-2 py-1 rounded-full bg-primary/10 border border-primary text-primary">
            beta
          </span>
        </div>

        <div className="flex gap-x-5 flex-1 justify-center items-center">
          <Link
            to="/about"
            className="text-zinc-800 hover:text-zinc-500 font-semibold"
          >
            Hakkımızda
          </Link>
          <Link
            to="/services"
            className="text-zinc-800 hover:text-zinc-500 font-semibold"
          >
            Hizmetler
          </Link>
          <Link
            to="/contact"
            className="text-zinc-800 hover:text-zinc-500 font-semibold"
          >
            İletişim
          </Link>
        </div>

        <div className="flex items-center w-44">
          {user && (
            <div className="flex items-center gap-x-3">
              <button
                onClick={() => setIsCreateModal(true)}
                className="min-w-32 page-header px-4 py-2 rounded-full text-sm bg-primary text-white font-semibold border border-transparent hover:border-primary hover:bg-white hover:text-primary transition-colors duration-200"
              >
                İlan ver
              </button>
              <button className="relative page-header w-9 h-9 flex justify-center items-center rounded-full text-sm bg-primary text-white font-medium border border-transparent hover:border-primary hover:bg-white hover:text-primary transition-colors duration-200">
                <TbBell size={20} />
                <span className="absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center bg-primaryDark text-white rounded-full">
                  1
                </span>
              </button>
              <Menu>
                <MenuButton>
                  <img
                    className="rounded-full max-w-9 hover:ring-2 transition-all duration-300 drop-shadow-xl ring-primary ring-offset-2 flex object-cover"
                    src={user.photoURL ? user.photoURL : Avatar}
                  />
                </MenuButton>
                <Transition
                  enter="transition-opacity duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <MenuItems
                    anchor="bottom end"
                    className="mt-2 bg-white rounded-3xl p-3 gap-x-2 transition-all duration-500  shadow-md border border-zinc-200/50 flex items-start justify-start flex-col "
                  >
                    <MenuItem>
                      <Link
                        className="text-sm font-semibold data-[focus]:text-zinc-800 data-[focus]:bg-neutral-100 text-zinc-600 w-full py-3 rounded-xl flex gap-x-5 px-5 items-center"
                        to="/my-account"
                      >
                        <span className="text-zinc-600 font-semibold">
                          <TbUser size={22} />
                        </span>
                        Profilim
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        className="text-sm font-semibold data-[focus]:text-zinc-800 data-[focus]:bg-neutral-100 text-zinc-600 w-full py-3 rounded-xl flex gap-x-5 px-5 items-center"
                        to="/my-account"
                      >
                        <span className="text-zinc-600">
                          <PiShootingStar size={22} />
                        </span>
                        Hesabınızı yönetin
                      </Link>
                    </MenuItem>

                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton className="text-sm font-semibold hover:text-zinc-800 hover:bg-neutral-100 text-zinc-600 w-full py-3 rounded-xl flex gap-x-5 px-5 items-center">
                            <span className="text-zinc-600">
                              <TbSettings size={22} />
                            </span>
                            Ayarlarım{" "}
                            <TbChevronDown
                              className={`${
                                open
                                  ? "transform rotate-180 transition-all duration-500"
                                  : "transition-all duration-500"
                              }`}
                              size={19}
                            />
                          </DisclosureButton>
                          <Transition
                            show={open}
                            enter="transition duration-200 ease-out"
                            enterFrom="transform scale-y-0 opacity-0"
                            enterTo="transform scale-y-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-y-100 opacity-100"
                            leaveTo="transform scale-y-0 opacity-0"
                          >
                            <DisclosurePanel className="text-gray-500 w-full  mt-2 flex flex-col gap-2 origin-top transition duration-200 ease-out">
                              <button className="text-sm font-semibold hover:bg-[#202020] hover:text-white bg-neutral-100 text-zinc-600 w-full rounded-md flex gap-x-2 px-5 py-2 items-center">
                                <TbMoon /> Karanlık Mod
                              </button>
                            </DisclosurePanel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                    <hr className="h-px w-full bg-neutral-500 my-3" />
                    <MenuItem>
                      <button
                        className="text-sm font-semibold text-red-800 data-[focus]:bg-red-100  w-full py-3 rounded-xl flex gap-x-5 px-5 items-center"
                        onClick={exitHandle}
                      >
                        <span className=" text-red-800">
                          <TbLogout size={22} />
                        </span>
                        Çıkış Yap
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          )}
          {!user && (
            <Link
              to="/auth/login"
              className="px-4  py-2 rounded-full text-sm bg-primary text-white font-semibold"
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
