import React from 'react';
import {
    Store,
    ShoppingCart,
    BarChart3,
    Truck,
    Tag,
    CreditCard,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TradeSpacePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 pt-24 font-sans selection:bg-orange-500/30">
            <Header />
            {/* Hero Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                {/* Background Gradients - Orange/Amber for Commerce */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-orange-950/50 border border-orange-500/30 px-4 py-2 rounded-full mb-8">
                        <Store className="h-4 w-4 text-orange-400" />
                        <span className="text-sm font-semibold text-orange-300 tracking-wide uppercase">Mzatinova TradeSpace</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        The Platform <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                            for Modern Commerce.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Stop running your retail empire on fragmented POS systems and manual stock counts.
                        TradeSpace centralizes sales, inventory, wholesale, and customer loyalty into one intelligent engine.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(249,115,22,0.2)] flex items-center justify-center gap-2">
                            Deploy TradeSpace
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="px-8 py-4 bg-slate-900 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                            View Live Demo
                        </button>
                    </div> */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/login"
                            className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(249,115,22,0.2)] flex items-center justify-center gap-2"
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">One Engine. Infinite Sales Channels.</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything your cashiers, warehouse managers, and retail executives need, natively integrated into a single unified storefront.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Multi-Store POS */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-orange-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CreditCard className="h-6 w-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Cloud Point of Sale (POS)</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Lightning-fast checkout that works even offline. Ring up sales, process split payments, and print digital receipts across multiple store locations.</p>
                        </div>

                        {/* Omnichannel Inventory */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Tag className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Omnichannel Inventory</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Never oversell again. Inventory syncs in real-time between your physical stores, warehouses, and your digital e-commerce channels.</p>
                        </div>

                        {/* B2B Wholesale & Supply */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Truck className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Wholesale & Logistics</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Manage bulk orders, negotiate B2B contracts, and generate purchasing orders instantly. Track supplier shipments from factory to warehouse.</p>
                        </div>

                        {/* E-Commerce Integration */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShoppingCart className="h-6 w-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">E-Commerce Ready</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Launch your digital storefront directly from the Mzatinova Engine. Online orders instantly appear on your fulfillment dashboard.</p>
                        </div>

                        {/* Customer CRM & Loyalty */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-pink-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Store className="h-6 w-6 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">CRM & Customer Loyalty</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">Track customer purchase history. Automatically award loyalty points, issue digital gift cards, and send targeted SMS marketing campaigns.</p>
                        </div>

                        {/* Real-time Sales Analytics */}
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                            <div className="h-12 w-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BarChart3 className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Live Sales Analytics</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">View your best-selling items, peak transaction hours, and profit margins on a live dashboard. Make data-driven restocking decisions instantly.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Proof Section */}
            <section className="py-20 px-6 border-t border-slate-800/50">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-900/20 to-slate-900 border border-orange-500/20 rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Built for scale. Ready for your retail empire.</h2>
                    <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-orange-400" /> Offline-First POS</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-orange-400" /> Multi-Currency Support</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-orange-400" /> Real-time Sync</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default TradeSpacePage;