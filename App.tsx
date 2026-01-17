import React, { useState } from 'react';
import { PageId, NavItem } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import IntroPage from './pages/IntroPage';
import ExecSummaryPage from './pages/ExecSummaryPage';
import BaselinePage from './pages/BaselinePage';
import OperatingModelPage from './pages/OperatingModelPage';
import EnginePage from './pages/EnginePage';
import FinalAlignmentPage from './pages/FinalAlignmentPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('intro');

  const navItems: NavItem[] = [
    { id: 'intro', label: 'Purpose', section: 'VISION & CONTEXT' },
    { id: 'exec-summary', label: 'Exec Summary', section: 'VISION & CONTEXT' },
    { id: 'baseline-2025', label: '2025 Baseline', section: 'VISION & CONTEXT' },
    { id: 'operating-model', label: 'The Operating Model', section: 'TA ENGINE' },
    { id: 'engine-1', label: 'Interview Process', section: 'TA ENGINE' },
    { id: 'engine-2', label: 'Automation & AI', section: 'TA ENGINE' },
    { id: 'engine-3', label: 'Role Blueprints', section: 'TA ENGINE' },
    { id: 'engine-4', label: 'Geo Talent Maps', section: 'TA ENGINE' },
    { id: 'engine-5', label: 'Employer Brand', section: 'TA ENGINE' },
    { id: 'engine-6', label: 'Quality (NIPs)', section: 'TA ENGINE' },
    { id: 'engine-7', label: 'Partnering Model', section: 'TA ENGINE' },
    { id: 'engine-8', label: 'Internal Exec Search', section: 'TA ENGINE' },
    { id: 'engine-9', label: 'Tooling Strategy', section: 'TA ENGINE' },
    { id: 'final-alignment', label: 'Final Output Alignment', section: 'ALIGNMENT' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'intro': return <IntroPage onNext={() => setCurrentPage('exec-summary')} />;
      case 'exec-summary': return <ExecSummaryPage />;
      case 'baseline-2025': return <BaselinePage />;
      case 'operating-model': return <OperatingModelPage onSelectEngine={(id) => setCurrentPage(id as PageId)} />;
      case 'engine-1': return <EnginePage index={0} />;
      case 'engine-2': return <EnginePage index={1} />;
      case 'engine-3': return <EnginePage index={2} />;
      case 'engine-4': return <EnginePage index={3} />;
      case 'engine-5': return <EnginePage index={4} />;
      case 'engine-6': return <EnginePage index={5} />;
      case 'engine-7': return <EnginePage index={6} />;
      case 'engine-8': return <EnginePage index={7} />;
      case 'engine-9': return <EnginePage index={8} />;
      case 'final-alignment': return <FinalAlignmentPage />;
      default: return <IntroPage onNext={() => setCurrentPage('exec-summary')} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#050505] overflow-hidden text-zinc-100 selection:bg-blue-600/30">
      <Sidebar items={navItems} activeId={currentPage} onSelect={setCurrentPage} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
          <div className="max-w-6xl mx-auto animate-fade-in">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;