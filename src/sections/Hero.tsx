import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Parallax effect using Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // The image moves slower than the container to create depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Subtle zoom effect on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  // Fade out effect as we scroll down
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center bg-brand-green overflow-hidden"
    >
      <motion.img
        style={{
          y,
          scale,
          opacity,
        }}
        src="/hero-image.webp"
        alt="AF Consultoria Ambiental"
        className="absolute inset-0 w-full h-full object-cover origin-center"
      />

      {/* Green overlay with opacity to blend with the brand and improve readability */}
      <div className="absolute inset-0 bg-brand-green/40 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 px-4 md:px-12 max-w-7xl mx-auto w-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl pt-20"
        >
          <p className="text-sm md:text-base font-semibold mb-6 tracking-widest uppercase drop-shadow-sm text-brand-light">
            Consultoria e Assessoria Ambiental Especializada
          </p>
          <h1 className="text-5xl md:text-9xl font-bold leading-[1.0] tracking-tight mb-10 drop-shadow-md">
            Harmonia entre
            <br />
            Economia e<br />
            Meio Ambiente
          </h1>
          <button className="bg-brand-light text-brand-green px-12 py-5 rounded-full text-sm font-bold tracking-widest hover:brightness-105 transition-all shadow-xl uppercase">
            SOLICITAR CONSULTORIA
          </button>
        </motion.div>
      </div>

      {/* Improved Intuitive Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold group-hover:text-brand-light transition-colors">
          Explorar
        </span>

        {/* Mouse/Trackpad Shape */}
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5 group-hover:border-brand-light/50 transition-colors">
          {/* Moving Dot */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-brand-light rounded-full shadow-[0_0_8px_rgba(207,240,193,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
