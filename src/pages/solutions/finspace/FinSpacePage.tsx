import React from 'react';
import {
    Wallet,
    ArrowLeftRight,
    PieChart,
    Building2,
    ShieldCheck,
    Globe,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const FinSpacePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 pt-24 font-sans selection:bg-indigo-500/30">
            <Header />
            {/* Hero Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                {/* Background Gradients - Indigo/Violet for Finance */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/30 px-4 py-2 rounded-full mb-8">
                        <Building2 className="h-4 w-4 text-indigo-400" />
                        <span className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">Mzatinova FinSpace</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        The Platform <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                            for Modern Finance.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Stop running your financial operations on slow, disconnected legacy software.
                        FinSpace centralizes core banking, payments, lending, and compliance into one intelligent engine.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(99,102,241,0.2)] flex items-center justify-center gap-2">
                            Deploy FinSpace
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">One Engine. Complete Financial Control.</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything your tellers, accountants, and executives need, natively integrated into a single high-performance ledger.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Core Banking & General Ledger */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Building2 className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Core Banking & Ledger</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">A robust, immutable general ledger. Manage customer accounts, track corporate assets, and maintain perfect balances with zero reconciliation errors.</p>
                        </div>

                        {/* Payments & Transfers */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ArrowLeftRight className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Payments & Transfers</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Process domestic and international transactions instantly. Built-in support for bulk disbursements, payroll processing, and multi-currency routing.</p>
                        </div>

                        {/* Lending & Credit */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Wallet className="h-6 w-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Smart Lending</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Automate loan origination and approvals. Track repayment schedules, calculate dynamic interest rates, and manage collateral directly in the platform.</p>
                        </div>

                        {/* Automated Reconciliation */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <PieChart className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Automated Reconciliation</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Say goodbye to end-of-day spreadsheet matching. The engine automatically reconciles internal accounts with payment gateways and central bank APIs.</p>
                        </div>

                        {/* Omni-Channel Banking */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Omni-Channel Access</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Deploy branded USSD, Mobile App, and Web portals for your customers. They experience seamless banking while the Mzatinova Core handles the heavy lifting.</p>
                        </div>

                        {/* Compliance & Security */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="h-6 w-6 text-violet-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Fraud & Compliance</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Built-in KYC/AML tracking. The engine actively monitors transaction patterns to detect suspicious activity and ensure full regulatory compliance.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Proof Section */}
            <section className="py-20 px-6 border-t border-slate-800/50">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-indigo-500/20 rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Built for scale. Ready for your institution.</h2>
                    <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-indigo-400" /> Bank-Grade Encryption</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-indigo-400" /> ISO 20022 Ready</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-indigo-400" /> Real-time Settlement</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default FinSpacePage;