import React, { useState } from "react";
import {
  TbArrowBigLeftFilled,
  TbArrowBigRightFilled,
  TbCircleCheck,
  TbUserEdit,
  TbWeight,
  TbLock,
  TbShoe,
  TbPhone,
  TbArrowBigLeft,
  TbArrowLeftSquare,
} from "react-icons/tb";
import { MdHeight } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Ball from "~/assets/soccerball.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    foot: "",
    position: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (currentStep < 3) {
        setCurrentStep((prev) => prev + 1);
      } else {
        console.log(formData);
      }
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.form
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
            onKeyDown={handleKeyDown}
          >
            <div className="w-full rounded-xl bg-white flex items-center justify-start gap-x-2 px-4 border ">
              <label className="p-2 rounded-full bg-primary text-white">
                <FaEnvelope size={18} />
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-Posta Adresini Gir..."
                className="w-full p-4 outline-none"
              />
            </div>
            <div className="w-full rounded-xl bg-white flex items-center justify-start gap-x-2 px-4 border ">
              <label className="p-2 rounded-full bg-primary text-white">
                <TbLock size={18} />
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Parolanı gir..."
                className="w-full p-4 outline-none"
              />
            </div>
          </motion.form>
        );
      case 2:
        return (
          <motion.form
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
            onKeyDown={handleKeyDown}
          >
            <div className="w-full rounded-xl bg-white flex items-center justify-start gap-x-2 px-4 border ">
              <label className="p-2 rounded-full bg-primary text-white">
                <TbUserEdit size={18} />
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adın soyadın nedir?"
                className="w-full p-4 outline-none rounded-full"
              />
            </div>
            <div className="w-full rounded-xl bg-white flex items-center justify-start gap-x-2 px-4 border ">
              <label className="p-2 rounded-full bg-primary text-white">
                <TbUserEdit size={18} />
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Kaç yaşındasın?"
                className="w-full p-4 outline-none rounded-full"
              />
            </div>
            <div className="w-full rounded-xl bg-white flex items-center justify-start gap-x-2 px-4 border ">
              <label className="p-2 rounded-full bg-primary text-white">
                <TbPhone size={18} />
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon numaranı gir..."
                className="w-full p-4 outline-none rounded-full"
              />
            </div>
          </motion.form>
        );
      case 3:
        return (
          <motion.form
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
            onKeyDown={handleKeyDown}
          >
            <div className="w-full rounded-xl bg-white flex items-center justify-start gap-x-2 px-4 border ">
              <label className="p-2 rounded-full bg-primary text-white">
                <TbShoe size={18} />
              </label>
              <select
                name="foot"
                value={formData.foot}
                onChange={handleChange}
                className="w-full p-4 outline-none rounded-full"
              >
                <option value="">Ayak yönünü seç...</option>
                <option value="left">Sol</option>
                <option value="right">Sağ</option>
                <option value="both">Hepsi</option>
              </select>
            </div>
            <div className="w-full rounded-xl bg-white flex items-center justify-start gap-x-2 px-4 border ">
              <label className="p-2 rounded-full bg-primary text-white">
                <GrLocation size={18} />
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-4 outline-none rounded-full"
              >
                <option value="">Mevki seç</option>
                <option value="forvet">Forvet</option>
                <option value="defans">Defans</option>
                <option value="kanat">Kanat</option>
                <option value="ortasaha">Orta Saha</option>
                <option value="kaleci">Kaleci</option>
              </select>
            </div>
            <div className="w-full rounded-xl bg-white flex items-center justify-start gap-x-2 px-4 border ">
              <label className="p-2 rounded-full bg-primary text-white">
                <MdHeight size={18} />
              </label>
              <input
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Boyunu gir...(170)"
                className="w-full p-4 outline-none rounded-full"
              />
            </div>
            <div className="w-full rounded-xl bg-white flex items-center justify-start gap-x-2 px-4 border ">
              <label className="p-2 rounded-full bg-primary text-white">
                <TbWeight size={18} />
              </label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Kilonu gir...(75)"
                className="w-full p-4 outline-none rounded-full"
              />
            </div>
          </motion.form>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5 relative ">
      <Link
        to="/"
        className="absolute top-5 left-5 bg-white text-primary p-2 rounded-full"
      >
        <TbArrowBigLeft />
      </Link>
      <motion.img
        initial={{ rotate: 100, x: -400 }}
        animate={{ rotate: 0, x: -120 }}
        transition={{ duration: 0.7 }}
        src={Ball}
        className="w-[1000px] absolute -left-48 opacity-15 -bottom-64 z-0"
      />
      <div className="flex justify-start items-center gap-1 text-white w-1/2 z-10">
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl">
            Selam, Takımınla'ya hoş geldin!
          </h1>
          <p className="text-sm">
            Hadi başlayalım, senin hakkında birkaç bilgi alalım.
          </p>
        </div>
      </div>
      <div className="flex flex-col  w-1/2 bg-white p-5 drop-shadow-4xl rounded-md gap-7 z-10 border ">
        <div>{renderFormStep()}</div>
        <div className="flex gap-x-3 items-center justify-end w-full ">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            disabled={currentStep === 1}
            className="rounded-full flex justify-center items-center bg-primary text-white w-12 h-12"
          >
            <TbArrowBigLeftFilled size={30} />
          </button>
          {currentStep < 3 ? (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              className="rounded-full flex justify-center items-center bg-primary text-white w-12 h-12"
            >
              <TbArrowBigRightFilled size={30} />
            </button>
          ) : (
            <button
              onClick={() => console.log(formData)}
              className="rounded-full flex justify-center items-center bg-primary text-white  px-4 py-2"
            >
              <TbCircleCheck size={30} /> Tamamla
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
