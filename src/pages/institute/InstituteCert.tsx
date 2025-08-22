import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Star, TrendingUp, Users, CheckCircle } from 'lucide-react';

export const InstituteCert: React.FC = () => {
    const certifications = [
        {
            title: 'Digital Literacy Certificate',
            category: 'Computer Users',
            level: 'Basic',
            duration: '4 weeks',
            price: 'Free',
            skills: ['Computer Basics', 'Internet Safety', 'Digital Communication', 'File Management'],
            recognition: 'Industry Recognized',
            graduates: '2,500+'
        },
        {
            title: 'IT Support Specialist',
            category: 'Computer Users',
            level: 'Advanced',
            duration: '12 weeks',
            price: '$99',
            skills: ['Hardware Troubleshooting', 'Network Support', 'System Administration', 'Customer Service'],
            recognition: 'CompTIA Aligned',
            graduates: '850+'
        },
        {
            title: 'Web Development Fundamentals',
            category: 'Developers',
            level: 'Basic',
            duration: '8 weeks',
            price: '$149',
            skills: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'Version Control'],
            recognition: 'Industry Standard',
            graduates: '3,200+'
        },
        {
            title: 'Full Stack Developer',
            category: 'Developers',
            level: 'Advanced',
            duration: '20 weeks',
            price: '$299',
            skills: ['React/Node.js', 'Database Design', 'API Development', 'DevOps Basics'],
            recognition: 'Professional Level',
            graduates: '1,100+'
        }
    ];

    const benefits = [
        {
            icon: Shield,
            title: 'Industry Recognition',
            description: 'Certificates recognized by leading tech companies and institutions'
        },
        {
            icon: TrendingUp,
            title: 'Career Advancement',
            description: 'Boost your career prospects with verified skills and knowledge'
        },
        {
            icon: Users,
            title: 'Peer Network',
            description: 'Join a community of certified professionals and learners'
        },
        {
            icon: CheckCircle,
            title: 'Lifetime Access',
            description: 'Keep your certificates forever with digital verification'
        }
    ];

    return (
        <div id="certs" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
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
                    {certifications.map((cert, index) => (
                        <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge
                                        variant="secondary"
                                        className={`${cert.level === 'Basic' ? 'bg-green-500/20 text-green-300' :
                                            cert.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                                                'bg-red-500/20 text-red-300'}`}
                                    >
                                        {cert.level}
                                    </Badge>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-yellow-400">{cert.price}</div>
                                    </div>
                                </div>
                                <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                                <p className="text-gray-300 text-sm">{cert.category}</p>
                            </CardHeader>
                            <CardContent>
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
                                                <Badge key={skillIndex} variant="outline" className="text-xs border-white/30 text-gray-300">
                                                    {skill}
                                                </Badge>
                                            ))}
                                            {cert.skills.length > 2 && (
                                                <Badge variant="outline" className="text-xs border-white/30 text-gray-300">
                                                    +{cert.skills.length - 2} more
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                                        Enroll Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
                                    <IconComponent className="h-6 w-6 text-cyan-400" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-300">{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default InstituteCert;