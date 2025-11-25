import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Users } from 'lucide-react';

const PlayerCard = ({ player, index }) => {
    const fantasyScore = (player.points + 1.2 * player.rebounds + 1.5 * player.assists).toFixed(1);
    const isHot = player.points > 20;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card p-6 relative overflow-hidden group"
        >
            {/* Background Glow for Hot Players */}
            {isHot && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
            )}

            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-white">{player.name}</h3>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                        {player.team} <span className="text-xs">vs</span> {player.opponent}
                    </p>
                </div>
                <div className="text-right">
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Proj. FPTS</div>
                    <div className="text-2xl font-bold text-sky-400">{fantasyScore}</div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center p-2 rounded-lg bg-slate-800/50">
                    <div className="text-xs text-gray-400 mb-1">PTS</div>
                    <div className="text-lg font-semibold text-white">{player.points.toFixed(1)}</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-slate-800/50">
                    <div className="text-xs text-gray-400 mb-1">REB</div>
                    <div className="text-lg font-semibold text-white">{player.rebounds.toFixed(1)}</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-slate-800/50">
                    <div className="text-xs text-gray-400 mb-1">AST</div>
                    <div className="text-lg font-semibold text-white">{player.assists.toFixed(1)}</div>
                </div>
            </div>

            {isHot && (
                <div className="mt-4 flex items-center gap-2 text-xs text-green-400 font-medium">
                    <TrendingUp size={14} />
                    <span>High Confidence Play</span>
                </div>
            )}
        </motion.div>
    );
};

export default PlayerCard;
