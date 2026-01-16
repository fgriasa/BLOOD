import React from 'react';
import { Utensils, Info } from 'lucide-react';
import { SCENARIOS } from '../constants';

interface RiceSelectorProps {
  selectedId: number;
  onSelect: (id: number) => void;
}

const RiceSelector: React.FC<RiceSelectorProps> = ({ selectedId, onSelect }) => {
  const scenarioKeys = Object.keys(SCENARIOS).map(Number).sort((a, b) => a - b);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
        <Utensils className="h-5 w-5 text-blue-500" />
        步驟 1：選擇攝取的白飯量
      </h2>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        {scenarioKeys.map((key) => {
          const scenario = SCENARIOS[key];
          const isSelected = selectedId === key;
          
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`
                relative p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300
                border-2
                ${isSelected 
                  ? 'border-blue-500 bg-blue-50 shadow-md scale-[1.02]' 
                  : 'border-transparent bg-slate-50 hover:bg-slate-100'
                }
              `}
            >
              <div className="flex mb-2 space-x-[-8px]">
                {/* Visual representation of bowls */}
                 {Array.from({ length: Math.ceil(key) }).map((_, i) => (
                    <span key={i} className="text-2xl drop-shadow-sm filter">🍚</span>
                 ))}
                 {key % 1 !== 0 && <span className="text-xl self-end">🥣</span>}
              </div>
              
              <span className={`font-bold ${isSelected ? 'text-blue-700' : 'text-slate-700'}`}>
                {scenario.label}
              </span>
              <span className="text-xs text-slate-400 mt-1">
                {scenario.subLabel}
              </span>
              
              {isSelected && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-4 border-t border-slate-100">
        <p className="text-xs text-slate-500 flex items-start gap-2 leading-relaxed">
           <Info className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
           <span>假設情境：空腹狀態下單獨食用白米飯（精緻澱粉），未搭配足夠蔬菜或蛋白質。</span>
        </p>
      </div>
    </div>
  );
};

export default RiceSelector;