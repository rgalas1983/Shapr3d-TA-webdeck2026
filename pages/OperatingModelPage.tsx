import React from 'react';

const OperatingModelPage: React.FC<{onSelectEngine: (id: string) => void}> = ({ onSelectEngine }) => {
  const inputs = [
    { label: "Conversion Ratios", sub: "Stage signals" },
    { label: "Role Clarity", sub: "Scope stability" },
    { label: "Market Reality", sub: "Supply/Salary" },
    { label: "Channel Efficacy", sub: "Inbound vs Sourced" },
    { label: "Outcome Data", sub: "Win/Loss analysis" }
  ];

  const frameworks = [
    { id: 'engine-1', label: "Calibrated Interviews" },
    { id: 'engine-2', label: "Signal-Weighted Automation" },
    { id: 'engine-3', label: "Role Blueprints" },
    { id: 'engine-4', label: "Geo Talent Maps" },
    { id: 'engine-5', label: "EB Optimisation" },
    { id: 'engine-6', label: "NIPS (Quality)" },
    { id: 'engine-7', label: "Embedded Partnering" },
    { id: 'engine-8', label: "Internal Exec Search" },
    { id: 'engine-9', label: "AI Governance" }
  ];

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-[3px] rounded mb-4">Core Architecture</div>
        <h2 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-tight">The Operating Model</h2>
        <p className="text-xl text-zinc-400 font-light leading-relaxed">
          A systemic architecture designed to translate <span className="text-white font-medium">market friction</span> into 
          <span className="text-blue-500 font-medium"> predictable talent density</span>.
        </p>
      </div>

      {/* The "Diagram" Container */}
      <div className="relative bg-[#080808] border border-zinc-800 p-8 lg:p-16 rounded-[4rem] overflow-hidden shadow-2xl engine-glow">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Inputs */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="mb-10 border-l-4 border-blue-600 pl-5">
              <h3 className="text-[11px] font-black text-white uppercase tracking-[5px] mb-1">Inputs</h3>
              <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">External Constraints</p>
            </div>
            <div className="space-y-3 flex-1">
              {inputs.map((input, i) => (
                <div key={i} className="bg-zinc-900/40 border border-zinc-800/60 p-5 rounded-2xl flex flex-col group transition-all hover:bg-zinc-900/60 hover:border-zinc-700">
                  <span className="text-[11px] font-black text-zinc-200 uppercase tracking-tight">{input.label}</span>
                  <span className="text-[9px] text-zinc-600 font-black uppercase tracking-widest mt-1">{input.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Frameworks (The "Engine") */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="text-center mb-10">
              <h3 className="text-[11px] font-black text-blue-500 uppercase tracking-[5px] mb-1">Frameworks</h3>
              <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">The Operating Lever</p>
            </div>
            
            {/* Visual Link Lines (Hidden on Mobile) */}
            <div className="w-full relative px-4">
              <div className="grid grid-cols-1 gap-3 relative z-10">
                {frameworks.map((fw, i) => (
                  <button 
                    key={i} 
                    onClick={() => onSelectEngine(fw.id)}
                    className="w-full group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-5 px-8 rounded-2xl shadow-xl font-black text-[12px] uppercase tracking-widest transition-all hover:translate-x-1 active:scale-[0.98] flex items-center justify-between border border-blue-400/20"
                  >
                    <span className="flex items-center gap-5">
                      <span className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center text-[11px] font-black text-blue-100 group-hover:bg-white/20 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {fw.label}
                    </span>
                    <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-all">
                      <span className="text-[10px] font-bold">CONFIG</span>
                      <span className="text-lg">→</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Outputs */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="lg:text-right mb-10 border-r-4 border-zinc-700 pr-5">
              <h3 className="text-[11px] font-black text-white uppercase tracking-[5px] mb-1">Outputs</h3>
              <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Measured Value</p>
            </div>
            
            <div className="space-y-6 flex-1 flex flex-col">
              <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-[2.5rem] backdrop-blur-sm group hover:bg-blue-600/20 transition-all cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-widest">Velocity</h4>
                </div>
                <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
                  Speed where supply exists; intentional selectivity where quality demands.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800/50 p-8 rounded-[2.5rem] backdrop-blur-sm flex-1 group hover:border-zinc-600 transition-all cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <h4 className="text-[11px] font-black text-white uppercase tracking-widest">Quality</h4>
                </div>
                <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
                  Every hire must raise the median performance bar and increase talent density.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center pt-8">
        <div className="px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full flex items-center gap-4 group">
          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">System Status:</span>
          <span className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Fully Operational 2026
          </span>
        </div>
      </div>
    </div>
  );
};

export default OperatingModelPage;