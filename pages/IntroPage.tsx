import React from 'react';

const IntroPage: React.FC<{onNext: () => void}> = ({ onNext }) => {
  return (
    <div className="space-y-16 py-8 animate-fade-in">
      <header className="space-y-6 max-w-4xl">
        <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-500 text-[10px] font-bold uppercase tracking-[3px] rounded">Board Strategy 2026</div>
        <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
          Shapr3D <br/>
          <span className="text-zinc-700">Talent Strategy</span>
        </h1>
        <p className="text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          Translating real-world constraints into predictable hiring outcomes.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-zinc-800">
        <div className="space-y-4">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs tracking-[2px]">Principal 01</h2>
          <p className="text-xl font-medium text-white">Reality over Aspiration</p>
          <p className="text-zinc-500 text-sm leading-relaxed">Market constraints guide our targets, not arbitrary goals.</p>
        </div>
        <div className="space-y-4 text-center">
           <button onClick={onNext} className="mt-12 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-black hover:scale-110 transition-transform active:scale-95 shadow-2xl shadow-blue-500/20 mx-auto">
             →
           </button>
           <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Enter Model</p>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;