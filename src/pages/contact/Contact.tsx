import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  // Define page-specific messages
  // const pageMessages: Record<string, string> = {
  //   '/institute': "Have questions about our digital education programs? Contact our academic team for more information.",
  //   '/store': "Need help with your order or have product questions? Our support team is ready to assist you.",
  //   '/studio': "Interested in our creative services? Let's discuss how we can bring your vision to life.",
  //   '/labs': "Curious about our research or want to collaborate? Reach out to our innovation team.",
  //   '/ai': "Want to explore AI solutions for your business? Our experts are standing by to help.",
  //   '/support': "We're here to help with any technical issues or questions you might have.",
  //   '/default': "Ready to transform your business with cutting-edge technology? Let's discuss your project."
  // };

  // Get the appropriate message based on current path
  // const getPageMessage = () => {
  //   return pageMessages[location.pathname] || pageMessages['/default'];
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-red-500" />,
      title: "Email",
      details: "info@mzatinova.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6 text-red-500" />,
      title: "Phone",
      details: "+265 999 613 324",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-500" />,
      title: "Office",
      details: "Mzatinova P/Bag 60, Zomba",
      description: "Visit our headquarters"
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Support",
      details: "24/7 Available",
      description: "We're here to help"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-100">
      <Header />
      {/* Contact Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/studio/circuit-pattern.svg')]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {getPageMessage()}
            </p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                      <Input
                        id="name"
                        className="bg-gray-700 border-gray-600 text-white"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Enter your full name here"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-gray-700 border-gray-600 text-white"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Enter your email here"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-300">Company</Label>
                    <Input
                      id="company"
                      className="bg-gray-700 border-gray-600 text-white"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-gray-300">Service Interest</Label>
                    <Select onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="ai" className="hover:bg-gray-700">AI Development</SelectItem>
                        <SelectItem value="cloud" className="hover:bg-gray-700">Cloud Infrastructure</SelectItem>
                        <SelectItem value="security" className="hover:bg-gray-700">Cybersecurity</SelectItem>
                        <SelectItem value="web" className="hover:bg-gray-700">Web Development</SelectItem>
                        <SelectItem value="iot" className="hover:bg-gray-700">IoT Solutions</SelectItem>
                        <SelectItem value="analytics" className="hover:bg-gray-700">Data Analytics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      className="bg-gray-700 border-gray-600 text-white"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 bg-gray-800 border-gray-700 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10">
                    <div className="mb-4">
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="font-medium text-gray-200 mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-400">
                      {info.description}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-red-500 mx-auto mb-2" />
                    <p className="text-gray-300">Interactive Map</p>
                    <p className="text-sm text-gray-400">Find our office location</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;