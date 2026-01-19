import React from 'react';

const IntroPage: React.FC<{onNext: () => void}> = ({ onNext }) => {
  return (
    <div className="space-y-16 py-8 animate-fade-in">
      <header className="space-y-6 max-w-4xl">
        <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-500 text-[10px] font-bold uppercase tracking-[3px] rounded">Strategy 2026</div>
        <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
          Shapr3D <br/>
          <span className="text-zinc-700">Talent Acquisition Strategy 2026</span>
        </h1>
        <p className="text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          An <span className="text-white font-medium italic">Input → Framework → Output</span> Operating Model Focused on Speed, Success, and Quality of Hire.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-zinc-800">
        <div className="space-y-4">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs">Principal 01</h2>
          <p className="text-xl font-medium text-white">Inputs reflect reality, not aspiration</p>
          <p className="text-zinc-500 text-sm leading-relaxed">We acknowledge market constraints and signals before defining hiring targets.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs">Principal 02</h2>
          <p className="text-xl font-medium text-white">Frameworks are the levers we control</p>
          <p className="text-zinc-500 text-sm leading-relaxed">TA operations are structured systems that mitigate risk and accelerate signal.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs">Principal 03</h2>
          <p className="text-xl font-medium text-white">Outputs are Speed, Success, Quality</p>
          <p className="text-zinc-500 text-sm leading-relaxed">We measure performance not just by volume, but by the delta in talent density.</p>
        </div>
      </div>

      <div className="bg-zinc-900/50 p-12 rounded-[2.5rem] border border-zinc-800 space-y-8">
        <div className="max-w-2xl">
          <h3 className="text-[10px] font-black uppercase tracking-[3px] text-zinc-500 mb-6">The System Purpose</h3>
          <p className="text-2xl text-zinc-300 font-light leading-relaxed">
            This document defines how Talent Acquisition at Shapr3D operates as a system. It is not a hiring plan—it is an <span className="text-white font-medium italic underline decoration-blue-500 underline-offset-8">operating model</span> that translates real-world constraints into predictable hiring outcomes.
          </p>
        </div>
        <button 
          onClick={onNext}
          className="group flex items-center gap-6 text-white font-black text-lg hover:text-blue-500 transition-all"
        >
          Begin Strategy Walkthrough
          <span className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600 transition-all text-2xl">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
