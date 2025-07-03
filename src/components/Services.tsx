import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Globe, Cpu, Cloud, Database } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Development",
      description: "Custom AI solutions and machine learning models",
      price: "From $5,000",
      features: ["Custom Models", "API Integration", "24/7 Support"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and deployment",
      price: "From $2,500",
      features: ["Auto Scaling", "Load Balancing", "Monitoring"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions and audits",
      price: "From $3,500",
      features: ["Security Audit", "Threat Detection", "Compliance"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern web applications and platforms",
      price: "From $4,000",
      features: ["Responsive Design", "SEO Optimized", "Performance"]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "IoT Solutions",
      description: "Internet of Things development and integration",
      price: "From $6,000",
      features: ["Device Integration", "Data Analytics", "Real-time Monitoring"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Big data processing and business intelligence",
      price: "From $3,000",
      features: ["Data Visualization", "Predictive Analytics", "Reporting"]
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert technology solutions, precisely engineered to meet the unique challenges
            and goals of your enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {service.price}
                  </span>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        ✓
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;