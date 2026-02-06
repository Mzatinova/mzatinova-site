import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    Calendar,
    User,
    Award,
    Code,
    TrendingUp,
    GraduationCap,
    ArrowRight,
    ExternalLink
} from 'lucide-react';

const RecentUpdates: React.FC = () => {
    const updates = [
        {
            id: 1,
            title: 'EduSpace Portal Selected for EdTech@UNIMA 2026 Conference',
            description: 'Our educational platform has been selected for presentation at the prestigious University of Malawi EdTech conference, showcasing how we\'re building education system resilience in Sub-Saharan Africa.',
            category: 'Achievement',
            icon: <Award className="h-5 w-5" />,
            date: 'January 15, 2026',
            tags: ['EdTech', 'Conference', 'Education'],
            color: 'from-blue-500 to-cyan-500',
            link: '/news/eduspace-unima-2026',
            externalLink: null,
            readTime: '3 min read'
        },
        {
            id: 2,
            title: 'Mzatinova Store Development in Progress',
            description: 'We\'re excited to announce the development of our e-commerce platform. The Mzatinova Store will offer electronics and tech products with cutting-edge retail technology.',
            category: 'Development',
            icon: <Code className="h-5 w-5" />,
            date: 'January 10, 2026',
            tags: ['E-commerce', 'Development', 'Retail'],
            color: 'from-purple-500 to-pink-500',
            link: '/news/store-development',
            externalLink: null,
            readTime: '2 min read'
        },
        {
            id: 3,
            title: 'Founder to Graduate with B.Ed. in Computer Science',
            description: 'Our founder is set to graduate in April 2024 with a Bachelor of Education in Computer Science, combining pedagogical expertise with technical skills to drive educational innovation.',
            category: 'Milestone',
            icon: <GraduationCap className="h-5 w-5" />,
            date: 'March 1, 2024',
            tags: ['Graduation', 'Education', 'Founder'],
            color: 'from-green-500 to-emerald-500',
            link: '/news/founder-graduation',
            externalLink: null,
            readTime: '4 min read'
        },
        {
            id: 4,
            title: 'Expanding Our AI Research Capabilities',
            description: 'Mzatinova Labs is scaling up its AI research division, focusing on machine learning applications for healthcare, agriculture, and education sectors.',
            category: 'Research',
            icon: <TrendingUp className="h-5 w-5" />,
            date: 'February 28, 2024',
            tags: ['AI', 'Research', 'Innovation'],
            color: 'from-orange-500 to-red-500',
            link: '/news/ai-research-expansion',
            externalLink: null,
            readTime: '5 min read'
        }
    ];

    const upcomingEvents = [
        {
            id: 1,
            title: 'EdTech@UNIMA 2026 Conference',
            date: 'May 12-13, 2026',
            location: 'University of Malawi, Zomba',
            description: 'Presenting EduSpace Portal and networking with education innovators.',
            status: 'Confirmed',
            link: null
        },
        {
            id: 2,
            title: 'Mzatinova Store Beta Launch',
            date: 'Q3 2024',
            location: 'Online',
            description: 'Limited beta release of our e-commerce platform.',
            status: 'Planned',
            link: null
        },
        {
            id: 3,
            title: 'Industry Partnership Announcements',
            date: 'April 2024',
            location: 'Multiple Sectors',
            description: 'New collaborations in education and health technology.',
            status: 'Coming Soon',
            link: null
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* --- BEAUTIFUL NEWS/UPDATE BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                {/* Unique news/updates related background */}
                <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2600&auto=format&fit=crop"
                    alt="News and Updates Background"
                    className="w-full h-full object-cover"
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/85 to-black/90" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20">
                        <Calendar className="h-4 w-4 text-blue-300" />
                        <span className="text-sm font-medium text-blue-300">Stay Updated</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Latest From <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mzatinova</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Stay informed about our latest achievements, developments, and milestones
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Featured Update (Large Card) */}
                    <div className="lg:col-span-2">
                        <Card className="bg-gray-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 h-full overflow-hidden group backdrop-blur-sm">
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <CardHeader className="relative z-10 pb-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                        <Award className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                                            Featured Update
                                        </Badge>
                                    </div>
                                </div>
                                <CardTitle className="text-white text-2xl md:text-3xl mb-4">
                                    {updates[0].title}
                                </CardTitle>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        {updates[0].date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        {updates[0].readTime}
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="relative z-10">
                                <CardDescription className="text-gray-300 text-lg mb-6">
                                    {updates[0].description}
                                </CardDescription>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {updates[0].tags.map((tag, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className="border-blue-400/30 text-blue-300 hover:bg-blue-400/10"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                {/* UNIMA Conference Highlight */}
                                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-xl p-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                                            <GraduationCap className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">EdTech@UNIMA 2026</h4>
                                            <p className="text-sm text-gray-300">12-13 May 2026 • University of Malawi</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="relative z-10">
                                <Link to={updates[0].link} className="w-full">
                                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 group">
                                        Read Full Story
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Upcoming Events Sidebar */}
                    <div>
                        <Card className="bg-gray-900/50 border-white/10 h-full backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-white text-xl flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-blue-400" />
                                    Upcoming Events
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {upcomingEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className="p-4 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors group"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                                                {event.title}
                                            </h4>
                                            <Badge
                                                variant="outline"
                                                className={`text-xs ${event.status === 'Confirmed'
                                                    ? 'border-green-500/30 text-green-400'
                                                    : event.status === 'Planned'
                                                        ? 'border-yellow-500/30 text-yellow-400'
                                                        : 'border-blue-500/30 text-blue-400'
                                                    }`}
                                            >
                                                {event.status}
                                            </Badge>
                                        </div>
                                        <div className="space-y-1 mb-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Calendar className="h-3 w-3" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                📍 {event.location}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-300">{event.description}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Recent Updates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {updates.slice(1).map((update) => (
                        <Card
                            key={update.id}
                            className="bg-gray-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 group backdrop-blur-sm"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${update.color}/10 border border-white/10`}>
                                        <div className={`bg-gradient-to-r ${update.color} bg-clip-text text-transparent`}>
                                            {update.icon}
                                        </div>
                                    </div>
                                    <Badge className={`bg-gradient-to-r ${update.color}/20 border-0 text-white`}>
                                        {update.category}
                                    </Badge>
                                </div>
                                <CardTitle className="text-white text-lg mb-3 line-clamp-2">
                                    {update.title}
                                </CardTitle>
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {update.date}
                                    </div>
                                    <span>•</span>
                                    <span>{update.readTime}</span>
                                </div>
                            </CardHeader>

                            <CardContent className="pb-4">
                                <CardDescription className="text-gray-300 line-clamp-3 mb-4">
                                    {update.description}
                                </CardDescription>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {update.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Link to={update.link} className="w-full">
                                    <Button
                                        variant="ghost"
                                        className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
                                    >
                                        Read More
                                        <ArrowRight className="ml-2 h-3 w-3" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Newsletter & Social CTA */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Never Miss an Update
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Subscribe to our newsletter for the latest news, product releases, and industry insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="flex-1 max-w-md">
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                    />
                                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                                        Subscribe
                                    </Button>
                                </div>
                            </div>
                            <Link to="/news">
                                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                                    View All News
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentUpdates;


// import React from 'react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';
// import {
//     Calendar,
//     User,
//     Award,
//     Code,
//     TrendingUp,
//     GraduationCap,
//     ArrowRight,
//     ExternalLink
// } from 'lucide-react';

// const RecentUpdates: React.FC = () => {
//     const updates = [
//         {
//             id: 1,
//             title: 'EduSpace Portal Selected for EdTech@UNIMA 2026 Conference',
//             description: 'Our educational platform has been selected for presentation at the prestigious University of Malawi EdTech conference, showcasing how we\'re building education system resilience in Sub-Saharan Africa.',
//             category: 'Achievement',
//             icon: <Award className="h-5 w-5" />,
//             date: 'January 15, 2026',
//             tags: ['EdTech', 'Conference', 'Education'],
//             color: 'from-blue-500 to-cyan-500',
//             link: '/news/eduspace-unima-2026',
//             externalLink: null,
//             readTime: '3 min read'
//         },
//         {
//             id: 2,
//             title: 'Mzatinova Store Development in Progress',
//             description: 'We\'re excited to announce the development of our e-commerce platform. The Mzatinova Store will offer electronics and tech products with cutting-edge retail technology.',
//             category: 'Development',
//             icon: <Code className="h-5 w-5" />,
//             date: 'January 10, 2026',
//             tags: ['E-commerce', 'Development', 'Retail'],
//             color: 'from-purple-500 to-pink-500',
//             link: '/news/store-development',
//             externalLink: null,
//             readTime: '2 min read'
//         },
//         {
//             id: 3,
//             title: 'Founder to Graduate with B.Ed. in Computer Science',
//             description: 'Our founder is set to graduate in April 2024 with a Bachelor of Education in Computer Science, combining pedagogical expertise with technical skills to drive educational innovation.',
//             category: 'Milestone',
//             icon: <GraduationCap className="h-5 w-5" />,
//             date: 'March 1, 2024',
//             tags: ['Graduation', 'Education', 'Founder'],
//             color: 'from-green-500 to-emerald-500',
//             link: '/news/founder-graduation',
//             externalLink: null,
//             readTime: '4 min read'
//         },
//         {
//             id: 4,
//             title: 'Expanding Our AI Research Capabilities',
//             description: 'Mzatinova Labs is scaling up its AI research division, focusing on machine learning applications for healthcare, agriculture, and education sectors.',
//             category: 'Research',
//             icon: <TrendingUp className="h-5 w-5" />,
//             date: 'February 28, 2024',
//             tags: ['AI', 'Research', 'Innovation'],
//             color: 'from-orange-500 to-red-500',
//             link: '/news/ai-research-expansion',
//             externalLink: null,
//             readTime: '5 min read'
//         }
//     ];

//     const upcomingEvents = [
//         {
//             id: 1,
//             title: 'EdTech@UNIMA 2026 Conference',
//             date: 'May 12-13, 2026',
//             location: 'University of Malawi, Zomba',
//             description: 'Presenting EduSpace Portal and networking with education innovators.',
//             status: 'Confirmed',
//             link: null
//         },
//         {
//             id: 2,
//             title: 'Mzatinova Store Beta Launch',
//             date: 'Q3 2024',
//             location: 'Online',
//             description: 'Limited beta release of our e-commerce platform.',
//             status: 'Planned',
//             link: null
//         },
//         {
//             id: 3,
//             title: 'Industry Partnership Announcements',
//             date: 'April 2024',
//             location: 'Multiple Sectors',
//             description: 'New collaborations in education and health technology.',
//             status: 'Coming Soon',
//             link: null
//         }
//     ];

//     return (
//         <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

//             <div className="container mx-auto px-6 relative z-10">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20">
//                         <Calendar className="h-4 w-4 text-blue-300" />
//                         <span className="text-sm font-medium text-blue-300">Stay Updated</span>
//                     </div>
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                         Latest From <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mzatinova</span>
//                     </h2>
//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         Stay informed about our latest achievements, developments, and milestones
//                     </p>
//                 </div>

//                 {/* Main Content Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//                     {/* Featured Update (Large Card) */}
//                     <div className="lg:col-span-2">
//                         <Card className="bg-gray-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 h-full overflow-hidden group">
//                             {/* Gradient Background */}
//                             <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

//                             <CardHeader className="relative z-10 pb-4">
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
//                                         <Award className="h-6 w-6 text-blue-400" />
//                                     </div>
//                                     <div>
//                                         <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
//                                             Featured Update
//                                         </Badge>
//                                     </div>
//                                 </div>
//                                 <CardTitle className="text-white text-2xl md:text-3xl mb-4">
//                                     {updates[0].title}
//                                 </CardTitle>
//                                 <div className="flex items-center gap-4 text-sm text-gray-400">
//                                     <div className="flex items-center gap-2">
//                                         <Calendar className="h-4 w-4" />
//                                         {updates[0].date}
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <User className="h-4 w-4" />
//                                         {updates[0].readTime}
//                                     </div>
//                                 </div>
//                             </CardHeader>

//                             <CardContent className="relative z-10">
//                                 <CardDescription className="text-gray-300 text-lg mb-6">
//                                     {updates[0].description}
//                                 </CardDescription>

//                                 {/* Tags */}
//                                 <div className="flex flex-wrap gap-2 mb-6">
//                                     {updates[0].tags.map((tag, index) => (
//                                         <Badge
//                                             key={index}
//                                             variant="outline"
//                                             className="border-blue-400/30 text-blue-300 hover:bg-blue-400/10"
//                                         >
//                                             {tag}
//                                         </Badge>
//                                     ))}
//                                 </div>

//                                 {/* UNIMA Conference Highlight */}
//                                 <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-xl p-4 mb-6">
//                                     <div className="flex items-center gap-3">
//                                         <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
//                                             <GraduationCap className="h-5 w-5 text-white" />
//                                         </div>
//                                         <div>
//                                             <h4 className="text-white font-semibold">EdTech@UNIMA 2026</h4>
//                                             <p className="text-sm text-gray-300">12-13 May 2026 • University of Malawi</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CardContent>

//                             <CardFooter className="relative z-10">
//                                 <Link to={updates[0].link} className="w-full">
//                                     <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 group">
//                                         Read Full Story
//                                         <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                                     </Button>
//                                 </Link>
//                             </CardFooter>
//                         </Card>
//                     </div>

//                     {/* Upcoming Events Sidebar */}
//                     <div>
//                         <Card className="bg-gray-900/50 border-white/10 h-full">
//                             <CardHeader>
//                                 <CardTitle className="text-white text-xl flex items-center gap-2">
//                                     <Calendar className="h-5 w-5 text-blue-400" />
//                                     Upcoming Events
//                                 </CardTitle>
//                             </CardHeader>

//                             <CardContent className="space-y-4">
//                                 {upcomingEvents.map((event) => (
//                                     <div
//                                         key={event.id}
//                                         className="p-4 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors group"
//                                     >
//                                         <div className="flex justify-between items-start mb-2">
//                                             <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
//                                                 {event.title}
//                                             </h4>
//                                             <Badge
//                                                 variant="outline"
//                                                 className={`text-xs ${event.status === 'Confirmed'
//                                                         ? 'border-green-500/30 text-green-400'
//                                                         : event.status === 'Planned'
//                                                             ? 'border-yellow-500/30 text-yellow-400'
//                                                             : 'border-blue-500/30 text-blue-400'
//                                                     }`}
//                                             >
//                                                 {event.status}
//                                             </Badge>
//                                         </div>
//                                         <div className="space-y-1 mb-3">
//                                             <div className="flex items-center gap-2 text-sm text-gray-400">
//                                                 <Calendar className="h-3 w-3" />
//                                                 {event.date}
//                                             </div>
//                                             <div className="flex items-center gap-2 text-sm text-gray-400">
//                                                 📍 {event.location}
//                                             </div>
//                                         </div>
//                                         <p className="text-sm text-gray-300">{event.description}</p>
//                                     </div>
//                                 ))}
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </div>

//                 {/* Recent Updates Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//                     {updates.slice(1).map((update) => (
//                         <Card
//                             key={update.id}
//                             className="bg-gray-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 group"
//                         >
//                             <CardHeader className="pb-4">
//                                 <div className="flex items-center justify-between mb-4">
//                                     <div className={`p-2 rounded-lg bg-gradient-to-br ${update.color}/10 border border-white/10`}>
//                                         <div className={`bg-gradient-to-r ${update.color} bg-clip-text text-transparent`}>
//                                             {update.icon}
//                                         </div>
//                                     </div>
//                                     <Badge className={`bg-gradient-to-r ${update.color}/20 border-0 text-white`}>
//                                         {update.category}
//                                     </Badge>
//                                 </div>
//                                 <CardTitle className="text-white text-lg mb-3 line-clamp-2">
//                                     {update.title}
//                                 </CardTitle>
//                                 <div className="flex items-center gap-3 text-sm text-gray-400">
//                                     <div className="flex items-center gap-1">
//                                         <Calendar className="h-3 w-3" />
//                                         {update.date}
//                                     </div>
//                                     <span>•</span>
//                                     <span>{update.readTime}</span>
//                                 </div>
//                             </CardHeader>

//                             <CardContent className="pb-4">
//                                 <CardDescription className="text-gray-300 line-clamp-3 mb-4">
//                                     {update.description}
//                                 </CardDescription>

//                                 {/* Tags */}
//                                 <div className="flex flex-wrap gap-1.5">
//                                     {update.tags.map((tag, index) => (
//                                         <span
//                                             key={index}
//                                             className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400"
//                                         >
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </CardContent>

//                             <CardFooter>
//                                 <Link to={update.link} className="w-full">
//                                     <Button
//                                         variant="ghost"
//                                         className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
//                                     >
//                                         Read More
//                                         <ArrowRight className="ml-2 h-3 w-3" />
//                                     </Button>
//                                 </Link>
//                             </CardFooter>
//                         </Card>
//                     ))}
//                 </div>

//                 {/* Newsletter & Social CTA */}
//                 <div className="text-center">
//                     <div className="inline-block bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
//                         <h3 className="text-2xl font-bold text-white mb-4">
//                             Never Miss an Update
//                         </h3>
//                         <p className="text-gray-300 mb-6">
//                             Subscribe to our newsletter for the latest news, product releases, and industry insights.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <div className="flex-1 max-w-md">
//                                 <div className="flex gap-2">
//                                     <input
//                                         type="email"
//                                         placeholder="Enter your email"
//                                         className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//                                     />
//                                     <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
//                                         Subscribe
//                                     </Button>
//                                 </div>
//                             </div>
//                             <Link to="/news">
//                                 <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
//                                     View All News
//                                     <ExternalLink className="ml-2 h-4 w-4" />
//                                 </Button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default RecentUpdates;