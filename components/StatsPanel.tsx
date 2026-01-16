import React from 'react';
import { Activity, Clock, ShieldAlert } from 'lucide-react';
import { SimulationScenario } from '../types';

interface StatsPanelProps {
  scenario: SimulationScenario;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ scenario }) => {
  const { peakValue, durationHigh, risk } = scenario;

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-4">
      {/* Peak Value Card */}
      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1 mb-1">
            <Activity className="w-3 h-3 text-slate-400" />
            <span className="text-[10px] text-slate-500 uppercase font-semibold">峰值</span>
        </div>
        <div className="text-2xl md:text-3xl font-black text-slate-800 leading-none my-1">
            {peakValue}
        </div>
      </div>

      {/* Duration Card */}
      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-slate-400" />
            <span className="text-[10px] text-slate-500 uppercase font-semibold">高糖時長</span>
        </div>
        <div className={`text-2xl md:text-3xl font-black leading-none my-1 ${durationHigh > 60 ? 'text-red-500' : 'text-slate-800'}`}>
            {durationHigh}<span className="text-xs font-normal text-slate-400 ml-0.5">分</span>
        </div>
      </div>

      {/* Risk Assessment Card */}
      <div className={`
        p-3 rounded-xl shadow-sm border flex flex-col items-center justify-center text-center transition-colors duration-500
        ${risk.bgClass} ${risk.borderClass}
      `}>
        <div className="flex items-center gap-1 mb-1">
            <ShieldAlert className={`w-3 h-3 ${risk.colorClass}`} />
            <span className={`text-[10px] uppercase font-semibold ${risk.colorClass}`}>
                風險
            </span>
        </div>
        <div className={`text-xl md:text-3xl font-black leading-none my-1 ${risk.colorClass}`}>
            {risk.title.split(' ')[0]} {/* 取第一段文字，避免過長 */}
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;