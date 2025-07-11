import React from 'react';
import { FlaskConical, Rocket, Binary, Atom, BrainCircuit, TestTube2, Network, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';

const LabPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col text-gray-100">
            {/* Navigation */}
            {/* <Navbar active="labs" /> */}

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-yellow-900 to-yellow-700 py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/labs/grid-pattern.svg')]"></div>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <FlaskConical className="h-16 w-16 text-yellow-300 animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Mzatinova <span className="text-yellow-400">Labs</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Where tomorrow's technology is born today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900">
                            Join Beta Program
                        </Button>
                        <Button variant="outline" size="lg" className="text-yellow-300 border-yellow-300 hover:bg-yellow-900/50">
                            Explore Experiments
                        </Button>
                    </div>
                </div>
            </section>

            {/* Current Projects */}
            <section id="projects" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 text-yellow-400">
                        Active Experiments
                    </h2>
                    <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                        Cutting-edge projects currently in development
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <BrainCircuit className="h-10 w-10 text-yellow-400" />,
                                title: "Neural Interface",
                                description: "Exploring direct brain-computer interaction",
                                status: "Phase 2 Testing",
                                tags: ["AI", "Neuroscience"]
                            },
                            {
                                icon: <Binary className="h-10 w-10 text-yellow-400" />,
                                title: "Quantum Simulator",
                                description: "Quantum computing algorithms for optimization problems",
                                status: "Early Prototype",
                                tags: ["Quantum", "Algorithms"]
                            },
                            {
                                icon: <Network className="h-10 w-10 text-yellow-400" />,
                                title: "Decentralized Web",
                                description: "Next-gen peer-to-peer internet infrastructure",
                                status: "Concept Phase",
                                tags: ["Web3", "Blockchain"]
                            },
                            {
                                icon: <Atom className="h-10 w-10 text-yellow-400" />,
                                title: "Molecular Computing",
                                description: "Using organic molecules for data processing",
                                status: "Research",
                                tags: ["Biotech", "Chemistry"]
                            },
                            {
                                icon: <Rocket className="h-10 w-10 text-yellow-400" />,
                                title: "Space Algorithms",
                                description: "AI for autonomous spacecraft navigation",
                                status: "Phase 1 Testing",
                                tags: ["Aerospace", "AI"]
                            },
                            {
                                icon: <TestTube2 className="h-10 w-10 text-yellow-400" />,
                                title: "Digital Chemistry",
                                description: "Virtual lab for chemical reaction simulations",
                                status: "Beta",
                                tags: ["VR", "Chemistry"]
                            }
                        ].map((project, index) => (
                            <div key={index} className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-yellow-400/30 transition-all hover:shadow-lg hover:shadow-yellow-400/10">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">{project.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-3">{project.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">
                                                {project.status}
                                            </span>
                                            <div className="flex gap-2">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className="text-xs px-2 py-1 bg-gray-600/50 rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Areas */}
            <section id="research" className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-yellow-400">
                        Research Focus Areas
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                title: "Artificial Intelligence",
                                description: "Pushing the boundaries of machine learning and neural networks",
                                progress: 75,
                                projects: 12
                            },
                            {
                                title: "Quantum Computing",
                                description: "Developing algorithms for the quantum computing era",
                                progress: 40,
                                projects: 5
                            },
                            {
                                title: "Biotechnology",
                                description: "Intersection of biology and computing",
                                progress: 55,
                                projects: 8
                            },
                            {
                                title: "Space Tech",
                                description: "Innovations for interplanetary computing",
                                progress: 30,
                                projects: 3
                            }
                        ].map((area, index) => (
                            <div key={index} className="bg-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                                <p className="text-gray-400 mb-4">{area.description}</p>

                                <div className="mb-3">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Research Progress</span>
                                        <span>{area.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div
                                            className="bg-yellow-400 h-2.5 rounded-full"
                                            style={{ width: `${area.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>{area.projects} active projects</span>
                                    <button className="text-yellow-400 hover:text-yellow-300">
                                        View publications →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lab Features */}
            <section className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-yellow-400">
                        Lab Capabilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FlaskConical className="h-8 w-8 text-yellow-400" />,
                                title: "Experimental Prototyping",
                                description: "Rapid iteration on cutting-edge concepts"
                            },
                            {
                                icon: <Bug className="h-8 w-8 text-yellow-400" />,
                                title: "Failure Analysis",
                                description: "Learning from what doesn't work"
                            },
                            {
                                icon: <Rocket className="h-8 w-8 text-yellow-400" />,
                                title: "Accelerated Testing",
                                description: "Stress-testing under extreme conditions"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-gray-700 p-4 rounded-full">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beta Program CTA */}
            <section className="py-20 bg-gradient-to-br from-yellow-900 to-yellow-700">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Join Our Beta Program</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Get early access to experimental technologies and shape the future
                    </p>
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-lg bg-yellow-800/50 text-white placeholder-yellow-200/70 border border-yellow-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            />
                            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-yellow-400">
                                Apply Now
                            </Button>
                        </div>
                        <p className="text-sm mt-3 text-yellow-200/80">
                            By applying, you agree to our experimental technology terms
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default LabPage;