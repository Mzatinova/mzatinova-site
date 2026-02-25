import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    CreditCard,
    Settings,
    Bell,
    Search,
    Lock,
    TrendingUp,
    GraduationCap
} from 'lucide-react';

const EduDashboard = () => {
    // 1. THE "CHANNEL SURFER" STATE
    // This tells the dashboard which module to show right now.
    const [activeModule, setActiveModule] = useState('overview');

    // 2. THE DATABASE SIMULATION
    // Pretend Hillside High paid for the base system and the Parent Portal, but NOT the Marketplace.
    const paidModules = ['overview', 'parent_portal', 'finances', 'settings'];

    // 3. YOUR MASTER LIST OF ALL MODULES
    const allModules = [
        { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
        { id: 'parent_portal', label: 'Parent Portal', icon: <Users size={20} /> },
        { id: 'finances', label: 'Finances & Fees', icon: <CreditCard size={20} /> },
        { id: 'marketplace', label: 'Mz Store (Marketplace)', icon: <ShoppingCart size={20} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ];

    // 4. THE CONTENT SWITCHER (The TV Screen)
    // This function decides what code to draw based on what button was clicked.
    const renderModuleContent = () => {
        switch (activeModule) {
            case 'overview':
                return (
                    <div className="p-8 animate-in fade-in duration-300">
                        <h1 className="text-2xl font-bold text-white mb-2">Institution Overview</h1>
                        <p className="text-slate-400 mb-8">Welcome back, Principal. Here is your daily summary.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl"><GraduationCap size={24} /></div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">Total Students</p>
                                        <p className="text-2xl font-bold text-white">1,284</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl"><TrendingUp size={24} /></div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">Attendance Today</p>
                                        <p className="text-2xl font-bold text-white">96.2%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'parent_portal':
                return (
                    <div className="p-8 animate-in fade-in duration-300">
                        <h1 className="text-2xl font-bold text-white mb-2">Parent Portal Management</h1>
                        <p className="text-slate-400 mb-8">Manage parent communications, grades, and notifications here.</p>
                        {/* IN THE FUTURE: You will literally import your <ParentPortal /> component right here! */}
                        <div className="w-full h-64 border-2 border-dashed border-slate-800 rounded-2xl flex items-center justify-center">
                            <span className="text-slate-500">Parent Portal App will render inside this box</span>
                        </div>
                    </div>
                );

            case 'finances':
                return (
                    <div className="p-8 animate-in fade-in duration-300">
                        <h1 className="text-2xl font-bold text-white mb-2">Financial Command Center</h1>
                        <p className="text-slate-400 mb-8">Track tuition payments and staff payroll.</p>
                        <div className="w-full h-64 border-2 border-dashed border-slate-800 rounded-2xl flex items-center justify-center">
                            <span className="text-slate-500">Finance Module UI goes here</span>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen bg-slate-950 text-slate-300 font-sans overflow-hidden">

            {/* --- THE SIDEBAR (The Remote Control) --- */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-20">
                <div className="p-6 flex items-center gap-3 border-b border-slate-800">
                    <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">M</div>
                    <span className="text-xl font-bold text-white tracking-tight">EduSpace</span>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <p className="text-xs text-slate-500 uppercase font-bold mb-4 px-2">Core Modules</p>

                    {allModules.map((module) => {
                        const hasAccess = paidModules.includes(module.id);

                        // UPSELL UI: If they didn't pay for it, show it as locked
                        if (!hasAccess) {
                            return (
                                <button
                                    key={module.id}
                                    onClick={() => alert(`Upgrade required! Contact sales to unlock ${module.label}.`)}
                                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950 border border-slate-800/50 opacity-60 hover:opacity-100 hover:border-amber-500/50 transition-all text-slate-400 group"
                                >
                                    <div className="flex items-center gap-3">
                                        {module.icon}
                                        <span className="font-medium text-sm">{module.label}</span>
                                    </div>
                                    <Lock size={14} className="text-amber-500 group-hover:scale-110 transition-transform" />
                                </button>
                            );
                        }

                        // NORMAL UI: They paid for it, make it clickable
                        return (
                            <button
                                key={module.id}
                                onClick={() => setActiveModule(module.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm ${activeModule === module.id
                                        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                                        : 'hover:bg-slate-800 text-slate-400 hover:text-white'
                                    }`}
                            >
                                {module.icon}
                                <span className="font-medium">{module.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-2">
                        <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700"></div>
                        <div>
                            <p className="text-sm font-bold text-white">Hillside High</p>
                            <p className="text-xs text-slate-500">Admin Account</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* --- THE MAIN SCREEN (The TV) --- */}
            <main className="flex-1 flex flex-col relative">

                {/* Top Header */}
                <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-900/50 backdrop-blur-md">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search across all modules..."
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder:text-slate-600"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-white relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-blue-500 rounded-full"></span>
                        </button>
                    </div>
                </header>

                {/* Dynamic Content Area */}
                <div className="flex-1 overflow-y-auto">
                    {renderModuleContent()}
                </div>
            </main>

        </div>
    );
};

export default EduDashboard;