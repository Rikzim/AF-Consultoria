import React from 'react';

const Focus: React.FC = () => {
  return (
    <section id="sobre" className="px-4 md:px-12 max-w-7xl mx-auto py-32 flex flex-col md:flex-row gap-12 md:gap-24">
      <div className="w-full md:w-1/3">
        <h4 className="text-sm font-bold uppercase tracking-widest mb-10 text-brand-green">Nossa Missão</h4>
        <button className="border border-brand-green px-10 py-3 rounded-full text-[10px] font-bold tracking-widest hover:bg-brand-green hover:text-white transition-all uppercase text-brand-green">
          Sobre a AF
        </button>
      </div>
      <div className="w-full md:w-2/3">
        <p className="text-3xl md:text-4xl font-medium leading-[1.3] text-text-dark mb-10">
          O Licenciamento Ambiental é um instrumento fundamental na busca do 
          desenvolvimento sustentável. Atuamos para garantir um convívio 
          equilibrado entre a ação econômica e o meio ambiente.
        </p>
        <p className="text-sm text-text-dark/60 max-w-xl leading-relaxed">
          Especialistas em Ji-Paraná, Rondônia, com ampla experiência em mineração, 
          indústrias madeireiras e agroindústria. Nossa contribuição é direta na 
          viabilização ambiental do seu negócio.
        </p>
      </div>
    </section>
  );
};

export default Focus;
