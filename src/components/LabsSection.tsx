import React from 'react';
import { Link } from 'react-router-dom';
import {
    Beaker,
    Mic,
    WifiOff,
    ScanEye,
    ArrowRight,
    Sparkles,
    TerminalSquare
} from 'lucide-react';

const LabsSection: React.FC = () => {
    // R&D Projects that prove your technical superiority
    const labProjects = [
        {
            id: 'local-nlp',
            title: 'Chichewa NLP Model',
            category: 'Artificial Intelligence',
            icon: <Mic className="h-6 w-6 text-cyan-400" />,
            description: 'Training our Data Engine to understand natural language voice inputs in local Malawian dialects for rural data collection.',
            status: 'Beta Testing',
            statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
            progress: 75,
            impact: 'Will allow users with basic feature phones to interact with our engines via voice.'
        },
        {
            id: 'edge-engine',
            title: 'Offline Edge Engine',
            category: 'Infrastructure',
            icon: <WifiOff className="h-6 w-6 text-emerald-400" />,
            description: 'A lightweight version of our intelligence engine that runs completely offline on local hardware, syncing when connectivity returns.',
            status: 'Alpha',
            statusColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
            progress: 40,
            impact: 'Crucial for AgriSpace and HealthSpace deployments in extreme remote locations.'
        },
        {
            id: 'vision-analytics',
            title: 'Predictive Computer Vision',
            category: 'Machine Learning',
            icon: <ScanEye className="h-6 w-6 text-blue-400" />,
            description: 'Integrating drone and CCTV camera feeds directly into our workflow automation to trigger events based on visual anomalies.',
            status: 'Research',
            statusColor: 'text-slate-400 bg-slate-800 border-slate-700',
            progress: 15,
            impact: 'Automated crop disease detection and high-security facility monitoring.'
        }
    ];

    return (
        <section id="labs" className="py-24 relative bg-slate-950 overflow-hidden scroll-mt-20">
            {/* Lab-style Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* UPDATED SECTION HEADER: 
                  Now uses flex-col, items-center, and text-center for perfect alignment. 
                */}
                <div className="flex flex-col items-center text-center mb-16 gap-6">
                    <div className="max-w-3xl flex flex-col items-center mx-auto">
                        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full mb-6">
                            <Beaker className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Mzatinova Labs</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Next Iteration</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-8">
                            Our engines are never static. Peek into our R&D pipeline to see the features, models, and infrastructure we are testing for tomorrow.
                        </p>

                        <Link to="/labs">
                            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group transition-colors">
                                <TerminalSquare className="h-5 w-5" />
                                View Full Roadmap
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {labProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900 transition-colors duration-300 flex flex-col h-full backdrop-blur-sm relative overflow-hidden group"
                        >
                            {/* Top row: Icon and Status */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                                    {project.icon}
                                </div>
                                <div className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${project.statusColor}`}>
                                    {project.status}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mb-2 flex items-center gap-2">
                                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{project.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            {/* Progress Bar UI */}
                            <div className="mt-auto pt-6 border-t border-slate-800/50">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                                        <Sparkles className="h-3 w-3" /> Target Impact
                                    </span>
                                    <span className="text-xs font-mono text-cyan-500">{project.progress}% Complete</span>
                                </div>

                                {/* The Bar */}
                                <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden mb-4">
                                    <div
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative"
                                        style={{ width: `${project.progress}%` }}
                                    >
                                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 animate-pulse"></div>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-500 italic">
                                    {project.impact}
                                </p>
                            </div>

                            {/* Hover effect highlight */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LabsSection;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//     Beaker,
//     Mic,
//     WifiOff,
//     ScanEye,
//     ArrowRight,
//     Sparkles,
//     TerminalSquare
// } from 'lucide-react';

// const LabsSection: React.FC = () => {
//     // R&D Projects that prove your technical superiority
//     const labProjects = [
//         {
//             id: 'local-nlp',
//             title: 'Chichewa NLP Model',
//             category: 'Artificial Intelligence',
//             icon: <Mic className="h-6 w-6 text-cyan-400" />,
//             description: 'Training our Data Engine to understand natural language voice inputs in local Malawian dialects for rural data collection.',
//             status: 'Beta Testing',
//             statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
//             progress: 75,
//             impact: 'Will allow users with basic feature phones to interact with our engines via voice.'
//         },
//         {
//             id: 'edge-engine',
//             title: 'Offline Edge Engine',
//             category: 'Infrastructure',
//             icon: <WifiOff className="h-6 w-6 text-emerald-400" />,
//             description: 'A lightweight version of our intelligence engine that runs completely offline on local hardware, syncing when connectivity returns.',
//             status: 'Alpha',
//             statusColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
//             progress: 40,
//             impact: 'Crucial for AgriSpace and HealthSpace deployments in extreme remote locations.'
//         },
//         {
//             id: 'vision-analytics',
//             title: 'Predictive Computer Vision',
//             category: 'Machine Learning',
//             icon: <ScanEye className="h-6 w-6 text-blue-400" />,
//             description: 'Integrating drone and CCTV camera feeds directly into our workflow automation to trigger events based on visual anomalies.',
//             status: 'Research',
//             statusColor: 'text-slate-400 bg-slate-800 border-slate-700',
//             progress: 15,
//             impact: 'Automated crop disease detection and high-security facility monitoring.'
//         }
//     ];

//     return (
//         <section id="labs" className="py-24 relative bg-slate-950 overflow-hidden scroll-mt-20">
//             {/* Lab-style Grid Background */}
//             <div className="absolute inset-0 z-0 opacity-20">
//                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//                 <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
//             </div>

//             <div className="container mx-auto px-6 relative z-10">
//                 {/* Section Header */}
//                 <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//                     <div className="max-w-2xl">
//                         <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full mb-6">
//                             <Beaker className="h-4 w-4 text-cyan-400" />
//                             <span className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Mzatinova Labs</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
//                             Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Next Iteration</span>
//                         </h2>
//                         <p className="text-lg text-slate-400">
//                             Our engines are never static. Peek into our R&D pipeline to see the features, models, and infrastructure we are testing for tomorrow.
//                         </p>
//                     </div>

//                     <div className="flex-shrink-0">
//                         <Link to="/labs">
//                             <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group transition-colors">
//                                 <TerminalSquare className="h-5 w-5" />
//                                 View Full Roadmap
//                                 <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                             </button>
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Projects Grid */}
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {labProjects.map((project) => (
//                         <div
//                             key={project.id}
//                             className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900 transition-colors duration-300 flex flex-col h-full backdrop-blur-sm relative overflow-hidden group"
//                         >
//                             {/* Top row: Icon and Status */}
//                             <div className="flex justify-between items-start mb-6">
//                                 <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
//                                     {project.icon}
//                                 </div>
//                                 <div className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${project.statusColor}`}>
//                                     {project.status}
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className="mb-2 flex items-center gap-2">
//                                 <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{project.category}</span>
//                             </div>
//                             <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
//                             <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
//                                 {project.description}
//                             </p>

//                             {/* Progress Bar UI */}
//                             <div className="mt-auto pt-6 border-t border-slate-800/50">
//                                 <div className="flex justify-between items-end mb-2">
//                                     <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
//                                         <Sparkles className="h-3 w-3" /> Target Impact
//                                     </span>
//                                     <span className="text-xs font-mono text-cyan-500">{project.progress}% Complete</span>
//                                 </div>

//                                 {/* The Bar */}
//                                 <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden mb-4">
//                                     <div
//                                         className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative"
//                                         style={{ width: `${project.progress}%` }}
//                                     >
//                                         <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 animate-pulse"></div>
//                                     </div>
//                                 </div>

//                                 <p className="text-xs text-slate-500 italic">
//                                     {project.impact}
//                                 </p>
//                             </div>

//                             {/* Hover effect highlight */}
//                             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default LabsSection;