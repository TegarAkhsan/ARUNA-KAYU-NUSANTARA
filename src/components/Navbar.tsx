import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Custom', href: '#custom' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const defaultWaMessage = "Halo ARUNA Living, saya ingin berkonsultasi mengenai kebutuhan furniture kami.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8E4DC]/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="ARUNA Living Home"
          >
            <div className="w-9 h-9 rounded-sm bg-[#1F1F1D] flex items-center justify-center text-[#F5F1EA] font-serif font-bold text-lg tracking-widest transition-transform duration-300 group-hover:scale-105 shadow-inner">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] font-semibold text-[#1F1F1D] uppercase leading-tight">
                ARUNA
              </span>
              <span className="text-[10px] tracking-[0.3em] font-medium text-[#A47C52] uppercase">
                Living
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#1F1F1D]/80 hover:text-[#A47C52] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A47C52] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={getWhatsAppUrl(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1F1F1D] text-[#FAF9F5] rounded-full text-xs font-medium tracking-wider uppercase hover:bg-[#A47C52] transition-all duration-300 shadow-sm hover:shadow-md transform active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#F5F1EA]" />
              <span>Konsultasi WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 text-[#A47C52] group-hover:text-white" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#1F1F1D] hover:bg-[#E8E4DC]/50 focus:outline-none"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E8E4DC] px-6 pt-4 pb-8 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-[#1F1F1D] py-2 border-b border-[#E8E4DC]/40 hover:text-[#A47C52]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={getWhatsAppUrl(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#1F1F1D] text-[#FAF9F5] rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#A47C52] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#F5F1EA]" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>
          <div className="text-[11px] text-center text-[#1F1F1D]/50 pt-2">
            {companyData.address.full}
          </div>
        </div>
      )}
    </header>
  );
};
