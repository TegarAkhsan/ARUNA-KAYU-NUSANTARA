import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const heroWaMessage = "Halo ARUNA Living, saya tertarik berkonsultasi mengenai furniture setelah melihat website Anda.";

  return (
    <section id="home" className="relative min-h-[94vh] flex flex-col justify-between pt-28 pb-8 px-4 sm:px-8 overflow-hidden">
      {/* Container Card with Rounded Corners like Reference */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-8 sm:p-14 lg:p-16 border border-[#E7E2DA]/60 shadow-2xl">

        {/* Cinematic Warm Interior Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=85"
            alt="ARUNA Living Editorial Warm Interior"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.04]"
          />
          {/* Subtle warm vignette for maximum text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/80 via-[#191816]/30 to-[#191816]/50" />
        </div>



        {/* Center Content - High Impact Editorial Typography */}
        <div className="relative z-10 my-auto text-center max-w-4xl mx-auto py-10 sm:py-16">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-6 drop-shadow-sm">
            Crafting <span className="text-[#C59B6D]">Spaces</span> That <br />
            Feel Like Home
          </h1>

          <p className="text-sm sm:text-lg text-white/85 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            {companyData.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(heroWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#191816] hover:bg-[#C59B6D] hover:text-white rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#C59B6D] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            <button
              type="button"
              onClick={onExploreClick}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Collection</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar inside Hero - Scroll Down & Social Icons */}
        <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/15 text-white/80">
          <button
            type="button"
            onClick={onExploreClick}
            className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase hover:text-white transition-colors cursor-pointer"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>

          <div className="flex items-center gap-2.5">
            <a
              href={companyData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#C59B6D] text-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={companyData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#C59B6D] text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={companyData.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 h-8 rounded-full bg-white/15 hover:bg-[#C59B6D] text-white flex items-center justify-center text-[10px] font-bold uppercase transition-colors"
              aria-label="TikTok"
            >
              TikTok
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
