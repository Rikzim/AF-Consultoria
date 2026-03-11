import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import About from './sections/About';
import Cta from './sections/Cta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <WhatWeDo />
        <About />
        <Cta />
      </main>

      <Footer />
    </div>
  );
};

export default App;
