
import React from 'react';

const FinalAlignmentPage: React.FC = () => {
  const pillars = [
    {
      title: "Precision Speed",
      subtitle: "Velocity where it matters",
      icon: "⚡",
      color: "blue",
      items: [
        "Faster where supply exists (Denver GTM)",
        "Intentional slowness for senior Eng IC4+",
        "Minimal admin friction via Ashby automation",
        "Higher signal density early in the funnel"
      ]
    },
    {
      title: "Predictable Success",
      subtitle: "Systemic outcome reliability",
      icon: "🎯",
      color: "green",
      items: [
        "91.5% acceptance rate preserved",
        "Accurate hiring plan delivery metrics",
        "Reduced 'Pipeline Junk' through role blueprints",
        "Executive search internalization for precision"
      ]
    },
    {
      title: "Measurable Quality",
      subtitle: "Raising the median performance",
      icon: "💎",
      color: "zinc",
      items: [
        "Explicit NIPS scoring for new hire cohorts",
        "Direct feedback loops into role design",
        "Advisor-level TA credibility across functions",
        "Evidence-led channel and source prioritization"
      ]
    }
  ];

  return (
    <div className="space-y-16 py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <header className="space-y-4 max-w-4xl">
        <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-500 text-[10px] font-bold uppercase tracking-[3px] rounded">Strategy Completion</div>
        <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
          Final Output <br/>
          <span className="text-zinc-600">Alignment 2026</span>
        </h2>
        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          The cumulative effect of our Input → Framework → Output model translates into three measurable business outcomes.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <div 
            key={i} 
            className="group relative bg-[#0c0c0c] border border-zinc-800/60 p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/5 blur-[80px] rounded-full group-hover:bg-blue-600/10 transition-colors"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">{pillar.icon}</span>
                <span className={`text-[10px] font-bold uppercase tracking-[3px] text-zinc-600 group-hover:text-blue-500 transition-colors`}>Outcome 0{i+1}</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white tracking-tight">{pillar.title}</h3>
                <p className={`text-[11px] font-bold uppercase tracking-widest text-blue-500/80`}>{pillar.subtitle}</p>
              </div>

              <ul className="space-y-5 pt-4 border-t border-zinc-800/50">
                {pillar.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <span className="text-blue-500 font-black mt-1.5 shrink-0 text-xs leading-none">→</span>
                    <span className="text-zinc-400 text-sm font-medium leading-snug group-hover:text-zinc-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-12">
        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-[3.5rem] p-16 lg:p-24 relative overflow-hidden group text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h4 className="text-3xl md:text-5xl font-bold text-white leading-tight italic tracking-tight">
              "Building the global <span className="text-blue-500">bar-raiser ecosystem</span> for Shapr3D."
            </h4>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-12 bg-zinc-800"></div>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[5px]">Talent Acquisition Operating Model 2026</p>
              <div className="h-px w-12 bg-zinc-800"></div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="text-center pb-8">
        <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-[2px]">Internal Strategy Document • Confidential</p>
      </footer>
    </div>
  );
};

export default FinalAlignmentPage;
