import React from "react";
import { Link } from "react-router-dom";

const Beta = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden">
      <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5">
        Erken Erişim
      </h1>
      <div className="container mx-auto rounded-xl flex flex-col gap-4">
        <p className="mt-1">
          <strong className="text-primary">Takımınla</strong> platformuna erken
          erişim fırsatıyla, sporseverlere ilk kullanıcılar arasında yer alma ve
          uygulamanın gelişim sürecine katkıda bulunma imkanı tanıyoruz. Erken
          erişim sürümünde, platformun temel özelliklerini deneyimleyebilir, maç
          düzenleme ve oyuncu bulma gibi hizmetleri test edebilirsiniz.
          Kullanıcı geri bildirimleriniz, platformumuzu geliştirmemize ve
          sizlere en iyi futbol deneyimini sunmamıza yardımcı olacak.
        </p>
        <p className="mt-2">
          Erken erişime katılarak, futbol topluluğumuzun bir parçası olun ve bu
          yolculuğa bizimle birlikte başlayın.{" "}
          <strong className="text-primary">Takımınla</strong> ile futbolun
          heyecanını ilk deneyimleyenlerden biri olun ve her maçı unutulmaz
          kılın!
        </p>
        <div className="mt-2">
          <Link
            to="/contact"
            className="bg-primary text-sm text-white rounded-md px-4 py-2 border border-transparent hover:bg-white hover:text-primary hover:border-primary transition-colors "
          >
            Geri bildirimde bulun
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Beta;
