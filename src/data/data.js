import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialMedia = [
  { id: 1, icon: FaInstagram, link: "https://www.instagram.com" },
  { id: 2, icon: FaLinkedin, link: "https://www.linkedin.com" },
  { id: 3, icon: FaXTwitter, link: "https://www.twitter.com" },
  { id: 4, icon: FaFacebook, link: "https://www.facebook.com" },
];

export const footerLinkOne = [
  { id: 1, text: "Hakkımızda", href: "/about" },
  { id: 2, text: "İletişim", href: "/contact" },
  { id: 3, text: "Erken Erişim", href: "/beta" },
  { id: 4, text: "Hizmetler", href: "/services" },
];

export const footerLinkTwo = [
  { id: 1, text: "Gizlilik Politikası", href: "#" },
  { id: 2, text: "Çerez Politikası", href: "#" },
  { id: 3, text: "Kişisel Verilerin Korunması", href: "#" },
  { id: 4, text: "Kullanım Koşulları", href: "#" },
];

export const footerAddress = {
  address: "Adres 123.Sk No:2 Bla Bla Bla İzmir/Türkiye",
  phone: "+90 555 444 33 22",
  buttonLabel: "Mesaj Gönder",
};

export const contactInputs = [
  {
    id: 1,
    name: "name",
    label: "İsim Soyisim",
    type: "text",
    placeholder: "İsim giriniz..",
  },
  {
    id: 2,
    name: "email",
    label: "E-posta",
    type: "email",
    placeholder: "E-Mail giriniz..",
  },
  {
    id: 3,
    name: "title",
    type: "text",
    label: "Başlık",
    placeholder: "Konu Başlığı giriniz..",
  },
  {
    id: 4,
    label: "İçerik",
    name: "content",
    type: "text",
    placeholder: "İçerik giriniz..",
  },
];

export const navbarLinks = [
  { id: 1, title: "Hakkımızda", to: "/about" },
  { id: 2, title: "Hizmetler", to: "/services" },
  { id: 3, title: "İletişim", to: "/contact" },
];
