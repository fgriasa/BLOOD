import React, { useState } from 'react';
import { SCENARIOS } from './constants';
import FoodSelector from './components/FoodSelector';
import StatsPanel from './components/StatsPanel';
import GlucoseChart from './components/GlucoseChart';
import InfoSection, { SuggestionBox } from './components/InfoSection';

const App: React.FC = () => {
  // Default to full bowl of rice
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('rice-full');
  const currentScenario = SCENARIOS[selectedScenarioId];

  return (
    <div className="min-h-screen bg-slate-50 pb-10 font-sans">
      {/* Compact Navbar */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍽️</span>
            <h1 className="text-base font-bold text-slate-800">血糖模擬器</h1>
          </div>
          <div className="text-[10px] text-slate-400 border border-slate-200 px-2 py-0.5 rounded-full">
            衛教用
          </div>
        </div>
      </nav>

      {/* Main Content: Single Column centered on mobile, max-w-md mimicking app view */}
      <main className="max-w-md mx-auto px-3 py-4 space-y-4">
        
        {/* 1. Food Selector (Sticky-ish or Top priority) */}
        <section>
            <FoodSelector 
              selectedId={selectedScenarioId} 
              onSelect={setSelectedScenarioId} 
            />
        </section>

        {/* 2. Chart Section */}
        <section className="h-[280px]">
             <GlucoseChart scenario={currentScenario} />
        </section>

        {/* 3. Stats Compact Row */}
        <section>
            <StatsPanel scenario={currentScenario} />
        </section>

        {/* 4. Suggestion Box (Highlight) */}
        <section>
           <SuggestionBox text={currentScenario.suggestion} />
        </section>

        {/* 5. Details (Scroll to see) */}
        <section>
           <InfoSection />
        </section>

      </main>
    </div>
  );
};

export default App;