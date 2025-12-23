import React from 'react';
import { Check, X, HelpCircle, Activity } from 'lucide-react';

const QuizScreen = ({ question, progress, total, onAnswer }) => {
    const progressPercent = Math.round(((progress - 1) / total) * 100);

    return (
        <div className="max-w-2xl w-full mx-auto px-4 animate-in slide-in-from-right-10 duration-500">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-xs font-mono text-emerald-500/80 mb-2">
                    <span>SYSTEM_SCAN: {progress.toString().padStart(2, '0')}/{total}</span>
                    <span>{progressPercent}% COMPLETE</span>
                </div>
                <div className="h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                    <div
                        className="h-full bg-gradient-to-r from-emerald-600 to-purple-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 p-8 rounded-2xl shadow-2xl min-h-[300px] flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Activity className="w-32 h-32 text-emerald-500" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 leading-tight mb-8 relative z-10 transition-all">
                    {question.text}
                </h2>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-4 mt-auto relative z-10">
                    <button
                        onClick={() => onAnswer('no')}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950 border border-red-900/30 hover:border-red-500 hover:bg-red-950/30 transition-all group/btn"
                    >
                        <X className="w-8 h-8 text-red-500 mb-2 group-hover/btn:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-red-400">HAYIR</span>
                    </button>

                    <button
                        onClick={() => onAnswer('maybe')}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950 border border-yellow-900/30 hover:border-yellow-500 hover:bg-yellow-950/30 transition-all group/btn"
                    >
                        <HelpCircle className="w-8 h-8 text-yellow-500 mb-2 group-hover/btn:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-yellow-400">BELKİ</span>
                    </button>

                    <button
                        onClick={() => onAnswer('yes')}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950 border border-emerald-900/30 hover:border-emerald-500 hover:bg-emerald-950/30 transition-all group/btn"
                    >
                        <Check className="w-8 h-8 text-emerald-500 mb-2 group-hover/btn:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-emerald-400">EVET</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizScreen;
