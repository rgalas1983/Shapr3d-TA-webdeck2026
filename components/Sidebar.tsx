import React from 'react';
import { NavItem, PageId } from '../types';

interface SidebarProps {
  items: NavItem[];
  activeId: PageId;
  onSelect: (id: PageId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeId, onSelect }) => {
  const sections = Array.from(new Set(items.map(i => i.section)));

  return (
    <aside className="w-72 bg-[#0a0a0a] border-r border-zinc-800 flex flex-col shrink-0 z-20">
      <div className="p-8 border-b border-zinc-800">
        <div className="mb-2">
          <h1 className="text-xl font-bold tracking-tighter text-white uppercase leading-tight">
            <span className="text-blue-500 font-black">Shapr3D</span><br />
            Strategy 2026
          </h1>
        </div>
        <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[2px]">Talent Acquisition</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-hide">
        {sections.map(section => (
          <div key={section}>
            <h2 className="px-4 text-[11px] font-black text-zinc-600 uppercase tracking-widest mb-3">{section}</h2>
            <ul className="space-y-1">
              {items.filter(i => i.section === section).map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => onSelect(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 font-medium ${
                      activeId === item.id 
                        ? 'bg-blue-600/10 text-blue-400 font-bold border-l-2 border-blue-500 rounded-l-none' 
                        : 'text-zinc-500 hover:text-white hover:bg-zinc-800/50'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;