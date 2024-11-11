import React from "react";
import Typewriter from "typewriter-effect";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center relative overflow-hidden">
      <div className="w-full z-10 flex items-start justify-start flex-col">
        <div className="w-full h-full flex justify-start items-center flex-col gap-12">
          <Link
            to="/beta"
            className="px-4 shadow-2xl hover:bg-primary hover:text-white transition-colors duration-200 shadow-primary font-black text-sm py-2 rounded-full bg-primary/10 border-2 border-primary text-primary flex items-center gap-x-2"
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
          <Link
            to="/auth/register"
            className="px-24 py-2 rounded-full bg-white text-primary font-bold drop-shadow-3xl"
          >
            Başla!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
