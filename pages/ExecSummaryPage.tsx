
import React from 'react';

const ExecSummaryPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-black text-white">Exec Summary</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-2xl space-y-4">
          <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs">The 2025 Retrospective</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-blue-500 font-bold">01</span>
              <p className="text-zinc-300">Increased hiring volume by <span className="text-white font-bold">+34%</span> compared to 2024.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-500 font-bold">02</span>
              <p className="text-zinc-300">Materially improved offer acceptance across Engineering and Sales.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-500 font-bold">03</span>
              <p className="text-zinc-300">Maintained competitive speed versus EU SaaS benchmarks despite market friction.</p>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl space-y-4">
          <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Identified Constraints</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Velocity slowed only in senior, high-selectivity roles due to intentional filtering and local supply scarcity.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-black/40 rounded-xl border border-zinc-800/50">
              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Engineering IC3+</p>
              <p className="text-white font-medium">Budapest scarcity</p>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-zinc-800/50">
              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">GTM roles</p>
              <p className="text-white font-medium">Scope drift</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">2026 Strategy Formalization</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Speed where supply exists", desc: "Leveraging automation and clear role personas to move fast in fluid markets.", icon: "⚡" },
            { title: "Selectivity by design", desc: "Intentional friction in senior searches to ensure long-term cultural and technical fit.", icon: "🛡️" },
            { title: "Performance Bar Raising", desc: "Quantifying hire quality via NIPS to move from volume to density.", icon: "📈" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-colors group">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecSummaryPage;
