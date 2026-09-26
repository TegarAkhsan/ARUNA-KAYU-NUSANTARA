import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqData } from '../data/faq';
import { getWhatsAppUrl } from '../data/company';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqWaMessage = "Halo ARUNA Living, saya punya pertanyaan mengenai layanan furniture Anda.";

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E8E4DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1D] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#1F1F1D]/70 max-w-lg mx-auto">
            Pertanyaan yang sering diajukan seputar pemesanan custom, estimasi pengerjaan, pengiriman, dan pemilihan material.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden transition-all duration-200 hover:border-[#A47C52]/60"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#1F1F1D] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F5F1EA] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1F1F1D] text-white' : 'text-[#1F1F1D]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#1F1F1D]/75 leading-relaxed border-t border-[#E8E4DC]/50 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Help Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F5F1EA] border border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-serif text-base font-semibold text-[#1F1F1D]">
              Punya pertanyaan spesifik lain?
            </div>
            <div className="text-xs text-[#1F1F1D]/60 mt-0.5">
              Konsultan kami siap menjawab secara detail via WhatsApp.
            </div>
          </div>
          <a
            href={getWhatsAppUrl(faqWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1F1F1D] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#A47C52] transition-colors whitespace-nowrap shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#F5F1EA]" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
