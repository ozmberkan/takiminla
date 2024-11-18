import React from "react";

const Services = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden">
      <h1 className="container mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5">
        Hizmetlerimiz
      </h1>
      <div className=" container mx-auto rounded-xl flex flex-col gap-4">
        <ul className="text-base text-zinc-700 flex flex-col gap-3">
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
      </div>
    </div>
  );
};

export default Services;
