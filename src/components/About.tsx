import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8" />, value: "1000+", label: "Projects Completed" },
    { icon: <Globe className="h-8 w-8" />, value: "50+", label: "Countries Served" },
    { icon: <Zap className="h-8 w-8" />, value: "99.9%", label: "Uptime Guarantee" }
  ];

  const team = [
    {
      name: "Wadi Mkweza",
      role: "CEO & Founder",
      expertise: "AI & Machine Learning",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Mankhokwe",
      role: "CTO",
      expertise: "Cloud Architecture",
      image: "/placeholder.svg"
    },
    {
      name: "Dean Manda",
      role: "Head of Security",
      expertise: "Cybersecurity",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Juma",
      role: "Lead Developer",
      expertise: "Full-Stack Development",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Mzatinova
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            At Mzatinova, we don’t just adapt to the future—we build it.
            Through relentless innovation,
            we deliver transformative tech solutions that propel businesses forward and redefine what’s possible.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90">
              To break down barriers in tech adoption,
              equipping every business—from startups to enterprises—with the tools to thrive in the digital era.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 dark:text-blue-400 flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mb-4">
                    <img src={member.image} alt={member.name} className="w-12 h-12 opacity-50" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{member.expertise}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly push the boundaries of what's possible, embracing emerging technologies and creative solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-xl text-purple-600 dark:text-purple-400">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Quality is at the heart of everything we do. We deliver solutions that exceed expectations and drive results.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-xl text-green-600 dark:text-green-400">Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in building lasting relationships with our clients, working together to achieve shared success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;