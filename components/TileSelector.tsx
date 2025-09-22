import React from 'react';

interface TileSelectorProps {
  tiles: string[];
  onSelect: (tileText: string) => void;
}

const TileSelector: React.FC<TileSelectorProps> = ({ tiles, onSelect }) => {
  if (tiles.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {tiles.map((tile, index) => (
        <button
          key={index}
          onClick={() => onSelect(tile)}
          className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700 rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105 animate-pop-in"
          style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: 'forwards' }}
        >
          {tile}
        </button>
      ))}
    </div>
  );
};

export default TileSelector;