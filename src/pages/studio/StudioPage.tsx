import React from 'react';
import { Code, Cloud, Cpu, Database, GitBranch, Layers, Server, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from './NavBar';
import Footer from './Footer';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';

const StudioPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col text-gray-100">
            {/* Navigation */}
            {/* <Navbar active="studio" /> */}

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-black py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/studio/circuit-pattern.svg')]"></div>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <Code className="inline mr-4 h-12 w-12 text-red-500" />
                        <span className="text-red-500">Mzatinova</span> Studio
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
                        Innovative software solutions tailored for your digital transformation
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" size="lg" className="bg-red-600 hover:bg-red-500">
                            Get a Consultation
                        </Button>
                        <Button variant="outline" size="lg" className="text-red-400 border-red-400 hover:bg-red-900/30">
                            View Our Work
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-red-500">
                        Our Expertise
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Cloud className="h-10 w-10 text-red-500" />,
                                title: "Cloud Solutions",
                                description: "Scalable cloud architecture and migration services for businesses of all sizes"
                            },
                            {
                                icon: <Cpu className="h-10 w-10 text-red-500" />,
                                title: "Custom Software",
                                description: "Tailored applications designed to solve your unique business challenges"
                            },
                            {
                                icon: <Database className="h-10 w-10 text-red-500" />,
                                title: "Data Engineering",
                                description: "Powerful data pipelines and analytics platforms to drive insights"
                            },
                            {
                                icon: <GitBranch className="h-10 w-10 text-red-500" />,
                                title: "DevOps & CI/CD",
                                description: "Automated deployment pipelines and infrastructure as code"
                            },
                            {
                                icon: <Layers className="h-10 w-10 text-red-500" />,
                                title: "Microservices",
                                description: "Modern architecture for scalable and maintainable systems"
                            },
                            {
                                icon: <Shield className="h-10 w-10 text-red-500" />,
                                title: "Security",
                                description: "Comprehensive security audits and implementation"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-red-500">
                        Our Development Process
                    </h2>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gray-700 transform -translate-x-1/2"></div>

                        {[
                            {
                                title: "Discovery",
                                description: "We analyze your requirements and business objectives",
                                icon: "1"
                            },
                            {
                                title: "Design",
                                description: "Creating architecture diagrams and UI/UX prototypes",
                                icon: "2",
                                flipped: true
                            },
                            {
                                title: "Development",
                                description: "Agile implementation with regular progress updates",
                                icon: "3"
                            },
                            {
                                title: "Testing",
                                description: "Comprehensive QA and security testing",
                                icon: "4",
                                flipped: true
                            },
                            {
                                title: "Deployment",
                                description: "Smooth rollout with minimal downtime",
                                icon: "5"
                            },
                            {
                                title: "Maintenance",
                                description: "Ongoing support and iterative improvements",
                                icon: "6",
                                flipped: true
                            }
                        ].map((step, index) => (
                            <div key={index} className={`mb-12 flex flex-col ${step.flipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
                                <div className={`lg:w-1/2 ${step.flipped ? 'lg:pl-12' : 'lg:pr-12'} mb-6 lg:mb-0`}>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-100">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold">
                                    {step.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section id="work" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-red-500">
                        Success Stories
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "E-commerce Platform",
                                description: "Scaled to handle 10,000+ concurrent users during peak seasons",
                                stats: "300% revenue growth",
                                image: "/studio/ecommerce.jpg"
                            },
                            {
                                title: "Healthcare SaaS",
                                description: "HIPAA-compliant patient management system for clinics",
                                stats: "Adopted by 200+ practices",
                                image: "/studio/healthcare.jpg"
                            }
                        ].map((project, index) => (
                            <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-gray-700">
                                <div className="h-48 bg-gray-600 relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="bg-red-900/30 text-red-400 px-4 py-2 rounded-lg inline-block">
                                        {project.stats}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg" className="border-red-500 text-red-500 hover:bg-red-900/20">
                            View All Case Studies
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                        Let's discuss how we can help transform your ideas into reality.
                    </p>
                    <Button size="lg" className="bg-red-600 hover:bg-red-500">
                        Get Started Today
                    </Button>
                </div>
            </section>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default StudioPage;