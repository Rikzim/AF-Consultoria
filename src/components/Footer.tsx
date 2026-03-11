import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const footerLinks = {
  servicos: [
    { label: "Licenciamento Ambiental", href: "#servicos" },
    { label: "CAR & Cadastro Rural", href: "#servicos" },
    { label: "CTF, RAPP & CEPROF", href: "#servicos" },
    { label: "Projetos Ambientais", href: "#servicos" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Nossa História", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#132A13' }}>
      {/* Top divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-bg-cream/10 to-transparent" />

      <div className="px-5 md:px-12 max-w-7xl mx-auto py-16 md:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/af-consulta_logo.svg"
                alt="AF Consultoria"
                className="w-10 h-10 brightness-0 invert opacity-80"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-bg-cream/90 tracking-tight leading-none"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  AF Consultoria
                </span>
                <span className="text-[8px] font-bold tracking-[0.3em] text-bg-cream/30 uppercase mt-0.5">
                  Assessoria Ambiental
                </span>
              </div>
            </div>
            <p className="text-sm text-bg-cream/35 leading-relaxed max-w-sm mb-8">
              Pioneiros em licenciamento e gestão ambiental em Rondônia desde 1987.
              Viabilizamos o futuro do seu empreendimento com responsabilidade e segurança jurídica.
            </p>

            {/* Social / Contact CTA */}
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-bg-cream/50 hover:text-bg-cream transition-colors group"
            >
              Falar com Especialista
              <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Services column */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-bg-cream/30 mb-5">
              Serviços
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.servicos.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-bg-cream/50 hover:text-bg-cream transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-bg-cream/30 mb-5">
              Empresa
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.empresa.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-bg-cream/50 hover:text-bg-cream transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Location column */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-bg-cream/30 mb-5">
              Localização
            </h4>
            <p className="text-sm text-bg-cream/50 leading-relaxed font-medium">
              Ji-Paraná, Rondônia
              <br />
              Brasil
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-bg-cream/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-bg-cream/25 font-medium">
            © {new Date().getFullYear()} AF Assessoria & Projetos Ambientais. Todos os direitos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-bg-cream/10 flex items-center justify-center text-bg-cream/30 hover:text-bg-cream hover:border-bg-cream/30 transition-all duration-300 hover:bg-bg-cream/5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
