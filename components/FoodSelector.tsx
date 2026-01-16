import React, { useState, useEffect } from 'react';
import { Utensils, Coffee, CakeSlice, Croissant, Cookie } from 'lucide-react';
import { SCENARIOS } from '../constants';
import { SimulationScenario } from '../types';

interface FoodSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

const FoodSelector: React.FC<FoodSelectorProps> = ({ selectedId, onSelect }) => {
  const scenarios = Object.values(SCENARIOS);
  
  // Define Categories
  const categories = [
    { id: 'rice', label: '米飯', icon: <Utensils className="w-3 h-3" /> },
    { id: 'noodle', label: '麵食', icon: <span className="text-xs">🍜</span> },
    { id: 'bread', label: '麵包', icon: <Croissant className="w-3 h-3" /> },
    { id: 'pastry', label: '糕餅', icon: <Cookie className="w-3 h-3" /> },
    { id: 'drink', label: '飲料', icon: <Coffee className="w-3 h-3" /> },
    { id: 'dessert', label: '甜點', icon: <CakeSlice className="w-3 h-3" /> },
  ];

  // Determine active category based on selected item, or default to first
  const currentScenario = scenarios.find(s => s.id === selectedId);
  const [activeCategory, setActiveCategory] = useState<string>('rice');

  // Sync category when selectedId changes from outside (optional, but good for consistency)
  useEffect(() => {
    if (currentScenario) {
        setActiveCategory(currentScenario.category);
    }
  }, [currentScenario?.category]);

  const activeItems = scenarios.filter(s => s.category === activeCategory);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
      {/* 1. Category Tabs (Horizontal Scroll) */}
      <div className="flex overflow-x-auto scrollbar-hide border-b border-slate-100 bg-slate-50/50">
        {categories.map((cat) => (
            <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                    flex-none px-4 py-3 flex items-center gap-1.5 text-xs font-bold transition-colors whitespace-nowrap
                    ${activeCategory === cat.id 
                        ? 'text-blue-600 bg-white border-b-2 border-blue-500' 
                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                    }
                `}
            >
                {cat.icon}
                {cat.label}
            </button>
        ))}
      </div>
      
      {/* 2. Items List (Horizontal Scroll) */}
      <div className="p-3 overflow-x-auto scrollbar-hide whitespace-nowrap flex gap-2">
        {activeItems.map((item) => {
            const isSelected = selectedId === item.id;
            return (
                <button
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={`
                        relative flex-none w-[80px] h-[80px] rounded-xl flex flex-col items-center justify-center text-center transition-all duration-200
                        border
                        ${isSelected 
                        ? 'border-blue-500 bg-blue-50 shadow-sm ring-1 ring-blue-500' 
                        : 'border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50'
                        }
                    `}
                >
                    <span className="text-2xl mb-1 filter drop-shadow-sm leading-none">{item.icon}</span>
                    <span className={`font-bold text-[11px] leading-tight px-1 whitespace-normal ${isSelected ? 'text-blue-700' : 'text-slate-700'}`}>
                        {item.label}
                    </span>
                    
                    {isSelected && (
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    )}
                </button>
            );
        })}
      </div>
    </div>
  );
};

export default FoodSelector;