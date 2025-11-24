import React from 'react';
import { Feature, PhaseStatus } from '../types';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const getPriorityColor = (p: string) => {
    switch (p) {
      case 'High': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Low': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
        <span className={`text-xs px-2 py-1 rounded border ${getPriorityColor(feature.priority)}`}>
          {feature.priority}
        </span>
      </div>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        {feature.description}
      </p>
      <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-700/50 pt-3">
        <span className="flex items-center gap-1">
          Complexity: <span className="text-slate-300">{feature.complexity}</span>
        </span>
        <span className="flex items-center gap-1">
          Status: <span className="text-slate-300">{feature.status}</span>
        </span>
      </div>
    </div>
  );
};