import React, { useState } from 'react';
import { Briefcase, Building2, Coins, RefreshCw, ChevronRight, Share2, Layers, Linkedin, Twitter, Facebook, MessageCircle, X } from 'lucide-react';

const ResultCard = ({ result, onRetry }) => {
    const { persona, topRoles, topSectors } = result;
    const [showShare, setShowShare] = useState(false);

    const shareUrl = window.location.href;
    const shareText = `FalScript analizime göre ben %${persona.percentage} orayla ${persona.title} çıktım! Kariyer falıma buradan bakabilirsin:`;

    const handleShare = (platform) => {
        let url = '';
        switch (platform) {
            case 'linkedin':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                break;
            case 'whatsapp':
                url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                break;
        }
        window.open(url, '_blank');
        setShowShare(false);
    };

    return (
        <div className="max-w-4xl w-full mx-auto px-4 pb-12 animate-in slide-in-from-bottom-10 duration-700 relative">

            {/* Share Modal Overlay */}
            {showShare && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm rounded-3xl animate-in fade-in duration-200">
                    <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-2xl w-full max-w-sm shadow-2xl relative">
                        <button
                            onClick={() => setShowShare(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Share2 className="w-5 h-5 text-purple-400" />
                            Sonucunu Paylaş
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => handleShare('linkedin')} className="flex items-center justify-center gap-2 p-3 bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] rounded-xl transition-colors border border-[#0077b5]/20">
                                <Linkedin className="w-5 h-5" />
                                <span className="font-semibold">LinkedIn</span>
                            </button>
                            <button onClick={() => handleShare('twitter')} className="flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors border border-white/10">
                                <Twitter className="w-5 h-5" />
                                <span className="font-semibold">X / Twitter</span>
                            </button>
                            <button onClick={() => handleShare('whatsapp')} className="flex items-center justify-center gap-2 p-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-xl transition-colors border border-[#25D366]/20">
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-semibold">WhatsApp</span>
                            </button>
                            <button onClick={() => handleShare('facebook')} className="flex items-center justify-center gap-2 p-3 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] rounded-xl transition-colors border border-[#1877F2]/20">
                                <Facebook className="w-5 h-5" />
                                <span className="font-semibold">Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Header Badge */}
            <div className="flex justify-center mb-8">
                <div className="bg-zinc-900 border border-purple-500/50 rounded-full px-6 py-2 flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    <span className="text-purple-300 font-mono text-sm tracking-wider">MATCH FOUND: {persona.percentage}%</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Result */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-zinc-900/90 border border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden box-glow backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div className="relative z-10">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded uppercase tracking-wider">
                                    {topRoles[0].name}
                                </span>
                                <span className="px-3 py-1 bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-bold rounded uppercase tracking-wider">
                                    {persona.sector || "Teknoloji"}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4">
                                {persona.title}
                            </h1>

                            <p className="text-lg text-slate-300 leading-relaxed mb-8 border-l-4 border-emerald-500 pl-4">
                                {persona.description}
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-mono text-slate-500 mb-3 flex items-center gap-2">
                                        <Layers className="w-4 h-4" /> TECH STACK
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {persona.stack.map((tech) => (
                                            <span key={tech} className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-slate-200 text-sm font-medium rounded-lg border border-zinc-700 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800">
                                        <div className="flex items-center gap-2 text-yellow-500 mb-2">
                                            <Coins className="w-5 h-5" />
                                            <span className="font-bold text-sm">Maaş & Haklar</span>
                                        </div>
                                        <p className="text-slate-400 text-sm">{persona.salary}</p>
                                    </div>
                                    <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800">
                                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                                            <Building2 className="w-5 h-5" />
                                            <span className="font-bold text-sm">Hedef Şirketler</span>
                                        </div>
                                        <p className="text-slate-400 text-sm truncate">{persona.companies.join(', ')}</p>
                                    </div>
                                </div>

                                <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800">
                                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                                        <Briefcase className="w-5 h-5" />
                                        <span className="font-bold text-sm">Neden Bu Rol?</span>
                                    </div>
                                    <p className="text-slate-400 text-sm italic">"{persona.why}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Stats */}
                <div className="space-y-6">
                    {/* Alternatives */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <h3 className="text-slate-400 text-sm font-mono mb-4 uppercase">Alternatif Rotalar</h3>
                        <div className="space-y-4">
                            {topRoles.slice(1, 4).map((role, idx) => (
                                <div key={role.id} className="group">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-slate-300 font-medium">{role.name}</span>
                                        <span className="text-slate-500 font-mono">{role.percentage}%</span>
                                    </div>
                                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ${idx === 0 ? 'bg-purple-500' : 'bg-slate-600'
                                                }`}
                                            style={{ width: `${role.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <h3 className="text-slate-400 text-sm font-mono mb-4 uppercase">Sektör Uyumu</h3>
                        <div className="space-y-3">
                            {topSectors.map((sector, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-zinc-700'}`}></div>
                                    <span className={`text-sm ${idx === 0 ? 'text-emerald-100' : 'text-slate-500'}`}>{sector.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={onRetry}
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-slate-300 rounded-xl transition-all border border-zinc-700 hover:border-emerald-500/50"
                        >
                            <RefreshCw className="w-4 h-4" />
                            <span>Tekrar Dene</span>
                        </button>
                        <button
                            onClick={() => setShowShare(true)}
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-slate-300 rounded-xl transition-all border border-zinc-700 hover:border-purple-500/50"
                        >
                            <Share2 className="w-4 h-4" />
                            <span>Paylaş</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
