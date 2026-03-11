import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ backgroundColor: "#ECF39E" }}
    >
      {/* Organic background shapes */}
      <div
        className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,119,45,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-8%] w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(19,42,19,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Thin horizontal rule accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-accent/8" />

      <div className="relative z-10 px-5 md:px-12 max-w-7xl mx-auto">
        {/* === TOP: Full-width title with large typographic emphasis === */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2
              className="text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-accent leading-[0.95] tracking-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Pioneiros em
              <br />
              <span className="relative inline-block">
                gestão{" "}
                <span className="text-primary italic">Ambiental</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary/25 origin-left"
                />
              </span>
              <br />
              em
              <span className="text-primary italic"> Rondônia</span>
            </h2>
          </motion.div>
        </div>

        {/* === MIDDLE: Asymmetric two-column layout === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-start">
          {/* Left column: Main narrative (wider) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            {/* Main text — large editorial style */}
            <p
              className="text-xl md:text-2xl lg:text-[1.7rem] font-medium leading-[1.6] text-accent/85 mb-10"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              A <strong className="text-primary">AJ Assessoria Ambiental</strong>{" "}
              foi uma das pioneiras no ramo ambiental no estado de Rondônia,
              iniciando seus trabalhos em <strong className="text-accent">1987</strong>{" "}
              muito antes da primeira normatização oficial da atividade.
            </p>

            {/* Horizontal separator with leaf motif */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-accent/10" />
              <svg
                className="w-5 h-5 text-primary/40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>
              <div className="h-px flex-1 bg-accent/10" />
            </div>

            {/* Highlight phrase */}
            <p
              className="text-lg md:text-xl font-medium text-accent/70 leading-relaxed"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Acompanhamos as mudanças nas diretrizes ambientais por{" "}
              <span className="text-primary italic font-semibold">
                mais de três décadas
              </span>
              , garantindo segurança jurídica e sustentabilidade para o seu
              empreendimento.
            </p>

            {/* Stats — large typographic numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-16 pt-10 border-t border-accent/8"
            >
              <div className="flex items-baseline gap-6 sm:gap-10 flex-wrap">
                <div>
                  <span
                    className="text-4xl md:text-5xl font-bold text-accent leading-none"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    1987
                  </span>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-accent/30 mt-2">
                    Fundação
                  </span>
                </div>

                <div className="hidden sm:block w-px h-12 bg-accent/10 self-center" />

                <div>
                  <span
                    className="text-4xl md:text-5xl font-bold text-primary leading-none"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    +37
                  </span>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-accent/30 mt-2">
                    Anos de Experiência
                  </span>
                </div>

                <div className="hidden sm:block w-px h-12 bg-accent/10 self-center" />

                <div>
                  <span
                    className="text-4xl md:text-5xl font-bold text-accent leading-none"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    500+
                  </span>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-accent/30 mt-2">
                    Clientes Atendidos
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: Image + Quote stacked */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Consultant image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(19,42,19,0.18)] aspect-[4/5]">
              <img
                src="/about-consultant.png"
                alt="Consultora ambiental em campo"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(19,42,19,0.35) 100%)",
                }}
              />

              {/* Floating year element on image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute top-5 right-5 w-16 h-16 rounded-2xl bg-white-pure/90 backdrop-blur-sm flex items-center justify-center shadow-lg animate-float"
              >
                <div className="text-center">
                  <span
                    className="text-sm font-extrabold text-accent leading-none block"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    1987
                  </span>
                  <span className="text-[5px] font-bold tracking-[0.2em] text-primary uppercase">
                    Fundação
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
