import React from 'react';
import {
    Landmark,
    Map,
    ShieldAlert,
    Globe,
    FileText,
    Users,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const GovSpacePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 pt-24 font-sans selection:bg-indigo-500/30">
            <Header />
            {/* Hero Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                {/* Background Gradients - Indigo/Sky for Government & NGOs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/30 px-4 py-2 rounded-full mb-8">
                        <Landmark className="h-4 w-4 text-indigo-400" />
                        <span className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">Mzatinova GovSpace</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        The Platform<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
                            for Modern Governance.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Stop managing public infrastructure and aid with disconnected databases.
                        GovSpace centralizes citizen services, grant distribution, and national analytics into one transparent engine.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(99,102,241,0.2)] flex items-center justify-center gap-2">
                            Deploy GovSpace
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="px-8 py-4 bg-slate-900 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                            View Live Demo
                        </button>
                    </div> */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/login"
                            className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(99,102,241,0.2)] flex items-center justify-center gap-2"
                        >
                            Get Started
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <button className="px-8 py-4 bg-slate-900 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                            View Live Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Platform Modules Section */}
            <section className="py-24 px-6 border-t border-slate-800/50 bg-slate-950/50 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">One Engine. National Scale.</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything ministries, municipalities, and global NGOs need to operate with absolute transparency and efficiency.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Grant & Aid Distribution */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Map className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Aid & Grant Distribution</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Automate and track the flow of NGO grants and relief materials down to the last mile. Eliminate ghost beneficiaries and ensure verifiable delivery.</p>
                        </div>

                        {/* Predictive Infrastructure */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShieldAlert className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Predictive Infrastructure</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">AI-driven monitoring of public assets. Receive predictive alerts for water, power, and road maintenance bottlenecks before they become public crises.</p>
                        </div>

                        {/* Demographics & Census */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-sky-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="h-6 w-6 text-sky-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Real-time Demographics</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Move past decade-old census data. Maintain a living, breathing demographic database to accurately allocate national budgets and resources.</p>
                        </div>

                        {/* Citizen Service Portals */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Unified Citizen Portal</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">A single digital gateway for citizens to pay municipal taxes, renew vehicle licenses, and apply for permits without waiting in endless physical queues.</p>
                        </div>

                        {/* Civil Registry & Identity */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FileText className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Civil Registry & ID</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Securely manage national identity documents, passports, and birth/death registrations on a unified, tamper-proof architecture.</p>
                        </div>

                        {/* Public Transparency */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Landmark className="h-6 w-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Transparency Dashboard</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Publish real-time open data. Show citizens exactly how tax revenues and donor funds are being spent with live, immutable reporting.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Proof Section */}
            <section className="py-20 px-6 border-t border-slate-800/50">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-indigo-500/20 rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Built for scale. Ready for your nation.</h2>
                    <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-indigo-400" /> Strict Data Sovereignty</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-indigo-400" /> Immutable Audit Trails</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-indigo-400" /> High Availability</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default GovSpacePage;