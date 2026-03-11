import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiMap, FiClipboard, FiLayers, FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    id: "01",
    category: "LICENCIAMENTO",
    title: "Licenciamento Ambiental",
    description:
      "Gestão completa das licenças Prévia (LP), Instalação (LI) e Operação (LO) para indústrias e empreendimentos de todos os portes.",
    icon: <FiFileText className="w-6 h-6" />,
  },
  {
    id: "02",
    category: "RURAL",
    title: "CAR & Cadastro Rural",
    description:
      "Inscrição e regularização eletrônica de imóveis rurais no Cadastro Ambiental Rural (CAR), garantindo conformidade legal.",
    icon: <FiMap className="w-6 h-6" />,
  },
  {
    id: "03",
    category: "REGISTROS",
    title: "CTF, RAPP & CEPROF",
    description:
      "Regularização junto ao IBAMA, relatórios anuais de atividades poluidoras e gestão florestal completa.",
    icon: <FiClipboard className="w-6 h-6" />,
  },
  {
    id: "04",
    category: "ASSESSORIA",
    title: "Projetos Ambientais",
    description:
      "Elaboração de projetos técnicos especializados: PCAs, PRADs, EIA/RIMA e outros estudos de impacto.",
    icon: <FiLayers className="w-6 h-6" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

const WhatWeDo: React.FC = () => {
  return (
    <section id="servicos" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-accent" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,119,45,0.5) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,243,158,0.3) 0%, transparent 70%)' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(236,243,158,1) 1px, transparent 1px), linear-gradient(90deg, rgba(236,243,158,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 px-5 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-bg-cream leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Soluções ambientais{" "}
            <span className="text-bg-cream/40">completas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-bg-cream/50 leading-relaxed font-medium max-w-lg"
          >
            Atuamos em todas as etapas do processo ambiental, da regularização à execução de projetos técnicos especializados.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative bg-bg-cream border border-bg-cream/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[360px] overflow-hidden transition-all duration-500 hover:border-primary/30 cursor-pointer"
            >
              {/* Top row: category + icon */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-accent text-bg-cream flex items-center justify-center group-hover:accent group-hover:text-bg-cream transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-bg-accent group-hover:text-bg-accent/60 transition-colors duration-500">
                    {service.category}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full border border-bg-accent/10 flex items-center justify-center text-accent group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10 transition-all duration-500 group-hover:rotate-45">
                  <FiArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl text-accent leading-[1.15] tracking-tight mb-4 group-hover:text-accent transition-colors"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-bg-accent/40 leading-relaxed font-medium group-hover:text-accent transition-colors duration-500 max-w-sm">
                  {service.description}
                </p>
              </div>

              {/* Large background number */}
              <span className="absolute -bottom-4 -right-2 text-[10rem] font-black tracking-tighter text-accent/[0.10] group-hover:text-bg-cream/[0.06] transition-colors duration-700 select-none pointer-events-none leading-none"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {service.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
