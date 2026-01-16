import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  ComposedChart
} from 'recharts';
import { SimulationScenario } from '../types';

interface GlucoseChartProps {
  scenario: SimulationScenario;
}

const GlucoseChart: React.FC<GlucoseChartProps> = ({ scenario }) => {
  
  const getLineColor = () => {
    switch (scenario.risk.level) {
      case 'severe': return '#ef4444'; // red-500
      case 'high': return '#f97316'; // orange-500
      case 'medium': return '#eab308'; // yellow-500
      default: return '#22c55e'; // green-500
    }
  };

  const lineColor = getLineColor();

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 relative h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold text-slate-800">餐後 4 小時血糖變化</h3>
        <span className="text-[10px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">mg/dL</span>
      </div>
      
      <div className="flex-1 w-full min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={scenario.data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={lineColor} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={lineColor} stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            
            <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 10 }}
                dy={5}
                interval="preserveStartEnd"
            />
            
            <YAxis 
                domain={[60, 'auto']} 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 10 }}
            />
            
            <Tooltip 
                contentStyle={{ 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    fontSize: '12px',
                    padding: '8px'
                }}
            />
            
            {/* Danger Zone Reference */}
            <ReferenceLine 
                y={140} 
                stroke="#ef4444" 
                strokeDasharray="3 3" 
                label={{ 
                    value: "140 警戒線", 
                    position: "insideTopRight", 
                    fill: "#ef4444", 
                    fontSize: 10,
                    opacity: 0.8
                }} 
            />

            <Area 
                type="monotone" 
                dataKey="value" 
                stroke="none" 
                fillOpacity={1} 
                fill="url(#colorValue)" 
            />
            
            <Line 
                type="monotone" 
                dataKey="value" 
                stroke={lineColor} 
                strokeWidth={3} 
                dot={{ r: 3, fill: 'white', stroke: lineColor, strokeWidth: 2 }}
                activeDot={{ r: 5 }}
                animationDuration={800}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GlucoseChart;