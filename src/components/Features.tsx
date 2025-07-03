import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Features: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms to analyze and predict user behavior patterns.",
      icon: "🤖",
      tags: ["AI", "Analytics", "ML"]
    },
    {
      title: "Real-time Collaboration",
      description: "Seamless team collaboration with instant updates and synchronized workflows.",
      icon: "🚀",
      tags: ["Real-time", "Collaboration", "Sync"]
    },
    {
      title: "Immersive AR/VR",
      description: "Next-generation augmented and virtual reality experiences for enhanced interaction.",
      icon: "🥽",
      tags: ["AR", "VR", "Immersive"]
    },
    {
      title: "Quantum Computing",
      description: "Leverage quantum computing power for complex problem-solving and optimization.",
      icon: "⚛️",
      tags: ["Quantum", "Computing", "Optimization"]
    },
    {
      title: "Smartfielectronics - Product Filtering",
      description: "Users can browse and search electronics for schools, churches, and individuals with easy navigation and filtering.",
      icon: "🛒",
      tags: ["E-commerce", "Smartfielectronics", "Live"]
    },
    {
      title: "Mzatinova Eduspace - AI Tutor",
      description: "Interactive AI-powered tutoring, progress tracking, flashcards, and study planning (Coming Soon).",
      icon: "🎓",
      tags: ["AI", "Education", "Coming Soon"]
    },
    {
      title: "Zanga Social - Reactions & Gamification",
      description: "Users can share posts, react, and earn points via a gamified social media experience (In Development).",
      icon: "💬",
      tags: ["Social Media", "Zanga", "In Development"]
    },
    {
      title: "FinTech App - Real-time Transactions",
      description: "Secure mobile banking app with instant transactions and financial insights.",
      icon: "💰",
      tags: ["FinTech", "Mobile", "Banking"]
    },
    {
      title: "HealthCare System - Appointment Scheduling",
      description: "Manage patient records, appointments, and reports efficiently.",
      icon: "🩺",
      tags: ["Healthcare", "Scheduling", "Medical"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore powerful features integrated into our platforms to enhance your digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;