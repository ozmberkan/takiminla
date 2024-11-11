import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex justify-center items-start mt-24 relative overflow-hidden">
      <div className="bg-white shadow-2xl  w-2/3 rounded-xl p-12 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-primary ">İletişim</h1>
        <div className="flex items-start justify-start gap-x-5 w-full">
          <form className="grid grid-cols-1 gap-5 w-1/2">
            <input
              type="text"
              placeholder="İsim giriniz.."
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <input
              type="email"
              placeholder="E-Mail giriniz.."
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Konu Başlığı giriniz.."
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <textarea
              type="text"
              placeholder="İçerik giriniz.."
              className="px-4 py-2 min-h-44 max-h-44 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-4 py-2 rounded-md bg-primary text-white">
              Gönder
            </button>
          </form>
          <div className="w-1/2 flex flex-col gap-3">
            <h1 className="text-2xl text-primary font-semibold mb-3">
              İletişim Adresleri
            </h1>
            <div className="flex flex-col gap-5">
              <div className="flex gap-x-1 items-center">
                <span className="pr-2 border-r mr-2">
                  <FaAddressBook className="text-primary text-2xl" />
                </span>{" "}
                Adres 123.Sk No:2 Bla Bla Bla İzmir/Türkiye
              </div>
              <span className="flex gap-x-1 items-center">
                <span className="pr-2 border-r mr-2">
                  <TbPhoneCall className="text-primary text-2xl" />
                </span>{" "}
                +90 555 444 33 22
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
