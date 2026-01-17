import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell
} from 'recharts';

interface ChartProps {
  data: any[];
  title: string;
}

export const MetricComparison: React.FC<ChartProps> = ({ data, title }) => (
  <div className="h-64 w-full bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800">
    <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">{title}</h3>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 11}} />
        <YAxis axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 11}} />
        <Tooltip contentStyle={{backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px'}} itemStyle={{color: '#fff'}} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill || '#3b82f6'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const BenchmarkChart: React.FC<ChartProps> = ({ data, title }) => (
  <div className="h-48 w-full bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800">
    <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">{title}</h3>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#222" />
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#999', fontSize: 10, fontWeight: 700}} width={100} />
        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px'}} />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={16}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.isBenchmark ? '#333' : '#3b82f6'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);