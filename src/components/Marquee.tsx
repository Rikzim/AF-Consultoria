import React from 'react';

const terms = [
  "LICENCIAMENTO AMBIENTAL",
  "CAR — CADASTRO AMBIENTAL RURAL",
  "RAPP — IBAMA",
  "CEPROF",
  "REGULARIZAÇÃO AMBIENTAL",
  "DESENVOLVIMENTO SUSTENTÁVEL",
  "PROJETOS AMBIENTAIS",
];

const Separator = () => (
  <span className="mx-6 md:mx-10 flex items-center">
    <svg className="w-3 h-3 md:w-4 md:h-4 text-brand-green/30" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="8" cy="8" r="4" />
    </svg>
  </span>
);

const MarqueeRow: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => (
  <div className="flex whitespace-nowrap">
    <div
      className={`flex items-center animate-marquee ${reverse ? '[animation-direction:reverse]' : ''}`}
    >
      {[...Array(4)].map((_, i) => (
        <React.Fragment key={i}>
          {terms.map((term, index) => (
            <React.Fragment key={`${i}-${index}`}>
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-green/90 hover:text-brand-green transition-colors cursor-default select-none">
                {term}
              </span>
              <Separator />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 md:py-12 bg-bg-base">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4 md:gap-6">
        <MarqueeRow />
      </div>
    </div>
  );
};

export default Marquee;
