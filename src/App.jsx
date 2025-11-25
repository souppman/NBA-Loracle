import React, { useState, useMemo } from 'react';
import { Search, Trophy, TrendingUp, Zap } from 'lucide-react';
import PlayerCard from './components/PlayerCard';
import { predictions } from './data/predictions';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('points'); // points, rebounds, assists

  const filteredPlayers = useMemo(() => {
    return predictions
      .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.team.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => b[sortBy] - a[sortBy]);
  }, [searchTerm, sortBy]);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <header className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[100px] -z-10" />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          NBA ORACLE
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          ML-Powered NBA Fantasy Point Projections. <br />
          <span className="text-sky-400">Context-Aware. Time-Decayed. Precision Engineered.</span>
        </p>

        {/* Stats Summary */}
        <div className="flex justify-center gap-8 mb-12 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <Zap className="text-yellow-400" size={18} />
            <span>{predictions.length} Players Analyzed</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="text-green-400" size={18} />
            <span>v4.0 Model Active</span>
          </div>
        </div>

        {/* Controls */}
        <div className="max-w-4xl mx-auto glass-card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">

          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search player or team..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          {/* Sort Toggles */}
          <div className="flex gap-2">
            {['points', 'rebounds', 'assists'].map((metric) => (
              <button
                key={metric}
                onClick={() => setSortBy(metric)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${sortBy === metric
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700'
                  }`}
              >
                {metric}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player, index) => (
            <PlayerCard key={player.id} player={player} index={index} />
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No players found matching "{searchTerm}"
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
