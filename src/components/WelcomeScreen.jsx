import React from 'react';
import { Terminal, Cpu, Sparkles } from 'lucide-react';

const WelcomeScreen = ({ onStart }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 animate-in fade-in zoom-in duration-700">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-zinc-900 ring-1 ring-zinc-800 p-8 rounded-xl">
                    <Terminal className="w-24 h-24 text-emerald-500 mx-auto mb-4 animate-pulse" />
                    <h1 className="text-6xl font-black bg-gradient-to-br from-emerald-400 via-teal-200 to-purple-500 bg-clip-text text-transparent mb-2 tracking-tighter filter drop-shadow-lg">
                        FALSCRIPT
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
            </div>

            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl">
                Algoritmalar ruhunu okusun. <span className="text-emerald-400 font-semibold">Geleceğin kariyeri</span> seni bekliyor.
            </p>

            <button
                onClick={onStart}
                className="group relative px-8 py-4 bg-zinc-900 overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95"
            >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute inset-0 w-full h-full border border-emerald-500/50 rounded-md group-hover:border-emerald-400 transition-colors"></div>
                <div className="relative flex items-center gap-3">
                    <span className="text-xl font-bold text-emerald-100 tracking-wider">ANALİZE BAŞLA</span>
                    <Cpu className="w-6 h-6 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
                </div>
            </button>

            <div className="flex gap-4 text-xs text-zinc-600 font-mono mt-12">
                <span className="flex items-center gap-1">V 1.0.0 BETA</span>
            </div>
        </div>
    );
};

export default WelcomeScreen;
