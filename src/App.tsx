import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Marquee from './components/Marquee';
import WhatWeDo from './sections/WhatWeDo';
import Focus from './sections/Focus';
import JoinMovement from './sections/JoinMovement';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-text-dark selection:bg-brand-green selection:text-white relative">
      
      {/* 
        THE MASTER FRAME (Fixed)
        Now with rounded corners on all four sides.
      */}
      <div className="fixed inset-0 z-[100] pointer-events-none">
        {/* Left, Right, Bottom Borders */}
        <div className="absolute inset-y-0 left-0 w-[24px] bg-white"></div>
        <div className="absolute inset-y-0 right-0 w-[24px] bg-white"></div>
        <div className="absolute bottom-0 inset-x-0 h-[24px] bg-white"></div>
        
        {/* Top Border - Matches the 29px bar in the navbar SVG */}
        <div className="absolute top-0 inset-x-0 h-[29px] bg-white"></div>

        {/* TOP-LEFT ROUNDED CORNER */}
        <div className="absolute top-[29px] left-[24px] w-[25px] h-[25px]">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25V0H25C11.1929 0 0 11.1929 0 25Z" fill="white"/>
          </svg>
        </div>

        {/* TOP-RIGHT ROUNDED CORNER */}
        <div className="absolute top-[29px] right-[24px] w-[25px] h-[25px]">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 25V0H0C13.8071 0 25 11.1929 25 25Z" fill="white"/>
          </svg>
        </div>

        {/* BOTTOM-LEFT ROUNDED CORNER */}
        <div className="absolute bottom-[24px] left-[24px] w-[25px] h-[25px]">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V25H25C11.1929 25 0 13.8071 0 0Z" fill="white"/>
          </svg>
        </div>

        {/* BOTTOM-RIGHT ROUNDED CORNER */}
        <div className="absolute bottom-[24px] right-[24px] w-[25px] h-[25px]">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 0V25H0C13.8071 25 25 13.8071 25 0Z" fill="white"/>
          </svg>
        </div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <WhatWeDo />
        <Focus />
        <JoinMovement />
        <div className="h-[24px]"></div>
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
          background-color: white;
        }

        /* Hide scrollbar */
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default App;
