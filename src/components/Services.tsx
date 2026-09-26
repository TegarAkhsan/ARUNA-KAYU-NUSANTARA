import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F5F1EA]/50 border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] block mb-3">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1D] mb-4">
            Layanan &amp; Solusi Interior
          </h2>
          <p className="text-xs sm:text-sm text-[#1F1F1D]/75 leading-relaxed">
            Menghubungkan craftsmanship kayu Indonesia dengan tuntutan desain modern untuk hunian pribadi hingga kebutuhan komersial skala besar.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {companyData.services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E4DC] hover:border-[#A47C52] transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4DC]">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1D]/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>

                <div className="p-7">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1F1D] mb-3 group-hover:text-[#A47C52] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1F1F1D]/75 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="space-y-2 border-t border-[#E8E4DC] pt-4">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#A47C52] block mb-2">
                      Cakupan Pengerjaan:
                    </span>
                    {svc.scope.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1F1F1D]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A47C52] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <a
                  href={getWhatsAppUrl(`Halo ARUNA Living, saya tertarik berkonsultasi mengenai layanan ${svc.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 bg-[#FAF9F5] hover:bg-[#1F1F1D] text-[#1F1F1D] hover:text-[#FAF9F5] border border-[#E8E4DC] rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>Konsultasi Layanan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
