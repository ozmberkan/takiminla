import React from "react";

const Services = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex justify-center items-start mt-24 relative overflow-hidden">
      <div className="bg-white shadow-2xl h-[500px] w-2/3 rounded-xl p-12 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-primary ">Hizmetler</h1>
        <ul className="text-base text-zinc-700">
          <li>
            <strong>Maç Düzenleme</strong>: Kolayca kendi maçınızı organize edin
            ve diğer kullanıcılara davet gönderin. Maç bilgilerinizi, tarih ve
            saat ayarlarınızı hızlıca belirleyin.
          </li>
          <li>
            <strong>Oyuncu Bulma ve Katılım</strong>: Belirli bir maça oyuncu
            eksikliğiniz mi var? İlgili kriterlerdeki oyuncuları platform
            üzerinden hızlıca bulun ve takıma katılmalarını sağlayın.
          </li>
          <li>
            <strong>Profil Özelleştirme</strong>: Kendi profilinizi oluşturun,
            mevki, ayak tercihi, yaş, kilo ve boy gibi bilgilerinizi ekleyerek
            diğer kullanıcılara tanıtın.
          </li>
          <li>
            <strong>Gelişmiş Arama ve Filtreleme</strong>: Maçlar ve oyuncular
            arasında kriterlere göre arama yapın ve en uygun maçlara katılma
            fırsatı yakalayın.
          </li>
          <li>
            <strong>Kullanıcı Yorumları ve Derecelendirme</strong>: Oynadığınız
            maçlar için değerlendirme yapın, diğer kullanıcıların performansını
            derecelendirin ve güvenilir bir topluluk oluşturulmasına katkı
            sağlayın.
          </li>
          <li>
            <strong>Bildirim ve Takvim Entegrasyonu</strong>: Maçlarınızı
            hatırlatmak ve organizasyonu daha da kolaylaştırmak için anlık
            bildirim ve takvim entegrasyonu ile planlarınızın kontrolünü
            elinizde tutun.
          </li>
        </ul>
        <p className="mt-1">
          Bu hizmetler, kullanıcılarımızın futbol sevgisini daha iyi bir şekilde
          yaşamalarına, yeni insanlarla tanışmalarına ve kaliteli bir futbol
          deneyimi elde etmelerine olanak tanır. <strong>Takımınla</strong>{" "}
          platformuyla futbolun heyecanını yeniden keşfedin ve her maçı
          unutulmaz kılın!
        </p>
      </div>
    </div>
  );
};

export default Services;
