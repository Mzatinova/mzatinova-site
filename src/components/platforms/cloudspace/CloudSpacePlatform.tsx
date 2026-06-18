import React, { useEffect, useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, Zap, Shield, Users, Cloud, Eye, CheckCircle2, Server, Database, Globe, Cpu, Mail, Lock, HardDrive, Activity, Phone, MapPin, MessageCircle, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CloudSpacePlatform: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ 
    fullName: '', email: '', password: '', phone: '', plan: 'starter' 
  });

  const homeRef = React.useRef<HTMLButtonElement>(null);
  const servicesRef = React.useRef<HTMLButtonElement>(null);
  const pricingRef = React.useRef<HTMLButtonElement>(null);
  const contactRef = React.useRef<HTMLButtonElement>(null);
  const navContainerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndicatorStyle, setActiveIndicatorStyle] = useState({ left: 0, width: 0 });
  const [tabStyle, setTabStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            if (activeNav !== section) {
              setActiveNav(section);
              if (section === 'home' && homeRef.current && navContainerRef.current) {
                setActiveIndicatorStyle({
                  left: homeRef.current.offsetLeft,
                  width: homeRef.current.offsetWidth,
                });
              } else if (section === 'services' && servicesRef.current && navContainerRef.current) {
                setActiveIndicatorStyle({
                  left: servicesRef.current.offsetLeft,
                  width: servicesRef.current.offsetWidth,
                });
              } else if (section === 'pricing' && pricingRef.current && navContainerRef.current) {
                setActiveIndicatorStyle({
                  left: pricingRef.current.offsetLeft,
                  width: pricingRef.current.offsetWidth,
                });
              } else if (section === 'contact' && contactRef.current && navContainerRef.current) {
                setActiveIndicatorStyle({
                  left: contactRef.current.offsetLeft,
                  width: contactRef.current.offsetWidth,
                });
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeNav]);
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();
  
  // TODO: Replace with real API call
  // Example:
  // fetch('/api/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(loginData)
  // })
  // .then(res => res.json())
  // .then(data => {
  //   if (data.user.role === 'admin') {
  //     window.location.href = "/platforms/cloudspace/admin";
  //   } else {
  //     window.location.href = "/platforms/cloudspace/dashboard";
  //   }
  // })
  
  // Mock logic - remove when connecting to real API
  const email = loginData.email.toLowerCase();
  
  if (email === 'admin@cloudspace.com' || email.includes('admin')) {
    window.location.href = "/platforms/cloudspace/admin";
  } else {
    window.location.href = "/platforms/cloudspace/dashboard";
  }
};

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Login:', loginData);
  //   setLoginOpen(false);
  // };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', signupData);
    setSignupOpen(false);
  };

  const stats = [
    { value: '1,200+', label: 'Active Hosting Clients', icon: Users },
    { value: '99.99%', label: 'Uptime Guarantee', icon: Cloud },
    { value: '24/7', label: 'Technical Support', icon: Zap },
    { value: '500+', label: 'Domains Managed', icon: Globe }
  ];

  const services = [
    { 
      icon: Server, 
      name: 'Web Hosting', 
      desc: 'Fast, reliable hosting with 99.99% uptime guarantee. Optimized for WordPress, PHP, and Node.js applications.',
      features: ['99.99% Uptime', 'SSD Storage', 'Free SSL', 'cPanel Control']
    },
    { 
      icon: Globe, 
      name: 'Domain Management', 
      desc: 'Register and manage your domains with ease. Transfer, renew, and configure DNS settings from one dashboard.',
      features: ['Domain Registration', 'DNS Management', 'Domain Transfer', 'WHOIS Privacy']
    },
    { 
      icon: Mail, 
      name: 'Business Email', 
      desc: 'Professional email hosting with your domain name. Get secure, reliable email for your entire organization.',
      features: ['Custom Domain Email', 'Spam Protection', 'Email Forwarding', 'Mobile Access']
    },
    { 
      icon: Database, 
      name: 'Database Hosting', 
      desc: 'Managed database services with automated backups, scaling, and monitoring for MySQL, PostgreSQL, and MongoDB.',
      features: ['Automated Backups', 'Performance Monitoring', 'Scaling', 'Security Updates']
    },
    { 
      icon: Lock, 
      name: 'Security Solutions', 
      desc: 'Comprehensive security including SSL certificates, DDoS protection, malware scanning, and WAF for your websites.',
      features: ['SSL Certificates', 'DDoS Protection', 'Malware Scanning', 'Web Application Firewall']
    },
    { 
      icon: Activity, 
      name: 'Cloud Monitoring', 
      desc: 'Real-time monitoring of your servers, applications, and websites with instant alerts and detailed analytics.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Instant Alerts', 'Resource Tracking']
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'MWK 10,000',
      period: '/month',
      features: [
        '10 GB Storage',
        '100 GB Bandwidth',
        '5 Email Accounts',
        '1 Domain Included',
        'SSL Certificate',
        '24/7 Support'
      ],
      color: 'cyan'
    },
    {
      name: 'Business',
      price: 'MWK 25,000',
      period: '/month',
      features: [
        '50 GB Storage',
        '500 GB Bandwidth',
        '20 Email Accounts',
        '3 Domains Included',
        'SSL Certificate',
        '24/7 Priority Support',
        'Daily Backups',
        'Advanced Security'
      ],
      color: 'sky',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'MWK 50,000',
      period: '/month',
      features: [
        '200 GB Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        '10 Domains Included',
        'SSL Certificate',
        '24/7 Dedicated Support',
        'Hourly Backups',
        'Advanced Security',
        'Custom Configurations',
        'SLA Guarantee'
      ],
      color: 'blue'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mzatinova CloudSpace | Affordable Web Hosting & Cloud Services for Africa</title>
        <meta name="description" content="Affordable web hosting, databases, and cloud services built for Malawi. Plans starting at MWK 10,000/month with 99.99% uptime guarantee." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cloudspace.mzatinova.com/" />
      </Helmet>

      <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-cyan-500/20">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-200/60 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 h-16 flex items-center justify-between">
            <div onClick={() => scrollTo('home')} className="flex items-center gap-2 cursor-pointer group">
              <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 shadow-lg shadow-cyan-500/30 p-1.5">
                <img src="/cloudspace-logo.png" alt="Logo" className="w-14 h-9 sm:w-16 sm:h-10 object-contain transition-transform group-hover:scale-105" />
              </span>    
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-800">
                Mzatinova <span className="text-cyan-600">CloudSpace</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-1">
              <div 
                ref={navContainerRef}
                className="flex items-center justify-center gap-6 relative flex-1"
                onMouseLeave={() => setTabStyle(prev => ({ ...prev, opacity: 0 }))}
              >
                <div
                  className="absolute h-8 bg-cyan-600/10 border border-cyan-400/30 rounded-lg transition-all duration-300 ease-out pointer-events-none"
                  style={{
                    left: `${tabStyle.left}px`,
                    width: `${tabStyle.width}px`,
                    opacity: tabStyle.opacity,
                  }}
                />
                <div
                  className="absolute -bottom-0.5 h-0.5 bg-cyan-600 rounded-full transition-all duration-300 ease-out"
                  style={{
                    left: activeIndicatorStyle.left,
                    width: activeIndicatorStyle.width,
                  }}
                />
                <button
                  ref={homeRef}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    setTabStyle({
                      left: target.offsetLeft,
                      width: target.offsetWidth,
                      opacity: 1,
                    });
                  }}
                  onClick={() => {
                    scrollTo('home');
                    setActiveNav('home');
                    if (homeRef.current && navContainerRef.current) {
                      setActiveIndicatorStyle({
                        left: homeRef.current.offsetLeft,
                        width: homeRef.current.offsetWidth,
                      });
                    }
                  }}
                  className={`text-sm font-medium transition-colors px-3 py-1.5 ${
                    activeNav === 'home' ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'
                  }`}
                >
                  Home
                </button>
                <button
                  ref={servicesRef}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    setTabStyle({
                      left: target.offsetLeft,
                      width: target.offsetWidth,
                      opacity: 1,
                    });
                  }}
                  onClick={() => {
                    scrollTo('services');
                    setActiveNav('services');
                    if (servicesRef.current && navContainerRef.current) {
                      setActiveIndicatorStyle({
                        left: servicesRef.current.offsetLeft,
                        width: servicesRef.current.offsetWidth,
                      });
                    }
                  }}
                  className={`text-sm font-medium transition-colors px-3 py-1.5 ${
                    activeNav === 'services' ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'
                  }`}
                >
                  Services
                </button>
                <button
                  ref={pricingRef}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    setTabStyle({
                      left: target.offsetLeft,
                      width: target.offsetWidth,
                      opacity: 1,
                    });
                  }}
                  onClick={() => {
                    scrollTo('pricing');
                    setActiveNav('pricing');
                    if (pricingRef.current && navContainerRef.current) {
                      setActiveIndicatorStyle({
                        left: pricingRef.current.offsetLeft,
                        width: pricingRef.current.offsetWidth,
                      });
                    }
                  }}
                  className={`text-sm font-medium transition-colors px-3 py-1.5 ${
                    activeNav === 'pricing' ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'
                  }`}
                >
                  Pricing
                </button>
                <button
                  ref={contactRef}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    setTabStyle({
                      left: target.offsetLeft,
                      width: target.offsetWidth,
                      opacity: 1,
                    });
                  }}
                  onClick={() => {
                    scrollTo('contact');
                    setActiveNav('contact');
                    if (contactRef.current && navContainerRef.current) {
                      setActiveIndicatorStyle({
                        left: contactRef.current.offsetLeft,
                        width: contactRef.current.offsetWidth,
                      });
                    }
                  }}
                  className={`text-sm font-medium transition-colors px-3 py-1.5 ${
                    activeNav === 'contact' ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'
                  }`}
                >
                  Contact
                </button>
              </div>
              
              <div className="flex items-center gap-3 flex-shrink-0">
                <button 
                  onClick={() => setLoginOpen(true)}
                  className="h-9 px-4 rounded-lg border border-slate-200 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-all text-slate-700"
                >
                  Log In
                </button>
                <button
                  onClick={() => setSignupOpen(true)}
                  className="h-9 px-4 rounded-lg bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md"
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg border border-slate-200">
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4 px-5 space-y-3 bg-white shadow-lg">
              <button onClick={() => scrollTo('home')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Home</button>
              <button onClick={() => scrollTo('services')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Services</button>
              <button onClick={() => scrollTo('pricing')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Pricing</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Contact</button>
              <div className="border-t border-slate-100 my-2"></div>
              <button onClick={() => { setLoginOpen(true); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">
                Log In
              </button>
              <button onClick={() => { setSignupOpen(true); setMobileMenuOpen(false); }} className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md text-center">
                Sign Up
              </button>
            </div>
          )}
        </header>

        {/* ========== LOGIN POPUP ========== */}
        {loginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Log In</h2>
                <button onClick={() => setLoginOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    value={loginData.email}
                    onChange={e => setLoginData({...loginData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    value={loginData.password}
                    onChange={e => setLoginData({...loginData, password: e.target.value})}
                    required
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="rounded border-slate-300" /> Remember me
                  </label>
                  <a href="#" className="text-cyan-600 hover:underline">Forgot password?</a>
                </div>
                <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                  Log In
                </button>
              </form>
              <p className="text-center text-sm text-slate-500 mt-4">
                Don't have an account? <button onClick={() => { setLoginOpen(false); setSignupOpen(true); }} className="text-cyan-600 font-semibold hover:underline">Sign Up</button>
              </p>
            </div>
          </div>
        )}

        {/* ========== SIGN UP POPUP ========== */}
        {signupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Sign Up</h2>
                <button onClick={() => setSignupOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    value={signupData.fullName}
                    onChange={e => setSignupData({...signupData, fullName: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    value={signupData.email}
                    onChange={e => setSignupData({...signupData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+265 999 000 000" 
                    className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono"
                    value={signupData.phone}
                    onChange={e => setSignupData({...signupData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    value={signupData.password}
                    onChange={e => setSignupData({...signupData, password: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Select Plan</label>
                  <select 
                    className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer"
                    value={signupData.plan}
                    onChange={e => setSignupData({...signupData, plan: e.target.value})}
                  >
                    <option value="starter">Starter (MWK 10,000/month)</option>
                    <option value="business">Business (MWK 25,000/month)</option>
                    <option value="enterprise">Enterprise (MWK 50,000/month)</option>
                  </select>
                </div>
                <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                  Create Account
                </button>
              </form>
              <p className="text-center text-sm text-slate-500 mt-4">
                Already have an account? <button onClick={() => { setSignupOpen(false); setLoginOpen(true); }} className="text-cyan-600 font-semibold hover:underline">Log In</button>
              </p>
            </div>
          </div>
        )}

        {/* ========== HOME SECTION ========== */}
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-sky-50/30" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto px-5 py-12 lg:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" /></span>
                <span className="text-xs font-medium text-cyan-700 tracking-wide">AFFORDABLE HOSTING · CLOUD INFRASTRUCTURE</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800 leading-[1.1] mb-4">
                Host your business.<br />
                <span className="bg-gradient-to-r from-cyan-600 via-cyan-700 to-sky-700 bg-clip-text text-transparent">Scale with confidence.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
                CloudSpace is the complete cloud infrastructure platform for African businesses, offering affordable web hosting, databases, and cloud services built for Malawi with plans starting at MWK 10,000/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <button onClick={() => setSignupOpen(true)} className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                  Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => scrollTo('pricing')} className="group h-14 px-8 rounded-2xl border border-slate-200 text-slate-700 font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                  View Pricing
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-200 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1.5">
                      <stat.icon className="w-3 h-3 text-cyan-500" /> {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold mb-3">
                <Sparkles className="w-3 h-3" /> Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                Complete <span className="text-cyan-600">Cloud Solutions</span>
              </h2>
              <p className="text-slate-500 text-base max-w-2xl mx-auto">
                Everything you need to get your business online and keep it running smoothly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-sky-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{service.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== PRICING SECTION ========== */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold mb-3">
                <Sparkles className="w-3 h-3" /> Transparent Pricing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                Plans for <span className="text-cyan-600">Every Business</span>
              </h2>
              <p className="text-slate-500 text-base max-w-2xl mx-auto">
                Choose the perfect hosting plan for your needs. All plans include 24/7 support and a 99.99% uptime guarantee.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, idx) => {
                const isCyan = plan.color === 'cyan';
                const isSky = plan.color === 'sky';
                const isBlue = plan.color === 'blue';
                const gradientFrom = isCyan ? 'from-cyan-500' : isSky ? 'from-sky-500' : 'from-blue-500';
                const gradientTo = isCyan ? 'to-cyan-600' : isSky ? 'to-sky-600' : 'to-blue-600';
                const borderColor = isCyan ? 'border-cyan-200' : isSky ? 'border-sky-200' : 'border-blue-200';
                const bgLight = isCyan ? 'bg-cyan-50' : isSky ? 'bg-sky-50' : 'bg-blue-50';
                const textColor = isCyan ? 'text-cyan-600' : isSky ? 'text-sky-600' : 'text-blue-600';
                
                return (
                  <div 
                    key={idx} 
                    className={`relative rounded-2xl border ${borderColor} bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-lg">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${bgLight} flex items-center justify-center mb-4`}>
                        {isCyan && <Server className="w-6 h-6 text-cyan-600" />}
                        {isSky && <Database className="w-6 h-6 text-sky-600" />}
                        {isBlue && <Cloud className="w-6 h-6 text-blue-600" />}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-slate-800">{plan.price}</span>
                        <span className="text-sm text-slate-500">{plan.period}</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className={`w-4 h-4 ${textColor} flex-shrink-0`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setSignupOpen(true)}
                        className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:from-${isCyan ? 'cyan' : isSky ? 'sky' : 'blue'}-700 hover:to-${isCyan ? 'cyan' : isSky ? 'sky' : 'blue'}-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg text-center block`}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== CONTACT SECTION ========== */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold mb-3">
                <Sparkles className="w-3 h-3" /> Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                Need <span className="text-cyan-600">Help?</span>
              </h2>
              <p className="text-slate-500 text-base max-w-2xl mx-auto">
                Our team is ready to assist you 24/7. Reach out through any of the channels below.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Call Us</h3>
                <p className="text-slate-500 text-sm">Available 24/7 for support</p>
                <a href="tel:+265888447122" className="text-cyan-600 font-semibold hover:underline block mt-2">+265 888 447 122</a>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Email Us</h3>
                <p className="text-slate-500 text-sm">We'll respond within 24 hours</p>
                <a href="mailto:hello@mzatinova.com" className="text-cyan-600 font-semibold hover:underline block mt-2">hello@mzatinova.com</a>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Visit Us</h3>
                <p className="text-slate-500 text-sm">Come see us in person</p>
                <p className="text-slate-700 font-semibold mt-2">Lilongwe, Malawi</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-4 bg-white rounded-2xl border border-slate-200 px-6 py-4 shadow-sm">
                <MessageCircle className="w-5 h-5 text-cyan-600" />
                <span className="text-slate-600 text-sm">Prefer WhatsApp?</span>
                <a href="https://wa.me/265888447122" target="_blank" rel="noreferrer" className="text-cyan-600 font-semibold hover:underline">
                  +265 888 447 122
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-6 bg-white">
          <div className="max-w-7xl mx-auto px-5 text-center">
            <p className="text-xs text-slate-500">© 2026 Mzatinova. Built in Malawi. Ready for Africa.</p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default CloudSpacePlatform;
