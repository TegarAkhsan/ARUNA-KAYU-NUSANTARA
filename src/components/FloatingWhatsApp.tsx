import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = "Halo ARUNA Living, saya ingin berkonsultasi mengenai furniture.";
  const waUrl = getWhatsAppUrl(defaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Friendly Notification Bubble (Dismissible) */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-[#E8E4DC] max-w-xs animate-in slide-in-from-bottom-2 duration-300 relative text-xs text-[#1F1F1D] flex items-start gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 animate-pulse" />
          <div className="flex-1">
            <span className="font-semibold text-[11px] uppercase tracking-wider text-[#A47C52] block">
              Customer Support Online
            </span>
            <p className="text-[11px] text-[#1F1F1D]/80 mt-0.5 leading-snug">
              Ada pertanyaan seputar custom furniture atau katalog? Tim kami siap membantu!
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#1F1F1D]/40 hover:text-[#1F1F1D] p-0.5"
            aria-label="Tutup notifikasi"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-4 py-3 bg-[#1F1F1D] hover:bg-[#A47C52] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-[#A47C52]/30"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#1F1F1D]" />
        </div>
        <div className="flex flex-col text-left pr-1">
          <span className="text-[10px] uppercase tracking-widest text-[#FAF9F5]/70 leading-none">
            Konsultasi
          </span>
          <span className="text-xs font-semibold tracking-wider text-white">
            Chat with us
          </span>
        </div>
      </a>
    </div>
  );
};
