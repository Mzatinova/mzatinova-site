import React, { useState } from 'react';
import {
    Activity,
    Users,
    Pill,
    Calendar,
    Settings,
    Bell,
    Search,
    Lock,
    HeartPulse,
    Bed
} from 'lucide-react';

const HealthDashboard = () => {
    // 1. THE "CHANNEL SURFER" STATE
    const [activeModule, setActiveModule] = useState('overview');

    // 2. THE DATABASE SIMULATION
    // Pretend "City General Hospital" paid for Records and Appointments, but NOT the Pharmacy module.
    const paidModules = ['overview', 'patient_records', 'appointments', 'settings'];

    // 3. YOUR MASTER LIST OF ALL MODULES (Healthcare Edition)
    const allModules = [
        { id: 'overview', label: 'Command Center', icon: <Activity size={20} /> },
        { id: 'patient_records', label: 'Patient Records (EMR)', icon: <Users size={20} /> },
        { id: 'appointments', label: 'Scheduling', icon: <Calendar size={20} /> },
        { id: 'pharmacy', label: 'Pharmacy Inventory', icon: <Pill size={20} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ];

    // 4. THE CONTENT SWITCHER (The TV Screen)
    const renderModuleContent = () => {
        switch (activeModule) {
            case 'overview':
                return (
                    <div className="p-8 animate-in fade-in duration-300">
                        <h1 className="text-2xl font-bold text-white mb-2">Hospital Command Center</h1>
                        <p className="text-slate-400 mb-8">Welcome back, Dr. Sarah. Here is the current facility status.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-rose-500/10 text-rose-400 rounded-xl"><HeartPulse size={24} /></div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">Active Patients</p>
                                        <p className="text-2xl font-bold text-white">342</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl"><Bed size={24} /></div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">Available Beds</p>
                                        <p className="text-2xl font-bold text-white">18 / 150</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'patient_records':
                return (
                    <div className="p-8 animate-in fade-in duration-300">
                        <h1 className="text-2xl font-bold text-white mb-2">Electronic Medical Records</h1>
                        <p className="text-slate-400 mb-8">Search, update, and manage patient histories securely.</p>
                        <div className="w-full h-64 border-2 border-dashed border-slate-800 rounded-2xl flex items-center justify-center">
                            <span className="text-slate-500">Patient Records Module will render inside this box</span>
                        </div>
                    </div>
                );

            case 'appointments':
                return (
                    <div className="p-8 animate-in fade-in duration-300">
                        <h1 className="text-2xl font-bold text-white mb-2">Facility Scheduling</h1>
                        <p className="text-slate-400 mb-8">Manage doctor availability, surgeries, and clinical visits.</p>
                        <div className="w-full h-64 border-2 border-dashed border-slate-800 rounded-2xl flex items-center justify-center">
                            <span className="text-slate-500">Scheduling Module UI goes here</span>
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
                    <div className="h-8 w-8 bg-rose-600 rounded-lg flex items-center justify-center font-bold text-white">M</div>
                    <span className="text-xl font-bold text-white tracking-tight">HealthSpace</span>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <p className="text-xs text-slate-500 uppercase font-bold mb-4 px-2">Clinical Modules</p>

                    {allModules.map((module) => {
                        const hasAccess = paidModules.includes(module.id);

                        // UPSELL UI: Locked Modules
                        if (!hasAccess) {
                            return (
                                <button
                                    key={module.id}
                                    onClick={() => alert(`Upgrade required! Contact Mzatinova Sales to unlock ${module.label}.`)}
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

                        // NORMAL UI: Clickable Modules
                        return (
                            <button
                                key={module.id}
                                onClick={() => setActiveModule(module.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm ${activeModule === module.id
                                        ? 'bg-rose-600/10 text-rose-400 border border-rose-500/20'
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
                        <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs">CGH</div>
                        <div>
                            <p className="text-sm font-bold text-white">City General</p>
                            <p className="text-xs text-slate-500">Chief Medical Officer</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* --- THE MAIN SCREEN --- */}
            <main className="flex-1 flex flex-col relative">
                <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-900/50 backdrop-blur-md">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search patients, doctors, or inventory..."
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-rose-500 transition-colors text-white placeholder:text-slate-600"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-white relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-rose-500 rounded-full"></span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto">
                    {renderModuleContent()}
                </div>
            </main>

        </div>
    );
};

export default HealthDashboard;