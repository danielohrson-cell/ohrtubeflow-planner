import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { FeatureCard } from './components/FeatureCard';
import { Feature, PhaseStatus } from './types';
import { 
  ArrowRight, 
  Cpu, 
  Music, 
  Youtube, 
  BrainCircuit, 
  ShieldCheck, 
  Sparkles,
  Layers,
  FileJson,
  Code2,
  CalendarClock,
  Edit3,
  PlugZap,
  Radio,
  FileText,
  Boxes
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const mvpFeatures: Feature[] = [
    {
      id: '1',
      title: 'YouTube Direct Connect',
      description: 'One-time OAuth setup to connect the Google/YouTube account, enabling the app to upload videos and thumbnails without manual drag-and-drop.',
      priority: 'High',
      complexity: 'Complex',
      status: PhaseStatus.PLANNED
    },
    {
      id: '2',
      title: 'High-Frequency Scheduler',
      description: 'A "Set and Forget" engine where users define daily slots (e.g., 8am, 2pm, 8pm). The app fills these slots automatically with generated content.',
      priority: 'High',
      complexity: 'Moderate',
      status: PhaseStatus.PLANNED
    },
    {
      id: '3',
      title: 'Genre Diversity Engine',
      description: 'Algorithms to ensure channel growth by rotating genres (Lofi, Jazz, EDM) to attract diverse demographics rather than posting the same style repeatedly.',
      priority: 'Medium',
      complexity: 'Moderate',
      status: PhaseStatus.PLANNED
    },
    {
      id: '4',
      title: 'Pre-Flight Editor',
      description: 'A dashboard where the AI proposes the Title/Description/Tags, but the user can manually override/edit them before the scheduled post time.',
      priority: 'High',
      complexity: 'Simple',
      status: PhaseStatus.PLANNED
    },
    {
      id: '5',
      title: 'Universal Asset Connector',
      description: 'Adapter system to ingest content from Producer.ai, Midjourney, Runway, or local folders, normalizing them into "Postable Assets".',
      priority: 'High',
      complexity: 'Complex',
      status: PhaseStatus.PLANNED
    },
    {
      id: '6',
      title: 'Policy & Compliance Bot',
      description: 'Automatically injects "AI Generated" labels and copyright disclaimers into the metadata to prevent channel strikes and ensure transparency.',
      priority: 'High',
      complexity: 'Simple',
      status: PhaseStatus.PLANNED
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        {/* Header */}
        <header className="mb-10 pb-6 border-b border-slate-800">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {activeTab === 'overview' && 'Strategic Overview'}
                {activeTab === 'workflow' && 'Automation Journey'}
                {activeTab === 'features' && 'MVP Requirements'}
                {activeTab === 'tech' && 'Tech & Infrastructure'}
                {activeTab === 'data' && 'Data Schemas'}
                {activeTab === 'docs' && 'Project Documentation'}
              </h2>
              <p className="text-slate-400">
                Blueprint for "TubeFlow": The Multi-Source AI to YouTube Automation Engine
              </p>
            </div>
            <div className="hidden md:block">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-mono rounded-full border border-blue-600/30">
                v0.3.0-EXPANDED
              </span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="text-yellow-400" size={20} />
                    The Mission
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Build a "Universal Command Center" that connects <span className="text-blue-400 font-medium">Any AI Generator</span> (Producer.ai, Sora, Runway) directly to <span className="text-red-400 font-medium">YouTube</span>. 
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The goal is high-frequency, high-quality daily posting without burnout. The app acts as the middleman—ingesting raw AI assets, polishing the metadata with Gemini, and scheduling them for diverse audience targeting.
                  </p>
                </div>
                
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Radio className="text-green-400" size={20} />
                    Growth Strategy
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                      <div>
                        <strong className="text-slate-200 block text-sm">Demographic Targeting</strong>
                        <p className="text-slate-500 text-xs">Algorithmically rotate genres (e.g., Morning Lofi, Afternoon Jazz, Night Phonk) to capture different user bases.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                       <div>
                        <strong className="text-slate-200 block text-sm">Asset Agnostic</strong>
                        <p className="text-slate-500 text-xs">We don't just do audio. We handle AI Music Videos, AI Shorts, and AI Art slideshows.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-blue-500/10">
                  <Boxes className="text-blue-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Centralized Hub</h3>
                <p className="text-slate-400 mb-8 max-w-sm">
                  1. <strong>Connect:</strong> Producer.ai, Runway, Midjourney.<br/>
                  2. <strong>Synthesize:</strong> Combine Audio + Visuals.<br/>
                  3. <strong>Generate:</strong> Title/Tags/Policy via Gemini.<br/>
                  4. <strong>Broadcast:</strong> YouTube API Scheduling.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setActiveTab('features')}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    Features <ArrowRight size={16} />
                  </button>
                  <button 
                    onClick={() => setActiveTab('docs')}
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 border border-slate-700"
                  >
                    Read Docs <FileText size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* WORKFLOW TAB */}
          {activeTab === 'workflow' && (
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative pl-24 group">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center z-10 group-hover:border-blue-500 transition-colors">
                    <PlugZap className="text-slate-400 group-hover:text-blue-400" />
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2">1. The "Connector"</h3>
                    <p className="text-slate-400 text-sm">User authenticates their sources: Producer.ai (Music), Runway (Video), Midjourney (Thumbnails), and their destination: YouTube.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-24 group">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center z-10 group-hover:border-purple-500 transition-colors">
                    <BrainCircuit className="text-slate-400 group-hover:text-purple-400" />
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2">2. Intelligent Assembly</h3>
                    <p className="text-slate-400 text-sm mb-3">The app pulls raw assets and assembles the "Package". Gemini AI analyzes the content to generate:</p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                      <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">Demographic-Specific Title</span>
                      <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">SEO Description</span>
                      <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">Policy Disclaimers</span>
                    </div>
                  </div>
                </div>

                 {/* Step 3 */}
                 <div className="relative pl-24 group">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center z-10 group-hover:border-yellow-500 transition-colors">
                    <Edit3 className="text-slate-400 group-hover:text-yellow-400" />
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2">3. The Pre-Flight Editor</h3>
                    <p className="text-slate-400 text-sm">A "Mission Control" view. The user sees what is about to be posted. They can tweak the title, change the genre tag, or hit "Approve".</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative pl-24 group">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center z-10 group-hover:border-red-500 transition-colors">
                    <CalendarClock className="text-slate-400 group-hover:text-red-400" />
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2">4. Scheduled Release</h3>
                    <p className="text-slate-400 text-sm">The App uploads the video via YouTube API scheduled for the next open diversity slot (e.g., ensuring we don't post 3 Jazz tracks in a row).</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FEATURES TAB */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <p className="text-slate-400">Core features for the Automation MVP.</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded border border-slate-700 text-slate-400">Total: {mvpFeatures.length}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mvpFeatures.map(f => <FeatureCard key={f.id} feature={f} />)}
              </div>
            </div>
          )}

          {/* TECH STACK TAB */}
          {activeTab === 'tech' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                  <Code2 />
                </div>
                <h3 className="font-bold text-white mb-2">The Platform</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>React + TypeScript</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>Node.js Scheduler Service</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>Adapter Pattern Architecture</li>
                </ul>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                  <BrainCircuit />
                </div>
                <h3 className="font-bold text-white mb-2">The Brain</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>Gemini 2.5 Flash (Metadata)</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>Audience Analyzer Agent</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>Genre Diversity Algorithms</li>
                </ul>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 text-green-400">
                  <Boxes />
                </div>
                <h3 className="font-bold text-white mb-2">Integration Hub</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div>Google/YouTube Data API v3</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div>Producer.ai Hooks</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div>Generic Video API Adapters</li>
                </ul>
              </div>
            </div>
          )}

           {/* DATA TAB */}
           {activeTab === 'data' && (
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 font-mono text-sm">
              <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                <FileJson className="text-orange-400"/>
                Automation Data Model
              </h3>
              <div className="bg-black/50 p-6 rounded-lg border border-slate-700/50">
                <pre className="text-blue-300">
{`interface ScheduledPost {
  id: string;
  status: 'draft' | 'approved' | 'scheduled' | 'published';
  scheduledTime: Date; // e.g. "2023-11-01T14:00:00Z"
  
  targetAudience: {
    primary: 'Study/Focus';
    secondary: 'Gamers';
    demographic: '18-24';
  };

  assets: {
    audioSource: string; // "Producer.ai/track/123"
    videoSource: string; // "Runway/gen/456" or "StaticImage"
    thumbnail: string;
  };

  content: {
    title: string;
    description: string;
    tags: string[];
  };

  policy: {
    containsPaidPromo: boolean; // false
    isAiGenerated: boolean; // true
  };
}`}
                </pre>
              </div>
              <p className="mt-6 text-slate-400">
                The schema is designed to support the <strong>High-Frequency Scheduler</strong>. It tracks the status of each slot to ensure no scheduled time is missed.
              </p>
            </div>
          )}

          {/* DOCS TAB */}
          {activeTab === 'docs' && (
             <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex items-center gap-2">
                  <FileText size={16} className="text-blue-400"/>
                  <span className="text-sm font-mono text-slate-300">docs/idea-inbox-mvp-roadmap.md</span>
                </div>
                <div className="p-8 prose prose-invert max-w-none prose-slate">
                  <h1 className="text-2xl font-bold text-white mb-6">TubeFlow MVP: Idea Inbox & Roadmap</h1>
                  
                  <div className="mb-8">
                    <h2 className="text-lg font-bold text-blue-400 mb-3 border-b border-blue-900/30 pb-2">1. What We Are Doing</h2>
                    <p className="text-slate-300 mb-2">
                      We are building a "Headless YouTube Studio" for AI Creators. The current YouTube upload flow is manual and friction-heavy. 
                      Our app automates the "Last Mile" of creation: taking raw generated assets (music from Producer.ai, visuals from other AIs) 
                      and turning them into fully compliant, SEO-optimized, scheduled YouTube videos.
                    </p>
                    <p className="text-slate-300">
                      <strong>Core Philosophy:</strong> "Diversity through Automation." We don't just spam; we schedule intelligently to hit different demographics at different times.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-lg font-bold text-green-400 mb-3 border-b border-green-900/30 pb-2">2. What Works (Proven Concepts)</h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-300">
                      <li><strong>YouTube Data API:</strong> We can successfully upload videos, set thumbnails, and schedule release times via API.</li>
                      <li><strong>Gemini Metadata:</strong> Using Large Language Models to generate engaging titles/descriptions based on raw audio files is highly effective and solves "Blank Page Syndrome."</li>
                      <li><strong>Producer.ai Integration:</strong> The music generation creates high-quality stems that are ready for publishing.</li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-lg font-bold text-purple-400 mb-3 border-b border-purple-900/30 pb-2">3. Architectural Decisions</h2>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-slate-200">A. The "Adapter" Pattern</h4>
                        <p className="text-slate-400 text-sm">
                          To support Producer.ai AND future platforms (Runway, Sora, Midjourney), we wrap every external API in a normalized `AssetProvider` interface. 
                          The core app doesn't know if the video came from Sora or a local file; it just knows it has a video stream.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-200">B. The "Pre-Flight" Check</h4>
                        <p className="text-slate-400 text-sm">
                          We decided NOT to have 100% blind automation initially. The "Pre-Flight Editor" allows the human to remain the "Editor-in-Chief" while the AI does the "Intern work."
                          This prevents embarrassing AI hallucinations in titles or descriptions.
                        </p>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-200">C. State-Based Scheduling</h4>
                         <p className="text-slate-400 text-sm">
                           Instead of simple cron jobs, we use a Slot-based system. If a slot (e.g., Tuesday 2PM) is missed because generation failed, the system flags it as "Skipped" 
                           and tries to fill the next slot, rather than crashing the queue.
                         </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-orange-400 mb-3 border-b border-orange-900/30 pb-2">4. Idea Inbox (Future)</h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-300">
                      <li><strong>Trend Jacking:</strong> Use Google Trends API to prompt Gemini to rename existing backlog songs to match current trending topics.</li>
                      <li><strong>Comment Bot:</strong> Auto-reply to comments on the channel using the persona of the "AI Producer."</li>
                      <li><strong>Multi-Platform:</strong> Eventually expand the "Scheduler" to push short-form clips to TikTok and Instagram Reels simultaneously.</li>
                    </ul>
                  </div>

                </div>
             </div>
          )}

        </div>
      </main>
    </div>
  );
}