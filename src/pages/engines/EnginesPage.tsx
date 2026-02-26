import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Database, Workflow, Cpu, Zap, Terminal, Network,
    ShieldCheck, Lock, Webhook, ArrowRight, Layers, FileCode2,
    Server, Activity, GitBranch, MessageSquare, Mail
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EnginesPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 pt-24 font-sans selection:bg-blue-500/30">
            <Header />
            {/* 1. HERO SECTION */}
            <section className="relative py-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-full mb-6 shadow-lg shadow-blue-900/20">
                        <Cpu className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Mzatinova Core Architecture</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        The infrastructure powering <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            enterprise intelligence.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed mb-10">
                        Explore the dual-engine architecture that allows us to deploy custom, high-performance industry solutions in a fraction of the standard development time.
                    </p>
                </div>
            </section>

            {/* 2. DATA INTELLIGENCE ENGINE */}
            <section id="data" className="py-24 relative scroll-mt-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                <Database className="text-blue-400 w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Data Intelligence Engine</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                The brain of your ecosystem. It securely connects to your legacy systems, ingests unstructured data streams, and structures them into actionable, predictive insights in real-time.
                            </p>

                            <div className="space-y-6">
                                <FeatureItem icon={<Network />} title="Universal Data Ingestion" desc="Connect via REST API, GraphQL, SQL, or direct CSV uploads. We normalize messy data instantly." />
                                <FeatureItem icon={<Layers />} title="Pattern & Anomaly Detection" desc="Identify fraudulent transactions, resource bottlenecks, or user trends before they escalate." />
                                <FeatureItem icon={<Zap />} title="Real-time Synchronization" desc="Your dashboard is never out of date. Data flows and updates across all interfaces continuously." />
                            </div>
                        </div>

                        {/* VISUAL MOCKUP: Animated Data Pipeline */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-8 overflow-hidden flex items-center justify-center min-h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent pointer-events-none" />

                            <div className="flex items-center gap-6 w-full max-w-md relative z-10">
                                {/* Left Side: Data Sources */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 p-3 rounded-lg w-32 shadow-lg">
                                        <Server className="text-slate-400 w-5 h-5" />
                                        <span className="text-xs font-mono text-slate-300">Legacy DB</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 p-3 rounded-lg w-32 shadow-lg">
                                        <Webhook className="text-blue-400 w-5 h-5" />
                                        <span className="text-xs font-mono text-blue-300">External API</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 p-3 rounded-lg w-32 shadow-lg">
                                        <FileCode2 className="text-emerald-400 w-5 h-5" />
                                        <span className="text-xs font-mono text-emerald-300">Raw CSV</span>
                                    </div>
                                </div>

                                {/* Middle: Pipeline Animation */}
                                <div className="flex-1 flex flex-col items-center justify-center relative h-32">
                                    <div className="absolute top-1/2 -translate-y-1/2 w-full border-t-2 border-dashed border-blue-500/30" />
                                    <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-ping" />
                                </div>

                                {/* Right Side: Processing Core */}
                                <div className="relative group cursor-default">
                                    <div className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-lg group-hover:bg-blue-500/30 transition-all duration-500" />
                                    <div className="bg-slate-950 border border-blue-500/50 p-6 rounded-xl flex flex-col items-center justify-center relative z-10 shadow-2xl">
                                        <Activity className="text-blue-400 w-10 h-10 mb-2" />
                                        <span className="text-sm font-bold text-white text-center">Intelligence<br />Core</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WORKFLOW AUTOMATION ENGINE */}
            <section id="workflow" className="py-24 relative bg-slate-900/30 border-y border-white/5 scroll-mt-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* VISUAL MOCKUP: Logic Node Tree */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-8 overflow-hidden order-2 lg:order-1 min-h-[400px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent pointer-events-none" />

                            <div className="flex flex-col items-center w-full relative z-10">
                                {/* Trigger */}
                                <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-lg text-sm font-mono flex items-center gap-2 mb-6">
                                    <Zap size={16} /> Data Threshold Met
                                </div>

                                <div className="w-px h-8 bg-slate-700" />

                                {/* Condition */}
                                <div className="bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg mb-6 relative">
                                    <GitBranch className="text-slate-400" size={16} />
                                    Check User Status
                                </div>

                                <div className="flex w-full max-w-xs justify-between relative">
                                    {/* Left Branch */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-8 bg-slate-700 absolute left-1/4 -top-6 -z-10" />
                                        <div className="w-1/2 h-px bg-slate-700 absolute left-1/4 -top-6 -z-10" />
                                        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-2 rounded-lg text-xs font-mono flex items-center gap-2 mt-2">
                                            <Mail size={14} /> Email Invoice
                                        </div>
                                    </div>

                                    {/* Right Branch */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-8 bg-slate-700 absolute right-1/4 -top-6 -z-10" />
                                        <div className="w-1/2 h-px bg-slate-700 absolute right-1/4 -top-6 -z-10" />
                                        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-2 rounded-lg text-xs font-mono flex items-center gap-2 mt-2">
                                            <MessageSquare size={14} /> WhatsApp Alert
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                                <Workflow className="text-purple-400 w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Workflow Automation</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                The muscle that drives action. Map out complex business rules and let the engine automatically route messages, update databases, and generate documents without human intervention.
                            </p>

                            <div className="space-y-6">
                                <FeatureItem icon={<Terminal />} title="Logic-Based Action Triggers" desc="Set strict IF/THEN/ELSE parameters to control exactly when and how automated actions execute." />
                                <FeatureItem icon={<FileCode2 />} title="Automated Document Generation" desc="Spin up compliance reports, custom invoices, or user certificates dynamically based on trigger data." />
                                <FeatureItem icon={<Zap />} title="Multi-Channel Routing" desc="Send intelligent alerts natively through SMS, WhatsApp, Email, or internal system notifications." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SYNERGY SECTION */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">The Power of Synergy</h2>

                    {/* VISUAL MOCKUP: Synergy Loop */}
                    <div className="mb-12 border border-slate-800 rounded-3xl p-8 bg-slate-900/50 flex flex-col md:flex-row items-center justify-center gap-8 relative overflow-hidden">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-blue-500/0 via-slate-500/30 to-purple-500/0" />

                        <div className="bg-slate-950 border border-blue-500/30 p-6 rounded-2xl relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.1)] w-full md:w-64">
                            <Database className="text-blue-400 w-8 h-8 mx-auto mb-3" />
                            <h4 className="text-white font-bold">1. Detect</h4>
                            <p className="text-xs text-slate-400 mt-2">Intelligence engine identifies a critical data threshold.</p>
                        </div>

                        <div className="hidden md:flex bg-slate-800 rounded-full p-2 relative z-10 text-slate-400">
                            <ArrowRight className="w-6 h-6 animate-pulse" />
                        </div>

                        <div className="bg-slate-950 border border-purple-500/30 p-6 rounded-2xl relative z-10 shadow-[0_0_30px_rgba(168,85,247,0.1)] w-full md:w-64">
                            <Workflow className="text-purple-400 w-8 h-8 mx-auto mb-3" />
                            <h4 className="text-white font-bold">2. Execute</h4>
                            <p className="text-xs text-slate-400 mt-2">Workflow engine triggers the corresponding operational logic.</p>
                        </div>
                    </div>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        Separately, they are powerful. Together, they are transformative. The Data Engine acts as the sensory input, detecting critical thresholds in your environment. It instantly hands off context to the Workflow Engine, which acts as the nervous system, executing the precise operational response.
                    </p>
                </div>
            </section>

            {/* 5. ENTERPRISE SECURITY & API */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold text-white mb-4">Enterprise-Grade by Default</h2>
                        <p className="text-slate-400">Security and integration capabilities built for high-compliance industries.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                            <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Role-Based Access</h3>
                            <p className="text-slate-400 text-sm">Granular control over who can view data or trigger workflows within your organization.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                            <Lock className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">End-to-End Encryption</h3>
                            <p className="text-slate-400 text-sm">Data is encrypted at rest and in transit, ensuring compliance with global data protection standards.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                            <Webhook className="w-10 h-10 text-purple-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Extensible REST APIs</h3>
                            <p className="text-slate-400 text-sm">Easily push or pull data from Mzatinova to your existing ERP, CRM, or legacy software.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex gap-4">
        <div className="mt-1 w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center shrink-0 text-slate-300">
            {React.cloneElement(icon as React.ReactElement, { size: 18 })}
        </div>
        <div>
            <h4 className="text-white font-semibold mb-1">{title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>

);

export default EnginesPage;