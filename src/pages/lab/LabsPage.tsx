import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Beaker, Mic, WifiOff, ScanEye, TerminalSquare,
    Cpu, Activity, Database, GitMerge, Radio, AlertCircle,
    CheckCircle2, ArrowRight
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


const LabsPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 pt-24 font-sans selection:bg-cyan-500/30">
            <Header />
            {/* 1. HERO SECTION */}
            <section className="relative py-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-full mb-6 shadow-lg shadow-cyan-900/20">
                        <Beaker className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Mzatinova R&D</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Building the <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Next Iteration.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                        Welcome to Mzatinova Labs. This is our live roadmap and experimental playground where we test the infrastructure, models, and features of tomorrow.
                    </p>
                </div>
            </section>

            {/* 2. PROJECT: LOCAL NLP */}
            <section className="py-24 relative border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                                    <Mic className="text-cyan-400 w-8 h-8" />
                                </div>
                                <div>
                                    <span className="px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider">Beta Testing</span>
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Chichewa NLP Model</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                We are training our Data Engine to understand natural language voice inputs in local Malawian dialects. This bridges the digital divide, allowing rural field workers to submit complex data via simple voice notes on basic feature phones.
                            </p>

                            <ul className="space-y-4 text-slate-400">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                    <span><strong>Acoustic Modeling:</strong> Trained on thousands of hours of local dialect variations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                    <span><strong>Auto-Structuring:</strong> Converts unstructured voice stories into strict JSON database entries.</span>
                                </li>
                            </ul>
                        </div>

                        {/* VISUAL MOCKUP: Voice to JSON */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-8 overflow-hidden min-h-[400px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />

                            <div className="w-full max-w-sm relative z-10 flex flex-col gap-6">
                                {/* Audio Wave UI */}
                                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Radio className="w-4 h-4 text-red-500 animate-pulse" />
                                            <span className="text-xs font-mono text-slate-400">incoming_audio.wav</span>
                                        </div>
                                        <span className="text-xs font-mono text-cyan-400">00:12s</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-1 h-12">
                                        {[...Array(15)].map((_, i) => (
                                            <div key={i} className="w-1.5 bg-cyan-500/50 rounded-full animate-pulse" style={{ height: `${Math.max(20, Math.random() * 100)}%`, animationDelay: `${i * 0.1}s` }} />
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-center text-slate-600">
                                    <ArrowRight className="w-6 h-6 rotate-90" />
                                </div>

                                {/* JSON Output UI */}
                                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-lg font-mono text-xs overflow-hidden">
                                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
                                        <TerminalSquare className="w-4 h-4 text-emerald-400" />
                                        <span className="text-slate-400">parsed_output.json</span>
                                    </div>
                                    <div className="text-slate-300">
                                        <span className="text-pink-400">{"{"}</span><br />
                                        &nbsp;&nbsp;<span className="text-blue-300">"crop_type"</span>: <span className="text-amber-300">"Maize"</span>,<br />
                                        &nbsp;&nbsp;<span className="text-blue-300">"disease_detected"</span>: <span className="text-emerald-300">true</span>,<br />
                                        &nbsp;&nbsp;<span className="text-blue-300">"confidence_score"</span>: <span className="text-purple-300">0.94</span><br />
                                        <span className="text-pink-400">{"}"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PROJECT: EDGE ENGINE */}
            <section className="py-24 relative bg-slate-900/30 border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* VISUAL MOCKUP: Cloud Sync */}
                        <div className="order-2 lg:order-1 relative rounded-3xl border border-slate-800 bg-slate-900/50 p-8 overflow-hidden min-h-[400px] flex flex-col items-center justify-center">

                            <div className="w-full max-w-sm flex flex-col gap-2 relative z-10">
                                {/* Cloud Status */}
                                <div className="bg-slate-950 border border-red-500/30 p-4 rounded-xl flex items-center justify-between mb-4 shadow-lg shadow-red-900/10">
                                    <div className="flex items-center gap-3">
                                        <Database className="w-5 h-5 text-slate-500" />
                                        <span className="text-sm font-semibold text-slate-300">Main Cloud Server</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-red-400 font-mono bg-red-400/10 px-2 py-1 rounded">
                                        <WifiOff className="w-3 h-3" /> OFFLINE
                                    </span>
                                </div>

                                <div className="flex justify-center py-2">
                                    <div className="w-px h-10 border-r-2 border-dashed border-slate-700" />
                                </div>

                                {/* Edge Status */}
                                <div className="bg-slate-950 border border-emerald-500/50 p-5 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <Cpu className="w-5 h-5 text-emerald-400" />
                                            <span className="text-sm font-bold text-white">Local Edge Node</span>
                                        </div>
                                        <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                                            <Activity className="w-3 h-3" /> ACTIVE
                                        </span>
                                    </div>

                                    <div className="bg-slate-900 rounded p-2 text-xs font-mono text-slate-400 space-y-1">
                                        <div className="text-slate-500">{'>'} caching_data_packet... [OK]</div>
                                        <div className="text-slate-500">{'>'} running_local_rules... [OK]</div>
                                        <div className="text-amber-400">{'>'} waiting_for_uplink...</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                                    <WifiOff className="text-emerald-400 w-8 h-8" />
                                </div>
                                <div>
                                    <span className="px-3 py-1 rounded-full border border-purple-400/20 bg-purple-400/10 text-purple-400 text-xs font-bold uppercase tracking-wider">Alpha Testing</span>
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Offline Edge Engine</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                Connectivity drops shouldn't mean operational failure. We are building a lightweight containerized version of our engine that runs directly on local hardware in deep remote locations.
                            </p>

                            <ul className="space-y-4 text-slate-400">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span><strong>Local Decision Making:</strong> Executes critical automated workflows even without internet access.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span><strong>Asynchronous Sync:</strong> Cryptographically packages data locally and burst-syncs to the cloud the moment a connection is re-established.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PROJECT: VISION ANALYTICS */}
            <section className="py-24 relative border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                    <ScanEye className="text-blue-400 w-8 h-8" />
                                </div>
                                <div>
                                    <span className="px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">Early Research</span>
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Predictive Computer Vision</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                Moving beyond text and numbers. We are integrating drone and fixed-CCTV camera feeds directly into our workflow automation, allowing visual anomalies to trigger systemic actions.
                            </p>

                            <ul className="space-y-4 text-slate-400">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <span><strong>Agriculture Integration:</strong> Drones fly over fields; the engine detects blight and instantly triggers a fertilizer supply chain request.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <span><strong>Security & Operations:</strong> Detect unauthorized vehicles or safety protocol breaches and trigger multi-channel alerts.</span>
                                </li>
                            </ul>
                        </div>

                        {/* VISUAL MOCKUP: Vision Radar */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-8 overflow-hidden min-h-[400px] flex items-center justify-center">

                            {/* Fake Camera Interface */}
                            <div className="w-full max-w-sm aspect-video bg-slate-950 border border-slate-700 rounded-lg relative overflow-hidden shadow-2xl">
                                {/* Grid overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:20px_20px]" />

                                {/* UI Overlays */}
                                <div className="absolute top-2 left-2 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[10px] font-mono text-white tracking-widest">REC / CAM_04</span>
                                </div>

                                {/* Target Box 1 */}
                                <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-blue-500 bg-blue-500/10">
                                    <div className="absolute -top-5 left-0 bg-blue-500 text-white text-[8px] font-mono px-1">OBJ: VEHICLE [98%]</div>
                                </div>

                                {/* Target Box 2 (Anomaly) */}
                                <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-amber-500 bg-amber-500/10">
                                    <div className="absolute -top-5 left-0 bg-amber-500 text-slate-900 text-[8px] font-mono px-1 font-bold">ANOMALY DETECTED</div>
                                </div>

                                {/* Scanning line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,1)] animate-[scan_3s_ease-in-out_infinite]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION / GITHUB TEASER */}
            <section className="py-24 relative overflow-hidden text-center bg-slate-950">
                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <GitMerge className="w-12 h-12 text-slate-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-6">Want to contribute or pilot these features?</h2>
                    <p className="text-slate-400 mb-8">
                        We actively partner with enterprise clients to beta-test these features in real-world environments. If your organization has a unique use case, let's build the solution together.
                    </p>
                    <button className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors">
                        Apply for Early Access
                    </button>
                </div>
            </section>

            <Footer />

            {/* Tailwind Keyframes for the scanning line */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scan {
                    0%, 100% { top: 0; }
                    50% { top: 100%; }
                }
            `}} />
        </div>
    );
};

export default LabsPage;