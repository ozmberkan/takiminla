import React from "react";
import Typewriter from "typewriter-effect";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover flex-grow flex justify-center items-center relative overflow-hidden">
      <div className="w-full z-10 flex items-start justify-start flex-col">
        <div className="w-full h-full flex justify-start items-center flex-col gap-12">
          <Link
            to="/beta"
            className="px-6 shadow-2xl hover:bg-green-500 hover:text-white transition-colors duration-200 shadow-green-500 font-black text-sm py-2 rounded-full bg-green-100 border border-green-500 text-green-500 flex items-center gap-x-4"
          >
            Erken Erişim <TbCircleArrowRightFilled size={25} />
          </Link>
          <span className="text-primary drop-shadow-3xl text-[100px] font-black">
            <Typewriter
              options={{
                strings: ["Takımında eksik mi var?", "Takımını şimdi oluştur!"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>

          <span className="w-1/2 text-center text-base text-zinc-700 font-medium">
            Takımınızı bir araya getirmek hiç bu kadar kolay olmamıştı. Güçlü
            bir ekip kurarak oyununuzu bir üst seviyeye taşıyın. Katılmak
            isteyenlere kapınızı açın, rekabeti hissedin ve yeni zaferlere imza
            atın. Oyunun tadını çıkarırken ekibinizi desteklemenin ve birlikte
            kazanmanın keyfini yaşayın!
          </span>
          <button className="px-24 py-2 rounded-full bg-white text-primary font-bold drop-shadow-3xl">
            Başla!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
