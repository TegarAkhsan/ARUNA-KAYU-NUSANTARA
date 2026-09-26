import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCard {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: TestimonialCard[] = [
  {
    id: "andi",
    quote: "Proses konsultasinya sangat membantu. Furniture yang dibuat benar-benar sesuai dengan desain interior rumah kami. Kayu jati solidnya terasa mantap, dan finishing mattenya sangat mewah.",
    author: "Andi Pratama",
    role: "Residential Client — Surabaya",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "nusantara",
    quote: "ARUNA sangat komunikatif dan mampu menyelesaikan kebutuhan furniture kantor kami sesuai timeline. Meja conference 12-seater dan workstation staf sangat rapi dengan cable ducting cerdas.",
    author: "Ir. Hendra Gunawan",
    role: "Corporate Director — PT Nusantara Digital",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "claudia",
    quote: "Sebagai arsitek, menemukan vendor fabrikasi kayu yang memahami gambar kerja 3D kami adalah hal yang langka. ARUNA selalu memenuhi standar toleransi millimeter yang kami tentukan.",
    author: "Claudia Setiawan, IAI",
    role: "Principal Architect & Interior Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "bambang",
    quote: "Furniture loose untuk 8 unit villa kami di Batu tahan cuaca sejuk dan tidak ada masalah berderit sama sekali. After sales support mereka datang langsung saat kami butuh adjustment minor.",
    author: "Bambang Sudiro",
    role: "Hospitality Owner — Villa Amerta Batu",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from Reference: 'What Our Clients Say About Working With Us' */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C59B6D] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B6D]" />
            <span>Client Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight mb-4">
            What Our Clients Say <br />
            About Working With Us
          </h2>
          <p className="text-xs sm:text-sm text-[#191816]/70 leading-relaxed">
            Pengalaman nyata pemilik hunian, arsitek, dan klien korporat yang mempercayakan kebutuhan furniture mereka kepada ARUNA Living.
          </p>
        </div>

        {/* 4 Cards Grid with Circular Avatar like Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#E7E2DA] hover:border-[#C59B6D]/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-[#C59B6D]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#C59B6D]/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#191816]/80 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author with Circular Avatar like Reference */}
              <div className="pt-5 border-t border-[#E7E2DA] flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#E7E2DA]"
                  loading="lazy"
                />
                <div>
                  <div className="font-serif text-sm font-bold text-[#191816]">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-[#C59B6D] font-medium leading-tight">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
