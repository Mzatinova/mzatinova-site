import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Code,
    Smartphone,
    Puzzle,
    Cloud,
    Palette,
    MessageSquare,
    Cpu,
    Zap,
    Shield,
    Users,
    BarChart,
    Settings,
    TrendingUp,
    Wrench,
    BookOpen,
    ArrowRight,
    CheckCircle,
    Target,
    Layers,
    Workflow,
    Database,
    Rocket,
    Sparkles,
    XCircle,
    Search,
    Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicesPage: React.FC = () => {
    const [activeService, setActiveService] = useState<string>('development');
    const [showMobileServices, setShowMobileServices] = useState(false);

    const serviceCategories = [
        {
            id: 'development',
            name: 'Development',
            icon: <Code className="h-8 w-8" />,
            color: 'from-blue-500 to-cyan-500',
            gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
            description: 'Deploying our engines as applications and interfaces.'
        },
        {
            id: 'strategy',
            name: 'Strategy',
            icon: <BarChart className="h-8 w-8" />,
            color: 'from-purple-500 to-pink-500',
            gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
            description: 'Planning how our engines will transform your organization.'
        },
        {
            id: 'design',
            name: 'Design',
            icon: <Palette className="h-8 w-8" />,
            color: 'from-teal-500 to-green-500',
            gradient: 'bg-gradient-to-r from-teal-500 to-green-500',
            description: 'Creating interfaces that make intelligence accessible.'
        },
        {
            id: 'support',
            name: 'Support',
            icon: <Settings className="h-8 w-8" />,
            color: 'from-orange-500 to-red-500',
            gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
            description: 'Keeping your engines running at peak performance.'
        }
    ];

    // Updated services array with engine-focused messaging
    const services = [
        // DEVELOPMENT CATEGORY - Engine Deployment
        {
            id: 'web-development',
            category: 'development',
            name: 'Web Applications',
            icon: <Code className="h-6 w-6" />,
            description: 'Deploying Our Engines as Web Interfaces',
            whatWeDo: 'We take our Data Intelligence Engine and Workflow Automation Platform, and we build a web interface on top of them — customized for your users.',
            youGet: [
                'Your data, intelligently organized',
                'Your workflows, fully automated',
                'A beautiful web interface to access it'
            ],
            features: [
                'Data Intelligence integrated',
                'Workflow Automation built-in',
                'Real-time insights',
                'Custom dashboards'
            ],
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            deliveryTime: '4-12 weeks',
            startingPrice: '$5,000',
            ctaText: 'Deploy as Web App'
        },
        {
            id: 'mobile-apps',
            category: 'development',
            name: 'Mobile Applications',
            icon: <Smartphone className="h-6 w-6" />,
            description: 'Our Engines in Your Pocket',
            whatWeDo: 'We take our core engines and wrap them in a mobile interface — so your team can access intelligence and automation from anywhere.',
            youGet: [
                'Offline-capable intelligence',
                'Push notifications (Workflow Automation)',
                'Your data, available anywhere'
            ],
            features: [
                'Offline data sync',
                'Push notifications',
                'Mobile-optimized UI',
                'Cross-platform support'
            ],
            technologies: ['React Native', 'Firebase', 'GraphQL'],
            deliveryTime: '6-16 weeks',
            startingPrice: '$8,000',
            ctaText: 'Deploy as Mobile App'
        },
        {
            id: 'api-integration',
            category: 'development',
            name: 'APIs & Integration',
            icon: <Puzzle className="h-6 w-6" />,
            description: 'Connecting Our Engines to Your World',
            whatWeDo: 'We don\'t just build APIs. We connect our Data Intelligence and Workflow Automation engines to your existing systems — so THEY become smart.',
            youGet: [
                'Your legacy systems, now intelligent',
                'Data flowing between all your tools',
                'Automated workflows across platforms'
            ],
            features: [
                'REST & GraphQL APIs',
                'Legacy system integration',
                'Real-time data sync',
                'Webhook automation'
            ],
            technologies: ['Node.js', 'GraphQL', 'REST', 'Webhooks'],
            deliveryTime: '3-8 weeks',
            startingPrice: '$4,000',
            ctaText: 'Connect Your Systems'
        },
        {
            id: 'cloud-deployment',
            category: 'development',
            name: 'Cloud Deployment',
            icon: <Cloud className="h-6 w-6" />,
            description: 'Hosting Your Mzatinova Engines',
            whatWeDo: 'We deploy our engines on cloud infrastructure tailored to your scale, security, and access needs. Your data stays yours. Your automation runs 24/7.',
            youGet: [
                'Your engines, always available',
                'Scalable as you grow',
                'Secure, monitored infrastructure'
            ],
            features: [
                'AWS/Azure/GCP',
                'Auto-scaling',
                '99.9% uptime',
                'Managed security'
            ],
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
            deliveryTime: '2-6 weeks',
            startingPrice: '$3,000',
            ctaText: 'Deploy Your Engines'
        },

        // STRATEGY CATEGORY - Planning Engine Deployment
        {
            id: 'technical-consultation',
            category: 'strategy',
            name: 'Technical Consultation',
            icon: <MessageSquare className="h-6 w-6" />,
            description: 'Discovering Your Intelligence Potential',
            whatWeDo: 'We audit your organization to answer: What data do you have that you\'re not using? What workflows waste your team\'s time? Where could intelligence save you money?',
            questions: [
                'What data do you have that you\'re not using?',
                'What workflows waste your team\'s time?',
                'Where could intelligence save you money?',
                'How should our engines be deployed?'
            ],
            features: [
                'Data landscape audit',
                'Workflow analysis',
                'ROI projections',
                'Deployment roadmap'
            ],
            technologies: ['Strategy Sessions', 'Workshops', 'Documentation'],
            deliveryTime: '1-4 weeks',
            startingPrice: '$2,500',
            ctaText: 'Discover Your Potential'
        },
        {
            id: 'digital-transformation',
            category: 'strategy',
            name: 'Digital Transformation',
            icon: <TrendingUp className="h-6 w-6" />,
            description: 'Rebuilding Your Organization Around Intelligence',
            whatWeDo: 'We don\'t just add technology — we redesign how your organization works, with our engines at the center of every process.',
            deliverables: [
                'Complete workflow redesign',
                'Our engines embedded in your operations',
                'Team training for the new way of work',
                'Measurable efficiency gains'
            ],
            features: [
                'Process re-engineering',
                'Change management',
                'Technology roadmap',
                'KPI tracking'
            ],
            technologies: ['Process Mapping', 'Automation Strategy', 'Training'],
            deliveryTime: '8-20 weeks',
            startingPrice: '$10,000',
            ctaText: 'Transform Your Org'
        },
        {
            id: 'security-planning',
            category: 'strategy',
            name: 'Security Planning',
            icon: <Shield className="h-6 w-6" />,
            description: 'Protecting Your Intelligence Assets',
            whatWeDo: 'Your data is valuable. Your automations are critical. We ensure your Mzatinova engines are deployed with enterprise-grade security.',
            weProvide: [
                'Security audit of your data landscape',
                'Threat modeling for your workflows',
                'Compliance with Malawian/global standards',
                'Incident response planning'
            ],
            features: [
                'Security audits',
                'Threat modeling',
                'Compliance review',
                'Incident response'
            ],
            technologies: ['Security Frameworks', 'Compliance Standards'],
            deliveryTime: '3-8 weeks',
            startingPrice: '$4,500',
            ctaText: 'Secure Your Intelligence'
        },

        // DESIGN CATEGORY - Interfaces for Engines
        {
            id: 'ui-ux-design',
            category: 'design',
            name: 'UI/UX Design',
            icon: <Palette className="h-6 w-6" />,
            description: 'Beautiful Interfaces for Powerful Engines',
            whatWeDo: 'Our engines are powerful. But they need beautiful interfaces so your team actually wants to use them. We design the "face" of your intelligence.',
            youGet: [
                'Interfaces your team will love',
                'User research specific to your context',
                'Designs that make intelligence accessible'
            ],
            features: [
                'User research',
                'Wireframing',
                'Visual design',
                'Interactive prototypes'
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch'],
            deliveryTime: '3-10 weeks',
            startingPrice: '$3,500',
            ctaText: 'Design Your Interface'
        },
        {
            id: 'user-research',
            category: 'design',
            name: 'User Research',
            icon: <Users className="h-6 w-6" />,
            description: 'Understanding How Your Team Works',
            whatWeDo: 'Before we design, we understand. We study how your team works, what frustrates them, and how intelligence can make their jobs easier.',
            youGet: [
                'Deep understanding of user needs',
                'Usability testing with real users',
                'Insights that shape your engine interface'
            ],
            features: [
                'User interviews',
                'Usability testing',
                'Journey mapping',
                'Persona development'
            ],
            technologies: ['Research Methods', 'Testing Tools'],
            deliveryTime: '2-6 weeks',
            startingPrice: '$2,500',
            ctaText: 'Understand Your Users'
        },

        // SUPPORT CATEGORY - Keeping Engines Running
        {
            id: 'maintenance',
            category: 'support',
            name: 'Maintenance',
            icon: <Wrench className="h-6 w-6" />,
            description: 'Your Engines, Always at Peak Performance',
            whatWeDo: 'Our engines are built to run. But they run BEST with ongoing care, monitoring, and optimization.',
            included: [
                '24/7 performance monitoring',
                'Bug fixes and patches',
                'Security updates',
                'Database optimization',
                'Usage analytics (so you see value)'
            ],
            features: [
                'Performance monitoring',
                'Bug fixes',
                'Security updates',
                'Backup management'
            ],
            technologies: ['Monitoring Tools', 'Automation'],
            deliveryTime: 'Ongoing',
            startingPrice: '$500/month',
            ctaText: 'Keep Engines Running'
        },
        {
            id: 'training',
            category: 'support',
            name: 'Training',
            icon: <BookOpen className="h-6 w-6" />,
            description: 'Teaching Your Team to Use Intelligence',
            whatWeDo: 'The best engine is useless if your team doesn\'t know how to use it. We train your people to become intelligence-powered.',
            weProvide: [
                'Hands-on system training',
                'Custom documentation for your context',
                'Workshops on "thinking with data"',
                'Ongoing support materials'
            ],
            features: [
                'System training',
                'Technical workshops',
                'Documentation',
                'Follow-up sessions'
            ],
            technologies: ['Training Materials', 'Video Tutorials'],
            deliveryTime: '1-4 weeks',
            startingPrice: '$1,500',
            ctaText: 'Train Your Team'
        },
        {
            id: 'updates-upgrades',
            category: 'support',
            name: 'Updates & Upgrades',
            icon: <Rocket className="h-6 w-6" />,
            description: 'Your Engines Evolve With You',
            whatWeDo: 'Your organization grows. Your needs change. Your Mzatinova engines grow WITH you.',
            weHandle: [
                'New feature development',
                'Scaling as your data grows',
                'Technology stack modernization',
                'Migration to newer versions'
            ],
            features: [
                'Feature additions',
                'Technology upgrades',
                'Migration services',
                'Performance enhancements'
            ],
            technologies: ['Upgrade Management', 'Migration Tools'],
            deliveryTime: '1-8 weeks',
            startingPrice: '$2,000',
            ctaText: 'Evolve Your Engines'
        }
    ];

    const filteredServices = services.filter(service => service.category === activeService);

    const getCategoryServices = (categoryId: string) => {
        return services.filter(service => service.category === categoryId);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
            <Header />
            <div className="container mx-auto px-6">

                {/* Hero Section - NEW */}
                <div className="text-center mb-16 px-2">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20 backdrop-blur-sm">
                        <Cpu className="h-4 w-4 text-blue-300" />
                        <span className="text-sm font-medium text-blue-300">DEPLOYING OUR ENGINES INSIDE YOUR ORG</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                        You don't need custom software.
                    </h1>

                    <p className="text-2xl text-gray-300 mb-6">
                        You need our <span className="text-blue-400 font-semibold">engines</span> — adapted to your industry.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 mb-8">
                        <div className="flex items-center gap-3 bg-blue-500/10 px-6 py-3 rounded-xl border border-blue-500/30">
                            <Database className="h-5 w-5 text-blue-400" />
                            <span className="text-white font-semibold">Data Intelligence Engine</span>
                        </div>
                        <span className="text-white text-2xl hidden sm:block">+</span>
                        <div className="flex items-center gap-3 bg-purple-500/10 px-6 py-3 rounded-xl border border-purple-500/30">
                            <Workflow className="h-5 w-5 text-purple-400" />
                            <span className="text-white font-semibold">Workflow Automation</span>
                        </div>
                    </div>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        One architecture. Any organization.
                    </p>
                </div>

                {/* How We Deploy Section - NEW */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20 backdrop-blur-sm">
                            <Rocket className="h-4 w-4 text-blue-300" />
                            <span className="text-sm font-medium text-blue-300">HOW WE DEPLOY OUR ENGINES IN YOUR ORGANIZATION</span>
                        </div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Every "service" below is really just a way to install and adapt our core engines to your context.
                        </p>
                    </div>

                    {/* Deployment Diagram */}
                    <Card className="bg-slate-800/50 border-slate-700 mb-8 overflow-hidden">
                        <CardContent className="p-8">
                            <div className="flex flex-col items-center">
                                {/* Your Data */}
                                <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl px-8 py-4 inline-flex items-center gap-3 mb-4">
                                    <Database className="h-5 w-5 text-blue-400" />
                                    <span className="text-white font-semibold">YOUR DATA + WORKFLOWS</span>
                                </div>

                                <ArrowRight className="h-6 w-6 text-gray-500 mb-4 rotate-90" />

                                {/* Core Engines */}
                                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-purple-500/30 rounded-xl p-6 mb-4 w-full max-w-2xl">
                                    <h3 className="text-white font-bold text-center mb-4">MZATINOVA CORE ENGINES</h3>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-lg">
                                            <Database className="h-4 w-4 text-blue-400" />
                                            <span className="text-white">Data Intelligence</span>
                                        </div>
                                        <span className="text-white hidden sm:block">·</span>
                                        <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-lg">
                                            <Workflow className="h-4 w-4 text-purple-400" />
                                            <span className="text-white">Workflow Automation</span>
                                        </div>
                                    </div>
                                </div>

                                <ArrowRight className="h-6 w-6 text-gray-500 mb-4 rotate-90" />

                                {/* Deployment Options */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                                    <div className="bg-slate-900/60 border border-blue-500/20 rounded-lg p-4 text-center">
                                        <Code className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                                        <h4 className="text-white font-medium mb-1">DEPLOY AS</h4>
                                        <p className="text-blue-300 text-sm">APPLICATION</p>
                                    </div>
                                    <div className="bg-slate-900/60 border border-purple-500/20 rounded-lg p-4 text-center">
                                        <Puzzle className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                                        <h4 className="text-white font-medium mb-1">DEPLOY AS</h4>
                                        <p className="text-purple-300 text-sm">INTEGRATION</p>
                                    </div>
                                    <div className="bg-slate-900/60 border border-green-500/20 rounded-lg p-4 text-center">
                                        <MessageSquare className="h-6 w-6 text-green-400 mx-auto mb-2" />
                                        <h4 className="text-white font-medium mb-1">DEPLOY AS</h4>
                                        <p className="text-green-300 text-sm">CONSULTING</p>
                                    </div>
                                </div>

                                <ArrowRight className="h-6 w-6 text-gray-500 my-4 rotate-90" />

                                {/* Outputs */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                                    <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-center">
                                        <Smartphone className="h-5 w-5 text-gray-300 mx-auto mb-1" />
                                        <p className="text-gray-300 text-sm">Web/Mobile Apps built on our engines</p>
                                    </div>
                                    <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-center">
                                        <Puzzle className="h-5 w-5 text-gray-300 mx-auto mb-1" />
                                        <p className="text-gray-300 text-sm">Connect to existing systems</p>
                                    </div>
                                    <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-center">
                                        <Target className="h-5 w-5 text-gray-300 mx-auto mb-1" />
                                        <p className="text-gray-300 text-sm">Strategy & Training to use our engines</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Service Category Navigation Tabs - Keep your existing */}
                <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-6 mb-8 border-b border-slate-700">
                    {/* Mobile Filter Toggle Button */}
                    <div className="lg:hidden flex justify-center mb-6">
                        <button
                            onClick={() => setShowMobileServices(!showMobileServices)}
                            className="px-6 py-3 rounded-full border border-slate-600 text-gray-300 hover:text-white hover:border-blue-400 bg-slate-800 flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            Categories
                            <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full">
                                {serviceCategories.find(cat => cat.id === activeService)?.name || 'All'}
                            </span>
                        </button>
                    </div>

                    {/* Desktop Service Categories - Horizontal */}
                    <div className="hidden lg:flex flex-wrap gap-4 justify-center">
                        {serviceCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveService(category.id)}
                                className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-3 ${activeService === category.id
                                    ? `${category.gradient} text-white border-transparent shadow-lg transform scale-105`
                                    : 'border-slate-600 text-gray-300 hover:text-white hover:bg-slate-800 hover:border-blue-500'
                                    }`}
                            >
                                <div className={activeService === category.id ? 'text-white' : `text-${category.color.replace('from-', '').split(' ')[0]}`}>
                                    {React.cloneElement(category.icon, { className: 'h-5 w-5' })}
                                </div>
                                <span className="font-medium">{category.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Service Categories - Vertical (when toggled) */}
                    {showMobileServices && (
                        <div className="lg:hidden mt-4 space-y-3">
                            {serviceCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => {
                                        setActiveService(category.id);
                                        setShowMobileServices(false);
                                    }}
                                    className={`w-full px-6 py-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${activeService === category.id
                                        ? `${category.gradient} text-white border-transparent shadow-lg`
                                        : 'border-slate-600 text-gray-300 hover:text-white hover:bg-slate-800 hover:border-blue-500'
                                        }`}
                                >
                                    <div className={`p-3 rounded-lg ${category.gradient}/20 border border-white/10`}>
                                        {React.cloneElement(category.icon, { className: 'h-5 w-5' })}
                                    </div>
                                    <div className="text-left">
                                        <div className="font-medium text-base">{category.name}</div>
                                        <div className="text-xs text-gray-300">{category.description}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Service Category Content - Updated with new card design */}
                <div className="mb-16">
                    {serviceCategories.map((category) => (
                        <div
                            key={category.id}
                            className={activeService === category.id ? 'block' : 'hidden'}
                        >
                            <div className="mb-12">
                                <div className="flex items-center gap-6 mb-10 p-6 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700">
                                    <div className={`p-5 rounded-2xl ${category.gradient}/20 border border-white/10 shadow-lg`}>
                                        {React.cloneElement(category.icon, { className: 'h-10 w-10' })}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                            {category.name} Services
                                        </h2>
                                        <p className="text-gray-300 text-lg mt-2">{category.description}</p>
                                    </div>
                                </div>

                                {/* Services Grid - Updated card design */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {getCategoryServices(category.id).map((service) => (
                                        <Card
                                            key={service.id}
                                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm shadow-xl hover:shadow-2xl"
                                        >
                                            <CardHeader className="pb-4">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className={`p-3 rounded-xl ${category.gradient}/20 border border-white/10`}>
                                                        {service.icon}
                                                    </div>
                                                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 flex items-center gap-1">
                                                        <Sparkles className="h-3 w-3" />
                                                        POWERED BY ENGINES
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-white text-xl mb-2">
                                                    {service.name}
                                                </CardTitle>
                                                <CardDescription className="text-gray-300 text-base">
                                                    {service.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent className="space-y-4 pb-4">
                                                {/* What We're Actually Doing */}
                                                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-700">
                                                    <p className="text-sm text-gray-300">
                                                        {service.whatWeDo || service.description}
                                                    </p>
                                                </div>

                                                {/* You Get / What We Provide */}
                                                {service.youGet && (
                                                    <div>
                                                        <h4 className="text-white font-semibold mb-2 text-sm">You get:</h4>
                                                        <ul className="space-y-1">
                                                            {service.youGet.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {service.questions && (
                                                    <div>
                                                        <h4 className="text-white font-semibold mb-2 text-sm">We answer:</h4>
                                                        <ul className="space-y-1">
                                                            {service.questions.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                                    <Search className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {service.deliverables && (
                                                    <div>
                                                        <h4 className="text-white font-semibold mb-2 text-sm">What we deliver:</h4>
                                                        <ul className="space-y-1">
                                                            {service.deliverables.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {service.weProvide && (
                                                    <div>
                                                        <h4 className="text-white font-semibold mb-2 text-sm">We provide:</h4>
                                                        <ul className="space-y-1">
                                                            {service.weProvide.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {service.included && (
                                                    <div>
                                                        <h4 className="text-white font-semibold mb-2 text-sm">Included:</h4>
                                                        <ul className="space-y-1">
                                                            {service.included.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {service.weHandle && (
                                                    <div>
                                                        <h4 className="text-white font-semibold mb-2 text-sm">We handle:</h4>
                                                        <ul className="space-y-1">
                                                            {service.weHandle.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Timeline & Price */}
                                                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-700">
                                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700">
                                                        <Target className="h-4 w-4 text-blue-400" />
                                                        <span className="text-gray-300 text-sm">{service.deliveryTime}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700">
                                                        <span className="text-gray-300 text-sm font-semibold">{service.startingPrice}</span>
                                                    </div>
                                                </div>
                                            </CardContent>

                                            <CardFooter>
                                                <Link to={`/services/${service.id}`} className="w-full">
                                                    <Button
                                                        className={`w-full ${category.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-5 transition-all duration-300`}
                                                    >
                                                        {service.ctaText || 'Explore Service'}
                                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                    </Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Engine Deployment Process - NEW */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20 backdrop-blur-sm">
                            <Layers className="h-4 w-4 text-blue-300" />
                            <span className="text-sm font-medium text-blue-300">OUR ENGINE DEPLOYMENT PROCESS</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Step 1 */}
                        <Card className="bg-slate-800/50 border-slate-700">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-blue-400">1</span>
                                    </div>
                                    <CardTitle className="text-white">DISCOVER</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">Your Data & Workflows</p>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <p className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-400" /> Data audit</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-400" /> Workflow inventory</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-400" /> Opportunity map</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 2 */}
                        <Card className="bg-slate-800/50 border-slate-700">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-purple-400">2</span>
                                    </div>
                                    <CardTitle className="text-white">DESIGN</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">Intelligence & Automation</p>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <p className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-400" /> Engine blueprint</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-400" /> Integration plan</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-400" /> Interface design</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 3 */}
                        <Card className="bg-slate-800/50 border-slate-700">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-green-400">3</span>
                                    </div>
                                    <CardTitle className="text-white">DEPLOY</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">Engines in Your Context</p>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <p className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-400" /> Working engines</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-400" /> Trained team</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-400" /> Measurable results</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Step 4 Ongoing */}
                    <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-yellow-400">4</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl mb-1">OPTIMIZE (Ongoing)</h3>
                                    <p className="text-gray-300">We monitor, improve, and evolve your engines as your organization grows.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* What Makes Us Different - NEW */}
                <Card className="mb-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-slate-700">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Target className="h-6 w-6 text-blue-400" />
                            WHAT MAKES US DIFFERENT
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-red-500/20">
                                    <XCircle className="h-6 w-6 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Others build from scratch each time</h4>
                                    <p className="text-gray-300">Every project starts over. No shared intelligence.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-green-500/20">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-2">We build ONCE and APPLY every time</h4>
                                    <p className="text-gray-300">Our engines get smarter with every project.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-slate-900/60 rounded-lg border border-blue-500/20">
                            <p className="text-gray-300 text-center">
                                <span className="text-blue-400 font-semibold">Every new project makes our engines SMARTER.</span>{' '}
                                Every client benefits from everything we've built.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Two-Column Layout Overview - Keep your existing but update titles */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Engine Deployment Options
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Development Section */}
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-blue-500/20">
                                        <Code className="h-7 w-7 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Application Deployment</h3>
                                </div>
                                <div className="space-y-3">
                                    {getCategoryServices('development').map((service) => (
                                        <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-blue-500/30">
                                            <div className="flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-blue-400" />
                                                <span className="text-gray-300 font-medium">{service.name}</span>
                                            </div>
                                            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 border-0 text-white">
                                                {service.startingPrice}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Design Section */}
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-teal-500/20">
                                        <Palette className="h-7 w-7 text-teal-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Interface Design</h3>
                                </div>
                                <div className="space-y-3">
                                    {getCategoryServices('design').map((service) => (
                                        <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-teal-500/30">
                                            <div className="flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-teal-400" />
                                                <span className="text-gray-300 font-medium">{service.name}</span>
                                            </div>
                                            <Badge className="bg-gradient-to-r from-teal-500 to-green-500 border-0 text-white">
                                                {service.startingPrice}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Strategy Section */}
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-purple-500/20">
                                        <BarChart className="h-7 w-7 text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Strategy & Planning</h3>
                                </div>
                                <div className="space-y-3">
                                    {getCategoryServices('strategy').map((service) => (
                                        <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-purple-500/30">
                                            <div className="flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-purple-400" />
                                                <span className="text-gray-300 font-medium">{service.name}</span>
                                            </div>
                                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white">
                                                {service.startingPrice}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Support Section */}
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-orange-500/20">
                                        <Settings className="h-7 w-7 text-orange-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Engine Maintenance</h3>
                                </div>
                                <div className="space-y-3">
                                    {getCategoryServices('support').map((service) => (
                                        <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-orange-500/30">
                                            <div className="flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-orange-400" />
                                                <span className="text-gray-300 font-medium">{service.name}</span>
                                            </div>
                                            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white">
                                                {service.startingPrice}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section - NEW */}
                <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-purple-500/30">
                    <CardContent className="p-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            READY TO PUT INTELLIGENCE TO WORK IN YOUR ORG?
                        </h2>
                        <p className="text-2xl text-gray-300 mb-4">
                            You don't need custom software.
                        </p>
                        <p className="text-xl text-gray-300 mb-8">
                            You need our <span className="text-blue-400 font-semibold">engines</span> — adapted to you.
                        </p>
                        <p className="text-lg text-gray-300 mb-8">
                            Let's discover what intelligence + automation could do for your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg">
                                    Schedule Free Discovery Call
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-6 text-lg">
                                    Tell Us About Your Industry
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                <Footer />
            </div>
        </div>
    );
};

export default ServicesPage;


// import React, { useState } from 'react';
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import {
//     Code,
//     Smartphone,
//     Puzzle,
//     Cloud,
//     Palette,
//     MessageSquare,
//     Cpu,
//     Zap,
//     Shield,
//     Users,
//     BarChart,
//     Settings,
//     TrendingUp,
//     Wrench,
//     BookOpen,
//     ArrowRight,
//     CheckCircle,
//     Target,
//     Layers,
//     Workflow
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const ServicesPage: React.FC = () => {
//     const [activeService, setActiveService] = useState<string>('development');
//     const [showMobileServices, setShowMobileServices] = useState(false);

//     const serviceCategories = [
//         {
//             id: 'development',
//             name: 'Development',
//             icon: <Code className="h-8 w-8" />,
//             color: 'from-blue-500 to-cyan-500',
//             gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
//             description: 'Building robust, scalable software solutions using modern technologies and best practices.'
//         },
//         {
//             id: 'strategy',
//             name: 'Strategy',
//             icon: <BarChart className="h-8 w-8" />,
//             color: 'from-purple-500 to-pink-500',
//             gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
//             description: 'Strategic guidance and planning for digital transformation and technology adoption.'
//         },
//         {
//             id: 'design',
//             name: 'Design',
//             icon: <Palette className="h-8 w-8" />,
//             color: 'from-teal-500 to-green-500',
//             gradient: 'bg-gradient-to-r from-teal-500 to-green-500',
//             description: 'Creating intuitive, beautiful user experiences that drive engagement and satisfaction.'
//         },
//         {
//             id: 'support',
//             name: 'Support',
//             icon: <Settings className="h-8 w-8" />,
//             color: 'from-orange-500 to-red-500',
//             gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
//             description: 'Ongoing maintenance, optimization, and support for your technology solutions.'
//         }
//     ];

//     const services = [
//         {
//             id: 'web-development',
//             category: 'development',
//             name: 'Web Applications',
//             icon: <Code className="h-6 w-6" />,
//             description: 'Custom web applications built with modern frameworks for optimal performance and scalability.',
//             features: [
//                 'Responsive design',
//                 'Progressive Web Apps',
//                 'Real-time features',
//                 'API integration',
//                 'Cloud deployment',
//                 'Performance optimization'
//             ],
//             technologies: ['React', 'Next.js', 'Vue', 'Node.js', 'Python', 'Java'],
//             deliveryTime: '4-12 weeks',
//             startingPrice: '$5,000'
//         },
//         {
//             id: 'mobile-apps',
//             category: 'development',
//             name: 'Mobile Apps',
//             icon: <Smartphone className="h-6 w-6" />,
//             description: 'Native and cross-platform mobile applications for iOS and Android devices.',
//             features: [
//                 'iOS & Android development',
//                 'React Native apps',
//                 'Offline functionality',
//                 'Push notifications',
//                 'App store deployment',
//                 'Performance tuning'
//             ],
//             technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
//             deliveryTime: '6-16 weeks',
//             startingPrice: '$8,000'
//         },
//         {
//             id: 'api-integration',
//             category: 'development',
//             name: 'APIs & Integration',
//             icon: <Puzzle className="h-6 w-6" />,
//             description: 'Seamless integration between systems and development of custom APIs.',
//             features: [
//                 'REST & GraphQL APIs',
//                 'Third-party integration',
//                 'Legacy system modernization',
//                 'Microservices architecture',
//                 'API documentation',
//                 'Security implementation'
//             ],
//             technologies: ['Node.js', 'Python', 'GraphQL', 'Postman', 'Swagger'],
//             deliveryTime: '3-8 weeks',
//             startingPrice: '$4,000'
//         },
//         {
//             id: 'cloud-deployment',
//             category: 'development',
//             name: 'Cloud Deployment',
//             icon: <Cloud className="h-6 w-6" />,
//             description: 'Cloud infrastructure setup, migration, and optimization for your applications.',
//             features: [
//                 'AWS/Azure/GCP setup',
//                 'Containerization',
//                 'CI/CD pipelines',
//                 'Scalability planning',
//                 'Disaster recovery',
//                 'Cost optimization'
//             ],
//             technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
//             deliveryTime: '2-6 weeks',
//             startingPrice: '$3,000'
//         },
//         {
//             id: 'technical-consultation',
//             category: 'strategy',
//             name: 'Technical Consultation',
//             icon: <MessageSquare className="h-6 w-6" />,
//             description: 'Expert advice on technology strategy, architecture, and implementation planning.',
//             features: [
//                 'Technology assessment',
//                 'Architecture review',
//                 'Solution design',
//                 'Vendor selection',
//                 'ROI analysis',
//                 'Implementation roadmap'
//             ],
//             technologies: ['Strategy Sessions', 'Architecture Diagrams', 'Technical Docs'],
//             deliveryTime: '1-4 weeks',
//             startingPrice: '$2,500'
//         },
//         {
//             id: 'digital-transformation',
//             category: 'strategy',
//             name: 'Digital Transformation',
//             icon: <TrendingUp className="h-6 w-6" />,
//             description: 'Comprehensive strategy for modernizing your business processes with technology.',
//             features: [
//                 'Process automation',
//                 'Digital strategy',
//                 'Change management',
//                 'Workflow optimization',
//                 'Digital tool selection',
//                 'Training programs'
//             ],
//             technologies: ['Process Mapping', 'Automation Tools', 'Training Materials'],
//             deliveryTime: '8-20 weeks',
//             startingPrice: '$10,000'
//         },
//         {
//             id: 'it-infrastructure',
//             category: 'strategy',
//             name: 'IT Infrastructure',
//             icon: <Layers className="h-6 w-6" />,
//             description: 'Planning and implementation of robust IT infrastructure for your organization.',
//             features: [
//                 'Network design',
//                 'Security architecture',
//                 'Data management',
//                 'Backup solutions',
//                 'Compliance planning',
//                 'Performance monitoring'
//             ],
//             technologies: ['Network Design', 'Security Protocols', 'Monitoring Tools'],
//             deliveryTime: '4-12 weeks',
//             startingPrice: '$6,000'
//         },
//         {
//             id: 'security-planning',
//             category: 'strategy',
//             name: 'Security Planning',
//             icon: <Shield className="h-6 w-6" />,
//             description: 'Comprehensive security strategy and implementation for your digital assets.',
//             features: [
//                 'Security audits',
//                 'Threat modeling',
//                 'Compliance guidance',
//                 'Incident response',
//                 'Encryption strategies',
//                 'Access control'
//             ],
//             technologies: ['Security Frameworks', 'Compliance Standards', 'Monitoring'],
//             deliveryTime: '3-8 weeks',
//             startingPrice: '$4,500'
//         },
//         {
//             id: 'ui-ux-design',
//             category: 'design',
//             name: 'UI/UX Design',
//             icon: <Palette className="h-6 w-6" />,
//             description: 'Creating intuitive, aesthetically pleasing interfaces that enhance user experience.',
//             features: [
//                 'User research',
//                 'Wireframing',
//                 'Visual design',
//                 'Interaction design',
//                 'Design systems',
//                 'Accessibility'
//             ],
//             technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping Tools'],
//             deliveryTime: '3-10 weeks',
//             startingPrice: '$3,500'
//         },
//         {
//             id: 'user-research',
//             category: 'design',
//             name: 'User Research',
//             icon: <Users className="h-6 w-6" />,
//             description: 'Understanding user needs, behaviors, and pain points to inform design decisions.',
//             features: [
//                 'User interviews',
//                 'Surveys & analytics',
//                 'Usability testing',
//                 'Persona development',
//                 'Journey mapping',
//                 'Competitive analysis'
//             ],
//             technologies: ['Research Methods', 'Analytics Tools', 'Testing Platforms'],
//             deliveryTime: '2-6 weeks',
//             startingPrice: '$2,500'
//         },
//         {
//             id: 'prototyping',
//             category: 'design',
//             name: 'Prototyping',
//             icon: <Workflow className="h-6 w-6" />,
//             description: 'Interactive prototypes to test concepts and gather feedback before development.',
//             features: [
//                 'Low-fidelity prototypes',
//                 'High-fidelity mockups',
//                 'Interactive prototypes',
//                 'User testing sessions',
//                 'Design iteration',
//                 'Developer handoff'
//             ],
//             technologies: ['Figma', 'InVision', 'Proto.io', 'Marvel'],
//             deliveryTime: '2-5 weeks',
//             startingPrice: '$2,000'
//         },
//         {
//             id: 'maintenance',
//             category: 'support',
//             name: 'Maintenance',
//             icon: <Wrench className="h-6 w-6" />,
//             description: 'Ongoing support, updates, and optimization for your software solutions.',
//             features: [
//                 'Bug fixes',
//                 'Performance monitoring',
//                 'Security updates',
//                 'Database optimization',
//                 'Server management',
//                 'Backup management'
//             ],
//             technologies: ['Monitoring Tools', 'Automation', 'Ticketing Systems'],
//             deliveryTime: 'Ongoing',
//             startingPrice: '$500/month'
//         },
//         {
//             id: 'training',
//             category: 'support',
//             name: 'Training',
//             icon: <BookOpen className="h-6 w-6" />,
//             description: 'Comprehensive training programs for your team on new systems and technologies.',
//             features: [
//                 'System training',
//                 'Technical workshops',
//                 'Documentation',
//                 'Support materials',
//                 'Ongoing support',
//                 'Certification prep'
//             ],
//             technologies: ['Training Materials', 'Video Tutorials', 'Workshops'],
//             deliveryTime: '1-4 weeks',
//             startingPrice: '$1,500'
//         },
//         {
//             id: 'updates-upgrades',
//             category: 'support',
//             name: 'Updates & Upgrades',
//             icon: <ArrowRight className="h-6 w-6" />,
//             description: 'Regular updates, feature enhancements, and technology upgrades for your systems.',
//             features: [
//                 'Feature additions',
//                 'Technology upgrades',
//                 'Migration services',
//                 'Version updates',
//                 'Compatibility fixes',
//                 'Performance enhancements'
//             ],
//             technologies: ['Update Management', 'Migration Tools', 'Testing Suites'],
//             deliveryTime: '1-8 weeks',
//             startingPrice: '$2,000'
//         }
//     ];

//     const filteredServices = services.filter(service => service.category === activeService);

//     const getCategoryServices = (categoryId: string) => {
//         return services.filter(service => service.category === categoryId);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">

//                 {/* Service Category Navigation Tabs */}
//                 {/* <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-6 mb-8 -mx-6 px-6 border-b border-slate-700">
//                     <div className="flex flex-wrap gap-4 justify-center">
//                         {serviceCategories.map((category) => (
//                             <button
//                                 key={category.id}
//                                 onClick={() => setActiveService(category.id)}
//                                 className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-3 ${activeService === category.id
//                                     ? `${category.gradient} text-white border-transparent shadow-lg transform scale-105`
//                                     : 'border-slate-600 text-gray-300 hover:text-white hover:bg-slate-800 hover:border-blue-500'
//                                     }`}
//                             >
//                                 <div className={activeService === category.id ? 'text-white' : `text-${category.color.replace('from-', '').split(' ')[0]}`}>
//                                     {React.cloneElement(category.icon, { className: 'h-5 w-5' })}
//                                 </div>
//                                 <span className="font-medium">{category.name}</span>
//                             </button>
//                         ))}
//                     </div>
//                 </div> */}

//                 {/* Service Category Navigation Tabs */}
//                 <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-6 mb-8 border-b border-slate-700">
//                     {/* Mobile Filter Toggle Button */}
//                     <div className="lg:hidden flex justify-center mb-6">
//                         <button
//                             onClick={() => setShowMobileServices(!showMobileServices)}
//                             className="px-6 py-3 rounded-full border border-slate-600 text-gray-300 hover:text-white hover:border-blue-400 bg-slate-800 flex items-center gap-3"
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//                             </svg>
//                             Categories
//                             <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full">
//                                 {serviceCategories.find(cat => cat.id === activeService)?.name || 'All'}
//                             </span>
//                         </button>
//                     </div>

//                     {/* Desktop Service Categories - Horizontal */}
//                     <div className="hidden lg:flex flex-wrap gap-4 justify-center">
//                         {serviceCategories.map((category) => (
//                             <button
//                                 key={category.id}
//                                 onClick={() => setActiveService(category.id)}
//                                 className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-3 ${activeService === category.id
//                                     ? `${category.gradient} text-white border-transparent shadow-lg transform scale-105`
//                                     : 'border-slate-600 text-gray-300 hover:text-white hover:bg-slate-800 hover:border-blue-500'
//                                     }`}
//                             >
//                                 <div className={activeService === category.id ? 'text-white' : `text-${category.color.replace('from-', '').split(' ')[0]}`}>
//                                     {React.cloneElement(category.icon, { className: 'h-5 w-5' })}
//                                 </div>
//                                 <span className="font-medium">{category.name}</span>
//                             </button>
//                         ))}
//                     </div>

//                     {/* Mobile Service Categories - Vertical (when toggled) */}
//                     {showMobileServices && (
//                         <div className="lg:hidden mt-4 space-y-3">
//                             {serviceCategories.map((category) => (
//                                 <button
//                                     key={category.id}
//                                     onClick={() => {
//                                         setActiveService(category.id);
//                                         setShowMobileServices(false);
//                                     }}
//                                     className={`w-full px-6 py-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${activeService === category.id
//                                         ? `${category.gradient} text-white border-transparent shadow-lg`
//                                         : 'border-slate-600 text-gray-300 hover:text-white hover:bg-slate-800 hover:border-blue-500'
//                                         }`}
//                                 >
//                                     <div className={`p-3 rounded-lg ${category.gradient}/20 border border-white/10`}>
//                                         {React.cloneElement(category.icon, { className: 'h-5 w-5' })}
//                                     </div>
//                                     <div className="text-left">
//                                         <div className="font-medium text-base">{category.name}</div>
//                                         <div className="text-xs text-gray-300">{category.description}</div>
//                                     </div>
//                                 </button>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Page Header */}
//                 {/* Page Header */}
//                 <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
//                         Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technical Expertise</span>
//                     </h1>

//                     {/* Technical Excellence badge */}
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-2.5 rounded-full mb-8 border border-blue-500/30 backdrop-blur-sm">
//                         <Cpu className="h-5 w-5 text-blue-400 animate-pulse" />
//                         <span className="text-sm font-medium text-blue-300">Technical Excellence</span>
//                     </div>

//                     <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
//                         Comprehensive technology services that cover every aspect of software development, from strategy and design to implementation and support.
//                     </p>
//                 </div>

//                 {/* Service Category Content */}
//                 <div className="mb-16">
//                     {serviceCategories.map((category) => (
//                         <div
//                             key={category.id}
//                             className={activeService === category.id ? 'block' : 'hidden'}
//                         >
//                             <div className="mb-12">
//                                 <div className="flex items-center gap-6 mb-10 p-6 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700">
//                                     <div className={`p-5 rounded-2xl ${category.gradient}/20 border border-white/10 shadow-lg`}>
//                                         {React.cloneElement(category.icon, { className: 'h-10 w-10' })}
//                                     </div>
//                                     <div>
//                                         <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                                             {category.name} Services
//                                         </h2>
//                                         <p className="text-gray-300 text-lg mt-2">{category.description}</p>
//                                     </div>
//                                 </div>

//                                 {/* Services Grid */}
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     {getCategoryServices(category.id).map((service) => (
//                                         <Card
//                                             key={service.id}
//                                             className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm shadow-xl hover:shadow-2xl"
//                                         >
//                                             <CardHeader className="pb-4">
//                                                 <div className="flex items-start justify-between mb-4">
//                                                     <div className={`p-4 rounded-xl ${category.gradient}/20 border border-white/10`}>
//                                                         {service.icon}
//                                                     </div>
//                                                     <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white px-4 py-1.5">
//                                                         {service.startingPrice}
//                                                     </Badge>
//                                                 </div>
//                                                 <CardTitle className="text-white text-xl mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                                                     {service.name}
//                                                 </CardTitle>
//                                                 <CardDescription className="text-gray-300 text-lg">
//                                                     {service.description}
//                                                 </CardDescription>
//                                             </CardHeader>

//                                             <CardContent className="pb-4">
//                                                 {/* Features */}
//                                                 <div className="mb-6">
//                                                     <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
//                                                         <Zap className="h-4 w-4 text-yellow-400" />
//                                                         Key Features
//                                                     </h4>
//                                                     <div className="grid grid-cols-2 gap-3">
//                                                         {service.features.slice(0, 4).map((feature, index) => (
//                                                             <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
//                                                                 <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
//                                                                 <span className="text-sm text-gray-300">{feature}</span>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 </div>

//                                                 {/* Technologies & Details */}
//                                                 <div className="flex flex-wrap gap-4 text-sm">
//                                                     <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700">
//                                                         <Target className="h-4 w-4 text-blue-400" />
//                                                         <span className="text-gray-300">{service.deliveryTime}</span>
//                                                     </div>
//                                                     <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700">
//                                                         <Shield className="h-4 w-4 text-purple-400" />
//                                                         <span className="text-gray-300">{service.technologies.length} technologies</span>
//                                                     </div>
//                                                 </div>
//                                             </CardContent>

//                                             <CardFooter>
//                                                 <Link to={`/services/${service.id}`} className="w-full">
//                                                     <Button
//                                                         className={`w-full ${category.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-6 transition-all duration-300`}
//                                                     >
//                                                         Explore Service
//                                                         <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                                                     </Button>
//                                                 </Link>
//                                             </CardFooter>
//                                         </Card>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Two-Column Layout Overview */}
//                 <div className="mb-20">
//                     <h2 className="text-3xl font-bold text-white text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                         Our Service Structure
//                     </h2>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                         {/* Left Column */}
//                         <div className="space-y-8">
//                             {/* Development Section */}
//                             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 shadow-lg">
//                                 <div className="flex items-center gap-4 mb-6">
//                                     <div className="p-4 rounded-xl bg-blue-500/20">
//                                         <Code className="h-7 w-7 text-blue-400" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">Development</h3>
//                                 </div>
//                                 <div className="space-y-3">
//                                     {getCategoryServices('development').map((service) => (
//                                         <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-blue-500/30">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="h-2 w-2 rounded-full bg-blue-400" />
//                                                 <span className="text-gray-300 font-medium">{service.name}</span>
//                                             </div>
//                                             <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 border-0 text-white">
//                                                 {service.startingPrice}
//                                             </Badge>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Design Section */}
//                             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 shadow-lg">
//                                 <div className="flex items-center gap-4 mb-6">
//                                     <div className="p-4 rounded-xl bg-teal-500/20">
//                                         <Palette className="h-7 w-7 text-teal-400" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">Design</h3>
//                                 </div>
//                                 <div className="space-y-3">
//                                     {getCategoryServices('design').map((service) => (
//                                         <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-teal-500/30">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="h-2 w-2 rounded-full bg-teal-400" />
//                                                 <span className="text-gray-300 font-medium">{service.name}</span>
//                                             </div>
//                                             <Badge className="bg-gradient-to-r from-teal-500 to-green-500 border-0 text-white">
//                                                 {service.startingPrice}
//                                             </Badge>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column */}
//                         <div className="space-y-8">
//                             {/* Strategy Section */}
//                             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 shadow-lg">
//                                 <div className="flex items-center gap-4 mb-6">
//                                     <div className="p-4 rounded-xl bg-purple-500/20">
//                                         <BarChart className="h-7 w-7 text-purple-400" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">Strategy</h3>
//                                 </div>
//                                 <div className="space-y-3">
//                                     {getCategoryServices('strategy').map((service) => (
//                                         <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-purple-500/30">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="h-2 w-2 rounded-full bg-purple-400" />
//                                                 <span className="text-gray-300 font-medium">{service.name}</span>
//                                             </div>
//                                             <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white">
//                                                 {service.startingPrice}
//                                             </Badge>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Support Section */}
//                             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 shadow-lg">
//                                 <div className="flex items-center gap-4 mb-6">
//                                     <div className="p-4 rounded-xl bg-orange-500/20">
//                                         <Settings className="h-7 w-7 text-orange-400" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">Support</h3>
//                                 </div>
//                                 <div className="space-y-3">
//                                     {getCategoryServices('support').map((service) => (
//                                         <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-orange-500/30">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="h-2 w-2 rounded-full bg-orange-400" />
//                                                 <span className="text-gray-300 font-medium">{service.name}</span>
//                                             </div>
//                                             <Badge className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white">
//                                                 {service.startingPrice}
//                                             </Badge>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Process & CTA */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                     {/* Our Process */}
//                     <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 shadow-xl">
//                         <h3 className="text-2xl font-bold text-white mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                             Our Service Process
//                         </h3>

//                         <div className="space-y-6">
//                             {[
//                                 { step: '01', title: 'Discovery & Planning', description: 'We understand your requirements and create a detailed project plan.' },
//                                 { step: '02', title: 'Design & Architecture', description: 'Our experts design the solution and create technical specifications.' },
//                                 { step: '03', title: 'Development & Testing', description: 'We build your solution with rigorous quality assurance at every stage.' },
//                                 { step: '04', title: 'Deployment & Training', description: 'We deploy the solution and train your team for successful adoption.' },
//                                 { step: '05', title: 'Support & Optimization', description: 'Ongoing support and continuous improvement of your solution.' },
//                             ].map((item, index) => (
//                                 <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800 transition-colors">
//                                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
//                                         <span className="text-white font-bold text-lg">{item.step}</span>
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
//                                         <p className="text-gray-300">{item.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Get Started CTA */}
//                     <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/30 rounded-2xl p-8 border border-blue-500/20 shadow-xl">
//                         <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                             Ready to Get Started?
//                         </h3>
//                         <p className="text-gray-300 mb-8 text-lg leading-relaxed">
//                             Contact us for a free consultation to discuss your project needs and how our services can help you achieve your goals.
//                         </p>

//                         <div className="space-y-4">
//                             <Link to="/contact">
//                                 <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
//                                     Schedule Free Consultation
//                                 </Button>
//                             </Link>

//                             <div className="text-center text-gray-400 text-sm py-2">
//                                 or
//                             </div>

//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <Link to="/products" className="flex-1">
//                                     <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-300 py-6 transition-all duration-300">
//                                         View Products
//                                     </Button>
//                                 </Link>
//                                 <Link to="/industries" className="flex-1">
//                                     <Button variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400/10 hover:border-purple-300 hover:text-purple-300 py-6 transition-all duration-300">
//                                         Browse Industries
//                                     </Button>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="mt-10 pt-8 border-t border-slate-700">
//                             <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30">
//                                 <Shield className="h-6 w-6 text-green-400" />
//                                 <div>
//                                     <h4 className="text-white font-bold text-lg">Quality Guarantee</h4>
//                                     <p className="text-gray-300 text-sm">All our services come with a 100% satisfaction guarantee</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>

//         </div>
//     );
// };

// export default ServicesPage;

// import React, { useState } from 'react';
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import {
//     Code,
//     Smartphone,
//     Puzzle,
//     Cloud,
//     Palette,
//     MessageSquare,
//     Cpu,
//     Zap,
//     Shield,
//     Users,
//     BarChart,
//     Settings,
//     TrendingUp,
//     Wrench,
//     BookOpen,
//     ArrowRight,
//     CheckCircle,
//     Target,
//     Layers,
//     Workflow
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const ServicesPage: React.FC = () => {
//     const [activeService, setActiveService] = useState<string>('development');

//     const serviceCategories = [
//         {
//             id: 'development',
//             name: 'Development',
//             icon: <Code className="h-8 w-8" />,
//             color: 'from-blue-500 to-cyan-500',
//             gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
//             description: 'Building robust, scalable software solutions using modern technologies and best practices.'
//         },
//         {
//             id: 'strategy',
//             name: 'Strategy',
//             icon: <BarChart className="h-8 w-8" />,
//             color: 'from-purple-500 to-pink-500',
//             gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
//             description: 'Strategic guidance and planning for digital transformation and technology adoption.'
//         },
//         {
//             id: 'design',
//             name: 'Design',
//             icon: <Palette className="h-8 w-8" />,
//             color: 'from-teal-500 to-green-500',
//             gradient: 'bg-gradient-to-r from-teal-500 to-green-500',
//             description: 'Creating intuitive, beautiful user experiences that drive engagement and satisfaction.'
//         },
//         {
//             id: 'support',
//             name: 'Support',
//             icon: <Settings className="h-8 w-8" />,
//             color: 'from-orange-500 to-red-500',
//             gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
//             description: 'Ongoing maintenance, optimization, and support for your technology solutions.'
//         }
//     ];

//     const services = [
//         {
//             id: 'web-development',
//             category: 'development',
//             name: 'Web Applications',
//             icon: <Code className="h-6 w-6" />,
//             description: 'Custom web applications built with modern frameworks for optimal performance and scalability.',
//             features: [
//                 'Responsive design',
//                 'Progressive Web Apps',
//                 'Real-time features',
//                 'API integration',
//                 'Cloud deployment',
//                 'Performance optimization'
//             ],
//             technologies: ['React', 'Next.js', 'Vue', 'Node.js', 'Python', 'Java'],
//             deliveryTime: '4-12 weeks',
//             startingPrice: '$5,000'
//         },
//         {
//             id: 'mobile-apps',
//             category: 'development',
//             name: 'Mobile Apps',
//             icon: <Smartphone className="h-6 w-6" />,
//             description: 'Native and cross-platform mobile applications for iOS and Android devices.',
//             features: [
//                 'iOS & Android development',
//                 'React Native apps',
//                 'Offline functionality',
//                 'Push notifications',
//                 'App store deployment',
//                 'Performance tuning'
//             ],
//             technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
//             deliveryTime: '6-16 weeks',
//             startingPrice: '$8,000'
//         },
//         {
//             id: 'api-integration',
//             category: 'development',
//             name: 'APIs & Integration',
//             icon: <Puzzle className="h-6 w-6" />,
//             description: 'Seamless integration between systems and development of custom APIs.',
//             features: [
//                 'REST & GraphQL APIs',
//                 'Third-party integration',
//                 'Legacy system modernization',
//                 'Microservices architecture',
//                 'API documentation',
//                 'Security implementation'
//             ],
//             technologies: ['Node.js', 'Python', 'GraphQL', 'Postman', 'Swagger'],
//             deliveryTime: '3-8 weeks',
//             startingPrice: '$4,000'
//         },
//         {
//             id: 'cloud-deployment',
//             category: 'development',
//             name: 'Cloud Deployment',
//             icon: <Cloud className="h-6 w-6" />,
//             description: 'Cloud infrastructure setup, migration, and optimization for your applications.',
//             features: [
//                 'AWS/Azure/GCP setup',
//                 'Containerization',
//                 'CI/CD pipelines',
//                 'Scalability planning',
//                 'Disaster recovery',
//                 'Cost optimization'
//             ],
//             technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
//             deliveryTime: '2-6 weeks',
//             startingPrice: '$3,000'
//         },
//         {
//             id: 'technical-consultation',
//             category: 'strategy',
//             name: 'Technical Consultation',
//             icon: <MessageSquare className="h-6 w-6" />,
//             description: 'Expert advice on technology strategy, architecture, and implementation planning.',
//             features: [
//                 'Technology assessment',
//                 'Architecture review',
//                 'Solution design',
//                 'Vendor selection',
//                 'ROI analysis',
//                 'Implementation roadmap'
//             ],
//             technologies: ['Strategy Sessions', 'Architecture Diagrams', 'Technical Docs'],
//             deliveryTime: '1-4 weeks',
//             startingPrice: '$2,500'
//         },
//         {
//             id: 'digital-transformation',
//             category: 'strategy',
//             name: 'Digital Transformation',
//             icon: <TrendingUp className="h-6 w-6" />,
//             description: 'Comprehensive strategy for modernizing your business processes with technology.',
//             features: [
//                 'Process automation',
//                 'Digital strategy',
//                 'Change management',
//                 'Workflow optimization',
//                 'Digital tool selection',
//                 'Training programs'
//             ],
//             technologies: ['Process Mapping', 'Automation Tools', 'Training Materials'],
//             deliveryTime: '8-20 weeks',
//             startingPrice: '$10,000'
//         },
//         {
//             id: 'it-infrastructure',
//             category: 'strategy',
//             name: 'IT Infrastructure',
//             icon: <Layers className="h-6 w-6" />,
//             description: 'Planning and implementation of robust IT infrastructure for your organization.',
//             features: [
//                 'Network design',
//                 'Security architecture',
//                 'Data management',
//                 'Backup solutions',
//                 'Compliance planning',
//                 'Performance monitoring'
//             ],
//             technologies: ['Network Design', 'Security Protocols', 'Monitoring Tools'],
//             deliveryTime: '4-12 weeks',
//             startingPrice: '$6,000'
//         },
//         {
//             id: 'security-planning',
//             category: 'strategy',
//             name: 'Security Planning',
//             icon: <Shield className="h-6 w-6" />,
//             description: 'Comprehensive security strategy and implementation for your digital assets.',
//             features: [
//                 'Security audits',
//                 'Threat modeling',
//                 'Compliance guidance',
//                 'Incident response',
//                 'Encryption strategies',
//                 'Access control'
//             ],
//             technologies: ['Security Frameworks', 'Compliance Standards', 'Monitoring'],
//             deliveryTime: '3-8 weeks',
//             startingPrice: '$4,500'
//         },
//         {
//             id: 'ui-ux-design',
//             category: 'design',
//             name: 'UI/UX Design',
//             icon: <Palette className="h-6 w-6" />,
//             description: 'Creating intuitive, aesthetically pleasing interfaces that enhance user experience.',
//             features: [
//                 'User research',
//                 'Wireframing',
//                 'Visual design',
//                 'Interaction design',
//                 'Design systems',
//                 'Accessibility'
//             ],
//             technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping Tools'],
//             deliveryTime: '3-10 weeks',
//             startingPrice: '$3,500'
//         },
//         {
//             id: 'user-research',
//             category: 'design',
//             name: 'User Research',
//             icon: <Users className="h-6 w-6" />,
//             description: 'Understanding user needs, behaviors, and pain points to inform design decisions.',
//             features: [
//                 'User interviews',
//                 'Surveys & analytics',
//                 'Usability testing',
//                 'Persona development',
//                 'Journey mapping',
//                 'Competitive analysis'
//             ],
//             technologies: ['Research Methods', 'Analytics Tools', 'Testing Platforms'],
//             deliveryTime: '2-6 weeks',
//             startingPrice: '$2,500'
//         },
//         {
//             id: 'prototyping',
//             category: 'design',
//             name: 'Prototyping',
//             icon: <Workflow className="h-6 w-6" />,
//             description: 'Interactive prototypes to test concepts and gather feedback before development.',
//             features: [
//                 'Low-fidelity prototypes',
//                 'High-fidelity mockups',
//                 'Interactive prototypes',
//                 'User testing sessions',
//                 'Design iteration',
//                 'Developer handoff'
//             ],
//             technologies: ['Figma', 'InVision', 'Proto.io', 'Marvel'],
//             deliveryTime: '2-5 weeks',
//             startingPrice: '$2,000'
//         },
//         {
//             id: 'maintenance',
//             category: 'support',
//             name: 'Maintenance',
//             icon: <Wrench className="h-6 w-6" />,
//             description: 'Ongoing support, updates, and optimization for your software solutions.',
//             features: [
//                 'Bug fixes',
//                 'Performance monitoring',
//                 'Security updates',
//                 'Database optimization',
//                 'Server management',
//                 'Backup management'
//             ],
//             technologies: ['Monitoring Tools', 'Automation', 'Ticketing Systems'],
//             deliveryTime: 'Ongoing',
//             startingPrice: '$500/month'
//         },
//         {
//             id: 'training',
//             category: 'support',
//             name: 'Training',
//             icon: <BookOpen className="h-6 w-6" />,
//             description: 'Comprehensive training programs for your team on new systems and technologies.',
//             features: [
//                 'System training',
//                 'Technical workshops',
//                 'Documentation',
//                 'Support materials',
//                 'Ongoing support',
//                 'Certification prep'
//             ],
//             technologies: ['Training Materials', 'Video Tutorials', 'Workshops'],
//             deliveryTime: '1-4 weeks',
//             startingPrice: '$1,500'
//         },
//         {
//             id: 'updates-upgrades',
//             category: 'support',
//             name: 'Updates & Upgrades',
//             icon: <ArrowRight className="h-6 w-6" />,
//             description: 'Regular updates, feature enhancements, and technology upgrades for your systems.',
//             features: [
//                 'Feature additions',
//                 'Technology upgrades',
//                 'Migration services',
//                 'Version updates',
//                 'Compatibility fixes',
//                 'Performance enhancements'
//             ],
//             technologies: ['Update Management', 'Migration Tools', 'Testing Suites'],
//             deliveryTime: '1-8 weeks',
//             startingPrice: '$2,000'
//         }
//     ];

//     const filteredServices = services.filter(service => service.category === activeService);

//     const getCategoryServices = (categoryId: string) => {
//         return services.filter(service => service.category === categoryId);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">

//                 {/* MOVED: Service Category Navigation Tabs - Fixed sticky positioning - SIMPLIFIED */}
//                 <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-md py-4 mb-8 -mx-6 px-6 border-b border-white/10">
//                     <div className="flex flex-wrap gap-3 justify-center">
//                         {serviceCategories.map((category) => (
//                             <button
//                                 key={category.id}
//                                 onClick={() => setActiveService(category.id)}
//                                 className={`px-5 py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 ${activeService === category.id
//                                     ? `${category.gradient} text-white border-transparent`
//                                     : 'border-white/20 text-gray-300 hover:border-blue-400 hover:text-white'
//                                     }`}
//                             >
//                                 <div className={`${activeService === category.id ? 'text-white' : category.color.replace('from-', 'text-').split(' ')[0]}`}>
//                                     {React.cloneElement(category.icon, { className: 'h-4 w-4' })}
//                                 </div>
//                                 {category.name}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Page Header */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                         Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technical Expertise</span>
//                     </h1>

//                     {/* MOVED: "Technical Excellence" badge - Placed below the main title */}
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
//                         <Cpu className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Technical Excellence</span>
//                     </div>

//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         Comprehensive technology services that cover every aspect of software development, from strategy and design to implementation and support.
//                     </p>
//                 </div>

//                 {/* Service Category Content */}
//                 <div className="mb-16">
//                     {serviceCategories.map((category) => (
//                         <div
//                             key={category.id}
//                             className={activeService === category.id ? 'block' : 'hidden'}
//                         >
//                             <div className="mb-12">
//                                 <div className="flex items-center gap-4 mb-8">
//                                     <div className={`p-4 rounded-2xl ${category.gradient}/10 border border-white/10`}>
//                                         {React.cloneElement(category.icon, { className: 'h-10 w-10' })}
//                                     </div>
//                                     <div>
//                                         <h2 className="text-3xl font-bold text-white">{category.name} Services</h2>
//                                         <p className="text-gray-300">{category.description}</p>
//                                     </div>
//                                 </div>

//                                 {/* Services Grid */}
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     {getCategoryServices(category.id).map((service) => (
//                                         <Card
//                                             key={service.id}
//                                             className="bg-gray-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm"
//                                         >
//                                             <CardHeader className="pb-4">
//                                                 <div className="flex items-start justify-between mb-4">
//                                                     <div className={`p-3 rounded-xl ${category.gradient}/10 border border-white/10`}>
//                                                         {service.icon}
//                                                     </div>
//                                                     <Badge variant="outline" className="border-blue-400/30 text-blue-300">
//                                                         {service.startingPrice}
//                                                     </Badge>
//                                                 </div>
//                                                 <CardTitle className="text-white text-xl mb-2">
//                                                     {service.name}
//                                                 </CardTitle>
//                                                 <CardDescription className="text-gray-300">
//                                                     {service.description}
//                                                 </CardDescription>
//                                             </CardHeader>

//                                             <CardContent className="pb-4">
//                                                 {/* Features */}
//                                                 <div className="mb-6">
//                                                     <h4 className="text-white font-semibold mb-3 text-sm">Key Features</h4>
//                                                     <div className="grid grid-cols-2 gap-2">
//                                                         {service.features.slice(0, 4).map((feature, index) => (
//                                                             <div key={index} className="flex items-center gap-2">
//                                                                 <CheckCircle className="h-3 w-3 text-green-400" />
//                                                                 <span className="text-sm text-gray-300">{feature}</span>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 </div>

//                                                 {/* Technologies & Details */}
//                                                 <div className="flex flex-wrap gap-4 text-sm">
//                                                     <div className="flex items-center gap-2">
//                                                         <Target className="h-4 w-4 text-blue-400" />
//                                                         <span className="text-gray-300">{service.deliveryTime}</span>
//                                                     </div>
//                                                     <div className="flex items-center gap-2">
//                                                         <Zap className="h-4 w-4 text-yellow-400" />
//                                                         <span className="text-gray-300">{service.technologies.length} technologies</span>
//                                                     </div>
//                                                 </div>
//                                             </CardContent>

//                                             <CardFooter>
//                                                 <Link to={`/services/${service.id}`} className="w-full">
//                                                     <Button
//                                                         className={`w-full ${category.gradient} hover:opacity-90 text-white`}
//                                                     >
//                                                         Explore Service
//                                                         <ArrowRight className="ml-2 h-4 w-4" />
//                                                     </Button>
//                                                 </Link>
//                                             </CardFooter>
//                                         </Card>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Two-Column Layout Overview */}
//                 <div className="mb-20">
//                     <h2 className="text-3xl font-bold text-white text-center mb-12">
//                         Our <span className="text-blue-400">Service Structure</span>
//                     </h2>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                         {/* Left Column */}
//                         <div className="space-y-8">
//                             {/* Development Section */}
//                             <div className="bg-gray-900/30 rounded-xl p-6 border border-white/10">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <div className="p-3 rounded-lg bg-blue-500/10">
//                                         <Code className="h-6 w-6 text-blue-400" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">Development</h3>
//                                 </div>
//                                 <div className="space-y-4">
//                                     {getCategoryServices('development').map((service) => (
//                                         <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="h-2 w-2 rounded-full bg-blue-400" />
//                                                 <span className="text-gray-300">{service.name}</span>
//                                             </div>
//                                             <Badge variant="outline" className="border-blue-400/30 text-blue-300">
//                                                 {service.startingPrice}
//                                             </Badge>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Design Section */}
//                             <div className="bg-gray-900/30 rounded-xl p-6 border border-white/10">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <div className="p-3 rounded-lg bg-teal-500/10">
//                                         <Palette className="h-6 w-6 text-teal-400" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">Design</h3>
//                                 </div>
//                                 <div className="space-y-4">
//                                     {getCategoryServices('design').map((service) => (
//                                         <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="h-2 w-2 rounded-full bg-teal-400" />
//                                                 <span className="text-gray-300">{service.name}</span>
//                                             </div>
//                                             <Badge variant="outline" className="border-teal-400/30 text-teal-300">
//                                                 {service.startingPrice}
//                                             </Badge>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column */}
//                         <div className="space-y-8">
//                             {/* Strategy Section */}
//                             <div className="bg-gray-900/30 rounded-xl p-6 border border-white/10">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <div className="p-3 rounded-lg bg-purple-500/10">
//                                         <BarChart className="h-6 w-6 text-purple-400" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">Strategy</h3>
//                                 </div>
//                                 <div className="space-y-4">
//                                     {getCategoryServices('strategy').map((service) => (
//                                         <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="h-2 w-2 rounded-full bg-purple-400" />
//                                                 <span className="text-gray-300">{service.name}</span>
//                                             </div>
//                                             <Badge variant="outline" className="border-purple-400/30 text-purple-300">
//                                                 {service.startingPrice}
//                                             </Badge>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Support Section */}
//                             <div className="bg-gray-900/30 rounded-xl p-6 border border-white/10">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <div className="p-3 rounded-lg bg-orange-500/10">
//                                         <Settings className="h-6 w-6 text-orange-400" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">Support</h3>
//                                 </div>
//                                 <div className="space-y-4">
//                                     {getCategoryServices('support').map((service) => (
//                                         <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="h-2 w-2 rounded-full bg-orange-400" />
//                                                 <span className="text-gray-300">{service.name}</span>
//                                             </div>
//                                             <Badge variant="outline" className="border-orange-400/30 text-orange-300">
//                                                 {service.startingPrice}
//                                             </Badge>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Process & CTA */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                     {/* Our Process */}
//                     <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10">
//                         <h3 className="text-2xl font-bold text-white mb-8">
//                             Our <span className="text-blue-400">Service Process</span>
//                         </h3>

//                         <div className="space-y-6">
//                             {[
//                                 { step: '01', title: 'Discovery & Planning', description: 'We understand your requirements and create a detailed project plan.' },
//                                 { step: '02', title: 'Design & Architecture', description: 'Our experts design the solution and create technical specifications.' },
//                                 { step: '03', title: 'Development & Testing', description: 'We build your solution with rigorous quality assurance at every stage.' },
//                                 { step: '04', title: 'Deployment & Training', description: 'We deploy the solution and train your team for successful adoption.' },
//                                 { step: '05', title: 'Support & Optimization', description: 'Ongoing support and continuous improvement of your solution.' },
//                             ].map((item, index) => (
//                                 <div key={item.step} className="flex items-start gap-4">
//                                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
//                                         <span className="text-white font-bold">{item.step}</span>
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1">{item.title}</h4>
//                                         <p className="text-gray-300 text-sm">{item.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Get Started CTA */}
//                     <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-white/10">
//                         <h3 className="text-2xl font-bold text-white mb-4">
//                             Ready to Get Started?
//                         </h3>
//                         <p className="text-gray-300 mb-8">
//                             Contact us for a free consultation to discuss your project needs and how our services can help you achieve your goals.
//                         </p>

//                         <div className="space-y-4">
//                             <Link to="/contact">
//                                 <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 text-lg">
//                                     Schedule Free Consultation
//                                 </Button>
//                             </Link>

//                             <div className="text-center text-gray-400 text-sm">
//                                 or
//                             </div>

//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <Link to="/products" className="flex-1">
//                                     <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10">
//                                         View Products
//                                     </Button>
//                                 </Link>
//                                 <Link to="/industries" className="flex-1">
//                                     <Button variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400/10">
//                                         Browse Industries
//                                     </Button>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="mt-8 pt-8 border-t border-white/10">
//                             <div className="flex items-center gap-3">
//                                 <Shield className="h-5 w-5 text-green-400" />
//                                 <div>
//                                     <h4 className="text-white font-semibold">Quality Guarantee</h4>
//                                     <p className="text-gray-300 text-sm">All our services come with a 100% satisfaction guarantee</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>

//         </div>
//     );
// };

// export default ServicesPage;

// // import React, { useState } from 'react';
// // import {
// //     Card,
// //     CardContent,
// //     CardDescription,
// //     CardFooter,
// //     CardHeader,
// //     CardTitle
// // } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Badge } from '@/components/ui/badge';
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // import {
// //     Code,
// //     Smartphone,
// //     Puzzle,
// //     Cloud,
// //     Palette,
// //     MessageSquare,
// //     Cpu,
// //     Zap,
// //     Shield,
// //     Users,
// //     BarChart,
// //     Settings,
// //     TrendingUp,
// //     Wrench,
// //     BookOpen,
// //     ArrowRight,
// //     CheckCircle,
// //     Target,
// //     Layers,
// //     Workflow
// // } from 'lucide-react';
// // import { Link } from 'react-router-dom';
// // import Header from '@/components/Header';

// // const ServicesPage: React.FC = () => {
// //     const [activeService, setActiveService] = useState<string>('development');

// //     const serviceCategories = [
// //         {
// //             id: 'development',
// //             name: 'Development',
// //             icon: <Code className="h-8 w-8" />,
// //             color: 'from-blue-500 to-cyan-500',
// //             gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
// //             description: 'Building robust, scalable software solutions using modern technologies and best practices.'
// //         },
// //         {
// //             id: 'strategy',
// //             name: 'Strategy',
// //             icon: <BarChart className="h-8 w-8" />,
// //             color: 'from-purple-500 to-pink-500',
// //             gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
// //             description: 'Strategic guidance and planning for digital transformation and technology adoption.'
// //         },
// //         {
// //             id: 'design',
// //             name: 'Design',
// //             icon: <Palette className="h-8 w-8" />,
// //             color: 'from-teal-500 to-green-500',
// //             gradient: 'bg-gradient-to-r from-teal-500 to-green-500',
// //             description: 'Creating intuitive, beautiful user experiences that drive engagement and satisfaction.'
// //         },
// //         {
// //             id: 'support',
// //             name: 'Support',
// //             icon: <Settings className="h-8 w-8" />,
// //             color: 'from-orange-500 to-red-500',
// //             gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
// //             description: 'Ongoing maintenance, optimization, and support for your technology solutions.'
// //         }
// //     ];

// //     const services = [
// //         {
// //             id: 'web-development',
// //             category: 'development',
// //             name: 'Web Applications',
// //             icon: <Code className="h-6 w-6" />,
// //             description: 'Custom web applications built with modern frameworks for optimal performance and scalability.',
// //             features: [
// //                 'Responsive design',
// //                 'Progressive Web Apps',
// //                 'Real-time features',
// //                 'API integration',
// //                 'Cloud deployment',
// //                 'Performance optimization'
// //             ],
// //             technologies: ['React', 'Next.js', 'Vue', 'Node.js', 'Python', 'Java'],
// //             deliveryTime: '4-12 weeks',
// //             startingPrice: '$5,000'
// //         },
// //         {
// //             id: 'mobile-apps',
// //             category: 'development',
// //             name: 'Mobile Apps',
// //             icon: <Smartphone className="h-6 w-6" />,
// //             description: 'Native and cross-platform mobile applications for iOS and Android devices.',
// //             features: [
// //                 'iOS & Android development',
// //                 'React Native apps',
// //                 'Offline functionality',
// //                 'Push notifications',
// //                 'App store deployment',
// //                 'Performance tuning'
// //             ],
// //             technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
// //             deliveryTime: '6-16 weeks',
// //             startingPrice: '$8,000'
// //         },
// //         {
// //             id: 'api-integration',
// //             category: 'development',
// //             name: 'APIs & Integration',
// //             icon: <Puzzle className="h-6 w-6" />,
// //             description: 'Seamless integration between systems and development of custom APIs.',
// //             features: [
// //                 'REST & GraphQL APIs',
// //                 'Third-party integration',
// //                 'Legacy system modernization',
// //                 'Microservices architecture',
// //                 'API documentation',
// //                 'Security implementation'
// //             ],
// //             technologies: ['Node.js', 'Python', 'GraphQL', 'Postman', 'Swagger'],
// //             deliveryTime: '3-8 weeks',
// //             startingPrice: '$4,000'
// //         },
// //         {
// //             id: 'cloud-deployment',
// //             category: 'development',
// //             name: 'Cloud Deployment',
// //             icon: <Cloud className="h-6 w-6" />,
// //             description: 'Cloud infrastructure setup, migration, and optimization for your applications.',
// //             features: [
// //                 'AWS/Azure/GCP setup',
// //                 'Containerization',
// //                 'CI/CD pipelines',
// //                 'Scalability planning',
// //                 'Disaster recovery',
// //                 'Cost optimization'
// //             ],
// //             technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
// //             deliveryTime: '2-6 weeks',
// //             startingPrice: '$3,000'
// //         },
// //         {
// //             id: 'technical-consultation',
// //             category: 'strategy',
// //             name: 'Technical Consultation',
// //             icon: <MessageSquare className="h-6 w-6" />,
// //             description: 'Expert advice on technology strategy, architecture, and implementation planning.',
// //             features: [
// //                 'Technology assessment',
// //                 'Architecture review',
// //                 'Solution design',
// //                 'Vendor selection',
// //                 'ROI analysis',
// //                 'Implementation roadmap'
// //             ],
// //             technologies: ['Strategy Sessions', 'Architecture Diagrams', 'Technical Docs'],
// //             deliveryTime: '1-4 weeks',
// //             startingPrice: '$2,500'
// //         },
// //         {
// //             id: 'digital-transformation',
// //             category: 'strategy',
// //             name: 'Digital Transformation',
// //             icon: <TrendingUp className="h-6 w-6" />,
// //             description: 'Comprehensive strategy for modernizing your business processes with technology.',
// //             features: [
// //                 'Process automation',
// //                 'Digital strategy',
// //                 'Change management',
// //                 'Workflow optimization',
// //                 'Digital tool selection',
// //                 'Training programs'
// //             ],
// //             technologies: ['Process Mapping', 'Automation Tools', 'Training Materials'],
// //             deliveryTime: '8-20 weeks',
// //             startingPrice: '$10,000'
// //         },
// //         {
// //             id: 'it-infrastructure',
// //             category: 'strategy',
// //             name: 'IT Infrastructure',
// //             icon: <Layers className="h-6 w-6" />,
// //             description: 'Planning and implementation of robust IT infrastructure for your organization.',
// //             features: [
// //                 'Network design',
// //                 'Security architecture',
// //                 'Data management',
// //                 'Backup solutions',
// //                 'Compliance planning',
// //                 'Performance monitoring'
// //             ],
// //             technologies: ['Network Design', 'Security Protocols', 'Monitoring Tools'],
// //             deliveryTime: '4-12 weeks',
// //             startingPrice: '$6,000'
// //         },
// //         {
// //             id: 'security-planning',
// //             category: 'strategy',
// //             name: 'Security Planning',
// //             icon: <Shield className="h-6 w-6" />,
// //             description: 'Comprehensive security strategy and implementation for your digital assets.',
// //             features: [
// //                 'Security audits',
// //                 'Threat modeling',
// //                 'Compliance guidance',
// //                 'Incident response',
// //                 'Encryption strategies',
// //                 'Access control'
// //             ],
// //             technologies: ['Security Frameworks', 'Compliance Standards', 'Monitoring'],
// //             deliveryTime: '3-8 weeks',
// //             startingPrice: '$4,500'
// //         },
// //         {
// //             id: 'ui-ux-design',
// //             category: 'design',
// //             name: 'UI/UX Design',
// //             icon: <Palette className="h-6 w-6" />,
// //             description: 'Creating intuitive, aesthetically pleasing interfaces that enhance user experience.',
// //             features: [
// //                 'User research',
// //                 'Wireframing',
// //                 'Visual design',
// //                 'Interaction design',
// //                 'Design systems',
// //                 'Accessibility'
// //             ],
// //             technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping Tools'],
// //             deliveryTime: '3-10 weeks',
// //             startingPrice: '$3,500'
// //         },
// //         {
// //             id: 'user-research',
// //             category: 'design',
// //             name: 'User Research',
// //             icon: <Users className="h-6 w-6" />,
// //             description: 'Understanding user needs, behaviors, and pain points to inform design decisions.',
// //             features: [
// //                 'User interviews',
// //                 'Surveys & analytics',
// //                 'Usability testing',
// //                 'Persona development',
// //                 'Journey mapping',
// //                 'Competitive analysis'
// //             ],
// //             technologies: ['Research Methods', 'Analytics Tools', 'Testing Platforms'],
// //             deliveryTime: '2-6 weeks',
// //             startingPrice: '$2,500'
// //         },
// //         {
// //             id: 'prototyping',
// //             category: 'design',
// //             name: 'Prototyping',
// //             icon: <Workflow className="h-6 w-6" />,
// //             description: 'Interactive prototypes to test concepts and gather feedback before development.',
// //             features: [
// //                 'Low-fidelity prototypes',
// //                 'High-fidelity mockups',
// //                 'Interactive prototypes',
// //                 'User testing sessions',
// //                 'Design iteration',
// //                 'Developer handoff'
// //             ],
// //             technologies: ['Figma', 'InVision', 'Proto.io', 'Marvel'],
// //             deliveryTime: '2-5 weeks',
// //             startingPrice: '$2,000'
// //         },
// //         {
// //             id: 'maintenance',
// //             category: 'support',
// //             name: 'Maintenance',
// //             icon: <Wrench className="h-6 w-6" />,
// //             description: 'Ongoing support, updates, and optimization for your software solutions.',
// //             features: [
// //                 'Bug fixes',
// //                 'Performance monitoring',
// //                 'Security updates',
// //                 'Database optimization',
// //                 'Server management',
// //                 'Backup management'
// //             ],
// //             technologies: ['Monitoring Tools', 'Automation', 'Ticketing Systems'],
// //             deliveryTime: 'Ongoing',
// //             startingPrice: '$500/month'
// //         },
// //         {
// //             id: 'training',
// //             category: 'support',
// //             name: 'Training',
// //             icon: <BookOpen className="h-6 w-6" />,
// //             description: 'Comprehensive training programs for your team on new systems and technologies.',
// //             features: [
// //                 'System training',
// //                 'Technical workshops',
// //                 'Documentation',
// //                 'Support materials',
// //                 'Ongoing support',
// //                 'Certification prep'
// //             ],
// //             technologies: ['Training Materials', 'Video Tutorials', 'Workshops'],
// //             deliveryTime: '1-4 weeks',
// //             startingPrice: '$1,500'
// //         },
// //         {
// //             id: 'updates-upgrades',
// //             category: 'support',
// //             name: 'Updates & Upgrades',
// //             icon: <ArrowRight className="h-6 w-6" />,
// //             description: 'Regular updates, feature enhancements, and technology upgrades for your systems.',
// //             features: [
// //                 'Feature additions',
// //                 'Technology upgrades',
// //                 'Migration services',
// //                 'Version updates',
// //                 'Compatibility fixes',
// //                 'Performance enhancements'
// //             ],
// //             technologies: ['Update Management', 'Migration Tools', 'Testing Suites'],
// //             deliveryTime: '1-8 weeks',
// //             startingPrice: '$2,000'
// //         }
// //     ];

// //     const filteredServices = services.filter(service => service.category === activeService);

// //     const getCategoryServices = (categoryId: string) => {
// //         return services.filter(service => service.category === categoryId);
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
// //             <Header />
// //             <div className="container mx-auto px-6">
// //                 {/* Page Header */}
// //                 <div className="text-center mb-16">
// //                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
// //                         <Cpu className="h-4 w-4 text-blue-300" />
// //                         <span className="text-sm font-medium text-blue-300">Technical Excellence</span>
// //                     </div>
// //                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
// //                         Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technical Expertise</span>
// //                     </h1>
// //                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
// //                         Comprehensive technology services that cover every aspect of software development, from strategy and design to implementation and support.
// //                     </p>
// //                 </div>

// //                 {/* Service Category Navigation */}
// //                 <div className="mb-16">
// //                     <Tabs defaultValue="development" className="w-full">
// //                         <div className="flex justify-center mb-10">
// //                             <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent">
// //                                 {serviceCategories.map((category) => (
// //                                     <TabsTrigger
// //                                         key={category.id}
// //                                         value={category.id}
// //                                         onClick={() => setActiveService(category.id)}
// //                                         className={`data-[state=active]:${category.gradient} data-[state=active]:text-white py-4 px-6`}
// //                                     >
// //                                         <div className="flex flex-col items-center gap-3">
// //                                             <div className={`p-3 rounded-xl ${category.gradient}/20`}>
// //                                                 {category.icon}
// //                                             </div>
// //                                             <div className="text-center">
// //                                                 <div className="font-semibold">{category.name}</div>
// //                                                 <div className="text-xs text-gray-300 mt-1 max-w-[150px]">
// //                                                     {category.description}
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </TabsTrigger>
// //                                 ))}
// //                             </TabsList>
// //                         </div>

// //                         {/* Service Category Content */}
// //                         {serviceCategories.map((category) => (
// //                             <TabsContent key={category.id} value={category.id}>
// //                                 <div className="mb-12">
// //                                     <div className="flex items-center gap-4 mb-8">
// //                                         <div className={`p-4 rounded-2xl ${category.gradient}/10 border border-white/10`}>
// //                                             {React.cloneElement(category.icon, { className: 'h-10 w-10' })}
// //                                         </div>
// //                                         <div>
// //                                             <h2 className="text-3xl font-bold text-white">{category.name} Services</h2>
// //                                             <p className="text-gray-300">{category.description}</p>
// //                                         </div>
// //                                     </div>

// //                                     {/* Services Grid */}
// //                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                                         {getCategoryServices(category.id).map((service) => (
// //                                             <Card
// //                                                 key={service.id}
// //                                                 className="bg-gray-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm"
// //                                             >
// //                                                 <CardHeader className="pb-4">
// //                                                     <div className="flex items-start justify-between mb-4">
// //                                                         <div className={`p-3 rounded-xl ${category.gradient}/10 border border-white/10`}>
// //                                                             {service.icon}
// //                                                         </div>
// //                                                         <Badge variant="outline" className="border-blue-400/30 text-blue-300">
// //                                                             {service.startingPrice}
// //                                                         </Badge>
// //                                                     </div>
// //                                                     <CardTitle className="text-white text-xl mb-2">
// //                                                         {service.name}
// //                                                     </CardTitle>
// //                                                     <CardDescription className="text-gray-300">
// //                                                         {service.description}
// //                                                     </CardDescription>
// //                                                 </CardHeader>

// //                                                 <CardContent className="pb-4">
// //                                                     {/* Features */}
// //                                                     <div className="mb-6">
// //                                                         <h4 className="text-white font-semibold mb-3 text-sm">Key Features</h4>
// //                                                         <div className="grid grid-cols-2 gap-2">
// //                                                             {service.features.slice(0, 4).map((feature, index) => (
// //                                                                 <div key={index} className="flex items-center gap-2">
// //                                                                     <CheckCircle className="h-3 w-3 text-green-400" />
// //                                                                     <span className="text-sm text-gray-300">{feature}</span>
// //                                                                 </div>
// //                                                             ))}
// //                                                         </div>
// //                                                     </div>

// //                                                     {/* Technologies & Details */}
// //                                                     <div className="flex flex-wrap gap-4 text-sm">
// //                                                         <div className="flex items-center gap-2">
// //                                                             <Target className="h-4 w-4 text-blue-400" />
// //                                                             <span className="text-gray-300">{service.deliveryTime}</span>
// //                                                         </div>
// //                                                         <div className="flex items-center gap-2">
// //                                                             <Zap className="h-4 w-4 text-yellow-400" />
// //                                                             <span className="text-gray-300">{service.technologies.length} technologies</span>
// //                                                         </div>
// //                                                     </div>
// //                                                 </CardContent>

// //                                                 <CardFooter>
// //                                                     <Link to={`/services/${service.id}`} className="w-full">
// //                                                         <Button
// //                                                             className={`w-full ${category.gradient} hover:opacity-90 text-white`}
// //                                                         >
// //                                                             Explore Service
// //                                                             <ArrowRight className="ml-2 h-4 w-4" />
// //                                                         </Button>
// //                                                     </Link>
// //                                                 </CardFooter>
// //                                             </Card>
// //                                         ))}
// //                                     </div>
// //                                 </div>
// //                             </TabsContent>
// //                         ))}
// //                     </Tabs>
// //                 </div>

// //                 {/* Two-Column Layout Overview */}
// //                 <div className="mb-20">
// //                     <h2 className="text-3xl font-bold text-white text-center mb-12">
// //                         Our <span className="text-blue-400">Service Structure</span>
// //                     </h2>

// //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //                         {/* Left Column */}
// //                         <div className="space-y-8">
// //                             {/* Development Section */}
// //                             <div className="bg-gray-900/30 rounded-xl p-6 border border-white/10">
// //                                 <div className="flex items-center gap-3 mb-6">
// //                                     <div className="p-3 rounded-lg bg-blue-500/10">
// //                                         <Code className="h-6 w-6 text-blue-400" />
// //                                     </div>
// //                                     <h3 className="text-2xl font-bold text-white">Development</h3>
// //                                 </div>
// //                                 <div className="space-y-4">
// //                                     {getCategoryServices('development').map((service) => (
// //                                         <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
// //                                             <div className="flex items-center gap-3">
// //                                                 <div className="h-2 w-2 rounded-full bg-blue-400" />
// //                                                 <span className="text-gray-300">{service.name}</span>
// //                                             </div>
// //                                             <Badge variant="outline" className="border-blue-400/30 text-blue-300">
// //                                                 {service.startingPrice}
// //                                             </Badge>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             </div>

// //                             {/* Design Section */}
// //                             <div className="bg-gray-900/30 rounded-xl p-6 border border-white/10">
// //                                 <div className="flex items-center gap-3 mb-6">
// //                                     <div className="p-3 rounded-lg bg-teal-500/10">
// //                                         <Palette className="h-6 w-6 text-teal-400" />
// //                                     </div>
// //                                     <h3 className="text-2xl font-bold text-white">Design</h3>
// //                                 </div>
// //                                 <div className="space-y-4">
// //                                     {getCategoryServices('design').map((service) => (
// //                                         <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
// //                                             <div className="flex items-center gap-3">
// //                                                 <div className="h-2 w-2 rounded-full bg-teal-400" />
// //                                                 <span className="text-gray-300">{service.name}</span>
// //                                             </div>
// //                                             <Badge variant="outline" className="border-teal-400/30 text-teal-300">
// //                                                 {service.startingPrice}
// //                                             </Badge>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Right Column */}
// //                         <div className="space-y-8">
// //                             {/* Strategy Section */}
// //                             <div className="bg-gray-900/30 rounded-xl p-6 border border-white/10">
// //                                 <div className="flex items-center gap-3 mb-6">
// //                                     <div className="p-3 rounded-lg bg-purple-500/10">
// //                                         <BarChart className="h-6 w-6 text-purple-400" />
// //                                     </div>
// //                                     <h3 className="text-2xl font-bold text-white">Strategy</h3>
// //                                 </div>
// //                                 <div className="space-y-4">
// //                                     {getCategoryServices('strategy').map((service) => (
// //                                         <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
// //                                             <div className="flex items-center gap-3">
// //                                                 <div className="h-2 w-2 rounded-full bg-purple-400" />
// //                                                 <span className="text-gray-300">{service.name}</span>
// //                                             </div>
// //                                             <Badge variant="outline" className="border-purple-400/30 text-purple-300">
// //                                                 {service.startingPrice}
// //                                             </Badge>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             </div>

// //                             {/* Support Section */}
// //                             <div className="bg-gray-900/30 rounded-xl p-6 border border-white/10">
// //                                 <div className="flex items-center gap-3 mb-6">
// //                                     <div className="p-3 rounded-lg bg-orange-500/10">
// //                                         <Settings className="h-6 w-6 text-orange-400" />
// //                                     </div>
// //                                     <h3 className="text-2xl font-bold text-white">Support</h3>
// //                                 </div>
// //                                 <div className="space-y-4">
// //                                     {getCategoryServices('support').map((service) => (
// //                                         <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
// //                                             <div className="flex items-center gap-3">
// //                                                 <div className="h-2 w-2 rounded-full bg-orange-400" />
// //                                                 <span className="text-gray-300">{service.name}</span>
// //                                             </div>
// //                                             <Badge variant="outline" className="border-orange-400/30 text-orange-300">
// //                                                 {service.startingPrice}
// //                                             </Badge>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Process & CTA */}
// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //                     {/* Our Process */}
// //                     <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10">
// //                         <h3 className="text-2xl font-bold text-white mb-8">
// //                             Our <span className="text-blue-400">Service Process</span>
// //                         </h3>

// //                         <div className="space-y-6">
// //                             {[
// //                                 { step: '01', title: 'Discovery & Planning', description: 'We understand your requirements and create a detailed project plan.' },
// //                                 { step: '02', title: 'Design & Architecture', description: 'Our experts design the solution and create technical specifications.' },
// //                                 { step: '03', title: 'Development & Testing', description: 'We build your solution with rigorous quality assurance at every stage.' },
// //                                 { step: '04', title: 'Deployment & Training', description: 'We deploy the solution and train your team for successful adoption.' },
// //                                 { step: '05', title: 'Support & Optimization', description: 'Ongoing support and continuous improvement of your solution.' },
// //                             ].map((item, index) => (
// //                                 <div key={item.step} className="flex items-start gap-4">
// //                                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
// //                                         <span className="text-white font-bold">{item.step}</span>
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="text-white font-semibold mb-1">{item.title}</h4>
// //                                         <p className="text-gray-300 text-sm">{item.description}</p>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>

// //                     {/* Get Started CTA */}
// //                     <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-white/10">
// //                         <h3 className="text-2xl font-bold text-white mb-4">
// //                             Ready to Get Started?
// //                         </h3>
// //                         <p className="text-gray-300 mb-8">
// //                             Contact us for a free consultation to discuss your project needs and how our services can help you achieve your goals.
// //                         </p>

// //                         <div className="space-y-4">
// //                             <Link to="/contact">
// //                                 <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 text-lg">
// //                                     Schedule Free Consultation
// //                                 </Button>
// //                             </Link>

// //                             <div className="text-center text-gray-400 text-sm">
// //                                 or
// //                             </div>

// //                             <div className="flex flex-col sm:flex-row gap-4">
// //                                 <Link to="/products" className="flex-1">
// //                                     <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10">
// //                                         View Products
// //                                     </Button>
// //                                 </Link>
// //                                 <Link to="/industries" className="flex-1">
// //                                     <Button variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400/10">
// //                                         Browse Industries
// //                                     </Button>
// //                                 </Link>
// //                             </div>
// //                         </div>

// //                         <div className="mt-8 pt-8 border-t border-white/10">
// //                             <div className="flex items-center gap-3">
// //                                 <Shield className="h-5 w-5 text-green-400" />
// //                                 <div>
// //                                     <h4 className="text-white font-semibold">Quality Guarantee</h4>
// //                                     <p className="text-gray-300 text-sm">All our services come with a 100% satisfaction guarantee</p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ServicesPage;