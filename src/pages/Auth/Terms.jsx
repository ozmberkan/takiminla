import React from "react";
import { Link } from "react-router-dom";
import Logo from "~/assets/logos/logotypedark.svg";

const Terms = () => {
  return (
    <div className="flex flex-col justify-start gap-12 items-center p-8 min-h-screen bg-white">
      <div className="w-full flex items-center justify-between">
        <Link to="/">
          <img src={Logo} className="w-44" />
        </Link>
        <Link
          to="/auth/register"
          className=" bg-primary text-white px-4 py-1 rounded-md"
        >
          Kayıt ol
        </Link>
      </div>

      {/* Terms Section */}
      <div className="w-full  flex-grow flex flex-col gap-1">
        <div className="flex flex-col gap-1 pb-3 border-b">
          <h1 className="text-2xl font-bold text-left text-primary ">
            Hizmet şartları
          </h1>
          <p className="text-sm">
            Bu kullanım koşulları, Takımınla platformunun (bundan sonra
            "Platform") kullanımına ilişkin kuralları belirler. Platformu
            kullanarak, aşağıdaki şartları ve koşulları kabul etmiş
            sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen Platformu
            kullanmayınız.
          </p>
        </div>
        <div className="text-gray-700 text-sm space-y-2 ">
          <h2 className="font-semibold text-lg text-gray-800">
            1. Hizmet Tanımı
          </h2>
          <p>
            Takımınla, kullanıcıların halı saha maçları organize etmelerini,
            diğer maçlara katılmalarını ve oyuncular arasında iletişim
            kurmalarını sağlayan bir platformdur.
          </p>

          <h2 className="font-semibold text-lg text-gray-800">
            2. Kullanıcı Hesapları
          </h2>
          <p>
            Platforma kayıt olmak için doğru, eksiksiz ve güncel bilgiler
            sağlamanız gerekmektedir. Hesap bilgilerinizin güvenliği sizin
            sorumluluğunuzdadır.
          </p>

          <h2 className="font-semibold text-lg text-gray-800">
            3. Platform Kullanımı
          </h2>
          <p>
            Platformu yalnızca kişisel ve yasal amaçlarla kullanabilirsiniz.
            Yanıltıcı, tehditkar veya müstehcen içerik paylaşmanız yasaktır.
          </p>

          <h2 className="font-semibold text-lg text-gray-800">
            4. Ücretli Hizmetler
          </h2>
          <p>
            Takımınla, ücretsiz ve ücretli hizmetler sunabilir. Ücretli
            hizmetlere erişmek için belirtilen ödeme koşullarını kabul
            etmelisiniz.
          </p>

          <h2 className="font-semibold text-lg text-gray-800">
            5. Sorumluluk Reddi
          </h2>
          <p>
            Takımınla, kullanıcılar arasında organize edilen maçlarda
            yaşanabilecek olumsuz durumlardan (ör. yaralanmalar, anlaşmazlıklar)
            sorumlu değildir.
          </p>

          <h2 className="font-semibold text-lg text-gray-800">6. Gizlilik</h2>
          <p>
            Kişisel bilgileriniz, Gizlilik Politikası'na uygun şekilde işlenir
            ve korunur.
          </p>

          <h2 className="font-semibold text-lg text-gray-800">
            7. Fikri Mülkiyet Hakları
          </h2>
          <p>
            Platformdaki tüm içerik, tasarımlar ve yazılımlar Takımınla'ya veya
            lisans sağlayıcılarına aittir.
          </p>

          <h2 className="font-semibold text-lg text-gray-800">
            8. Hesap Kapatma
          </h2>
          <p>
            Kendi isteğinizle hesabınızı kapatabilirsiniz. Takımınla, Kullanım
            Koşulları'nın ihlali durumunda hesabınızı kapatma hakkını saklı
            tutar.
          </p>

          <h2 className="font-semibold text-lg text-gray-800">
            9. Değişiklikler
          </h2>
          <p>
            Takımınla, bu kullanım koşullarını dilediği zaman değiştirme hakkını
            saklı tutar.
          </p>

          <h2 className="font-semibold text-lg text-gray-800">10. İletişim</h2>
          <p>
            Sorularınız için bizimle iletişime geçebilirsiniz:
            <br />
            <span className="text-primary">
              <b className="text-zinc-600">E-posta:</b>{" "}
              <a href="mailto:destek@takiminla.com">destek@takiminla.com</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
