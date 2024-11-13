import React from "react";
import Avatar from "~/assets/avatar.jpg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  TbBell,
  TbChevronDown,
  TbLayoutDistributeHorizontal,
  TbListDetails,
  TbLogout,
  TbMailStar,
  TbMoon,
  TbNotification,
  TbSettings,
  TbUser,
} from "react-icons/tb";
import { Transition } from "@headlessui/react"; // Import Transition component
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Link } from "react-router-dom";

const ProfileDown = ({ user, exitHandle }) => {
  return (
    <Menu>
      <MenuButton>
        <img
          className="rounded-full w-10 h-10 hover:ring-2 transition-all duration-300 drop-shadow-xl ring-primary ring-offset-2 flex object-cover"
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
          className="mt-2 bg-white z-50 rounded-3xl p-3 gap-x-2 transition-all duration-500  shadow-md border border-zinc-200/50 flex items-start justify-start flex-col "
        >
          <MenuItem>
            <Link
              className="text-sm font-semibold data-[focus]:text-zinc-800 data-[focus]:bg-neutral-100 text-zinc-600 w-full py-3 rounded-xl flex gap-x-5 px-5 items-center"
              to="/my-account"
            >
              <span className="text-zinc-600">
                <TbUser size={22} />
              </span>
              Profilim
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="text-sm font-semibold data-[focus]:text-zinc-800 data-[focus]:bg-neutral-100 text-zinc-600 w-full py-3 rounded-xl flex gap-x-5 px-5 items-center"
              to="/my-lists"
            >
              <span className="text-zinc-600">
                <TbLayoutDistributeHorizontal size={22} />
              </span>
              İlanlarım
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="text-sm font-semibold data-[focus]:text-zinc-800 data-[focus]:bg-neutral-100 text-zinc-600 w-full py-3 rounded-xl flex gap-x-5 px-5 items-center"
              to="/lists"
            >
              <span className="text-zinc-600">
                <TbListDetails size={22} />
              </span>
              Tüm İlanlar
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
  );
};

export default ProfileDown;
