import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle, Award, Sparkles, Clock, Hammer, HeartHandshake } from 'lucide-react';
import { companyData } from '../data/company';

export const WhyChooseUs: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          companyData.stats.forEach((stat, index) => {
            const target = stat.numeric;
            const duration = 1800; // ms
            const steps = 40;
            const stepTime = duration / steps;
            let current = 0;
            const increment = target / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = Math.floor(current);
                return updated;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Clock className="w-5 h-5 text-[#A47C52]" />;
      case 1:
        return <Hammer className="w-5 h-5 text-[#A47C52]" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-[#A47C52]" />;
      case 3:
        return <Award className="w-5 h-5 text-[#A47C52]" />;
      case 4:
        return <HeartHandshake className="w-5 h-5 text-[#A47C52]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#A47C52]" />;
    }
  };

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Stats Banner from Brief */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1F1F1D] text-[#FAF9F5] mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#A47C52]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {companyData.stats.map((st, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-serif text-3xl sm:text-5xl font-bold text-[#FAF9F5] tracking-tight">
                  {counts[idx]}
                  <span className="text-[#A47C52]">{st.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm text-[#FAF9F5]/70 uppercase tracking-wider font-medium">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] block mb-3">
            Excellence &amp; Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1D] mb-4">
            Why ARUNA Living?
          </h2>
          <p className="text-xs sm:text-sm text-[#1F1F1D]/70 leading-relaxed">
            Komitmen kami terhadap mutu material, presisi produksi, dan kepuasan Anda dalam setiap jengkal ruang.
          </p>
        </div>

        {/* 5 Points Grid from Brief */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {companyData.whyChooseUs.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#E8E4DC] hover:border-[#A47C52] transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F1EA] flex items-center justify-center mb-6 group-hover:bg-[#1F1F1D] group-hover:text-white transition-colors">
                  {getPillarIcon(idx)}
                </div>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-[#A47C52] mb-1">
                  {item.highlight}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1F1F1D] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-[#1F1F1D]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
