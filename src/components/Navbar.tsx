import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/company';

export const Navbar: React.FC = () => {
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

  const defaultWaMessage = "Halo ARUNA Living, saya ingin berkonsultasi mengenai furniture.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-6 py-3.5 flex items-center justify-between ${
          isScrolled
            ? 'glass-nav shadow-lg border border-[#E7E2DA]/80'
            : 'bg-white/80 backdrop-blur-md border border-[#E7E2DA]/50 shadow-sm'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="ARUNA Living Home"
        >
          <div className="w-8 h-8 rounded-full bg-[#191816] flex items-center justify-center text-[#F3EFEA] font-serif font-bold text-sm tracking-widest shadow-sm group-hover:bg-[#C59B6D] transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base tracking-[0.18em] font-bold text-[#191816] uppercase leading-tight">
              ARUNA
            </span>
            <span className="text-[9px] tracking-[0.28em] font-medium text-[#C59B6D] uppercase leading-none">
              Living
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs tracking-[0.15em] uppercase font-medium text-[#191816]/75 hover:text-[#C59B6D] transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppUrl(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#191816] hover:bg-[#C59B6D] text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm group cursor-pointer"
          >
            <span>Konsultasi WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-[#191816] hover:bg-[#F3EFEA] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-3xl border border-[#E7E2DA] p-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-w-md mx-auto">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191816] py-2 border-b border-[#E7E2DA]/50 hover:text-[#C59B6D]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-5">
            <a
              href={getWhatsAppUrl(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#191816] hover:bg-[#C59B6D] text-white rounded-full text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              <span>Konsultasi WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
