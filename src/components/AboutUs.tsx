import { ArrowRight, MapPin } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Row - Left Text, Right Architectural Cutout Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#191816]">
              <span className="w-2 h-2 rounded-full bg-[#C59B6D]" />
              <span>About Us</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#191816] leading-[1.08] tracking-tight">
              Design Rooted in <br />
              Craft, Materiality, <br />
              and <span className="text-[#C59B6D] italic font-normal">Longevity</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#191816]/75 leading-relaxed font-normal max-w-lg">
              <p>
                ARUNA Living berdiri dengan visi menghadirkan furniture yang tidak hanya memiliki nilai estetika tinggi, tetapi juga menjadi bagian hidup dari penggunanya dalam jangka panjang.
              </p>
              <p>
                Melalui perpaduan kayu jati solid pilihan Indonesia, sentuhan perajin berpengalaman, dan presisi mesin modern, kami mentransformasi rumah tinggal serta ruang komersial menjadi tempat yang hangat dan berkarakter.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#custom"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#191816] hover:bg-[#C59B6D] text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Notched Photo Frame from Reference */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-[2.5rem] rounded-br-[5rem] overflow-hidden shadow-2xl border border-[#E7E2DA] bg-[#F3EFEA]">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Interior Dining & Living Room Architecture"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Location Badge on Image */}
              <div className="absolute bottom-5 right-6 px-3 py-1.5 rounded-full bg-[#191816]/70 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#C59B6D]" />
                <span>Surabaya, Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Minimalist Partner / Standard Logos Strip (as seen in Reference) */}
        <div className="pt-8 pb-4 border-t border-[#E7E2DA]/80">
          <div className="flex flex-wrap items-center justify-between gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="font-serif font-bold text-lg tracking-wider text-[#191816]">PERHUTANI TEAK</div>
            <div className="font-sans font-bold text-sm tracking-widest uppercase text-[#191816]">KILN-DRIED TIMBER</div>
            <div className="font-serif font-semibold text-lg italic text-[#191816]">Blum Hardware</div>
            <div className="font-sans font-bold text-sm tracking-widest uppercase text-[#191816]">HETTICH GERMANY</div>
            <div className="font-serif font-bold text-base tracking-widest text-[#191816]">SUNBRELLA FABRIC</div>
          </div>
        </div>

      </div>
    </section>
  );
};
