import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';

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
            const duration = 1600;
            const steps = 35;
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

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Bento Grid (Exact Style from Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-24">
          
          {/* Left Large Architectural Photo with Custom Cutout */}
          <div className="lg:col-span-5 relative rounded-[2.5rem] rounded-tl-[4.5rem] overflow-hidden shadow-xl border border-[#E7E2DA] min-h-[420px] bg-[#F3EFEA]">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
              alt="ARUNA Living Architectonic Living Room"
              className="w-full h-full object-cover object-center"
            />
            {/* Top-Right Location Tag */}
            <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-[#191816]/70 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#C59B6D]" />
              <span>Surabaya, Jawa Timur</span>
            </div>
          </div>

          {/* Right 2x2 Bento Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: 10+ Years */}
            <div className="bg-white rounded-3xl p-8 border border-[#E7E2DA] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#191816] tracking-tight mb-2">
                  {counts[0]}<span className="text-[#C59B6D]">+</span>
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#191816]/60">
                  Years of Experience
                </div>
                <p className="text-xs text-[#191816]/70 mt-3 leading-relaxed">
                  Pengalaman terbukti dalam fabrikasi furniture kayu jati solid untuk hunian dan proyek komersial.
                </p>
              </div>
              <div className="pt-6 flex justify-end">
                <a
                  href="#about"
                  className="w-10 h-10 rounded-full bg-[#191816] hover:bg-[#C59B6D] text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Pelajari pengalaman ARUNA"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: 500+ Tailored Projects */}
            <div className="bg-white rounded-3xl p-8 border border-[#E7E2DA] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#191816] tracking-tight mb-2">
                  {counts[1]}<span className="text-[#C59B6D]">+</span>
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#191816]/60">
                  Tailored Design Projects
                </div>
                <p className="text-xs text-[#191816]/70 mt-3 leading-relaxed">
                  Ratusan proyek villa, hotel, kantor, cafe, dan residential diselesaikan dengan presisi.
                </p>
              </div>
              <div className="pt-6 flex justify-end">
                <a
                  href="#projects"
                  className="w-10 h-10 rounded-full bg-[#191816] hover:bg-[#C59B6D] text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Lihat portofolio proyek"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3: 1,200+ Happy Clients */}
            <div className="bg-white rounded-3xl p-8 border border-[#E7E2DA] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#191816] tracking-tight mb-2">
                  {counts[2]}<span className="text-[#C59B6D]">+</span>
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#191816]/60">
                  Happy Clients &amp; Partners
                </div>
                <p className="text-xs text-[#191816]/70 mt-3 leading-relaxed">
                  Dipercaya arsitek, desainer interior ternama, serta pemilik rumah di seluruh Indonesia.
                </p>
              </div>
              <div className="pt-6 flex justify-end">
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-[#191816] hover:bg-[#C59B6D] text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Hubungi kami"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 4: Dark Espresso Card with Button (Exact match from reference!) */}
            <div className="bg-[#1E1A17] text-white rounded-3xl p-8 border border-[#332C26] shadow-xl flex flex-col justify-between">
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#C59B6D] tracking-tight mb-2">
                  {counts[3]}<span className="text-white">+</span>
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-white/60">
                  Master Craftsmen &amp; Engineers
                </div>
                <p className="text-xs text-white/75 mt-3 leading-relaxed">
                  Didukung workshop mandiri berteknologi presisi dan tim quality control 3 tahap.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={getWhatsAppUrl("Halo ARUNA Living, saya ingin berkonsultasi mengenai furniture.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C59B6D] hover:bg-[#b0875b] text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
