import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

import Soccer from "~/assets/soccer.svg";
import DashBoard from "~/assets/artboard.png";
import { getUserByID } from "~/redux/slices/userSlice";
import { motion } from "framer-motion";

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
        if (!driverObj.hasNextStep()) {
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
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-[850px] flex justify-start items-start relative overflow-hidden">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src={Soccer}
        className="absolute w-[1200px] -bottom-60 right-0 drop-shadow-4xl z-10"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src={DashBoard}
        className="absolute w-[1200px] -bottom-60 left-0 drop-shadow-4xl z-0 -rotate-12"
      />
      <div className=" w-full flex items-start justify-start h-[400px] container mx-auto z-20">
        <div className=" w-1/2 h-full py-12 flex flex-col gap-3">
          <h1 className="text-[80px] font-black text-primary ">
            {user
              ? user.displayName
                ? user.displayName
                : "Kullanıcı"
              : "Hoş geldin"}
          </h1>
          <p className="text-zinc-600 font-medium">
            Halısaha maçlarınızı kolayca organize edin ve arkadaşlarınızla
            keyifli vakit geçirin. Eğer bir takımınız yoksa, takım arayanlar ile
            bir araya gelerek yeni bir takım oluşturabilirsiniz. Hemen başlamak
            için ücretsiz kayıt olun. Şehrinizdeki maçları keşfedin ve katılın.
          </p>
          <div>
            {user ? (
              <Link
                to="/my-account"
                className=" profile-btn font-semibold inline-flex px-8 py-1 rounded-full bg-primary text-white text-sm mt-3"
              >
                Profilim
              </Link>
            ) : (
              <Link
                to="/auth/register"
                className=" inline-flex font-semibold px-8 py-1 rounded-full bg-primary text-white text-sm mt-3"
              >
                Hemen Başla
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
