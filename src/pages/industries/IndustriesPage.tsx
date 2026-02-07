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
    GraduationCap,
    Heart,
    DollarSign,
    Sprout,
    ShoppingCart,
    Brain,
    Building,
    Shield,
    TrendingUp,
    Users,
    Cpu,
    Database,
    Cloud,
    Smartphone,
    CheckCircle,
    ArrowRight,
    ExternalLink,
    Zap,
    Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const IndustriesPage: React.FC = () => {
    const [activeIndustry, setActiveIndustry] = useState<string>('education');

    const industries = [
        {
            id: 'education',
            name: 'Education',
            website: 'https://www.eduspace.mzatinova.com',
            websiteName: 'Mzatinova EduSpace',
            websiteStatus: 'live',
            icon: <GraduationCap className="h-12 w-12" />,
            color: 'from-blue-500 to-cyan-500',
            gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
            overview: 'Transforming learning experiences through innovative technology solutions that enhance teaching, learning, and administration.',
            description: 'In the digital age, educational institutions face challenges in delivering engaging content, managing administrative tasks, and ensuring equitable access. We provide comprehensive EdTech solutions that address these needs.',
            challenges: [
                'Limited access to quality educational resources',
                'Inefficient administrative processes',
                'Lack of parental engagement',
                'Difficulty tracking student progress',
                'Limited digital literacy among educators'
            ],
            solutions: [
                {
                    name: 'EduSpace Portal',
                    description: 'Complete school management and parent engagement platform',
                    icon: <Database className="h-5 w-5" />,
                    status: 'live',
                    link: 'https://portal.mzatinova.com'
                },
                {
                    name: 'Learning Management Systems',
                    description: 'Custom LMS platforms for institutions',
                    icon: <Cloud className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/development'
                },
                {
                    name: 'Virtual Classroom Solutions',
                    description: 'Interactive online learning environments',
                    icon: <Users className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/ecommerce'
                },
                {
                    name: 'Student Analytics Platform',
                    description: 'Data-driven insights for educational improvement',
                    icon: <TrendingUp className="h-5 w-5" />,
                    status: 'development',
                    link: '/services/ai-solutions'
                }
            ],
            caseStudy: {
                title: 'Digital Transformation in Malawian Schools',
                description: 'Implemented EduSpace Portal in primary schools, resulting in 40% reduction in administrative workload and 60% increase in parental engagement.',
                metrics: [
                    { label: 'Schools Served', value: '50+' },
                    { label: 'Parent Engagement', value: '↑ 60%' },
                    { label: 'Admin Time Saved', value: '40%' }
                ]
            },
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'REST APIs'],
            cta: 'Discuss Education Solutions'
        },
        {
            id: 'health',
            name: 'Healthcare',
            website: 'https://healthcare-example.com',
            websiteName: 'Mzatinova HealthHub',
            websiteStatus: 'planned',
            icon: <Heart className="h-12 w-12" />,
            color: 'from-red-500 to-pink-500',
            gradient: 'bg-gradient-to-r from-red-500 to-pink-500',
            overview: 'Improving healthcare delivery through technology that enhances patient care, streamlines operations, and enables telemedicine.',
            description: 'Healthcare providers need efficient systems for patient management, medical records, and remote consultations. Our solutions bridge the gap between medical expertise and technological innovation.',
            challenges: [
                'Fragmented patient data management',
                'Limited telemedicine capabilities',
                'Inefficient appointment scheduling',
                'Poor patient engagement',
                'High operational costs'
            ],
            solutions: [
                {
                    name: 'Hospital Management Systems',
                    description: 'Integrated platforms for healthcare facilities',
                    icon: <Building className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/development'
                },
                {
                    name: 'Telemedicine Platforms',
                    description: 'Remote consultation and diagnosis systems',
                    icon: <Smartphone className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/development'
                },
                {
                    name: 'Medical Record Digitization',
                    description: 'Secure electronic health records',
                    icon: <Database className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/development'
                },
                {
                    name: 'AI Diagnostic Tools',
                    description: 'Machine learning for medical imaging',
                    icon: <Brain className="h-5 w-5" />,
                    status: 'development',
                    link: '/services/ai-solutions'
                }
            ],
            caseStudy: {
                title: 'Telemedicine Platform for Rural Clinics',
                description: 'Developed a telemedicine solution connecting rural clinics with specialists, reducing patient travel time by 70% and improving diagnosis accuracy.',
                metrics: [
                    { label: 'Clinics Connected', value: '25+' },
                    { label: 'Travel Time Saved', value: '↓ 70%' },
                    { label: 'Patient Satisfaction', value: '↑ 85%' }
                ]
            },
            technologies: ['React Native', 'WebRTC', 'HIPAA Compliance', 'PostgreSQL', 'AWS'],
            cta: 'Discuss Healthcare Solutions'
        },
        {
            id: 'finance',
            name: 'Finance',
            website: 'https://finance-example.com',
            websiteName: 'Mzatinova FinanceHub',
            websiteStatus: 'planned',
            icon: <DollarSign className="h-12 w-12" />,
            color: 'from-yellow-500 to-orange-500',
            gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500',
            overview: 'Empowering financial institutions with secure, scalable technology solutions for the digital economy.',
            description: 'Banks, fintech companies, and financial institutions need robust, secure systems for transactions, customer management, and regulatory compliance in an increasingly digital world.',
            challenges: [
                'Security and fraud prevention',
                'Legacy system modernization',
                'Mobile banking expectations',
                'Regulatory compliance',
                'Customer experience improvement'
            ],
            solutions: [
                {
                    name: 'Mobile Banking Apps',
                    description: 'Secure mobile banking solutions',
                    icon: <Smartphone className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/development'
                },
                {
                    name: 'Payment Processing Systems',
                    description: 'Secure transaction platforms',
                    icon: <DollarSign className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/development'
                },
                {
                    name: 'Fraud Detection Systems',
                    description: 'AI-powered security solutions',
                    icon: <Shield className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/ai-solutions'
                },
                {
                    name: 'Investment Platforms',
                    description: 'Digital investment management',
                    icon: <TrendingUp className="h-5 w-5" />,
                    status: 'development',
                    link: '/services/development'
                }
            ],
            caseStudy: {
                title: 'Mobile Banking Platform for Regional Bank',
                description: 'Built a secure mobile banking platform serving 100,000+ customers with 99.9% uptime and zero security breaches in 2 years.',
                metrics: [
                    { label: 'Active Users', value: '100K+' },
                    { label: 'System Uptime', value: '99.9%' },
                    { label: 'Transaction Volume', value: '$50M+' }
                ]
            },
            technologies: ['React', 'Node.js', 'Blockchain', 'PCI Compliance', 'Microservices'],
            cta: 'Discuss Finance Solutions'
        },
        {
            id: 'agriculture',
            name: 'Agriculture',
            website: 'https://agriculture-example.com',
            websiteName: 'Mzatinova AgriHub',
            websiteStatus: 'planned',
            icon: <Sprout className="h-12 w-12" />,
            color: 'from-green-500 to-emerald-500',
            gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
            overview: 'Modernizing agriculture through technology that improves yields, optimizes resources, and connects farmers to markets.',
            description: 'Farmers and agricultural businesses need tools for crop management, supply chain optimization, and market access to improve productivity and profitability.',
            challenges: [
                'Crop yield optimization',
                'Supply chain inefficiencies',
                'Market access limitations',
                'Resource management',
                'Climate change adaptation'
            ],
            solutions: [
                {
                    name: 'Farm Management Software',
                    description: 'Crop planning and resource management',
                    icon: <Sprout className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/development'
                },
                {
                    name: 'Supply Chain Platforms',
                    description: 'Agricultural logistics and tracking',
                    icon: <TrendingUp className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/development'
                },
                {
                    name: 'Marketplace Platforms',
                    description: 'Direct farmer-to-market connections',
                    icon: <ShoppingCart className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/ecommerce'
                },
                {
                    name: 'IoT Monitoring Systems',
                    description: 'Sensor-based crop monitoring',
                    icon: <Cpu className="h-5 w-5" />,
                    status: 'development',
                    link: '/services/ai-solutions'
                }
            ],
            caseStudy: {
                title: 'Digital Marketplace for Smallholder Farmers',
                description: 'Created an online platform connecting 5,000+ farmers directly with buyers, increasing farmer income by 35% and reducing food waste.',
                metrics: [
                    { label: 'Farmers Connected', value: '5,000+' },
                    { label: 'Income Increase', value: '↑ 35%' },
                    { label: 'Food Waste Reduction', value: '↓ 40%' }
                ]
            },
            technologies: ['React', 'Python', 'IoT Integration', 'Mobile Apps', 'Cloud'],
            cta: 'Discuss Agriculture Solutions'
        },
        {
            id: 'retail',
            name: 'Store',
            website: 'https://www.smartfielectronics.com',
            websiteName: 'Mzatinova Store',
            websiteStatus: 'live',
            icon: <ShoppingCart className="h-12 w-12" />,
            color: 'from-purple-500 to-violet-500',
            gradient: 'bg-gradient-to-r from-purple-500 to-violet-500',
            overview: 'Transforming retail experiences through e-commerce, inventory management, and customer engagement solutions.',
            description: 'Retail businesses need to adapt to digital shopping trends while maintaining efficient operations and engaging customers across multiple channels.',
            challenges: [
                'Digital transformation',
                'Inventory management',
                'Customer retention',
                'Multi-channel sales',
                'Data-driven decisions'
            ],
            solutions: [
                {
                    name: 'Smartfielectronics',
                    description: 'E-commerce platform for electronics retail',
                    icon: <ShoppingCart className="h-5 w-5" />,
                    status: 'live',
                    link: 'https://www.smartfielectronics.com'
                },
                {
                    name: 'Inventory Management Systems',
                    description: 'Real-time stock and order management',
                    icon: <Database className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/development'
                },
                {
                    name: 'Customer Analytics',
                    description: 'Data insights for personalized marketing',
                    icon: <TrendingUp className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/ai-solutions'
                },
                {
                    name: 'POS Integration',
                    description: 'Unified point-of-sale systems',
                    icon: <DollarSign className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/integration'
                }
            ],
            caseStudy: {
                title: 'E-commerce Platform for Electronics Retailer',
                description: 'Developing Mzatinova Store - an end-to-end e-commerce solution for electronics with integrated payment, inventory, and delivery systems.',
                metrics: [
                    { label: 'Product Categories', value: '10+' },
                    { label: 'Expected Users', value: '50K+' },
                    { label: 'Launch Date', value: 'Q3 2024' }
                ]
            },
            technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
            cta: 'Discuss Retail Solutions'
        },
        {
            id: 'ai-research',
            name: 'AI & Research',
            website: 'https://research-example.com',
            websiteName: 'Mzatinova Labs', // Perfect as is
            icon: <Brain className="h-12 w-12" />,
            color: 'from-teal-500 to-cyan-500',
            gradient: 'bg-gradient-to-r from-teal-500 to-cyan-500',
            overview: 'Pushing technological boundaries through artificial intelligence research and innovative solution development.',
            description: 'Organizations need cutting-edge AI solutions and research capabilities to solve complex problems and gain competitive advantages in their industries.',
            challenges: [
                'Data processing and analysis',
                'Predictive modeling',
                'Automation of complex tasks',
                'Research scalability',
                'Innovation implementation'
            ],
            solutions: [
                {
                    name: 'Mzatinova Labs',
                    description: 'Our R&D division for technological innovation',
                    icon: <Brain className="h-5 w-5" />,
                    status: 'available',
                    link: '/industries/ai-research#labs'
                },
                {
                    name: 'AI Consulting Services',
                    description: 'Expert guidance on AI implementation',
                    icon: <Users className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/consultation'
                },
                {
                    name: 'Machine Learning Models',
                    description: 'Custom ML solutions for specific needs',
                    icon: <Cpu className="h-5 w-5" />,
                    status: 'available',
                    link: '/services/ai-solutions'
                },
                {
                    name: 'Research Partnerships',
                    description: 'Collaborative innovation projects',
                    icon: <Target className="h-5 w-5" />,
                    status: 'available',
                    link: '/company#partnerships'
                }
            ],
            caseStudy: {
                title: 'AI Research for Healthcare Diagnostics',
                description: 'Partnered with medical institutions to develop AI models for early disease detection, achieving 95% accuracy in preliminary trials.',
                metrics: [
                    { label: 'Research Projects', value: '15+' },
                    { label: 'Model Accuracy', value: '95%' },
                    { label: 'Industry Partners', value: '8' }
                ]
            },
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'Cloud AI', 'Big Data'],
            cta: 'Discuss AI & Research Solutions'
        }
    ];

    const activeIndustryData = industries.find(ind => ind.id === activeIndustry) || industries[0];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'live':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'soon':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'available':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'development':
                return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
            <Header />
            <div className="container mx-auto px-6">

                {/* Industry Navigation Tabs */}
                <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-6 mb-8 -mx-6 px-6 border-b border-slate-700">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
                            {industries.map((industry) => (
                                <button
                                    key={industry.id}
                                    onClick={() => setActiveIndustry(industry.id)}
                                    className={`flex flex-col items-center justify-center py-4 px-3 rounded-xl transition-all duration-300 ${activeIndustry === industry.id
                                        ? `${industry.gradient} text-white shadow-lg transform scale-105`
                                        : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:scale-102'
                                        }`}
                                >
                                    <div className={`p-3 rounded-lg ${activeIndustry === industry.id ? 'bg-white/20' : 'bg-slate-800/50'} mb-2`}>
                                        {React.cloneElement(industry.icon, { className: 'h-6 w-6' })}
                                    </div>
                                    <span className="text-sm font-medium mt-1">{industry.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Software Solutions for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Every Sector</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-2.5 rounded-full mb-8 border border-blue-500/30 backdrop-blur-sm">
                        <Building className="h-5 w-5 text-blue-400" />
                        <span className="text-sm font-medium text-blue-300">Industry Expertise</span>
                    </div>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Specialized technology solutions tailored to the unique needs of different industries, driving innovation and growth.
                    </p>
                </div>

                {/* Industry Content */}
                <div className="mb-12">
                    {industries.map((industry) => (
                        <div
                            key={industry.id}
                            className={activeIndustry === industry.id ? 'block' : 'hidden'}
                        >
                            <div className="mt-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
                                {/* Industry Header */}
                                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                                    <div className="lg:w-2/3">
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className={`p-5 rounded-2xl ${industry.gradient}/20 border border-white/10 shadow-lg`}>
                                                {React.cloneElement(industry.icon, { className: 'h-10 w-10' })}
                                            </div>
                                            <div>
                                                <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                                    {industry.name} Technology Solutions
                                                </h2>
                                                <p className="text-gray-300 text-lg mt-3">{industry.overview}</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
                                            <h3 className="text-white font-semibold mb-4 text-xl">Industry Overview</h3>
                                            <p className="text-gray-300 text-lg leading-relaxed">{industry.description}</p>


                                            {/* Add this section for the website link */}
                                            {/* <div className="mt-6 pt-6 border-t border-slate-700">
                                                {industry.website && !industry.website.includes('example.com') ? (
                                                    <a
                                                        href={industry.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Visit {industry.websiteName}
                                                    </a>
                                                ) : (
                                                    <div className="inline-flex items-center gap-2 text-gray-400">
                                                        <span className="h-4 w-4">🔧</span>
                                                        {industry.websiteName} - Coming Soon!
                                                    </div>
                                                )}
                                            </div> */}


                                        </div>
                                    </div>
                                    <div className="lg:w-1/3">
                                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg">
                                            <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-2">
                                                <Shield className="h-5 w-5 text-blue-400" />
                                                Quick Facts
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                                                    <span className="text-gray-300">Solutions Available</span>
                                                    <span className="text-white font-bold text-lg">{industry.solutions.length}</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                                                    <span className="text-gray-300">Technology Stack</span>
                                                    <span className="text-white font-bold text-lg">{industry.technologies.length}+</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                                                    <span className="text-gray-300">Implementation Time</span>
                                                    <span className="text-white font-bold text-lg">4-12 weeks</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Challenges & Solutions */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                    {/* Challenges */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                            <Shield className="h-7 w-7 text-blue-400" />
                                            Industry Challenges
                                        </h3>
                                        <div className="space-y-3">
                                            {industry.challenges.map((challenge, index) => (
                                                <div key={index} className="flex items-start gap-4 p-5 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
                                                    <div className={`h-3 w-3 rounded-full mt-2 ${industry.gradient}`} />
                                                    <span className="text-gray-300 text-lg">{challenge}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Solutions */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                            <Zap className="h-7 w-7 text-green-400 animate-pulse" />
                                            Our Solutions
                                        </h3>
                                        <div className="space-y-4">
                                            {industry.solutions.map((solution, index) => (
                                                <div
                                                    key={index}
                                                    className="p-5 rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/40 transition-all duration-300 group hover:shadow-lg"
                                                >
                                                    <div className="flex items-start justify-between mb-3">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`p-3 rounded-lg ${industry.gradient}/20`}>
                                                                {solution.icon}
                                                            </div>
                                                            <div>
                                                                <h4 className="text-white font-bold text-lg">{solution.name}</h4>
                                                                <p className="text-gray-300 text-sm mt-1">{solution.description}</p>
                                                            </div>
                                                        </div>
                                                        <Badge className={`${getStatusBadge(solution.status)} backdrop-blur-sm`}>
                                                            {solution.link && solution.link.startsWith('http') ? solution.status.toUpperCase() : 'COMING SOON'}
                                                        </Badge>
                                                    </div>
                                                    {/* <Link to={solution.link}>
                                                        <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 text-sm p-0 h-auto group-hover:translate-x-1 transition-transform">
                                                            Learn More
                                                            <ArrowRight className="ml-2 h-4 w-4" />
                                                        </Button>
                                                    </Link> */}
                                                    {solution.link && solution.link.startsWith('http') ? (
                                                        <a
                                                            href={solution.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline text-sm"
                                                        >
                                                            <ExternalLink className="h-4 w-4" />
                                                            See More
                                                        </a>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-2 text-gray-400 text-sm">
                                                            <span className="h-4 w-4">⏳</span>
                                                            Coming Soon
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Case Study & Technologies */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Case Study */}
                                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/20 shadow-lg">
                                        <div className="flex items-center gap-3 mb-6">
                                            <CheckCircle className="h-6 w-6 text-green-400" />
                                            <h3 className="text-xl font-bold text-white">Case Study</h3>
                                        </div>
                                        <h4 className="text-white font-bold text-xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                            {industry.caseStudy.title}
                                        </h4>
                                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">{industry.caseStudy.description}</p>

                                        <div className="grid grid-cols-3 gap-4">
                                            {industry.caseStudy.metrics.map((metric, index) => (
                                                <div key={index} className="text-center p-4 rounded-lg bg-slate-900/50 border border-slate-700">
                                                    <div className={`text-2xl font-bold mb-2 ${industry.gradient} bg-clip-text text-transparent`}>
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-sm text-gray-300 font-medium">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {industry.technologies.map((tech, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="outline"
                                                    className="border-slate-600 text-gray-300 hover:border-blue-500 hover:text-white px-4 py-2 text-sm font-medium backdrop-blur-sm"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-8">
                                            <Link to="/contact">
                                                <Button className={`w-full ${industry.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white py-6 text-lg font-bold transition-all duration-300`}>
                                                    {industry.cta}
                                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cross-Industry Solutions */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Cross-Industry Capabilities
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            While each industry has unique needs, many of our solutions leverage shared technologies and methodologies across sectors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg">
                            <div className="p-4 rounded-lg bg-blue-500/20 w-fit mb-5">
                                <Database className="h-7 w-7 text-blue-400" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-4">Data Analytics</h3>
                            <p className="text-gray-300">
                                Extract actionable insights from your data across all business functions with advanced analytics tools.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg">
                            <div className="p-4 rounded-lg bg-purple-500/20 w-fit mb-5">
                                <Cloud className="h-7 w-7 text-purple-400" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-4">Cloud Integration</h3>
                            <p className="text-gray-300">
                                Scalable cloud solutions for businesses of all sizes across industries with enterprise-grade security.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg">
                            <div className="p-4 rounded-lg bg-green-500/20 w-fit mb-5">
                                <Smartphone className="h-7 w-7 text-green-400" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-4">Mobile-First</h3>
                            <p className="text-gray-300">
                                Responsive mobile solutions for on-the-go access to your systems with native app performance.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link to="/services">
                            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-10 py-6 text-lg font-medium">
                                Explore All Services
                                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    );
};

export default IndustriesPage;

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
//     GraduationCap,
//     Heart,
//     DollarSign,
//     Sprout,
//     ShoppingCart,
//     Brain,
//     Building,
//     Shield,
//     TrendingUp,
//     Users,
//     Cpu,
//     Database,
//     Cloud,
//     Smartphone,
//     CheckCircle,
//     ArrowRight,
//     ExternalLink,
//     Zap,
//     Target
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const IndustriesPage: React.FC = () => {
//     const [activeIndustry, setActiveIndustry] = useState<string>('education');

//     const industries = [
//         {
//             id: 'education',
//             name: 'Education',
//             icon: <GraduationCap className="h-12 w-12" />,
//             color: 'from-blue-500 to-cyan-500',
//             gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
//             overview: 'Transforming learning experiences through innovative technology solutions that enhance teaching, learning, and administration.',
//             description: 'In the digital age, educational institutions face challenges in delivering engaging content, managing administrative tasks, and ensuring equitable access. We provide comprehensive EdTech solutions that address these needs.',
//             challenges: [
//                 'Limited access to quality educational resources',
//                 'Inefficient administrative processes',
//                 'Lack of parental engagement',
//                 'Difficulty tracking student progress',
//                 'Limited digital literacy among educators'
//             ],
//             solutions: [
//                 {
//                     name: 'EduSpace Portal',
//                     description: 'Complete school management and parent engagement platform',
//                     icon: <Database className="h-5 w-5" />,
//                     status: 'live',
//                     link: '/products/eduspace'
//                 },
//                 {
//                     name: 'Learning Management Systems',
//                     description: 'Custom LMS platforms for institutions',
//                     icon: <Cloud className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Virtual Classroom Solutions',
//                     description: 'Interactive online learning environments',
//                     icon: <Users className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ecommerce'
//                 },
//                 {
//                     name: 'Student Analytics Platform',
//                     description: 'Data-driven insights for educational improvement',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/ai-solutions'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Digital Transformation in Malawian Schools',
//                 description: 'Implemented EduSpace Portal in primary schools, resulting in 40% reduction in administrative workload and 60% increase in parental engagement.',
//                 metrics: [
//                     { label: 'Schools Served', value: '50+' },
//                     { label: 'Parent Engagement', value: '↑ 60%' },
//                     { label: 'Admin Time Saved', value: '40%' }
//                 ]
//             },
//             technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'REST APIs'],
//             cta: 'Discuss Education Solutions'
//         },
//         {
//             id: 'health',
//             name: 'Healthcare',
//             icon: <Heart className="h-12 w-12" />,
//             color: 'from-red-500 to-pink-500',
//             gradient: 'bg-gradient-to-r from-red-500 to-pink-500',
//             overview: 'Improving healthcare delivery through technology that enhances patient care, streamlines operations, and enables telemedicine.',
//             description: 'Healthcare providers need efficient systems for patient management, medical records, and remote consultations. Our solutions bridge the gap between medical expertise and technological innovation.',
//             challenges: [
//                 'Fragmented patient data management',
//                 'Limited telemedicine capabilities',
//                 'Inefficient appointment scheduling',
//                 'Poor patient engagement',
//                 'High operational costs'
//             ],
//             solutions: [
//                 {
//                     name: 'Hospital Management Systems',
//                     description: 'Integrated platforms for healthcare facilities',
//                     icon: <Building className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Telemedicine Platforms',
//                     description: 'Remote consultation and diagnosis systems',
//                     icon: <Smartphone className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Medical Record Digitization',
//                     description: 'Secure electronic health records',
//                     icon: <Database className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'AI Diagnostic Tools',
//                     description: 'Machine learning for medical imaging',
//                     icon: <Brain className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/ai-solutions'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Telemedicine Platform for Rural Clinics',
//                 description: 'Developed a telemedicine solution connecting rural clinics with specialists, reducing patient travel time by 70% and improving diagnosis accuracy.',
//                 metrics: [
//                     { label: 'Clinics Connected', value: '25+' },
//                     { label: 'Travel Time Saved', value: '↓ 70%' },
//                     { label: 'Patient Satisfaction', value: '↑ 85%' }
//                 ]
//             },
//             technologies: ['React Native', 'WebRTC', 'HIPAA Compliance', 'PostgreSQL', 'AWS'],
//             cta: 'Discuss Healthcare Solutions'
//         },
//         {
//             id: 'finance',
//             name: 'Finance',
//             icon: <DollarSign className="h-12 w-12" />,
//             color: 'from-yellow-500 to-orange-500',
//             gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500',
//             overview: 'Empowering financial institutions with secure, scalable technology solutions for the digital economy.',
//             description: 'Banks, fintech companies, and financial institutions need robust, secure systems for transactions, customer management, and regulatory compliance in an increasingly digital world.',
//             challenges: [
//                 'Security and fraud prevention',
//                 'Legacy system modernization',
//                 'Mobile banking expectations',
//                 'Regulatory compliance',
//                 'Customer experience improvement'
//             ],
//             solutions: [
//                 {
//                     name: 'Mobile Banking Apps',
//                     description: 'Secure mobile banking solutions',
//                     icon: <Smartphone className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Payment Processing Systems',
//                     description: 'Secure transaction platforms',
//                     icon: <DollarSign className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Fraud Detection Systems',
//                     description: 'AI-powered security solutions',
//                     icon: <Shield className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ai-solutions'
//                 },
//                 {
//                     name: 'Investment Platforms',
//                     description: 'Digital investment management',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/development'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Mobile Banking Platform for Regional Bank',
//                 description: 'Built a secure mobile banking platform serving 100,000+ customers with 99.9% uptime and zero security breaches in 2 years.',
//                 metrics: [
//                     { label: 'Active Users', value: '100K+' },
//                     { label: 'System Uptime', value: '99.9%' },
//                     { label: 'Transaction Volume', value: '$50M+' }
//                 ]
//             },
//             technologies: ['React', 'Node.js', 'Blockchain', 'PCI Compliance', 'Microservices'],
//             cta: 'Discuss Finance Solutions'
//         },
//         {
//             id: 'agriculture',
//             name: 'Agriculture',
//             icon: <Sprout className="h-12 w-12" />,
//             color: 'from-green-500 to-emerald-500',
//             gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
//             overview: 'Modernizing agriculture through technology that improves yields, optimizes resources, and connects farmers to markets.',
//             description: 'Farmers and agricultural businesses need tools for crop management, supply chain optimization, and market access to improve productivity and profitability.',
//             challenges: [
//                 'Crop yield optimization',
//                 'Supply chain inefficiencies',
//                 'Market access limitations',
//                 'Resource management',
//                 'Climate change adaptation'
//             ],
//             solutions: [
//                 {
//                     name: 'Farm Management Software',
//                     description: 'Crop planning and resource management',
//                     icon: <Sprout className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Supply Chain Platforms',
//                     description: 'Agricultural logistics and tracking',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Marketplace Platforms',
//                     description: 'Direct farmer-to-market connections',
//                     icon: <ShoppingCart className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ecommerce'
//                 },
//                 {
//                     name: 'IoT Monitoring Systems',
//                     description: 'Sensor-based crop monitoring',
//                     icon: <Cpu className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/ai-solutions'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Digital Marketplace for Smallholder Farmers',
//                 description: 'Created an online platform connecting 5,000+ farmers directly with buyers, increasing farmer income by 35% and reducing food waste.',
//                 metrics: [
//                     { label: 'Farmers Connected', value: '5,000+' },
//                     { label: 'Income Increase', value: '↑ 35%' },
//                     { label: 'Food Waste Reduction', value: '↓ 40%' }
//                 ]
//             },
//             technologies: ['React', 'Python', 'IoT Integration', 'Mobile Apps', 'Cloud'],
//             cta: 'Discuss Agriculture Solutions'
//         },
//         {
//             id: 'retail',
//             name: 'Retail',
//             icon: <ShoppingCart className="h-12 w-12" />,
//             color: 'from-purple-500 to-violet-500',
//             gradient: 'bg-gradient-to-r from-purple-500 to-violet-500',
//             overview: 'Transforming retail experiences through e-commerce, inventory management, and customer engagement solutions.',
//             description: 'Retail businesses need to adapt to digital shopping trends while maintaining efficient operations and engaging customers across multiple channels.',
//             challenges: [
//                 'Digital transformation',
//                 'Inventory management',
//                 'Customer retention',
//                 'Multi-channel sales',
//                 'Data-driven decisions'
//             ],
//             solutions: [
//                 {
//                     name: 'Mzatinova Store',
//                     description: 'E-commerce platform for electronics retail',
//                     icon: <ShoppingCart className="h-5 w-5" />,
//                     status: 'soon',
//                     link: '/products/store'
//                 },
//                 {
//                     name: 'Inventory Management Systems',
//                     description: 'Real-time stock and order management',
//                     icon: <Database className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Customer Analytics',
//                     description: 'Data insights for personalized marketing',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ai-solutions'
//                 },
//                 {
//                     name: 'POS Integration',
//                     description: 'Unified point-of-sale systems',
//                     icon: <DollarSign className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/integration'
//                 }
//             ],
//             caseStudy: {
//                 title: 'E-commerce Platform for Electronics Retailer',
//                 description: 'Developing Mzatinova Store - an end-to-end e-commerce solution for electronics with integrated payment, inventory, and delivery systems.',
//                 metrics: [
//                     { label: 'Product Categories', value: '10+' },
//                     { label: 'Expected Users', value: '50K+' },
//                     { label: 'Launch Date', value: 'Q3 2024' }
//                 ]
//             },
//             technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
//             cta: 'Discuss Retail Solutions'
//         },
//         {
//             id: 'ai-research',
//             name: 'AI & Research',
//             icon: <Brain className="h-12 w-12" />,
//             color: 'from-teal-500 to-cyan-500',
//             gradient: 'bg-gradient-to-r from-teal-500 to-cyan-500',
//             overview: 'Pushing technological boundaries through artificial intelligence research and innovative solution development.',
//             description: 'Organizations need cutting-edge AI solutions and research capabilities to solve complex problems and gain competitive advantages in their industries.',
//             challenges: [
//                 'Data processing and analysis',
//                 'Predictive modeling',
//                 'Automation of complex tasks',
//                 'Research scalability',
//                 'Innovation implementation'
//             ],
//             solutions: [
//                 {
//                     name: 'Mzatinova Labs',
//                     description: 'Our R&D division for technological innovation',
//                     icon: <Brain className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/industries/ai-research#labs'
//                 },
//                 {
//                     name: 'AI Consulting Services',
//                     description: 'Expert guidance on AI implementation',
//                     icon: <Users className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/consultation'
//                 },
//                 {
//                     name: 'Machine Learning Models',
//                     description: 'Custom ML solutions for specific needs',
//                     icon: <Cpu className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ai-solutions'
//                 },
//                 {
//                     name: 'Research Partnerships',
//                     description: 'Collaborative innovation projects',
//                     icon: <Target className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/company#partnerships'
//                 }
//             ],
//             caseStudy: {
//                 title: 'AI Research for Healthcare Diagnostics',
//                 description: 'Partnered with medical institutions to develop AI models for early disease detection, achieving 95% accuracy in preliminary trials.',
//                 metrics: [
//                     { label: 'Research Projects', value: '15+' },
//                     { label: 'Model Accuracy', value: '95%' },
//                     { label: 'Industry Partners', value: '8' }
//                 ]
//             },
//             technologies: ['Python', 'TensorFlow', 'PyTorch', 'Cloud AI', 'Big Data'],
//             cta: 'Discuss AI & Research Solutions'
//         }
//     ];

//     const activeIndustryData = industries.find(ind => ind.id === activeIndustry) || industries[0];

//     const getStatusBadge = (status: string) => {
//         switch (status) {
//             case 'live':
//                 return 'bg-green-500/20 text-green-400 border-green-500/30';
//             case 'soon':
//                 return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
//             case 'available':
//                 return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//             case 'development':
//                 return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
//             default:
//                 return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">

//                 {/* FIXED: Industry Navigation Tabs - Simple buttons without Tabs component */}
//                 <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-md py-4 mb-8 -mx-6 px-6 border-b border-white/10">
//                     <div className="flex justify-center">
//                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
//                             {industries.map((industry) => (
//                                 <button
//                                     key={industry.id}
//                                     onClick={() => setActiveIndustry(industry.id)}
//                                     className={`flex flex-col items-center justify-center py-3 rounded-md transition-all duration-300 ${activeIndustry === industry.id
//                                         ? `${industry.gradient} text-white`
//                                         : 'text-gray-300 hover:text-white hover:bg-white/5'
//                                         }`}
//                                 >
//                                     <div className={`p-2 rounded-lg ${activeIndustry === industry.id ? 'bg-white/20' : industry.gradient + '/20'}`}>
//                                         {React.cloneElement(industry.icon, { className: 'h-5 w-5' })}
//                                     </div>
//                                     <span className="text-sm mt-1">{industry.name}</span>
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Page Header */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                         Software Solutions for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Every Sector</span>
//                     </h1>

//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
//                         <Building className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Industry Expertise</span>
//                     </div>

//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         Specialized technology solutions tailored to the unique needs of different industries, driving innovation and growth.
//                     </p>
//                 </div>

//                 {/* Industry Content */}
//                 <div className="mb-12">
//                     {industries.map((industry) => (
//                         <div
//                             key={industry.id}
//                             className={activeIndustry === industry.id ? 'block' : 'hidden'}
//                         >
//                             <div className="mt-8 bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                                 {/* Industry Header */}
//                                 <div className="flex flex-col lg:flex-row gap-8 mb-12">
//                                     <div className="lg:w-2/3">
//                                         <div className="flex items-center gap-4 mb-6">
//                                             <div className={`p-4 rounded-2xl ${industry.gradient}/10 border border-white/10`}>
//                                                 {industry.icon}
//                                             </div>
//                                             <div>
//                                                 <h2 className="text-3xl font-bold text-white">{industry.name}</h2>
//                                                 <p className="text-gray-300">{industry.overview}</p>
//                                             </div>
//                                         </div>
//                                         <p className="text-gray-300 text-lg">{industry.description}</p>
//                                     </div>
//                                     <div className="lg:w-1/3">
//                                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                             <h3 className="text-white font-semibold mb-4">Quick Facts</h3>
//                                             <div className="space-y-3">
//                                                 <div className="flex items-center justify-between">
//                                                     <span className="text-gray-300">Solutions Available</span>
//                                                     <span className="text-white font-semibold">{industry.solutions.length}</span>
//                                                 </div>
//                                                 <div className="flex items-center justify-between">
//                                                     <span className="text-gray-300">Technology Stack</span>
//                                                     <span className="text-white font-semibold">{industry.technologies.length}+</span>
//                                                 </div>
//                                                 <div className="flex items-center justify-between">
//                                                     <span className="text-gray-300">Implementation Time</span>
//                                                     <span className="text-white font-semibold">4-12 weeks</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Challenges & Solutions */}
//                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//                                     {/* Challenges */}
//                                     <div>
//                                         <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                                             <Shield className="h-6 w-6 text-blue-400" />
//                                             Common Challenges
//                                         </h3>
//                                         <div className="space-y-4">
//                                             {industry.challenges.map((challenge, index) => (
//                                                 <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
//                                                     <div className={`h-2 w-2 rounded-full mt-2 ${industry.gradient}`} />
//                                                     <span className="text-gray-300">{challenge}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     {/* Solutions */}
//                                     <div>
//                                         <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                                             <Zap className="h-6 w-6 text-green-400" />
//                                             Our Solutions
//                                         </h3>
//                                         <div className="space-y-4">
//                                             {industry.solutions.map((solution, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
//                                                 >
//                                                     <div className="flex items-start justify-between mb-2">
//                                                         <div className="flex items-center gap-3">
//                                                             <div className={`p-2 rounded-lg ${industry.gradient}/10`}>
//                                                                 {solution.icon}
//                                                             </div>
//                                                             <div>
//                                                                 <h4 className="text-white font-semibold">{solution.name}</h4>
//                                                                 <p className="text-gray-300 text-sm">{solution.description}</p>
//                                                             </div>
//                                                         </div>
//                                                         <Badge className={getStatusBadge(solution.status)}>
//                                                             {solution.status.toUpperCase()}
//                                                         </Badge>
//                                                     </div>
//                                                     <Link to={solution.link}>
//                                                         <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 text-sm p-0 h-auto">
//                                                             Learn More
//                                                             <ArrowRight className="ml-1 h-3 w-3" />
//                                                         </Button>
//                                                     </Link>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Case Study & Technologies */}
//                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                                     {/* Case Study */}
//                                     <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-white/10">
//                                         <div className="flex items-center gap-3 mb-4">
//                                             <CheckCircle className="h-5 w-5 text-green-400" />
//                                             <h3 className="text-xl font-bold text-white">Case Study</h3>
//                                         </div>
//                                         <h4 className="text-white font-semibold mb-3">{industry.caseStudy.title}</h4>
//                                         <p className="text-gray-300 mb-6">{industry.caseStudy.description}</p>

//                                         <div className="grid grid-cols-3 gap-4">
//                                             {industry.caseStudy.metrics.map((metric, index) => (
//                                                 <div key={index} className="text-center">
//                                                     <div className={`text-2xl font-bold mb-1 ${industry.gradient} bg-clip-text text-transparent`}>
//                                                         {metric.value}
//                                                     </div>
//                                                     <div className="text-sm text-gray-300">{metric.label}</div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     {/* Technologies */}
//                                     <div>
//                                         <h3 className="text-xl font-bold text-white mb-6">Technology Stack</h3>
//                                         <div className="flex flex-wrap gap-2">
//                                             {industry.technologies.map((tech, index) => (
//                                                 <Badge
//                                                     key={index}
//                                                     variant="outline"
//                                                     className="border-white/20 text-gray-300 hover:border-blue-400 hover:text-white"
//                                                 >
//                                                     {tech}
//                                                 </Badge>
//                                             ))}
//                                         </div>

//                                         {/* CTA */}
//                                         <div className="mt-8">
//                                             <Link to="/contact">
//                                                 <Button className={`w-full ${industry.gradient} hover:opacity-90 text-white py-6 text-lg`}>
//                                                     {industry.cta}
//                                                     <ArrowRight className="ml-2 h-4 w-4" />
//                                                 </Button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Cross-Industry Solutions */}
//                 <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                     <div className="text-center mb-10">
//                         <h2 className="text-3xl font-bold text-white mb-4">
//                             Cross-Industry <span className="text-blue-400">Capabilities</span>
//                         </h2>
//                         <p className="text-gray-300 max-w-2xl mx-auto">
//                             While each industry has unique needs, many of our solutions leverage shared technologies and methodologies across sectors.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                             <div className="p-3 rounded-lg bg-blue-500/10 w-fit mb-4">
//                                 <Database className="h-6 w-6 text-blue-400" />
//                             </div>
//                             <h3 className="text-white font-semibold mb-3">Data Analytics</h3>
//                             <p className="text-gray-300 text-sm">
//                                 Extract actionable insights from your data across all business functions.
//                             </p>
//                         </div>

//                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                             <div className="p-3 rounded-lg bg-purple-500/10 w-fit mb-4">
//                                 <Cloud className="h-6 w-6 text-purple-400" />
//                             </div>
//                             <h3 className="text-white font-semibold mb-3">Cloud Integration</h3>
//                             <p className="text-gray-300 text-sm">
//                                 Scalable cloud solutions for businesses of all sizes across industries.
//                             </p>
//                         </div>

//                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                             <div className="p-3 rounded-lg bg-green-500/10 w-fit mb-4">
//                                 <Smartphone className="h-6 w-6 text-green-400" />
//                             </div>
//                             <h3 className="text-white font-semibold mb-3">Mobile-First</h3>
//                             <p className="text-gray-300 text-sm">
//                                 Responsive mobile solutions for on-the-go access to your systems.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="text-center mt-10">
//                         <Link to="/services">
//                             <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8">
//                                 Explore All Services
//                                 <ArrowRight className="ml-2 h-4 w-4" />
//                             </Button>
//                         </Link>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>

//         </div>
//     );
// };

// export default IndustriesPage;


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
//     GraduationCap,
//     Heart,
//     DollarSign,
//     Sprout,
//     ShoppingCart,
//     Brain,
//     Building,
//     Shield,
//     TrendingUp,
//     Users,
//     Cpu,
//     Database,
//     Cloud,
//     Smartphone,
//     CheckCircle,
//     ArrowRight,
//     ExternalLink,
//     Zap,
//     Target
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';

// const IndustriesPage: React.FC = () => {
//     const [activeIndustry, setActiveIndustry] = useState<string>('education');

//     const industries = [
//         {
//             id: 'education',
//             name: 'Education',
//             icon: <GraduationCap className="h-12 w-12" />,
//             color: 'from-blue-500 to-cyan-500',
//             gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
//             overview: 'Transforming learning experiences through innovative technology solutions that enhance teaching, learning, and administration.',
//             description: 'In the digital age, educational institutions face challenges in delivering engaging content, managing administrative tasks, and ensuring equitable access. We provide comprehensive EdTech solutions that address these needs.',
//             challenges: [
//                 'Limited access to quality educational resources',
//                 'Inefficient administrative processes',
//                 'Lack of parental engagement',
//                 'Difficulty tracking student progress',
//                 'Limited digital literacy among educators'
//             ],
//             solutions: [
//                 {
//                     name: 'EduSpace Portal',
//                     description: 'Complete school management and parent engagement platform',
//                     icon: <Database className="h-5 w-5" />,
//                     status: 'live',
//                     link: '/products/eduspace'
//                 },
//                 {
//                     name: 'Learning Management Systems',
//                     description: 'Custom LMS platforms for institutions',
//                     icon: <Cloud className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Virtual Classroom Solutions',
//                     description: 'Interactive online learning environments',
//                     icon: <Users className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ecommerce'
//                 },
//                 {
//                     name: 'Student Analytics Platform',
//                     description: 'Data-driven insights for educational improvement',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/ai-solutions'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Digital Transformation in Malawian Schools',
//                 description: 'Implemented EduSpace Portal in primary schools, resulting in 40% reduction in administrative workload and 60% increase in parental engagement.',
//                 metrics: [
//                     { label: 'Schools Served', value: '50+' },
//                     { label: 'Parent Engagement', value: '↑ 60%' },
//                     { label: 'Admin Time Saved', value: '40%' }
//                 ]
//             },
//             technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'REST APIs'],
//             cta: 'Discuss Education Solutions'
//         },
//         {
//             id: 'health',
//             name: 'Healthcare',
//             icon: <Heart className="h-12 w-12" />,
//             color: 'from-red-500 to-pink-500',
//             gradient: 'bg-gradient-to-r from-red-500 to-pink-500',
//             overview: 'Improving healthcare delivery through technology that enhances patient care, streamlines operations, and enables telemedicine.',
//             description: 'Healthcare providers need efficient systems for patient management, medical records, and remote consultations. Our solutions bridge the gap between medical expertise and technological innovation.',
//             challenges: [
//                 'Fragmented patient data management',
//                 'Limited telemedicine capabilities',
//                 'Inefficient appointment scheduling',
//                 'Poor patient engagement',
//                 'High operational costs'
//             ],
//             solutions: [
//                 {
//                     name: 'Hospital Management Systems',
//                     description: 'Integrated platforms for healthcare facilities',
//                     icon: <Building className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Telemedicine Platforms',
//                     description: 'Remote consultation and diagnosis systems',
//                     icon: <Smartphone className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Medical Record Digitization',
//                     description: 'Secure electronic health records',
//                     icon: <Database className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'AI Diagnostic Tools',
//                     description: 'Machine learning for medical imaging',
//                     icon: <Brain className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/ai-solutions'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Telemedicine Platform for Rural Clinics',
//                 description: 'Developed a telemedicine solution connecting rural clinics with specialists, reducing patient travel time by 70% and improving diagnosis accuracy.',
//                 metrics: [
//                     { label: 'Clinics Connected', value: '25+' },
//                     { label: 'Travel Time Saved', value: '↓ 70%' },
//                     { label: 'Patient Satisfaction', value: '↑ 85%' }
//                 ]
//             },
//             technologies: ['React Native', 'WebRTC', 'HIPAA Compliance', 'PostgreSQL', 'AWS'],
//             cta: 'Discuss Healthcare Solutions'
//         },
//         {
//             id: 'finance',
//             name: 'Finance',
//             icon: <DollarSign className="h-12 w-12" />,
//             color: 'from-yellow-500 to-orange-500',
//             gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500',
//             overview: 'Empowering financial institutions with secure, scalable technology solutions for the digital economy.',
//             description: 'Banks, fintech companies, and financial institutions need robust, secure systems for transactions, customer management, and regulatory compliance in an increasingly digital world.',
//             challenges: [
//                 'Security and fraud prevention',
//                 'Legacy system modernization',
//                 'Mobile banking expectations',
//                 'Regulatory compliance',
//                 'Customer experience improvement'
//             ],
//             solutions: [
//                 {
//                     name: 'Mobile Banking Apps',
//                     description: 'Secure mobile banking solutions',
//                     icon: <Smartphone className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Payment Processing Systems',
//                     description: 'Secure transaction platforms',
//                     icon: <DollarSign className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Fraud Detection Systems',
//                     description: 'AI-powered security solutions',
//                     icon: <Shield className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ai-solutions'
//                 },
//                 {
//                     name: 'Investment Platforms',
//                     description: 'Digital investment management',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/development'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Mobile Banking Platform for Regional Bank',
//                 description: 'Built a secure mobile banking platform serving 100,000+ customers with 99.9% uptime and zero security breaches in 2 years.',
//                 metrics: [
//                     { label: 'Active Users', value: '100K+' },
//                     { label: 'System Uptime', value: '99.9%' },
//                     { label: 'Transaction Volume', value: '$50M+' }
//                 ]
//             },
//             technologies: ['React', 'Node.js', 'Blockchain', 'PCI Compliance', 'Microservices'],
//             cta: 'Discuss Finance Solutions'
//         },
//         {
//             id: 'agriculture',
//             name: 'Agriculture',
//             icon: <Sprout className="h-12 w-12" />,
//             color: 'from-green-500 to-emerald-500',
//             gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
//             overview: 'Modernizing agriculture through technology that improves yields, optimizes resources, and connects farmers to markets.',
//             description: 'Farmers and agricultural businesses need tools for crop management, supply chain optimization, and market access to improve productivity and profitability.',
//             challenges: [
//                 'Crop yield optimization',
//                 'Supply chain inefficiencies',
//                 'Market access limitations',
//                 'Resource management',
//                 'Climate change adaptation'
//             ],
//             solutions: [
//                 {
//                     name: 'Farm Management Software',
//                     description: 'Crop planning and resource management',
//                     icon: <Sprout className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Supply Chain Platforms',
//                     description: 'Agricultural logistics and tracking',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Marketplace Platforms',
//                     description: 'Direct farmer-to-market connections',
//                     icon: <ShoppingCart className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ecommerce'
//                 },
//                 {
//                     name: 'IoT Monitoring Systems',
//                     description: 'Sensor-based crop monitoring',
//                     icon: <Cpu className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/ai-solutions'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Digital Marketplace for Smallholder Farmers',
//                 description: 'Created an online platform connecting 5,000+ farmers directly with buyers, increasing farmer income by 35% and reducing food waste.',
//                 metrics: [
//                     { label: 'Farmers Connected', value: '5,000+' },
//                     { label: 'Income Increase', value: '↑ 35%' },
//                     { label: 'Food Waste Reduction', value: '↓ 40%' }
//                 ]
//             },
//             technologies: ['React', 'Python', 'IoT Integration', 'Mobile Apps', 'Cloud'],
//             cta: 'Discuss Agriculture Solutions'
//         },
//         {
//             id: 'retail',
//             name: 'Retail',
//             icon: <ShoppingCart className="h-12 w-12" />,
//             color: 'from-purple-500 to-violet-500',
//             gradient: 'bg-gradient-to-r from-purple-500 to-violet-500',
//             overview: 'Transforming retail experiences through e-commerce, inventory management, and customer engagement solutions.',
//             description: 'Retail businesses need to adapt to digital shopping trends while maintaining efficient operations and engaging customers across multiple channels.',
//             challenges: [
//                 'Digital transformation',
//                 'Inventory management',
//                 'Customer retention',
//                 'Multi-channel sales',
//                 'Data-driven decisions'
//             ],
//             solutions: [
//                 {
//                     name: 'Mzatinova Store',
//                     description: 'E-commerce platform for electronics retail',
//                     icon: <ShoppingCart className="h-5 w-5" />,
//                     status: 'soon',
//                     link: '/products/store'
//                 },
//                 {
//                     name: 'Inventory Management Systems',
//                     description: 'Real-time stock and order management',
//                     icon: <Database className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Customer Analytics',
//                     description: 'Data insights for personalized marketing',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ai-solutions'
//                 },
//                 {
//                     name: 'POS Integration',
//                     description: 'Unified point-of-sale systems',
//                     icon: <DollarSign className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/integration'
//                 }
//             ],
//             caseStudy: {
//                 title: 'E-commerce Platform for Electronics Retailer',
//                 description: 'Developing Mzatinova Store - an end-to-end e-commerce solution for electronics with integrated payment, inventory, and delivery systems.',
//                 metrics: [
//                     { label: 'Product Categories', value: '10+' },
//                     { label: 'Expected Users', value: '50K+' },
//                     { label: 'Launch Date', value: 'Q3 2024' }
//                 ]
//             },
//             technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
//             cta: 'Discuss Retail Solutions'
//         },
//         {
//             id: 'ai-research',
//             name: 'AI & Research',
//             icon: <Brain className="h-12 w-12" />,
//             color: 'from-teal-500 to-cyan-500',
//             gradient: 'bg-gradient-to-r from-teal-500 to-cyan-500',
//             overview: 'Pushing technological boundaries through artificial intelligence research and innovative solution development.',
//             description: 'Organizations need cutting-edge AI solutions and research capabilities to solve complex problems and gain competitive advantages in their industries.',
//             challenges: [
//                 'Data processing and analysis',
//                 'Predictive modeling',
//                 'Automation of complex tasks',
//                 'Research scalability',
//                 'Innovation implementation'
//             ],
//             solutions: [
//                 {
//                     name: 'Mzatinova Labs',
//                     description: 'Our R&D division for technological innovation',
//                     icon: <Brain className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/industries/ai-research#labs'
//                 },
//                 {
//                     name: 'AI Consulting Services',
//                     description: 'Expert guidance on AI implementation',
//                     icon: <Users className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/consultation'
//                 },
//                 {
//                     name: 'Machine Learning Models',
//                     description: 'Custom ML solutions for specific needs',
//                     icon: <Cpu className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ai-solutions'
//                 },
//                 {
//                     name: 'Research Partnerships',
//                     description: 'Collaborative innovation projects',
//                     icon: <Target className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/company#partnerships'
//                 }
//             ],
//             caseStudy: {
//                 title: 'AI Research for Healthcare Diagnostics',
//                 description: 'Partnered with medical institutions to develop AI models for early disease detection, achieving 95% accuracy in preliminary trials.',
//                 metrics: [
//                     { label: 'Research Projects', value: '15+' },
//                     { label: 'Model Accuracy', value: '95%' },
//                     { label: 'Industry Partners', value: '8' }
//                 ]
//             },
//             technologies: ['Python', 'TensorFlow', 'PyTorch', 'Cloud AI', 'Big Data'],
//             cta: 'Discuss AI & Research Solutions'
//         }
//     ];

//     const activeIndustryData = industries.find(ind => ind.id === activeIndustry) || industries[0];

//     const getStatusBadge = (status: string) => {
//         switch (status) {
//             case 'live':
//                 return 'bg-green-500/20 text-green-400 border-green-500/30';
//             case 'soon':
//                 return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
//             case 'available':
//                 return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//             case 'development':
//                 return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
//             default:
//                 return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">

//                 {/* MOVED: Industry Navigation Tabs - Fixed sticky positioning just below the header */}
//                 <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-md py-6 mb-8 -mx-6 px-6 border-b border-white/10">
//                     <Tabs defaultValue="education" className="w-full">
//                         <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent">
//                             {industries.map((industry) => (
//                                 <TabsTrigger
//                                     key={industry.id}
//                                     value={industry.id}
//                                     onClick={() => setActiveIndustry(industry.id)}
//                                     className={`data-[state=active]:${industry.gradient} data-[state=active]:text-white py-3`}
//                                 >
//                                     <div className="flex flex-col items-center gap-2">
//                                         <div className={`p-2 rounded-lg ${industry.gradient}/20`}>
//                                             {React.cloneElement(industry.icon, { className: 'h-5 w-5' })}
//                                         </div>
//                                         <span className="text-sm">{industry.name}</span>
//                                     </div>
//                                 </TabsTrigger>
//                             ))}
//                         </TabsList>
//                     </Tabs>
//                 </div>

//                 {/* Page Header */}
//                 <div className="text-center mb-16">
//                     {/* MOVED: "Industry Expertise" badge - Placed below the main title */}
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                         Software Solutions for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Every Sector</span>
//                     </h1>

//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
//                         <Building className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Industry Expertise</span>
//                     </div>

//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         Specialized technology solutions tailored to the unique needs of different industries, driving innovation and growth.
//                     </p>
//                 </div>

//                 {/* Industry Content */}
//                 <div className="mb-12">
//                     {industries.map((industry) => (
//                         <div
//                             key={industry.id}
//                             className={activeIndustry === industry.id ? 'block' : 'hidden'}
//                         >
//                             <div className="mt-8 bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                                 {/* Industry Header */}
//                                 <div className="flex flex-col lg:flex-row gap-8 mb-12">
//                                     <div className="lg:w-2/3">
//                                         <div className="flex items-center gap-4 mb-6">
//                                             <div className={`p-4 rounded-2xl ${industry.gradient}/10 border border-white/10`}>
//                                                 {industry.icon}
//                                             </div>
//                                             <div>
//                                                 <h2 className="text-3xl font-bold text-white">{industry.name}</h2>
//                                                 <p className="text-gray-300">{industry.overview}</p>
//                                             </div>
//                                         </div>
//                                         <p className="text-gray-300 text-lg">{industry.description}</p>
//                                     </div>
//                                     <div className="lg:w-1/3">
//                                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                             <h3 className="text-white font-semibold mb-4">Quick Facts</h3>
//                                             <div className="space-y-3">
//                                                 <div className="flex items-center justify-between">
//                                                     <span className="text-gray-300">Solutions Available</span>
//                                                     <span className="text-white font-semibold">{industry.solutions.length}</span>
//                                                 </div>
//                                                 <div className="flex items-center justify-between">
//                                                     <span className="text-gray-300">Technology Stack</span>
//                                                     <span className="text-white font-semibold">{industry.technologies.length}+</span>
//                                                 </div>
//                                                 <div className="flex items-center justify-between">
//                                                     <span className="text-gray-300">Implementation Time</span>
//                                                     <span className="text-white font-semibold">4-12 weeks</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Challenges & Solutions */}
//                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//                                     {/* Challenges */}
//                                     <div>
//                                         <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                                             <Shield className="h-6 w-6 text-blue-400" />
//                                             Common Challenges
//                                         </h3>
//                                         <div className="space-y-4">
//                                             {industry.challenges.map((challenge, index) => (
//                                                 <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
//                                                     <div className={`h-2 w-2 rounded-full mt-2 ${industry.gradient}`} />
//                                                     <span className="text-gray-300">{challenge}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     {/* Solutions */}
//                                     <div>
//                                         <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                                             <Zap className="h-6 w-6 text-green-400" />
//                                             Our Solutions
//                                         </h3>
//                                         <div className="space-y-4">
//                                             {industry.solutions.map((solution, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
//                                                 >
//                                                     <div className="flex items-start justify-between mb-2">
//                                                         <div className="flex items-center gap-3">
//                                                             <div className={`p-2 rounded-lg ${industry.gradient}/10`}>
//                                                                 {solution.icon}
//                                                             </div>
//                                                             <div>
//                                                                 <h4 className="text-white font-semibold">{solution.name}</h4>
//                                                                 <p className="text-gray-300 text-sm">{solution.description}</p>
//                                                             </div>
//                                                         </div>
//                                                         <Badge className={getStatusBadge(solution.status)}>
//                                                             {solution.status.toUpperCase()}
//                                                         </Badge>
//                                                     </div>
//                                                     <Link to={solution.link}>
//                                                         <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 text-sm p-0 h-auto">
//                                                             Learn More
//                                                             <ArrowRight className="ml-1 h-3 w-3" />
//                                                         </Button>
//                                                     </Link>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Case Study & Technologies */}
//                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                                     {/* Case Study */}
//                                     <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-white/10">
//                                         <div className="flex items-center gap-3 mb-4">
//                                             <CheckCircle className="h-5 w-5 text-green-400" />
//                                             <h3 className="text-xl font-bold text-white">Case Study</h3>
//                                         </div>
//                                         <h4 className="text-white font-semibold mb-3">{industry.caseStudy.title}</h4>
//                                         <p className="text-gray-300 mb-6">{industry.caseStudy.description}</p>

//                                         <div className="grid grid-cols-3 gap-4">
//                                             {industry.caseStudy.metrics.map((metric, index) => (
//                                                 <div key={index} className="text-center">
//                                                     <div className={`text-2xl font-bold mb-1 ${industry.gradient} bg-clip-text text-transparent`}>
//                                                         {metric.value}
//                                                     </div>
//                                                     <div className="text-sm text-gray-300">{metric.label}</div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     {/* Technologies */}
//                                     <div>
//                                         <h3 className="text-xl font-bold text-white mb-6">Technology Stack</h3>
//                                         <div className="flex flex-wrap gap-2">
//                                             {industry.technologies.map((tech, index) => (
//                                                 <Badge
//                                                     key={index}
//                                                     variant="outline"
//                                                     className="border-white/20 text-gray-300 hover:border-blue-400 hover:text-white"
//                                                 >
//                                                     {tech}
//                                                 </Badge>
//                                             ))}
//                                         </div>

//                                         {/* CTA */}
//                                         <div className="mt-8">
//                                             <Link to="/contact">
//                                                 <Button className={`w-full ${industry.gradient} hover:opacity-90 text-white py-6 text-lg`}>
//                                                     {industry.cta}
//                                                     <ArrowRight className="ml-2 h-4 w-4" />
//                                                 </Button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Cross-Industry Solutions */}
//                 <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                     <div className="text-center mb-10">
//                         <h2 className="text-3xl font-bold text-white mb-4">
//                             Cross-Industry <span className="text-blue-400">Capabilities</span>
//                         </h2>
//                         <p className="text-gray-300 max-w-2xl mx-auto">
//                             While each industry has unique needs, many of our solutions leverage shared technologies and methodologies across sectors.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                             <div className="p-3 rounded-lg bg-blue-500/10 w-fit mb-4">
//                                 <Database className="h-6 w-6 text-blue-400" />
//                             </div>
//                             <h3 className="text-white font-semibold mb-3">Data Analytics</h3>
//                             <p className="text-gray-300 text-sm">
//                                 Extract actionable insights from your data across all business functions.
//                             </p>
//                         </div>

//                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                             <div className="p-3 rounded-lg bg-purple-500/10 w-fit mb-4">
//                                 <Cloud className="h-6 w-6 text-purple-400" />
//                             </div>
//                             <h3 className="text-white font-semibold mb-3">Cloud Integration</h3>
//                             <p className="text-gray-300 text-sm">
//                                 Scalable cloud solutions for businesses of all sizes across industries.
//                             </p>
//                         </div>

//                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                             <div className="p-3 rounded-lg bg-green-500/10 w-fit mb-4">
//                                 <Smartphone className="h-6 w-6 text-green-400" />
//                             </div>
//                             <h3 className="text-white font-semibold mb-3">Mobile-First</h3>
//                             <p className="text-gray-300 text-sm">
//                                 Responsive mobile solutions for on-the-go access to your systems.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="text-center mt-10">
//                         <Link to="/services">
//                             <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8">
//                                 Explore All Services
//                                 <ArrowRight className="ml-2 h-4 w-4" />
//                             </Button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default IndustriesPage;

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
//     GraduationCap,
//     Heart,
//     DollarSign,
//     Sprout,
//     ShoppingCart,
//     Brain,
//     Building,
//     Shield,
//     TrendingUp,
//     Users,
//     Cpu,
//     Database,
//     Cloud,
//     Smartphone,
//     CheckCircle,
//     ArrowRight,
//     ExternalLink,
//     Zap,
//     Target
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';

// const IndustriesPage: React.FC = () => {
//     const [activeIndustry, setActiveIndustry] = useState<string>('education');

//     const industries = [
//         {
//             id: 'education',
//             name: 'Education',
//             icon: <GraduationCap className="h-12 w-12" />,
//             color: 'from-blue-500 to-cyan-500',
//             gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
//             overview: 'Transforming learning experiences through innovative technology solutions that enhance teaching, learning, and administration.',
//             description: 'In the digital age, educational institutions face challenges in delivering engaging content, managing administrative tasks, and ensuring equitable access. We provide comprehensive EdTech solutions that address these needs.',
//             challenges: [
//                 'Limited access to quality educational resources',
//                 'Inefficient administrative processes',
//                 'Lack of parental engagement',
//                 'Difficulty tracking student progress',
//                 'Limited digital literacy among educators'
//             ],
//             solutions: [
//                 {
//                     name: 'EduSpace Portal',
//                     description: 'Complete school management and parent engagement platform',
//                     icon: <Database className="h-5 w-5" />,
//                     status: 'live',
//                     link: '/products/eduspace'
//                 },
//                 {
//                     name: 'Learning Management Systems',
//                     description: 'Custom LMS platforms for institutions',
//                     icon: <Cloud className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Virtual Classroom Solutions',
//                     description: 'Interactive online learning environments',
//                     icon: <Users className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ecommerce'
//                 },
//                 {
//                     name: 'Student Analytics Platform',
//                     description: 'Data-driven insights for educational improvement',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/ai-solutions'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Digital Transformation in Malawian Schools',
//                 description: 'Implemented EduSpace Portal in primary schools, resulting in 40% reduction in administrative workload and 60% increase in parental engagement.',
//                 metrics: [
//                     { label: 'Schools Served', value: '50+' },
//                     { label: 'Parent Engagement', value: '↑ 60%' },
//                     { label: 'Admin Time Saved', value: '40%' }
//                 ]
//             },
//             technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'REST APIs'],
//             cta: 'Discuss Education Solutions'
//         },
//         {
//             id: 'health',
//             name: 'Healthcare',
//             icon: <Heart className="h-12 w-12" />,
//             color: 'from-red-500 to-pink-500',
//             gradient: 'bg-gradient-to-r from-red-500 to-pink-500',
//             overview: 'Improving healthcare delivery through technology that enhances patient care, streamlines operations, and enables telemedicine.',
//             description: 'Healthcare providers need efficient systems for patient management, medical records, and remote consultations. Our solutions bridge the gap between medical expertise and technological innovation.',
//             challenges: [
//                 'Fragmented patient data management',
//                 'Limited telemedicine capabilities',
//                 'Inefficient appointment scheduling',
//                 'Poor patient engagement',
//                 'High operational costs'
//             ],
//             solutions: [
//                 {
//                     name: 'Hospital Management Systems',
//                     description: 'Integrated platforms for healthcare facilities',
//                     icon: <Building className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Telemedicine Platforms',
//                     description: 'Remote consultation and diagnosis systems',
//                     icon: <Smartphone className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Medical Record Digitization',
//                     description: 'Secure electronic health records',
//                     icon: <Database className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'AI Diagnostic Tools',
//                     description: 'Machine learning for medical imaging',
//                     icon: <Brain className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/ai-solutions'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Telemedicine Platform for Rural Clinics',
//                 description: 'Developed a telemedicine solution connecting rural clinics with specialists, reducing patient travel time by 70% and improving diagnosis accuracy.',
//                 metrics: [
//                     { label: 'Clinics Connected', value: '25+' },
//                     { label: 'Travel Time Saved', value: '↓ 70%' },
//                     { label: 'Patient Satisfaction', value: '↑ 85%' }
//                 ]
//             },
//             technologies: ['React Native', 'WebRTC', 'HIPAA Compliance', 'PostgreSQL', 'AWS'],
//             cta: 'Discuss Healthcare Solutions'
//         },
//         {
//             id: 'finance',
//             name: 'Finance',
//             icon: <DollarSign className="h-12 w-12" />,
//             color: 'from-yellow-500 to-orange-500',
//             gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500',
//             overview: 'Empowering financial institutions with secure, scalable technology solutions for the digital economy.',
//             description: 'Banks, fintech companies, and financial institutions need robust, secure systems for transactions, customer management, and regulatory compliance in an increasingly digital world.',
//             challenges: [
//                 'Security and fraud prevention',
//                 'Legacy system modernization',
//                 'Mobile banking expectations',
//                 'Regulatory compliance',
//                 'Customer experience improvement'
//             ],
//             solutions: [
//                 {
//                     name: 'Mobile Banking Apps',
//                     description: 'Secure mobile banking solutions',
//                     icon: <Smartphone className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Payment Processing Systems',
//                     description: 'Secure transaction platforms',
//                     icon: <DollarSign className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Fraud Detection Systems',
//                     description: 'AI-powered security solutions',
//                     icon: <Shield className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ai-solutions'
//                 },
//                 {
//                     name: 'Investment Platforms',
//                     description: 'Digital investment management',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/development'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Mobile Banking Platform for Regional Bank',
//                 description: 'Built a secure mobile banking platform serving 100,000+ customers with 99.9% uptime and zero security breaches in 2 years.',
//                 metrics: [
//                     { label: 'Active Users', value: '100K+' },
//                     { label: 'System Uptime', value: '99.9%' },
//                     { label: 'Transaction Volume', value: '$50M+' }
//                 ]
//             },
//             technologies: ['React', 'Node.js', 'Blockchain', 'PCI Compliance', 'Microservices'],
//             cta: 'Discuss Finance Solutions'
//         },
//         {
//             id: 'agriculture',
//             name: 'Agriculture',
//             icon: <Sprout className="h-12 w-12" />,
//             color: 'from-green-500 to-emerald-500',
//             gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
//             overview: 'Modernizing agriculture through technology that improves yields, optimizes resources, and connects farmers to markets.',
//             description: 'Farmers and agricultural businesses need tools for crop management, supply chain optimization, and market access to improve productivity and profitability.',
//             challenges: [
//                 'Crop yield optimization',
//                 'Supply chain inefficiencies',
//                 'Market access limitations',
//                 'Resource management',
//                 'Climate change adaptation'
//             ],
//             solutions: [
//                 {
//                     name: 'Farm Management Software',
//                     description: 'Crop planning and resource management',
//                     icon: <Sprout className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Supply Chain Platforms',
//                     description: 'Agricultural logistics and tracking',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Marketplace Platforms',
//                     description: 'Direct farmer-to-market connections',
//                     icon: <ShoppingCart className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ecommerce'
//                 },
//                 {
//                     name: 'IoT Monitoring Systems',
//                     description: 'Sensor-based crop monitoring',
//                     icon: <Cpu className="h-5 w-5" />,
//                     status: 'development',
//                     link: '/services/ai-solutions'
//                 }
//             ],
//             caseStudy: {
//                 title: 'Digital Marketplace for Smallholder Farmers',
//                 description: 'Created an online platform connecting 5,000+ farmers directly with buyers, increasing farmer income by 35% and reducing food waste.',
//                 metrics: [
//                     { label: 'Farmers Connected', value: '5,000+' },
//                     { label: 'Income Increase', value: '↑ 35%' },
//                     { label: 'Food Waste Reduction', value: '↓ 40%' }
//                 ]
//             },
//             technologies: ['React', 'Python', 'IoT Integration', 'Mobile Apps', 'Cloud'],
//             cta: 'Discuss Agriculture Solutions'
//         },
//         {
//             id: 'retail',
//             name: 'Retail',
//             icon: <ShoppingCart className="h-12 w-12" />,
//             color: 'from-purple-500 to-violet-500',
//             gradient: 'bg-gradient-to-r from-purple-500 to-violet-500',
//             overview: 'Transforming retail experiences through e-commerce, inventory management, and customer engagement solutions.',
//             description: 'Retail businesses need to adapt to digital shopping trends while maintaining efficient operations and engaging customers across multiple channels.',
//             challenges: [
//                 'Digital transformation',
//                 'Inventory management',
//                 'Customer retention',
//                 'Multi-channel sales',
//                 'Data-driven decisions'
//             ],
//             solutions: [
//                 {
//                     name: 'Mzatinova Store',
//                     description: 'E-commerce platform for electronics retail',
//                     icon: <ShoppingCart className="h-5 w-5" />,
//                     status: 'soon',
//                     link: '/products/store'
//                 },
//                 {
//                     name: 'Inventory Management Systems',
//                     description: 'Real-time stock and order management',
//                     icon: <Database className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/development'
//                 },
//                 {
//                     name: 'Customer Analytics',
//                     description: 'Data insights for personalized marketing',
//                     icon: <TrendingUp className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ai-solutions'
//                 },
//                 {
//                     name: 'POS Integration',
//                     description: 'Unified point-of-sale systems',
//                     icon: <DollarSign className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/integration'
//                 }
//             ],
//             caseStudy: {
//                 title: 'E-commerce Platform for Electronics Retailer',
//                 description: 'Developing Mzatinova Store - an end-to-end e-commerce solution for electronics with integrated payment, inventory, and delivery systems.',
//                 metrics: [
//                     { label: 'Product Categories', value: '10+' },
//                     { label: 'Expected Users', value: '50K+' },
//                     { label: 'Launch Date', value: 'Q3 2024' }
//                 ]
//             },
//             technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
//             cta: 'Discuss Retail Solutions'
//         },
//         {
//             id: 'ai-research',
//             name: 'AI & Research',
//             icon: <Brain className="h-12 w-12" />,
//             color: 'from-teal-500 to-cyan-500',
//             gradient: 'bg-gradient-to-r from-teal-500 to-cyan-500',
//             overview: 'Pushing technological boundaries through artificial intelligence research and innovative solution development.',
//             description: 'Organizations need cutting-edge AI solutions and research capabilities to solve complex problems and gain competitive advantages in their industries.',
//             challenges: [
//                 'Data processing and analysis',
//                 'Predictive modeling',
//                 'Automation of complex tasks',
//                 'Research scalability',
//                 'Innovation implementation'
//             ],
//             solutions: [
//                 {
//                     name: 'Mzatinova Labs',
//                     description: 'Our R&D division for technological innovation',
//                     icon: <Brain className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/industries/ai-research#labs'
//                 },
//                 {
//                     name: 'AI Consulting Services',
//                     description: 'Expert guidance on AI implementation',
//                     icon: <Users className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/consultation'
//                 },
//                 {
//                     name: 'Machine Learning Models',
//                     description: 'Custom ML solutions for specific needs',
//                     icon: <Cpu className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/services/ai-solutions'
//                 },
//                 {
//                     name: 'Research Partnerships',
//                     description: 'Collaborative innovation projects',
//                     icon: <Target className="h-5 w-5" />,
//                     status: 'available',
//                     link: '/company#partnerships'
//                 }
//             ],
//             caseStudy: {
//                 title: 'AI Research for Healthcare Diagnostics',
//                 description: 'Partnered with medical institutions to develop AI models for early disease detection, achieving 95% accuracy in preliminary trials.',
//                 metrics: [
//                     { label: 'Research Projects', value: '15+' },
//                     { label: 'Model Accuracy', value: '95%' },
//                     { label: 'Industry Partners', value: '8' }
//                 ]
//             },
//             technologies: ['Python', 'TensorFlow', 'PyTorch', 'Cloud AI', 'Big Data'],
//             cta: 'Discuss AI & Research Solutions'
//         }
//     ];

//     const activeIndustryData = industries.find(ind => ind.id === activeIndustry) || industries[0];

//     const getStatusBadge = (status: string) => {
//         switch (status) {
//             case 'live':
//                 return 'bg-green-500/20 text-green-400 border-green-500/30';
//             case 'soon':
//                 return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
//             case 'available':
//                 return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//             case 'development':
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
//                         <Building className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Industry Expertise</span>
//                     </div>
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                         Software Solutions for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Every Sector</span>
//                     </h1>
//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         Specialized technology solutions tailored to the unique needs of different industries, driving innovation and growth.
//                     </p>
//                 </div>

//                 {/* Industry Navigation */}
//                 <div className="mb-12">
//                     <Tabs defaultValue="education" className="w-full">
//                         <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent">
//                             {industries.map((industry) => (
//                                 <TabsTrigger
//                                     key={industry.id}
//                                     value={industry.id}
//                                     onClick={() => setActiveIndustry(industry.id)}
//                                     className={`data-[state=active]:${industry.gradient} data-[state=active]:text-white py-3`}
//                                 >
//                                     <div className="flex flex-col items-center gap-2">
//                                         <div className={`p-2 rounded-lg ${industry.gradient}/20`}>
//                                             {React.cloneElement(industry.icon, { className: 'h-5 w-5' })}
//                                         </div>
//                                         <span className="text-sm">{industry.name}</span>
//                                     </div>
//                                 </TabsTrigger>
//                             ))}
//                         </TabsList>

//                         {industries.map((industry) => (
//                             <TabsContent key={industry.id} value={industry.id}>
//                                 <div className="mt-8 bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                                     {/* Industry Header */}
//                                     <div className="flex flex-col lg:flex-row gap-8 mb-12">
//                                         <div className="lg:w-2/3">
//                                             <div className="flex items-center gap-4 mb-6">
//                                                 <div className={`p-4 rounded-2xl ${industry.gradient}/10 border border-white/10`}>
//                                                     {industry.icon}
//                                                 </div>
//                                                 <div>
//                                                     <h2 className="text-3xl font-bold text-white">{industry.name}</h2>
//                                                     <p className="text-gray-300">{industry.overview}</p>
//                                                 </div>
//                                             </div>
//                                             <p className="text-gray-300 text-lg">{industry.description}</p>
//                                         </div>
//                                         <div className="lg:w-1/3">
//                                             <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                                 <h3 className="text-white font-semibold mb-4">Quick Facts</h3>
//                                                 <div className="space-y-3">
//                                                     <div className="flex items-center justify-between">
//                                                         <span className="text-gray-300">Solutions Available</span>
//                                                         <span className="text-white font-semibold">{industry.solutions.length}</span>
//                                                     </div>
//                                                     <div className="flex items-center justify-between">
//                                                         <span className="text-gray-300">Technology Stack</span>
//                                                         <span className="text-white font-semibold">{industry.technologies.length}+</span>
//                                                     </div>
//                                                     <div className="flex items-center justify-between">
//                                                         <span className="text-gray-300">Implementation Time</span>
//                                                         <span className="text-white font-semibold">4-12 weeks</span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Challenges & Solutions */}
//                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//                                         {/* Challenges */}
//                                         <div>
//                                             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                                                 <Shield className="h-6 w-6 text-blue-400" />
//                                                 Common Challenges
//                                             </h3>
//                                             <div className="space-y-4">
//                                                 {industry.challenges.map((challenge, index) => (
//                                                     <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
//                                                         <div className={`h-2 w-2 rounded-full mt-2 ${industry.gradient}`} />
//                                                         <span className="text-gray-300">{challenge}</span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         {/* Solutions */}
//                                         <div>
//                                             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                                                 <Zap className="h-6 w-6 text-green-400" />
//                                                 Our Solutions
//                                             </h3>
//                                             <div className="space-y-4">
//                                                 {industry.solutions.map((solution, index) => (
//                                                     <div
//                                                         key={index}
//                                                         className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
//                                                     >
//                                                         <div className="flex items-start justify-between mb-2">
//                                                             <div className="flex items-center gap-3">
//                                                                 <div className={`p-2 rounded-lg ${industry.gradient}/10`}>
//                                                                     {solution.icon}
//                                                                 </div>
//                                                                 <div>
//                                                                     <h4 className="text-white font-semibold">{solution.name}</h4>
//                                                                     <p className="text-gray-300 text-sm">{solution.description}</p>
//                                                                 </div>
//                                                             </div>
//                                                             <Badge className={getStatusBadge(solution.status)}>
//                                                                 {solution.status.toUpperCase()}
//                                                             </Badge>
//                                                         </div>
//                                                         <Link to={solution.link}>
//                                                             <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 text-sm p-0 h-auto">
//                                                                 Learn More
//                                                                 <ArrowRight className="ml-1 h-3 w-3" />
//                                                             </Button>
//                                                         </Link>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Case Study & Technologies */}
//                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                                         {/* Case Study */}
//                                         <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-white/10">
//                                             <div className="flex items-center gap-3 mb-4">
//                                                 <CheckCircle className="h-5 w-5 text-green-400" />
//                                                 <h3 className="text-xl font-bold text-white">Case Study</h3>
//                                             </div>
//                                             <h4 className="text-white font-semibold mb-3">{industry.caseStudy.title}</h4>
//                                             <p className="text-gray-300 mb-6">{industry.caseStudy.description}</p>

//                                             <div className="grid grid-cols-3 gap-4">
//                                                 {industry.caseStudy.metrics.map((metric, index) => (
//                                                     <div key={index} className="text-center">
//                                                         <div className={`text-2xl font-bold mb-1 ${industry.gradient} bg-clip-text text-transparent`}>
//                                                             {metric.value}
//                                                         </div>
//                                                         <div className="text-sm text-gray-300">{metric.label}</div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         {/* Technologies */}
//                                         <div>
//                                             <h3 className="text-xl font-bold text-white mb-6">Technology Stack</h3>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {industry.technologies.map((tech, index) => (
//                                                     <Badge
//                                                         key={index}
//                                                         variant="outline"
//                                                         className="border-white/20 text-gray-300 hover:border-blue-400 hover:text-white"
//                                                     >
//                                                         {tech}
//                                                     </Badge>
//                                                 ))}
//                                             </div>

//                                             {/* CTA */}
//                                             <div className="mt-8">
//                                                 <Link to="/contact">
//                                                     <Button className={`w-full ${industry.gradient} hover:opacity-90 text-white py-6 text-lg`}>
//                                                         {industry.cta}
//                                                         <ArrowRight className="ml-2 h-4 w-4" />
//                                                     </Button>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </TabsContent>
//                         ))}
//                     </Tabs>
//                 </div>

//                 {/* Cross-Industry Solutions */}
//                 <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                     <div className="text-center mb-10">
//                         <h2 className="text-3xl font-bold text-white mb-4">
//                             Cross-Industry <span className="text-blue-400">Capabilities</span>
//                         </h2>
//                         <p className="text-gray-300 max-w-2xl mx-auto">
//                             While each industry has unique needs, many of our solutions leverage shared technologies and methodologies across sectors.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                             <div className="p-3 rounded-lg bg-blue-500/10 w-fit mb-4">
//                                 <Database className="h-6 w-6 text-blue-400" />
//                             </div>
//                             <h3 className="text-white font-semibold mb-3">Data Analytics</h3>
//                             <p className="text-gray-300 text-sm">
//                                 Extract actionable insights from your data across all business functions.
//                             </p>
//                         </div>

//                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                             <div className="p-3 rounded-lg bg-purple-500/10 w-fit mb-4">
//                                 <Cloud className="h-6 w-6 text-purple-400" />
//                             </div>
//                             <h3 className="text-white font-semibold mb-3">Cloud Integration</h3>
//                             <p className="text-gray-300 text-sm">
//                                 Scalable cloud solutions for businesses of all sizes across industries.
//                             </p>
//                         </div>

//                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                             <div className="p-3 rounded-lg bg-green-500/10 w-fit mb-4">
//                                 <Smartphone className="h-6 w-6 text-green-400" />
//                             </div>
//                             <h3 className="text-white font-semibold mb-3">Mobile-First</h3>
//                             <p className="text-gray-300 text-sm">
//                                 Responsive mobile solutions for on-the-go access to your systems.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="text-center mt-10">
//                         <Link to="/services">
//                             <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8">
//                                 Explore All Services
//                                 <ArrowRight className="ml-2 h-4 w-4" />
//                             </Button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default IndustriesPage;