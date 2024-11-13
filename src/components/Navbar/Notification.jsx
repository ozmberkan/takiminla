import React from "react";
import { TbBell, TbUser } from "react-icons/tb";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const Notification = () => {
  return (
    <Menu>
      <MenuButton className="relative page-header w-9 h-9 flex justify-center items-center rounded-full text-sm bg-primary text-white font-medium border border-transparent hover:border-primary hover:bg-white hover:text-primary transition-colors duration-200">
        <TbBell size={20} />
        <span className="absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center bg-primaryDark text-white rounded-full">
          1
        </span>
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
          <MenuItem className="text-sm font-semibold data-[focus]:text-zinc-800 data-[focus]:bg-neutral-100 text-zinc-600 w-full py-3 rounded-xl flex gap-x-5 px-5 items-center">
            <div>
              <TbBell size={22} />
              Bir bildiriminiz var!
            </div>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Notification;
