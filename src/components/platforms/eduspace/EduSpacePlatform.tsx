import React, { useEffect, useState } from 'react';
import { Sparkles, Grid, ChevronDown, ExternalLink, Menu, X, ArrowRight, Zap, Shield, Users, Cloud, Eye, LayoutDashboard, Layers, CheckCircle2 } from 'lucide-react';

const EduSpacePlatform: React.FC = () => {
  const [trayOpen, setTrayOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
const homeRef = React.useRef<HTMLButtonElement>(null);
const productsRef = React.useRef<HTMLButtonElement>(null);
const setupRef = React.useRef<HTMLButtonElement>(null);
const navContainerRef = React.useRef<HTMLDivElement>(null);
const [activeIndicatorStyle, setActiveIndicatorStyle] = useState({ left: 0, width: 0 });
  const [tabStyle, setTabStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [formData, setFormData] = useState({ 
    schoolName: '', directorName: '', whatsapp: '', email: '', studentCount: 'under-200' 
  });



// Add this useEffect after your state declarations (around line 30)
useEffect(() => {
  const handleScroll = () => {
    const sections = ['home', 'products', 'setup'];
    const scrollPosition = window.scrollY + 200; // Offset for header

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          if (activeNav !== section) {
            setActiveNav(section);
            // Update the indicator position based on which section is active
            if (section === 'home' && homeRef.current && navContainerRef.current) {
              setActiveIndicatorStyle({
                left: homeRef.current.offsetLeft,
                width: homeRef.current.offsetWidth,
              });
            } else if (section === 'products' && productsRef.current && navContainerRef.current) {
              setActiveIndicatorStyle({
                left: productsRef.current.offsetLeft,
                width: productsRef.current.offsetWidth,
              });
            } else if (section === 'setup' && setupRef.current && navContainerRef.current) {
              setActiveIndicatorStyle({
                left: setupRef.current.offsetLeft,
                width: setupRef.current.offsetWidth,
              });
            }
          }
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Initial call to set active section on page load
  handleScroll();
  
  return () => window.removeEventListener('scroll', handleScroll);
}, [activeNav]);
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    setSubmitted(true);
  };

  const products = [
    {
      title: 'EduSpace Portal',
      description: 'Parent and guardian access gateway. Track attendance, view report cards, check fee balances.',
      icon: Layers,
      loginUrl: 'https://eduspaceportal.mzatinova.com/login',
      color: 'indigo'
    },
    {
      title: 'EduSpace Hub',
      description: 'Management dashboard for school owners and administrators. Manage admissions, track fees, generate reports.',
      icon: LayoutDashboard,
      loginUrl: 'https://eduspacehub.mzatinova.com/',
      color: 'blue'
    },
  ];

  const stats = [
    { value: '12,000+', label: 'Students Managed', icon: Users },
    { value: '99.9%', label: 'Platform Uptime', icon: Cloud },
    { value: '+38%', label: 'Efficiency Gain', icon: Zap },
    { value: '2,140', label: 'Active Users Today', icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-500/20">
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 h-16 flex items-center justify-between">
          {/* Logo - takes enough space on mobile */}
          <div onClick={() => scrollTo('home')} className="flex items-center gap-2 cursor-pointer group">
            <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30 p-1.5">
              <img src="/eduspace-logo.png" alt="Logo" className="w-14 h-9 sm:w-16 sm:h-10 object-contain transition-transform group-hover:scale-105" />
            </span>    
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-800">
              Mzatinova <span className="text-blue-600">EduSpace</span>
            </span>
          </div>
          
{/* Desktop Navigation + Actions */}
<div className="hidden md:flex items-center flex-1">
  {/* Navigation with sliding indicator */}
  <div 
    ref={navContainerRef}
    className="flex items-center justify-center gap-6 relative flex-1"
    onMouseLeave={() => setTabStyle(prev => ({ ...prev, opacity: 0 }))}
  >
    {/* Sliding Background Indicator (on hover) */}
    <div
      className="absolute h-8 bg-blue-600/10 border border-blue-400/30 rounded-lg transition-all duration-300 ease-out pointer-events-none"
      style={{
        left: `${tabStyle.left}px`,
        width: `${tabStyle.width}px`,
        opacity: tabStyle.opacity,
      }}
    />

    {/* Active Permanent Indicator (underline) */}
    <div
      className="absolute -bottom-0.5 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ease-out"
      style={{
        left: activeIndicatorStyle.left,
        width: activeIndicatorStyle.width,
      }}
    />

    {/* Home Button */}
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
        activeNav === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
      }`}
    >
      Home
    </button>
    
    {/* Products Button */}
    <button
      ref={productsRef}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        setTabStyle({
          left: target.offsetLeft,
          width: target.offsetWidth,
          opacity: 1,
        });
      }}
      onClick={() => {
        scrollTo('products');
        setActiveNav('products');
        if (productsRef.current && navContainerRef.current) {
          setActiveIndicatorStyle({
            left: productsRef.current.offsetLeft,
            width: productsRef.current.offsetWidth,
          });
        }
      }}
      className={`text-sm font-medium transition-colors px-3 py-1.5 ${
        activeNav === 'products' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
      }`}
    >
      Products
    </button>
    
    {/* Setup Your School Button */}
    <button
      ref={setupRef}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        setTabStyle({
          left: target.offsetLeft,
          width: target.offsetWidth,
          opacity: 1,
        });
      }}
      onClick={() => {
        scrollTo('setup');
        setActiveNav('setup');
        if (setupRef.current && navContainerRef.current) {
          setActiveIndicatorStyle({
            left: setupRef.current.offsetLeft,
            width: setupRef.current.offsetWidth,
          });
        }
      }}
      className={`text-sm font-medium transition-colors px-3 py-1.5 ${
        activeNav === 'setup' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
      }`}
    >
      Setup Your School
    </button>
  </div>
  
  <div className="flex items-center gap-3 flex-shrink-0">
    <div className="relative">
      <button onClick={() => setTrayOpen(!trayOpen)} className="h-9 px-3 rounded-lg bg-slate-100 border border-slate-200 text-sm font-medium flex items-center gap-2 hover:bg-slate-200 transition-all text-slate-700">
        <Grid className="w-4 h-4" /> Login
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${trayOpen ? 'rotate-180' : ''}`} />
      </button>
      {trayOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setTrayOpen(false)} />
          <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl z-20">
            <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Quick Access</p>
            {products.map((prod) => {
              const Icon = prod.icon;
              const isBlue = prod.color === 'blue';
              return (
                <a key={prod.title} href={prod.loginUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group" onClick={() => setTrayOpen(false)}>
                  <div className={`w-8 h-8 rounded-lg ${isBlue ? 'bg-blue-100' : 'bg-indigo-100'} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${isBlue ? 'text-blue-600' : 'text-indigo-600'}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{prod.title}</p>
                    <p className="text-[10px] text-slate-400">Click to open</p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
    <button onClick={() => scrollTo('setup')} className="h-9 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold transition-all shadow-md">Get Started</button>
  </div>
</div>

          {/* Mobile: Only Hamburger Menu button - Login & Get Started will be INSIDE the hamburger */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg border border-slate-200">
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown - Login and Get Started buttons ADDED to hamburger menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 px-5 space-y-3 bg-white shadow-lg">
            {/* Navigation Links */}
            <button onClick={() => scrollTo('home')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Home</button>
            <button onClick={() => scrollTo('products')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Products</button>
            <button onClick={() => scrollTo('setup')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Setup Your School</button>
            
            {/* Divider */}
            <div className="border-t border-slate-100 my-2"></div>
            
            {/* LOGIN BUTTON - inside hamburger menu */}
            <div className="relative">
              <button onClick={() => setTrayOpen(!trayOpen)} className="w-full flex items-center justify-between py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                <span className="flex items-center gap-2"><Grid className="w-4 h-4" /> Login</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${trayOpen ? 'rotate-180' : ''}`} />
              </button>
              {trayOpen && (
                <div className="mt-2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Quick Access</p>
                  {products.map((prod) => {
                    const Icon = prod.icon;
                    const isBlue = prod.color === 'blue';
                    return (
                      <a key={prod.title} href={prod.loginUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group" onClick={() => { setTrayOpen(false); setMobileMenuOpen(false); }}>
                        <div className={`w-8 h-8 rounded-lg ${isBlue ? 'bg-blue-100' : 'bg-indigo-100'} flex items-center justify-center`}>
                          <Icon className={`w-4 h-4 ${isBlue ? 'text-blue-600' : 'text-indigo-600'}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{prod.title}</p>
                          <p className="text-[10px] text-slate-400">Click to open</p>
                        </div>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
            
            {/* GET STARTED BUTTON - inside hamburger menu */}
            <button onClick={() => scrollTo('setup')} className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold transition-all shadow-md text-center">
              Get Started
            </button>
          </div>
        )}
      </header>

      {/* ========== HOME SECTION ========== */}
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-5 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" /></span>
              <span className="text-xs font-medium text-blue-700 tracking-wide">SMARTER SCHOOLS · BETTER OUTCOMES</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800 leading-[1.1] mb-4">
              Run your school.<br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">Not your paperwork.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
              EduSpace is the complete digital platform for African schools, connecting administrators, teachers, parents, and students through one integrated system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button onClick={() => scrollTo('setup')} className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                Setup Your School <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-200 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1.5">
                    <stat.icon className="w-3 h-3 text-blue-500" /> {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRODUCTS SECTION ========== */}
      <section id="products" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3 h-3" /> School Management Suite
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              Eduspace <span className="text-blue-600">Products</span>
            </h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Powerful interfaces. One unified platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {products.map((product) => {
              const Icon = product.icon;
              const isBlue = product.color === 'blue';
              const gradientFrom = isBlue ? 'from-blue-500' : 'from-indigo-500';
              const gradientTo = isBlue ? 'to-blue-600' : 'to-indigo-600';
              const bgLight = isBlue ? 'bg-blue-50' : 'bg-indigo-50';
              const textColor = isBlue ? 'text-blue-600' : 'text-indigo-600';
              
              return (
                <div 
                  key={product.title} 
                  className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} blur-xl opacity-20`} />
                  </div>
                  
                  <div className="relative p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div className={`absolute inset-0 ${bgLight} rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity`} />
                        <div className={`relative w-12 h-12 rounded-xl ${bgLight} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${textColor}`} />
                        </div>
                      </div>
                      <div className={`w-12 h-12 ${isBlue ? 'bg-blue-500/5' : 'bg-indigo-500/5'} rounded-bl-2xl -mr-2 -mt-2`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {product.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                      {[
                        isBlue ? 'Analytics' : 'Communication',
                        isBlue ? 'Fee tracking' : 'Report cards',
                        isBlue ? 'Staff mgmt' : 'Attendance',
                        isBlue ? 'Reports' : 'Payments'
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
                          <CheckCircle2 className={`w-3 h-3 ${textColor}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {product.title === 'EduSpace Portal' ? (
                      <a 
                        href="https://eduspaceportal.mzatinova.com/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`group/btn inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
                      >
                        <span>Access EduSpace Portal</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <a 
                        href={product.loginUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`group/btn inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
                      >
                        <span>Access Eduspace Hub</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-slate-600 text-xs font-medium">
              <Shield className="w-3.5 h-3.5 text-blue-500" />
              Designed for modern African schools
            </div>
          </div>
        </div>
      </section>

      {/* ========== SETUP SECTION ========== */}
      <section id="setup" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
              <Sparkles className="w-3 h-3" /> Get Started with EduSpace Portal
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Setup Your <span className="text-blue-600">Eduspace Portal</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Register your school to activate <span className="font-semibold text-blue-600">EduSpace Portal</span> — the parent gateway for attendance, results, and fee tracking.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-indigo-600" />
              
              <div className="p-6 md:p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-blue-500" /> School Name
                        </label>
                        <input type="text" placeholder="e.g., Progress Private Primary" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" value={formData.schoolName} onChange={e => setFormData({...formData, schoolName: e.target.value})} required />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-blue-500" /> Contact Person
                        </label>
                        <input type="text" placeholder="e.g., John Banda" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" value={formData.directorName} onChange={e => setFormData({...formData, directorName: e.target.value})} required />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                          WhatsApp
                        </label>
                        <input type="tel" placeholder="e.g., +265 999 000 000" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} required />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
                          Email
                        </label>
                        <input type="email" placeholder="e.g., director@school.com" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Users className="w-3 h-3 text-blue-500" /> Student Population
                      </label>
                      <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer" value={formData.studentCount} onChange={e => setFormData({...formData, studentCount: e.target.value})}>
                        <option value="under-200">📘 Under 200 Students</option>
                        <option value="200-500">📙 200 - 500 Students</option>
                        <option value="500-1000">📕 500 - 1,000 Students</option>
                        <option value="above-1000">📗 More than 1,000 Students</option>
                      </select>
                    </div>
                    
                    <button type="submit" className="group w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]">
                      <span>Submit Setup Request</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-50 border border-green-200 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Request Received!</h2>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto">
                      Thank you for choosing EduSpace Portal. A support representative will contact you on WhatsApp within 24 hours to activate your school portal.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="mt-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-sm transition-all shadow-md">
                      Submit Another Request
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-xs text-slate-500">© 2026 Mzatinova. Built in Malawi. Ready for Africa.</p>
        </div>
      </footer>
    </div>
  );
};

export default EduSpacePlatform;

// import React, { useState } from 'react';
// import { Sparkles, Grid, ChevronDown, ExternalLink, Menu, X, ArrowRight, Zap, Shield, Users, Cloud, Eye, LayoutDashboard, Layers, CheckCircle2 } from 'lucide-react';

// const EduSpacePlatform: React.FC = () => {
//   const [trayOpen, setTrayOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({ 
//     schoolName: '', directorName: '', whatsapp: '', email: '', studentCount: 'under-200' 
//   });

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setMobileMenuOpen(false);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Lead captured:', formData);
//     setSubmitted(true);
//   };

//   const products = [
//         {
//       title: 'EduSpace Portal',
//       description: 'Parent and guardian access gateway. Track attendance, view report cards, check fee balances.',
//       icon: Layers,
//       loginUrl: 'https://eduspaceportal.mzatinova.com/login',
//       color: 'indigo'
//     },
//     {
//       title: 'EduSpace Hub',
//       description: 'Management dashboard for school owners and administrators. Manage admissions, track fees, generate reports.',
//       icon: LayoutDashboard,
//       loginUrl: 'https://eduspacehub.mzatinova.com/',
//       color: 'blue'
//     },

//   ];

//   const stats = [
//     { value: '12,000+', label: 'Students Managed', icon: Users },
//     { value: '99.9%', label: 'Platform Uptime', icon: Cloud },
//     { value: '+38%', label: 'Efficiency Gain', icon: Zap },
//     { value: '2,140', label: 'Active Users Today', icon: Eye }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-500/20">
      
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-200/60 shadow-sm">
//         <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
//           <div onClick={() => scrollTo('home')} className="flex items-center gap-2 cursor-pointer group">
           
//             <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30 p-1.5">
//               <img src="/eduspace-logo.png" alt="Logo" className="w-16 h-10 object-contain transition-transform group-hover:scale-105" />
//             </span>    
//             <span className="text-lg font-bold tracking-tight text-slate-800">
//               Mzatinova <span className="text-blue-600">EduSpace</span>
//             </span>
//           </div>
          
//           <nav className="hidden md:flex items-center gap-6">
//             <button onClick={() => scrollTo('home')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</button>
//             <button onClick={() => scrollTo('products')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Products</button>
//             <button onClick={() => scrollTo('setup')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Setup Your School</button>
//           </nav>
          
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <button onClick={() => setTrayOpen(!trayOpen)} className="h-9 px-3 rounded-lg bg-slate-100 border border-slate-200 text-sm font-medium flex items-center gap-2 hover:bg-slate-200 transition-all text-slate-700">
//                 <Grid className="w-4 h-4" /> Login
//                 <ChevronDown className={`w-3.5 h-3.5 transition-transform ${trayOpen ? 'rotate-180' : ''}`} />
//               </button>
//               {trayOpen && (
//                 <>
//                   <div className="fixed inset-0 z-10" onClick={() => setTrayOpen(false)} />
//                   <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl z-20">
//                     <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Quick Access</p>
//                     {products.map((prod) => {
//                       const Icon = prod.icon;
//                       const isBlue = prod.color === 'blue';
//                       return (
//                         <a key={prod.title} href={prod.loginUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group" onClick={() => setTrayOpen(false)}>
//                           <div className={`w-8 h-8 rounded-lg ${isBlue ? 'bg-blue-100' : 'bg-indigo-100'} flex items-center justify-center`}>
//                             <Icon className={`w-4 h-4 ${isBlue ? 'text-blue-600' : 'text-indigo-600'}`} />
//                           </div>
//                           <div className="flex-1">
//                             <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{prod.title}</p>
//                             <p className="text-[10px] text-slate-400">Click to open</p>
//                           </div>
//                           <ExternalLink className="w-3 h-3 text-slate-400" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </>
//               )}
//             </div>
//             <button onClick={() => scrollTo('setup')} className="h-9 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold transition-all shadow-md">Get Started</button>
//             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg border border-slate-200">
//               {mobileMenuOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
//             </button>
//           </div>
//         </div>
//         {mobileMenuOpen && (
//           <div className="md:hidden border-t border-slate-200 py-4 px-5 space-y-3 bg-white">
//             <button onClick={() => scrollTo('home')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Home</button>
//             <button onClick={() => scrollTo('products')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Products</button>
//             <button onClick={() => scrollTo('setup')} className="block w-full text-left py-2 text-sm font-medium text-slate-600">Setup Your School</button>
//           </div>
//         )}
//       </header>

//       {/* ========== HOME SECTION ========== */}
//       <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />
//         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
        
//         <div className="relative max-w-7xl mx-auto px-5 py-12 lg:py-16">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
//               <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" /></span>
//               <span className="text-xs font-medium text-blue-700 tracking-wide">SMARTER SCHOOLS · BETTER OUTCOMES</span>
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800 leading-[1.1] mb-4">
//               Run your school.<br />
//               <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">Not your paperwork.</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
//               EduSpace is the complete digital platform for African schools, connecting administrators, teachers, parents, and students through one integrated system.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
//               <button onClick={() => scrollTo('setup')} className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105">
//                 Setup Your School <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-200 pt-8">
//               {stats.map((stat, idx) => (
//                 <div key={idx} className="text-center group">
//                   <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
//                   <div className="text-xs text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1.5">
//                     <stat.icon className="w-3 h-3 text-blue-500" /> {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== PRODUCTS SECTION ========== */}
// <section id="products" className="py-16 bg-gradient-to-b from-slate-50 to-white">
//   <div className="max-w-5xl mx-auto px-5">
//     <div className="text-center mb-10">
//       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
//         <Sparkles className="w-3 h-3" /> School Management Suite
//       </div>
//       <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
//         Eduspace <span className="text-blue-600">Products</span>
//       </h2>
//       <p className="text-slate-500 text-base max-w-2xl mx-auto">
//         Powerful interfaces. One unified platform.
//       </p>
//     </div>
    
//     <div className="grid md:grid-cols-2 gap-5">
//       {products.map((product) => {
//         const Icon = product.icon;
//         const isBlue = product.color === 'blue';
//         const gradientFrom = isBlue ? 'from-blue-500' : 'from-indigo-500';
//         const gradientTo = isBlue ? 'to-blue-600' : 'to-indigo-600';
//         const bgLight = isBlue ? 'bg-blue-50' : 'bg-indigo-50';
//         const textColor = isBlue ? 'text-blue-600' : 'text-indigo-600';
        
//         return (
//           <div 
//             key={product.title} 
//             className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
//           >
//             {/* Animated gradient border on hover */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <div className={`absolute -inset-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} blur-xl opacity-20`} />
//             </div>
            
//             {/* Content */}
//             <div className="relative p-5">
//               {/* Icon with animated background */}
//               <div className="flex items-start justify-between mb-4">
//                 <div className="relative">
//                   <div className={`absolute inset-0 ${bgLight} rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity`} />
//                   <div className={`relative w-12 h-12 rounded-xl ${bgLight} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon className={`w-6 h-6 ${textColor}`} />
//                   </div>
//                 </div>
//                 {/* Decorative corner element - smaller */}
//                 <div className={`w-12 h-12 ${isBlue ? 'bg-blue-500/5' : 'bg-indigo-500/5'} rounded-bl-2xl -mr-2 -mt-2`} />
//               </div>
              
//               {/* Title */}
//               <h3 className="text-xl font-bold text-slate-800 mb-2">
//                 {product.title}
//               </h3>
              
//               {/* Description - shorter */}
//               <p className="text-slate-500 text-sm leading-relaxed mb-4">
//                 {product.description}
//               </p>
              
//               {/* Feature list - 2x2 grid instead of list */}
//               <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
//                 {[
//                   isBlue ? 'Analytics' : 'Communication',
//                   isBlue ? 'Fee tracking' : 'Report cards',
//                   isBlue ? 'Staff mgmt' : 'Attendance',
//                   isBlue ? 'Reports' : 'Payments'
//                 ].map((feature, i) => (
//                   <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
//                     <CheckCircle2 className={`w-3 h-3 ${textColor}`} />
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div>
              
//               {/* CTA Button - smaller */}
//           {/* CTA - conditional for Portal vs Hub */}
// {product.title === 'EduSpace Portal' ? (
//   <a 
//     href="https://eduspaceportal.mzatinova.com/" 
//     target="_blank" 
//     rel="noreferrer" 
//     className={`group/btn inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
//   >
//     <span>Access EduSpace Portal</span>
//     <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
//   </a>
// )  : (
//   <a 
//     href={product.loginUrl} 
//     target="_blank" 
//     rel="noreferrer" 
//     className={`group/btn inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
//   >
//     <span>Access Eduspace Hub</span>
//     <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
//   </a>
// )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
    
//     {/* Trust badge - smaller */}
//     <div className="text-center mt-10">
//   <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-slate-600 text-xs font-medium">
//     <Shield className="w-3.5 h-3.5 text-blue-500" />
//    Designed for modern African schools
//   </div>
// </div>
//   </div>
// </section>

//       {/* ========== SETUP SECTION ========== */}
// <section id="setup" className="py-20 bg-gradient-to-b from-white to-slate-50">
//   <div className="max-w-4xl mx-auto px-5">
//     {/* Header with icon */}
//     <div className="text-center mb-10">
//       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
//         <Sparkles className="w-3 h-3" /> Get Started with EduSpace Portal
//       </div>
//       <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
//         Setup Your <span className="text-blue-600">Eduspace Portal</span>
//       </h2>
//       <p className="text-slate-500 text-sm max-w-md mx-auto">
//         Register your school to activate <span className="font-semibold text-blue-600">EduSpace Portal</span> — the parent gateway for attendance, results, and fee tracking.
//       </p>
//     </div>
    
//     <div className="relative">
//       {/* Decorative glow behind form */}
//       <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-50" />
      
//       <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
//         {/* Top accent bar */}
//         <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-indigo-600" />
        
//         <div className="p-6 md:p-8">
//           {!submitted ? (
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
//                     <Users className="w-3 h-3 text-blue-500" /> School Name
//                   </label>
//                   <input type="text" placeholder="e.g., Progress Private Primary" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" value={formData.schoolName} onChange={e => setFormData({...formData, schoolName: e.target.value})} required />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
//                     <Users className="w-3 h-3 text-blue-500" /> Contact Person
//                   </label>
//                   <input type="text" placeholder="e.g., John Banda" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" value={formData.directorName} onChange={e => setFormData({...formData, directorName: e.target.value})} required />
//                 </div>
//               </div>
              
//               <div className="grid sm:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
//                     <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
//                     WhatsApp
//                   </label>
//                   <input type="tel" placeholder="e.g., +265 999 000 000" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} required />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
//                     <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
//                     Email
//                   </label>
//                   <input type="email" placeholder="e.g., director@school.com" className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
//                   <Users className="w-3 h-3 text-blue-500" /> Student Population
//                 </label>
//                 <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer" value={formData.studentCount} onChange={e => setFormData({...formData, studentCount: e.target.value})}>
//                   <option value="under-200">📘 Under 200 Students</option>
//                   <option value="200-500">📙 200 - 500 Students</option>
//                   <option value="500-1000">📕 500 - 1,000 Students</option>
//                   <option value="above-1000">📗 More than 1,000 Students</option>
//                 </select>
//               </div>
              
//               <button type="submit" className="group w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]">
//                 <span>Submit Setup Request</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </form>
//           ) : (
//             <div className="py-10 text-center space-y-4">
//               <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-50 border border-green-200 flex items-center justify-center mx-auto shadow-inner">
//                 <CheckCircle2 className="w-10 h-10 text-green-500" />
//               </div>
//               <h2 className="text-2xl font-bold text-slate-800">Request Received!</h2>
//               <p className="text-slate-500 text-sm max-w-sm mx-auto">
//                 Thank you for choosing EduSpace Portal. A support representative will contact you on WhatsApp within 24 hours to activate your school portal.
//               </p>
//               <button onClick={() => setSubmitted(false)} className="mt-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-sm transition-all shadow-md">
//                 Submit Another Request
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* Footer */}
//       <footer className="border-t border-slate-200 py-6 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-5 text-center">
//           <p className="text-xs text-slate-500">© 2026 Mzatinova. Built in Malawi. Ready for Africa.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default EduSpacePlatform;