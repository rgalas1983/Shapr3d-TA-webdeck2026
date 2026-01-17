
import React from 'react';

interface DetailPoint {
  label: string;
  desc: string;
  data?: string;
}

interface EngineSection {
  title: string;
  items: string[];
}

interface EngineContent {
  title: string;
  subtitle: string;
  inputs: { text: string; data?: string }[];
  connection?: string;
  framework: {
    whatItIs: string;
    details?: DetailPoint[];
    sections?: EngineSection[];
  };
  outputs: string[];
}

const engineContent: EngineContent[] = [
  {
    title: "Interview Process (tied to roles)",
    subtitle: "Role-Calibrated Interview Architecture",
    inputs: [
      { text: "Stage / overall conversion", data: "2025 time to hire: 40 days (All roles, target hit), 48 days (Engineering, target <44 missed)" },
      { text: "Role definition clarity", data: "Marketing senior roles- time to fill ranged 58–90+ days in 2025 when scope evolved mid-search" },
      { text: "Senior velocity drag driven by selectivity and market constraints", data: "Engineering IC3+ time to fill 94 days vs EU SaaS industry average of 85 days (Budapest market); Sales IC3+ 65 days vs global SaaS industry benchmark of 60-90 days (quality only through sourcing)" }
    ],
    connection: "Velocity degradation occurred only in senior, high-selectivity roles. Industry benchmark comparisons remain strong, and offer acceptance increases indicate intentional filtering over process inefficiency.",
    framework: {
      whatItIs: "Interview processes explicitly differ by role archetype and seniority, not just by function.",
      details: [
        { label: "Engineering IC3+", desc: "Deeper signal per stage. Heavy upfront calibration (portfolio/code/context review).", data: "Senior Engineering hires were 100% referral-led in 2025, reinforcing need for high-signal evaluation" },
        { label: "Sales AE IC3", desc: "Early disqualifying filter (Stephen + task). Clearer blueprint from signals given by founding AE team.", data: "Time in stage for AEs stretched due to travel and in person requirement." },
        { label: "Marketing IC3+", desc: "Role scope now clearer – close partnership with Maya to continue to refine success factors.", data: "Scope instability directly correlated with 90+ day TTF for senior roles in 2025" }
      ]
    },
    outputs: ["Reduced late-stage resets", "Lower wasted cycle time", "High offer acceptance", "Quality over raw speed"]
  },
  {
    title: "Automation for Nurture & Outreach",
    subtitle: "Signal-Weighted Automation",
    inputs: [
      { text: "Channel effectiveness imbalance (inbound noise vs quality)", data: "7291 applications to 43 hires. US AE role: 1562 applications, 0 hires from inbound." },
      { text: "AI-generated inbound volume masking quality", data: "Inbound volume increased without corresponding senior-quality yield." },
      { text: "Admin drag vs strategic work", data: "Calculated time saved using Ashby vs Greenhouse automation." }
    ],
    connection: "Inbound volume has reached a scale where human-only screening is inefficient. Automation is deployed to filter noise, not to replace judgment.",
    framework: {
      whatItIs: "Automation only where scale adds signal, never where judgment is required.",
      sections: [
        { title: "AI Deployment", items: ["Shapr3d specific Job ad generation tool with anti-fit language", "Nurture sequences segmented by seniority and geography in Ashby", "Screening triage for obvious low-intent inbound via Ashby AI"] },
        { title: "Strategic Tooling", items: ["Ashby automation for scale", "Shapr3d specific Stock option simulator for offer-stage education", "Clear human checkpoints before any progression"] }
      ]
    },
    outputs: ["Reduced inbound noise", "Faster recruiter throughput", "Higher early signal density", "Optimized acceptance: 78% → 91.5%"]
  },
  {
    title: "Role Definitions & Frameworks",
    subtitle: "Role Blueprint System",
    inputs: [
      { text: "Role definition drift (GTM)", data: "Marketing IC3+ time to fill exceeded 90 days when scope shifted mid-search" },
      { text: "AE inbound volume/quality imbalance", data: "Senior Sales hires: ~86% sourced. AEs 100% sourced. Inbound was discovery journey." },
      { text: "Need to prevent hiring that doesn’t raise bar", data: "Ensuring every hire increases the median talent density of the team." }
    ],
    framework: {
      whatItIs: "Monitoring signals from founding roles to build focused personas/blueprints for every recurring hire.",
      details: [
        { label: "Blueprint Competencies", desc: "Map directly to performance review dimensions and Quality of Hire monitored through NIPS system." },
        { label: "Back-testing Signal", desc: "Iterative review: did this specific role definition produce high performers? Enables recalibration of future searches." }
      ]
    },
    outputs: ["Stable search scopes", "Reduced mid-search drift", "Focused sourcing conversion", "Performance-intent alignment"]
  },
  {
    title: "Geo Talent Maps",
    subtitle: "Geo-Constraint Hiring Strategy",
    inputs: [
      { text: "Market reality constraints", data: "Budapest senior engineering lack of talent depth. IC3+ time to fill 94 days." },
      { text: "Failed senior relocation attempts", data: "International sourcing yielded no senior Engineering relocations in 2025." },
      { text: "Referral dependence in constrained markets", data: "Engineering hires 53.3% referral overall; 100% for seniors." }
    ],
    framework: {
      whatItIs: "Geo maps explicitly classify locations as Build (Denver), Defensive (Budapest), or Experimental (future hubs).",
      sections: [
        { title: "Regional Strategy", items: ["Engineering IC3+: Assume scarcity; design for referrals + EB primarily", "Sales & Marketing: Aggressive sourcing + network leverage", "No generic EMEA/US strategies; hyper-local execution"] }
      ]
    },
    outputs: ["Realistic hiring plans", "Faster investment decisions", "Stronger market penetration", "Supply-aligned growth"]
  },
  {
    title: "Employer Brand Optimisation",
    subtitle: "Shapr Champions Operating Model",
    inputs: [
      { text: "Referral over-performance in engineering", data: "Engineering referrals grew from 6% (2024) → 53.3% (2025)" },
      { text: "EB necessity for Budapest density", data: "Leveraged to support referrals and intent quality, not raw volume." }
    ],
    framework: {
      whatItIs: "An internal advocacy system, not a content program. Focused on storytelling and value perception.",
      sections: [
        { title: "Operating Pillars", items: ["Authentic, role-specific content designed to filter out low-intent candidates", "Community events engineered for cross-geo cohesion (Budapest ↔ Denver)", "Expanded rewards program embedded into high-referral onboarding moments"] }
      ]
    },
    outputs: ["Stronger referral flow", "Higher inbound intent quality", "Reduced outbound dependence", "Organic market presence"]
  },
  {
    title: "Net Individual Performers (NIPs)",
    subtitle: "Talent Density Measurement System",
    inputs: [
      { text: "Need to quantify bar-raising talent", data: "Is new talent raising the team's median performance?" },
      { text: "Source-quality hypothesis testing", data: "Do specific sources consistently produce better long-term performers?" }
    ],
    framework: {
      whatItIs: "Lightweight scoring model using existing performance reviews and cultural rubrics.",
      sections: [
        { title: "System Capabilities", items: ["Utilising cultural rubric alongside functional role frameworks", "Tracking delta in median performance post-hire", "Evidence-led channel prioritisation based on performance outcomes"] }
      ]
    },
    outputs: ["Measurable Quality of Hire", "Evidence-led prioritisation", "TA as business advisor", "Data-backed hiring"]
  },
  {
    title: "Function Partnering Model",
    subtitle: "Embedded Talent Partnering",
    inputs: [
      { text: "TA shift from execution to strategy", data: "Recruiters aligned to functions for long-term capability planning." },
      { text: "Advise against low-value hiring", data: "Challenging requests when value or market reality doesn't align." }
    ],
    framework: {
      whatItIs: "Embedded partners who know market realities and team performance distributions intimately.",
      sections: [
        { title: "Partnership Scope", items: ["Hiring vs redeployment advisory conversations", "Coaching leaders on sourcing and effective decision-making", "Upstream participation in headcount planning"] }
      ]
    },
    outputs: ["Fewer low-leverage hires", "Better upfront decisions", "Upstream TA operation", "Strategic function alignment"]
  },
  {
    title: "Exec Search Capability",
    subtitle: "Internal Headhunting Track",
    inputs: [
      { text: "Senior non-inbound dependency", data: "Senior Eng and Sales hires overwhelmingly non-inbound in 2025." },
      { text: "Search cost and dependency reduction", data: "Internalizing high-value searches for IC4+, M3+, and VP roles." }
    ],
    framework: {
      whatItIs: "Selected recruiters trained as headhunters for senior, confidential, and founder-critical searches.",
      sections: [
        { title: "Search Methodology", items: ["Proactive market mapping and competitive landscape analysis", "Direct headhunting outreach and relationship management", "Founder-critical and confidential search execution"] }
      ]
    },
    outputs: ["Reduced agency dependency", "Higher senior hire quality", "Internal market intelligence", "Precision hiring"]
  },
  {
    title: "Tooling & AI Deployment",
    subtitle: "AI with Guardrails",
    inputs: [
      { text: "Proven ROI from automation", data: "Estimated €4.7k time-value saving in 2025 via Ashby + Metaview." },
      { text: "Reinvesting time into judgment", data: "Freeing recruiter time for candidate-facing, judgment-heavy work." }
    ],
    framework: {
      whatItIs: "Ashby as the system of record and intelligence layer. Governed AI deployment.",
      sections: [
        { title: "2026 Impact", items: ["AI-led notes and reporting patterns to reduce manual friction", "Hands-free interviewing for better candidate engagement", "Pattern recognition to identify funnel bottlenecks early"] }
      ]
    },
    outputs: ["Maximized recruiter time", "Sustained team efficiency", "Better engagement quality", "Governed AI growth"]
  }
];

