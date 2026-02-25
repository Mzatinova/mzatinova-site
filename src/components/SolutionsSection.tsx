import React from 'react';
import { Link } from 'react-router-dom';
import {
    GraduationCap,
    Stethoscope,
    Tractor,
    Landmark,
    Store,
    Briefcase,
    LayoutGrid,
    ArrowRight,
    CheckCircle2,
    Building2
} from 'lucide-react';

const SolutionsSection: React.FC = () => {
    const solutions = [
        {
            id: 'eduspace',
            name: 'EduSpace',
            icon: <GraduationCap className="h-8 w-8" />,
            description: 'Next-generation infrastructure for schools, universities, and districts.',
            theme: 'green',
            glowColor: 'bg-emerald-500/20',
            borderColor: 'group-hover:border-emerald-500/50',
            buttonHover: 'group-hover:bg-emerald-500',
            highlights: [
                'Predictive student performance models',
                'Automated grading & report workflows',
                'Smart parent-teacher portals'
            ]
        },
        {
            id: 'healthspace',
            name: 'HealthSpace',
            icon: <Stethoscope className="h-8 w-8" />,
            description: 'Data-driven patient care, diagnostics, and hospital administration.',
            theme: 'blue',
            glowColor: 'bg-cyan-500/20',
            borderColor: 'group-hover:border-cyan-500/50',
            buttonHover: 'group-hover:bg-cyan-500',
            highlights: [
                'Unified Electronic Health Records',
                'Automated SMS appointment alerts',
                'Predictive pharmacy inventory'
            ]
        },
        {
            id: 'commercespace',
            name: 'CommerceSpace',
            icon: <Store className="h-8 w-8" />,
            description: 'Intelligent retail, Point of Sale, and automated supply chain management.',
            theme: 'purple',
            glowColor: 'bg-purple-500/20',
            borderColor: 'group-hover:border-purple-500/50',
            buttonHover: 'group-hover:bg-purple-500',
            highlights: [
                'Demand prediction analytics',
                'Auto-reorder supplier workflows',
                'Instant digital invoicing'
            ]
        },
        {
            id: 'agrispace',
            name: 'AgriSpace',
            icon: <Tractor className="h-8 w-8" />,
            description: 'Connecting environmental data to automated, large-scale farming operations.',
            theme: 'amber',
            glowColor: 'bg-amber-500/20',
            borderColor: 'group-hover:border-amber-500/50',
            buttonHover: 'group-hover:bg-amber-500',
            highlights: [
                'Weather pattern integration',
                'Crop yield predictive modeling',
                'Mobile tools for field workers'
            ]
        },
        {
            id: 'finspace',
            name: 'FinSpace',
            icon: <Landmark className="h-8 w-8" />,
            description: 'Bank-grade secure workflows and intelligence for financial institutions.',
            theme: 'teal',
            glowColor: 'bg-teal-500/20',
            borderColor: 'group-hover:border-teal-500/50',
            buttonHover: 'group-hover:bg-teal-500',
            highlights: [
                'Real-time fraud detection',
                'Automated KYC workflows',
                'Instant regulatory reporting'
            ]
        },
        {
            id: 'govspace',
            name: 'GovSpace',
            icon: <Building2 className="h-8 w-8" />,
            description: 'Intelligence and transparency architecture for public sector operations, infrastructure, and NGO aid distribution.',
            theme: 'indigo',
            glowColor: 'bg-indigo-500/20',
            borderColor: 'group-hover:border-indigo-500/50',
            buttonHover: 'group-hover:bg-indigo-500',
            highlights: [
                'Predictive infrastructure bottleneck alerts',
                'Automated grant and aid distribution tracking',
                'Real-time demographic and census analytics'
            ]
        },
        {
            id: 'enterprisespace',
            name: 'Enterprise Custom',
            icon: <Briefcase className="h-8 w-8" />,
            description: 'A bespoke intelligence and automation layer built exclusively for your unique needs.',
            theme: 'slate',
            glowColor: 'bg-slate-500/20',
            borderColor: 'group-hover:border-slate-500/50',
            buttonHover: 'group-hover:bg-blue-500',
            highlights: [
                'Connect legacy legacy systems',
                'Map your unique workflows',
                'Dedicated engineering team'
            ]
        }
    ];

    return (
        <section id="solutions" className="py-24 relative overflow-hidden bg-[#0B0F19] scroll-mt-20">
            {/* Minimalist Background Grids */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Refined Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-full mb-6">
                        <LayoutGrid className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Domain Architectures</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Built for your industry.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Ready for tomorrow.
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Choose your workspace. We’ve pre-configured our powerful intelligence and automation engines to solve the exact bottlenecks holding your specific industry back.
                    </p>
                </div>

                {/* Highly Visual Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {solutions.map((solution) => (
                        <div
                            key={solution.id}
                            className={`group relative bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${solution.borderColor}`}
                        >
                            {/* Card Background Glow Effect */}
                            <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] transition-all duration-500 opacity-50 group-hover:opacity-100 ${solution.glowColor}`}></div>

                            <div className="p-8 relative z-10 flex flex-col h-full">
                                {/* Icon Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-white shadow-xl">
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-wide">{solution.name}</h3>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                                    {solution.description}
                                </p>

                                {/* Impact Highlights */}
                                <div className="space-y-3 mb-8">
                                    {solution.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-300 font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <Link to={`/solutions/${solution.id}`} className="mt-auto block">
                                    <button className={`w-full py-4 rounded-xl bg-slate-950 border border-slate-800 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-transparent ${solution.buttonHover}`}>
                                        View {solution.name} Workspace
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom Enterprise Banner */}
                <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-slate-800 rounded-3xl p-8 md:p-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Operating in a unique sector?</h3>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            Our architecture is entirely industry-agnostic. We can map your data and automate your workflows, no matter how niche your operations are.
                        </p>
                    </div>
                    <Link to="/contact" className="flex-shrink-0 w-full md:w-auto">
                        <button className="w-full md:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            Request Custom Build
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default SolutionsSection;

// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import {
//     GraduationCap,
//     Stethoscope,
//     Tractor,
//     Landmark,
//     Store,
//     Briefcase,
//     Cpu,
//     Zap,
//     ArrowRight,
//     Database,
//     Workflow
// } from 'lucide-react';

// const SolutionsSection: React.FC = () => {
//     // Replaced generic 'services' with highly targeted Industry Solutions
//     const solutions = [
//         {
//             id: 'eduspace',
//             name: 'EduSpace',
//             icon: <GraduationCap className="h-10 w-10" />,
//             description: 'Intelligent infrastructure for modern educational institutions.',
//             color: 'from-green-500 to-emerald-500',
//             features: [
//                 '📊 Predictive student performance tracking',
//                 '⚙️ Automated grading and report generation',
//                 '⚙️ Smart parent-teacher communication workflows',
//                 '📊 Campus resource allocation insights'
//             ],
//             deliverables: [
//                 'Unified student data records',
//                 'Automated administrative workflows',
//                 'Custom portals for staff and students',
//                 'Scales from single schools to districts'
//             ]
//         },
//         {
//             id: 'healthspace',
//             name: 'HealthSpace',
//             icon: <Stethoscope className="h-10 w-10" />,
//             description: 'Data-driven patient care and hospital administration.',
//             color: 'from-blue-500 to-cyan-500',
//             features: [
//                 '✓ Unified Electronic Health Records (EHR)',
//                 '✓ Automated appointment scheduling & SMS alerts',
//                 '✓ Smart inventory for pharmacy supplies',
//                 '✓ Predictive patient flow analytics'
//             ],
//             deliverables: [
//                 'HIPAA-compliant data intelligence',
//                 'Reduced administrative bottleneck',
//                 'Real-time ward and bed management',
//                 'Integration with legacy medical devices'
//             ]
//         },
//         {
//             id: 'commercespace',
//             name: 'CommerceSpace',
//             icon: <Store className="h-10 w-10" />,
//             description: 'Intelligent retail and supply chain management.',
//             color: 'from-purple-500 to-pink-500',
//             features: [
//                 '📊 Predict demand before stock runs out',
//                 '📊 Deep customer purchasing analytics',
//                 '⚙️ Auto-reorder workflows with suppliers',
//                 '⚙️ Instant automated invoicing and receipts'
//             ],
//             deliverables: [
//                 'Smart POS and inventory system',
//                 'Powered by the Mzatinova engines',
//                 'Scales from one shop to a retail chain',
//                 'Real-time profit margin analysis'
//             ]
//         },
//         {
//             id: 'agrispace',
//             name: 'AgriSpace',
//             icon: <Tractor className="h-10 w-10" />,
//             description: 'Connecting agricultural data to automated farming operations.',
//             color: 'from-amber-500 to-orange-500',
//             features: [
//                 '✓ Weather pattern integration and alerts',
//                 '✓ Crop yield predictive modeling',
//                 '✓ Automated supply chain logistics',
//                 '✓ Equipment maintenance tracking'
//             ],
//             deliverables: [
//                 'Data intelligence for cooperatives',
//                 'Mobile-friendly for field workers',
//                 'Automated market price reporting',
//                 'Resource optimization insights'
//             ]
//         },
//         {
//             id: 'finspace',
//             name: 'FinSpace',
//             icon: <Landmark className="h-10 w-10" />,
//             description: 'Secure, intelligent workflows for financial institutions.',
//             color: 'from-teal-500 to-emerald-500',
//             features: [
//                 '✓ Automated fraud detection patterns',
//                 '✓ KYC (Know Your Customer) automation workflows',
//                 '✓ Real-time transaction monitoring',
//                 '✓ Automated regulatory reporting'
//             ],
//             deliverables: [
//                 'Bank-grade security architecture',
//                 'Lightning-fast data processing',
//                 'Automated compliance checks',
//                 'Custom mobile banking interfaces'
//             ]
//         },
//         {
//             id: 'enterprisespace',
//             name: 'Enterprise Custom',
//             icon: <Briefcase className="h-10 w-10" />,
//             description: 'A bespoke solution layer built specifically for your unique industry.',
//             color: 'from-slate-400 to-slate-600',
//             features: [
//                 '✓ We deploy our engines in your environment',
//                 '✓ Connect all your legacy fragmented systems',
//                 '✓ Map out and automate your unique workflows',
//                 '✓ Build a custom UI specifically for your team'
//             ],
//             deliverables: [
//                 'Total digital transformation',
//                 'No "rip-and-replace" required',
//                 'Dedicated engineering support',
//                 'Continuous engine learning'
//             ]
//         }
//     ];

//     return (
//         <section className="py-20 relative overflow-hidden bg-slate-950">
//             {/* Background Setup */}
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
//                 <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
//                 <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
//             </div>

//             <div className="container mx-auto px-6 relative z-10">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20">
//                         <Cpu className="h-4 w-4 text-blue-400" />
//                         <span className="text-sm font-medium text-blue-300">INDUSTRY APPLICATIONS</span>
//                     </div>
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                         <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Every solution</span> sits on the same foundation
//                     </h2>
//                     <p className="text-xl text-slate-400 max-w-3xl mx-auto">
//                         One powerful intelligence architecture. Deployed specifically for your industry's hardest challenges.
//                     </p>
//                 </div>

//                 {/* Engine Architecture Diagram (Kept from your original code - it's great!) */}
//                 <div className="max-w-4xl mx-auto mb-20 hidden md:block">
//                     {/* Your Data */}
//                     <div className="flex justify-center mb-4">
//                         <div className="bg-slate-900 border border-blue-500/30 rounded-xl px-8 py-4 inline-flex items-center gap-3 shadow-lg shadow-blue-500/10">
//                             <Database className="h-6 w-6 text-blue-400" />
//                             <span className="text-white font-semibold tracking-wide">YOUR RAW DATA</span>
//                             <span className="text-sm text-slate-400">(Any industry format)</span>
//                         </div>
//                     </div>

//                     {/* Arrow down */}
//                     <div className="flex justify-center mb-4">
//                         <ArrowRight className="h-6 w-6 text-slate-500 rotate-90" />
//                     </div>

//                     {/* Two Layers */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//                         <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
//                             <CardHeader>
//                                 <div className="flex items-center gap-3">
//                                     <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
//                                         <Database className="h-6 w-6 text-blue-400" />
//                                     </div>
//                                     <CardTitle className="text-white text-lg">Mzatinova Intelligence Engine</CardTitle>
//                                 </div>
//                             </CardHeader>
//                             <CardContent>
//                                 <ul className="space-y-2">
//                                     <li className="text-slate-300 text-sm flex items-start gap-2">
//                                         <span className="text-blue-400">•</span><span>Ingests data from any source</span>
//                                     </li>
//                                     <li className="text-slate-300 text-sm flex items-start gap-2">
//                                         <span className="text-blue-400">•</span><span>Indexes for instant search</span>
//                                     </li>
//                                     <li className="text-slate-300 text-sm flex items-start gap-2">
//                                         <span className="text-blue-400">•</span><span>Finds patterns and insights</span>
//                                     </li>
//                                 </ul>
//                             </CardContent>
//                         </Card>

//                         <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
//                             <CardHeader>
//                                 <div className="flex items-center gap-3">
//                                     <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
//                                         <Workflow className="h-6 w-6 text-purple-400" />
//                                     </div>
//                                     <CardTitle className="text-white text-lg">Mzatinova Workflow Automation</CardTitle>
//                                 </div>
//                             </CardHeader>
//                             <CardContent>
//                                 <ul className="space-y-2">
//                                     <li className="text-slate-300 text-sm flex items-start gap-2">
//                                         <span className="text-purple-400">•</span><span>Triggers actions based on insights</span>
//                                     </li>
//                                     <li className="text-slate-300 text-sm flex items-start gap-2">
//                                         <span className="text-purple-400">•</span><span>Generates documents and alerts</span>
//                                     </li>
//                                     <li className="text-slate-300 text-sm flex items-start gap-2">
//                                         <span className="text-purple-400">•</span><span>Connects to SMS, WhatsApp, APIs</span>
//                                     </li>
//                                 </ul>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     {/* Arrow down */}
//                     <div className="flex justify-center mb-4">
//                         <ArrowRight className="h-6 w-6 text-slate-500 rotate-90" />
//                     </div>

//                     {/* Your Solution */}
//                     <div className="flex justify-center">
//                         <div className="bg-slate-900 border border-emerald-500/30 rounded-xl px-8 py-4 inline-flex items-center gap-3 shadow-lg shadow-emerald-500/10">
//                             <Briefcase className="h-6 w-6 text-emerald-400" />
//                             <span className="text-white font-semibold tracking-wide">INDUSTRY SOLUTION LAYER</span>
//                             <span className="text-sm text-slate-400">(EduSpace, HealthSpace, etc.)</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Solutions Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {solutions.map((solution) => (
//                         <Card
//                             key={solution.id}
//                             className="group bg-slate-900/40 border-slate-800 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm overflow-hidden"
//                         >
//                             <CardHeader className="pb-4">
//                                 <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${solution.color}/10 border border-white/5 mb-4`}>
//                                     <div className={`bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
//                                         {solution.icon}
//                                     </div>
//                                 </div>
//                                 <CardTitle className="text-white text-xl mb-3 font-bold tracking-wide">
//                                     {solution.name}
//                                 </CardTitle>
//                                 <CardDescription className="text-slate-400 text-base">
//                                     {solution.description}
//                                 </CardDescription>
//                             </CardHeader>

//                             <CardContent className="space-y-6">
//                                 {/* Features */}
//                                 <div>
//                                     <h4 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
//                                         Key Capabilities
//                                     </h4>
//                                     <div className="space-y-2">
//                                         {solution.features.map((feature, index) => (
//                                             <div key={index} className="flex items-start gap-2">
//                                                 {feature.startsWith('📊') || feature.startsWith('⚙️') || feature.startsWith('✓') ? (
//                                                     <span className="text-slate-400 mt-0.5 text-sm">{feature.charAt(0)}</span>
//                                                 ) : (
//                                                     <Zap className="h-3 w-3 text-slate-400 mt-1 flex-shrink-0" />
//                                                 )}
//                                                 <span className="text-sm text-slate-300">{feature.substring(feature.startsWith('✓') ? 2 : 1).trim()}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Deliverables */}
//                                 <div>
//                                     <h4 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
//                                         The Result
//                                     </h4>
//                                     <div className="space-y-2">
//                                         {solution.deliverables.map((deliverable, index) => (
//                                             <div key={index} className="flex items-center gap-3">
//                                                 <div className="h-1.5 w-1.5 rounded-full bg-slate-600 flex-shrink-0 group-hover:bg-blue-400 transition-colors" />
//                                                 <span className="text-sm text-slate-300">{deliverable}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* CTA Button */}
//                                 <div className="pt-4">
//                                     <Link to={`/solutions/${solution.id}`}>
//                                         <button className={`w-full py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-slate-500`}>
//                                             Explore {solution.name}
//                                             <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-white" />
//                                         </button>
//                                     </Link>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>

//                 {/* Bottom CTA */}
//                 <div className="text-center mt-20">
//                     <div className="inline-block bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-3xl mx-auto shadow-2xl">
//                         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//                             <div className="text-left">
//                                 <h3 className="text-2xl font-bold text-white mb-2">
//                                     Don't see your industry?
//                                 </h3>
//                                 <p className="text-slate-400">
//                                     Our engines are completely agnostic. We can build a custom layer for any sector.
//                                 </p>
//                             </div>
//                             <div className="flex flex-shrink-0">
//                                 <Link to="/contact">
//                                     <button className="px-8 py-3 bg-white text-slate-950 rounded-lg font-bold hover:bg-slate-200 transition-colors">
//                                         Talk to Engineering
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SolutionsSection;