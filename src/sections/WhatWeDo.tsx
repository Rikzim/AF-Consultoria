import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const services = [
  {
    id: "01",
    category: "LICENCIAMENTO",
    title: "Licenciamento Ambiental",
    description: "Gestão completa das licenças Prévia (LP), Instalação (LI) e Operação (LO) para indústrias e empreendimentos.",
    color: "bg-brand-light"
  },
  {
    id: "02",
    category: "RURAL",
    title: "CAR & Cadastro Rural",
    description: "Inscrição e regularização eletrônica de imóveis rurais (Cadastro Ambiental Rural).",
    color: "bg-card-light"
  },
  {
    id: "03",
    category: "REGISTROS",
    title: "CTF, RAPP & CEPROF",
    description: "Regularização junto ao IBAMA, relatórios anuais de atividades poluidoras e gestão florestal.",
    color: "bg-card-light"
  },
  {
    id: "04",
    category: "ASSESSORIA",
    title: "Projetos Ambientais",
    description: "Elaboração de projetos técnicos especializados para diversos setores da economia.",
    color: "bg-card-light"
  }
];

const WhatWeDo: React.FC = () => {
  return (
    <section id="servicos" className="px-4 md:px-12 max-w-7xl mx-auto py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
        Nossas Soluções Ambientais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className={`${service.color} rounded-[2.5rem] p-10 flex flex-col justify-between aspect-[4/5.2] relative overflow-hidden group`}>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest mb-6 text-brand-green">{service.category}</p>
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed max-w-[200px]">
                {service.description}
              </p>
            </div>
            <div className="mt-auto flex justify-between items-end relative z-10">
              <span className="text-8xl font-bold tracking-tighter -mb-4 opacity-100 text-brand-green/20 group-hover:text-brand-green/40 transition-colors">{service.id}</span>
              <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white rotate-45 group-hover:rotate-0 transition-transform">
                <FiArrowUpRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
