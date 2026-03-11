import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden grain-overlay"
      style={{ backgroundColor: '#ECF39E' }}
    >
      {/* Decorative organic shapes */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,119,45,0.15) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(19,42,19,0.1) 0%, transparent 70%)' }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(19,42,19,1) 1px, transparent 1px), linear-gradient(90deg, rgba(19,42,19,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-20 px-5 md:px-14 max-w-7xl mx-auto w-full py-32 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center min-h-[85vh]">
          {/* Left: Text Content */}
          <motion.div
            style={{ y: textY }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-accent mb-8"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Viabilizamos o{" "}
              <span className="relative inline-block">
                <span className="text-primary">futuro</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary/30 origin-left rounded-full"
                />
              </span>{" "}
              do seu empreendimento
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="text-base md:text-lg text-text-body/70 max-w-lg mb-12 leading-relaxed font-medium"
            >
              Soluções completas em licenciamento e gestão ambiental.
              Mais de 37 anos de experiência garantindo a harmonia entre
              desenvolvimento econômico e preservação ambiental.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="group relative overflow-hidden bg-accent text-bg-cream px-9 py-4.5 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all duration-500 hover:shadow-[0_12px_35px_-8px_rgba(19,42,19,0.4)] hover:-translate-y-1 active:scale-95">
                <span className="relative z-10 flex items-center gap-2.5">
                  Solicitar Consultoria
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              </button>

              <button className="border-2 border-accent/20 text-accent px-8 py-4 rounded-full text-[11px] font-bold tracking-widest hover:border-primary hover:bg-primary/5 transition-all duration-300 uppercase">
                Quem Somos
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-16 flex items-center gap-8"
            >
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-accent" style={{ fontFamily: "'DM Serif Display', serif" }}>+37</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-text-body/40">Anos</span>
              </div>
              <div className="w-px h-10 bg-accent/10" />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-accent" style={{ fontFamily: "'DM Serif Display', serif" }}>500+</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-text-body/40">Projetos</span>
              </div>
              <div className="w-px h-10 bg-accent/10" />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-accent" style={{ fontFamily: "'DM Serif Display', serif" }}>100%</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-text-body/40">Aprovação</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(19,42,19,0.25)] aspect-[4/5]">
              <motion.img
                style={{ y: imageY, scale: imageScale }}
                src="/hero-forest.png"
                alt="Floresta tropical — AF Consultoria Ambiental"
                className="w-full h-full object-cover origin-center"
              />
              {/* Green tint overlay */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, rgba(19,42,19,0.1) 0%, rgba(79,119,45,0.15) 100%)'
              }} />
            </div>

            {/* Floating badge: Founded */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="absolute -bottom-5 -left-5 md:-left-8 bg-white-pure rounded-2xl p-5 md:p-6 shadow-[0_15px_40px_-10px_rgba(19,42,19,0.15)] max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-bg-cream flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                  Desde 1987
                </span>
              </div>
              <p className="text-[11px] text-text-body/60 leading-relaxed font-medium">
                Pioneiros em licenciamento ambiental em Rondônia
              </p>
            </motion.div>

            {/* Top decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-accent flex items-center justify-center shadow-xl animate-float"
            >
              <div className="text-center">
                <span className="text-lg font-extrabold text-bg-cream leading-none block" style={{ fontFamily: "'DM Serif Display', serif" }}>AJ</span>
                <span className="text-[5px] font-bold tracking-[0.15em] text-bg-cream/50 uppercase">Ambiental</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group z-20"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent/40 font-bold group-hover:text-primary transition-colors">
          Explorar
        </span>
        <div className="w-10 h-10 rounded-full border-2 border-accent/15 flex items-center justify-center group-hover:border-primary/40 transition-all duration-300 group-hover:bg-primary/5">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown className="w-4 h-4 text-accent/40 group-hover:text-primary transition-colors" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
