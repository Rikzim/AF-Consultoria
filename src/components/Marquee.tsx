import React from 'react';

const terms = [
  "LICENCIAMENTO AMBIENTAL",
  "CAR - CADASTRO AMBIENTAL RURAL",
  "RAPP - IBAMA",
  "CEPROF",
  "REGULARIZAÇÃO AMBIENTAL",
  "DESENVOLVIMENTO SUSTENTÁVEL"
];

const Marquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-1 flex whitespace-nowrap bg-bg-base">
      <div className="flex animate-marquee text-3xl md:text-6xl font-bold tracking-tighter text-brand-green">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {terms.map((term, index) => (
              <span key={`${i}-${index}`} className="flex items-center mr-16">
                {term}
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
