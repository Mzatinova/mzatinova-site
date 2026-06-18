import React, { useState } from 'react';
import { 
  Users, Cloud, Globe, Mail, Server, Shield, 
  Activity, Database, HardDrive, Cpu, 
  BarChart3, TrendingUp, Clock, CheckCircle2,
  X, Menu, LogOut, Settings, HelpCircle, 
  Plus, Search, Filter, ArrowUpRight,
  CreditCard, FileText, MessageCircle, Phone,
  Zap, Layers, Box, Terminal, LayoutDashboard,
  Bell
} from 'lucide-react';

// Import all tab components
import HostingTab from './tabs/HostingTab';
import DomainsTab from './tabs/DomainsTab';
import EmailTab from './tabs/EmailTab';
import BillingTab from './tabs/BillingTab';
import SupportTab from './tabs/SupportTab';
import SettingsTab from './tabs/SettingsTab';

interface DashboardProps {
  user: {
    name: string;
    email: string;
    plan: string;
    company?: string;
    avatar?: string;
  };
  onLogout: () => void;
}

const CloudSpaceDashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data - replace with real API data
  const stats = [
    { label: 'Storage Used', value: '12 GB', limit: '50 GB', percentage: 24, icon: HardDrive, color: 'cyan' },
    { label: 'Bandwidth', value: '150 GB', limit: '500 GB', percentage: 30, icon: Activity, color: 'blue' },
    { label: 'Domains', value: '3', limit: '10', icon: Globe, color: 'purple' },
    { label: 'Email Accounts', value: '8', limit: '20', icon: Mail, color: 'green' },
  ];

  const domains = [
    { name: 'myschool.com', status: 'Active', expires: '2027-06-15' },
    { name: 'mybusiness.com', status: 'Active', expires: '2027-08-22' },
    { name: 'myportfolio.com', status: 'Active', expires: '2027-12-01' },
  ];

  const invoices = [
    { id: 'INV-2026-001', amount: 'MWK 25,000', status: 'Paid', date: '2026-06-01', plan: 'Business' },
    { id: 'INV-2026-002', amount: 'MWK 25,000', status: 'Pending', date: '2026-07-01', plan: 'Business' },
    { id: 'INV-2026-003', amount: 'MWK 25,000', status: 'Paid', date: '2026-05-01', plan: 'Business' },
  ];

  const quickActions = [
    { label: 'Add Domain', icon: Plus, color: 'cyan' },
    { label: 'Create Email', icon: Mail, color: 'blue' },
    { label: 'Upgrade Plan', icon: TrendingUp, color: 'purple' },
    { label: 'Security', icon: Shield, color: 'green' },
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'hosting', label: 'Hosting', icon: Server },
    { id: 'domains', label: 'Domains', icon: Globe },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'support', label: 'Support', icon: HelpCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-cyan-600 to-sky-600 rounded-2xl p-6 mb-6 text-white">
              <h2 className="text-2xl font-bold mb-1">Welcome back, {user.name}! 👋</h2>
              <p className="text-cyan-100">Your hosting is running smoothly. Here's what's happening with your account.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                const colorClasses = {
                  cyan: 'bg-cyan-100 text-cyan-600',
                  blue: 'bg-blue-100 text-blue-600',
                  purple: 'bg-purple-100 text-purple-600',
                  green: 'bg-green-100 text-green-600',
                };
                return (
                  <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      {stat.percentage !== undefined && (
                        <span className="text-xs font-medium text-slate-500">{stat.percentage}%</span>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                    {stat.limit && (
                      <p className="text-xs text-slate-400 mt-1">Limit: {stat.limit}</p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 mb-6 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {quickActions.map((action, idx) => {
                  const Icon = action.icon;
                  const colorClasses = {
                    cyan: 'text-cyan-600 hover:bg-cyan-50 border-cyan-200',
                    blue: 'text-blue-600 hover:bg-blue-50 border-blue-200',
                    purple: 'text-purple-600 hover:bg-purple-50 border-purple-200',
                    green: 'text-green-600 hover:bg-green-50 border-green-200',
                  };
                  return (
                    <button
                      key={idx}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl border bg-white hover:shadow-md transition-all ${colorClasses[action.color as keyof typeof colorClasses]}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Domains */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-800">Your Domains</h3>
                  <button 
                    onClick={() => setActiveTab('domains')}
                    className="text-sm text-cyan-600 font-semibold hover:underline"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {domains.map((domain, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-medium text-slate-800">{domain.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-green-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> {domain.status}
                        </span>
                        <span className="text-xs text-slate-400">Expires {domain.expires}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Invoices */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-800">Recent Invoices</h3>
                  <button 
                    onClick={() => setActiveTab('billing')}
                    className="text-sm text-cyan-600 font-semibold hover:underline"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {invoices.map((invoice, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                      <div>
                        <p className="text-sm font-medium text-slate-800">{invoice.id}</p>
                        <p className="text-xs text-slate-400">{invoice.date} · {invoice.plan}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-semibold ${invoice.status === 'Paid' ? 'text-green-600' : 'text-amber-600'}`}>
                          {invoice.status === 'Paid' ? '✓ Paid' : 'Pending'}
                        </span>
                        <span className="text-sm font-bold text-slate-800">{invoice.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="mt-6 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-800">Need Help?</h3>
                  <p className="text-sm text-slate-500">Our support team is available 24/7 to assist you.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => setActiveTab('support')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-50 text-cyan-700 text-sm font-medium hover:bg-cyan-100 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Live Chat
                  </button>
                  <button 
                    onClick={() => setActiveTab('support')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Email Support
                  </button>
                  <button 
                    onClick={() => setActiveTab('support')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case 'hosting':
        return <HostingTab userPlan={user.plan} />;
      case 'domains':
        return <DomainsTab />;
      case 'email':
        return <EmailTab />;
      case 'billing':
        return <BillingTab />;
      case 'support':
        return <SupportTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* ========== SIDEBAR ========== */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 shadow-lg transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center gap-2 h-16 px-5 border-b border-slate-200">
          <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 shadow-lg shadow-cyan-500/30 p-1.5">
            <Cloud className="w-6 h-6 text-white" />
          </span>
          <span className="text-lg font-bold text-slate-800">
            CloudSpace
          </span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* User Profile */}
        <div className="px-5 py-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>
          </div>
          <div className="mt-2">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full">
              <Zap className="w-3 h-3" /> {user.plan} Plan
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${isActive 
                    ? 'bg-gradient-to-r from-cyan-50 to-sky-50 text-cyan-700 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-100'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-600' : 'text-slate-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 bg-white">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="flex-1 lg:ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg border border-slate-200">
                <Menu className="w-5 h-5 text-slate-600" />
              </button>
              <h1 className="text-lg font-bold text-slate-800 capitalize">{activeTab}</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <Bell className="w-5 h-5 text-slate-500" />
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <HelpCircle className="w-5 h-5 text-slate-500" />
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* ========== TAB CONTENT ========== */}
        <main className="p-4 sm:p-6">
          {renderTabContent()}

          {/* Footer */}
          <footer className="mt-8 py-4 text-center">
            <p className="text-xs text-slate-400">© 2026 Mzatinova. Built in Malawi. Ready for Africa.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default CloudSpaceDashboard;

// import React, { useState } from 'react';
// import { 
//   Users, Cloud, Globe, Mail, Server, Shield, 
//   Activity, Database, HardDrive, Cpu, 
//   BarChart3, TrendingUp, Clock, CheckCircle2,
//   X, Menu, LogOut, Settings, HelpCircle, 
//   Plus, Search, Filter, ArrowUpRight,
//   CreditCard, FileText, MessageCircle, Phone,
//   Zap, Layers, Box, Terminal, LayoutDashboard
// } from 'lucide-react';

// interface DashboardProps {
//   user: {
//     name: string;
//     email: string;
//     plan: string;
//     company?: string;
//     avatar?: string;
//   };
//   onLogout: () => void;
// }

// const CloudSpaceDashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Mock data - replace with real API data
//   const stats = [
//     { label: 'Storage Used', value: '12 GB', limit: '50 GB', percentage: 24, icon: HardDrive, color: 'cyan' },
//     { label: 'Bandwidth', value: '150 GB', limit: '500 GB', percentage: 30, icon: Activity, color: 'blue' },
//     { label: 'Domains', value: '3', limit: '10', icon: Globe, color: 'purple' },
//     { label: 'Email Accounts', value: '8', limit: '20', icon: Mail, color: 'green' },
//   ];

//   const domains = [
//     { name: 'myschool.com', status: 'Active', expires: '2027-06-15' },
//     { name: 'mybusiness.com', status: 'Active', expires: '2027-08-22' },
//     { name: 'myportfolio.com', status: 'Active', expires: '2027-12-01' },
//   ];

//   const invoices = [
//     { id: 'INV-2026-001', amount: 'MWK 25,000', status: 'Paid', date: '2026-06-01', plan: 'Business' },
//     { id: 'INV-2026-002', amount: 'MWK 25,000', status: 'Pending', date: '2026-07-01', plan: 'Business' },
//     { id: 'INV-2026-003', amount: 'MWK 25,000', status: 'Paid', date: '2026-05-01', plan: 'Business' },
//   ];

//   const quickActions = [
//     { label: 'Add Domain', icon: Plus, color: 'cyan' },
//     { label: 'Create Email', icon: Mail, color: 'blue' },
//     { label: 'Upgrade Plan', icon: TrendingUp, color: 'purple' },
//     { label: 'Security', icon: Shield, color: 'green' },
//   ];

//   const sidebarItems = [
//     { id: 'overview', label: 'Overview', icon: LayoutDashboard },
//     { id: 'hosting', label: 'Hosting', icon: Server },
//     { id: 'domains', label: 'Domains', icon: Globe },
//     { id: 'email', label: 'Email', icon: Mail },
//     { id: 'billing', label: 'Billing', icon: CreditCard },
//     { id: 'support', label: 'Support', icon: HelpCircle },
//     { id: 'settings', label: 'Settings', icon: Settings },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 flex">
//       {/* ========== SIDEBAR ========== */}
//       <div className={`
//         fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 shadow-lg transform transition-transform duration-300
//         ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//         lg:translate-x-0
//       `}>
//         {/* Sidebar Header */}
//         <div className="flex items-center gap-2 h-16 px-5 border-b border-slate-200">
//           <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 shadow-lg shadow-cyan-500/30 p-1.5">
//             <Cloud className="w-6 h-6 text-white" />
//           </span>
//           <span className="text-lg font-bold text-slate-800">
//             CloudSpace
//           </span>
//           <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto">
//             <X className="w-5 h-5 text-slate-500" />
//           </button>
//         </div>

//         {/* User Profile */}
//         <div className="px-5 py-4 border-b border-slate-200">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
//               {user.name.charAt(0)}
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-sm font-semibold text-slate-800 truncate">{user.name}</p>
//               <p className="text-xs text-slate-500 truncate">{user.email}</p>
//             </div>
//           </div>
//           <div className="mt-2">
//             <span className="inline-flex items-center gap-1 text-xs font-medium text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full">
//               <Zap className="w-3 h-3" /> {user.plan} Plan
//             </span>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="px-3 py-4 space-y-1">
//           {sidebarItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = activeTab === item.id;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
//                 className={`
//                   w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
//                   ${isActive 
//                     ? 'bg-gradient-to-r from-cyan-50 to-sky-50 text-cyan-700 shadow-sm' 
//                     : 'text-slate-600 hover:bg-slate-100'
//                   }
//                 `}
//               >
//                 <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-600' : 'text-slate-400'}`} />
//                 {item.label}
//               </button>
//             );
//           })}
//         </nav>

//         {/* Logout */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 bg-white">
//           <button
//             onClick={onLogout}
//             className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
//           >
//             <LogOut className="w-5 h-5" />
//             Log Out
//           </button>
//         </div>
//       </div>

//       {/* ========== MAIN CONTENT ========== */}
//       <div className="flex-1 lg:ml-64">
//         {/* Top Header */}
//         <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
//           <div className="flex items-center justify-between h-16 px-4 sm:px-6">
//             <div className="flex items-center gap-3">
//               <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg border border-slate-200">
//                 <Menu className="w-5 h-5 text-slate-600" />
//               </button>
//               <h1 className="text-lg font-bold text-slate-800 capitalize">{activeTab}</h1>
//             </div>
//             <div className="flex items-center gap-3">
//               <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
//                 <Bell className="w-5 h-5 text-slate-500" />
//               </button>
//               <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
//                 <HelpCircle className="w-5 h-5 text-slate-500" />
//               </button>
//               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
//                 {user.name.charAt(0)}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* ========== DASHBOARD CONTENT ========== */}
//         <main className="p-4 sm:p-6">
//           {/* Welcome Banner */}
//           <div className="bg-gradient-to-r from-cyan-600 to-sky-600 rounded-2xl p-6 mb-6 text-white">
//             <h2 className="text-2xl font-bold mb-1">Welcome back, {user.name}! 👋</h2>
//             <p className="text-cyan-100">Your hosting is running smoothly. Here's what's happening with your account.</p>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             {stats.map((stat, idx) => {
//               const Icon = stat.icon;
//               const colorClasses = {
//                 cyan: 'bg-cyan-100 text-cyan-600',
//                 blue: 'bg-blue-100 text-blue-600',
//                 purple: 'bg-purple-100 text-purple-600',
//                 green: 'bg-green-100 text-green-600',
//               };
//               return (
//                 <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
//                   <div className="flex items-start justify-between mb-3">
//                     <div className={`w-10 h-10 rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center`}>
//                       <Icon className="w-5 h-5" />
//                     </div>
//                     {stat.percentage !== undefined && (
//                       <span className="text-xs font-medium text-slate-500">{stat.percentage}%</span>
//                     )}
//                   </div>
//                   <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
//                   <p className="text-xs text-slate-500">{stat.label}</p>
//                   {stat.limit && (
//                     <p className="text-xs text-slate-400 mt-1">Limit: {stat.limit}</p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Quick Actions */}
//           <div className="bg-white rounded-xl border border-slate-200 p-5 mb-6 shadow-sm">
//             <h3 className="font-bold text-slate-800 mb-4">Quick Actions</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//               {quickActions.map((action, idx) => {
//                 const Icon = action.icon;
//                 const colorClasses = {
//                   cyan: 'text-cyan-600 hover:bg-cyan-50 border-cyan-200',
//                   blue: 'text-blue-600 hover:bg-blue-50 border-blue-200',
//                   purple: 'text-purple-600 hover:bg-purple-50 border-purple-200',
//                   green: 'text-green-600 hover:bg-green-50 border-green-200',
//                 };
//                 return (
//                   <button
//                     key={idx}
//                     className={`flex items-center gap-2 px-4 py-3 rounded-xl border bg-white hover:shadow-md transition-all ${colorClasses[action.color as keyof typeof colorClasses]}`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     <span className="text-sm font-medium">{action.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-6">
//             {/* Domains */}
//             <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-bold text-slate-800">Your Domains</h3>
//                 <button className="text-sm text-cyan-600 font-semibold hover:underline">View All</button>
//               </div>
//               <div className="space-y-3">
//                 {domains.map((domain, idx) => (
//                   <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
//                     <div className="flex items-center gap-2">
//                       <Globe className="w-4 h-4 text-slate-400" />
//                       <span className="text-sm font-medium text-slate-800">{domain.name}</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-green-600 flex items-center gap-1">
//                         <CheckCircle2 className="w-3 h-3" /> {domain.status}
//                       </span>
//                       <span className="text-xs text-slate-400">Expires {domain.expires}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Invoices */}
//             <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-bold text-slate-800">Recent Invoices</h3>
//                 <button className="text-sm text-cyan-600 font-semibold hover:underline">View All</button>
//               </div>
//               <div className="space-y-3">
//                 {invoices.map((invoice, idx) => (
//                   <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
//                     <div>
//                       <p className="text-sm font-medium text-slate-800">{invoice.id}</p>
//                       <p className="text-xs text-slate-400">{invoice.date} · {invoice.plan}</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className={`text-sm font-semibold ${invoice.status === 'Paid' ? 'text-green-600' : 'text-amber-600'}`}>
//                         {invoice.status === 'Paid' ? '✓ Paid' : 'Pending'}
//                       </span>
//                       <span className="text-sm font-bold text-slate-800">{invoice.amount}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Support Section */}
//           <div className="mt-6 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//               <div>
//                 <h3 className="font-bold text-slate-800">Need Help?</h3>
//                 <p className="text-sm text-slate-500">Our support team is available 24/7 to assist you.</p>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-50 text-cyan-700 text-sm font-medium hover:bg-cyan-100 transition-all">
//                   <MessageCircle className="w-4 h-4" />
//                   Live Chat
//                 </button>
//                 <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all">
//                   <Mail className="w-4 h-4" />
//                   Email Support
//                 </button>
//                 <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all">
//                   <Phone className="w-4 h-4" />
//                   Call Us
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <footer className="mt-8 py-4 text-center">
//             <p className="text-xs text-slate-400">© 2026 Mzatinova. Built in Malawi. Ready for Africa.</p>
//           </footer>
//         </main>
//       </div>
//     </div>
//   );
// };

// // Missing Bell icon - add to imports if needed
// const Bell = ({ className }: { className?: string }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//     <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//   </svg>
// );

// export default CloudSpaceDashboard;