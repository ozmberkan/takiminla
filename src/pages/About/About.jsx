import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex justify-center items-start mt-24 relative overflow-hidden">
      <div className="bg-white shadow-2xl h-[500px] w-2/3 rounded-xl p-12 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-primary ">Hakkımızda</h1>
        <p className="text-lg text-zinc-700">
          "Takımınla" olarak, sporseverleri bir araya getirerek dostluk ve
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
        </p>
        <div className="mt-3">
          {" "}
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
