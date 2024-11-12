import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDoc, doc } from "firebase/firestore"; // Import Firestore functions
import { db } from "~/firebase/firebase"; // Ensure your Firebase setup is correctly imported

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { getUserByID } from "~/redux/slices/userSlice";

const Home = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user || user.isLoggedOn === true) return;

    const driverObj = driver({
      showProgress: true,
      animate: true,
      opacity: 0.75,
      doneBtnText: "Tamam",
      closeBtnText: "Kapat",
      nextBtnText: "İleri",
      prevBtnText: "Geri",
      onDestroyStarted: () => {
        if (!driverObj.hasNextStep() || confirm("Are you sure?")) {
          driverObj.destroy();
          updateDoc(doc(db, "users", user.uid), {
            isLoggedOn: true,
          });
          dispatch(getUserByID(user.uid));
        }
      },
      steps: [
        {
          element: ".page-header",
          popover: {
            title: "İlan Yönetimi",
            description: "Buradan ilan oluşturabilirsin.",
          },
        },
        {
          element: ".profile-btn",
          popover: {
            title: "Profil Yönetimi",
            description:
              "Profiline buradan ulaşabilir, bilgilerini güncelleyebilirsin.",
          },
        },
      ],
    });

    driverObj.drive();
  }, [user]);

  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center relative overflow-hidden">
      <div className="w-full z-10 flex items-start justify-start flex-col">
        <div className="w-full h-full flex justify-start items-center flex-col gap-12">
          {!user && (
            <Link
              to="/beta"
              className="px-4 shadow-2xl hover:bg-primary hover:text-white transition-colors duration-200 shadow-primary font-black text-sm py-2 rounded-full bg-primary/10 border-2 border-primary text-primary flex items-center gap-x-2"
            >
              Erken Erişim <TbCircleArrowRightFilled size={25} />
            </Link>
          )}
          <span className="text-primary drop-shadow-3xl text-[100px] font-black tracking-tighter leading-tight ">
            {user ? (
              <div>
                Hoş geldin <br />
                {user.displayName ? <div>{user.displayName}</div> : "Kullanıcı"}
              </div>
            ) : (
              <Typewriter
                options={{
                  strings: [
                    "Takımında eksik mi var?",
                    "Takımını şimdi oluştur!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </span>

          <span className="w-1/2 text-center text-base text-zinc-700 font-medium">
            {user
              ? "Profiline giderek bilgilerini tamamlayabilir, takıma katılabilir veya takımını oluşturabilirsin."
              : `Takımınızı bir araya getirmek hiç bu kadar kolay olmamıştı. Güçlü
            bir ekip kurarak oyununuzu bir üst seviyeye taşıyın. Katılmak
            isteyenlere kapınızı açın, rekabeti hissedin ve yeni zaferlere imza
            atın. Oyunun tadını çıkarırken ekibinizi desteklemenin ve birlikte
            kazanmanın keyfini yaşayın!`}
          </span>
          {user ? (
            <Link
              to="/my-account"
              className="profile-btn px-24 py-2 rounded-full bg-white text-primary font-bold drop-shadow-3xl"
            >
              Profilim
            </Link>
          ) : (
            <Link
              to="/auth/register"
              className="px-24 py-2 rounded-full bg-white text-primary font-bold drop-shadow-3xl"
            >
              Başla!
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
