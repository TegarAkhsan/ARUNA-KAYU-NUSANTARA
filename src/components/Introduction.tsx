import React from 'react';
import { ArrowRight, ShieldCheck, Hammer, Handshake, Leaf } from 'lucide-react';
import { companyData } from '../data/company';

interface IntroductionProps {
  onAboutClick: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onAboutClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#A47C52]" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-[#A47C52]" />;
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-[#A47C52]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#A47C52]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#A47C52]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F5F1EA]/60 border-y border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] block mb-3">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1D] leading-tight">
              {companyData.introHeading}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-[#1F1F1D]/80 font-normal leading-relaxed">
              {companyData.introDescription}
            </p>
            <div>
              <button
                type="button"
                onClick={onAboutClick}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#1F1F1D] hover:text-[#A47C52] transition-colors group cursor-pointer"
              >
                <span>Tentang Kami</span>
                <ArrowRight className="w-4 h-4 text-[#A47C52] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {companyData.values.map((val) => (
            <div
              key={val.id}
              className="bg-[#FAF9F5] p-7 rounded-xl border border-[#E8E4DC] hover:border-[#A47C52]/50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F5F1EA] flex items-center justify-center group-hover:bg-[#1F1F1D] group-hover:text-white transition-colors">
                  {getIcon(val.icon)}
                </div>
                <span className="font-serif text-xs font-semibold tracking-widest text-[#A47C52]/70">
                  {val.number}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1F1F1D] mb-2">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1F1F1D]/70 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
