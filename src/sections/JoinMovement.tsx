import React from 'react';
import { FiPlus } from 'react-icons/fi';

const JoinMovement: React.FC = () => {
  return (
    <section id="contato" className="px-4 md:px-12 max-w-7xl mx-auto py-20 relative">
      {/* Abstract Background Circle (Subtle) */}
      <div className="absolute left-[-10%] top-[10%] w-[600px] h-[600px] border border-brand-green/10 rounded-full pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Block - Brand Green Card */}
        <div className="bg-brand-green text-white rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl mt-0 md:mt-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            Pronto para Regularizar seu Empreendimento?
          </h2>
          <p className="text-sm text-brand-light/70 mb-14 max-w-sm leading-relaxed">
            Localizados em Ji-Paraná, RO, atendemos toda a região com excelência 
            em licenciamento e assessoria ambiental.
          </p>

          <div className="space-y-0 mb-14">
            <div className="border-b border-white/20 py-6 flex justify-between items-center cursor-pointer hover:opacity-70 transition-opacity">
              <span className="text-xl font-medium">Ji-Paraná, Rondônia</span>
              <FiPlus className="w-6 h-6" />
            </div>
            <div className="border-b border-white/20 py-6 flex justify-between items-center cursor-pointer hover:opacity-70 transition-opacity">
              <span className="text-xl font-medium">Atendimento Regional</span>
              <FiPlus className="w-6 h-6" />
            </div>
            <div className="border-b border-white/20 py-6 flex justify-between items-center cursor-pointer hover:opacity-70 transition-opacity">
              <span className="text-xl font-medium">Orçamento Online</span>
              <FiPlus className="w-6 h-6" />
            </div>
          </div>

          <button className="bg-brand-light text-brand-green px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:brightness-105 transition-all shadow-md uppercase">
            FALE COM UM ESPECIALISTA
          </button>
        </div>

        {/* Right Block - Image and Quote */}
        <div className="flex flex-col items-center md:items-end">
          <div className="w-[90%] md:w-[85%] rounded-[3rem] overflow-hidden shadow-xl aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop"
              alt="Environmental Care"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[90%] md:w-[85%] mt-10 text-left">
            <p className="text-sm text-text-dark/70 mb-6 leading-relaxed italic max-w-sm">
              "Buscamos o equilíbrio entre o desenvolvimento econômico e a preservação, 
              viabilizando o futuro das próximas gerações."
            </p>
            <div>
              <p className="font-bold text-base tracking-tight text-brand-green">AF Assessoria & Projetos</p>
              <p className="text-xs text-text-dark/50 font-medium uppercase tracking-widest mt-1">
                Ji-Paraná - RO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
