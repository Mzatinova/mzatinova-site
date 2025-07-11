import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Code2, Zap, Star, Clock, Users } from 'lucide-react';

export const InstituteLearningPaths: React.FC = () => {
    const paths = [
        {
            category: 'Computer Users',
            icon: User,
            color: 'from-green-500 to-emerald-600',
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
            color: 'from-blue-500 to-purple-600',
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
        // <div id="learning" className="py-20 bg-gray-50">
        // <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="min-h-screen bg-gradient-to-br from-gray-900/95 via-blue-900/95 to-purple-900/95">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    {/* <h2 className="text-4xl font-bold text-gray-900 mb-4"> */}
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Choose Your Learning Path
                    </h2>
                    {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto"> */}
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Structured learning paths designed for different skill levels and career goals
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {paths.map((path, pathIndex) => {
                        const IconComponent = path.icon;
                        return (
                            <div key={pathIndex} className="space-y-6">
                                <div className="text-center">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${path.color} mb-4`}>
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    {/* <h3 className="text-2xl font-bold text-gray-900 mb-2"> */}
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {path.category}</h3>

                                </div>

                                <div className="space-y-4">
                                    {path.levels.map((level, levelIndex) => (
                                        // <Card key={levelIndex} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                                        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-cyan-400 bg-white/5 backdrop-blur-sm">
                                            <CardHeader>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        {/* <CardTitle className="text-lg"> */}
                                                        <CardTitle className="text-lg text-white">  {level.title}</CardTitle>
                                                        {/* <p className="text-gray-600 text-sm mt-1"> */}

                                                        <p className="text-gray-300 text-sm mt-1">  {level.description}</p>
                                                    </div>
                                                    <Badge variant="outline" className="ml-2">
                                                        <Star className="h-3 w-3 mr-1" />
                                                        Level {levelIndex + 1}
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                {/* <div className="flex items-center gap-4 text-sm text-gray-500 mb-3"> */}
                                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                                                    <div className="flex items-center">
                                                        <Clock className="h-4 w-4 mr-1" />
                                                        {level.duration}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Users className="h-4 w-4 mr-1" />
                                                        {level.students}
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {level.topics.map((topic, topicIndex) => (
                                                        // <Badge key={topicIndex} variant="secondary" className="text-xs">
                                                        <Badge key={topicIndex} variant="secondary" className="text-xs bg-white/10 text-gray-300">
                                                            {topic}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <Button className="w-full" variant="outline">
                                                    Start Learning
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default InstituteLearningPaths;