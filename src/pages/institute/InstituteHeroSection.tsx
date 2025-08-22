import React from 'react';
import { Button } from '@/components/ui/button';
// import { Card, CardContent } from './ui/card';
import { BookOpen, Code, Laptop, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const InstituteHeroSection: React.FC = () => {
    // Card data (no click functionality needed)
    const cards = [
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
    ];

    // Smooth scroll to section (only used by the button)
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update URL without reloading
            window.history.pushState(null, '', `#${sectionId}`);
        }
    };

    return (
        <div id="hero" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex flex-col">

            {/* Hero Content */}
            <div className="container mx-auto px-6 py-20 flex-grow flex flex-col justify-center">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Master Digital Skills at Every Level
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">

                        From digital literacy to advanced development — get hands-on experience, access essential tools, and earn your certification.
                    </p>

                    {/* Feature Cards - Not clickable */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {cards.map((card) => (
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

                    {/* Only this button is clickable for navigation */}
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
                        onClick={() => scrollToSection('learning')}
                    >
                        Start Learning Today
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InstituteHeroSection;