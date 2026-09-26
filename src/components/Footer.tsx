import React from 'react';
import { ArrowUp, ArrowRight, MessageCircle } from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const consultationWaMessage = "Halo ARUNA Living, saya tertarik memulai konsultasi furniture custom.";

  return (
    <footer className="bg-[#191816] text-[#FAF8F5] pt-12 pb-12 overflow-hidden border-t border-[#2A2724]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Studio CTA Banner with Atmospheric Interior Background (Exact Style from Reference) */}
        <div className="relative rounded-[2.5rem] border border-white/15 p-10 sm:p-16 lg:p-20 overflow-hidden mb-20 text-center bg-[#191816] shadow-2xl">
          
          {/* Background Interior Image with Cinematic Moody Vignette Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
              alt="ARUNA Living Studio Atmosphere"
              className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.1] scale-102"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85';
              }}
            />
            {/* Soft gradient to keep typography crisp & warm */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/95 via-[#191816]/70 to-[#191816]/85" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Start Your Interior &amp; <br />
              <span className="text-[#C59B6D] italic font-normal">Furniture Transformation</span>
            </h2>

            <p className="text-xs sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
              Hubungi konsultan kami untuk mendiskusikan kebutuhan furniture custom, survey denah, dan penawaran harga.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl(consultationWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C59B6D] hover:bg-[#b0875b] text-white rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Lihat Alamat Showroom</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C59B6D] flex items-center justify-center text-white font-serif font-bold text-base tracking-widest shadow-sm">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.18em] font-bold text-white uppercase leading-tight">
                  {companyData.brand}
                </span>
                <span className="text-[10px] tracking-[0.25em] font-medium text-[#C59B6D] uppercase">
                  {companyData.name}
                </span>
              </div>
            </div>

            <p className="text-sm font-serif italic text-[#C59B6D] pt-1">
              "{companyData.tagline}"
            </p>

            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              Workshop &amp; Showroom furniture custom berbasis kayu solid Jawa Timur untuk hunian privat, hospitality resort, dan proyek komersial.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C59B6D] mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#about" className="hover:text-[#C59B6D] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#C59B6D] transition-colors">
                  Products Collection
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-[#C59B6D] transition-colors">
                  Custom Process
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C59B6D] transition-colors">
                  Portfolio Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C59B6D] transition-colors">
                  Contact &amp; Showroom
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C59B6D] mb-4">
              Hubungi Kami
            </h4>
            <div className="space-y-2 text-xs text-white/70">
              <p>{companyData.address.full}</p>
              <p>
                <a
                  href={getWhatsAppUrl("Halo ARUNA Living, saya ingin berkonsultasi.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C59B6D] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C59B6D]" />
                  <span>{companyData.contact.phone}</span>
                </a>
              </p>
              <p>
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#C59B6D] transition-colors">
                  {companyData.contact.email}
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href={companyData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C59B6D] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C59B6D] flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-8 rounded-full bg-white/10 hover:bg-[#C59B6D] flex items-center justify-center text-[10px] font-bold uppercase transition-colors text-white"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 ARUNA Living. All Rights Reserved. • PT Aruna Kayu Nusantara
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#C59B6D]">
              Surabaya, East Java
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-[#C59B6D] text-white transition-colors"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
