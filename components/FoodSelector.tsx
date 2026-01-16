import React from 'react';
import { Utensils, Coffee, CakeSlice, Croissant, Cookie } from 'lucide-react';
import { SCENARIOS } from '../constants';

interface FoodSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

const FoodSelector: React.FC<FoodSelectorProps> = ({ selectedId, onSelect }) => {
  const scenarios = Object.values(SCENARIOS);
  
  // Group scenarios by category
  const categories = [
    { id: 'rice', label: '米飯類', icon: <Utensils className="w-3 h-3" /> },
    { id: 'noodle', label: '麵食類', icon: <span className="text-xs">🍜</span> },
    { id: 'bread', label: '麵包類', icon: <Croissant className="w-3 h-3" /> },
    { id: 'pastry', label: '糕餅類', icon: <Cookie className="w-3 h-3" /> },
    { id: 'drink', label: '飲料', icon: <Coffee className="w-3 h-3" /> },
    { id: 'dessert', label: '甜點', icon: <CakeSlice className="w-3 h-3" /> },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col">
      <h2 className="text-base font-bold mb-3 flex items-center gap-2 text-slate-800">
        <Utensils className="h-4 w-4 text-blue-500" />
        選擇食物種類
      </h2>
      
      <div className="flex-1 overflow-y-auto pr-1">
        {categories.map((cat) => {
            const items = scenarios.filter(s => s.category === cat.id);
            if (items.length === 0) return null;

            return (
                <div key={cat.id} className="mb-4 last:mb-0">
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        {cat.icon}
                        {cat.label}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                        {items.map((item) => {
                            const isSelected = selectedId === item.id;
                            return (
                                <button
                                key={item.id}
                                onClick={() => onSelect(item.id)}
                                className={`
                                    relative p-2 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-200
                                    border min-h-[70px]
                                    ${isSelected 
                                    ? 'border-blue-500 bg-blue-50 shadow-sm transform scale-[1.01] ring-1 ring-blue-500' 
                                    : 'border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50'
                                    }
                                `}
                                >
                                <span className="text-2xl mb-1 filter drop-shadow-sm leading-none">{item.icon}</span>
                                <span className={`font-bold text-xs leading-tight ${isSelected ? 'text-blue-700' : 'text-slate-700'}`}>
                                    {item.label}
                                </span>
                                <span className="text-[9px] text-slate-400 mt-0.5 line-clamp-1 leading-tight">
                                    {item.subLabel}
                                </span>
                                
                                {isSelected && (
                                    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                                )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            );
        })}
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100">
        <p className="text-[10px] text-slate-400 text-center">
           點擊上方食物查看變化
        </p>
      </div>
    </div>
  );
};

export default FoodSelector;