const EnginePage: React.FC<{index: number}> = ({ index }) => {
  const content = engineContent[index];
  if (!content) return null;

  return (
    <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-5xl font-black text-white leading-tight">{content.title}</h2>
        <p className="text-xl text-blue-500 font-black uppercase tracking-[0.2em]">{content.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#0c0c0c] border border-zinc-800/60 p-8 rounded-[2rem] h-full flex flex-col">
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Primary Inputs Addressed
            </h3>
            
            <div className="space-y-6 flex-1">
              {content.inputs.map((input, i) => (
                <div key={i} className="group relative">
                  <div className="p-5 rounded-2xl bg-zinc-900/40 border border-transparent group-hover:border-blue-500/30 group-hover:bg-zinc-900/60 transition-all duration-300">
                    <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                      {input.text}
                    </p>
                    {input.data && (
                      <div className="mt-4 overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out">
                         <div className="pt-4 border-t border-zinc-800/50">
                            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Evidence Signal</p>
                            <p className="text-[11px] text-zinc-500 italic leading-relaxed">{input.data}</p>
                         </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {content.connection && (
              <div className="mt-10 pt-8 border-t border-zinc-800/50">
                <p className="text-[9px] text-blue-500 font-black uppercase tracking-[2px] mb-3 italic">Strategic Connection</p>
                <p className="text-xs text-zinc-500 italic leading-relaxed font-medium">
                  {content.connection}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Framework */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-zinc-900/30 border border-zinc-800/50 p-10 rounded-[2.5rem] space-y-12 shadow-2xl relative overflow-hidden group">
            <div className="space-y-4 relative z-10">
              <h3 className="text-[10px] font-bold text-blue-500 uppercase tracking-[3px]">The Framework</h3>
              <p className="text-2xl text-white font-light leading-relaxed max-w-3xl">
                {content.framework.whatItIs}
              </p>
            </div>
            
            {content.framework.details && (
              <div className="grid grid-cols-1 gap-6 relative z-10">
                {content.framework.details.map((p, i) => (
                  <div key={i} className="bg-black/40 p-8 rounded-2xl border border-zinc-800/50 hover:border-blue-500/50 transition-all group/card overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="space-y-2 flex-1">
                        <h4 className="text-blue-400 font-black text-sm uppercase tracking-wider">{p.label}</h4>
                        <p className="text-zinc-300 text-sm leading-relaxed font-light">{p.desc}</p>
                      </div>
                      {p.data && (
                        <div className="shrink-0 flex items-center md:items-start">
                          <div className="bg-blue-600/10 px-4 py-2 rounded-lg border border-blue-500/10 group-hover/card:bg-blue-600/20 transition-colors">
                            <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Signal Evidence ⚡</span>
                          </div>
                        </div>
                      )}
                    </div>
                    {p.data && (
                      <div className="max-h-0 group-hover/card:max-h-20 transition-all duration-500 ease-in-out">
                         <div className="mt-6 pt-6 border-t border-zinc-800/50">
                            <p className="text-xs text-zinc-500 font-medium leading-relaxed italic">{p.data}</p>
                         </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {content.framework.sections && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                {content.framework.sections.map((section, i) => (
                  <div key={i} className="space-y-6">
                    <h4 className="text-zinc-500 font-bold text-[10px] uppercase tracking-[3px] border-b border-zinc-800/50 pb-3">{section.title}</h4>
                    <ul className="space-y-4">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex gap-4 items-start group/li">
                          <span className="text-blue-500 font-black mt-1 leading-none transition-transform group-hover/li:translate-x-1">→</span>
                          <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover/li:text-zinc-200 transition-colors">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             {content.outputs.map((out, i) => (
               <div key={i} className="bg-blue-600/5 border border-blue-500/10 px-6 py-6 rounded-2xl flex flex-col justify-center items-center text-center gap-3 group hover:bg-blue-600/10 transition-all duration-300">
                 <span className="text-blue-500 font-black text-2xl group-hover:scale-125 transition-transform duration-500">✓</span>
                 <p className="text-white font-bold text-[10px] uppercase tracking-[2px] leading-tight">{out}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
      
      <div className="text-center pt-8">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[4px] font-bold">Hover cards to reveal supporting evidence & data signals</p>
      </div>
    </div>
  );
};

export default EnginePage;
