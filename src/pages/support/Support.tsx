import React from 'react';
import { LifeBuoy, Mail, MessageSquare, Clock, BookOpen, Users, FileText, ChevronRight, Code, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';

const SupportPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Navigation */}
            {/* <Navbar active="support" /> */}

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <LifeBuoy className="h-16 w-16 text-indigo-300" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Mzatinova Support
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        We're here to help you succeed with our products and services
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" size="lg">
                            Contact Support
                        </Button>
                        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                            Browse Documentation
                        </Button>
                    </div>
                </div>
            </section>

            {/* Support Options */}
            <section id="options" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 text-indigo-700">
                        How Can We Help?
                    </h2>
                    <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                        Choose the support option that works best for you
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MessageSquare className="h-10 w-10 text-indigo-600" />,
                                title: "Live Chat",
                                description: "Instant help from our support team",
                                availability: "Available 24/7",
                                action: "Start Chat"
                            },
                            {
                                icon: <Mail className="h-10 w-10 text-indigo-600" />,
                                title: "Email Support",
                                description: "Detailed assistance via email",
                                availability: "Response within 4 hours",
                                action: "Send Email"
                            },
                            {
                                icon: <Clock className="h-10 w-10 text-indigo-600" />,
                                title: "Schedule Call",
                                description: "Book a time with our experts",
                                availability: "Mon-Fri, 9AM-5PM",
                                action: "Book Now"
                            }
                        ].map((option, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-indigo-300 transition-all hover:shadow-lg">
                                <div className="mb-6">{option.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{option.title}</h3>
                                <p className="text-gray-600 mb-4">{option.description}</p>
                                <p className="text-sm text-gray-500 mb-6 flex items-center">
                                    <Clock className="h-4 w-4 mr-2" />
                                    {option.availability}
                                </p>
                                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 w-full">
                                    {option.action}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Knowledge Base */}
            <section id="knowledge" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-indigo-700">
                        Knowledge Base
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                category: "Getting Started",
                                articles: [
                                    "Account setup guide",
                                    "First steps with our platform",
                                    "Basic configuration"
                                ],
                                icon: <BookOpen className="h-6 w-6 text-indigo-600" />
                            },
                            {
                                category: "Troubleshooting",
                                articles: [
                                    "Common error solutions",
                                    "Connection issues",
                                    "Performance optimization"
                                ],
                                icon: <LifeBuoy className="h-6 w-6 text-indigo-600" />
                            },
                            {
                                category: "Best Practices",
                                articles: [
                                    "Security recommendations",
                                    "Workflow optimization",
                                    "Team collaboration"
                                ],
                                icon: <FileText className="h-6 w-6 text-indigo-600" />
                            },
                            {
                                category: "API Documentation",
                                articles: [
                                    "API reference guide",
                                    "Authentication methods",
                                    "Rate limits"
                                ],
                                icon: <Code className="h-6 w-6 text-indigo-600" />
                            },
                            {
                                category: "Billing & Accounts",
                                articles: [
                                    "Subscription plans",
                                    "Payment methods",
                                    "Account management"
                                ],
                                icon: <CreditCard className="h-6 w-6 text-indigo-600" />
                            },
                            {
                                category: "Community",
                                articles: [
                                    "User forums",
                                    "Feature requests",
                                    "Upcoming events"
                                ],
                                icon: <Users className="h-6 w-6 text-indigo-600" />
                            }
                        ].map((section, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="mr-3 p-2 bg-indigo-50 rounded-full">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{section.category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {section.articles.map((article, i) => (
                                        <li key={i} className="group">
                                            <a href="#" className="flex items-center py-2 text-gray-600 hover:text-indigo-700">
                                                <span>{article}</span>
                                                <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                            Browse All Articles
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-16 text-indigo-700">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                question: "How do I reset my password?",
                                answer: "You can reset your password by visiting the account recovery page and following the instructions sent to your registered email address."
                            },
                            {
                                question: "What are your support hours?",
                                answer: "Our live chat support is available 24/7. Email support typically responds within 4 hours during business days."
                            },
                            {
                                question: "Where can I find API documentation?",
                                answer: "Complete API documentation is available in our Developer Center, including code samples and interactive testing tools."
                            },
                            {
                                question: "How do I upgrade my subscription?",
                                answer: "You can upgrade at any time from your account dashboard. All changes are prorated based on your billing cycle."
                            },
                            {
                                question: "Do you offer phone support?",
                                answer: "We offer scheduled callback support for enterprise customers. Please contact our sales team to discuss premium support options."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-20 bg-indigo-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-indigo-700">
                        Join Our Community
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
                        Connect with other users and our team for peer-to-peer support
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Community Forum",
                                description: "Discuss with other users and experts",
                                icon: <Users className="h-10 w-10 text-indigo-600 mx-auto mb-4" />,
                                action: "Visit Forum"
                            },
                            {
                                name: "Developer Discord",
                                description: "Real-time chat with developers",
                                icon: <MessageSquare className="h-10 w-10 text-indigo-600 mx-auto mb-4" />,
                                action: "Join Server"
                            },
                            {
                                name: "Knowledge Sharing",
                                description: "User-contributed tutorials and guides",
                                icon: <BookOpen className="h-10 w-10 text-indigo-600 mx-auto mb-4" />,
                                action: "Browse Resources"
                            }
                        ].map((community, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                {community.icon}
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{community.name}</h3>
                                <p className="text-gray-600 mb-6">{community.description}</p>
                                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                                    {community.action}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            {/* <section className="py-20 bg-indigo-700 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-2 text-center">Still Need Help?</h2>
                        <p className="text-xl text-center mb-12 text-indigo-200 max-w-2xl mx-auto">
                            Send us a message and we'll get back to you as soon as possible
                        </p>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-indigo-800/50 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-indigo-800/50 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-indigo-800/50 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-indigo-800/50 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                    placeholder="Describe your issue or question..."
                                ></textarea>
                            </div>
                            <div className="md:col-span-2 flex justify-center">
                                <Button type="submit" size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 px-8">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section> */}

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default SupportPage;