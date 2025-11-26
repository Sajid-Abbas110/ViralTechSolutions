import React, { useState } from 'react';
import { LayoutGrid, Code, Server, Database, Cloud, Zap, Brush, Globe, GitBranch, Shield, Component } from 'lucide-react';

// --- DATA STRUCTURES ---

// Define the shape of a single tool/technology card
interface Tool {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// Define the shape of the content for each tab
interface TabContent {
  id: 'Design' | 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Framework';
  title: string;
  tools: Tool[];
}

// --- MOCK ICONS/ASSETS (Replicating the look without external images) ---

// Custom icon components or simple Lucide icons combined with styling
const FigmaIcon = () => (
    <div className="flex w-10 h-10 items-center justify-center text-white rounded-lg bg-red-500">
        <Component size={20} />
    </div>
);
const MarvelIcon = () => (
    <div className="flex w-10 h-10 items-center justify-center text-white rounded-lg bg-blue-500">
        <Brush size={20} />
    </div>
);
const AdobeXDIcon = () => (
    <div className="flex w-10 h-10 items-center justify-center text-white rounded-lg bg-purple-600">
        <LayoutGrid size={20} />
    </div>
);
const PhotoshopIcon = () => (
    <div className="flex w-10 h-10 items-center justify-center text-white rounded-lg bg-blue-900">
        Ps
    </div>
);
const SketchIcon = () => (
    <div className="flex w-10 h-10 items-center justify-center text-yellow-600 rounded-lg bg-yellow-100 border border-yellow-600">
        <Zap size={20} />
    </div>
);

// --- APPLICATION DATA ---

const techStackData: TabContent[] = [
  {
    id: 'Design',
    title: 'Design',
    tools: [
      { name: 'Figma', icon: <FigmaIcon />, color: 'bg-red-50' },
      { name: 'Marvel', icon: <MarvelIcon />, color: 'bg-blue-50' },
      { name: 'Adobe XD', icon: <AdobeXDIcon />, color: 'bg-purple-50' },
      { name: 'Photoshop', icon: <PhotoshopIcon />, color: 'bg-blue-50' },
      { name: 'Sketch', icon: <SketchIcon />, color: 'bg-yellow-50' },
    ],
  },
  {
    id: 'Frontend',
    title: 'Frontend',
    tools: [
      { name: 'React', icon: <Code size={20} className="text-cyan-500" />, color: 'bg-cyan-50' },
      { name: 'TypeScript', icon: <Globe size={20} className="text-blue-600" />, color: 'bg-blue-50' },
      { name: 'Tailwind CSS', icon: <Zap size={20} className="text-teal-400" />, color: 'bg-teal-50' },
      { name: 'Sass', icon: <Brush size={20} className="text-pink-500" />, color: 'bg-pink-50' },
    ],
  },
  {
    id: 'Backend',
    title: 'Backend',
    tools: [
      { name: 'Node.js', icon: <Server size={20} className="text-green-600" />, color: 'bg-green-50' },
      { name: 'Go', icon: <GitBranch size={20} className="text-cyan-700" />, color: 'bg-cyan-50' },
      { name: 'Python', icon: <Code size={20} className="text-yellow-500" />, color: 'bg-yellow-50' },
      { name: 'FastAPI', icon: <Shield size={20} className="text-green-400" />, color: 'bg-green-50' },
    ],
  },
  {
    id: 'Database',
    title: 'Database',
    tools: [
      { name: 'PostgreSQL', icon: <Database size={20} className="text-blue-700" />, color: 'bg-blue-50' },
      { name: 'MongoDB', icon: <Database size={20} className="text-green-500" />, color: 'bg-green-50' },
      { name: 'Redis', icon: <Database size={20} className="text-red-500" />, color: 'bg-red-50' },
    ],
  },
  {
    id: 'Cloud',
    title: 'Cloud',
    tools: [
      { name: 'GCP', icon: <Cloud size={20} className="text-blue-500" />, color: 'bg-blue-50' },
      { name: 'Firebase', icon: <Cloud size={20} className="text-yellow-600" />, color: 'bg-yellow-50' },
      { name: 'AWS', icon: <Cloud size={20} className="text-orange-500" />, color: 'bg-orange-50' },
    ],
  },
  {
    id: 'Framework',
    title: 'Framework',
    tools: [
      { name: 'Next.js', icon: <Code size={20} className="text-black" />, color: 'bg-gray-200' },
      { name: 'NestJS', icon: <Server size={20} className="text-red-700" />, color: 'bg-red-50' },
      { name: 'Django', icon: <Globe size={20} className="text-green-800" />, color: 'bg-green-50' },
      { name: 'Vue', icon: <Code size={20} className="text-green-600" />, color: 'bg-green-50' },
    ],
  },
];

// --- COMPONENTS ---

// Card component for a single tool
const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl w-32 h-32 text-center border border-gray-100">
    <div className={`p-2 rounded-full ${tool.color} mb-3`}>
        {tool.icon}
    </div>
    <p className="font-semibold text-sm text-gray-700">{tool.name}</p>
  </div>
);

// Main Application Component
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabContent['id']>('Design');

  // Find the currently active content
  const currentContent = techStackData.find(tab => tab.id === activeTab);

  const tabs = techStackData.map(tab => tab.id);

  return (
    <div className="min-h-screen p-8 bg-gray-50 flex flex-col items-center justify-center">
      
      {/* Header and Subtitle */}
      <div className="w-full max-w-5xl mb-12">
        <p className="text-sm font-medium text-gray-500 mb-1">Tech Stack We</p>
        <h1 className="text-3xl font-bold text-gray-900">
          Leverage for Building High-Performance Mobile Apps
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="w-full max-w-5xl mb-8 overflow-x-auto">
        <div className="flex space-x-3 p-1 rounded-full bg-white shadow-md items-center justify-center">
          {tabs.map((tabId) => (
            <button
              key={tabId}
              onClick={() => setActiveTab(tabId)}
              className={`
                px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200
                ${activeTab === tabId
                  ? 'bg-[#2C5E2B] text-white shadow-lg shadow-blue-300/50'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              {tabId}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full max-w-5xl bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
        
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          {currentContent?.title}
        </h2>
        
        {/* Tools Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center items-center justify-center">
            {currentContent?.tools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;