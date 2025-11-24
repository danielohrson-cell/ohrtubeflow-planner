import React from 'react';
import { LayoutDashboard, ListTodo, Route, Database, Code2, FileText } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'workflow', label: 'User Journey', icon: Route },
    { id: 'features', label: 'MVP Features', icon: ListTodo },
    { id: 'data', label: 'Data Model', icon: Database },
    { id: 'tech', label: 'Tech Stack', icon: Code2 },
    { id: 'docs', label: 'Project Docs', icon: FileText },
  ];

  return (
    <nav className="w-64 bg-slate-900 border-r border-slate-800 h-screen sticky top-0 flex flex-col p-4 hidden md:flex">
      <div className="mb-8 px-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          TubeFlow
        </h1>
        <p className="text-xs text-slate-500 mt-1">Automation Planner</p>
      </div>
      
      <div className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
        <p className="text-xs text-slate-400 mb-2">Project Status</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
          <span className="text-sm font-semibold text-yellow-500">Planning Phase</span>
        </div>
      </div>
    </nav>
  );
};