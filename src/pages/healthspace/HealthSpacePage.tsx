import React from 'react';
import { Link } from 'react-router-dom';
import {
    Stethoscope,
    Activity,
    Calendar,
    Pill,
    CreditCard,
    Users,
    ArrowRight,
    CheckCircle2,
    Shield
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const HealthSpacePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 pt-24 font-sans selection:bg-teal-500/30">
            <Header />
            {/* Hero Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                {/* Background Gradients - Changed to Teal/Emerald for Healthcare */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-600/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-teal-950/50 border border-teal-500/30 px-4 py-2 rounded-full mb-8">
                        <Stethoscope className="h-4 w-4 text-teal-400" />
                        <span className="text-sm font-semibold text-teal-300 tracking-wide uppercase">Mzatinova Core • Healthcare Sector</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        The Operating System <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                            for Modern Healthcare.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Stop managing your clinic with scattered paper files and disconnected systems.
                        HealthSpace centralizes patient records, billing, pharmacy, and appointments into one intelligent engine.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(20,184,166,0.2)] flex items-center justify-center gap-2">
                            Deploy HealthSpace
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">One Engine. Complete Patient Care.</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything your doctors, nurses, and administrators need, natively integrated into a single secure database.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Electronic Health Records */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-teal-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Activity className="h-6 w-6 text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Electronic Health Records</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Instant access to complete patient histories, lab results, and vitals. Update medical records in real-time securely from any device.</p>
                        </div>

                        {/* Appointments & Scheduling */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Calendar className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Smart Scheduling & Queues</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Manage doctor availability, automate appointment reminders via SMS, and track live patient wait times in your reception area.</p>
                        </div>

                        {/* Pharmacy & Inventory */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Pill className="h-6 w-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Pharmacy & Inventory</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Doctors send e-prescriptions directly to the built-in pharmacy module. Automatically track medication stock levels and expiry dates.</p>
                        </div>

                        {/* Billing & Insurance */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CreditCard className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Billing & Insurance</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Generate instant invoices for treatments. Seamlessly manage patient claims, track outstanding balances, and issue digital receipts.</p>
                        </div>

                        {/* Role-Based Portals */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Role-Based Portals</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Doctors, Nurses, Receptionists, and Pharmacists each get a customized dashboard showing exactly what they need to do their jobs.</p>
                        </div>

                        {/* Compliance & Security */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Medical-Grade Security</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Patient data is heavily encrypted. Strict access logs ensure that only authorized medical personnel can view sensitive health information.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Proof Section */}
            <section className="py-20 px-6 border-t border-slate-800/50">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-900/20 to-slate-900 border border-teal-500/20 rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Built for scale. Ready for your clinic.</h2>
                    <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-teal-400" /> End-to-End Encryption</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-teal-400" /> strict Access Logs</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-teal-400" /> 99.9% Uptime SLA</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HealthSpacePage;