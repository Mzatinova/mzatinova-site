import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
    Code,
    Brain,
    ShoppingCart,
    Puzzle,
    Palette,
    MessageSquare,
    Cpu,
    Zap,
    ArrowRight
} from 'lucide-react';

const OurServices: React.FC = () => {
    const services = [
        {
            id: 'development',
            name: 'Custom Software Development',
            icon: <Code className="h-10 w-10" />,
            description: 'Bespoke applications tailored to your business needs and processes.',
            color: 'from-blue-500 to-cyan-500',
            features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions'],
            deliverables: ['Full-stack development', 'Scalable architecture', 'Quality assurance', 'Deployment & support']
        },
        {
            id: 'ai-solutions',
            name: 'AI & Machine Learning',
            icon: <Brain className="h-10 w-10" />,
            description: 'Intelligent systems that learn, adapt, and automate complex tasks.',
            color: 'from-purple-500 to-pink-500',
            features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Engines'],
            deliverables: ['AI models', 'Data pipelines', 'Integration APIs', 'Training & optimization']
        },
        {
            id: 'ecommerce',
            name: 'E-commerce Platforms',
            icon: <ShoppingCart className="h-10 w-10" />,
            description: 'Complete online retail solutions with seamless shopping experiences.',
            color: 'from-green-500 to-emerald-500',
            features: ['Online Storefronts', 'Payment Gateways', 'Inventory Management', 'Customer Analytics'],
            deliverables: ['Multi-vendor platforms', 'Mobile commerce', 'CMS integration', 'Security compliance']
        },
        {
            id: 'integration',
            name: 'System Integration',
            icon: <Puzzle className="h-10 w-10" />,
            description: 'Connecting disparate systems into a unified, efficient workflow.',
            color: 'from-orange-500 to-red-500',
            features: ['API Integration', 'Legacy System Modernization', 'Data Migration', 'Third-party Services'],
            deliverables: ['Unified dashboards', 'Real-time sync', 'Error handling', 'Monitoring tools']
        },
        {
            id: 'design',
            name: 'UI/UX Design',
            icon: <Palette className="h-10 w-10" />,
            description: 'Beautiful, intuitive interfaces that users love to interact with.',
            color: 'from-teal-500 to-cyan-500',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
            deliverables: ['Mockups & prototypes', 'Design systems', 'User testing', 'Accessibility compliance']
        },
        {
            id: 'consultation',
            name: 'Technical Consultation',
            icon: <MessageSquare className="h-10 w-10" />,
            description: 'Expert guidance to make informed technology decisions for your business.',
            color: 'from-yellow-500 to-orange-500',
            features: ['Technology Strategy', 'Architecture Review', 'Digital Transformation', 'Team Training'],
            deliverables: ['Technical audits', 'Roadmaps', 'Best practices', 'Implementation guidance']
        }
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Discovery',
            description: 'We understand your goals, challenges, and requirements.'
        },
        {
            step: '02',
            title: 'Strategy',
            description: 'We design a comprehensive solution and development plan.'
        },
        {
            step: '03',
            title: 'Development',
            description: 'Our team builds your solution with agile methodologies.'
        },
        {
            step: '04',
            title: 'Launch',
            description: 'We deploy, test, and optimize your solution for success.'
        }
    ];

    // Helper function to map Home Page cards to Service Page tabs
    const getCategoryTab = (serviceId: string) => {
        switch (serviceId) {
            case 'design':
                return 'design';
            case 'consultation':
                return 'strategy';
            case 'ai-solutions':
            case 'development':
            case 'ecommerce':
            case 'integration':
            default:
                return 'development';
        }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            {/* --- NEW BEAUTIFUL BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                {/* Completely different image - coding/development related */}
                <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2600&auto=format&fit=crop
"
                    alt="Coding and Development Background"
                    className="w-full h-full object-cover"
                />

                {/* Slightly stronger overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-900/80 to-black/90" />

                {/* Subtle tech grid */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20">
                        <Cpu className="h-4 w-4 text-blue-300" />
                        <span className="text-sm font-medium text-blue-300">Technical Excellence</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        How We Build <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your Solution</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        From concept to deployment, we deliver comprehensive technology services tailored to your needs
                    </p>
                </div>

                {/* Our Process */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white text-center mb-10">
                        Our <span className="text-blue-400">Development Process</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {processSteps.map((step, index) => (
                            <div key={step.step} className="relative">
                                {/* Connecting Line */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-3/4 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 z-0" />
                                )}

                                <div className="relative bg-gray-900/50 border border-white/10 rounded-xl p-6 text-center group hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm z-10">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl font-bold text-white">{step.step}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                                    <p className="text-gray-300">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Grid - YOUR ORIGINAL STYLES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            className="group bg-black/40 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm overflow-hidden"
                        >
                            {/* Service Header */}
                            <CardHeader className="pb-4">
                                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${service.color}/10 border border-white/10 mb-4`}>
                                    <div className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                        {service.icon}
                                    </div>
                                </div>
                                <CardTitle className="text-white text-xl mb-3">
                                    {service.name}
                                </CardTitle>
                                <CardDescription className="text-gray-300 text-base">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                {/* Features */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                                        Key Features
                                    </h4>
                                    <div className="space-y-2">
                                        {service.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Zap className="h-3 w-3 text-blue-400" />
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Deliverables */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                                        What You Get
                                    </h4>
                                    <div className="space-y-2">
                                        {service.deliverables.map((deliverable, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                                                <span className="text-sm text-gray-300">{deliverable}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-4">
                                    <Link
                                        to="/services"
                                        state={{ category: getCategoryTab(service.id) }}
                                    >
                                        <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${service.color}/10 hover:${service.color}/20 border border-white/10 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/10`}>
                                            Explore Service
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <div className="inline-block bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-3xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Ready to Build Something Amazing?
                                </h3>
                                <p className="text-gray-300">
                                    Let's discuss how our services can transform your business
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
                                        Start Your Project
                                    </button>
                                </Link>
                                <Link to="/contact">
                                    <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-colors">
                                        Meet Our Team
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;


// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import {
//     Code,
//     Brain,
//     ShoppingCart,
//     Puzzle,
//     Palette,
//     MessageSquare,
//     Cpu,
//     Zap,
//     ArrowRight
// } from 'lucide-react';

// const OurServices: React.FC = () => {
//     const services = [
//         {
//             id: 'development',
//             name: 'Custom Software Development',
//             icon: <Code className="h-10 w-10" />,
//             description: 'Bespoke applications tailored to your business needs and processes.',
//             color: 'from-blue-500 to-cyan-500',
//             features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions'],
//             deliverables: ['Full-stack development', 'Scalable architecture', 'Quality assurance', 'Deployment & support']
//         },
//         {
//             id: 'ai-solutions',
//             name: 'AI & Machine Learning',
//             icon: <Brain className="h-10 w-10" />,
//             description: 'Intelligent systems that learn, adapt, and automate complex tasks.',
//             color: 'from-purple-500 to-pink-500',
//             features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Engines'],
//             deliverables: ['AI models', 'Data pipelines', 'Integration APIs', 'Training & optimization']
//         },
//         {
//             id: 'ecommerce',
//             name: 'E-commerce Platforms',
//             icon: <ShoppingCart className="h-10 w-10" />,
//             description: 'Complete online retail solutions with seamless shopping experiences.',
//             color: 'from-green-500 to-emerald-500',
//             features: ['Online Storefronts', 'Payment Gateways', 'Inventory Management', 'Customer Analytics'],
//             deliverables: ['Multi-vendor platforms', 'Mobile commerce', 'CMS integration', 'Security compliance']
//         },
//         {
//             id: 'integration',
//             name: 'System Integration',
//             icon: <Puzzle className="h-10 w-10" />,
//             description: 'Connecting disparate systems into a unified, efficient workflow.',
//             color: 'from-orange-500 to-red-500',
//             features: ['API Integration', 'Legacy System Modernization', 'Data Migration', 'Third-party Services'],
//             deliverables: ['Unified dashboards', 'Real-time sync', 'Error handling', 'Monitoring tools']
//         },
//         {
//             id: 'design',
//             name: 'UI/UX Design',
//             icon: <Palette className="h-10 w-10" />,
//             description: 'Beautiful, intuitive interfaces that users love to interact with.',
//             color: 'from-teal-500 to-cyan-500',
//             features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
//             deliverables: ['Mockups & prototypes', 'Design systems', 'User testing', 'Accessibility compliance']
//         },
//         {
//             id: 'consultation',
//             name: 'Technical Consultation',
//             icon: <MessageSquare className="h-10 w-10" />,
//             description: 'Expert guidance to make informed technology decisions for your business.',
//             color: 'from-yellow-500 to-orange-500',
//             features: ['Technology Strategy', 'Architecture Review', 'Digital Transformation', 'Team Training'],
//             deliverables: ['Technical audits', 'Roadmaps', 'Best practices', 'Implementation guidance']
//         }
//     ];

//     const processSteps = [
//         {
//             step: '01',
//             title: 'Discovery',
//             description: 'We understand your goals, challenges, and requirements.'
//         },
//         {
//             step: '02',
//             title: 'Strategy',
//             description: 'We design a comprehensive solution and development plan.'
//         },
//         {
//             step: '03',
//             title: 'Development',
//             description: 'Our team builds your solution with agile methodologies.'
//         },
//         {
//             step: '04',
//             title: 'Launch',
//             description: 'We deploy, test, and optimize your solution for success.'
//         }
//     ];

//     // Helper function to map Home Page cards to Service Page tabs
//     const getCategoryTab = (serviceId: string) => {
//         switch (serviceId) {
//             case 'design':
//                 return 'design';
//             case 'consultation':
//                 return 'strategy';
//             case 'ai-solutions':
//             case 'development':
//             case 'ecommerce':
//             case 'integration':
//             default:
//                 return 'development'; // Most items map to the Development tab
//         }
//     };

//     return (
//         <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
//             {/* Animated Background */}
//             <div className="absolute inset-0">
//                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent" />
//                 <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
//             </div>

//             <div className="container mx-auto px-6 relative z-10">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20">
//                         <Cpu className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Technical Excellence</span>
//                     </div>
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                         How We Build <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your Solution</span>
//                     </h2>
//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         From concept to deployment, we deliver comprehensive technology services tailored to your needs
//                     </p>
//                 </div>

//                 {/* Our Process */}
//                 <div className="mb-20">
//                     <h3 className="text-2xl font-bold text-white text-center mb-10">
//                         Our <span className="text-blue-400">Development Process</span>
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
//                         {processSteps.map((step, index) => (
//                             <div key={step.step} className="relative">
//                                 {/* Connecting Line */}
//                                 {index < processSteps.length - 1 && (
//                                     <div className="hidden lg:block absolute top-8 left-3/4 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 z-0" />
//                                 )}

//                                 <div className="relative bg-gray-900/50 border border-white/10 rounded-xl p-6 text-center group hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm z-10">
//                                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300">
//                                         <span className="text-2xl font-bold text-white">{step.step}</span>
//                                     </div>
//                                     <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
//                                     <p className="text-gray-300">{step.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {services.map((service) => (
//                         <Card
//                             key={service.id}
//                             className="group bg-black/40 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm overflow-hidden"
//                         >
//                             {/* Service Header */}
//                             <CardHeader className="pb-4">
//                                 <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${service.color}/10 border border-white/10 mb-4`}>
//                                     <div className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
//                                         {service.icon}
//                                     </div>
//                                 </div>
//                                 <CardTitle className="text-white text-xl mb-3">
//                                     {service.name}
//                                 </CardTitle>
//                                 <CardDescription className="text-gray-300 text-base">
//                                     {service.description}
//                                 </CardDescription>
//                             </CardHeader>

//                             <CardContent className="space-y-6">
//                                 {/* Features */}
//                                 <div>
//                                     <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
//                                         Key Features
//                                     </h4>
//                                     <div className="space-y-2">
//                                         {service.features.map((feature, index) => (
//                                             <div key={index} className="flex items-center gap-3">
//                                                 <Zap className="h-3 w-3 text-blue-400" />
//                                                 <span className="text-sm text-gray-300">{feature}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Deliverables */}
//                                 <div>
//                                     <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
//                                         What You Get
//                                     </h4>
//                                     <div className="space-y-2">
//                                         {service.deliverables.map((deliverable, index) => (
//                                             <div key={index} className="flex items-center gap-3">
//                                                 <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
//                                                 <span className="text-sm text-gray-300">{deliverable}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* CTA Button - CONNECTED TO SERVICES PAGE */}
//                                 <div className="pt-4">
//                                     <Link
//                                         to="/services"
//                                         state={{ category: getCategoryTab(service.id) }}
//                                     >
//                                         <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${service.color}/10 hover:${service.color}/20 border border-white/10 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/10`}>
//                                             Explore Service
//                                             <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                                         </button>
//                                     </Link>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>

//                 {/* Bottom CTA */}
//                 <div className="text-center mt-20">
//                     <div className="inline-block bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-3xl mx-auto">
//                         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//                             <div className="text-left">
//                                 <h3 className="text-2xl font-bold text-white mb-2">
//                                     Ready to Build Something Amazing?
//                                 </h3>
//                                 <p className="text-gray-300">
//                                     Let's discuss how our services can transform your business
//                                 </p>
//                             </div>
//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <Link to="/contact">
//                                     <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
//                                         Start Your Project
//                                     </button>
//                                 </Link>
//                                 <Link to="/contact">
//                                     <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-colors">
//                                         Meet Our Team
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

// export default OurServices;