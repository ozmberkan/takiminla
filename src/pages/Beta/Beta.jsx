import React from "react";
import { Link } from "react-router-dom";

const Beta = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex justify-center items-start mt-24 relative overflow-hidden">
      <div className="bg-white shadow-2xl h-[500px] w-2/3 rounded-xl p-12 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-primary ">Erken Erişim</h1>
        <p className="mt-1">
          <strong>Takımınla</strong> platformuna erken erişim fırsatıyla,
          sporseverlere ilk kullanıcılar arasında yer alma ve uygulamanın
          gelişim sürecine katkıda bulunma imkanı tanıyoruz. Erken erişim
          sürümünde, platformun temel özelliklerini deneyimleyebilir, maç
          düzenleme ve oyuncu bulma gibi hizmetleri test edebilirsiniz.
          Kullanıcı geri bildirimleriniz, platformumuzu geliştirmemize ve
          sizlere en iyi futbol deneyimini sunmamıza yardımcı olacak.
        </p>
        <p className="mt-2">
          Erken erişime katılarak, futbol topluluğumuzun bir parçası olun ve bu
          yolculuğa bizimle birlikte başlayın. <strong>Takımınla</strong> ile
          futbolun heyecanını ilk deneyimleyenlerden biri olun ve her maçı
          unutulmaz kılın!
        </p>
        <div className="mt-2">
          <Link
            to="/contact"
            className="px-4 py-2 rounded-md bg-primary text-white"
          >
            Geri bildirimde bulun
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Beta;
