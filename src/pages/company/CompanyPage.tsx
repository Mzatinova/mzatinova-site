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
    Building,
    Target,
    Eye,
    Users,
    Newspaper,
    Briefcase,
    Globe,
    Award,
    TrendingUp,
    Clock,
    Heart,
    Shield,
    Zap,
    ArrowRight,
    Mail,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    MapPin,
    Phone,
    Calendar,
    ChevronRight,
    CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CompanyPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('about');

    // Mission, Vision & Values
    const corePrinciples = [
        {
            title: 'Mission',
            icon: <Target className="h-8 w-8" />,
            description: 'To harness the power of technology to solve complex challenges across industries, creating sustainable, scalable solutions that make a meaningful impact on society.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Vision',
            icon: <Eye className="h-8 w-8" />,
            description: 'To be Africa\'s leading software innovation hub, transforming industries and shaping the future through cutting-edge technology solutions.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Values',
            icon: <Heart className="h-8 w-8" />,
            description: 'Innovation, Excellence, Integrity, Collaboration, and Impact - guiding every project and partnership we undertake.',
            color: 'from-teal-500 to-green-500'
        }
    ];

    // Values in detail
    const values = [
        {
            title: 'Innovation',
            description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
            icon: <Zap className="h-5 w-5" />
        },
        {
            title: 'Excellence',
            description: 'We commit to the highest standards in everything we do, from code quality to customer service.',
            icon: <Award className="h-5 w-5" />
        },
        {
            title: 'Integrity',
            description: 'We operate with honesty, transparency, and ethical practices in all our dealings.',
            icon: <Shield className="h-5 w-5" />
        },
        {
            title: 'Collaboration',
            description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
            icon: <Users className="h-5 w-5" />
        },
        {
            title: 'Impact',
            description: 'We measure success by the positive difference our solutions make in people\'s lives.',
            icon: <TrendingUp className="h-5 w-5" />
        }
    ];

    // Timeline/Milestones
    const milestones = [
        {
            year: '2023',
            title: 'Company Founded',
            description: 'Mzatinova was established with a vision to transform industries through technology.',
            icon: <Building className="h-5 w-5" />
        },
        {
            year: '2024',
            title: 'EduSpace Development',
            description: 'Began development of EduSpace Portal for educational institutions.',
            icon: <Target className="h-5 w-5" />
        },
        {
            year: '2024',
            title: 'UNIMA Partnership',
            description: 'EduSpace selected for EdTech@UNIMA 2026 conference.',
            icon: <Award className="h-5 w-5" />
        },
        {
            year: '2024',
            title: 'Product Expansion',
            description: 'Started development of Mzatinova Store and Zanga Social platforms.',
            icon: <TrendingUp className="h-5 w-5" />
        },
        {
            year: '2025',
            title: 'Regional Expansion',
            description: 'Planning expansion to serve clients across Sub-Saharan Africa.',
            icon: <Globe className="h-5 w-5" />
        },
        {
            year: '2030',
            title: 'Mzatinova Academy',
            description: 'Planned establishment of comprehensive educational institution.',
            icon: <Building className="h-5 w-5" />
        }
    ];

    // News items
    const recentNews = [
        {
            id: 1,
            title: 'EduSpace Portal Selected for EdTech@UNIMA 2026',
            date: 'Jan 15, 2026',
            category: 'Achievement',
            excerpt: 'Our educational platform will be showcased at the prestigious University of Malawi conference.',
            readTime: '3 min read'
        },
        {
            id: 2,
            title: 'Mzatinova Store Development Update',
            date: 'Jan 10, 2026',
            category: 'Development',
            excerpt: 'Progress continues on our e-commerce platform with exciting features in development.',
            readTime: '2 min read'
        },
        {
            id: 3,
            title: 'Founder to Graduate with B.Ed. in Computer Science',
            date: 'Mar 1, 2024',
            category: 'Milestone',
            excerpt: 'Combining pedagogical expertise with technical skills to drive educational innovation.',
            readTime: '4 min read'
        },
        {
            id: 4,
            title: 'Expanding AI Research Division',
            date: 'Feb 28, 2024',
            category: 'Growth',
            excerpt: 'Scaling up our AI research capabilities for healthcare, agriculture, and education.',
            readTime: '5 min read'
        }
    ];

    // Team members (optional section)
    const team = [
        {
            id: 1,
            name: 'Founder & CEO',
            role: 'Software Architect & Educator',
            bio: 'Bachelor of Education in Computer Science graduate with passion for educational technology and software innovation.',
            expertise: ['Software Development', 'EdTech', 'Product Strategy'],
            avatar: '/team/founder.jpg'
        },
        {
            id: 2,
            role: 'Development Team',
            bio: 'Our growing team of developers, designers, and engineers working across multiple projects.',
            expertise: ['Full-stack Development', 'UI/UX Design', 'Mobile Apps'],
            avatar: '/team/developers.jpg'
        },
        {
            id: 3,
            role: 'Advisory Board',
            bio: 'Industry experts and advisors guiding our strategic direction and technological innovation.',
            expertise: ['Technology Strategy', 'Business Development', 'Industry Expertise'],
            avatar: '/team/advisors.jpg'
        }
    ];

    // Future openings (careers)
    const futureOpenings = [
        {
            role: 'Senior Software Developer',
            department: 'Development',
            location: 'Remote',
            type: 'Full-time',
            status: 'Coming Soon'
        },
        {
            role: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            status: 'Planned'
        },
        {
            role: 'Product Manager',
            department: 'Product',
            location: 'Remote',
            type: 'Full-time',
            status: 'Future'
        },
        {
            role: 'Sales Executive',
            department: 'Business',
            location: 'Malawi',
            type: 'Full-time',
            status: 'Future'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
            <Header />
            <div className="container mx-auto px-6">

                {/* Tabs Navigation */}
                <div className="sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md py-6 mb-8 -mx-6 px-6 border-b border-slate-700">
                    <div className="flex justify-center">
                        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`flex items-center justify-center py-4 px-4 rounded-xl transition-all duration-300 ${activeTab === 'about'
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform scale-105'
                                    : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:scale-102'
                                    }`}
                            >
                                <Building className="h-5 w-5 mr-3" />
                                About
                            </button>
                            <button
                                onClick={() => setActiveTab('mission')}
                                className={`flex items-center justify-center py-4 px-4 rounded-xl transition-all duration-300 ${activeTab === 'mission'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                                    : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:scale-102'
                                    }`}
                            >
                                <Target className="h-5 w-5 mr-3" />
                                Mission & Vision
                            </button>
                            <button
                                onClick={() => setActiveTab('team')}
                                className={`flex items-center justify-center py-4 px-4 rounded-xl transition-all duration-300 ${activeTab === 'team'
                                    ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg transform scale-105'
                                    : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:scale-102'
                                    }`}
                            >
                                <Users className="h-5 w-5 mr-3" />
                                Our Team
                            </button>
                            <button
                                onClick={() => setActiveTab('news')}
                                className={`flex items-center justify-center py-4 px-4 rounded-xl transition-all duration-300 ${activeTab === 'news'
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                                    : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:scale-102'
                                    }`}
                            >
                                <Newspaper className="h-5 w-5 mr-3" />
                                News & Updates
                            </button>
                            <button
                                onClick={() => setActiveTab('careers')}
                                className={`flex items-center justify-center py-4 px-4 rounded-xl transition-all duration-300 ${activeTab === 'careers'
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg transform scale-105'
                                    : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:scale-102'
                                    }`}
                            >
                                <Briefcase className="h-5 w-5 mr-3" />
                                Careers
                            </button>
                        </div> */}





                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent">
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'about'
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Building className="h-4 w-4 mr-2" />
                                About                            </button>
                            <button
                                onClick={() => setActiveTab('mission')}
                                className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'mission'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Target className="h-4 w-4 mr-2" />
                                Mission & Vision
                            </button>
                            <button
                                onClick={() => setActiveTab('team')}
                                className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'team'
                                    ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Users className="h-4 w-4 mr-2" />
                                Our Team
                            </button>
                            <button
                                onClick={() => setActiveTab('news')}
                                className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'news'
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Newspaper className="h-4 w-4 mr-2" />
                                News & Updates
                            </button>
                            <button
                                onClick={() => setActiveTab('careers')}
                                className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'careers'
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Briefcase className="h-4 w-4 mr-2" />
                                Careers
                            </button>
                        </div>
                    </div>
                </div>

                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mzatinova</span>
                    </h1>

                    {/* "Our Story" badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-2.5 rounded-full mb-10 border border-blue-500/30 backdrop-blur-sm">
                        <Building className="h-5 w-5 text-blue-400 animate-pulse" />
                        <span className="text-sm font-medium text-blue-300">Our Story</span>
                    </div>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A global software company at the forefront of technological innovation, transforming industries and shaping the future.
                    </p>
                </div>

                {/* Tab Content */}
                <div className="mb-16">
                    {/* About Tab */}
                    {activeTab === 'about' && (
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Company Story */}
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        Our Story
                                    </h2>
                                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                        <p>
                                            Mzatinova was founded with a simple yet powerful vision: to bridge the gap between technological innovation
                                            and practical industry applications. Recognizing the transformative potential of software across sectors,
                                            we set out to build solutions that not only solve immediate challenges but also create lasting impact.
                                        </p>
                                        <p>
                                            Our journey began in education, where we saw firsthand the need for better digital tools in schools.
                                            This led to the development of EduSpace Portal, our flagship educational platform that is now transforming
                                            how schools, teachers, and parents interact with student data.
                                        </p>
                                        <p>
                                            Today, we've expanded our expertise to multiple industries—healthcare, finance, agriculture, retail,
                                            and AI research—always maintaining our core commitment to excellence, innovation, and social impact.
                                        </p>
                                        <p>
                                            Based in Malawi with a global vision, we're building the technological infrastructure for tomorrow's
                                            world, one solution at a time.
                                        </p>
                                    </div>
                                </div>

                                {/* Stats & Facts */}
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        By The Numbers
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6 mb-10">
                                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 text-center shadow-lg">
                                            <div className="text-3xl font-bold text-white mb-2">50+</div>
                                            <div className="text-gray-300 font-medium">Countries Reached</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 text-center shadow-lg">
                                            <div className="text-3xl font-bold text-white mb-2">100+</div>
                                            <div className="text-gray-300 font-medium">Solutions Built</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 text-center shadow-lg">
                                            <div className="text-3xl font-bold text-white mb-2">1M+</div>
                                            <div className="text-gray-300 font-medium">Users Impacted</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 text-center shadow-lg">
                                            <div className="text-3xl font-bold text-white mb-2">6</div>
                                            <div className="text-gray-300 font-medium">Industries Served</div>
                                        </div>
                                    </div>

                                    {/* Values */}
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-6">Our Core Values</h4>
                                        <div className="space-y-4">
                                            {values.map((value, index) => (
                                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors">
                                                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                                                        {value.icon}
                                                    </div>
                                                    <div>
                                                        <div className="text-white font-bold text-lg mb-1">{value.title}</div>
                                                        <div className="text-gray-300">{value.description}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="mt-12 pt-8 border-t border-slate-700">
                                <h3 className="text-3xl font-bold text-white mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Our Journey
                                </h3>
                                <div className="relative">
                                    {/* Timeline line */}
                                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

                                    <div className="space-y-8">
                                        {milestones.map((milestone, index) => (
                                            <div key={index} className="relative pl-20">
                                                <div className="absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"></div>
                                                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                                                            {milestone.icon}
                                                        </div>
                                                        <div>
                                                            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white px-4 py-1">
                                                                {milestone.year}
                                                            </Badge>
                                                            <h4 className="text-white font-bold text-xl mt-3">{milestone.title}</h4>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-300 text-lg">{milestone.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mission & Vision Tab */}
                    {activeTab === 'mission' && (
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                                {corePrinciples.map((principle, index) => (
                                    <Card
                                        key={index}
                                        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <CardHeader>
                                            <div className={`inline-flex items-center justify-center p-5 rounded-2xl bg-gradient-to-r ${principle.color}/20 mb-6 border border-white/10`}>
                                                {principle.icon}
                                            </div>
                                            <CardTitle className="text-white text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                                {principle.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-gray-300 text-lg leading-relaxed">
                                                {principle.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Impact Statement */}
                            <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-slate-900/30 rounded-xl p-8 border border-slate-700 mb-12">
                                <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Our Impact
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
                                            <Globe className="h-6 w-6 text-blue-400" />
                                            Local Focus, Global Vision
                                        </h4>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            While headquartered in Malawi, our solutions are designed with global scalability in mind.
                                            We understand local challenges and create solutions that can adapt to different markets and contexts.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
                                            <TrendingUp className="h-6 w-6 text-green-400" />
                                            Sustainable Growth
                                        </h4>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            We believe in building technology that grows with our clients. Our solutions are scalable,
                                            maintainable, and designed for long-term success rather than short-term gains.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Future Vision */}
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Looking Ahead
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700">
                                        <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                                            <Clock className="h-6 w-6 text-blue-400" />
                                            Short-term Goals (2024-2025)
                                        </h4>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3 text-gray-300 text-lg">
                                                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                                                Launch Mzatinova Store e-commerce platform
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-300 text-lg">
                                                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                                                Expand EduSpace to 100+ schools
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-300 text-lg">
                                                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                                                Establish partnerships in 3 new countries
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700">
                                        <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                                            <Target className="h-6 w-6 text-purple-400" />
                                            Long-term Vision (2026-2030)
                                        </h4>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3 text-gray-300 text-lg">
                                                <Building className="h-5 w-5 text-blue-400 mt-0.5" />
                                                Establish Mzatinova Academy
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-300 text-lg">
                                                <Globe className="h-5 w-5 text-green-400 mt-0.5" />
                                                Serve clients in 30+ countries
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-300 text-lg">
                                                <Award className="h-5 w-5 text-yellow-400 mt-0.5" />
                                                Become recognized as Africa's leading software innovator
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Team Tab */}
                    {activeTab === 'team' && (
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Our Team
                                </h2>
                                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                                    A diverse group of innovators, engineers, and visionaries working together to build
                                    technology that transforms industries and creates positive impact.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {team.map((member) => (
                                    <Card key={member.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                                        <CardHeader>
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                                                    {member.avatar ? (
                                                        <img
                                                            src={member.avatar}
                                                            alt={member.name || member.role}
                                                            className="w-full h-full rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <Users className="h-20 w-20 text-white" />
                                                    )}
                                                </div>
                                                {member.name && (
                                                    <CardTitle className="text-white text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                                        {member.name}
                                                    </CardTitle>
                                                )}
                                                <CardDescription className="text-blue-300 font-bold text-lg mt-2">
                                                    {member.role}
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <p className="text-gray-300 mb-6 text-lg">{member.bio}</p>
                                            <div className="flex flex-wrap gap-3 justify-center">
                                                {member.expertise.map((skill, index) => (
                                                    <Badge
                                                        key={index}
                                                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-0 text-blue-300 px-4 py-2"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Join Team CTA */}
                            <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-slate-900/30 rounded-xl p-8 border border-slate-700 text-center">
                                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Join Our Journey
                                </h3>
                                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                    We're always looking for talented individuals who share our passion for innovation
                                    and making a difference through technology.
                                </p>
                                <Button
                                    onClick={() => setActiveTab('careers')}
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 px-10 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    View Career Opportunities
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* News & Updates Tab */}
                    {activeTab === 'news' && (
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
                            <div className="flex justify-between items-center mb-10">
                                <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    News & Updates
                                </h2>
                                <Button
                                    variant="outline"
                                    className="border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-300 px-8 py-6"
                                >
                                    View All News
                                    <ChevronRight className="ml-3 h-5 w-5" />
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {recentNews.map((news) => (
                                    <Card key={news.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-xl group">
                                        <CardHeader>
                                            <div className="flex justify-between items-start mb-4">
                                                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white px-4 py-1.5">
                                                    {news.category}
                                                </Badge>
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Calendar className="h-4 w-4" />
                                                    {news.date}
                                                </div>
                                            </div>
                                            <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                                {news.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-gray-300 mb-6 text-lg">
                                                {news.excerpt}
                                            </CardDescription>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-400">{news.readTime}</span>
                                                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto group-hover:translate-x-1 transition-transform">
                                                    Read More
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Newsletter Signup */}
                            <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-slate-900/30 rounded-xl p-8 border border-slate-700">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                            Stay Updated
                                        </h3>
                                        <p className="text-gray-300 text-lg">
                                            Subscribe to our newsletter for the latest company news, product updates, and industry insights.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex gap-3">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="flex-1 px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                                            />
                                            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 shadow-lg hover:shadow-xl">
                                                Subscribe
                                            </Button>
                                        </div>
                                        <p className="text-gray-400 text-sm mt-3">
                                            We respect your privacy. Unsubscribe at any time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Careers Tab */}
                    {activeTab === 'careers' && (
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Careers at Mzatinova
                                </h2>
                                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                                    Join us in building the future. We're creating opportunities for talented individuals
                                    who want to make a difference through technology.
                                </p>
                            </div>

                            {/* Current Openings */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-white mb-8">Future Opportunities</h3>
                                <div className="space-y-4">
                                    {futureOpenings.map((opening, index) => (
                                        <div
                                            key={index}
                                            className="p-6 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/40 transition-all duration-300 group hover:shadow-lg"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                <div>
                                                    <h4 className="text-white font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                                        {opening.role}
                                                    </h4>
                                                    <div className="flex flex-wrap gap-3">
                                                        <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-0 text-blue-300 px-4 py-1.5">
                                                            {opening.department}
                                                        </Badge>
                                                        <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-0 text-green-300 px-4 py-1.5">
                                                            {opening.location}
                                                        </Badge>
                                                        <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-0 text-purple-300 px-4 py-1.5">
                                                            {opening.type}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Badge className={
                                                        opening.status === 'Coming Soon'
                                                            ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-0 text-yellow-400'
                                                            : opening.status === 'Planned'
                                                                ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-0 text-blue-400'
                                                                : 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 border-0 text-gray-400'
                                                    }>
                                                        {opening.status}
                                                    </Badge>
                                                    <Button
                                                        variant="outline"
                                                        className="border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                        disabled
                                                    >
                                                        Notify Me
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Work With Us */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700">
                                    <h4 className="text-white font-bold text-xl mb-6">Why Join Mzatinova?</h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-800 transition-colors">
                                            <Zap className="h-6 w-6 text-blue-400 mt-0.5" />
                                            <span className="text-gray-300 text-lg">Work on cutting-edge technology projects</span>
                                        </li>
                                        <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-800 transition-colors">
                                            <Globe className="h-6 w-6 text-green-400 mt-0.5" />
                                            <span className="text-gray-300 text-lg">Make real impact across multiple industries</span>
                                        </li>
                                        <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-800 transition-colors">
                                            <TrendingUp className="h-6 w-6 text-purple-400 mt-0.5" />
                                            <span className="text-gray-300 text-lg">Grow with a rapidly expanding company</span>
                                        </li>
                                        <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-800 transition-colors">
                                            <Users className="h-6 w-6 text-yellow-400 mt-0.5" />
                                            <span className="text-gray-300 text-lg">Collaborate with passionate innovators</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-slate-700">
                                    <h4 className="text-white font-bold text-xl mb-6">Get in Touch</h4>
                                    <p className="text-gray-300 text-lg mb-8">
                                        Even if you don't see the perfect role listed, we're always interested in hearing from
                                        talented individuals who share our vision.
                                    </p>
                                    <Link to="/contact">
                                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-7 text-lg font-bold shadow-lg hover:shadow-xl">
                                            Send Your Resume
                                            <Mail className="ml-3 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>

        </div>
    );
};

export default CompanyPage;

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
//     Building,
//     Target,
//     Eye,
//     Users,
//     Newspaper,
//     Briefcase,
//     Globe,
//     Award,
//     TrendingUp,
//     Clock,
//     Heart,
//     Shield,
//     Zap,
//     ArrowRight,
//     Mail,
//     Linkedin,
//     Twitter,
//     Facebook,
//     Instagram,
//     MapPin,
//     Phone,
//     Calendar,
//     ChevronRight,
//     CheckCircle
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const CompanyPage: React.FC = () => {
//     const [activeTab, setActiveTab] = useState<string>('about');

//     // Mission, Vision & Values
//     const corePrinciples = [
//         {
//             title: 'Mission',
//             icon: <Target className="h-8 w-8" />,
//             description: 'To harness the power of technology to solve complex challenges across industries, creating sustainable, scalable solutions that make a meaningful impact on society.',
//             color: 'from-blue-500 to-cyan-500'
//         },
//         {
//             title: 'Vision',
//             icon: <Eye className="h-8 w-8" />,
//             description: 'To be Africa\'s leading software innovation hub, transforming industries and shaping the future through cutting-edge technology solutions.',
//             color: 'from-purple-500 to-pink-500'
//         },
//         {
//             title: 'Values',
//             icon: <Heart className="h-8 w-8" />,
//             description: 'Innovation, Excellence, Integrity, Collaboration, and Impact - guiding every project and partnership we undertake.',
//             color: 'from-teal-500 to-green-500'
//         }
//     ];

//     // Values in detail
//     const values = [
//         {
//             title: 'Innovation',
//             description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
//             icon: <Zap className="h-5 w-5" />
//         },
//         {
//             title: 'Excellence',
//             description: 'We commit to the highest standards in everything we do, from code quality to customer service.',
//             icon: <Award className="h-5 w-5" />
//         },
//         {
//             title: 'Integrity',
//             description: 'We operate with honesty, transparency, and ethical practices in all our dealings.',
//             icon: <Shield className="h-5 w-5" />
//         },
//         {
//             title: 'Collaboration',
//             description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
//             icon: <Users className="h-5 w-5" />
//         },
//         {
//             title: 'Impact',
//             description: 'We measure success by the positive difference our solutions make in people\'s lives.',
//             icon: <TrendingUp className="h-5 w-5" />
//         }
//     ];

//     // Timeline/Milestones
//     const milestones = [
//         {
//             year: '2023',
//             title: 'Company Founded',
//             description: 'Mzatinova was established with a vision to transform industries through technology.',
//             icon: <Building className="h-5 w-5" />
//         },
//         {
//             year: '2024',
//             title: 'EduSpace Development',
//             description: 'Began development of EduSpace Portal for educational institutions.',
//             icon: <Target className="h-5 w-5" />
//         },
//         {
//             year: '2024',
//             title: 'UNIMA Partnership',
//             description: 'EduSpace selected for EdTech@UNIMA 2026 conference.',
//             icon: <Award className="h-5 w-5" />
//         },
//         {
//             year: '2024',
//             title: 'Product Expansion',
//             description: 'Started development of Mzatinova Store and Zanga Social platforms.',
//             icon: <TrendingUp className="h-5 w-5" />
//         },
//         {
//             year: '2025',
//             title: 'Regional Expansion',
//             description: 'Planning expansion to serve clients across Sub-Saharan Africa.',
//             icon: <Globe className="h-5 w-5" />
//         },
//         {
//             year: '2030',
//             title: 'Mzatinova Academy',
//             description: 'Planned establishment of comprehensive educational institution.',
//             icon: <Building className="h-5 w-5" />
//         }
//     ];

//     // News items
//     const recentNews = [
//         {
//             id: 1,
//             title: 'EduSpace Portal Selected for EdTech@UNIMA 2026',
//             date: 'Jan 15, 2026',
//             category: 'Achievement',
//             excerpt: 'Our educational platform will be showcased at the prestigious University of Malawi conference.',
//             readTime: '3 min read'
//         },
//         {
//             id: 2,
//             title: 'Mzatinova Store Development Update',
//             date: 'Jan 10, 2026',
//             category: 'Development',
//             excerpt: 'Progress continues on our e-commerce platform with exciting features in development.',
//             readTime: '2 min read'
//         },
//         {
//             id: 3,
//             title: 'Founder to Graduate with B.Ed. in Computer Science',
//             date: 'Mar 1, 2024',
//             category: 'Milestone',
//             excerpt: 'Combining pedagogical expertise with technical skills to drive educational innovation.',
//             readTime: '4 min read'
//         },
//         {
//             id: 4,
//             title: 'Expanding AI Research Division',
//             date: 'Feb 28, 2024',
//             category: 'Growth',
//             excerpt: 'Scaling up our AI research capabilities for healthcare, agriculture, and education.',
//             readTime: '5 min read'
//         }
//     ];

//     // Team members (optional section)
//     const team = [
//         {
//             id: 1,
//             name: 'Founder & CEO',
//             role: 'Software Architect & Educator',
//             bio: 'Bachelor of Education in Computer Science graduate with passion for educational technology and software innovation.',
//             expertise: ['Software Development', 'EdTech', 'Product Strategy'],
//             avatar: '/team/founder.jpg'
//         },
//         {
//             id: 2,
//             role: 'Development Team',
//             bio: 'Our growing team of developers, designers, and engineers working across multiple projects.',
//             expertise: ['Full-stack Development', 'UI/UX Design', 'Mobile Apps'],
//             avatar: '/team/developers.jpg'
//         },
//         {
//             id: 3,
//             role: 'Advisory Board',
//             bio: 'Industry experts and advisors guiding our strategic direction and technological innovation.',
//             expertise: ['Technology Strategy', 'Business Development', 'Industry Expertise'],
//             avatar: '/team/advisors.jpg'
//         }
//     ];

//     // Future openings (careers)
//     const futureOpenings = [
//         {
//             role: 'Senior Software Developer',
//             department: 'Development',
//             location: 'Remote',
//             type: 'Full-time',
//             status: 'Coming Soon'
//         },
//         {
//             role: 'UI/UX Designer',
//             department: 'Design',
//             location: 'Remote',
//             type: 'Full-time',
//             status: 'Planned'
//         },
//         {
//             role: 'Product Manager',
//             department: 'Product',
//             location: 'Remote',
//             type: 'Full-time',
//             status: 'Future'
//         },
//         {
//             role: 'Sales Executive',
//             department: 'Business',
//             location: 'Malawi',
//             type: 'Full-time',
//             status: 'Future'
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">

//                 {/* MOVED: Tabs Navigation - Fixed sticky positioning */}
//                 <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-md py-6 mb-8 -mx-6 px-6 border-b border-white/10">
//                     <div className="flex justify-center">
//                         <div className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent">
//                             <button
//                                 onClick={() => setActiveTab('about')}
//                                 className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'about'
//                                     ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
//                                     : 'text-gray-300 hover:text-white hover:bg-white/5'
//                                     }`}
//                             >
//                                 <Building className="h-4 w-4 mr-2" />
//                                 About
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab('mission')}
//                                 className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'mission'
//                                     ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
//                                     : 'text-gray-300 hover:text-white hover:bg-white/5'
//                                     }`}
//                             >
//                                 <Target className="h-4 w-4 mr-2" />
//                                 Mission & Vision
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab('team')}
//                                 className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'team'
//                                     ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white'
//                                     : 'text-gray-300 hover:text-white hover:bg-white/5'
//                                     }`}
//                             >
//                                 <Users className="h-4 w-4 mr-2" />
//                                 Our Team
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab('news')}
//                                 className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'news'
//                                     ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
//                                     : 'text-gray-300 hover:text-white hover:bg-white/5'
//                                     }`}
//                             >
//                                 <Newspaper className="h-4 w-4 mr-2" />
//                                 News & Updates
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab('careers')}
//                                 className={`flex items-center justify-center py-3 rounded-md transition-all duration-300 ${activeTab === 'careers'
//                                     ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
//                                     : 'text-gray-300 hover:text-white hover:bg-white/5'
//                                     }`}
//                             >
//                                 <Briefcase className="h-4 w-4 mr-2" />
//                                 Careers
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Page Header */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                         About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mzatinova</span>
//                     </h1>

//                     {/* MOVED: "Our Story" badge - Placed below the main title */}
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
//                         <Building className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Our Story</span>
//                     </div>

//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         A global software company at the forefront of technological innovation, transforming industries and shaping the future.
//                     </p>
//                 </div>

//                 {/* Tab Content */}
//                 <div className="mb-16">
//                     {/* About Tab */}
//                     {activeTab === 'about' && (
//                         <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                                 {/* Company Story */}
//                                 <div>
//                                     <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
//                                     <div className="space-y-4 text-gray-300">
//                                         <p>
//                                             Mzatinova was founded with a simple yet powerful vision: to bridge the gap between technological innovation
//                                             and practical industry applications. Recognizing the transformative potential of software across sectors,
//                                             we set out to build solutions that not only solve immediate challenges but also create lasting impact.
//                                         </p>
//                                         <p>
//                                             Our journey began in education, where we saw firsthand the need for better digital tools in schools.
//                                             This led to the development of EduSpace Portal, our flagship educational platform that is now transforming
//                                             how schools, teachers, and parents interact with student data.
//                                         </p>
//                                         <p>
//                                             Today, we've expanded our expertise to multiple industries—healthcare, finance, agriculture, retail,
//                                             and AI research—always maintaining our core commitment to excellence, innovation, and social impact.
//                                         </p>
//                                         <p>
//                                             Based in Malawi with a global vision, we're building the technological infrastructure for tomorrow's
//                                             world, one solution at a time.
//                                         </p>
//                                     </div>
//                                 </div>

//                                 {/* Stats & Facts */}
//                                 <div>
//                                     <h3 className="text-2xl font-bold text-white mb-6">By The Numbers</h3>
//                                     <div className="grid grid-cols-2 gap-6">
//                                         <div className="bg-black/50 rounded-xl p-6 border border-white/10 text-center">
//                                             <div className="text-3xl font-bold text-white mb-2">50+</div>
//                                             <div className="text-gray-300">Countries Reached</div>
//                                         </div>
//                                         <div className="bg-black/50 rounded-xl p-6 border border-white/10 text-center">
//                                             <div className="text-3xl font-bold text-white mb-2">100+</div>
//                                             <div className="text-gray-300">Solutions Built</div>
//                                         </div>
//                                         <div className="bg-black/50 rounded-xl p-6 border border-white/10 text-center">
//                                             <div className="text-3xl font-bold text-white mb-2">1M+</div>
//                                             <div className="text-gray-300">Users Impacted</div>
//                                         </div>
//                                         <div className="bg-black/50 rounded-xl p-6 border border-white/10 text-center">
//                                             <div className="text-3xl font-bold text-white mb-2">6</div>
//                                             <div className="text-gray-300">Industries Served</div>
//                                         </div>
//                                     </div>

//                                     {/* Values */}
//                                     <div className="mt-8">
//                                         <h4 className="text-white font-semibold mb-4">Our Core Values</h4>
//                                         <div className="space-y-3">
//                                             {values.map((value, index) => (
//                                                 <div key={index} className="flex items-center gap-3">
//                                                     <div className="p-2 rounded-lg bg-white/5">
//                                                         {value.icon}
//                                                     </div>
//                                                     <div>
//                                                         <div className="text-white font-medium">{value.title}</div>
//                                                         <div className="text-gray-300 text-sm">{value.description}</div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Timeline */}
//                             <div className="mt-12 pt-8 border-t border-white/10">
//                                 <h3 className="text-2xl font-bold text-white mb-8">Our Journey</h3>
//                                 <div className="relative">
//                                     {/* Timeline line */}
//                                     <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

//                                     <div className="space-y-8">
//                                         {milestones.map((milestone, index) => (
//                                             <div key={index} className="relative pl-20">
//                                                 <div className="absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
//                                                 <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                                     <div className="flex items-center gap-4 mb-3">
//                                                         <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10">
//                                                             {milestone.icon}
//                                                         </div>
//                                                         <div>
//                                                             <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
//                                                                 {milestone.year}
//                                                             </Badge>
//                                                             <h4 className="text-white font-semibold mt-2">{milestone.title}</h4>
//                                                         </div>
//                                                     </div>
//                                                     <p className="text-gray-300">{milestone.description}</p>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Mission & Vision Tab */}
//                     {activeTab === 'mission' && (
//                         <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//                                 {corePrinciples.map((principle, index) => (
//                                     <Card
//                                         key={index}
//                                         className={`bg-gradient-to-br ${principle.color}/10 to-black/50 border-white/10 backdrop-blur-sm`}
//                                     >
//                                         <CardHeader>
//                                             <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r ${principle.color}/20 mb-4`}>
//                                                 {principle.icon}
//                                             </div>
//                                             <CardTitle className="text-white text-2xl">{principle.title}</CardTitle>
//                                         </CardHeader>
//                                         <CardContent>
//                                             <CardDescription className="text-gray-300 text-lg">
//                                                 {principle.description}
//                                             </CardDescription>
//                                         </CardContent>
//                                     </Card>
//                                 ))}
//                             </div>

//                             {/* Impact Statement */}
//                             <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-white/10">
//                                 <h3 className="text-2xl font-bold text-white mb-6">Our Impact</h3>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
//                                             <Globe className="h-5 w-5 text-blue-400" />
//                                             Local Focus, Global Vision
//                                         </h4>
//                                         <p className="text-gray-300">
//                                             While headquartered in Malawi, our solutions are designed with global scalability in mind.
//                                             We understand local challenges and create solutions that can adapt to different markets and contexts.
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
//                                             <TrendingUp className="h-5 w-5 text-green-400" />
//                                             Sustainable Growth
//                                         </h4>
//                                         <p className="text-gray-300">
//                                             We believe in building technology that grows with our clients. Our solutions are scalable,
//                                             maintainable, and designed for long-term success rather than short-term gains.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Future Vision */}
//                             <div className="mt-12">
//                                 <h3 className="text-2xl font-bold text-white mb-8">Looking Ahead</h3>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                         <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
//                                             <Clock className="h-5 w-5 text-blue-400" />
//                                             Short-term Goals (2024-2025)
//                                         </h4>
//                                         <ul className="space-y-2">
//                                             <li className="flex items-start gap-2 text-gray-300">
//                                                 <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
//                                                 Launch Mzatinova Store e-commerce platform
//                                             </li>
//                                             <li className="flex items-start gap-2 text-gray-300">
//                                                 <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
//                                                 Expand EduSpace to 100+ schools
//                                             </li>
//                                             <li className="flex items-start gap-2 text-gray-300">
//                                                 <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
//                                                 Establish partnerships in 3 new countries
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                         <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
//                                             <Target className="h-5 w-5 text-purple-400" />
//                                             Long-term Vision (2026-2030)
//                                         </h4>
//                                         <ul className="space-y-2">
//                                             <li className="flex items-start gap-2 text-gray-300">
//                                                 <Building className="h-4 w-4 text-blue-400 mt-0.5" />
//                                                 Establish Mzatinova Academy
//                                             </li>
//                                             <li className="flex items-start gap-2 text-gray-300">
//                                                 <Globe className="h-4 w-4 text-green-400 mt-0.5" />
//                                                 Serve clients in 30+ countries
//                                             </li>
//                                             <li className="flex items-start gap-2 text-gray-300">
//                                                 <Award className="h-4 w-4 text-yellow-400 mt-0.5" />
//                                                 Become recognized as Africa's leading software innovator
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Team Tab */}
//                     {activeTab === 'team' && (
//                         <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                             <div className="text-center mb-12">
//                                 <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
//                                 <p className="text-gray-300 max-w-2xl mx-auto">
//                                     A diverse group of innovators, engineers, and visionaries working together to build
//                                     technology that transforms industries and creates positive impact.
//                                 </p>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//                                 {team.map((member) => (
//                                     <Card key={member.id} className="bg-black/50 border-white/10 hover:border-blue-500/30 transition-colors">
//                                         <CardHeader>
//                                             <div className="flex flex-col items-center text-center">
//                                                 <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
//                                                     {member.avatar ? (
//                                                         <img
//                                                             src={member.avatar}
//                                                             alt={member.name || member.role}
//                                                             className="w-full h-full rounded-full object-cover"
//                                                         />
//                                                     ) : (
//                                                         <Users className="h-16 w-16 text-white" />
//                                                     )}
//                                                 </div>
//                                                 {member.name && (
//                                                     <CardTitle className="text-white">{member.name}</CardTitle>
//                                                 )}
//                                                 <CardDescription className="text-blue-300 font-medium">
//                                                     {member.role}
//                                                 </CardDescription>
//                                             </div>
//                                         </CardHeader>
//                                         <CardContent className="text-center">
//                                             <p className="text-gray-300 mb-4">{member.bio}</p>
//                                             <div className="flex flex-wrap gap-2 justify-center">
//                                                 {member.expertise.map((skill, index) => (
//                                                     <Badge
//                                                         key={index}
//                                                         variant="outline"
//                                                         className="border-blue-400/30 text-blue-300"
//                                                     >
//                                                         {skill}
//                                                     </Badge>
//                                                 ))}
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//                                 ))}
//                             </div>

//                             {/* Join Team CTA */}
//                             <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-white/10 text-center">
//                                 <h3 className="text-2xl font-bold text-white mb-4">Join Our Journey</h3>
//                                 <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//                                     We're always looking for talented individuals who share our passion for innovation
//                                     and making a difference through technology.
//                                 </p>
//                                 <Button
//                                     onClick={() => setActiveTab('careers')}
//                                     className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
//                                 >
//                                     View Career Opportunities
//                                     <ArrowRight className="ml-2 h-4 w-4" />
//                                 </Button>
//                             </div>
//                         </div>
//                     )}

//                     {/* News & Updates Tab */}
//                     {activeTab === 'news' && (
//                         <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                             <div className="flex justify-between items-center mb-8">
//                                 <h2 className="text-3xl font-bold text-white">News & Updates</h2>
//                                 <Button
//                                     variant="outline"
//                                     className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
//                                 >
//                                     View All News
//                                     <ChevronRight className="ml-2 h-4 w-4" />
//                                 </Button>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//                                 {recentNews.map((news) => (
//                                     <Card key={news.id} className="bg-black/50 border-white/10 hover:border-blue-500/30 transition-colors group">
//                                         <CardHeader>
//                                             <div className="flex justify-between items-start mb-4">
//                                                 <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
//                                                     {news.category}
//                                                 </Badge>
//                                                 <div className="flex items-center gap-2 text-sm text-gray-400">
//                                                     <Calendar className="h-3 w-3" />
//                                                     {news.date}
//                                                 </div>
//                                             </div>
//                                             <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
//                                                 {news.title}
//                                             </CardTitle>
//                                         </CardHeader>
//                                         <CardContent>
//                                             <CardDescription className="text-gray-300 mb-4">
//                                                 {news.excerpt}
//                                             </CardDescription>
//                                             <div className="flex items-center justify-between">
//                                                 <span className="text-sm text-gray-400">{news.readTime}</span>
//                                                 <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto">
//                                                     Read More
//                                                     <ArrowRight className="ml-1 h-3 w-3" />
//                                                 </Button>
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//                                 ))}
//                             </div>

//                             {/* Newsletter Signup */}
//                             <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-white/10">
//                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                                     <div>
//                                         <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
//                                         <p className="text-gray-300">
//                                             Subscribe to our newsletter for the latest company news, product updates, and industry insights.
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <div className="flex gap-2">
//                                             <input
//                                                 type="email"
//                                                 placeholder="Enter your email"
//                                                 className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//                                             />
//                                             <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
//                                                 Subscribe
//                                             </Button>
//                                         </div>
//                                         <p className="text-gray-400 text-sm mt-2">
//                                             We respect your privacy. Unsubscribe at any time.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Careers Tab */}
//                     {activeTab === 'careers' && (
//                         <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                             <div className="text-center mb-12">
//                                 <h2 className="text-3xl font-bold text-white mb-4">Careers at Mzatinova</h2>
//                                 <p className="text-gray-300 max-w-2xl mx-auto">
//                                     Join us in building the future. We're creating opportunities for talented individuals
//                                     who want to make a difference through technology.
//                                 </p>
//                             </div>

//                             {/* Current Openings */}
//                             <div className="mb-12">
//                                 <h3 className="text-2xl font-bold text-white mb-6">Future Opportunities</h3>
//                                 <div className="space-y-4">
//                                     {futureOpenings.map((opening, index) => (
//                                         <div
//                                             key={index}
//                                             className="p-6 rounded-xl bg-black/50 border border-white/10 hover:border-blue-500/30 transition-colors group"
//                                         >
//                                             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                                                 <div>
//                                                     <h4 className="text-white font-semibold text-lg mb-2">{opening.role}</h4>
//                                                     <div className="flex flex-wrap gap-3">
//                                                         <Badge variant="outline" className="border-blue-400/30 text-blue-300">
//                                                             {opening.department}
//                                                         </Badge>
//                                                         <Badge variant="outline" className="border-green-400/30 text-green-300">
//                                                             {opening.location}
//                                                         </Badge>
//                                                         <Badge variant="outline" className="border-purple-400/30 text-purple-300">
//                                                             {opening.type}
//                                                         </Badge>
//                                                     </div>
//                                                 </div>
//                                                 <div className="flex items-center gap-4">
//                                                     <Badge className={
//                                                         opening.status === 'Coming Soon'
//                                                             ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
//                                                             : opening.status === 'Planned'
//                                                                 ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
//                                                                 : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
//                                                     }>
//                                                         {opening.status}
//                                                     </Badge>
//                                                     <Button
//                                                         variant="outline"
//                                                         className="border-blue-400 text-blue-400 hover:bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity"
//                                                         disabled
//                                                     >
//                                                         Notify Me
//                                                     </Button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Why Work With Us */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                                 <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                     <h4 className="text-white font-semibold text-xl mb-4">Why Join Mzatinova?</h4>
//                                     <ul className="space-y-3">
//                                         <li className="flex items-start gap-3">
//                                             <Zap className="h-5 w-5 text-blue-400 mt-0.5" />
//                                             <span className="text-gray-300">Work on cutting-edge technology projects</span>
//                                         </li>
//                                         <li className="flex items-start gap-3">
//                                             <Globe className="h-5 w-5 text-green-400 mt-0.5" />
//                                             <span className="text-gray-300">Make real impact across multiple industries</span>
//                                         </li>
//                                         <li className="flex items-start gap-3">
//                                             <TrendingUp className="h-5 w-5 text-purple-400 mt-0.5" />
//                                             <span className="text-gray-300">Grow with a rapidly expanding company</span>
//                                         </li>
//                                         <li className="flex items-start gap-3">
//                                             <Users className="h-5 w-5 text-yellow-400 mt-0.5" />
//                                             <span className="text-gray-300">Collaborate with passionate innovators</span>
//                                         </li>
//                                     </ul>
//                                 </div>

//                                 <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-white/10">
//                                     <h4 className="text-white font-semibold text-xl mb-4">Get in Touch</h4>
//                                     <p className="text-gray-300 mb-6">
//                                         Even if you don't see the perfect role listed, we're always interested in hearing from
//                                         talented individuals who share our vision.
//                                     </p>
//                                     <Link to="/contact">
//                                         <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
//                                             Send Your Resume
//                                             <Mail className="ml-2 h-4 w-4" />
//                                         </Button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Contact & Social Links */}
//                 <Footer />
//             </div>

//         </div>
//     );
// };

// export default CompanyPage;

// import React from 'react';
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
//     Building,
//     Target,
//     Eye,
//     Users,
//     Newspaper,
//     Briefcase,
//     Globe,
//     Award,
//     TrendingUp,
//     Clock,
//     Heart,
//     Shield,
//     Zap,
//     ArrowRight,
//     Mail,
//     Linkedin,
//     Twitter,
//     Facebook,
//     Instagram,
//     MapPin,
//     Phone,
//     Calendar,
//     ChevronRight,
//     CheckCircle
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';

// const CompanyPage: React.FC = () => {
//     // Mission, Vision & Values
//     const corePrinciples = [
//         {
//             title: 'Mission',
//             icon: <Target className="h-8 w-8" />,
//             description: 'To harness the power of technology to solve complex challenges across industries, creating sustainable, scalable solutions that make a meaningful impact on society.',
//             color: 'from-blue-500 to-cyan-500'
//         },
//         {
//             title: 'Vision',
//             icon: <Eye className="h-8 w-8" />,
//             description: 'To be Africa\'s leading software innovation hub, transforming industries and shaping the future through cutting-edge technology solutions.',
//             color: 'from-purple-500 to-pink-500'
//         },
//         {
//             title: 'Values',
//             icon: <Heart className="h-8 w-8" />,
//             description: 'Innovation, Excellence, Integrity, Collaboration, and Impact - guiding every project and partnership we undertake.',
//             color: 'from-teal-500 to-green-500'
//         }
//     ];

//     // Values in detail
//     const values = [
//         {
//             title: 'Innovation',
//             description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
//             icon: <Zap className="h-5 w-5" />
//         },
//         {
//             title: 'Excellence',
//             description: 'We commit to the highest standards in everything we do, from code quality to customer service.',
//             icon: <Award className="h-5 w-5" />
//         },
//         {
//             title: 'Integrity',
//             description: 'We operate with honesty, transparency, and ethical practices in all our dealings.',
//             icon: <Shield className="h-5 w-5" />
//         },
//         {
//             title: 'Collaboration',
//             description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
//             icon: <Users className="h-5 w-5" />
//         },
//         {
//             title: 'Impact',
//             description: 'We measure success by the positive difference our solutions make in people\'s lives.',
//             icon: <TrendingUp className="h-5 w-5" />
//         }
//     ];

//     // Timeline/Milestones
//     const milestones = [
//         {
//             year: '2023',
//             title: 'Company Founded',
//             description: 'Mzatinova was established with a vision to transform industries through technology.',
//             icon: <Building className="h-5 w-5" />
//         },
//         {
//             year: '2024',
//             title: 'EduSpace Development',
//             description: 'Began development of EduSpace Portal for educational institutions.',
//             icon: <Target className="h-5 w-5" />
//         },
//         {
//             year: '2024',
//             title: 'UNIMA Partnership',
//             description: 'EduSpace selected for EdTech@UNIMA 2026 conference.',
//             icon: <Award className="h-5 w-5" />
//         },
//         {
//             year: '2024',
//             title: 'Product Expansion',
//             description: 'Started development of Mzatinova Store and Zanga Social platforms.',
//             icon: <TrendingUp className="h-5 w-5" />
//         },
//         {
//             year: '2025',
//             title: 'Regional Expansion',
//             description: 'Planning expansion to serve clients across Sub-Saharan Africa.',
//             icon: <Globe className="h-5 w-5" />
//         },
//         {
//             year: '2030',
//             title: 'Mzatinova Academy',
//             description: 'Planned establishment of comprehensive educational institution.',
//             icon: <Building className="h-5 w-5" />
//         }
//     ];

//     // News items
//     const recentNews = [
//         {
//             id: 1,
//             title: 'EduSpace Portal Selected for EdTech@UNIMA 2026',
//             date: 'Jan 15, 2026',
//             category: 'Achievement',
//             excerpt: 'Our educational platform will be showcased at the prestigious University of Malawi conference.',
//             readTime: '3 min read'
//         },
//         {
//             id: 2,
//             title: 'Mzatinova Store Development Update',
//             date: 'Jan 10, 2026',
//             category: 'Development',
//             excerpt: 'Progress continues on our e-commerce platform with exciting features in development.',
//             readTime: '2 min read'
//         },
//         {
//             id: 3,
//             title: 'Founder to Graduate with B.Ed. in Computer Science',
//             date: 'Mar 1, 2024',
//             category: 'Milestone',
//             excerpt: 'Combining pedagogical expertise with technical skills to drive educational innovation.',
//             readTime: '4 min read'
//         },
//         {
//             id: 4,
//             title: 'Expanding AI Research Division',
//             date: 'Feb 28, 2024',
//             category: 'Growth',
//             excerpt: 'Scaling up our AI research capabilities for healthcare, agriculture, and education.',
//             readTime: '5 min read'
//         }
//     ];

//     // Team members (optional section)
//     const team = [
//         {
//             id: 1,
//             name: 'Founder & CEO',
//             role: 'Software Architect & Educator',
//             bio: 'Bachelor of Education in Computer Science graduate with passion for educational technology and software innovation.',
//             expertise: ['Software Development', 'EdTech', 'Product Strategy'],
//             avatar: '/team/founder.jpg'
//         },
//         {
//             id: 2,
//             role: 'Development Team',
//             bio: 'Our growing team of developers, designers, and engineers working across multiple projects.',
//             expertise: ['Full-stack Development', 'UI/UX Design', 'Mobile Apps'],
//             avatar: '/team/developers.jpg'
//         },
//         {
//             id: 3,
//             role: 'Advisory Board',
//             bio: 'Industry experts and advisors guiding our strategic direction and technological innovation.',
//             expertise: ['Technology Strategy', 'Business Development', 'Industry Expertise'],
//             avatar: '/team/advisors.jpg'
//         }
//     ];

//     // Future openings (careers)
//     const futureOpenings = [
//         {
//             role: 'Senior Software Developer',
//             department: 'Development',
//             location: 'Remote',
//             type: 'Full-time',
//             status: 'Coming Soon'
//         },
//         {
//             role: 'UI/UX Designer',
//             department: 'Design',
//             location: 'Remote',
//             type: 'Full-time',
//             status: 'Planned'
//         },
//         {
//             role: 'Product Manager',
//             department: 'Product',
//             location: 'Remote',
//             type: 'Full-time',
//             status: 'Future'
//         },
//         {
//             role: 'Sales Executive',
//             department: 'Business',
//             location: 'Malawi',
//             type: 'Full-time',
//             status: 'Future'
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
//             <Header />
//             <div className="container mx-auto px-6">
//                 {/* Page Header */}
//                 <div className="text-center mb-16">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
//                         <Building className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Our Story</span>
//                     </div>
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                         About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mzatinova</span>
//                     </h1>
//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         A global software company at the forefront of technological innovation, transforming industries and shaping the future.
//                     </p>
//                 </div>

//                 {/* Tabs Navigation */}
//                 <div className="mb-16">
//                     <Tabs defaultValue="about" className="w-full">
//                         <div className="flex justify-center mb-10">
//                             <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent">
//                                 <TabsTrigger
//                                     value="about"
//                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white py-3"
//                                 >
//                                     <Building className="h-4 w-4 mr-2" />
//                                     About
//                                 </TabsTrigger>
//                                 <TabsTrigger
//                                     value="mission"
//                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white py-3"
//                                 >
//                                     <Target className="h-4 w-4 mr-2" />
//                                     Mission & Vision
//                                 </TabsTrigger>
//                                 <TabsTrigger
//                                     value="team"
//                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-green-500 data-[state=active]:text-white py-3"
//                                 >
//                                     <Users className="h-4 w-4 mr-2" />
//                                     Our Team
//                                 </TabsTrigger>
//                                 <TabsTrigger
//                                     value="news"
//                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white py-3"
//                                 >
//                                     <Newspaper className="h-4 w-4 mr-2" />
//                                     News & Updates
//                                 </TabsTrigger>
//                                 <TabsTrigger
//                                     value="careers"
//                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white py-3"
//                                 >
//                                     <Briefcase className="h-4 w-4 mr-2" />
//                                     Careers
//                                 </TabsTrigger>
//                             </TabsList>
//                         </div>

//                         {/* About Tab */}
//                         <TabsContent value="about">
//                             <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                                     {/* Company Story */}
//                                     <div>
//                                         <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
//                                         <div className="space-y-4 text-gray-300">
//                                             <p>
//                                                 Mzatinova was founded with a simple yet powerful vision: to bridge the gap between technological innovation
//                                                 and practical industry applications. Recognizing the transformative potential of software across sectors,
//                                                 we set out to build solutions that not only solve immediate challenges but also create lasting impact.
//                                             </p>
//                                             <p>
//                                                 Our journey began in education, where we saw firsthand the need for better digital tools in schools.
//                                                 This led to the development of EduSpace Portal, our flagship educational platform that is now transforming
//                                                 how schools, teachers, and parents interact with student data.
//                                             </p>
//                                             <p>
//                                                 Today, we've expanded our expertise to multiple industries—healthcare, finance, agriculture, retail,
//                                                 and AI research—always maintaining our core commitment to excellence, innovation, and social impact.
//                                             </p>
//                                             <p>
//                                                 Based in Malawi with a global vision, we're building the technological infrastructure for tomorrow's
//                                                 world, one solution at a time.
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Stats & Facts */}
//                                     <div>
//                                         <h3 className="text-2xl font-bold text-white mb-6">By The Numbers</h3>
//                                         <div className="grid grid-cols-2 gap-6">
//                                             <div className="bg-black/50 rounded-xl p-6 border border-white/10 text-center">
//                                                 <div className="text-3xl font-bold text-white mb-2">50+</div>
//                                                 <div className="text-gray-300">Countries Reached</div>
//                                             </div>
//                                             <div className="bg-black/50 rounded-xl p-6 border border-white/10 text-center">
//                                                 <div className="text-3xl font-bold text-white mb-2">100+</div>
//                                                 <div className="text-gray-300">Solutions Built</div>
//                                             </div>
//                                             <div className="bg-black/50 rounded-xl p-6 border border-white/10 text-center">
//                                                 <div className="text-3xl font-bold text-white mb-2">1M+</div>
//                                                 <div className="text-gray-300">Users Impacted</div>
//                                             </div>
//                                             <div className="bg-black/50 rounded-xl p-6 border border-white/10 text-center">
//                                                 <div className="text-3xl font-bold text-white mb-2">6</div>
//                                                 <div className="text-gray-300">Industries Served</div>
//                                             </div>
//                                         </div>

//                                         {/* Values */}
//                                         <div className="mt-8">
//                                             <h4 className="text-white font-semibold mb-4">Our Core Values</h4>
//                                             <div className="space-y-3">
//                                                 {values.map((value, index) => (
//                                                     <div key={index} className="flex items-center gap-3">
//                                                         <div className="p-2 rounded-lg bg-white/5">
//                                                             {value.icon}
//                                                         </div>
//                                                         <div>
//                                                             <div className="text-white font-medium">{value.title}</div>
//                                                             <div className="text-gray-300 text-sm">{value.description}</div>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Timeline */}
//                                 <div className="mt-12 pt-8 border-t border-white/10">
//                                     <h3 className="text-2xl font-bold text-white mb-8">Our Journey</h3>
//                                     <div className="relative">
//                                         {/* Timeline line */}
//                                         <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

//                                         <div className="space-y-8">
//                                             {milestones.map((milestone, index) => (
//                                                 <div key={index} className="relative pl-20">
//                                                     <div className="absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
//                                                     <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                                         <div className="flex items-center gap-4 mb-3">
//                                                             <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10">
//                                                                 {milestone.icon}
//                                                             </div>
//                                                             <div>
//                                                                 <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
//                                                                     {milestone.year}
//                                                                 </Badge>
//                                                                 <h4 className="text-white font-semibold mt-2">{milestone.title}</h4>
//                                                             </div>
//                                                         </div>
//                                                         <p className="text-gray-300">{milestone.description}</p>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </TabsContent>

//                         {/* Mission & Vision Tab */}
//                         <TabsContent value="mission">
//                             <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//                                     {corePrinciples.map((principle, index) => (
//                                         <Card
//                                             key={index}
//                                             className={`bg-gradient-to-br ${principle.color}/10 to-black/50 border-white/10 backdrop-blur-sm`}
//                                         >
//                                             <CardHeader>
//                                                 <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r ${principle.color}/20 mb-4`}>
//                                                     {principle.icon}
//                                                 </div>
//                                                 <CardTitle className="text-white text-2xl">{principle.title}</CardTitle>
//                                             </CardHeader>
//                                             <CardContent>
//                                                 <CardDescription className="text-gray-300 text-lg">
//                                                     {principle.description}
//                                                 </CardDescription>
//                                             </CardContent>
//                                         </Card>
//                                     ))}
//                                 </div>

//                                 {/* Impact Statement */}
//                                 <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-white/10">
//                                     <h3 className="text-2xl font-bold text-white mb-6">Our Impact</h3>
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                         <div>
//                                             <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
//                                                 <Globe className="h-5 w-5 text-blue-400" />
//                                                 Local Focus, Global Vision
//                                             </h4>
//                                             <p className="text-gray-300">
//                                                 While headquartered in Malawi, our solutions are designed with global scalability in mind.
//                                                 We understand local challenges and create solutions that can adapt to different markets and contexts.
//                                             </p>
//                                         </div>
//                                         <div>
//                                             <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
//                                                 <TrendingUp className="h-5 w-5 text-green-400" />
//                                                 Sustainable Growth
//                                             </h4>
//                                             <p className="text-gray-300">
//                                                 We believe in building technology that grows with our clients. Our solutions are scalable,
//                                                 maintainable, and designed for long-term success rather than short-term gains.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Future Vision */}
//                                 <div className="mt-12">
//                                     <h3 className="text-2xl font-bold text-white mb-8">Looking Ahead</h3>
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                             <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
//                                                 <Clock className="h-5 w-5 text-blue-400" />
//                                                 Short-term Goals (2024-2025)
//                                             </h4>
//                                             <ul className="space-y-2">
//                                                 <li className="flex items-start gap-2 text-gray-300">
//                                                     <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
//                                                     Launch Mzatinova Store e-commerce platform
//                                                 </li>
//                                                 <li className="flex items-start gap-2 text-gray-300">
//                                                     <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
//                                                     Expand EduSpace to 100+ schools
//                                                 </li>
//                                                 <li className="flex items-start gap-2 text-gray-300">
//                                                     <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
//                                                     Establish partnerships in 3 new countries
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                         <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                             <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
//                                                 <Target className="h-5 w-5 text-purple-400" />
//                                                 Long-term Vision (2026-2030)
//                                             </h4>
//                                             <ul className="space-y-2">
//                                                 <li className="flex items-start gap-2 text-gray-300">
//                                                     <Building className="h-4 w-4 text-blue-400 mt-0.5" />
//                                                     Establish Mzatinova Academy
//                                                 </li>
//                                                 <li className="flex items-start gap-2 text-gray-300">
//                                                     <Globe className="h-4 w-4 text-green-400 mt-0.5" />
//                                                     Serve clients in 30+ countries
//                                                 </li>
//                                                 <li className="flex items-start gap-2 text-gray-300">
//                                                     <Award className="h-4 w-4 text-yellow-400 mt-0.5" />
//                                                     Become recognized as Africa's leading software innovator
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </TabsContent>

//                         {/* Team Tab */}
//                         <TabsContent value="team">
//                             <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                                 <div className="text-center mb-12">
//                                     <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
//                                     <p className="text-gray-300 max-w-2xl mx-auto">
//                                         A diverse group of innovators, engineers, and visionaries working together to build
//                                         technology that transforms industries and creates positive impact.
//                                     </p>
//                                 </div>

//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//                                     {team.map((member) => (
//                                         <Card key={member.id} className="bg-black/50 border-white/10 hover:border-blue-500/30 transition-colors">
//                                             <CardHeader>
//                                                 <div className="flex flex-col items-center text-center">
//                                                     <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
//                                                         {member.avatar ? (
//                                                             <img
//                                                                 src={member.avatar}
//                                                                 alt={member.name || member.role}
//                                                                 className="w-full h-full rounded-full object-cover"
//                                                             />
//                                                         ) : (
//                                                             <Users className="h-16 w-16 text-white" />
//                                                         )}
//                                                     </div>
//                                                     {member.name && (
//                                                         <CardTitle className="text-white">{member.name}</CardTitle>
//                                                     )}
//                                                     <CardDescription className="text-blue-300 font-medium">
//                                                         {member.role}
//                                                     </CardDescription>
//                                                 </div>
//                                             </CardHeader>
//                                             <CardContent className="text-center">
//                                                 <p className="text-gray-300 mb-4">{member.bio}</p>
//                                                 <div className="flex flex-wrap gap-2 justify-center">
//                                                     {member.expertise.map((skill, index) => (
//                                                         <Badge
//                                                             key={index}
//                                                             variant="outline"
//                                                             className="border-blue-400/30 text-blue-300"
//                                                         >
//                                                             {skill}
//                                                         </Badge>
//                                                     ))}
//                                                 </div>
//                                             </CardContent>
//                                         </Card>
//                                     ))}
//                                 </div>

//                                 {/* Join Team CTA */}
//                                 <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-white/10 text-center">
//                                     <h3 className="text-2xl font-bold text-white mb-4">Join Our Journey</h3>
//                                     <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//                                         We're always looking for talented individuals who share our passion for innovation
//                                         and making a difference through technology.
//                                     </p>
//                                     <Link to="/company#careers">
//                                         <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
//                                             View Career Opportunities
//                                             <ArrowRight className="ml-2 h-4 w-4" />
//                                         </Button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </TabsContent>

//                         {/* News & Updates Tab */}
//                         <TabsContent value="news">
//                             <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                                 <div className="flex justify-between items-center mb-8">
//                                     <h2 className="text-3xl font-bold text-white">News & Updates</h2>
//                                     <Link to="/news">
//                                         <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
//                                             View All News
//                                             <ChevronRight className="ml-2 h-4 w-4" />
//                                         </Button>
//                                     </Link>
//                                 </div>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//                                     {recentNews.map((news) => (
//                                         <Card key={news.id} className="bg-black/50 border-white/10 hover:border-blue-500/30 transition-colors group">
//                                             <CardHeader>
//                                                 <div className="flex justify-between items-start mb-4">
//                                                     <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
//                                                         {news.category}
//                                                     </Badge>
//                                                     <div className="flex items-center gap-2 text-sm text-gray-400">
//                                                         <Calendar className="h-3 w-3" />
//                                                         {news.date}
//                                                     </div>
//                                                 </div>
//                                                 <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
//                                                     {news.title}
//                                                 </CardTitle>
//                                             </CardHeader>
//                                             <CardContent>
//                                                 <CardDescription className="text-gray-300 mb-4">
//                                                     {news.excerpt}
//                                                 </CardDescription>
//                                                 <div className="flex items-center justify-between">
//                                                     <span className="text-sm text-gray-400">{news.readTime}</span>
//                                                     <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto">
//                                                         Read More
//                                                         <ArrowRight className="ml-1 h-3 w-3" />
//                                                     </Button>
//                                                 </div>
//                                             </CardContent>
//                                         </Card>
//                                     ))}
//                                 </div>

//                                 {/* Newsletter Signup */}
//                                 <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-white/10">
//                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                                         <div>
//                                             <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
//                                             <p className="text-gray-300">
//                                                 Subscribe to our newsletter for the latest company news, product updates, and industry insights.
//                                             </p>
//                                         </div>
//                                         <div>
//                                             <div className="flex gap-2">
//                                                 <input
//                                                     type="email"
//                                                     placeholder="Enter your email"
//                                                     className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//                                                 />
//                                                 <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
//                                                     Subscribe
//                                                 </Button>
//                                             </div>
//                                             <p className="text-gray-400 text-sm mt-2">
//                                                 We respect your privacy. Unsubscribe at any time.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </TabsContent>

//                         {/* Careers Tab */}
//                         <TabsContent value="careers">
//                             <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                                 <div className="text-center mb-12">
//                                     <h2 className="text-3xl font-bold text-white mb-4">Careers at Mzatinova</h2>
//                                     <p className="text-gray-300 max-w-2xl mx-auto">
//                                         Join us in building the future. We're creating opportunities for talented individuals
//                                         who want to make a difference through technology.
//                                     </p>
//                                 </div>

//                                 {/* Current Openings */}
//                                 <div className="mb-12">
//                                     <h3 className="text-2xl font-bold text-white mb-6">Future Opportunities</h3>
//                                     <div className="space-y-4">
//                                         {futureOpenings.map((opening, index) => (
//                                             <div
//                                                 key={index}
//                                                 className="p-6 rounded-xl bg-black/50 border border-white/10 hover:border-blue-500/30 transition-colors group"
//                                             >
//                                                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                                                     <div>
//                                                         <h4 className="text-white font-semibold text-lg mb-2">{opening.role}</h4>
//                                                         <div className="flex flex-wrap gap-3">
//                                                             <Badge variant="outline" className="border-blue-400/30 text-blue-300">
//                                                                 {opening.department}
//                                                             </Badge>
//                                                             <Badge variant="outline" className="border-green-400/30 text-green-300">
//                                                                 {opening.location}
//                                                             </Badge>
//                                                             <Badge variant="outline" className="border-purple-400/30 text-purple-300">
//                                                                 {opening.type}
//                                                             </Badge>
//                                                         </div>
//                                                     </div>
//                                                     <div className="flex items-center gap-4">
//                                                         <Badge className={
//                                                             opening.status === 'Coming Soon'
//                                                                 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
//                                                                 : opening.status === 'Planned'
//                                                                     ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
//                                                                     : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
//                                                         }>
//                                                             {opening.status}
//                                                         </Badge>
//                                                         <Button
//                                                             variant="outline"
//                                                             className="border-blue-400 text-blue-400 hover:bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity"
//                                                             disabled
//                                                         >
//                                                             Notify Me
//                                                         </Button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Why Work With Us */}
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                                     <div className="bg-black/50 rounded-xl p-6 border border-white/10">
//                                         <h4 className="text-white font-semibold text-xl mb-4">Why Join Mzatinova?</h4>
//                                         <ul className="space-y-3">
//                                             <li className="flex items-start gap-3">
//                                                 <Zap className="h-5 w-5 text-blue-400 mt-0.5" />
//                                                 <span className="text-gray-300">Work on cutting-edge technology projects</span>
//                                             </li>
//                                             <li className="flex items-start gap-3">
//                                                 <Globe className="h-5 w-5 text-green-400 mt-0.5" />
//                                                 <span className="text-gray-300">Make real impact across multiple industries</span>
//                                             </li>
//                                             <li className="flex items-start gap-3">
//                                                 <TrendingUp className="h-5 w-5 text-purple-400 mt-0.5" />
//                                                 <span className="text-gray-300">Grow with a rapidly expanding company</span>
//                                             </li>
//                                             <li className="flex items-start gap-3">
//                                                 <Users className="h-5 w-5 text-yellow-400 mt-0.5" />
//                                                 <span className="text-gray-300">Collaborate with passionate innovators</span>
//                                             </li>
//                                         </ul>
//                                     </div>

//                                     <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-white/10">
//                                         <h4 className="text-white font-semibold text-xl mb-4">Get in Touch</h4>
//                                         <p className="text-gray-300 mb-6">
//                                             Even if you don't see the perfect role listed, we're always interested in hearing from
//                                             talented individuals who share our vision.
//                                         </p>
//                                         <Link to="/contact">
//                                             <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
//                                                 Send Your Resume
//                                                 <Mail className="ml-2 h-4 w-4" />
//                                             </Button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </TabsContent>
//                     </Tabs>
//                 </div>

//                 {/* Contact & Social Links */}
//                 <div className="bg-gray-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                         {/* Contact Info */}
//                         <div>
//                             <h3 className="text-white font-semibold text-xl mb-6">Contact Information</h3>
//                             <div className="space-y-4">
//                                 <div className="flex items-center gap-3">
//                                     <MapPin className="h-5 w-5 text-blue-400" />
//                                     <span className="text-gray-300">Global Headquarters</span>
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <Phone className="h-5 w-5 text-green-400" />
//                                     <span className="text-gray-300">+265 (0) 888 44 71 22</span>
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <Mail className="h-5 w-5 text-purple-400" />
//                                     <span className="text-gray-300">info@mzatinova.com</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Quick Links */}
//                         <div>
//                             <h3 className="text-white font-semibold text-xl mb-6">Quick Links</h3>
//                             <div className="space-y-3">
//                                 <Link to="/contact" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
//                                     <ArrowRight className="h-3 w-3" />
//                                     Contact Us
//                                 </Link>
//                                 <Link to="/products" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
//                                     <ArrowRight className="h-3 w-3" />
//                                     Our Products
//                                 </Link>
//                                 <Link to="/services" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
//                                     <ArrowRight className="h-3 w-3" />
//                                     Our Services
//                                 </Link>
//                                 <Link to="/industries" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
//                                     <ArrowRight className="h-3 w-3" />
//                                     Industries
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* Social Media */}
//                         <div>
//                             <h3 className="text-white font-semibold text-xl mb-6">Connect With Us</h3>
//                             <div className="flex gap-4">
//                                 <a href="#" className="p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
//                                     <Twitter className="h-5 w-5 text-blue-400" />
//                                 </a>
//                                 <a href="#" className="p-3 rounded-lg bg-blue-700/10 hover:bg-blue-700/20 transition-colors">
//                                     <Facebook className="h-5 w-5 text-blue-500" />
//                                 </a>
//                                 <a href="#" className="p-3 rounded-lg bg-blue-400/10 hover:bg-blue-400/20 transition-colors">
//                                     <Linkedin className="h-5 w-5 text-blue-300" />
//                                 </a>
//                                 <a href="#" className="p-3 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 transition-colors">
//                                     <Instagram className="h-5 w-5 text-pink-400" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CompanyPage;