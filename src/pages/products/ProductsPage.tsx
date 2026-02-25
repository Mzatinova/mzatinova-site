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
    CheckCircle,
    Clock,
    Wrench,
    Code,
    ExternalLink,
    ArrowRight,
    Smartphone,
    Users,
    Building,
    Zap,
    Shield,
    Cpu,
    BarChart,
    ShoppingCart,
    Package,
    Database,
    Workflow,
    Sparkles,
    Rocket,
    Target,
    Layers,
    XCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const products = [
        {
            id: 'eduspace',
            name: 'EDUSPACE by Mzatinova',
            subTitle: 'Education Intelligence Engine',
            status: 'live',
            statusText: 'LIVE',
            statusIcon: <CheckCircle className="h-4 w-4" />,
            description: 'The first education platform built on our Data Intelligence + Workflow Automation engines.',
            engineFeatures: {
                data: [
                    '→ 5,000+ student records indexed for instant search',
                    '→ Real-time grade tracking across terms',
                    '→ Pattern identification for at-risk students'
                ],
                workflow: [
                    '→ PDF report cards generated in <2 seconds',
                    '→ Parent-teacher communication automated',
                    '→ (Coming) SMS alerts for results & attendance'
                ]
            },
            currentStatus: [
                '✅ Live at Progress Private Primary School',
                '✅ Selected for EdTech@UNIMA 2026',
                '✅ Ready for school onboarding'
            ],
            logo: '/apps-logo/eduspace-logo.png',
            hasLogo: true,
            icon: <Code className="h-12 w-12" />,
            gradient: 'from-blue-500 to-cyan-500',
            link: 'https://eduspaceportal.edu',
            externalLink: 'https://eduspaceportal.edu',
            demoLink: 'https://eduspaceportal.edu',
            ctaText: 'View Live Demo',
            secondaryCtaText: 'School Onboarding',
            technologies: ['React', 'Node.js', 'PostgreSQL']
        },
        {
            id: 'eduspace-marketplace',
            name: 'EDUSPACE MARKETPLACE by Mzatinova',
            subTitle: 'Knowledge Commerce Engine',
            status: 'live',
            statusText: 'LIVE',
            statusIcon: <CheckCircle className="h-4 w-4" />,
            description: 'A marketplace connecting students with expert educators—powered by our engines.',
            engineFeatures: {
                data: [
                    '→ Tracks content popularity by subject',
                    '→ Recommends resources based on user history',
                    '→ Analytics dashboards for instructors'
                ],
                workflow: [
                    '→ Instant digital delivery upon purchase',
                    '→ Automated instructor payouts',
                    '→ Receipts and invoices auto-generated'
                ]
            },
            currentStatus: [
                '✅ Live and accepting sellers',
                '✅ Processing payments',
                '✅ Ready for educator onboarding'
            ],
            logo: '/apps-logo/edumarketplace-logo.png',
            hasLogo: true,
            icon: <ShoppingCart className="h-12 w-12" />,
            gradient: 'from-purple-500 to-indigo-500',
            link: 'https://edumarketplace.mzatinova.com/',
            externalLink: 'https://edumarketplace.mzatinova.com/',
            demoLink: '/demo/marketplace',
            ctaText: 'Browse Marketplace',
            secondaryCtaText: 'Become an Instructor',
            technologies: ['Next.js', 'Node.js', 'PostgreSQL']
        },
        {
            id: 'store',
            name: 'MZATINOVA STORE by Mzatinova',
            subTitle: 'Retail Intelligence Engine',
            status: 'soon',
            statusText: 'COMING SOON (Q3 2024)',
            statusIcon: <Clock className="h-4 w-4" />,
            description: 'Not just an e-commerce site. An intelligent retail platform powered by our engines.',
            engineFeatures: {
                data: [
                    '→ Predict demand based on browsing trends',
                    '→ Track inventory across multiple locations',
                    '→ Understand customer purchase patterns',
                    '→ Identify popular products in real-time'
                ],
                workflow: [
                    '→ Auto-reorder when stock runs low',
                    '→ Send order confirmations and shipping updates',
                    '→ Generate invoices automatically',
                    '→ Trigger restock alerts to suppliers'
                ]
            },
            currentStatus: [
                '🔧 Development in progress',
                '📋 Beta testing: April 2024',
                '🚀 Launch: Q3 2024'
            ],
            logo: '/apps-logo/store-logo.png',
            hasLogo: false,
            icon: <Smartphone className="h-12 w-12" />,
            gradient: 'from-purple-500 to-pink-500',
            link: '/products/store',
            externalLink: null,
            demoLink: null,
            ctaText: 'Join Beta Waitlist',
            secondaryCtaText: 'Learn About the Engine',
            technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis']
        },
        {
            id: 'zanga',
            name: 'ZANGA SOCIAL by Mzatinova',
            subTitle: 'Community Connection Engine',
            status: 'development',
            statusText: 'IN DEVELOPMENT',
            statusIcon: <Wrench className="h-4 w-4" />,
            description: 'A social platform built on our engines—connecting people through shared interests.',
            engineFeatures: {
                data: [
                    '→ Learn user interests from activity',
                    '→ Suggest relevant groups and events',
                    '→ Identify trending topics in communities',
                    '→ Map social connections and networks'
                ],
                workflow: [
                    '→ Auto-moderate content based on community rules',
                    '→ Notify about relevant activities',
                    '→ Schedule and manage events automatically',
                    '→ Surface important posts to groups'
                ]
            },
            currentStatus: [
                '🏗️ Early development',
                '🔬 Core engine architecture complete',
                '📱 Alpha testing: Late 2024'
            ],
            logo: '/apps-logo/zanga-logo.png',
            hasLogo: false,
            icon: <Users className="h-12 w-12" />,
            gradient: 'from-teal-500 to-green-500',
            link: '/products/zanga',
            externalLink: null,
            demoLink: null,
            ctaText: 'Get Development Updates',
            secondaryCtaText: 'Join Waitlist',
            technologies: ['React Native', 'GraphQL', 'Firebase', 'WebRTC']
        },
        {
            id: 'custom',
            name: 'CUSTOM SOLUTIONS by Mzatinova',
            subTitle: 'Your Industry. Our Engines. Your Solution.',
            status: 'available',
            statusText: 'AVAILABLE NOW',
            statusIcon: <CheckCircle className="h-4 w-4" />,
            description: 'We deploy our Data Intelligence and Workflow Automation engines inside your organization.',
            customDelivery: true,
            whatYouGet: [
                '✓ Your data, intelligently organized',
                '✓ Your workflows, fully automated',
                '✓ Your industry, powered by Mzatinova'
            ],
            capabilities: [
                'Full-stack applications built on our engines',
                'AI/ML integration (our Data Intelligence layer)',
                'Workflow automation for any business process',
                'Legacy system modernization with our engines',
                'API development connecting to our platform'
            ],
            currentStatus: [
                '✅ Available immediately',
                '✅ Free initial consultation',
                '✅ Industry-specific expertise'
            ],
            logo: '/apps-logo/custom-solutions-logo.png',
            hasLogo: false,
            icon: <Building className="h-12 w-12" />,
            gradient: 'from-orange-500 to-red-500',
            link: '/products/custom',
            externalLink: null,
            demoLink: '/portfolio',
            ctaText: 'Schedule Consultation',
            secondaryCtaText: 'See Case Studies',
            technologies: ['Your Stack', 'Our Engines', 'Integration']
        }
    ];

    // Component to render product icon/logo with better handling
    const ProductIcon = ({ product }) => {
        if (product.hasLogo) {
            return (
                <div className="flex items-center justify-center h-14 w-14">
                    <img
                        src={product.logo}
                        alt={`${product.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.innerHTML = `
                                <div class="bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent">
                                    ${product.icon.type === 'div' ? product.icon.props.children : product.icon}
                                </div>
                            `;
                        }}
                    />
                </div>
            );
        }

        return (
            <div className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                {product.icon}
            </div>
        );
    };

    const filters = [
        { id: 'all', label: 'All Products' },
        { id: 'live', label: 'Live Products' },
        { id: 'soon', label: 'Coming Soon' },
        { id: 'development', label: 'In Development' },
        { id: 'available', label: 'Custom Solutions' }
    ];

    const filteredProducts = activeFilter === 'all'
        ? products
        : products.filter(product => product.status === activeFilter);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'live':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'soon':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'development':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'available':
                return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
            <Header />
            <div className="container mx-auto px-6">

                {/* Filters Section */}
                <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-4 mb-8 border-b border-slate-700">
                    <div className="lg:hidden flex justify-center mb-4">
                        <button
                            onClick={() => setShowMobileFilters(!showMobileFilters)}
                            className="px-4 py-2.5 rounded-full border border-slate-600 text-gray-300 hover:text-white hover:border-blue-400 bg-slate-800 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            Filters
                            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                                {activeFilter === 'all' ? 'All' : activeFilter}
                            </span>
                        </button>
                    </div>

                    <div className="hidden lg:flex flex-wrap gap-3 justify-center">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg'
                                    : 'border-slate-600 text-gray-300 hover:border-blue-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {showMobileFilters && (
                        <div className="lg:hidden mt-4 space-y-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => {
                                        setActiveFilter(filter.id);
                                        setShowMobileFilters(false);
                                    }}
                                    className={`w-full px-5 py-3 rounded-lg border transition-all duration-300 ${activeFilter === filter.id
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg'
                                        : 'border-slate-600 text-gray-300 hover:border-blue-400 hover:text-white hover:bg-slate-800'
                                        }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Page Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20 backdrop-blur-sm">
                        <Cpu className="h-4 w-4 text-blue-300" />
                        <span className="text-sm font-medium text-blue-300">OUR ENGINES IN APPLICATION</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                        Every solution below is powered by the same core:
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
                        One architecture. Any industry. Infinite possibilities.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {filteredProducts.map((product) => (
                        <Card
                            key={product.id}
                            className="bg-slate-800/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            {/* Powered By Badge */}
                            <div className="absolute top-4 right-4 z-10">
                                <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 flex items-center gap-1">
                                    <Sparkles className="h-3 w-3" />
                                    POWERED BY MZATINOVA ENGINES
                                </Badge>
                            </div>

                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient}/20 border border-white/10 group-hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center`}>
                                        <ProductIcon product={product} />
                                    </div>
                                </div>

                                <CardTitle className="text-white text-2xl md:text-3xl mb-1">
                                    {product.name}
                                </CardTitle>
                                <p className="text-sm text-gray-400 mb-3">{product.subTitle}</p>

                                <CardDescription className="text-gray-300 text-base bg-slate-900/30 p-4 rounded-lg border border-slate-700">
                                    {product.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-6 pb-6">
                                {product.customDelivery ? (
                                    <>
                                        {/* Custom Solutions - What We Actually Deliver */}
                                        <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                                <Rocket className="h-4 w-4 text-orange-400" />
                                                WHAT WE ACTUALLY DELIVER
                                            </h4>
                                            <p className="text-gray-300 text-sm mb-4">
                                                We don't just write code. We deploy our Data Intelligence and Workflow Automation engines INSIDE your organization.
                                            </p>
                                            <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-700">
                                                <h5 className="text-white font-medium mb-2">You get:</h5>
                                                <ul className="space-y-2">
                                                    {product.whatYouGet.map((item, index) => (
                                                        <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                                                            <span className="text-green-400">✓</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Capabilities */}
                                        <div>
                                            <h4 className="text-white font-semibold mb-3 text-sm">Capabilities:</h4>
                                            <ul className="space-y-2">
                                                {product.capabilities.map((capability, index) => (
                                                    <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                                                        <span className="text-orange-400 mt-1">•</span>
                                                        <span>{capability}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Data Intelligence Section */}
                                        <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Database className="h-5 w-5 text-blue-400" />
                                                <h4 className="text-blue-400 font-semibold">DATA INTELLIGENCE ENGINE</h4>
                                                <span className="text-xs text-gray-400 ml-auto">
                                                    {product.status === 'live' ? 'IN ACTION' : 'WILL'}
                                                </span>
                                            </div>
                                            <ul className="space-y-2">
                                                {product.engineFeatures.data.map((feature, index) => (
                                                    <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                                                        <span className="text-blue-400 mt-1">→</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Workflow Automation Section */}
                                        <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Workflow className="h-5 w-5 text-purple-400" />
                                                <h4 className="text-purple-400 font-semibold">WORKFLOW AUTOMATION</h4>
                                                <span className="text-xs text-gray-400 ml-auto">
                                                    {product.status === 'live' ? 'IN ACTION' : 'WILL'}
                                                </span>
                                            </div>
                                            <ul className="space-y-2">
                                                {product.engineFeatures.workflow.map((feature, index) => (
                                                    <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                                                        <span className="text-purple-400 mt-1">→</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}

                                {/* Current Status */}
                                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700">
                                    <h4 className="text-white font-semibold mb-3 text-sm">Current Status</h4>
                                    <div className="space-y-1">
                                        {product.currentStatus.map((status, index) => (
                                            <p key={index} className="text-gray-300 text-sm">{status}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Technology Stack */}
                                {product.technologies && (
                                    <div>
                                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                                            <Cpu className="h-4 w-4 text-blue-400" />
                                            Technology Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 rounded-full bg-slate-900 text-gray-300 text-xs border border-slate-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </CardContent>

                            <CardFooter className="pt-0">
                                <div className="w-full space-y-3">
                                    {/* Primary CTA */}
                                    {product.externalLink ? (
                                        <a
                                            href={product.externalLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <Button
                                                className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-6 text-lg transition-all duration-300`}
                                            >
                                                {product.ctaText}
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </a>
                                    ) : (
                                        <Link to={product.link}>
                                            <Button
                                                className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-6 text-lg transition-all duration-300`}
                                            >
                                                {product.ctaText}
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    )}

                                    {/* Secondary CTA */}
                                    {product.secondaryCtaText && (
                                        <Link to={product.demoLink || product.link}>
                                            <Button
                                                variant="outline"
                                                className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6 hover:border-blue-300 hover:text-blue-300 transition-all duration-300"
                                            >
                                                {product.secondaryCtaText}
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* How We Build Intelligence Engines Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20 backdrop-blur-sm">
                            <Layers className="h-4 w-4 text-blue-300" />
                            <span className="text-sm font-medium text-blue-300">HOW WE BUILD INTELLIGENCE ENGINES</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Every solution starts with our core architecture
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            and gets customized for your industry.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Step 1 */}
                        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-blue-400">1</span>
                                    </div>
                                    <CardTitle className="text-white">DISCOVER</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Your data & workflows</p>
                                <div className="mt-4 flex justify-center">
                                    <ArrowRight className="h-6 w-6 text-blue-400 animate-pulse" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 2 */}
                        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-purple-400">2</span>
                                    </div>
                                    <CardTitle className="text-white">DESIGN</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Intelligence & Automation</p>
                                <div className="mt-4 flex justify-center">
                                    <ArrowRight className="h-6 w-6 text-purple-400 animate-pulse" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 3 */}
                        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-green-400">3</span>
                                    </div>
                                    <CardTitle className="text-white">BUILD</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">On Our Core Architecture</p>
                                <div className="mt-4 flex justify-center">
                                    <ArrowRight className="h-6 w-6 text-green-400 animate-pulse" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 4 */}
                        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-orange-400">4</span>
                                    </div>
                                    <CardTitle className="text-white">DEPLOY</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Engines in Your Context</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* What Makes Us Different */}
                    <Card className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 backdrop-blur-sm">
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
                </div>

                {/* Don't See Your Industry? Section */}
                <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
                    <CardContent className="p-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            DON'T SEE YOUR INDUSTRY?
                        </h2>
                        <p className="text-2xl text-gray-300 mb-4">
                            Our engines work anywhere.
                        </p>
                        <div className="max-w-2xl mx-auto mb-8">
                            <p className="text-xl text-gray-300">
                                If you have <span className="text-blue-400 font-semibold">data</span>, we have the intelligence.
                            </p>
                            <p className="text-xl text-gray-300">
                                If you have <span className="text-purple-400 font-semibold">workflows</span>, we have the automation.
                            </p>
                        </div>
                        <p className="text-lg text-gray-300 mb-8">
                            Tell us about your industry, and we'll show you how Mzatinova engines can transform it.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-6 text-lg">
                                Tell Us About Your Industry
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Footer />
            </div>
        </div>
    );
};

export default ProductsPage;

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
//     CheckCircle,
//     Clock,
//     Wrench,
//     Code,
//     ExternalLink,
//     ArrowRight,
//     Smartphone,
//     Users,
//     Building,
//     Zap,
//     Shield,
//     Cpu,
//     BarChart,
//     ShoppingCart,
//     Package // Fallback icon
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const ProductsPage: React.FC = () => {
//     const [activeFilter, setActiveFilter] = useState<string>('all');
//     const [showMobileFilters, setShowMobileFilters] = useState(false);

//     const products = [
//         {
//             id: 'eduspace',
//             name: 'EduSpace Portal',
//             status: 'live',
//             statusText: 'LIVE',
//             statusIcon: <CheckCircle className="h-4 w-4" />,
//             description: 'Comprehensive school management and parent portal system transforming educational administration.',
//             longDescription: 'EduSpace Portal provides schools with a complete digital ecosystem for managing students, teachers, curriculum, and communication. Parents get real-time access to their children\'s academic progress, attendance, and school announcements.',
//             features: [
//                 'Real-time grade & attendance tracking',
//                 'Parent-teacher communication portal',
//                 'Digital report cards & transcripts',
//                 'Mobile-responsive design',
//                 'Multi-school management capability',
//                 'Data analytics & insights'
//             ],
//             logo: '/apps-logo/eduspace-logo.png',
//             hasLogo: true,
//             icon: <Code className="h-12 w-12" />,
//             gradient: 'from-blue-500 to-cyan-500',
//             link: 'https://eduspaceportal.edu',
//             externalLink: 'https://eduspaceportal.edu',
//             demoLink: 'https://eduspaceportal.edu',
//             ctaText: 'Browse EduPortal',
//             secondaryCtaText: 'Visit eduspace portal',
//             deployment: 'Live Public Access',
//             highlights: [
//                 'Fully operational live deployment',
//                 'Proven stability in daily school operations',
//                 'Ready for immediate institution onboarding'
//             ],
//             technologies: ['React', 'Node.js', 'Postgress']
//         },

//         {
//             id: 'eduspace-marketplace',
//             name: 'Eduspace Marketplace',
//             status: 'live',
//             statusText: 'LIVE',
//             statusIcon: <CheckCircle className="h-4 w-4" />,
//             description: 'Your knowledge marketplace connecting students with expert educators and resources.',
//             longDescription: 'This is the marketplace where students unlock knowledge and educators turn expertise into impact. Designed for all levels and lifelong learning, it enables seamless buying and selling of educational resources.',
//             features: [
//                 'Buy & sell educational content',
//                 'Secure payment processing',
//                 'Instructor dashboards & analytics',
//                 'Instant digital delivery',
//                 'Student resource library',
//                 'Rating & review system'
//             ],
//             logo: '/apps-logo/edumarketplace-logo.png',
//             hasLogo: true,
//             icon: <ShoppingCart className="h-12 w-12" />,
//             gradient: 'from-purple-500 to-indigo-500',
//             link: 'https://edumarketplace.mzatinova.com/',
//             externalLink: 'https://edumarketplace.mzatinova.com/',
//             demoLink: '/demo/marketplace',
//             ctaText: 'Browse EduMarketplace',
//             secondaryCtaText: 'Start Selling',
//             deployment: 'Live public access',
//             highlights: [
//                 'Monetize your expertise',
//                 'Global knowledge exchange',
//                 'Instant access to materials'
//             ],
//             technologies: ['Next js', 'Node.js', 'Postgress']
//         },
//         {
//             id: 'store',
//             name: 'Mzatinova Store',
//             status: 'soon',
//             statusText: 'COMING SOON',
//             statusIcon: <Clock className="h-4 w-4" />,
//             description: 'Modern e-commerce platform for electronics and tech products with cutting-edge retail technology.',
//             longDescription: 'A comprehensive online marketplace offering electronics, gadgets, and tech accessories with seamless shopping experience, secure payments, and reliable delivery services.',
//             features: [
//                 'Secure payment processing',
//                 'Inventory management system',
//                 'Order tracking & notifications',
//                 'Customer reviews & ratings',
//                 'Multi-vendor support',
//                 'Mobile shopping app'
//             ],
//             logo: '/apps-logo/store-logo.png', // Public URL
//             hasLogo: false,
//             icon: <Smartphone className="h-12 w-12" />,
//             gradient: 'from-purple-500 to-pink-500',
//             link: '/products/store',
//             externalLink: null,
//             demoLink: null,
//             ctaText: 'Notify Me at Launch',
//             secondaryCtaText: 'View Roadmap',
//             deployment: 'Development in progress - Launching Q3 2024',
//             highlights: [
//                 'Beta testing starting April 2024',
//                 'Initial focus on electronics & gadgets',
//                 'Planned expansion to other categories'
//             ],
//             technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis']
//         },
//         {
//             id: 'zanga',
//             name: 'Zanga Social',
//             status: 'development',
//             statusText: 'IN DEVELOPMENT',
//             statusIcon: <Wrench className="h-4 w-4" />,
//             description: 'Community-focused social platform connecting people through shared interests and activities.',
//             longDescription: 'Zanga Social brings communities together with features for social networking, group discussions, event planning, and content sharing in a safe, engaging environment.',
//             features: [
//                 'Community groups & forums',
//                 'Live streaming capabilities',
//                 'Event creation & management',
//                 'Content sharing & discovery',
//                 'Private messaging',
//                 'Marketplace integration'
//             ],
//             logo: '/apps-logo/zanga-logo.png', // Public URL
//             hasLogo: false,
//             icon: <Users className="h-12 w-12" />,
//             gradient: 'from-teal-500 to-green-500',
//             link: '/products/zanga',
//             externalLink: null,
//             demoLink: null,
//             ctaText: 'Join Waitlist',
//             secondaryCtaText: 'View Features',
//             deployment: 'Early development phase',
//             highlights: [
//                 'Focus on community building',
//                 'Privacy-first design approach',
//                 'Integration with existing platforms'
//             ],
//             technologies: ['React Native', 'GraphQL', 'Firebase', 'WebRTC']
//         },
//         {
//             id: 'custom',
//             name: 'Custom Solutions',
//             status: 'available',
//             statusText: 'AVAILABLE',
//             statusIcon: <CheckCircle className="h-4 w-4" />,
//             description: 'Tailored software development services for businesses across all industries.',
//             longDescription: 'Our custom development team creates bespoke software solutions designed specifically for your business needs, processes, and goals. From concept to deployment, we deliver excellence.',
//             features: [
//                 'Full-stack web applications',
//                 'Mobile app development',
//                 'API development & integration',
//                 'Legacy system modernization',
//                 'Cloud migration services',
//                 'Ongoing maintenance & support'
//             ],
//             logo: '/apps-logo/custom-solutions-logo.png', // Public URL
//             hasLogo: false,
//             icon: <Building className="h-12 w-12" />,
//             gradient: 'from-orange-500 to-red-500',
//             link: '/products/custom',
//             externalLink: null,
//             demoLink: '/portfolio',
//             ctaText: 'Start a Project',
//             secondaryCtaText: 'View Portfolio',
//             deployment: 'Available immediately',
//             highlights: [
//                 'Free initial consultation',
//                 'Flexible engagement models',
//                 'Industry-specific expertise'
//             ],
//             technologies: ['Full Technology Stack', 'AI/ML Integration', 'IoT Solutions', 'Blockchain']
//         }
//     ];

//     // Component to render product icon/logo with better handling
//     const ProductIcon = ({ product }) => {
//         if (product.hasLogo) {
//             return (
//                 <div className="flex items-center justify-center h-14 w-14">
//                     <img
//                         src={product.logo}
//                         alt={`${product.name} logo`}
//                         className="max-h-full max-w-full object-contain"
//                         onError={(e) => {
//                             // Fallback if image fails to load
//                             e.currentTarget.style.display = 'none';
//                             e.currentTarget.parentElement.innerHTML = `
//                                 <div class="bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent">
//                                     ${product.icon.type === 'div' ? product.icon.props.children : product.icon}
//                                 </div>
//                             `;
//                         }}
//                     />
//                 </div>
//             );
//         }

//         // Fallback to the icon for products without logos
//         return (
//             <div className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
//                 {product.icon}
//             </div>
//         );
//     };

//     const filters = [
//         { id: 'all', label: 'All Products' },
//         { id: 'live', label: 'Live Products' },
//         { id: 'soon', label: 'Coming Soon' },
//         { id: 'development', label: 'In Development' },
//         { id: 'available', label: 'Custom Solutions' }
//     ];

//     const filteredProducts = activeFilter === 'all'
//         ? products
//         : products.filter(product => product.status === activeFilter);

//     const getStatusBadge = (status: string) => {
//         switch (status) {
//             case 'live':
//                 return 'bg-green-500/20 text-green-400 border-green-500/30';
//             case 'soon':
//                 return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
//             case 'development':
//                 return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//             case 'available':
//                 return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
//             default:
//                 return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">

//                 {/* Filters Section */}
//                 <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-4 mb-8 border-b border-slate-700">
//                     {/* Mobile Filter Toggle Button */}
//                     <div className="lg:hidden flex justify-center mb-4">
//                         <button
//                             onClick={() => setShowMobileFilters(!showMobileFilters)}
//                             className="px-4 py-2.5 rounded-full border border-slate-600 text-gray-300 hover:text-white hover:border-blue-400 bg-slate-800 flex items-center gap-2"
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//                             </svg>
//                             Filters
//                             <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
//                                 {activeFilter === 'all' ? 'All' : activeFilter}
//                             </span>
//                         </button>
//                     </div>

//                     {/* Desktop Filters - Horizontal */}
//                     <div className="hidden lg:flex flex-wrap gap-3 justify-center">
//                         {filters.map((filter) => (
//                             <button
//                                 key={filter.id}
//                                 onClick={() => setActiveFilter(filter.id)}
//                                 className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${activeFilter === filter.id
//                                     ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg'
//                                     : 'border-slate-600 text-gray-300 hover:border-blue-400 hover:text-white hover:bg-slate-800'
//                                     }`}
//                             >
//                                 {filter.label}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Mobile Filters - Vertical (when toggled) */}
//                     {showMobileFilters && (
//                         <div className="lg:hidden mt-4 space-y-2">
//                             {filters.map((filter) => (
//                                 <button
//                                     key={filter.id}
//                                     onClick={() => {
//                                         setActiveFilter(filter.id);
//                                         setShowMobileFilters(false);
//                                     }}
//                                     className={`w-full px-5 py-3 rounded-lg border transition-all duration-300 ${activeFilter === filter.id
//                                         ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg'
//                                         : 'border-slate-600 text-gray-300 hover:border-blue-400 hover:text-white hover:bg-slate-800'
//                                         }`}
//                                 >
//                                     {filter.label}
//                                 </button>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Page Header */}
//                 {/* <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
//                         Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Product Portfolio</span>
//                     </h1>
//                     <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
//                         Explore our suite of software solutions, from live platforms to upcoming innovations and custom development services.
//                     </p>
//                 </div> */}

//                 {/* Page Header */}
//                 <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20 backdrop-blur-sm">
//                         <Cpu className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">OUR ENGINES IN APPLICATION</span>
//                     </div>

//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
//                         Every solution below is powered by the same core:
//                     </h1>

//                     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
//                         <div className="flex items-center gap-3 bg-blue-500/10 px-6 py-3 rounded-xl border border-blue-500/30">
//                             <span className="text-2xl">📊</span>
//                             <span className="text-white font-semibold">Data Intelligence Engine</span>
//                         </div>
//                         <span className="text-white text-2xl hidden sm:block">+</span>
//                         <div className="flex items-center gap-3 bg-purple-500/10 px-6 py-3 rounded-xl border border-purple-500/30">
//                             <span className="text-2xl">⚙️</span>
//                             <span className="text-white font-semibold">Workflow Automation</span>
//                         </div>
//                     </div>

//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         One architecture. Any industry. Infinite possibilities.
//                     </p>
//                 </div>

//                 {/* Portfolio Badge */}
//                 <div className="flex justify-center mb-12">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-2.5 rounded-full border border-blue-500/30 backdrop-blur-sm">
//                         <Zap className="h-5 w-5 text-blue-400 animate-pulse" />
//                         <span className="text-sm font-medium text-blue-300">Featured Products</span>
//                     </div>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
//                     {filteredProducts.map((product) => (
//                         <Card
//                             key={product.id}
//                             className="bg-slate-800/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
//                         >
//                             {/* Product Header */}
//                             <CardHeader className="pb-4">
//                                 <div className="flex items-start justify-between mb-6">
//                                     <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient}/20 border border-white/10 group-hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center`}>
//                                         <ProductIcon product={product} />
//                                     </div>
//                                     <Badge className={`${getStatusBadge(product.status)} flex items-center gap-1.5 backdrop-blur-sm`}>
//                                         {product.statusIcon}
//                                         {product.statusText}
//                                     </Badge>
//                                 </div>

//                                 <CardTitle className="text-white text-2xl md:text-3xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                                     {product.name}
//                                 </CardTitle>

//                                 <CardDescription className="text-gray-300 text-lg bg-slate-900/30 p-4 rounded-lg border border-slate-700">
//                                     {product.description}
//                                 </CardDescription>
//                             </CardHeader>

//                             <CardContent className="space-y-6 pb-6">
//                                 {/* Deployment Status */}
//                                 <div className="p-4 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700">
//                                     <div className="flex items-center gap-3">
//                                         <Shield className="h-5 w-5 text-blue-400" />
//                                         <div>
//                                             <h4 className="text-white font-semibold mb-1 text-lg">Current Status</h4>
//                                             <p className="text-gray-300 text-sm">{product.deployment}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Key Features */}
//                                 <div>
//                                     <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-lg">
//                                         <Zap className="h-5 w-5 text-blue-400" />
//                                         Key Features
//                                     </h4>
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                                         {product.features.slice(0, 4).map((feature, index) => (
//                                             <div key={index} className="flex items-center gap-2 text-gray-300 p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
//                                                 <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
//                                                 <span className="text-sm">{feature}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Highlights */}
//                                 {product.highlights && (
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-3 text-lg">Highlights</h4>
//                                         <div className="space-y-2">
//                                             {product.highlights.map((highlight, index) => (
//                                                 <div key={index} className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
//                                                     <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${product.gradient} mt-2`} />
//                                                     <p className="text-gray-300 text-sm">{highlight}</p>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Technology Stack */}
//                                 {product.technologies && (
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-lg">
//                                             <Cpu className="h-5 w-5 text-blue-400" />
//                                             Technology Stack
//                                         </h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {product.technologies.map((tech, index) => (
//                                                 <span
//                                                     key={index}
//                                                     className="px-3 py-1.5 rounded-full bg-slate-900 text-gray-300 text-sm border border-slate-700 hover:border-blue-500 transition-colors"
//                                                 >
//                                                     {tech}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}
//                             </CardContent>

//                             <CardFooter className="pt-0">
//                                 <div className="w-full space-y-3">
//                                     {/* Primary CTA */}
//                                     {product.externalLink ? (
//                                         <a
//                                             href={product.externalLink}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="block"
//                                         >
//                                             <Button
//                                                 className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-6 text-lg transition-all duration-300`}
//                                             >
//                                                 {product.ctaText}
//                                                 <ExternalLink className="ml-2 h-4 w-4" />
//                                             </Button>
//                                         </a>
//                                     ) : (
//                                         <Link to={product.link}>
//                                             <Button
//                                                 className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-6 text-lg transition-all duration-300`}
//                                             >
//                                                 {product.ctaText}
//                                                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                                             </Button>
//                                         </Link>
//                                     )}

//                                     {/* Secondary CTA */}
//                                     {(product.demoLink || product.secondaryCtaText) && (
//                                         <Link to={product.demoLink || product.link}>
//                                             <Button
//                                                 variant="outline"
//                                                 className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6 hover:border-blue-300 hover:text-blue-300 transition-all duration-300"
//                                             >
//                                                 {product.secondaryCtaText}
//                                             </Button>
//                                         </Link>
//                                     )}
//                                 </div>
//                             </CardFooter>
//                         </Card>
//                     ))}
//                 </div>

//                 {/* Process Section */}
//                 <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                                 From Concept to Deployment
//                             </h2>
//                             <p className="text-gray-300 mb-8 text-lg">
//                                 Our product development process ensures we deliver high-quality, scalable solutions that meet real-world needs. Each product goes through rigorous planning, development, testing, and iteration.
//                             </p>

//                             <div className="space-y-4">
//                                 <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
//                                     <div className="p-3 rounded-lg bg-blue-500/20">
//                                         <BarChart className="h-6 w-6 text-blue-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1 text-lg">User-Centric Design</h4>
//                                         <p className="text-gray-300">We start by understanding user needs and pain points</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
//                                     <div className="p-3 rounded-lg bg-purple-500/20">
//                                         <Cpu className="h-6 w-6 text-purple-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1 text-lg">Agile Development</h4>
//                                         <p className="text-gray-300">Iterative development with regular feedback cycles</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
//                                     <div className="p-3 rounded-lg bg-green-500/20">
//                                         <Shield className="h-6 w-6 text-green-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1 text-lg">Quality Assurance</h4>
//                                         <p className="text-gray-300">Rigorous testing for performance, security, and usability</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
//                             <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Need a Custom Solution?</h3>
//                             <p className="text-gray-300 mb-8 text-lg">
//                                 Don't see exactly what you need? Our custom solutions team can build software tailored to your specific requirements, industry, and business processes.
//                             </p>

//                             <div className="space-y-4">
//                                 <Link to="/contact">
//                                     <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
//                                         Start Custom Project
//                                         <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                                     </Button>
//                                 </Link>

//                                 <Link to="/services">
//                                     <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6 hover:border-blue-300 hover:text-blue-300 transition-all duration-300">
//                                         Explore Our Services
//                                     </Button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <Footer />
//             </div>

//         </div>
//     );
// };

// export default ProductsPage;

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
//     CheckCircle,
//     Clock,
//     Wrench,
//     Code,
//     ExternalLink,
//     ArrowRight,
//     Smartphone,
//     Users,
//     Building,
//     Zap,
//     Shield,
//     Cpu,
//     BarChart,
//     ShoppingCart
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const ProductsPage: React.FC = () => {
//     const [activeFilter, setActiveFilter] = useState<string>('all');
//     const [showMobileFilters, setShowMobileFilters] = useState(false);

//     const products = [
//         {
//             id: 'eduspace',
//             name: 'EduSpace Portal',
//             status: 'live',
//             statusText: 'LIVE',
//             statusIcon: <CheckCircle className="h-4 w-4" />,
//             description: 'Comprehensive school management and parent portal system transforming educational administration.',
//             longDescription: 'EduSpace Portal provides schools with a complete digital ecosystem for managing students, teachers, curriculum, and communication. Parents get real-time access to their children\'s academic progress, attendance, and school announcements.',
//             features: [
//                 'Real-time grade & attendance tracking',
//                 'Parent-teacher communication portal',
//                 'Digital report cards & transcripts',
//                 'Mobile-responsive design',
//                 'Multi-school management capability',
//                 'Data analytics & insights'
//             ],
//             logo: '/apps-logo/eduspace-logo.png', // Public URL
//             hasLogo: true,
//             icon: <Code className="h-12 w-12" />,
//             gradient: 'from-blue-500 to-cyan-500',
//             link: 'https://portal.mzatinova.com',
//             externalLink: 'https://portal.mzatinova.com',
//             demoLink: 'https://portal.mzatinova.com',
//             ctaText: 'Browse EduPortal',
//             secondaryCtaText: 'Visit eduspace portal',
//             deployment: 'Live Public Access',
//             highlights: [
//                 'Fully operational live deployment',
//                 'Proven stability in daily school operations',
//                 'Ready for immediate institution onboarding'
//             ],
//             technologies: ['React', 'Node.js', 'Postgress']
//         },

//         {
//             id: 'eduspace-marketplace',
//             name: 'Eduspace Marketplace',
//             status: 'live',
//             statusText: 'LIVE',
//             statusIcon: <CheckCircle className="h-4 w-4" />,
//             description: 'Your knowledge marketplace connecting students with expert educators and resources.',
//             longDescription: 'This is the marketplace where students unlock knowledge and educators turn expertise into impact. Designed for all levels and lifelong learning, it enables seamless buying and selling of educational resources.',
//             features: [
//                 'Buy & sell educational content',
//                 'Secure payment processing',
//                 'Instructor dashboards & analytics',
//                 'Instant digital delivery',
//                 'Student resource library',
//                 'Rating & review system'
//             ],
//             logo: '/apps-logo/marketplace-logo.png',
//             hasLogo: true,
//             icon: <ShoppingCart className="h-12 w-12" />,
//             gradient: 'from-purple-500 to-indigo-500',
//             link: 'https://edumarketplace.mzatinova.com/',
//             externalLink: 'https://edumarketplace.mzatinova.com/',
//             demoLink: 'https://edumarketplace.mzatinova.com/',
//             ctaText: 'Browse EduMarketplace',
//             secondaryCtaText: 'Start Selling',
//             deployment: 'Live public access',
//             highlights: [
//                 'Monetize your expertise',
//                 'Global knowledge exchange',
//                 'Instant access to materials'
//             ],
//             technologies: ['Next js', 'Node.js', 'Postgress']
//         },
//         {
//             id: 'store',
//             name: 'Mzatinova Store',
//             status: 'soon',
//             statusText: 'COMING SOON',
//             statusIcon: <Clock className="h-4 w-4" />,
//             description: 'Modern e-commerce platform for electronics and tech products with cutting-edge retail technology.',
//             longDescription: 'A comprehensive online marketplace offering electronics, gadgets, and tech accessories with seamless shopping experience, secure payments, and reliable delivery services.',
//             features: [
//                 'Secure payment processing',
//                 'Inventory management system',
//                 'Order tracking & notifications',
//                 'Customer reviews & ratings',
//                 'Multi-vendor support',
//                 'Mobile shopping app'
//             ],
//             logo: '/apps-logo/store-logo.png', // Public URL
//             hasLogo: false,
//             icon: <Smartphone className="h-12 w-12" />,
//             gradient: 'from-purple-500 to-pink-500',
//             link: '/products/store',
//             externalLink: null,
//             demoLink: null,
//             ctaText: 'Notify Me at Launch',
//             secondaryCtaText: 'View Roadmap',
//             deployment: 'Development in progress - Launching Q3 2024',
//             highlights: [
//                 'Beta testing starting April 2024',
//                 'Initial focus on electronics & gadgets',
//                 'Planned expansion to other categories'
//             ],
//             technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis']
//         },
//         {
//             id: 'zanga',
//             name: 'Zanga Social',
//             status: 'development',
//             statusText: 'IN DEVELOPMENT',
//             statusIcon: <Wrench className="h-4 w-4" />,
//             description: 'Community-focused social platform connecting people through shared interests and activities.',
//             longDescription: 'Zanga Social brings communities together with features for social networking, group discussions, event planning, and content sharing in a safe, engaging environment.',
//             features: [
//                 'Community groups & forums',
//                 'Live streaming capabilities',
//                 'Event creation & management',
//                 'Content sharing & discovery',
//                 'Private messaging',
//                 'Marketplace integration'
//             ],
//             logo: '/apps-logo/zanga-logo.png', // Public URL
//             hasLogo: true,
//             icon: <Users className="h-12 w-12" />,
//             gradient: 'from-teal-500 to-green-500',
//             link: '/products/zanga',
//             externalLink: null,
//             demoLink: null,
//             ctaText: 'Join Waitlist',
//             secondaryCtaText: 'View Features',
//             deployment: 'Early development phase',
//             highlights: [
//                 'Focus on community building',
//                 'Privacy-first design approach',
//                 'Integration with existing platforms'
//             ],
//             technologies: ['React Native', 'GraphQL', 'Firebase', 'WebRTC']
//         },
//         {
//             id: 'custom',
//             name: 'Custom Solutions',
//             status: 'available',
//             statusText: 'AVAILABLE',
//             statusIcon: <CheckCircle className="h-4 w-4" />,
//             description: 'Tailored software development services for businesses across all industries.',
//             longDescription: 'Our custom development team creates bespoke software solutions designed specifically for your business needs, processes, and goals. From concept to deployment, we deliver excellence.',
//             features: [
//                 'Full-stack web applications',
//                 'Mobile app development',
//                 'API development & integration',
//                 'Legacy system modernization',
//                 'Cloud migration services',
//                 'Ongoing maintenance & support'
//             ],
//             logo: '/apps-logo/custom-solutions-logo.png', // Public URL
//             hasLogo: true,
//             icon: <Building className="h-12 w-12" />,
//             gradient: 'from-orange-500 to-red-500',
//             link: '/products/custom',
//             externalLink: null,
//             demoLink: '/portfolio',
//             ctaText: 'Start a Project',
//             secondaryCtaText: 'View Portfolio',
//             deployment: 'Available immediately',
//             highlights: [
//                 'Free initial consultation',
//                 'Flexible engagement models',
//                 'Industry-specific expertise'
//             ],
//             technologies: ['Full Technology Stack', 'AI/ML Integration', 'IoT Solutions', 'Blockchain']
//         }
//     ];

//     const filters = [
//         { id: 'all', label: 'All Products' },
//         { id: 'live', label: 'Live Products' },
//         { id: 'soon', label: 'Coming Soon' },
//         { id: 'development', label: 'In Development' },
//         { id: 'available', label: 'Custom Solutions' }
//     ];

//     const filteredProducts = activeFilter === 'all'
//         ? products
//         : products.filter(product => product.status === activeFilter);

//     const getStatusBadge = (status: string) => {
//         switch (status) {
//             case 'live':
//                 return 'bg-green-500/20 text-green-400 border-green-500/30';
//             case 'soon':
//                 return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
//             case 'development':
//                 return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//             case 'available':
//                 return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
//             default:
//                 return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">

//                 {/* Filters Section */}
//                 {/* <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-4 mb-8 -mx-6 px-6 border-b border-slate-700 flex justify-center">
//                     <div className="flex flex-wrap gap-3 justify-center">
//                         {filters.map((filter) => (
//                             <button
//                                 key={filter.id}
//                                 onClick={() => setActiveFilter(filter.id)}
//                                 className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${activeFilter === filter.id
//                                     ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg'
//                                     : 'border-slate-600 text-gray-300 hover:border-blue-400 hover:text-white hover:bg-slate-800'
//                                     }`}
//                             >
//                                 {filter.label}
//                             </button>
//                         ))}
//                     </div>
//                 </div> */}

//                 {/* Filters Section */}
//                 <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-4 mb-8 border-b border-slate-700">
//                     {/* Mobile Filter Toggle Button */}
//                     <div className="lg:hidden flex justify-center mb-4">
//                         <button
//                             onClick={() => setShowMobileFilters(!showMobileFilters)}
//                             className="px-4 py-2.5 rounded-full border border-slate-600 text-gray-300 hover:text-white hover:border-blue-400 bg-slate-800 flex items-center gap-2"
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//                             </svg>
//                             Filters
//                             <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
//                                 {activeFilter === 'all' ? 'All' : activeFilter}
//                             </span>
//                         </button>
//                     </div>

//                     {/* Desktop Filters - Horizontal */}
//                     <div className="hidden lg:flex flex-wrap gap-3 justify-center">
//                         {filters.map((filter) => (
//                             <button
//                                 key={filter.id}
//                                 onClick={() => setActiveFilter(filter.id)}
//                                 className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${activeFilter === filter.id
//                                     ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg'
//                                     : 'border-slate-600 text-gray-300 hover:border-blue-400 hover:text-white hover:bg-slate-800'
//                                     }`}
//                             >
//                                 {filter.label}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Mobile Filters - Vertical (when toggled) */}
//                     {showMobileFilters && (
//                         <div className="lg:hidden mt-4 space-y-2">
//                             {filters.map((filter) => (
//                                 <button
//                                     key={filter.id}
//                                     onClick={() => {
//                                         setActiveFilter(filter.id);
//                                         setShowMobileFilters(false);
//                                     }}
//                                     className={`w-full px-5 py-3 rounded-lg border transition-all duration-300 ${activeFilter === filter.id
//                                         ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg'
//                                         : 'border-slate-600 text-gray-300 hover:border-blue-400 hover:text-white hover:bg-slate-800'
//                                         }`}
//                                 >
//                                     {filter.label}
//                                 </button>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Page Header - Improved with Better Contrast */}
//                 {/* <div className="text-center mb-16">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                         Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Product Portfolio</span>
//                     </h1>
//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
//                         Explore our suite of software solutions, from live platforms to upcoming innovations and custom development services.
//                     </p>
//                 </div> */}

//                 {/* Page Header */}
//                 <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
//                         Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Product Portfolio</span>
//                     </h1>
//                     <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
//                         Explore our suite of software solutions, from live platforms to upcoming innovations and custom development services.
//                     </p>
//                 </div>

//                 {/* Portfolio Badge */}
//                 <div className="flex justify-center mb-12">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-2.5 rounded-full border border-blue-500/30 backdrop-blur-sm">
//                         <Zap className="h-5 w-5 text-blue-400 animate-pulse" />
//                         <span className="text-sm font-medium text-blue-300">Featured Products</span>
//                     </div>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
//                     {filteredProducts.map((product) => (
//                         <Card
//                             key={product.id}
//                             className="bg-slate-800/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
//                         >
//                             {/* Product Header */}
//                             <CardHeader className="pb-4">
//                                 <div className="flex items-start justify-between mb-6">
//                                     <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient}/20 border border-white/10 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
//                                         <div className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
//                                             {product.icon}
//                                         </div>
//                                     </div>
//                                     <Badge className={`${getStatusBadge(product.status)} flex items-center gap-1.5 backdrop-blur-sm`}>
//                                         {product.statusIcon}
//                                         {product.statusText}
//                                     </Badge>
//                                 </div>

//                                 <CardTitle className="text-white text-2xl md:text-3xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                                     {product.name}
//                                 </CardTitle>

//                                 <CardDescription className="text-gray-300 text-lg bg-slate-900/30 p-4 rounded-lg border border-slate-700">
//                                     {product.description}
//                                 </CardDescription>
//                             </CardHeader>

//                             <CardContent className="space-y-6 pb-6">
//                                 {/* Deployment Status */}
//                                 <div className="p-4 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700">
//                                     <div className="flex items-center gap-3">
//                                         <Shield className="h-5 w-5 text-blue-400" />
//                                         <div>
//                                             <h4 className="text-white font-semibold mb-1 text-lg">Current Status</h4>
//                                             <p className="text-gray-300 text-sm">{product.deployment}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Key Features */}
//                                 <div>
//                                     <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-lg">
//                                         <Zap className="h-5 w-5 text-blue-400" />
//                                         Key Features
//                                     </h4>
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                                         {product.features.slice(0, 4).map((feature, index) => (
//                                             <div key={index} className="flex items-center gap-2 text-gray-300 p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
//                                                 <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
//                                                 <span className="text-sm">{feature}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Highlights */}
//                                 {product.highlights && (
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-3 text-lg">Highlights</h4>
//                                         <div className="space-y-2">
//                                             {product.highlights.map((highlight, index) => (
//                                                 <div key={index} className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
//                                                     <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${product.gradient} mt-2`} />
//                                                     <p className="text-gray-300 text-sm">{highlight}</p>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Technology Stack */}
//                                 {product.technologies && (
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-lg">
//                                             <Cpu className="h-5 w-5 text-blue-400" />
//                                             Technology Stack
//                                         </h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {product.technologies.map((tech, index) => (
//                                                 <span
//                                                     key={index}
//                                                     className="px-3 py-1.5 rounded-full bg-slate-900 text-gray-300 text-sm border border-slate-700 hover:border-blue-500 transition-colors"
//                                                 >
//                                                     {tech}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}
//                             </CardContent>

//                             <CardFooter className="pt-0">
//                                 <div className="w-full space-y-3">
//                                     {/* Primary CTA */}
//                                     {product.externalLink ? (
//                                         <a
//                                             href={product.externalLink}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="block"
//                                         >
//                                             <Button
//                                                 className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-6 text-lg transition-all duration-300`}
//                                             >
//                                                 {product.ctaText}
//                                                 <ExternalLink className="ml-2 h-4 w-4" />
//                                             </Button>
//                                         </a>
//                                     ) : (
//                                         <Link to={product.link}>
//                                             <Button
//                                                 className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-6 text-lg transition-all duration-300`}
//                                             >
//                                                 {product.ctaText}
//                                                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                                             </Button>
//                                         </Link>
//                                     )}

//                                     {/* Secondary CTA */}
//                                     {(product.demoLink || product.secondaryCtaText) && (
//                                         <Link to={product.demoLink || product.link}>
//                                             <Button
//                                                 variant="outline"
//                                                 className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6 hover:border-blue-300 hover:text-blue-300 transition-all duration-300"
//                                             >
//                                                 {product.secondaryCtaText}
//                                             </Button>
//                                         </Link>
//                                     )}
//                                 </div>
//                             </CardFooter>
//                         </Card>
//                     ))}
//                 </div>

//                 {/* Process Section */}
//                 <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                                 From Concept to Deployment
//                             </h2>
//                             <p className="text-gray-300 mb-8 text-lg">
//                                 Our product development process ensures we deliver high-quality, scalable solutions that meet real-world needs. Each product goes through rigorous planning, development, testing, and iteration.
//                             </p>

//                             <div className="space-y-4">
//                                 <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
//                                     <div className="p-3 rounded-lg bg-blue-500/20">
//                                         <BarChart className="h-6 w-6 text-blue-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1 text-lg">User-Centric Design</h4>
//                                         <p className="text-gray-300">We start by understanding user needs and pain points</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
//                                     <div className="p-3 rounded-lg bg-purple-500/20">
//                                         <Cpu className="h-6 w-6 text-purple-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1 text-lg">Agile Development</h4>
//                                         <p className="text-gray-300">Iterative development with regular feedback cycles</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
//                                     <div className="p-3 rounded-lg bg-green-500/20">
//                                         <Shield className="h-6 w-6 text-green-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1 text-lg">Quality Assurance</h4>
//                                         <p className="text-gray-300">Rigorous testing for performance, security, and usability</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
//                             <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Need a Custom Solution?</h3>
//                             <p className="text-gray-300 mb-8 text-lg">
//                                 Don't see exactly what you need? Our custom solutions team can build software tailored to your specific requirements, industry, and business processes.
//                             </p>

//                             <div className="space-y-4">
//                                 <Link to="/contact">
//                                     <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
//                                         Start Custom Project
//                                         <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                                     </Button>
//                                 </Link>

//                                 <Link to="/services">
//                                     <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6 hover:border-blue-300 hover:text-blue-300 transition-all duration-300">
//                                         Explore Our Services
//                                     </Button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <Footer />
//             </div>

//         </div>
//     );
// };

// export default ProductsPage;