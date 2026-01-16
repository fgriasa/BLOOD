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
  
  // Determine color based on risk level for the chart line
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
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative h-[400px]">
      <h3 className="text-lg font-bold mb-4 text-slate-800 ml-2">餐後 4 小時血糖變化圖</h3>
      
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={scenario.data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
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
                tick={{ fill: '#64748b', fontSize: 12 }}
                dy={10}
            />
            
            <YAxis 
                domain={[60, 250]} 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12 }}
                label={{ value: '血糖 (mg/dL)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 12 }}
            />
            
            <Tooltip 
                contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)'
                }}
                labelStyle={{ color: '#64748b', marginBottom: '4px' }}
                itemStyle={{ color: '#334155', fontWeight: 600 }}
            />
            
            {/* Danger Zone Reference */}
            <ReferenceLine 
                y={140} 
                stroke="#ef4444" 
                strokeDasharray="5 5" 
                label={{ 
                    value: "血管受損警戒線 (140)", 
                    position: "insideTopRight", 
                    fill: "#ef4444", 
                    fontSize: 11 
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
                dot={{ r: 4, fill: 'white', stroke: lineColor, strokeWidth: 2 }}
                activeDot={{ r: 6 }}
                animationDuration={1000}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GlucoseChart;