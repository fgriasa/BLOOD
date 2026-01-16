import React from 'react';
import { Info, Lightbulb } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 h-full">
      <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
        <Info className="w-5 h-5" />
        為什麼會這樣？
      </h3>
      <p className="text-sm text-blue-700 mb-3 leading-relaxed">
        白飯是高 GI（升糖指數）食物。大量攝取會導致血糖快速飆升（Spike），胰臟必須大量分泌胰島素來「救火」。
      </p>
      <ul className="text-sm text-blue-700 space-y-2 pl-2">
        <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></span>
            <span><span className="font-bold">短期影響：</span>飯後嗜睡、注意力下降。</span>
        </li>
        <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></span>
            <span><span className="font-bold">長期風險：</span>胰島素阻抗、糖尿病、血管發炎。</span>
        </li>
      </ul>
    </div>
  );
};

export const SuggestionBox: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="p-5 rounded-xl border-l-4 border-slate-300 bg-slate-50 transition-all duration-500 flex gap-4 items-start shadow-sm h-full">
            <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
                <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wide mb-1">營養師小建議</h4>
                <p className="text-slate-600 leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default InfoSection;