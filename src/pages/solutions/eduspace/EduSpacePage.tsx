import React from 'react';
import { Link } from 'react-router-dom';
import {
    GraduationCap,
    LineChart,
    BellRing,
    ShoppingBag,
    CreditCard,
    Users,
    ArrowRight,
    CheckCircle2,
    Database
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EduSpacePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 pt-24 font-sans selection:bg-blue-500/30">
            <Header />
            {/* Hero Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-500/30 px-4 py-2 rounded-full mb-8">
                        <GraduationCap className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Mzatinova Eduspace</span>
                    </div>

                    {/* <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        The Operating System <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            for Modern Schools.
                        </span>
                    </h1> */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        The Platform <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            for Modern Schools.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Stop managing your institution with scattered spreadsheets and fragmented apps.
                        EduSpace centralizes results, attendance, fees, and digital learning into one intelligent engine.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center gap-2">
                            Deploy EduSpace
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="px-8 py-4 bg-slate-900 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                            View Live Demo
                        </button>
                    </div> */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* UPDATED: Now a Link routing to the Universal Login */}
                        <Link
                            to="/login"
                            className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center gap-2"
                        >
                            Get Started
                            <ArrowRight className="h-5 w-5" />
                        </Link>

                        {/* Secondary CTA */}
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">One Engine. Infinite Capabilities.</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything your administration, teachers, and parents need, natively integrated into a single unified database.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Results & Analytics */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <LineChart className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Results & Analytics</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Teachers upload grades instantly. Parents search and view beautiful performance reports. The engine tracks student progress over time.</p>
                        </div>

                        {/* Marketplace */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShoppingBag className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Knowledge Marketplace</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">A built-in digital library. Teachers can publish premium lessons, and students can purchase specialized courses directly through the platform.</p>
                        </div>

                        {/* Communications & Attendance */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BellRing className="h-6 w-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Smart Attendance & SMS</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Automated roll calls. If a student is absent, the engine instantly triggers an SMS notification to the parent's phone.</p>
                        </div>

                        {/* Fees Management */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CreditCard className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Fees & Financial Hub</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Track tuition payments, generate digital receipts, and automatically remind parents of upcoming or overdue balances.</p>
                        </div>

                        {/* Role-Based Portals */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Role-Based Portals</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Principals, Teachers, Parents, and Students each get a customized dashboard showing exactly what they need to see.</p>
                        </div>

                        {/* Cloud Architecture */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Database className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">White-Label Ready</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Your school's logo. Your school's colors. Hosted securely on your own custom subdomain (e.g., yourschool.mzatinova.com).</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Proof Section */}
            <section className="py-20 px-6 border-t border-slate-800/50">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Built for scale. Ready for your school.</h2>
                    <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-blue-400" /> 100% Data Ownership</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Bank-Grade Security</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Zero Legacy Code</li>
                    </ul>
                </div>
            </section>
            <Footer />

        </div>
    );
};

export default EduSpacePage;