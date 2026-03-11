import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Cta: React.FC = () => {
  return (
    <section id="contato" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background: primary green */}
      <div className="absolute inset-0 bg-primary" />

      {/* Decorative organic shapes */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,243,158,0.5) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(19,42,19,0.5) 0%, transparent 70%)' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(236,243,158,1) 1px, transparent 1px), linear-gradient(90deg, rgba(236,243,158,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >

            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-bg-cream leading-[1.1] tracking-tight mb-8"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Pronto para{" "}
              <span className="text-bg-cream/50 italic">regularizar</span>{" "}
              seu empreendimento?
            </h2>

            <p className="text-base md:text-lg text-bg-cream/50 leading-relaxed font-medium max-w-lg mb-12">
              Localizados em Ji-Paraná, RO, atendemos toda a região com excelência
              em licenciamento e assessoria ambiental. Solicite uma proposta sem compromisso.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button className="group relative overflow-hidden bg-bg-cream text-accent px-9 py-4.5 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all duration-500 hover:shadow-[0_12px_35px_-8px_rgba(236,243,158,0.4)] hover:-translate-y-1 active:scale-95">
                <span className="relative z-10 flex items-center gap-2.5">
                  Solicitar Proposta
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 bg-white-pure translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              </button>

              <button className="border-2 border-bg-cream/20 text-bg-cream px-8 py-4 rounded-full text-[11px] font-bold tracking-widest hover:border-bg-cream/50 hover:bg-bg-cream/5 transition-all duration-300 uppercase">
                WhatsApp
              </button>
            </div>

            {/* Contact info row */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-bg-cream/10 flex items-center justify-center text-bg-cream/60 shrink-0">
                  <FiPhone className="w-4 h-4" />
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-[10px] uppercase tracking-widest text-bg-cream/30 font-bold">Telefone</p>
                  <p className="text-sm text-bg-cream/80 font-semibold">(69) 3421-XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-bg-cream/10 flex items-center justify-center text-bg-cream/60 shrink-0">
                  <FiMail className="w-4 h-4" />
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-[10px] uppercase tracking-widest text-bg-cream/30 font-bold">E-mail</p>
                  <p className="text-sm text-bg-cream/80 font-semibold">contato@afconsultoria.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-bg-cream/10 flex items-center justify-center text-bg-cream/60 shrink-0">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-[10px] uppercase tracking-widest text-bg-cream/30 font-bold">Local</p>
                  <p className="text-sm text-bg-cream/80 font-semibold">Ji-Paraná, RO</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Decorative card stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:translate-x-6"
          >
            {/* Main card */}
            <div className="bg-accent rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/20" />
              <div className="absolute -left-8 -bottom-8 w-28 h-28 rounded-full bg-bg-cream/5" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl text-bg-cream leading-[1.2] mb-6"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  Regularize seu negócio com quem entende do assunto
                </h3>

                <div className="space-y-4 mb-10">
                  {[
                    "Licenciamento ambiental completo (LP, LI, LO)",
                    "Cadastro Ambiental Rural (CAR)",
                    "Regularização IBAMA, CTF e CEPROF",
                    "Projetos técnicos especializados",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center mt-0.5 shrink-0">
                        <svg className="w-3 h-3 text-bg-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-bg-cream/70 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="pt-6 border-t border-bg-cream/10">
                  <p className="text-bg-cream/40 text-sm italic leading-relaxed"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    "Buscamos o equilíbrio entre o desenvolvimento econômico e a preservação,
                    viabilizando o futuro das próximas gerações."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-bg-cream/60">AF</span>
                    </div>
                    <div>
                      <p className="text-bg-cream/60 text-xs font-semibold">AF Assessoria & Projetos</p>
                      <p className="text-bg-cream/30 text-[10px]">Ji-Paraná - RO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-6 -right-4 md:-right-8 w-24 h-24 bg-bg-cream rounded-2xl flex items-center justify-center shadow-xl animate-float"
            >
              <div className="text-center">
                <span className="text-3xl font-bold text-accent leading-none block" style={{ fontFamily: "'DM Serif Display', serif" }}>37+</span>
                <span className="text-[7px] font-bold tracking-widest text-primary uppercase">Anos</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
