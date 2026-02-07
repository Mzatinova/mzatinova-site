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
    Workflow
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
            description: 'Building robust, scalable software solutions using modern technologies and best practices.'
        },
        {
            id: 'strategy',
            name: 'Strategy',
            icon: <BarChart className="h-8 w-8" />,
            color: 'from-purple-500 to-pink-500',
            gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
            description: 'Strategic guidance and planning for digital transformation and technology adoption.'
        },
        {
            id: 'design',
            name: 'Design',
            icon: <Palette className="h-8 w-8" />,
            color: 'from-teal-500 to-green-500',
            gradient: 'bg-gradient-to-r from-teal-500 to-green-500',
            description: 'Creating intuitive, beautiful user experiences that drive engagement and satisfaction.'
        },
        {
            id: 'support',
            name: 'Support',
            icon: <Settings className="h-8 w-8" />,
            color: 'from-orange-500 to-red-500',
            gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
            description: 'Ongoing maintenance, optimization, and support for your technology solutions.'
        }
    ];

    const services = [
        {
            id: 'web-development',
            category: 'development',
            name: 'Web Applications',
            icon: <Code className="h-6 w-6" />,
            description: 'Custom web applications built with modern frameworks for optimal performance and scalability.',
            features: [
                'Responsive design',
                'Progressive Web Apps',
                'Real-time features',
                'API integration',
                'Cloud deployment',
                'Performance optimization'
            ],
            technologies: ['React', 'Next.js', 'Vue', 'Node.js', 'Python', 'Java'],
            deliveryTime: '4-12 weeks',
            startingPrice: '$5,000'
        },
        {
            id: 'mobile-apps',
            category: 'development',
            name: 'Mobile Apps',
            icon: <Smartphone className="h-6 w-6" />,
            description: 'Native and cross-platform mobile applications for iOS and Android devices.',
            features: [
                'iOS & Android development',
                'React Native apps',
                'Offline functionality',
                'Push notifications',
                'App store deployment',
                'Performance tuning'
            ],
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
            deliveryTime: '6-16 weeks',
            startingPrice: '$8,000'
        },
        {
            id: 'api-integration',
            category: 'development',
            name: 'APIs & Integration',
            icon: <Puzzle className="h-6 w-6" />,
            description: 'Seamless integration between systems and development of custom APIs.',
            features: [
                'REST & GraphQL APIs',
                'Third-party integration',
                'Legacy system modernization',
                'Microservices architecture',
                'API documentation',
                'Security implementation'
            ],
            technologies: ['Node.js', 'Python', 'GraphQL', 'Postman', 'Swagger'],
            deliveryTime: '3-8 weeks',
            startingPrice: '$4,000'
        },
        {
            id: 'cloud-deployment',
            category: 'development',
            name: 'Cloud Deployment',
            icon: <Cloud className="h-6 w-6" />,
            description: 'Cloud infrastructure setup, migration, and optimization for your applications.',
            features: [
                'AWS/Azure/GCP setup',
                'Containerization',
                'CI/CD pipelines',
                'Scalability planning',
                'Disaster recovery',
                'Cost optimization'
            ],
            technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
            deliveryTime: '2-6 weeks',
            startingPrice: '$3,000'
        },
        {
            id: 'technical-consultation',
            category: 'strategy',
            name: 'Technical Consultation',
            icon: <MessageSquare className="h-6 w-6" />,
            description: 'Expert advice on technology strategy, architecture, and implementation planning.',
            features: [
                'Technology assessment',
                'Architecture review',
                'Solution design',
                'Vendor selection',
                'ROI analysis',
                'Implementation roadmap'
            ],
            technologies: ['Strategy Sessions', 'Architecture Diagrams', 'Technical Docs'],
            deliveryTime: '1-4 weeks',
            startingPrice: '$2,500'
        },
        {
            id: 'digital-transformation',
            category: 'strategy',
            name: 'Digital Transformation',
            icon: <TrendingUp className="h-6 w-6" />,
            description: 'Comprehensive strategy for modernizing your business processes with technology.',
            features: [
                'Process automation',
                'Digital strategy',
                'Change management',
                'Workflow optimization',
                'Digital tool selection',
                'Training programs'
            ],
            technologies: ['Process Mapping', 'Automation Tools', 'Training Materials'],
            deliveryTime: '8-20 weeks',
            startingPrice: '$10,000'
        },
        {
            id: 'it-infrastructure',
            category: 'strategy',
            name: 'IT Infrastructure',
            icon: <Layers className="h-6 w-6" />,
            description: 'Planning and implementation of robust IT infrastructure for your organization.',
            features: [
                'Network design',
                'Security architecture',
                'Data management',
                'Backup solutions',
                'Compliance planning',
                'Performance monitoring'
            ],
            technologies: ['Network Design', 'Security Protocols', 'Monitoring Tools'],
            deliveryTime: '4-12 weeks',
            startingPrice: '$6,000'
        },
        {
            id: 'security-planning',
            category: 'strategy',
            name: 'Security Planning',
            icon: <Shield className="h-6 w-6" />,
            description: 'Comprehensive security strategy and implementation for your digital assets.',
            features: [
                'Security audits',
                'Threat modeling',
                'Compliance guidance',
                'Incident response',
                'Encryption strategies',
                'Access control'
            ],
            technologies: ['Security Frameworks', 'Compliance Standards', 'Monitoring'],
            deliveryTime: '3-8 weeks',
            startingPrice: '$4,500'
        },
        {
            id: 'ui-ux-design',
            category: 'design',
            name: 'UI/UX Design',
            icon: <Palette className="h-6 w-6" />,
            description: 'Creating intuitive, aesthetically pleasing interfaces that enhance user experience.',
            features: [
                'User research',
                'Wireframing',
                'Visual design',
                'Interaction design',
                'Design systems',
                'Accessibility'
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping Tools'],
            deliveryTime: '3-10 weeks',
            startingPrice: '$3,500'
        },
        {
            id: 'user-research',
            category: 'design',
            name: 'User Research',
            icon: <Users className="h-6 w-6" />,
            description: 'Understanding user needs, behaviors, and pain points to inform design decisions.',
            features: [
                'User interviews',
                'Surveys & analytics',
                'Usability testing',
                'Persona development',
                'Journey mapping',
                'Competitive analysis'
            ],
            technologies: ['Research Methods', 'Analytics Tools', 'Testing Platforms'],
            deliveryTime: '2-6 weeks',
            startingPrice: '$2,500'
        },
        {
            id: 'prototyping',
            category: 'design',
            name: 'Prototyping',
            icon: <Workflow className="h-6 w-6" />,
            description: 'Interactive prototypes to test concepts and gather feedback before development.',
            features: [
                'Low-fidelity prototypes',
                'High-fidelity mockups',
                'Interactive prototypes',
                'User testing sessions',
                'Design iteration',
                'Developer handoff'
            ],
            technologies: ['Figma', 'InVision', 'Proto.io', 'Marvel'],
            deliveryTime: '2-5 weeks',
            startingPrice: '$2,000'
        },
        {
            id: 'maintenance',
            category: 'support',
            name: 'Maintenance',
            icon: <Wrench className="h-6 w-6" />,
            description: 'Ongoing support, updates, and optimization for your software solutions.',
            features: [
                'Bug fixes',
                'Performance monitoring',
                'Security updates',
                'Database optimization',
                'Server management',
                'Backup management'
            ],
            technologies: ['Monitoring Tools', 'Automation', 'Ticketing Systems'],
            deliveryTime: 'Ongoing',
            startingPrice: '$500/month'
        },
        {
            id: 'training',
            category: 'support',
            name: 'Training',
            icon: <BookOpen className="h-6 w-6" />,
            description: 'Comprehensive training programs for your team on new systems and technologies.',
            features: [
                'System training',
                'Technical workshops',
                'Documentation',
                'Support materials',
                'Ongoing support',
                'Certification prep'
            ],
            technologies: ['Training Materials', 'Video Tutorials', 'Workshops'],
            deliveryTime: '1-4 weeks',
            startingPrice: '$1,500'
        },
        {
            id: 'updates-upgrades',
            category: 'support',
            name: 'Updates & Upgrades',
            icon: <ArrowRight className="h-6 w-6" />,
            description: 'Regular updates, feature enhancements, and technology upgrades for your systems.',
            features: [
                'Feature additions',
                'Technology upgrades',
                'Migration services',
                'Version updates',
                'Compatibility fixes',
                'Performance enhancements'
            ],
            technologies: ['Update Management', 'Migration Tools', 'Testing Suites'],
            deliveryTime: '1-8 weeks',
            startingPrice: '$2,000'
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

                {/* Service Category Navigation Tabs */}
                {/* <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-6 mb-8 -mx-6 px-6 border-b border-slate-700">
                    <div className="flex flex-wrap gap-4 justify-center">
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
                </div> */}

                {/* Service Category Navigation Tabs */}
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

                {/* Page Header */}
                {/* Page Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
                        Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technical Expertise</span>
                    </h1>

                    {/* Technical Excellence badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-2.5 rounded-full mb-8 border border-blue-500/30 backdrop-blur-sm">
                        <Cpu className="h-5 w-5 text-blue-400 animate-pulse" />
                        <span className="text-sm font-medium text-blue-300">Technical Excellence</span>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive technology services that cover every aspect of software development, from strategy and design to implementation and support.
                    </p>
                </div>

                {/* Service Category Content */}
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

                                {/* Services Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {getCategoryServices(category.id).map((service) => (
                                        <Card
                                            key={service.id}
                                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm shadow-xl hover:shadow-2xl"
                                        >
                                            <CardHeader className="pb-4">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className={`p-4 rounded-xl ${category.gradient}/20 border border-white/10`}>
                                                        {service.icon}
                                                    </div>
                                                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white px-4 py-1.5">
                                                        {service.startingPrice}
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-white text-xl mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                                    {service.name}
                                                </CardTitle>
                                                <CardDescription className="text-gray-300 text-lg">
                                                    {service.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent className="pb-4">
                                                {/* Features */}
                                                <div className="mb-6">
                                                    <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                                                        <Zap className="h-4 w-4 text-yellow-400" />
                                                        Key Features
                                                    </h4>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {service.features.slice(0, 4).map((feature, index) => (
                                                            <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                                                                <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                                                                <span className="text-sm text-gray-300">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Technologies & Details */}
                                                <div className="flex flex-wrap gap-4 text-sm">
                                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700">
                                                        <Target className="h-4 w-4 text-blue-400" />
                                                        <span className="text-gray-300">{service.deliveryTime}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700">
                                                        <Shield className="h-4 w-4 text-purple-400" />
                                                        <span className="text-gray-300">{service.technologies.length} technologies</span>
                                                    </div>
                                                </div>
                                            </CardContent>

                                            <CardFooter>
                                                <Link to={`/services/${service.id}`} className="w-full">
                                                    <Button
                                                        className={`w-full ${category.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-6 transition-all duration-300`}
                                                    >
                                                        Explore Service
                                                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

                {/* Two-Column Layout Overview */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Our Service Structure
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
                                    <h3 className="text-2xl font-bold text-white">Development</h3>
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
                                    <h3 className="text-2xl font-bold text-white">Design</h3>
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
                                    <h3 className="text-2xl font-bold text-white">Strategy</h3>
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
                                    <h3 className="text-2xl font-bold text-white">Support</h3>
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

                {/* Process & CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Our Process */}
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Our Service Process
                        </h3>

                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Discovery & Planning', description: 'We understand your requirements and create a detailed project plan.' },
                                { step: '02', title: 'Design & Architecture', description: 'Our experts design the solution and create technical specifications.' },
                                { step: '03', title: 'Development & Testing', description: 'We build your solution with rigorous quality assurance at every stage.' },
                                { step: '04', title: 'Deployment & Training', description: 'We deploy the solution and train your team for successful adoption.' },
                                { step: '05', title: 'Support & Optimization', description: 'Ongoing support and continuous improvement of your solution.' },
                            ].map((item, index) => (
                                <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800 transition-colors">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-lg">{item.step}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-300">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Get Started CTA */}
                    <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/30 rounded-2xl p-8 border border-blue-500/20 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                            Contact us for a free consultation to discuss your project needs and how our services can help you achieve your goals.
                        </p>

                        <div className="space-y-4">
                            <Link to="/contact">
                                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                                    Schedule Free Consultation
                                </Button>
                            </Link>

                            <div className="text-center text-gray-400 text-sm py-2">
                                or
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/products" className="flex-1">
                                    <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-300 py-6 transition-all duration-300">
                                        View Products
                                    </Button>
                                </Link>
                                <Link to="/industries" className="flex-1">
                                    <Button variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400/10 hover:border-purple-300 hover:text-purple-300 py-6 transition-all duration-300">
                                        Browse Industries
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-700">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30">
                                <Shield className="h-6 w-6 text-green-400" />
                                <div>
                                    <h4 className="text-white font-bold text-lg">Quality Guarantee</h4>
                                    <p className="text-gray-300 text-sm">All our services come with a 100% satisfaction guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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