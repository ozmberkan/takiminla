import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const FooterLinkSection = ({ title, links }) => (
  <div className="lg:mx-auto text-left">
    <h4 className="text-lg text-gray-900 font-medium mb-7">{title}</h4>
    <ul className="text-sm transition-all duration-500">
      {links.map((link, index) => (
        <li key={index} className="mb-6 last:mb-0">
          <a href={link.href} className="text-gray-600 hover:text-gray-900">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerLinks = [
    {
      title: "Takımınla",
      links: [
        { text: "Anasayfa", href: "#" },
        { text: "Hakkımızda", href: "#" },
        { text: "Ödemeler", href: "#" },
        { text: "Yenilikler", href: "#" },
      ],
    },
    {
      title: "Kaynaklar",
      links: [
        { text: "Sıkça Sorulan Sorular", href: "#" },
        { text: "Hızlı Başlangıç", href: "#" },
        { text: "Dokümantasyon", href: "#" },
        { text: "Kullanıcı Kılavuzu", href: "#" },
      ],
    },
    {
      title: "Blog",
      links: [
        { text: "Haberler", href: "#" },
        { text: "Yeni Güncellemeler", href: "#" },
        { text: "Aktiviteler", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link className="flex justify-center lg:justify-start text-xl font-semibold text-primary">
              Takımınla
            </Link>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              Kolayca takımını oluştur ve işbirliği yapmaya başla.
            </p>
          </div>
          {footerLinks.map((section, index) => (
            <FooterLinkSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500">
              ©<span>Takımınla</span> 2024, Tüm hakları saklıdır.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="rounded-full p-2 bg-primary text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
