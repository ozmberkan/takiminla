import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden">
      <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5">
        Hakkımızda
      </h1>
      <div className=" container mx-auto rounded-xl flex flex-col gap-4">
        <div className="flex flex-row gap-x-2 w-full">
          Takımınla olarak, sporseverleri bir araya getirerek dostluk ve
          rekabetin iç içe geçtiği bir platform sunuyoruz. Futbol tutkunlarının
          ortak bir noktada buluşup, en iyi deneyimi yaşayabilmeleri için
          çalışıyoruz. Maç düzenlemek, katılım sağlamak ve oyuncularla etkileşim
          kurmak hiç bu kadar kolay olmamıştı. İster hafta sonu bir araya gelen
          arkadaş grubunuz, ister sıkı bir futbol takımı olun, ihtiyaçlarınıza
          göre özelleştirilebilen bu platform, maç deneyiminizi en üst seviyeye
          taşıyor. Kullanıcılar, profil sayfalarında mevki, ayak tercihi, yaş,
          kilo ve boy gibi bilgileri paylaşarak kendilerini tanıtırken, maçların
          dinamiklerini daha iyi organize etmenize yardımcı oluyor. İster
          düzenli maçlar organize edin, ister maç arayan oyuncularla tanışın;
          "Takımınla", herkesin kendine uygun bir yer bulabileceği bir ortam
          oluşturmayı hedefliyor. Yenilikçi yapımız ve kullanıcı dostu
          arayüzümüz sayesinde hızlı ve sorunsuz bir deneyim sunarak, futbolun
          sadece sahada değil, sanal dünyada da dostluk ve dayanışmanın adresi
          olmasını sağlıyoruz. "Takımınla" ile takım ruhunu hissedin, yeni
          oyuncularla tanışın ve yeşil sahalarda daha fazla eğlence için bir
          adım atın! Sizinle birlikte, daha güçlü bir futbol topluluğu
          oluşturmak için buradayız.
        </div>
        <div className="mt-2">
          <Link
            to="/services"
            className="bg-primary text-sm text-white rounded-md px-4 py-2"
          >
            Hizmetlerimiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
