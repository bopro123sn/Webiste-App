import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen font-sans bg-gray-900 text-white justify-center items-center overflow-hidden animate-fade-in p-4">
      <header className="text-center z-10 mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          Dynamic Animation
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          A pure SVG and CSS animation
        </p>
      </header>

      <main className="flex items-center justify-center w-full max-w-lg">
        <svg viewBox="0 0 400 400" className="w-full h-auto">
          <defs>
            <radialGradient id="core-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.5" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Orbital Paths */}
          <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 5"/>
          <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 5"/>
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 8"/>
          
          {/* Central Core */}
          <circle cx="200" cy="200" r="30" fill="url(#core-gradient)" className="animate-pulse-core" style={{ transformOrigin: '200px 200px' }} filter="url(#glow)"/>
          
          {/* Orbiting Particles */}
          <g className="animate-orbit-1" style={{ transformOrigin: '200px 200px' }}>
            <circle cx="350" cy="200" r="8" fill="#60A5FA" filter="url(#glow)"/>
          </g>
          
           <g className="animate-orbit-2" style={{ transformOrigin: '200px 200px' }}>
            <circle cx="300" cy="200" r="6" fill="#8B5CF6" filter="url(#glow)"/>
          </g>

           <g className="animate-orbit-3" style={{ transformOrigin: '200px 200px' }}>
            <circle cx="220" cy="20" r="10" fill="#2DD4BF" filter="url(#glow)"/>
          </g>
        </svg>
      </main>
    </div>
  );
};

export default App;