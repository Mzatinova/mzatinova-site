import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Heart, DollarSign, Sprout, ShoppingCart, Brain, Building, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustriesWeServe: React.FC = () => {
    const industries = [
        {
            id: 'eduspace',
            name: 'EDUSPACE',
            fullName: 'Education Intelligence',
            icon: GraduationCap,
            color: 'from-blue-500 to-cyan-500',
            status: 'LIVE',
            statusIcon: <CheckCircle className="h-3 w-3" />,
            description: [
                '📊 Track every learner\'s journey',
                '⚙️ Auto-generate reports, alert parents'
            ],
            badge: 'Results module at pilot school',
            link: '/products#eduspace'
        },
        {
            id: 'healthspace',
            name: 'HEALTHSPACE',
            fullName: 'Healthcare Intelligence',
            icon: Heart,
            color: 'from-red-500 to-pink-500',
            status: 'COMING 2026',
            statusIcon: <Clock className="h-3 w-3" />,
            description: [
                '📊 Patient records, treatment history',
                '⚙️ Appointment reminders, medication alerts'
            ],
            badge: 'Pilot clinics identified',
            link: '/industries#health'
        },
        {
            id: 'finspace',
            name: 'FINSPACE',
            fullName: 'Financial Intelligence',
            icon: DollarSign,
            color: 'from-yellow-500 to-orange-500',
            status: 'PLANNED',
            statusIcon: <Clock className="h-3 w-3" />,
            description: [
                '📊 Fraud detection, transaction patterns',
                '⚙️ Auto-reconciliation, payment reminders'
            ],
            badge: '',
            link: '/industries#finance'
        },
        {
            id: 'agrispace',
            name: 'AGRISPACE',
            fullName: 'Agriculture Intelligence',
            icon: Sprout,
            color: 'from-green-500 to-emerald-500',
            status: 'PLANNED',
            statusIcon: <Clock className="h-3 w-3" />,
            description: [
                '📊 Crop data, weather, market prices',
                '⚙️ Planting alerts, buyer matching'
            ],
            badge: '',
            link: '/industries#agriculture'
        },
        {
            id: 'tradespace',
            name: 'TRADESPACE',
            fullName: 'Commerce Intelligence',
            icon: ShoppingCart,
            color: 'from-purple-500 to-violet-500',
            status: 'PLANNED',
            statusIcon: <Clock className="h-3 w-3" />,
            description: [
                '📊 Inventory, sales trends',
                '⚙️ Auto-reordering, customer notifications'
            ],
            badge: '',
            link: '/industries#retail'
        }
    ];

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'LIVE':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'COMING 2026':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'PLANNED':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">

            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-90"
                >
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-lines-in-space-2740-large.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
            </div>

            {/* Light Spot */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />

            {/* Mesh Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4 border border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        <Building className="h-4 w-4 text-blue-200" />
                        <span className="text-sm font-medium text-blue-100">OUR ENGINES ACROSS INDUSTRIES</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                        <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent filter drop-shadow-lg">One core. Any industry.</span> Same engines.
                    </h2>
                </div>

                {/* Industry Cards + Mzatinova Labs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {industries.map((industry) => {
                        const IconComponent = industry.icon;
                        return (
                            <Card
                                key={industry.id}
                                className="group bg-gray-900/90 border-white/20 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-2xl"
                            >
                                <CardHeader className="pb-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${industry.color}/20 border border-white/10`}>
                                                <IconComponent className={`h-5 w-5 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`} />
                                            </div>
                                            <div>
                                                <CardTitle className="text-white text-xl">{industry.name}</CardTitle>
                                                <p className="text-xs text-gray-400">{industry.fullName}</p>
                                            </div>
                                        </div>
                                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadgeClass(industry.status)}`}>
                                            {industry.statusIcon}
                                            {industry.status}
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-3">
                                    {industry.description.map((line, idx) => (
                                        <div key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                            <span className="text-blue-400 mt-0.5">•</span>
                                            <span>{line}</span>
                                        </div>
                                    ))}
                                    {industry.badge && (
                                        <div className="mt-3 text-xs text-gray-400 border-t border-white/10 pt-3">
                                            → {industry.badge}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}

                    {/* Mzatinova Labs Card */}
                    <Card className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-purple-500/30 backdrop-blur-xl overflow-hidden shadow-2xl">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                                    <Brain className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                    <CardTitle className="text-white text-xl">MZATINOVA LABS</CardTitle>
                                    <p className="text-xs text-gray-400">AI Research + Development</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                <span>Machine Learning for low-resource settings</span>
                            </div>
                            <div className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                <span>Natural Language Processing (Chichewa/Nyanja)</span>
                            </div>
                            <div className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                <span>Computer Vision for health & agriculture</span>
                            </div>
                            <div className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                <span>Predictive analytics for all industries</span>
                            </div>
                            <div className="mt-3 text-xs text-gray-400 border-t border-white/10 pt-3 italic">
                                Every division gets smarter because of Mzatinova Labs
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default IndustriesWeServe;

// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { GraduationCap, Heart, DollarSign, Sprout, ShoppingCart, Brain, Building } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const IndustriesWeServe: React.FC = () => {
//     const industries = [
//         {
//             id: 'education',
//             name: 'Education',
//             icon: GraduationCap,
//             color: 'from-blue-500 to-cyan-500',
//             description: 'Digital learning platforms and educational management systems',
//             solutions: [
//                 { name: 'EduSpace Portal', link: '/products#eduspace', live: true },
//                 { name: 'Learning Management', link: '/industries#education' },
//                 { name: 'Virtual Classrooms', link: '/industries#education' },
//                 { name: 'Student Analytics', link: '/industries#education' }
//             ],
//             stats: '50+ Schools Served'
//         },
//         {
//             id: 'health',
//             name: 'Health',
//             icon: Heart,
//             color: 'from-red-500 to-pink-500',
//             description: 'Healthcare technology for modern medical practices',
//             solutions: [
//                 { name: 'AI Medical Diagnostics', link: '/industries#health' },
//                 { name: 'Telemedicine Platforms', link: '/industries#health' },
//                 { name: 'Hospital Management', link: '/industries#health' },
//                 { name: 'Patient Portals', link: '/industries#health' }
//             ],
//             stats: '100K+ Patients Impacted'
//         },
//         {
//             id: 'finance',
//             name: 'Finance',
//             icon: DollarSign,
//             color: 'from-yellow-500 to-orange-500',
//             description: 'Fintech solutions for the digital economy',
//             solutions: [
//                 { name: 'Mobile Banking', link: '/industries#finance' },
//                 { name: 'Payment Gateways', link: '/industries#finance' },
//                 { name: 'Investment Platforms', link: '/industries#finance' },
//                 { name: 'Blockchain Solutions', link: '/industries#finance' }
//             ],
//             stats: 'Secure & Compliant'
//         },
//         {
//             id: 'agriculture',
//             name: 'Agriculture',
//             icon: Sprout,
//             color: 'from-green-500 to-emerald-500',
//             description: 'Smart farming and agricultural technology',
//             solutions: [
//                 { name: 'Farm Management', link: '/industries#agriculture' },
//                 { name: 'Supply Chain Tracking', link: '/industries#agriculture' },
//                 { name: 'Crop Monitoring', link: '/industries#agriculture' },
//                 { name: 'Marketplace Platforms', link: '/industries#agriculture' }
//             ],
//             stats: 'Sustainable Solutions'
//         },
//         {
//             id: 'retail',
//             name: 'Retail',
//             icon: ShoppingCart,
//             color: 'from-purple-500 to-violet-500',
//             description: 'E-commerce and retail technology solutions',
//             solutions: [
//                 { name: 'Mzatinova Store', link: '/products#store', featured: true },
//                 { name: 'E-commerce Platforms', link: '/industries#retail' },
//                 { name: 'Inventory Management', link: '/industries#retail' },
//                 { name: 'Customer Analytics', link: '/industries#retail' }
//             ],
//             stats: 'Growing Digital Market'
//         },
//         {
//             id: 'ai-research',
//             name: 'AI & Research',
//             icon: Brain,
//             color: 'from-teal-500 to-cyan-500',
//             description: 'Cutting-edge AI and research development',
//             solutions: [
//                 { name: 'Mzatinova Labs', link: '/industries#ai-research' },
//                 { name: 'AI Solutions', link: '/industries#ai-research' },
//                 { name: 'Research Projects', link: '/industries#ai-research' },
//                 { name: 'Innovation Hub', link: '/industries#ai-research' }
//             ],
//             stats: 'Pioneering Technology'
//         }
//     ];

//     return (
//         <section className="py-20 bg-slate-900 relative overflow-hidden">

//             {/* --- BACKGROUND VIDEO LAYER --- */}
//             <div className="absolute inset-0 z-0">
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
//                     // Bumped opacity to 90% for maximum clarity
//                     className="w-full h-full object-cover opacity-90"
//                 >
//                     <source
//                         src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-lines-in-space-2740-large.mp4"
//                         type="video/mp4"
//                     />
//                 </video>

//                 {/* CHANGE 1: Removed flat black overlay.
//                    Used a gradient that is TRANSPARENT at the top (from-transparent)
//                    This ensures the title region is NOT dark.
//                 */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
//             </div>

//             {/* CHANGE 2: Added a "Light Spot" behind the title to force brightness in that region */}
//             <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />

//             {/* Mesh Grid Pattern */}
//             <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px] z-0" />

//             <div className="container mx-auto px-6 relative z-10">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     {/* CHANGE 3: Made the pill lighter (bg-white/10) instead of black */}
//                     <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4 border border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.5)]">
//                         <Building className="h-4 w-4 text-blue-200" />
//                         <span className="text-sm font-medium text-blue-100">Multi-Industry Expertise</span>
//                     </div>

//                     {/* Strong drop shadow to ensure text is readable over the bright video */}
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
//                         Transforming <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent filter drop-shadow-lg">Industries</span> Through Technology
//                     </h2>
//                 </div>

//                 {/* Industries Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {industries.map((industry) => {
//                         const IconComponent = industry.icon;
//                         return (
//                             <Card
//                                 key={industry.id}
//                                 className="group bg-gray-900/90 border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-xl overflow-hidden shadow-2xl"
//                             >
//                                 <CardHeader className="pb-4">
//                                     <div className="flex items-center gap-4 mb-4">
//                                         <div className={`p-3 rounded-xl bg-gradient-to-br ${industry.color}/20 border border-white/10`}>
//                                             <IconComponent className={`h-8 w-8 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`} />
//                                         </div>
//                                         <div>
//                                             <CardTitle className="text-white text-2xl">{industry.name}</CardTitle>
//                                             <p className="text-sm text-gray-400 mt-1">{industry.stats}</p>
//                                         </div>
//                                     </div>
//                                     <p className="text-gray-200">{industry.description}</p>
//                                 </CardHeader>

//                                 <CardContent className="space-y-6">
//                                     <div>
//                                         <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Our Solutions</h4>
//                                         <div className="space-y-2">
//                                             {industry.solutions.map((solution, index) => (
//                                                 <Link key={index} to={solution.link} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group/item block border border-transparent hover:border-white/10">
//                                                     <div className="flex items-center gap-3">
//                                                         <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${industry.color}`} />
//                                                         <span className={`text-gray-300 group-hover/item:text-white transition-colors ${solution.featured ? 'font-semibold text-blue-300' : ''}`}>
//                                                             {solution.name}
//                                                         </span>
//                                                         {solution.live && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">LIVE</span>}
//                                                     </div>
//                                                     <span className="text-blue-400 opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     <div className="pt-2">
//                                         <Link to={`/industries#${industry.id}`}>
//                                             <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${industry.color}/10 hover:${industry.color}/20 border border-white/10 hover:border-white/30 text-white font-medium transition-all duration-300 shadow-lg`}>
//                                                 Explore {industry.name} Solutions
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default IndustriesWeServe;