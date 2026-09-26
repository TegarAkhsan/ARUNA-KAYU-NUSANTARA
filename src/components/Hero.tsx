import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const heroWaMessage = "Halo ARUNA Living, saya tertarik berkonsultasi mengenai furniture setelah melihat website Anda.";

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Ambience with Editorial Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="ARUNA Living Interior Craftsmanship"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02] transform scale-105 animate-pulse duration-1000"
          style={{ animationDuration: '8s' }}
        />
        {/* Soft Warm Gradients to ensure text readability & editorial warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-[#FAF9F5]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline Content */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Top Sub-tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1F1F1D]/5 border border-[#1F1F1D]/10 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A47C52] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#A47C52]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1F1F1D]">
                PT Aruna Kayu Nusantara • Surabaya
              </span>
            </div>

            {/* Main Headline from Brief */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#1F1F1D] leading-[1.08] mb-6">
              Crafting Spaces, <br />
              <span className="italic font-normal text-[#A47C52]">Creating Stories.</span>
            </h1>

            {/* Subheadline from Brief */}
            <p className="text-base sm:text-xl text-[#1F1F1D]/75 font-normal leading-relaxed max-w-2xl mb-10">
              {companyData.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="px-8 py-4 bg-[#1F1F1D] text-[#FAF9F5] rounded-full text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-[#A47C52] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Collection</span>
                <ArrowDown className="w-4 h-4 text-[#A47C52] group-hover:text-white group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={getWhatsAppUrl(heroWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FAF9F5]/90 border border-[#1F1F1D]/20 text-[#1F1F1D] rounded-full text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-[#1F1F1D] hover:text-[#FAF9F5] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm group"
              >
                <MessageCircle className="w-4 h-4 text-[#A47C52] group-hover:text-[#FAF9F5]" />
                <span>Konsultasi Sekarang</span>
              </a>
            </div>

            {/* Key Assurance Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-[#1F1F1D]/10 max-w-lg">
              <div>
                <div className="font-serif text-2xl font-bold text-[#1F1F1D]">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-[#1F1F1D]/60 mt-0.5">Solid Teak Wood</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#1F1F1D]">Custom</div>
                <div className="text-[11px] uppercase tracking-wider text-[#1F1F1D]/60 mt-0.5">Bespoke Sizing</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#1F1F1D]">B2C &amp; B2B</div>
                <div className="text-[11px] uppercase tracking-wider text-[#1F1F1D]/60 mt-0.5">Residential &amp; Project</div>
              </div>
            </div>
          </div>

          {/* Floating Editorial Feature Tag on Right */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="p-6 bg-[#FAF9F5]/90 backdrop-blur-md rounded-2xl border border-[#E8E4DC] shadow-xl max-w-xs space-y-4">
              <div className="w-full h-44 rounded-lg overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1580481077195-c3a82da912c3?auto=format&fit=crop&w=600&q=80"
                  alt="Oslo Lounge Chair Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#1F1F1D] text-[#FAF9F5] text-[10px] tracking-widest uppercase rounded">
                  Featured
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A47C52] font-semibold">Living Room Collection</div>
                <h4 className="font-serif text-lg font-medium text-[#1F1F1D]">Oslo Lounge Chair</h4>
                <p className="text-xs text-[#1F1F1D]/65 mt-1 line-clamp-2">
                  Scandinavian shape with Indonesian solid wood craftsmanship.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
