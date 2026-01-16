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
    <div className="min-h-screen pb-12">
      {/* Sticky Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl filter drop-shadow-sm">🍽️</span>
            <div>
                <h1 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">血糖飆升模擬器</h1>
                <p className="text-xs text-slate-500 hidden md:block">台灣常見飲食 vs 血糖變化視覺化</p>
            </div>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full font-medium border border-slate-200">
            僅供衛教參考
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        
        {/* Top Section: Interaction & Visualization Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Input (Food Selector) */}
          <div className="lg:col-span-4 h-[500px] lg:h-auto">
            <FoodSelector 
              selectedId={selectedScenarioId} 
              onSelect={setSelectedScenarioId} 
            />
          </div>

          {/* Right: Output (Chart) */}
          <div className="lg:col-span-8 flex flex-col h-full min-h-[400px]">
             <GlucoseChart scenario={currentScenario} />
          </div>
        </div>

        {/* Middle Section: Stats Summary */}
        <StatsPanel scenario={currentScenario} />

        {/* Bottom Section: Analysis & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <SuggestionBox text={currentScenario.suggestion} />
           <InfoSection />
        </div>

      </main>
    </div>
  );
};

export default App;