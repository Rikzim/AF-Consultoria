import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";

const highlights = [
  {
    icon: <FiCalendar className="w-5 h-5" />,
    label: "Ano de Fundação",
    value: "1987",
  },
  {
    icon: <FiMapPin className="w-5 h-5" />,
    label: "Sede",
    value: "Ji-Paraná",
  },
  {
    icon: <FiAward className="w-5 h-5" />,
    label: "Experiência",
    value: "+37 anos",
  },
  {
    icon: <FiUsers className="w-5 h-5" />,
    label: "Clientes",
    value: "500+",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#ECF39E' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-[-5%] w-[400px] h-[400px] rounded-full border border-accent/5 pointer-events-none" />
      <div className="absolute top-32 right-[-3%] w-[300px] h-[300px] rounded-full border border-accent/5 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,119,45,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 px-5 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/8 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                Quem Somos
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-accent leading-[1.1] tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Pioneiros em gestão{" "}
            <span className="text-primary italic">ambiental</span>
            <br />
            em Rondônia
          </motion.h2>
        </div>

        {/* Content grid */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          {/* Left column — text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[55%]"
          >
            <p className="text-xl md:text-2xl font-medium leading-[1.55] text-accent/90 mb-8"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              A <strong className="text-primary">AF Assessoria & Projetos Ambientais</strong> foi
              uma das pioneiras no ramo ambiental no estado de Rondônia, iniciando seus
              trabalhos em <strong>1987</strong> — muito antes da primeira normatização oficial
              da atividade.
            </p>

            <div className="space-y-5 text-base text-text-body/65 leading-relaxed">
              <p>
                Os primeiros projetos de Plano de Manejo Florestal (PMF) foram realizados
                antes mesmo da famosa <strong className="text-accent/80">Portaria 048/1995</strong>,
                antecipando o que viria a se tornar referência regulatória para o setor.
              </p>
              <p>
                Inicialmente focada em implantação de projetos de Plano de Manejo (PMF),
                Levantamentos Circunstanciados (LC) e assessoria a empresas do ramo florestal,
                a AF expandiu gradualmente sua atuação acompanhando a evolução do cenário
                ambiental brasileiro.
              </p>
              <p>
                Com as constantes transformações na legislação ambiental e investimento
                contínuo em especializações, passamos a atuar também com{" "}
                <strong className="text-accent/80">
                  licenciamento ambiental e cadastros ambientais
                </strong>{" "}
                de empresas de diversos setores — do ramo florestal à agroindústria, mineração
                e muito mais.
              </p>
            </div>

            {/* Bottom highlight phrase */}
            <div className="mt-10 pt-8 border-t border-accent/10">
              <p className="text-lg md:text-xl font-medium text-accent leading-relaxed"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Acompanhamos as mudanças nas diretrizes ambientais por{" "}
                <span className="text-primary italic">mais de três décadas</span>,
                garantindo segurança jurídica e sustentabilidade para o seu empreendimento.
              </p>
            </div>
          </motion.div>

          {/* Right column — highlights + image + quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-[45%] flex flex-col gap-6"
          >
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-white-pure/60 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-center group hover:bg-white-pure transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-bg-cream text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-bg-cream transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-accent leading-none"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {item.value}
                  </span>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-text-body/40 mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Consultant image */}
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-accent/5 aspect-[16/10] relative">
              <img
                src="/about-consultant.png"
                alt="Consultora ambiental em campo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, transparent 50%, rgba(19,42,19,0.3) 100%)'
              }} />
            </div>

            {/* Quote card */}
            <div className="bg-accent rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/10" />
              <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-bg-cream/5" />

              <div className="relative z-10">
                <svg
                  className="w-8 h-8 text-bg-cream/20 mb-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-bg-cream text-base md:text-lg font-medium leading-relaxed"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  Nascemos antes da regulamentação existir. Nossa história se confunde
                  com a própria história da gestão ambiental em Rondônia.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-bg-cream/10 relative z-10">
                <p className="text-bg-cream/60 text-sm font-semibold">AF Assessoria & Projetos</p>
                <p className="text-bg-cream/30 text-xs mt-1">Desde 1987 • Ji-Paraná, RO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
