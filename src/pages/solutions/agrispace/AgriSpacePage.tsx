import React from 'react';
import {
    Sprout,
    Map,
    Package,
    CloudSun,
    Banknote,
    Wifi,
    Users,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AgriSpacePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 pt-24 font-sans selection:bg-green-500/30">
            <Header />
            {/* Hero Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                {/* Background Gradients - Green for Agriculture */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-600/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-green-950/50 border border-green-500/30 px-4 py-2 rounded-full mb-8">
                        <Sprout className="h-4 w-4 text-green-400" />
                        <span className="text-sm font-semibold text-green-300 tracking-wide uppercase">Mzatinova AgriSpace</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        The Platform <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">
                            for Modern Agribusiness.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Stop managing your farm with scattered spreadsheets, whiteboards, and guesswork.
                        AgriSpace centralizes crop tracking, inventory, workforce, and supply chain into one intelligent engine.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(34,197,94,0.2)] flex items-center justify-center gap-2">
                            Deploy AgriSpace
                            <ArrowRight className="h-5 w-5" />
                        </button>
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">One Engine. Maximum Yield.</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything your farm managers, agronomists, and logistics teams need, natively integrated into a single unified platform.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Crop & Field Management */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-green-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Map className="h-6 w-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Field & Crop Mapping</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Digitally map your fields. Track planting dates, growth stages, fertilizer application, and expected harvest timelines for every single plot.</p>
                        </div>

                        {/* Inventory & Supply Chain */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Package className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Inventory & Logistics</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Monitor your warehouse in real-time. Track stock levels for seeds, agrochemicals, and equipment. Manage outbound logistics for harvested crops.</p>
                        </div>

                        {/* Weather & Yield Analytics */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CloudSun className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Weather & Yield Analytics</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Integrate local weather data to plan farming activities. Use historical data to forecast yields and optimize your planting strategies.</p>
                        </div>

                        {/* Financial Hub */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Banknote className="h-6 w-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Farm Financials</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Track input costs down to the individual field. Manage supplier contracts, generate invoices for buyers, and calculate precise profit margins.</p>
                        </div>

                        {/* IoT & Smart Farming */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Wifi className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Smart IoT Integrations</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Connect soil moisture sensors and automated irrigation systems directly to the engine to trigger actions based on real-time field conditions.</p>
                        </div>

                        {/* Workforce Management */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Workforce Tracking</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Assign daily tasks to farm workers. Track attendance, monitor labor costs, and streamline payroll for seasonal and permanent staff.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Proof Section */}
            <section className="py-20 px-6 border-t border-slate-800/50">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/20 to-slate-900 border border-green-500/20 rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Built for scale. Ready for your fields.</h2>
                    <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-400" /> Offline Capabilities</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-400" /> Supply Chain Traceability</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-400" /> Precision Farming Ready</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AgriSpacePage;