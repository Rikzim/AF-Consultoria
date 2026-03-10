import React from 'react';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[110] flex justify-center pointer-events-none">
      {/* SVG Background Layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1402px] h-[134px] hidden md:block">
        <svg width="1402" height="134" viewBox="0 0 1402 134" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-38" width="1440" height="29" fill="white"/>
          <path d="M305 0H1059V104C1059 120.569 1045.57 134 1029 134H344C322.461 134 305 116.539 305 95V0Z" fill="white"/>
          <path d="M305 78H304.989C304.457 50.8474 282.28 29 255 29C253.654 29 252.32 29.0538 251 29.1582V29H305V78Z" fill="white"/>
          <path d="M1059 78H1059.01C1059.54 50.8474 1081.72 29 1109 29C1110.35 29 1111.68 29.0538 1113 29.1582V29H1059V78Z" fill="white"/>
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative w-full max-w-[1402px] h-[134px] flex justify-center pointer-events-none">
        
        {/* Mobile Navbar */}
        <div className="md:hidden w-[92%] mt-4 bg-white rounded-2xl p-4 flex justify-between items-center shadow-xl pointer-events-auto">
           <div className="flex items-center gap-2">
             <img src="/af-consulta_logo.svg" alt="Logo" className="w-8 h-8" />
             <span className="font-bold text-sm tracking-tight text-brand-green">AF CONSULTORIA</span>
           </div>
           <button className="bg-brand-green text-white p-2.5 rounded-xl shadow-lg shadow-brand-green/20">
             <FiArrowRight size={18} />
           </button>
        </div>

        {/* Desktop Navbar Content */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] absolute top-[29px] left-[305px] right-[343px] bottom-0 items-center px-12 pointer-events-auto">
          
          {/* Left: Navigation */}
          <div className="flex items-center gap-8 lg:gap-10">
            <div className="group flex items-center gap-1.5 cursor-pointer">
              <span className="text-[13px] font-bold text-gray-700 group-hover:text-brand-green transition-colors">Serviços</span>
              <FiChevronDown className="text-gray-400 group-hover:text-brand-green transition-colors mt-0.5" />
            </div>
            <a href="#licenciamento" className="text-[13px] font-bold text-gray-700 hover:text-brand-green transition-all tracking-wide">Licenciamento</a>
            <a href="#sobre" className="text-[13px] font-bold text-gray-700 hover:text-brand-green transition-all tracking-wide">Quem Somos</a>
          </div>

          {/* Center: Brand Identity */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-green/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img src="/af-consulta_logo.svg" alt="AF Consultoria" className="w-10 h-10 object-contain relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl lg:text-2xl tracking-tighter text-gray-900 leading-none">AF</span>
              <span className="text-[9px] font-extrabold tracking-[0.2em] text-brand-green uppercase leading-none mt-1">Consultoria</span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-8">
            <a href="#contato" className="text-[13px] font-bold text-gray-700 hover:text-brand-green transition-colors tracking-wide">Falar com Especialista</a>
            <button className="relative overflow-hidden bg-brand-green text-white px-8 py-3.5 rounded-2xl text-[13px] font-black tracking-widest uppercase transition-all duration-300 hover:shadow-[0_8px_25px_-5px_rgba(1,137,49,0.4)] hover:-translate-y-0.5 active:scale-95 group shadow-lg shadow-brand-green/10">
              <span className="relative z-10 flex items-center gap-2">
                Proposta
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
