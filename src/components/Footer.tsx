import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F1F1D] text-[#FAF9F5] pt-20 pb-12 border-t border-[#333330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#A47C52] flex items-center justify-center text-white font-serif font-bold text-lg tracking-widest">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.2em] font-semibold text-white uppercase leading-tight">
                  {companyData.brand}
                </span>
                <span className="text-[10px] tracking-[0.3em] font-medium text-[#A47C52] uppercase">
                  {companyData.name}
                </span>
              </div>
            </div>

            <p className="text-sm font-serif italic text-[#A47C52] pt-1">
              "{companyData.tagline}"
            </p>

            <p className="text-xs text-[#FAF9F5]/70 max-w-sm leading-relaxed">
              Solusi furniture berkualitas tinggi berbasis kayu solid nusantara untuk hunian privat, hospitality, dan korporat komersial.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A47C52] mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF9F5]/80">
              <li>
                <a href="#about" className="hover:text-[#A47C52] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#A47C52] transition-colors">
                  Products Collection
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-[#A47C52] transition-colors">
                  Custom Furniture
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#A47C52] transition-colors">
                  Portfolio Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#A47C52] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A47C52] transition-colors">
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A47C52] mb-4">
              Hubungi Kami
            </h4>
            <div className="space-y-2 text-xs text-[#FAF9F5]/80">
              <p>Surabaya, Jawa Timur — Indonesia</p>
              <p>
                <a
                  href={getWhatsAppUrl("Halo ARUNA Living, saya ingin berkonsultasi.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A47C52] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#A47C52]" />
                  <span>{companyData.contact.phone}</span>
                </a>
              </p>
              <p>
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#A47C52] transition-colors">
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
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#A47C52] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#A47C52] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href={companyData.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-8 rounded-full bg-white/10 hover:bg-[#A47C52] flex items-center justify-center text-[11px] font-semibold transition-colors"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar from Brief */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F5]/50">
          <div>
            © 2026 ARUNA Living. All Rights Reserved. • PT Aruna Kayu Nusantara
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#A47C52]">
              Surabaya, East Java
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
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
