import React from 'react';
import { ShieldCheck, Hammer, Handshake, Leaf, Award, MapPin } from 'lucide-react';
import { companyData } from '../data/company';

export const AboutUs: React.FC = () => {
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
    <section id="about" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52]">
              <Award className="w-4 h-4" />
              <span>About PT Aruna Kayu Nusantara</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1D] leading-tight">
              {companyData.aboutTitle}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#1F1F1D]/80 leading-relaxed font-normal">
              {companyData.aboutStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-[#1F1F1D]/70 font-medium">
              <MapPin className="w-4 h-4 text-[#A47C52]" />
              <span>Workshop &amp; Showroom: {companyData.address.full}</span>
            </div>
          </div>

          {/* Visual Editorial Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            <div className="col-span-7 aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[#E8E4DC] relative">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80"
                alt="Woodcrafting precision"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#1F1F1D]/80 backdrop-blur-md rounded-xl text-white text-xs">
                <span className="font-serif font-bold text-sm block">Kiln-Dried Timber</span>
                <span className="text-[10px] text-white/70">Kadar air terkontrol mencegah kayu melengkung</span>
              </div>
            </div>
            <div className="col-span-5 flex flex-col gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-md border border-[#E8E4DC]">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                  alt="Craftsman Handwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#E8E4DC] bg-[#1F1F1D] p-5 flex flex-col justify-between text-[#FAF9F5]">
                <div className="text-[10px] uppercase tracking-widest text-[#A47C52] font-semibold">Dedikasi</div>
                <div className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  10+ Tahun Menghidupkan Ruang
                </div>
                <div className="text-[10px] text-white/60">Surabaya • Jawa Timur</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values Detailed Cards from Brief */}
        <div className="pt-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A47C52] block mb-2">
              Our Foundations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1F1D]">
              Empat Nilai Utama Perusahaan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.values.map((v) => (
              <div
                key={v.id}
                className="p-8 rounded-2xl bg-white border border-[#E8E4DC] hover:border-[#A47C52] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#E8E4DC] group-hover:text-[#A47C52]">
                      {v.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F5F1EA] flex items-center justify-center">
                      {getIcon(v.icon)}
                    </div>
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-[#1F1F1D] mb-3">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1F1F1D]/75 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
