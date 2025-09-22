
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex items-center space-x-2">
        <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></div>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Gemini is thinking...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
