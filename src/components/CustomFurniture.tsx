import React from 'react';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';

export const CustomFurniture: React.FC = () => {
  const customWaMessage = "Halo ARUNA Living, saya ingin berkonsultasi mengenai custom furniture.";

  return (
    <section id="custom" className="py-24 sm:py-32 bg-[#1F1F1D] text-[#FAF9F5] relative overflow-hidden">
      {/* Subtle wood texture or warm accent blur background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A47C52]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A47C52]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header from Brief */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] block mb-3">
            Bespoke Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight mb-6">
            Your Space. Your Furniture.
          </h2>
          <p className="text-base sm:text-lg text-[#FAF9F5]/75 font-normal leading-relaxed">
            Punya desain sendiri? Kami membantu mewujudkannya menjadi furniture yang sesuai dengan kebutuhan ruang Anda.
          </p>
        </div>

        {/* 5-Step Process Timeline from Brief */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative mb-16">
          {companyData.customProcess.map((proc, index) => (
            <div
              key={proc.step}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#A47C52]/60 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[#A47C52]">
                    {proc.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#A47C52]/40 group-hover:bg-[#A47C52] transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs text-[#FAF9F5]/70 leading-relaxed">
                  {proc.description}
                </p>
              </div>

              {index < 4 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#A47C52]/50">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Custom Scope Breakdown & Interactive Box */}
        <div className="bg-[#FAF9F5] text-[#1F1F1D] rounded-2xl p-8 sm:p-12 border border-[#E8E4DC] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A47C52]">
              Keahlian Spesialisasi Custom
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Dari Loose Furniture hingga Built-in Full Ruangan
            </h3>
            <p className="text-xs sm:text-sm text-[#1F1F1D]/75 leading-relaxed">
              Kami melayani kitchen set, custom wardrobe plafon, meja rapat eksekutif, wall paneling bilah jati, hingga loose chair dengan pemilihan kain impor dan kulit asli. Didukung estimasi anggaran transparan dan survei lokasi untuk area Jawa Timur.
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
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#1F1F1D]">
                  <Check className="w-3.5 h-3.5 text-[#A47C52] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#F5F1EA] rounded-xl border border-[#E8E4DC] text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#1F1F1D] text-white flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#F5F1EA]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#1F1F1D]">
                Mulai Konsultasi Custom
              </h4>
              <p className="text-xs text-[#1F1F1D]/65 mt-1">
                Kirim foto ruangan &amp; referensi desain Anda via WhatsApp.
              </p>
            </div>
            <a
              href={getWhatsAppUrl(customWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#1F1F1D] hover:bg-[#A47C52] text-[#FAF9F5] rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2"
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
