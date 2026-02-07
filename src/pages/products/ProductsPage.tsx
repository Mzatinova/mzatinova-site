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
    BarChart
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
            name: 'EduSpace Portal',
            status: 'live',
            statusText: 'LIVE',
            statusIcon: <CheckCircle className="h-4 w-4" />,
            description: 'Comprehensive school management and parent portal system transforming educational administration.',
            longDescription: 'EduSpace Portal provides schools with a complete digital ecosystem for managing students, teachers, curriculum, and communication. Parents get real-time access to their children\'s academic progress, attendance, and school announcements.',
            features: [
                'Real-time grade & attendance tracking',
                'Parent-teacher communication portal',
                'Digital report cards & transcripts',
                'Mobile-responsive design',
                'Multi-school management capability',
                'Data analytics & insights'
            ],
            icon: <Code className="h-12 w-12" />,
            gradient: 'from-blue-500 to-cyan-500',
            link: '/products/eduspace',
            externalLink: 'https://eduspaceportal.edu',
            demoLink: '/demo/eduspace',
            ctaText: 'Request School Demo',
            secondaryCtaText: 'View Live Demo',
            deployment: 'Currently piloted at Primary Schools',
            highlights: [
                'Selected for EdTech@UNIMA 2026 Conference',
                'Active pilot program running',
                'Scalable for institutions of all sizes'
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
        },
        {
            id: 'store',
            name: 'Mzatinova Store',
            status: 'soon',
            statusText: 'COMING SOON',
            statusIcon: <Clock className="h-4 w-4" />,
            description: 'Modern e-commerce platform for electronics and tech products with cutting-edge retail technology.',
            longDescription: 'A comprehensive online marketplace offering electronics, gadgets, and tech accessories with seamless shopping experience, secure payments, and reliable delivery services.',
            features: [
                'Secure payment processing',
                'Inventory management system',
                'Order tracking & notifications',
                'Customer reviews & ratings',
                'Multi-vendor support',
                'Mobile shopping app'
            ],
            icon: <Smartphone className="h-12 w-12" />,
            gradient: 'from-purple-500 to-pink-500',
            link: '/products/store',
            externalLink: null,
            demoLink: null,
            ctaText: 'Notify Me at Launch',
            secondaryCtaText: 'View Roadmap',
            deployment: 'Development in progress - Launching Q3 2024',
            highlights: [
                'Beta testing starting April 2024',
                'Initial focus on electronics & gadgets',
                'Planned expansion to other categories'
            ],
            technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis']
        },
        {
            id: 'zanga',
            name: 'Zanga Social',
            status: 'development',
            statusText: 'IN DEVELOPMENT',
            statusIcon: <Wrench className="h-4 w-4" />,
            description: 'Community-focused social platform connecting people through shared interests and activities.',
            longDescription: 'Zanga Social brings communities together with features for social networking, group discussions, event planning, and content sharing in a safe, engaging environment.',
            features: [
                'Community groups & forums',
                'Live streaming capabilities',
                'Event creation & management',
                'Content sharing & discovery',
                'Private messaging',
                'Marketplace integration'
            ],
            icon: <Users className="h-12 w-12" />,
            gradient: 'from-teal-500 to-green-500',
            link: '/products/zanga',
            externalLink: null,
            demoLink: null,
            ctaText: 'Join Waitlist',
            secondaryCtaText: 'View Features',
            deployment: 'Early development phase',
            highlights: [
                'Focus on community building',
                'Privacy-first design approach',
                'Integration with existing platforms'
            ],
            technologies: ['React Native', 'GraphQL', 'Firebase', 'WebRTC']
        },
        {
            id: 'custom',
            name: 'Custom Solutions',
            status: 'available',
            statusText: 'AVAILABLE',
            statusIcon: <CheckCircle className="h-4 w-4" />,
            description: 'Tailored software development services for businesses across all industries.',
            longDescription: 'Our custom development team creates bespoke software solutions designed specifically for your business needs, processes, and goals. From concept to deployment, we deliver excellence.',
            features: [
                'Full-stack web applications',
                'Mobile app development',
                'API development & integration',
                'Legacy system modernization',
                'Cloud migration services',
                'Ongoing maintenance & support'
            ],
            icon: <Building className="h-12 w-12" />,
            gradient: 'from-orange-500 to-red-500',
            link: '/products/custom',
            externalLink: null,
            demoLink: '/portfolio',
            ctaText: 'Start a Project',
            secondaryCtaText: 'View Portfolio',
            deployment: 'Available immediately',
            highlights: [
                'Free initial consultation',
                'Flexible engagement models',
                'Industry-specific expertise'
            ],
            technologies: ['Full Technology Stack', 'AI/ML Integration', 'IoT Solutions', 'Blockchain']
        }
    ];

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
                {/* <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-4 mb-8 -mx-6 px-6 border-b border-slate-700 flex justify-center">
                    <div className="flex flex-wrap gap-3 justify-center">
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
                </div> */}

                {/* Filters Section */}
                <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-4 mb-8 border-b border-slate-700">
                    {/* Mobile Filter Toggle Button */}
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

                    {/* Desktop Filters - Horizontal */}
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

                    {/* Mobile Filters - Vertical (when toggled) */}
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

                {/* Page Header - Improved with Better Contrast */}
                {/* <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Product Portfolio</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        Explore our suite of software solutions, from live platforms to upcoming innovations and custom development services.
                    </p>
                </div> */}

                {/* Page Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
                        Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Product Portfolio</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our suite of software solutions, from live platforms to upcoming innovations and custom development services.
                    </p>
                </div>

                {/* Portfolio Badge */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-2.5 rounded-full border border-blue-500/30 backdrop-blur-sm">
                        <Zap className="h-5 w-5 text-blue-400 animate-pulse" />
                        <span className="text-sm font-medium text-blue-300">Featured Products</span>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {filteredProducts.map((product) => (
                        <Card
                            key={product.id}
                            className="bg-slate-800/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            {/* Product Header */}
                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient}/20 border border-white/10 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                                        <div className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                                            {product.icon}
                                        </div>
                                    </div>
                                    <Badge className={`${getStatusBadge(product.status)} flex items-center gap-1.5 backdrop-blur-sm`}>
                                        {product.statusIcon}
                                        {product.statusText}
                                    </Badge>
                                </div>

                                <CardTitle className="text-white text-2xl md:text-3xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    {product.name}
                                </CardTitle>

                                <CardDescription className="text-gray-300 text-lg bg-slate-900/30 p-4 rounded-lg border border-slate-700">
                                    {product.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-6 pb-6">
                                {/* Deployment Status */}
                                <div className="p-4 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700">
                                    <div className="flex items-center gap-3">
                                        <Shield className="h-5 w-5 text-blue-400" />
                                        <div>
                                            <h4 className="text-white font-semibold mb-1 text-lg">Current Status</h4>
                                            <p className="text-gray-300 text-sm">{product.deployment}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-lg">
                                        <Zap className="h-5 w-5 text-blue-400" />
                                        Key Features
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {product.features.slice(0, 4).map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2 text-gray-300 p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                                                <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Highlights */}
                                {product.highlights && (
                                    <div>
                                        <h4 className="text-white font-semibold mb-3 text-lg">Highlights</h4>
                                        <div className="space-y-2">
                                            {product.highlights.map((highlight, index) => (
                                                <div key={index} className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                                                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${product.gradient} mt-2`} />
                                                    <p className="text-gray-300 text-sm">{highlight}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Technology Stack */}
                                {product.technologies && (
                                    <div>
                                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-lg">
                                            <Cpu className="h-5 w-5 text-blue-400" />
                                            Technology Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 rounded-full bg-slate-900 text-gray-300 text-sm border border-slate-700 hover:border-blue-500 transition-colors"
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
                                    {(product.demoLink || product.secondaryCtaText) && (
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

                {/* Process Section */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                From Concept to Deployment
                            </h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                Our product development process ensures we deliver high-quality, scalable solutions that meet real-world needs. Each product goes through rigorous planning, development, testing, and iteration.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                                    <div className="p-3 rounded-lg bg-blue-500/20">
                                        <BarChart className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1 text-lg">User-Centric Design</h4>
                                        <p className="text-gray-300">We start by understanding user needs and pain points</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                                    <div className="p-3 rounded-lg bg-purple-500/20">
                                        <Cpu className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1 text-lg">Agile Development</h4>
                                        <p className="text-gray-300">Iterative development with regular feedback cycles</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                                    <div className="p-3 rounded-lg bg-green-500/20">
                                        <Shield className="h-6 w-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1 text-lg">Quality Assurance</h4>
                                        <p className="text-gray-300">Rigorous testing for performance, security, and usability</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
                            <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Need a Custom Solution?</h3>
                            <p className="text-gray-300 mb-8 text-lg">
                                Don't see exactly what you need? Our custom solutions team can build software tailored to your specific requirements, industry, and business processes.
                            </p>

                            <div className="space-y-4">
                                <Link to="/contact">
                                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                        Start Custom Project
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>

                                <Link to="/services">
                                    <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6 hover:border-blue-300 hover:text-blue-300 transition-all duration-300">
                                        Explore Our Services
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

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
//     BarChart
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const ProductsPage: React.FC = () => {
//     const [activeFilter, setActiveFilter] = useState<string>('all');

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
//             icon: <Code className="h-12 w-12" />,
//             gradient: 'from-blue-500 to-cyan-500',
//             link: '/products/eduspace',
//             externalLink: 'https://eduspaceportal.edu',
//             demoLink: '/demo/eduspace',
//             ctaText: 'Request School Demo',
//             secondaryCtaText: 'View Live Demo',
//             deployment: 'Currently piloted at Primary Schools',
//             highlights: [
//                 'Selected for EdTech@UNIMA 2026 Conference',
//                 'Active pilot program running',
//                 'Scalable for institutions of all sizes'
//             ],
//             technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
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
//         <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">

//                 {/* MOVED: Status Filters (Headings)
//                     Fixed sticky positioning just below the header (top-20 accounts for header height)
//                 */}
//                 <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-md py-4 mb-8 -mx-6 px-6 border-b border-white/10 flex justify-center">
//                     <div className="flex flex-wrap gap-3 justify-center">
//                         {filters.map((filter) => (
//                             <button
//                                 key={filter.id}
//                                 onClick={() => setActiveFilter(filter.id)}
//                                 className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${activeFilter === filter.id
//                                     ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
//                                     : 'border-white/20 text-gray-300 hover:border-blue-400 hover:text-white'
//                                     }`}
//                             >
//                                 {filter.label}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Page Header */}
//                 <div className="text-center mb-16">
//                     {/* Note: "Our Portfolio" removed from here */}

//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                         Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Products</span>
//                     </h1>
//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
//                         Explore our suite of software solutions, from live platforms to upcoming innovations and custom development services.
//                     </p>
//                 </div>

//                 {/* MOVED: "Our Portfolio" Label - Placed above Grid */}
//                 <div className="flex justify-center mb-8">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full border border-blue-500/20">
//                         <Zap className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Our Portfolio</span>
//                     </div>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
//                     {filteredProducts.map((product) => (
//                         <Card
//                             key={product.id}
//                             className="bg-gray-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm overflow-hidden group"
//                         >
//                             {/* Product Header */}
//                             <CardHeader className="pb-4">
//                                 <div className="flex items-start justify-between mb-6">
//                                     <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient}/10 border border-white/10 group-hover:scale-105 transition-transform duration-300`}>
//                                         <div className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
//                                             {product.icon}
//                                         </div>
//                                     </div>
//                                     <Badge className={`${getStatusBadge(product.status)} flex items-center gap-1.5`}>
//                                         {product.statusIcon}
//                                         {product.statusText}
//                                     </Badge>
//                                 </div>

//                                 <CardTitle className="text-white text-2xl md:text-3xl mb-3">
//                                     {product.name}
//                                 </CardTitle>

//                                 <CardDescription className="text-gray-300 text-lg">
//                                     {product.description}
//                                 </CardDescription>
//                             </CardHeader>

//                             <CardContent className="space-y-6 pb-6">
//                                 {/* Deployment Status */}
//                                 <div className="p-4 rounded-xl bg-white/5 border border-white/10">
//                                     <div className="flex items-center gap-3">
//                                         <Shield className="h-5 w-5 text-blue-400" />
//                                         <div>
//                                             <h4 className="text-white font-semibold mb-1">Current Status</h4>
//                                             <p className="text-gray-300 text-sm">{product.deployment}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Key Features */}
//                                 <div>
//                                     <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
//                                         <Zap className="h-4 w-4 text-blue-400" />
//                                         Key Features
//                                     </h4>
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                                         {product.features.slice(0, 4).map((feature, index) => (
//                                             <div key={index} className="flex items-center gap-2 text-gray-300">
//                                                 <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
//                                                 <span className="text-sm">{feature}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Highlights */}
//                                 {product.highlights && (
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-3">Highlights</h4>
//                                         <div className="space-y-2">
//                                             {product.highlights.map((highlight, index) => (
//                                                 <div key={index} className="flex items-start gap-2">
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
//                                         <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
//                                             <Cpu className="h-4 w-4 text-blue-400" />
//                                             Technology Stack
//                                         </h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {product.technologies.map((tech, index) => (
//                                                 <span
//                                                     key={index}
//                                                     className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10"
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
//                                                 className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white py-6 text-lg`}
//                                             >
//                                                 {product.ctaText}
//                                                 <ExternalLink className="ml-2 h-4 w-4" />
//                                             </Button>
//                                         </a>
//                                     ) : (
//                                         <Link to={product.link}>
//                                             <Button
//                                                 className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white py-6 text-lg`}
//                                             >
//                                                 {product.ctaText}
//                                                 <ArrowRight className="ml-2 h-4 w-4" />
//                                             </Button>
//                                         </Link>
//                                     )}

//                                     {/* Secondary CTA */}
//                                     {(product.demoLink || product.secondaryCtaText) && (
//                                         <Link to={product.demoLink || product.link}>
//                                             <Button
//                                                 variant="outline"
//                                                 className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6"
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
//                 <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold text-white mb-6">
//                                 From <span className="text-blue-400">Concept</span> to <span className="text-purple-400">Deployment</span>
//                             </h2>
//                             <p className="text-gray-300 mb-8">
//                                 Our product development process ensures we deliver high-quality, scalable solutions that meet real-world needs. Each product goes through rigorous planning, development, testing, and iteration.
//                             </p>

//                             <div className="space-y-4">
//                                 <div className="flex items-start gap-4">
//                                     <div className="p-2 rounded-lg bg-blue-500/10">
//                                         <BarChart className="h-5 w-5 text-blue-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1">User-Centric Design</h4>
//                                         <p className="text-gray-300 text-sm">We start by understanding user needs and pain points</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-4">
//                                     <div className="p-2 rounded-lg bg-purple-500/10">
//                                         <Cpu className="h-5 w-5 text-purple-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1">Agile Development</h4>
//                                         <p className="text-gray-300 text-sm">Iterative development with regular feedback cycles</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-4">
//                                     <div className="p-2 rounded-lg bg-green-500/10">
//                                         <Shield className="h-5 w-5 text-green-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1">Quality Assurance</h4>
//                                         <p className="text-gray-300 text-sm">Rigorous testing for performance, security, and usability</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-black/50 rounded-xl p-8 border border-white/10">
//                             <h3 className="text-2xl font-bold text-white mb-6">Need a Custom Solution?</h3>
//                             <p className="text-gray-300 mb-8">
//                                 Don't see exactly what you need? Our custom solutions team can build software tailored to your specific requirements, industry, and business processes.
//                             </p>

//                             <div className="space-y-4">
//                                 <Link to="/contact">
//                                     <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-6 text-lg">
//                                         Start Custom Project
//                                         <ArrowRight className="ml-2 h-4 w-4" />
//                                     </Button>
//                                 </Link>

//                                 <Link to="/services">
//                                     <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6">
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
//     BarChart
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';

// const ProductsPage: React.FC = () => {
//     const [activeFilter, setActiveFilter] = useState<string>('all');

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
//             icon: <Code className="h-12 w-12" />,
//             gradient: 'from-blue-500 to-cyan-500',
//             link: '/products/eduspace',
//             externalLink: 'https://eduspaceportal.edu',
//             demoLink: '/demo/eduspace',
//             ctaText: 'Request School Demo',
//             secondaryCtaText: 'View Live Demo',
//             deployment: 'Currently piloted at Primary Schools',
//             highlights: [
//                 'Selected for EdTech@UNIMA 2026 Conference',
//                 'Active pilot program running',
//                 'Scalable for institutions of all sizes'
//             ],
//             technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
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
//         <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">
//                 {/* Page Header */}
//                 <div className="text-center mb-16">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
//                         <Zap className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Our Portfolio</span>
//                     </div>
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                         Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Products</span>
//                     </h1>
//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
//                         Explore our suite of software solutions, from live platforms to upcoming innovations and custom development services.
//                     </p>

//                     {/* Status Filters */}
//                     <div className="flex flex-wrap gap-3 justify-center mb-12">
//                         {filters.map((filter) => (
//                             <button
//                                 key={filter.id}
//                                 onClick={() => setActiveFilter(filter.id)}
//                                 className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${activeFilter === filter.id
//                                     ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
//                                     : 'border-white/20 text-gray-300 hover:border-blue-400 hover:text-white'
//                                     }`}
//                             >
//                                 {filter.label}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
//                     {filteredProducts.map((product) => (
//                         <Card
//                             key={product.id}
//                             className="bg-gray-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm overflow-hidden group"
//                         >
//                             {/* Product Header */}
//                             <CardHeader className="pb-4">
//                                 <div className="flex items-start justify-between mb-6">
//                                     <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient}/10 border border-white/10 group-hover:scale-105 transition-transform duration-300`}>
//                                         <div className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
//                                             {product.icon}
//                                         </div>
//                                     </div>
//                                     <Badge className={`${getStatusBadge(product.status)} flex items-center gap-1.5`}>
//                                         {product.statusIcon}
//                                         {product.statusText}
//                                     </Badge>
//                                 </div>

//                                 <CardTitle className="text-white text-2xl md:text-3xl mb-3">
//                                     {product.name}
//                                 </CardTitle>

//                                 <CardDescription className="text-gray-300 text-lg">
//                                     {product.description}
//                                 </CardDescription>
//                             </CardHeader>

//                             <CardContent className="space-y-6 pb-6">
//                                 {/* Deployment Status */}
//                                 <div className="p-4 rounded-xl bg-white/5 border border-white/10">
//                                     <div className="flex items-center gap-3">
//                                         <Shield className="h-5 w-5 text-blue-400" />
//                                         <div>
//                                             <h4 className="text-white font-semibold mb-1">Current Status</h4>
//                                             <p className="text-gray-300 text-sm">{product.deployment}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Key Features */}
//                                 <div>
//                                     <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
//                                         <Zap className="h-4 w-4 text-blue-400" />
//                                         Key Features
//                                     </h4>
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                                         {product.features.slice(0, 4).map((feature, index) => (
//                                             <div key={index} className="flex items-center gap-2 text-gray-300">
//                                                 <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
//                                                 <span className="text-sm">{feature}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Highlights */}
//                                 {product.highlights && (
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-3">Highlights</h4>
//                                         <div className="space-y-2">
//                                             {product.highlights.map((highlight, index) => (
//                                                 <div key={index} className="flex items-start gap-2">
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
//                                         <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
//                                             <Cpu className="h-4 w-4 text-blue-400" />
//                                             Technology Stack
//                                         </h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {product.technologies.map((tech, index) => (
//                                                 <span
//                                                     key={index}
//                                                     className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10"
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
//                                                 className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white py-6 text-lg`}
//                                             >
//                                                 {product.ctaText}
//                                                 <ExternalLink className="ml-2 h-4 w-4" />
//                                             </Button>
//                                         </a>
//                                     ) : (
//                                         <Link to={product.link}>
//                                             <Button
//                                                 className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white py-6 text-lg`}
//                                             >
//                                                 {product.ctaText}
//                                                 <ArrowRight className="ml-2 h-4 w-4" />
//                                             </Button>
//                                         </Link>
//                                     )}

//                                     {/* Secondary CTA */}
//                                     {(product.demoLink || product.secondaryCtaText) && (
//                                         <Link to={product.demoLink || product.link}>
//                                             <Button
//                                                 variant="outline"
//                                                 className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6"
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
//                 <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold text-white mb-6">
//                                 From <span className="text-blue-400">Concept</span> to <span className="text-purple-400">Deployment</span>
//                             </h2>
//                             <p className="text-gray-300 mb-8">
//                                 Our product development process ensures we deliver high-quality, scalable solutions that meet real-world needs. Each product goes through rigorous planning, development, testing, and iteration.
//                             </p>

//                             <div className="space-y-4">
//                                 <div className="flex items-start gap-4">
//                                     <div className="p-2 rounded-lg bg-blue-500/10">
//                                         <BarChart className="h-5 w-5 text-blue-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1">User-Centric Design</h4>
//                                         <p className="text-gray-300 text-sm">We start by understanding user needs and pain points</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-4">
//                                     <div className="p-2 rounded-lg bg-purple-500/10">
//                                         <Cpu className="h-5 w-5 text-purple-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1">Agile Development</h4>
//                                         <p className="text-gray-300 text-sm">Iterative development with regular feedback cycles</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-4">
//                                     <div className="p-2 rounded-lg bg-green-500/10">
//                                         <Shield className="h-5 w-5 text-green-400" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-1">Quality Assurance</h4>
//                                         <p className="text-gray-300 text-sm">Rigorous testing for performance, security, and usability</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-black/50 rounded-xl p-8 border border-white/10">
//                             <h3 className="text-2xl font-bold text-white mb-6">Need a Custom Solution?</h3>
//                             <p className="text-gray-300 mb-8">
//                                 Don't see exactly what you need? Our custom solutions team can build software tailored to your specific requirements, industry, and business processes.
//                             </p>

//                             <div className="space-y-4">
//                                 <Link to="/contact">
//                                     <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-6 text-lg">
//                                         Start Custom Project
//                                         <ArrowRight className="ml-2 h-4 w-4" />
//                                     </Button>
//                                 </Link>

//                                 <Link to="/services">
//                                     <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 py-6">
//                                         Explore Our Services
//                                     </Button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductsPage;