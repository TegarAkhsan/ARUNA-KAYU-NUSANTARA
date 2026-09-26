import React from 'react';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';

export const CustomFurniture: React.FC = () => {
  const customWaMessage = "Halo ARUNA Living, saya ingin berkonsultasi mengenai custom furniture.";

  return (
    <section id="custom" className="py-24 sm:py-32 bg-[#191816] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Inspired by Reference: 'How We Turn Vision Into Well-Designed Spaces') */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C59B6D] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B6D]" />
            <span>The Custom Process</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            How We Turn Vision Into <br />
            <span className="text-[#C59B6D] italic font-normal">Well-Crafted Spaces</span>
          </h2>
          <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed max-w-2xl mx-auto">
            Punya desain atau denah sendiri? Kami mewujudkannya menjadi furniture presisi yang sesuai dengan kebutuhan ruang dan karakter estetika Anda.
          </p>
        </div>

        {/* 5-Step Process Cards (Exact Style from Reference: 1st card caramel gold, rest white/dark) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
          {companyData.customProcess.map((proc, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={proc.step}
                className={`rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between ${
                  isFirst
                    ? 'bg-[#C59B6D] text-[#191816] shadow-xl'
                    : 'bg-white text-[#191816] border border-[#E7E2DA] shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className={`font-mono text-2xl font-bold ${isFirst ? 'text-[#191816]' : 'text-[#C59B6D]'}`}>
                      {proc.step}
                    </span>
                    <span className={`text-[10px] uppercase tracking-widest font-mono font-medium ${isFirst ? 'text-[#191816]/60' : 'text-[#191816]/40'}`}>
                      Phase
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold mb-3 leading-snug">
                    {proc.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${isFirst ? 'text-[#191816]/80' : 'text-[#191816]/70'}`}>
                    {proc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Breakdown & Interactive Box */}
        <div className="bg-[#FAF8F5] text-[#191816] rounded-3xl p-8 sm:p-12 border border-[#E7E2DA] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C59B6D]">
              Keahlian Spesialisasi Custom
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#191816]">
              Dari Loose Furniture hingga Built-in Full Ruangan
            </h3>
            <p className="text-xs sm:text-sm text-[#191816]/75 leading-relaxed">
              Kami melayani kitchen set, custom wardrobe plafon, meja rapat eksekutif, wall paneling bilah jati, hingga kursi lepas dengan seleksi kain linen premium dan kulit asli. Dilengkapi estimasi anggaran transparan dan survei lokasi untuk Jawa Timur &amp; kota besar lainnya.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                "Kitchen Set & Island",
                "Built-in Wardrobe",
                "Custom Dining Table",
                "Wall Paneling & Kisi-kisi",
                "Executive Workstation",
                "Commercial Cafe Booths"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#191816]">
                  <Check className="w-3.5 h-3.5 text-[#C59B6D] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#F3EFEA] rounded-2xl border border-[#E7E2DA] text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#191816] text-white flex items-center justify-center shadow-sm">
              <MessageCircle className="w-6 h-6 text-[#C59B6D]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#191816]">
                Mulai Konsultasi Custom
              </h4>
              <p className="text-xs text-[#191816]/65 mt-1">
                Kirim foto ruangan &amp; referensi desain Anda via WhatsApp.
              </p>
            </div>
            <a
              href={getWhatsAppUrl(customWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#191816] hover:bg-[#C59B6D] text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Konsultasi Custom</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
