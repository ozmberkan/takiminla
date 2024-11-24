import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import Ball from "~/assets/soccerballwhite.svg";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

import { getUserByID } from "~/redux/slices/userSlice";
import { motion } from "framer-motion";

const Home = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const text = "Hoş geldin".split(" ");

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
    <div className="bg-mainBg bg-no-repeat bg-bottom bg-cover h-[850px] flex justify-center items-center relative overflow-hidden ">
      <motion.div
        initial={{ translateY: 100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className="absolute -bottom-16"
      >
        <img src={Ball} className="w-44 object-cover drop-shadow-4xl " />
      </motion.div>

      <div className=" w-full flex items-center justify-center h-[400px] container mx-auto z-20">
        <div className=" w-full h-full py-12 flex flex-col justify-center items-center gap-3">
          <h1 className="text-[100px] font-black tracking-tighter text-primaryDark ">
            {user
              ? user.displayName
                ? user.displayName
                : "Kullanıcı"
              : text.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
          </h1>
          <p className="text-zinc-800 w-1/2 font-medium text-center">
            Halısaha maçlarınızı kolayca organize edin ve arkadaşlarınızla
            keyifli vakit geçirin. Eğer bir takımınız yoksa, takım arayanlar ile
            bir araya gelerek yeni bir takım oluşturabilirsiniz. Hemen başlamak
            için ücretsiz kayıt olun. Şehrinizdeki maçları keşfedin ve katılın.
          </p>
          <div>
            {user ? (
              <Link
                to="/my-account"
                className=" profile-btn font-semibold inline-flex px-8 py-1 rounded-full bg-white text-primaryDark text-sm mt-3 hover:bg-primaryDark hover:text-white transition-colors duration-300"
              >
                Profilim
              </Link>
            ) : (
              <Link
                to="/auth/register"
                className=" inline-flex font-semibold px-8 py-1 rounded-full bg-white text-primaryDark text-sm mt-3 hover:bg-primaryDark hover:text-white transition-colors duration-300"
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
