import React, { useState } from 'react';
import {
  Cloud, Menu, X, LogOut, Settings, HelpCircle,
  Users, Server, Globe, Mail, CreditCard,
  LayoutDashboard, Zap, TrendingUp, TrendingDown,
  CheckCircle2, AlertCircle, Clock, Activity,
  MessageCircle, Phone, Plus, Search, Filter,
  Download, Upload, RefreshCw, Eye, Edit,
  Trash2, MoreVertical, BarChart3, PieChart,
  Calendar, DollarSign, ShoppingBag, UserPlus,
  Shield, Award, Star, Crown, Bell,
  HardDrive, Cpu, Database, Wifi
} from 'lucide-react';

// Import all admin tab components
import UsersTab from './tabs/UsersTab';
import ServersTab from './tabs/ServersTab';
import AdminSettingsTab from './tabs/AdminSettingsTab';
import AdminDomainsTab from './tabs/DomainsTab';
import AdminBillingTab from './tabs/BillingTab';
import AdminTicketsTab from './tabs/TicketsTab';

interface AdminStats {
  totalUsers: number;
  totalSites: number;
  totalRevenue: string;
  uptime: string;
  openTickets: number;
  totalServers: number;
  totalDomains: number;
  pendingPayments: number;
}

interface RecentActivity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  type: 'user' | 'server' | 'payment' | 'ticket';
  status: 'success' | 'warning' | 'error' | 'info';
}

interface ServerHealth {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'maintenance';
  load: number;
  cpu: number;
  memory: number;
  disk: number;
  uptime: string;
  location: string;
}

