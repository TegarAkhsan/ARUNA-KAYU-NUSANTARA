import React from 'react';
import { Star, Quote, Building2, Home } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F1EA]/60 border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] block mb-3">
            Voices of Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1D] mb-4">
            Testimoni Klien Kami
          </h2>
          <p className="text-xs sm:text-sm text-[#1F1F1D]/70 leading-relaxed">
            Pengalaman nyata pemilik hunian, arsitek, dan klien korporat yang mempercayakan kebutuhan furniture mereka kepada ARUNA Living.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#E8E4DC] hover:border-[#A47C52]/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 text-[#A47C52]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#A47C52]/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#1F1F1D]/80 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Profile */}
              <div className="pt-4 border-t border-[#E8E4DC]">
                <div className="font-serif text-sm font-bold text-[#1F1F1D]">
                  {item.author}
                </div>
                <div className="text-[11px] text-[#A47C52] font-semibold mt-0.5">
                  {item.role}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#1F1F1D]/50 mt-1">
                  {item.projectType === 'Residential' ? (
                    <Home className="w-3 h-3 text-[#A47C52]" />
                  ) : (
                    <Building2 className="w-3 h-3 text-[#A47C52]" />
                  )}
                  <span>{item.city} • {item.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
