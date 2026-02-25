import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Database,
    Workflow,
    Cpu,
    Zap,
    Terminal,
    ArrowRight,
    Network,
    Braces,
    CheckCircle2,
    MessageSquare
} from 'lucide-react';

const EnginesSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="engines" className="py-24 relative bg-slate-950 overflow-hidden border-y border-slate-800 scroll-mt-20">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-full mb-6">
                        <Cpu className="h-4 w-4 text-slate-300" />
                        <span className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Our Core Technology</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Two powerful engines. <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Infinite possibilities.
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        We don't build software from scratch every time. We deploy our proprietary Intelligence and Automation engines, then build the exact interface your industry needs on top.
                    </p>
                </div>

                {/* Grid Layout for Engines */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 max-w-6xl mx-auto">

                    {/* ENGINE 1: Data Intelligence */}
                    <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full">
                        {/* Abstract UI Visual */}
                        <div className="mb-8 rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-sm overflow-hidden relative">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                            </div>
                            <div className="text-blue-400 flex items-center gap-2 mb-2"><Terminal size={14} /> <span>Ingesting data streams...</span></div>
                            <div className="text-slate-500 pl-6 mb-2">Analyzing raw CSV, SQL, and unstructured text...</div>
                            <div className="text-emerald-400 pl-6 mb-2 flex items-center gap-2"><CheckCircle2 size={14} /> <span>Patterns identified & indexed</span></div>
                            <div className="text-slate-300 pl-6">Model readiness: <span className="text-blue-400 font-bold">100%</span></div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
                        </div>

                        <div className="flex-grow">
                            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                                <Database className="text-blue-400 w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Data Intelligence Engine</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                The brain of your operation. It connects to your existing databases, spreadsheets, and APIs to clean, organize, and find predictive patterns in your data instantly.
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-blue-500/20 p-1 rounded"><Braces size={16} className="text-blue-400" /></div>
                                    <span>Instant Data Ingestion & Indexing</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-blue-500/20 p-1 rounded"><Zap size={16} className="text-blue-400" /></div>
                                    <span>Predictive Analytics & Forecasting</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-blue-500/20 p-1 rounded"><Network size={16} className="text-blue-400" /></div>
                                    <span>Cross-system Data Synchronization</span>
                                </li>
                            </ul>
                        </div>

                        <button
                            onClick={() => navigate('/engines#data')}
                            className="mt-auto w-full py-4 rounded-xl bg-slate-950 border border-slate-800 text-blue-400 font-semibold hover:bg-blue-900/20 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                            Deep dive into Data Engine <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* ENGINE 2: Workflow Automation */}
                    <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 flex flex-col h-full">
                        {/* Abstract UI Visual */}
                        <div className="mb-8 rounded-2xl bg-slate-950 border border-slate-800 p-4 overflow-hidden relative flex flex-col items-center justify-center min-h-[160px]">
                            <div className="flex items-center gap-4 w-full px-4">
                                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 text-xs font-mono">Trigger Event</div>
                                <div className="flex-1 h-px bg-slate-700 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-slate-400 p-1 rounded-full"><Workflow size={12} /></div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 text-xs font-mono flex items-center gap-2"><MessageSquare size={12} /> Send SMS</div>
                                    <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-mono flex items-center gap-2"><Database size={12} /> Update DB</div>
                                </div>
                            </div>
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
                        </div>

                        <div className="flex-grow">
                            <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                                <Workflow className="text-purple-400 w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Workflow Automation</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                The muscle that takes action. It uses the insights from the Data Engine to automatically trigger events, alert staff, communicate with clients, and generate documents.
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-purple-500/20 p-1 rounded"><Zap size={16} className="text-purple-400" /></div>
                                    <span>Logic-based Action Triggers</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-purple-500/20 p-1 rounded"><MessageSquare size={16} className="text-purple-400" /></div>
                                    <span>Native SMS & WhatsApp Routing</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-purple-500/20 p-1 rounded"><Terminal size={16} className="text-purple-400" /></div>
                                    <span>Automated Document & Invoice Gen</span>
                                </li>
                            </ul>
                        </div>

                        <button
                            onClick={() => navigate('/engines#workflow')}
                            className="mt-auto w-full py-4 rounded-xl bg-slate-950 border border-slate-800 text-purple-400 font-semibold hover:bg-purple-900/20 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                            Explore Automation <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EnginesSection;