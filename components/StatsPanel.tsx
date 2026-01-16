import React from 'react';
import { Activity, Clock, ShieldAlert } from 'lucide-react';
import { SimulationScenario } from '../types';

interface StatsPanelProps {
  scenario: SimulationScenario;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ scenario }) => {
  const { peakValue, durationHigh, risk } = scenario;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Peak Value Card */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1 mb-2">
            <Activity className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">預估血糖峰值</span>
        </div>
        <div className="text-4xl font-black text-slate-800 my-2 tracking-tight">
            {peakValue}
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
            正常空腹 &lt; 100
        </span>
      </div>

      {/* Duration Card */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1 mb-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">高血糖時長 (&gt;140)</span>
        </div>
        <div className={`text-4xl font-black my-2 tracking-tight ${durationHigh > 60 ? 'text-red-500' : 'text-slate-800'}`}>
            {durationHigh}<span className="text-lg font-bold ml-1 text-slate-500">分</span>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
            血管受損風險區
        </span>
      </div>

      {/* Risk Assessment Card */}
      <div className={`
        p-5 rounded-xl shadow-sm border flex flex-col items-center justify-center text-center transition-colors duration-500
        ${risk.bgClass} ${risk.borderClass}
      `}>
        <div className="flex items-center gap-1 mb-2">
            <ShieldAlert className={`w-4 h-4 ${risk.colorClass}`} />
            <span className={`text-xs uppercase tracking-wide font-semibold ${risk.colorClass}`}>
                綜合風險評估
            </span>
        </div>
        <div className={`text-3xl font-black my-2 tracking-tight ${risk.colorClass}`}>
            {risk.title}
        </div>
        <span className={`text-xs font-medium opacity-80 ${risk.colorClass}`}>
            {risk.description}
        </span>
      </div>
    </div>
  );
};

export default StatsPanel;