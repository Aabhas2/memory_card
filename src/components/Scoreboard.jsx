import React from 'react'

function Scoreboard({score, bestScore }) {
    return(
        <div className="flex justify-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.1)] border border-white/20">
                <p className="text-2xl font-bold text-white">
                    Score: <span className="text-yellow-300 ml-2">{score}</span>
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.1)] border border-white/20">
                <p className="text-2xl font-bold text-white">
                    Best: <span className="text-yellow-300 ml-2">{bestScore}</span>
                </p>
            </div>
        </div>
    );
}

export default Scoreboard