interface AdminProps {
  admin: {
    name: string;
    email: string;
    role: string;
    avatar?: string;
  };
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminProps> = ({ admin, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock admin data - replace with real API data
  const stats: AdminStats = {
    totalUsers: 1247,
    totalSites: 3892,
    totalRevenue: 'MWK 12.4M',
    uptime: '99.99%',
    openTickets: 24,
    totalServers: 18,
    totalDomains: 4521,
    pendingPayments: 87,
  };

  const recentActivity: RecentActivity[] = [
    {
      id: 'act-1',
      user: 'John Doe',
      action: 'Signed up for Business Plan',
      timestamp: '2026-06-16 14:30',
      type: 'user',
      status: 'success',
    },
    {
      id: 'act-2',
      user: 'System',
      action: 'Server 3 auto-restored after outage',
      timestamp: '2026-06-16 13:45',
      type: 'server',
      status: 'warning',
    },
    {
      id: 'act-3',
      user: 'Mary Kalima',
      action: 'Payment failed - Expired card',
      timestamp: '2026-06-16 12:15',
      type: 'payment',
      status: 'error',
    },
    {
      id: 'act-4',
      user: 'Peter Mwale',
      action: 'Submitted new support ticket #1234',
      timestamp: '2026-06-16 11:00',
      type: 'ticket',
      status: 'info',
    },
    {
      id: 'act-5',
      user: 'Sarah Banda',
      action: 'Upgraded to Enterprise Plan',
      timestamp: '2026-06-16 10:30',
      type: 'user',
      status: 'success',
    },
  ];

  const serverHealth: ServerHealth[] = [
    {
      id: 'srv-1',
      name: 'Web Server 1',
      status: 'online',
      load: 45,
      cpu: 32,
      memory: 68,
      disk: 72,
      uptime: '99.99%',
      location: 'South Africa',
    },
    {
      id: 'srv-2',
      name: 'Web Server 2',
      status: 'online',
      load: 28,
      cpu: 45,
      memory: 55,
      disk: 60,
      uptime: '99.98%',
      location: 'South Africa',
    },
    {
      id: 'srv-3',
      name: 'Database Server',
      status: 'online',
      load: 62,
      cpu: 78,
      memory: 82,
      disk: 45,
      uptime: '99.97%',
      location: 'South Africa',
    },
    {
      id: 'srv-4',
      name: 'Backup Server',
      status: 'maintenance',
      load: 0,
      cpu: 0,
      memory: 0,
      disk: 0,
      uptime: 'N/A',
      location: 'South Africa',
    },
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'servers', label: 'Servers', icon: Server },
    { id: 'domains', label: 'Domains', icon: Globe },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'tickets', label: 'Tickets', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-600 bg-green-50';
      case 'offline': return 'text-red-600 bg-red-50';
      case 'maintenance': return 'text-amber-600 bg-amber-50';
      case 'success': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-amber-600 bg-amber-50';
      case 'error': return 'text-red-600 bg-red-50';
      case 'info': return 'text-blue-600 bg-blue-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return <Users className="w-4 h-4" />;
      case 'server': return <Server className="w-4 h-4" />;
      case 'payment': return <CreditCard className="w-4 h-4" />;
      case 'ticket': return <MessageCircle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  // Render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{stats.totalUsers}</p>
                    <p className="text-xs text-slate-500">Total Users</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{stats.totalServers}</p>
                    <p className="text-xs text-slate-500">Active Servers</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{stats.totalRevenue}</p>
                    <p className="text-xs text-slate-500">Total Revenue</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{stats.uptime}</p>
                    <p className="text-xs text-slate-500">Uptime</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Total Sites</span>
                  <Globe className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xl font-bold text-slate-800">{stats.totalSites}</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Domains</span>
                  <Globe className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xl font-bold text-slate-800">{stats.totalDomains}</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Open Tickets</span>
                  <MessageCircle className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xl font-bold text-slate-800">{stats.openTickets}</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Pending Payments</span>
                  <CreditCard className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xl font-bold text-amber-600">{stats.pendingPayments}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Activity - Span 2 columns */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-800">Recent Activity</h3>
                  <button className="text-sm text-cyan-600 font-semibold hover:underline">View All</button>
                </div>
                <div className="space-y-3 max-h-[400px] overflow-y-auto">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all">
                      <div className={`w-10 h-10 rounded-xl ${getStatusColor(activity.status)} flex items-center justify-center flex-shrink-0`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-slate-800">{activity.user}</p>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(activity.status)}`}>
                            {activity.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{activity.action}</p>
                        <p className="text-xs text-slate-400">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Server Health - Span 1 column */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-800">Server Health</h3>
                  <button className="text-sm text-cyan-600 font-semibold hover:underline">View All</button>
                </div>
                <div className="space-y-3">
                  {serverHealth.map((server) => (
                    <div key={server.id} className="p-3 rounded-xl bg-slate-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Server className="w-4 h-4 text-slate-400" />
                          <span className="text-sm font-medium text-slate-800">{server.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(server.status)}`}>
                          {server.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div>
                          <p className="text-slate-400">CPU</p>
                          <p className="font-medium text-slate-700">{server.cpu}%</p>
                        </div>
                        <div>
                          <p className="text-slate-400">Memory</p>
                          <p className="font-medium text-slate-700">{server.memory}%</p>
                        </div>
                        <div>
                          <p className="text-slate-400">Disk</p>
                          <p className="font-medium text-slate-700">{server.disk}%</p>
                        </div>
                        <div>
                          <p className="text-slate-400">Uptime</p>
                          <p className="font-medium text-slate-700">{server.uptime}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-cyan-200 text-cyan-600 hover:bg-cyan-50 hover:shadow-md transition-all">
                  <UserPlus className="w-5 h-5" />
                  <span className="text-sm font-medium">Add User</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 hover:shadow-md transition-all">
                  <Plus className="w-5 h-5" />
                  <span className="text-sm font-medium">New Server</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-purple-200 text-purple-600 hover:bg-purple-50 hover:shadow-md transition-all">
                  <BarChart3 className="w-5 h-5" />
                  <span className="text-sm font-medium">View Reports</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-green-200 text-green-600 hover:bg-green-50 hover:shadow-md transition-all">
                  <Download className="w-5 h-5" />
                  <span className="text-sm font-medium">Export Data</span>
                </button>
              </div>
            </div>
          </>
        );
      case 'users':
        return <UsersTab />;
      case 'servers':
        return <ServersTab />;
      case 'domains':
        return <AdminDomainsTab />;
      case 'billing':
        return <AdminBillingTab />;
      case 'tickets':
        return <AdminTicketsTab />;
      case 'settings':
        return <AdminSettingsTab />;
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
        <div className="flex items-center gap-2 h-16 px-5 border-b border-slate-200">
          <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 shadow-lg shadow-cyan-500/30 p-1.5">
            <Cloud className="w-6 h-6 text-white" />
          </span>
          <span className="text-lg font-bold text-slate-800">CloudSpace</span>
          <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full ml-1">Admin</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Admin Profile */}
        <div className="px-5 py-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
              {admin.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">{admin.name}</p>
              <p className="text-xs text-slate-500 truncate">{admin.email}</p>
            </div>
          </div>
          <div className="mt-2">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full">
              <Shield className="w-3 h-3" /> {admin.role}
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
              <h1 className="text-lg font-bold text-slate-800 capitalize">
                {activeTab === 'overview' ? 'Admin Dashboard' : activeTab}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors relative">
                <Bell className="w-5 h-5 text-slate-500" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <HelpCircle className="w-5 h-5 text-slate-500" />
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
                {admin.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* ========== TAB CONTENT ========== */}
        <main className="p-4 sm:p-6">
          {renderTabContent()}

          {/* Footer */}
          <footer className="mt-8 py-4 text-center">
            <p className="text-xs text-slate-400">© 2026 Mzatinova. Built in Malawi. Ready for Africa. | Admin Panel v1.0</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
// import React, { useState } from 'react';
// import {
//   Cloud, Menu, X, LogOut, Settings, HelpCircle,
//   Users, Server, Globe, Mail, CreditCard,
//   LayoutDashboard, Zap, TrendingUp, TrendingDown,
//   CheckCircle2, AlertCircle, Clock, Activity,
//   MessageCircle, Phone, Plus, Search, Filter,
//   Download, Upload, RefreshCw, Eye, Edit,
//   Trash2, MoreVertical, BarChart3, PieChart,
//   Calendar, DollarSign, ShoppingBag, UserPlus,
//   Shield, Award, Star, Crown, Bell,
//   HardDrive, Cpu, Database, Wifi
// } from 'lucide-react';

// interface AdminStats {
//   totalUsers: number;
//   totalSites: number;
//   totalRevenue: string;
//   uptime: string;
//   openTickets: number;
//   totalServers: number;
//   totalDomains: number;
//   pendingPayments: number;
// }

// interface RecentActivity {
//   id: string;
//   user: string;
//   action: string;
//   timestamp: string;
//   type: 'user' | 'server' | 'payment' | 'ticket';
//   status: 'success' | 'warning' | 'error' | 'info';
// }

// interface ServerHealth {
//   id: string;
//   name: string;
//   status: 'online' | 'offline' | 'maintenance';
//   load: number;
//   cpu: number;
//   memory: number;
//   disk: number;
//   uptime: string;
//   location: string;
// }

// interface AdminProps {
//   admin: {
//     name: string;
//     email: string;
//     role: string;
//     avatar?: string;
//   };
//   onLogout: () => void;
// }

// const AdminDashboard: React.FC<AdminProps> = ({ admin, onLogout }) => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Mock admin data - replace with real API data
//   const stats: AdminStats = {
//     totalUsers: 1247,
//     totalSites: 3892,
//     totalRevenue: 'MWK 12.4M',
//     uptime: '99.99%',
//     openTickets: 24,
//     totalServers: 18,
//     totalDomains: 4521,
//     pendingPayments: 87,
//   };

//   const recentActivity: RecentActivity[] = [
//     {
//       id: 'act-1',
//       user: 'John Doe',
//       action: 'Signed up for Business Plan',
//       timestamp: '2026-06-16 14:30',
//       type: 'user',
//       status: 'success',
//     },
//     {
//       id: 'act-2',
//       user: 'System',
//       action: 'Server 3 auto-restored after outage',
//       timestamp: '2026-06-16 13:45',
//       type: 'server',
//       status: 'warning',
//     },
//     {
//       id: 'act-3',
//       user: 'Mary Kalima',
//       action: 'Payment failed - Expired card',
//       timestamp: '2026-06-16 12:15',
//       type: 'payment',
//       status: 'error',
//     },
//     {
//       id: 'act-4',
//       user: 'Peter Mwale',
//       action: 'Submitted new support ticket #1234',
//       timestamp: '2026-06-16 11:00',
//       type: 'ticket',
//       status: 'info',
//     },
//     {
//       id: 'act-5',
//       user: 'Sarah Banda',
//       action: 'Upgraded to Enterprise Plan',
//       timestamp: '2026-06-16 10:30',
//       type: 'user',
//       status: 'success',
//     },
//   ];

//   const serverHealth: ServerHealth[] = [
//     {
//       id: 'srv-1',
//       name: 'Web Server 1',
//       status: 'online',
//       load: 45,
//       cpu: 32,
//       memory: 68,
//       disk: 72,
//       uptime: '99.99%',
//       location: 'South Africa',
//     },
//     {
//       id: 'srv-2',
//       name: 'Web Server 2',
//       status: 'online',
//       load: 28,
//       cpu: 45,
//       memory: 55,
//       disk: 60,
//       uptime: '99.98%',
//       location: 'South Africa',
//     },
//     {
//       id: 'srv-3',
//       name: 'Database Server',
//       status: 'online',
//       load: 62,
//       cpu: 78,
//       memory: 82,
//       disk: 45,
//       uptime: '99.97%',
//       location: 'South Africa',
//     },
//     {
//       id: 'srv-4',
//       name: 'Backup Server',
//       status: 'maintenance',
//       load: 0,
//       cpu: 0,
//       memory: 0,
//       disk: 0,
//       uptime: 'N/A',
//       location: 'South Africa',
//     },
//   ];

//   const sidebarItems = [
//     { id: 'overview', label: 'Overview', icon: LayoutDashboard },
//     { id: 'users', label: 'Users', icon: Users },
//     { id: 'servers', label: 'Servers', icon: Server },
//     { id: 'domains', label: 'Domains', icon: Globe },
//     { id: 'billing', label: 'Billing', icon: CreditCard },
//     { id: 'tickets', label: 'Tickets', icon: MessageCircle },
//     { id: 'settings', label: 'Settings', icon: Settings },
//   ];

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'online': return 'text-green-600 bg-green-50';
//       case 'offline': return 'text-red-600 bg-red-50';
//       case 'maintenance': return 'text-amber-600 bg-amber-50';
//       case 'success': return 'text-green-600 bg-green-50';
//       case 'warning': return 'text-amber-600 bg-amber-50';
//       case 'error': return 'text-red-600 bg-red-50';
//       case 'info': return 'text-blue-600 bg-blue-50';
//       default: return 'text-slate-600 bg-slate-50';
//     }
//   };

//   const getActivityIcon = (type: string) => {
//     switch (type) {
//       case 'user': return <Users className="w-4 h-4" />;
//       case 'server': return <Server className="w-4 h-4" />;
//       case 'payment': return <CreditCard className="w-4 h-4" />;
//       case 'ticket': return <MessageCircle className="w-4 h-4" />;
//       default: return <Activity className="w-4 h-4" />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex">
//       {/* ========== SIDEBAR ========== */}
//       <div className={`
//         fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 shadow-lg transform transition-transform duration-300
//         ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//         lg:translate-x-0
//       `}>
//         <div className="flex items-center gap-2 h-16 px-5 border-b border-slate-200">
//           <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 shadow-lg shadow-cyan-500/30 p-1.5">
//             <Cloud className="w-6 h-6 text-white" />
//           </span>
//           <span className="text-lg font-bold text-slate-800">CloudSpace</span>
//           <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full ml-1">Admin</span>
//           <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto">
//             <X className="w-5 h-5 text-slate-500" />
//           </button>
//         </div>

//         {/* Admin Profile */}
//         <div className="px-5 py-4 border-b border-slate-200">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
//               {admin.name.charAt(0)}
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-sm font-semibold text-slate-800 truncate">{admin.name}</p>
//               <p className="text-xs text-slate-500 truncate">{admin.email}</p>
//             </div>
//           </div>
//           <div className="mt-2">
//             <span className="inline-flex items-center gap-1 text-xs font-medium text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full">
//               <Shield className="w-3 h-3" /> {admin.role}
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
//                 onClick={() => {
//                   setActiveTab(item.id);
//                   setSidebarOpen(false);
//                 }}
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
//               <h1 className="text-lg font-bold text-slate-800 capitalize">
//                 {activeTab === 'overview' ? 'Admin Dashboard' : activeTab}
//               </h1>
//             </div>
//             <div className="flex items-center gap-3">
//               <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors relative">
//                 <Bell className="w-5 h-5 text-slate-500" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>
//               <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
//                 <HelpCircle className="w-5 h-5 text-slate-500" />
//               </button>
//               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
//                 {admin.name.charAt(0)}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* ========== ADMIN DASHBOARD CONTENT ========== */}
//         <main className="p-4 sm:p-6">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
//                   <Users className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-slate-800">{stats.totalUsers}</p>
//                   <p className="text-xs text-slate-500">Total Users</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
//                   <Server className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-slate-800">{stats.totalServers}</p>
//                   <p className="text-xs text-slate-500">Active Servers</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
//                   <DollarSign className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-slate-800">{stats.totalRevenue}</p>
//                   <p className="text-xs text-slate-500">Total Revenue</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
//                   <Activity className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-slate-800">{stats.uptime}</p>
//                   <p className="text-xs text-slate-500">Uptime</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Second Row Stats */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-slate-500">Total Sites</span>
//                 <Globe className="w-4 h-4 text-slate-400" />
//               </div>
//               <p className="text-xl font-bold text-slate-800">{stats.totalSites}</p>
//             </div>
//             <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-slate-500">Domains</span>
//                 <Globe className="w-4 h-4 text-slate-400" />
//               </div>
//               <p className="text-xl font-bold text-slate-800">{stats.totalDomains}</p>
//             </div>
//             <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-slate-500">Open Tickets</span>
//                 <MessageCircle className="w-4 h-4 text-slate-400" />
//               </div>
//               <p className="text-xl font-bold text-slate-800">{stats.openTickets}</p>
//             </div>
//             <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-slate-500">Pending Payments</span>
//                 <CreditCard className="w-4 h-4 text-slate-400" />
//               </div>
//               <p className="text-xl font-bold text-amber-600">{stats.pendingPayments}</p>
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-6">
//             {/* Recent Activity - Span 2 columns */}
//             <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-bold text-slate-800">Recent Activity</h3>
//                 <button className="text-sm text-cyan-600 font-semibold hover:underline">View All</button>
//               </div>
//               <div className="space-y-3 max-h-[400px] overflow-y-auto">
//                 {recentActivity.map((activity) => (
//                   <div key={activity.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all">
//                     <div className={`w-10 h-10 rounded-xl ${getStatusColor(activity.status)} flex items-center justify-center flex-shrink-0`}>
//                       {getActivityIcon(activity.type)}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2">
//                         <p className="text-sm font-medium text-slate-800">{activity.user}</p>
//                         <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(activity.status)}`}>
//                           {activity.status}
//                         </span>
//                       </div>
//                       <p className="text-sm text-slate-600">{activity.action}</p>
//                       <p className="text-xs text-slate-400">{activity.timestamp}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Server Health - Span 1 column */}
//             <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-bold text-slate-800">Server Health</h3>
//                 <button className="text-sm text-cyan-600 font-semibold hover:underline">View All</button>
//               </div>
//               <div className="space-y-3">
//                 {serverHealth.map((server) => (
//                   <div key={server.id} className="p-3 rounded-xl bg-slate-50">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center gap-2">
//                         <Server className="w-4 h-4 text-slate-400" />
//                         <span className="text-sm font-medium text-slate-800">{server.name}</span>
//                       </div>
//                       <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(server.status)}`}>
//                         {server.status}
//                       </span>
//                     </div>
//                     <div className="grid grid-cols-4 gap-2 text-xs">
//                       <div>
//                         <p className="text-slate-400">CPU</p>
//                         <p className="font-medium text-slate-700">{server.cpu}%</p>
//                       </div>
//                       <div>
//                         <p className="text-slate-400">Memory</p>
//                         <p className="font-medium text-slate-700">{server.memory}%</p>
//                       </div>
//                       <div>
//                         <p className="text-slate-400">Disk</p>
//                         <p className="font-medium text-slate-700">{server.disk}%</p>
//                       </div>
//                       <div>
//                         <p className="text-slate-400">Uptime</p>
//                         <p className="font-medium text-slate-700">{server.uptime}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="mt-6 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
//             <h3 className="font-bold text-slate-800 mb-4">Quick Actions</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//               <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-cyan-200 text-cyan-600 hover:bg-cyan-50 hover:shadow-md transition-all">
//                 <UserPlus className="w-5 h-5" />
//                 <span className="text-sm font-medium">Add User</span>
//               </button>
//               <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 hover:shadow-md transition-all">
//                 <Plus className="w-5 h-5" />
//                 <span className="text-sm font-medium">New Server</span>
//               </button>
//               <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-purple-200 text-purple-600 hover:bg-purple-50 hover:shadow-md transition-all">
//                 <BarChart3 className="w-5 h-5" />
//                 <span className="text-sm font-medium">View Reports</span>
//               </button>
//               <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-green-200 text-green-600 hover:bg-green-50 hover:shadow-md transition-all">
//                 <Download className="w-5 h-5" />
//                 <span className="text-sm font-medium">Export Data</span>
//               </button>
//             </div>
//           </div>

//           {/* Footer */}
//           <footer className="mt-8 py-4 text-center">
//             <p className="text-xs text-slate-400">© 2026 Mzatinova. Built in Malawi. Ready for Africa. | Admin Panel v1.0</p>
//           </footer>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;