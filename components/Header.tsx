import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-14 border-b border-zinc-800 bg-[#050505] bg-opacity-50 backdrop-blur-md flex items-center justify-between px-8 shrink-0 z-10">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Internal</span>
        <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">TA Strategy 2026</span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex -space-x-1.5">
           {[1,2,3].map(i => (
             <div key={i} className="w-6 h-6 rounded-full border border-zinc-900 bg-zinc-800 flex items-center justify-center text-[8px] font-bold text-zinc-400">
               {String.fromCharCode(64 + i)}
             </div>
           ))}
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
