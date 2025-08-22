import React from 'react';
import { GraduationCap, Code, Laptop, TabletSmartphone, Monitor, Award, Rocket, Clock, Users, CheckCircle, Shield, TrendingUp, Star, User, Code2, Zap, Smartphone, BookOpen, Download, Sparkles } from 'lucide-react';
import { Button, } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const InstitutePage = () => {
    const devices = [
        {
            name: 'Laptop',
            icon: Laptop,
            description: 'High-performance laptops for development and learning',
            available: 15,
            total: 25,
            duration: 'Up to 3 months',
            requirements: ['Active student', 'Course enrollment', 'Security deposit']
        },
        {
            name: 'Tablet',
            icon: TabletSmartphone,
            description: 'Tablets for mobile development and digital literacy',
            available: 8,
            total: 15,
            duration: 'Up to 2 months',
            requirements: ['Basic level completion', 'Valid ID', 'Return agreement']
        },
        {
            name: 'Smartphone',
            icon: Monitor,
            description: 'Smartphones for mobile app testing and development',
            available: 12,
            total: 20,
            duration: 'Up to 1 month',
            requirements: ['Intermediate level', 'Project requirement', 'Insurance']
        },
        {
            name: 'Monitor',
            icon: Monitor,
            description: 'External monitors for enhanced productivity',
            available: 6,
            total: 10,
            duration: 'Up to 6 months',
            requirements: ['Advanced level', 'Home setup', 'Long-term project']
        }
    ];

    const paths = [
        {
            category: 'Computer Users',
            icon: User,
            levels: [
                {
                    title: 'Basic Level',
                    description: 'Computer fundamentals, basic software usage, internet basics',
                    duration: '4-6 weeks',
                    students: '2.5k+',
                    topics: ['Windows/Mac Basics', 'Microsoft Office', 'Internet Safety', 'Email & Communication']
                },
                {
                    title: 'Intermediate Level',
                    description: 'Advanced software, productivity tools, digital literacy',
                    duration: '6-8 weeks',
                    students: '1.8k+',
                    topics: ['Advanced Excel', 'Cloud Services', 'Digital Marketing', 'Data Analysis']
                },
                {
                    title: 'Advanced Level',
                    description: 'System administration, advanced troubleshooting, tech leadership',
                    duration: '8-10 weeks',
                    students: '950+',
                    topics: ['System Admin', 'Network Basics', 'IT Support', 'Tech Management']
                }
            ]
        },
        {
            category: 'Developers',
            icon: Code2,
            levels: [
                {
                    title: 'Basic Level',
                    description: 'Programming fundamentals, basic web development',
                    duration: '8-12 weeks',
                    students: '3.2k+',
                    topics: ['HTML/CSS', 'JavaScript Basics', 'Git/GitHub', 'Problem Solving']
                },
                {
                    title: 'Intermediate Level',
                    description: 'Frameworks, databases, API development',
                    duration: '12-16 weeks',
                    students: '2.1k+',
                    topics: ['React/Vue', 'Node.js', 'Databases', 'REST APIs']
                },
                {
                    title: 'Advanced Level',
                    description: 'System design, DevOps, advanced architectures',
                    duration: '16-20 weeks',
                    students: '1.3k+',
                    topics: ['System Design', 'Docker/K8s', 'Cloud Platforms', 'Microservices']
                }
            ]
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Navigation */}
            {/* <Navbar active="institute" /> */}

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/institute/circuit-pattern.svg')]"></div>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="flex flex-col items-center mb-6">
                        <GraduationCap className="h-16 w-16 text-blue-300 mb-4" />
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Mzatinova Digital Institute
                        </h1>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Master Digital Skills at Every Level
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        From digital literacy to advanced development — get hands-on experience, access essential tools, and earn your certification.
                    </p>

                    {/* Feature Cards - Added from HeroSection */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                id: 'learning',
                                title: 'Structured Learning',
                                description: 'Basic to Advanced levels for both users and developers',
                                icon: BookOpen,
                                gradient: 'from-blue-400 to-blue-500'
                            },
                            {
                                id: 'ai-builder',
                                title: 'AI App Builder',
                                description: 'Generate mobile & web apps instantly with AI',
                                icon: Code,
                                gradient: 'from-purple-400 to-purple-500'
                            },
                            {
                                id: 'devices',
                                title: 'Device Loans',
                                description: 'Borrow devices to reduce digital divide',
                                icon: Laptop,
                                gradient: 'from-teal-400 to-teal-500'
                            },
                            {
                                id: 'certifications',
                                title: 'Certifications',
                                description: 'Earn recognized certificates for your skills',
                                icon: Smartphone,
                                gradient: 'from-amber-400 to-amber-500'
                            }
                        ].map((card) => (
                            <Card
                                key={card.id}
                                className="group transition-all duration-300 hover:-translate-y-1 border border-white/5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                                        <card.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 text-gray-100">{card.title}</h3>
                                    <p className="text-gray-300/80 text-sm">{card.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" size="lg" className="bg-blue-500 hover:bg-blue-400">
                            Explore Courses
                        </Button>
                        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                            Apply Now
                        </Button>
                    </div>
                </div>
            </section>

            {/* Learning Paths - Tech Blue Theme */}
            <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
                        Choose Your Learning Path
                    </h2>
                    <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                        Structured learning paths designed for different skill levels and career goals
                    </p>

                    {/* Computer Users */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-blue-300">
                            <Laptop className="h-6 w-6 mr-3 text-blue-400" />
                            Computer Users
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    level: "Basic Level",
                                    description: "Computer fundamentals, basic software usage, internet basics",
                                    duration: "4-6 weeks",
                                    students: "2.5k+",
                                    skills: ["Windows/Mac Basics", "Microsoft Office", "Internet Safety", "Email & Communication"]
                                },
                                {
                                    level: "Intermediate Level",
                                    description: "Advanced software, productivity tools, digital literacy",
                                    duration: "6-8 weeks",
                                    students: "1.8k+",
                                    skills: ["Advanced Excel", "Cloud Services", "Digital Marketing", "Data Analysis"]
                                },
                                {
                                    level: "Advanced Level",
                                    description: "System administration, advanced troubleshooting, tech leadership",
                                    duration: "8-10 weeks",
                                    students: "950+",
                                    skills: ["System Admin", "Network Basics", "IT Support", "Tech Management"]
                                }
                            ].map((path, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/30 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-medium px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full">
                                            Level {index + 1}
                                        </span>
                                        <div className="flex items-center text-sm text-gray-400">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {path.duration}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-blue-200">{path.level}</h4>
                                    <p className="text-gray-300 mb-4">{path.description}</p>
                                    <div className="mb-4">
                                        <h5 className="font-medium mb-2 text-blue-200">Skills Covered:</h5>
                                        <ul className="space-y-1">
                                            {path.skills.map((skill, i) => (
                                                <li key={i} className="flex items-center">
                                                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                                                    <span className="text-gray-300">{skill}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text-sm text-gray-400 mb-4">
                                        <Users className="inline h-4 w-4 mr-1" />
                                        {path.students} students
                                    </div>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                                        Start Learning
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Developers */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-blue-300">
                            <Code className="h-6 w-6 mr-3 text-blue-400" />
                            Developers
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    level: "Basic Level",
                                    description: "Programming fundamentals, basic web development",
                                    duration: "8-12 weeks",
                                    students: "3.2k+",
                                    skills: ["HTML/CSS", "JavaScript Basics", "Git/GitHub", "Problem Solving"]
                                },
                                {
                                    level: "Intermediate Level",
                                    description: "Frameworks, databases, API development",
                                    duration: "12-16 weeks",
                                    students: "2.1k+",
                                    skills: ["React/Vue", "Node.js", "Databases", "REST APIs"]
                                },
                                {
                                    level: "Advanced Level",
                                    description: "System design, DevOps, advanced architectures",
                                    duration: "16-20 weeks",
                                    students: "1.3k+",
                                    skills: ["System Design", "Docker/K8s", "Cloud Platforms", "Microservices"]
                                }
                            ].map((path, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/30 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-medium px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full">
                                            Level {index + 1}
                                        </span>
                                        <div className="flex items-center text-sm text-gray-400">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {path.duration}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-blue-200">{path.level}</h4>
                                    <p className="text-gray-300 mb-4">{path.description}</p>
                                    <div className="mb-4">
                                        <h5 className="font-medium mb-2 text-blue-200">Skills Covered:</h5>
                                        <ul className="space-y-1">
                                            {path.skills.map((skill, i) => (
                                                <li key={i} className="flex items-center">
                                                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                                                    <span className="text-gray-300">{skill}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text-sm text-gray-400 mb-4">
                                        <Users className="inline h-4 w-4 mr-1" />
                                        {path.students} students
                                    </div>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                                        Start Learning
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AI App Builder - Enhanced with more features */}
            {/* AI App Builder */}
            <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            🤖 AI Powered
                        </Badge>
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            AI App Builder
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Generate mobile and web applications instantly with AI. Perfect for learning and prototyping.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="mobile" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-8">
                                <TabsTrigger value="mobile" className="flex items-center gap-2">
                                    <Smartphone className="w-4 h-4" />
                                    Mobile App
                                </TabsTrigger>
                                <TabsTrigger value="web" className="flex items-center gap-2">
                                    <Monitor className="w-4 h-4" />
                                    Web App
                                </TabsTrigger>
                            </TabsList>

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/2">
                                    <TabsContent value="mobile">
                                        <Card className="border-0 shadow-2xl bg-gray-800/80 backdrop-blur-sm">
                                            <CardHeader>
                                                <CardTitle className="flex items-center gap-2 text-white">
                                                    <Sparkles className="w-5 h-5 text-purple-600" />
                                                    Create Mobile App
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-white">App Name</label>
                                                    <Input
                                                        placeholder="Enter your app name"
                                                        className="bg-gray-700/50 border-gray-600 text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-white">App Type</label>
                                                    <select className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700/50 text-white">
                                                        <option>Native iOS</option>
                                                        <option>Native Android</option>
                                                        <option>Cross-platform</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-white">Describe your app idea</label>
                                                    <Textarea
                                                        placeholder="I want to create an app that..."
                                                        rows={4}
                                                        className="bg-gray-700/50 border-gray-600 text-white"
                                                    />
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" className="flex-1 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600/50">
                                                        <Code className="h-4 w-4 mr-2" />
                                                        View Code
                                                    </Button>
                                                    <Button
                                                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                                    >
                                                        <Sparkles className="h-4 w-4 mr-2" />
                                                        Generate Mobile App
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="web">
                                        <Card className="border-0 shadow-2xl bg-gray-800/80 backdrop-blur-sm">
                                            <CardHeader>
                                                <CardTitle className="flex items-center gap-2 text-white">
                                                    <Sparkles className="w-5 h-5 text-blue-600" />
                                                    Create Web App
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-white">App Name</label>
                                                    <Input
                                                        placeholder="Enter your app name"
                                                        className="bg-gray-700/50 border-gray-600 text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-white">App Type</label>
                                                    <select className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700/50 text-white">
                                                        <option>Single Page App</option>
                                                        <option>Static Website</option>
                                                        <option>Full Stack App</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-white">Describe your app idea</label>
                                                    <Textarea
                                                        placeholder="I want to create a web app that..."
                                                        rows={4}
                                                        className="bg-gray-700/50 border-gray-600 text-white"
                                                    />
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" className="flex-1 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600/50">
                                                        <Code className="h-4 w-4 mr-2" />
                                                        View Code
                                                    </Button>
                                                    <Button
                                                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                                    >
                                                        <Sparkles className="h-4 w-4 mr-2" />
                                                        Generate Web App
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </div>

                                <div className="md:w-1/2">
                                    <Card className="border-0 shadow-2xl bg-gray-800/80 backdrop-blur-sm h-full">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-white">
                                                <Zap className="w-5 h-5 text-yellow-500" />
                                                App Preview
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="bg-gray-700/50 rounded-lg p-6 h-96 flex flex-col">
                                                <div className="flex-1 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <Code className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                                        <p className="text-gray-400">Your AI-generated app preview will appear here</p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <h4 className="font-semibold mb-3 text-white">Features</h4>
                                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                                        {['User Auth', 'Database', 'Responsive', 'API'].map((feature, i) => (
                                                            <Badge key={i} variant="secondary" className="bg-gray-600 text-gray-300">
                                                                {feature}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <h4 className="font-semibold mb-3 text-white">Tech Stack</h4>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {['React', 'Node.js', 'MongoDB', 'Tailwind'].map((tech, i) => (
                                                            <Badge key={i} variant="outline" className="border-gray-600 text-gray-300">
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600">
                                                <Download className="h-4 w-4 mr-2" />
                                                Download Generated Code
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Device Loan Program - Enhanced with card layout */}
            {/* Device Loan Program */}
            <section id="devices" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Device Loan Program
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Bridge the digital divide with our device loan program. Get access to the technology you need to succeed in your learning journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {devices.map((device, index) => {
                            const IconComponent = device.icon;
                            const availabilityPercentage = (device.available / device.total) * 100;

                            return (
                                <Card key={index} className="hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm">
                                    <CardHeader className="text-center">
                                        <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-fit">
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-lg text-white">
                                            {device.name}
                                        </CardTitle>
                                        <p className="text-sm text-gray-300">
                                            {device.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium text-white">Availability</span>
                                                <Badge
                                                    variant={availabilityPercentage > 50 ? "default" : availabilityPercentage > 20 ? "secondary" : "destructive"}
                                                    className="text-xs"
                                                >
                                                    {device.available}/{device.total} available
                                                </Badge>
                                            </div>

                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full ${availabilityPercentage > 50 ? 'bg-green-500' :
                                                        availabilityPercentage > 20 ? 'bg-yellow-500' : 'bg-red-500'
                                                        }`}
                                                    style={{ width: `${availabilityPercentage}%` }}
                                                ></div>
                                            </div>

                                            <div className="flex items-center text-sm text-white">
                                                <Clock className="h-4 w-4 mr-2" />
                                                {device.duration}
                                            </div>

                                            <div className="space-y-2">
                                                <p className="text-sm font-medium text-white">
                                                    Requirements:
                                                </p>
                                                <div className="space-y-1">
                                                    {device.requirements.map((req, reqIndex) => (
                                                        <div key={reqIndex} className="flex items-center text-xs text-white">
                                                            <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                                                            {req}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <Button
                                                className="w-full"
                                                disabled={device.available === 0}
                                                variant={device.available === 0 ? "secondary" : "default"}
                                            >
                                                {device.available === 0 ? 'Out of Stock' : 'Request Loan'}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            How the Device Loan Program Works
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="flex flex-col items-center">
                                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                                    1
                                </div>
                                <h4 className="font-semibold mb-2">Apply Online</h4>
                                <p className="text-sm text-gray-300">
                                    Submit your device loan request with course enrollment proof
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                                    2
                                </div>
                                <h4 className="font-semibold mb-2">Quick Approval</h4>
                                <p className="text-sm text-gray-300">
                                    Get approved within 24-48 hours based on availability
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                                    3
                                </div>
                                <h4 className="font-semibold mb-2">Pickup & Learn</h4>
                                <p className="text-sm text-gray-300">
                                    Collect your device and start your learning journey
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section id="certs" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                            <Award className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold mb-4">
                            Earn Industry-Recognized Certifications
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Validate your skills with certificates that employers trust and value
                        </p>
                    </div>

                    {/* Certification Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                level: "Basic",
                                price: "Free",
                                title: "Digital Literacy Certificate",
                                category: "Computer Users",
                                recognition: "Industry Recognized",
                                duration: "4 weeks",
                                graduates: "2,500+",
                                skills: ["Computer Basics", "Internet Safety", "Email Communication", "Software Fundamentals"]
                            },
                            {
                                level: "Advanced",
                                price: "$99",
                                title: "IT Support Specialist",
                                category: "Computer Users",
                                recognition: "CompTIA Aligned",
                                duration: "12 weeks",
                                graduates: "850+",
                                skills: ["Hardware Troubleshooting", "Network Support", "System Administration", "Help Desk Skills"]
                            },
                            {
                                level: "Basic",
                                price: "$149",
                                title: "Web Development Fundamentals",
                                category: "Developers",
                                recognition: "Industry Standard",
                                duration: "8 weeks",
                                graduates: "3,200+",
                                skills: ["HTML/CSS", "JavaScript", "Responsive Design", "Git Basics"]
                            },
                            {
                                level: "Advanced",
                                price: "$299",
                                title: "Full Stack Developer",
                                category: "Developers",
                                recognition: "Professional Level",
                                duration: "20 weeks",
                                graduates: "1,100+",
                                skills: ["React/Node.js", "Database Design", "API Development", "Authentication"]
                            }
                        ].map((cert, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${cert.level === "Basic" ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}>
                                            {cert.level}
                                        </span>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-yellow-400">{cert.price}</div>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4">{cert.category}</p>

                                    <div className="space-y-4">
                                        <div className="flex items-center text-sm text-gray-300">
                                            <Star className="h-4 w-4 mr-2 text-yellow-400" />
                                            {cert.recognition}
                                        </div>

                                        <div className="text-sm text-gray-300">
                                            <strong>Duration:</strong> {cert.duration}
                                        </div>

                                        <div className="text-sm text-gray-300">
                                            <strong>Graduates:</strong> {cert.graduates}
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-white">Skills Covered:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                                                    <span key={skillIndex} className="px-2 py-1 text-xs rounded-full border border-white/30 text-gray-300">
                                                        {skill}
                                                    </span>
                                                ))}
                                                {cert.skills.length > 2 && (
                                                    <span className="px-2 py-1 text-xs rounded-full border border-white/30 text-gray-300">
                                                        +{cert.skills.length - 2} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-md text-white font-medium transition-all">
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certification Benefits */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Shield className="h-6 w-6 text-cyan-400" />,
                                title: "Industry Recognition",
                                description: "Certificates recognized by leading tech companies and institutions"
                            },
                            {
                                icon: <TrendingUp className="h-6 w-6 text-cyan-400" />,
                                title: "Career Advancement",
                                description: "Boost your career prospects with verified skills and knowledge"
                            },
                            {
                                icon: <Users className="h-6 w-6 text-cyan-400" />,
                                title: "Peer Network",
                                description: "Join a community of certified professionals and learners"
                            },
                            {
                                icon: <CheckCircle className="h-6 w-6 text-cyan-400" />,
                                title: "Lifetime Access",
                                description: "Keep your certificates forever with digital verification"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-300">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/institute/circuit-pattern.svg')]"></div>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Transform Your Digital Skills?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of learners who've accelerated their careers with our programs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                            Speak to an Advisor
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default InstitutePage;