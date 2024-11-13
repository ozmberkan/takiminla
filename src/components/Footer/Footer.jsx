import React from "react";
import { Link } from "react-router-dom";
import {
  footerAddress,
  footerLinkOne,
  footerLinkTwo,
  socialMedia,
} from "~/data/data";

import LogoWhite from "~/assets/logos/logotypedark.svg";
const Footer = () => {
  return (
    <div className="h-[300px] footer border-t w-full bg-white">
      <div className="w-full  h-full container mx-auto max-w-7xl grid grid-cols-4">
        <div className=" p-7 flex flex-col justify-between items-start">
          <div className="flex flex-col gap-3">
            <img src={LogoWhite} className="w-44" />
            <p className="text-sm text-zinc-700">
              Halısaha maçlarınızı kolayca organize edin ve arkadaşlarınızla
              keyifli vakit geçirin. Eğer bir takımınız yoksa, takım arayanlar
              ile bir araya gelerek yeni bir takım oluşturabilirsiniz.
            </p>
          </div>
          <div className="flex gap-x-4 items-center text-2xl ">
            {socialMedia.map((icon) => (
              <icon.icon
                key={icon.id}
                size={25}
                className="hover:scale-125 hover:text-primary transform duration-200 cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className=" p-7 flex flex-col gap-10">
          <h1 className="text-base font-medium">Kurumsal</h1>
          <div className="flex flex-col gap-3">
            {footerLinkOne.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="text-zinc-700 text-sm hover:text-zinc-600"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className=" p-7 flex flex-col gap-10">
          <h1 className="text-base font-medium">Gizlilik ve Kullanım</h1>
          <div className="flex flex-col gap-3">
            {footerLinkTwo.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="text-zinc-700 text-sm hover:text-zinc-600"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className=" p-7 flex flex-col gap-10">
          <h1 className="text-base font-medium">Adres</h1>
          <div className="flex flex-col gap-3">
            <span className="text-zinc-700 text-sm">
              {footerAddress.address}
            </span>
            <Link
              href={`tel:${footerAddress.phone}`}
              className="text-zinc-700 hover:text-zinc-600 text-sm"
            >
              {footerAddress.phone}
            </Link>
            <Link
              to="/contact"
              className=" py-1 rounded-md bg-primary text-white mt-3 border border-transparent flex justify-center items-center hover:bg-white hover:border-primary hover:text-primary transition-colors duration-200"
            >
              {footerAddress.buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
