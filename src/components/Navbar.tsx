import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-700 ${
        scrolled
          ? 'py-2'
          : 'py-4'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-5 md:px-10 transition-all duration-700 ${
          scrolled
            ? 'bg-accent/95 backdrop-blur-2xl rounded-2xl shadow-[0_8px_40px_-10px_rgba(19,42,19,0.3)] mx-4 md:mx-auto mt-2'
            : 'bg-transparent'
        }`}
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-[72px]">
          {/* Left: Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/af-consulta_logo.svg"
                alt="AF Consultoria"
                className={`w-9 h-9 object-contain relative z-10 transition-all duration-700 group-hover:scale-110 ${
                  scrolled ? 'brightness-0 invert' : ''
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold text-xl tracking-tight leading-none transition-colors duration-700 ${
                scrolled ? 'text-bg-cream' : 'text-accent'
              }`} style={{ fontFamily: "'DM Serif Display', serif" }}>
                AF
              </span>
              <span className={`text-[8px] font-bold tracking-[0.25em] uppercase leading-none mt-0.5 transition-colors duration-700 ${
                scrolled ? 'text-bg-cream/60' : 'text-primary'
              }`}>
                Consultoria
              </span>
            </div>
          </a>

          {/* Center: Navigation */}
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-semibold tracking-wide transition-all duration-300 relative group ${
                  scrolled
                    ? 'text-bg-cream/70 hover:text-bg-cream'
                    : 'text-accent/60 hover:text-accent'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                  scrolled ? 'bg-bg-cream' : 'bg-primary'
                }`} />
              </a>
            ))}
          </div>

          {/* Right: CTA */}
          <button className={`group relative overflow-hidden px-7 py-3 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all duration-500 ${
            scrolled
              ? 'bg-bg-cream text-accent hover:bg-white hover:shadow-[0_0_30px_rgba(236,243,158,0.3)]'
              : 'bg-accent text-bg-cream hover:shadow-[0_8px_30px_-5px_rgba(19,42,19,0.3)] hover:-translate-y-0.5'
          }`}>
            <span className="relative z-10 flex items-center gap-2">
              Proposta
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between h-[60px]">
          <a href="#" className="flex items-center gap-2.5">
            <img
              src="/af-consulta_logo.svg"
              alt="Logo"
              className={`w-8 h-8 transition-all duration-700 ${scrolled ? 'brightness-0 invert' : ''}`}
            />
            <div className="flex flex-col">
              <span className={`font-extrabold text-base tracking-tight leading-none transition-colors duration-700 ${
                scrolled ? 'text-bg-cream' : 'text-accent'
              }`} style={{ fontFamily: "'DM Serif Display', serif" }}>
                AF
              </span>
              <span className={`text-[7px] font-bold tracking-[0.2em] uppercase leading-none mt-0.5 transition-colors duration-700 ${
                scrolled ? 'text-bg-cream/60' : 'text-primary'
              }`}>
                Consultoria
              </span>
            </div>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              mobileOpen
                ? 'bg-primary text-bg-cream shadow-lg'
                : scrolled
                  ? 'bg-bg-cream/20 text-bg-cream'
                  : 'bg-accent/10 text-accent'
            }`}
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-2 px-6 pb-8 pt-4 flex flex-col gap-1 bg-accent/95 backdrop-blur-2xl rounded-2xl shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-4 text-sm font-semibold text-bg-cream/80 hover:text-bg-cream transition-colors border-b border-bg-cream/10"
            >
              {link.label}
            </a>
          ))}
          <button className="mt-5 w-full bg-bg-cream text-accent py-4 rounded-xl text-[12px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors">
            Proposta
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
