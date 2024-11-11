import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialMedia = [
  { id: 1, icon: FaInstagram, link: "https://www.instagram.com" },
  { id: 2, icon: FaLinkedin, link: "https://www.linkedin.com" },
  { id: 3, icon: FaXTwitter, link: "https://www.twitter.com" },
  { id: 4, icon: FaFacebook, link: "https://www.facebook.com" },
];

export const footerLinkOne = [
  { id: 1, text: "Hakkımızda", href: "#" },
  { id: 2, text: "İletişim", href: "#" },
  { id: 3, text: "Erken Erişim", href: "#" },
  { id: 4, text: "Hizmetler", href: "#" },
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
