
import React from 'react';
import { MetricComparison, BenchmarkChart } from '../components/Charts';

const BaselinePage: React.FC = () => {
  const volumeData = [
    { name: '2024 Hires', value: 32, fill: '#333' },
    { name: '2025 Hires', value: 43, fill: '#3b82f6' }
  ];

  const acceptanceData = [
    { name: '2024 All', value: 78, fill: '#333' },
    { name: '2025 All', value: 91.5, fill: '#3b82f6' },
    { name: '2024 Eng', value: 67, fill: '#333' },
    { name: '2025 Eng', value: 88.2, fill: '#3b82f6' }
  ];

  const benchmarksEng = [
    { name: '2025 S3D', value: 94 },
    { name: 'EU SaaS Avg', value: 85, isBenchmark: true }
  ];

  const benchmarksSales = [
    { name: '2025 S3D', value: 65 },
    { name: 'Global AE Avg', value: 75, isBenchmark: true }
  ];

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
        <div>
          <h2 className="text-4xl font-black text-white">2025 Baseline</h2>
          <p className="text-zinc-500 mt-1">Measuring systemic responses to 2025 market constraints.</p>
        </div>
        <div className="text-right">
          <p className="text-blue-500 font-black text-4xl">+34%</p>
          <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Year-Over-Year Increase</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <MetricComparison data={volumeData} title="Hiring Volume (Absolute)" />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">2024 Total</span>
              <span className="text-zinc-200 text-sm font-black uppercase tracking-tight">32 Hires</span>
            </div>
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">2025 Total</span>
              <span className="text-blue-500 text-sm font-black uppercase tracking-tight">43 Hires</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <MetricComparison data={acceptanceData} title="Offer Acceptance Rate (%)" />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-600/10 p-4 rounded-xl border border-blue-500/20">
              <p className="text-blue-400 font-black text-lg">+13.5pp</p>
              <p className="text-[10px] text-zinc-500 uppercase font-bold">All Roles Change</p>
            </div>
            <div className="bg-blue-600/10 p-4 rounded-xl border border-blue-500/20">
              <p className="text-blue-400 font-black text-lg">+21.2pp</p>
              <p className="text-[10px] text-zinc-500 uppercase font-bold">Engineering Change</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Contextualized Speed (Days)</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase">Target Hit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase">Target Missed</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <BenchmarkChart data={benchmarksEng} title="Senior Eng IC3+ Time to Fill" />
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">All Eng Speed</span>
                  <span className="text-xs font-bold text-red-400">48d (Target &lt;44)</span>
                </div>
                <p className="text-[10px] text-zinc-600 italic">Slowed in senior roles due to intentional filtering.</p>
              </div>
            </div>
            <div className="space-y-4">
              <BenchmarkChart data={benchmarksSales} title="Senior Sales IC3+ Time to Fill" />
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">All Roles Avg</span>
                  <span className="text-xs font-bold text-green-400">40d (Target &lt;40)</span>
                </div>
                <p className="text-[10px] text-zinc-600 italic">Maintaining competitive speed vs SaaS benchmarks.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col space-y-8">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Channel Reality 2025</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-black text-white">7,291</p>
                <p className="text-[10px] text-zinc-500 uppercase font-medium">Applications</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-white">43</p>
                <p className="text-[10px] text-zinc-500 uppercase font-medium">Hires</p>
              </div>
            </div>
            
            <div className="p-4 bg-black/40 rounded-xl border border-zinc-800/50 space-y-1">
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">US AE Inbound Performance</p>
              <div className="flex justify-between items-end">
                <p className="text-white font-medium text-sm">1,562 Applications</p>
                <p className="text-red-500 font-black text-xl">0 Hires</p>
              </div>
            </div>

            <div className="space-y-4">
               <div>
                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-2">
                   <span className="text-zinc-500">Engineering Referrals</span>
                   <span className="text-blue-500">53.3% Overall</span>
                 </div>
                 <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                   <div className="w-[53.3%] h-full bg-blue-600"></div>
                 </div>
               </div>
               <div className="bg-blue-600/5 p-3 rounded-lg border border-blue-500/10">
                 <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest text-center">100% Referral for Senior IC3+</p>
               </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Sales Hires</span>
                <span className="text-xs text-zinc-300 font-bold">~86% Sourced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">AE Roles</span>
                <span className="text-xs text-blue-400 font-black italic">100% Sourced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaselinePage;
