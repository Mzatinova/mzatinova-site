import React, { useState } from 'react';
import { 
  Server, Globe, Clock,  Search, Plus,
  Power, PowerOff, Edit, RefreshCw, ArrowUpRight,
  Activity, HardDrive, Cpu, CheckCircle2
} from 'lucide-react';

interface HostingTabProps {
  userPlan?: string;
}

const HostingTab: React.FC<HostingTabProps> = ({ userPlan = 'Business' }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const hostingServers = [
    {
      id: 'server-1',
      name: 'Web Server - Primary',
      type: 'Web Hosting',
      status: 'Running',
      plan: 'Business',
      ip: '192.168.1.100',
      location: 'South Africa',
      uptime: '99.99%',
      resources: {
        cpu: '45%',
        memory: '12 GB / 16 GB',
        storage: '40 GB / 50 GB',
        bandwidth: '320 GB / 500 GB',
      },
      domains: ['myschool.com', 'mybusiness.com'],
      created: '2026-01-15',
      nextPayment: '2026-07-01',
    },
    {
      id: 'server-2',
      name: 'Database Server',
      type: 'Database Hosting',
      status: 'Running',
      plan: 'Business',
      ip: '192.168.1.101',
      location: 'South Africa',
      uptime: '99.98%',
      resources: {
        cpu: '28%',
        memory: '8 GB / 16 GB',
        storage: '20 GB / 50 GB',
        bandwidth: '80 GB / 500 GB',
      },
      domains: ['myschool.com'],
      created: '2026-02-20',
      nextPayment: '2026-07-01',
    },
    {
      id: 'server-3',
      name: 'Staging Server',
      type: 'Web Hosting',
      status: 'Stopped',
      plan: 'Starter',
      ip: '192.168.1.102',
      location: 'South Africa',
      uptime: 'N/A',
      resources: {
        cpu: '0%',
        memory: '0 GB / 10 GB',
        storage: '5 GB / 10 GB',
        bandwidth: '0 GB / 100 GB',
      },
      domains: ['staging.mybusiness.com'],
      created: '2026-03-10',
      nextPayment: '2026-07-01',
    },
  ];

  const stats = [
    { label: 'Total Servers', value: '3', icon: Server, color: 'cyan' },
    { label: 'Total Domains', value: '5', icon: Globe, color: 'blue' },
    { label: 'Storage Used', value: '65 GB', icon: HardDrive, color: 'purple' },
    { label: 'Bandwidth Used', value: '400 GB', icon: Activity, color: 'green' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running': return 'text-green-600 bg-green-50';
      case 'Stopped': return 'text-red-600 bg-red-50';
      case 'Pending': return 'text-amber-600 bg-amber-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const filteredServers = hostingServers.filter(server =>
    server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    server.domains.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
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
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search servers..." 
              className="pl-9 pr-4 h-10 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all whitespace-nowrap">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md w-full sm:w-auto justify-center">
          <Plus className="w-4 h-4" />
          New Server
        </button>
      </div>

      {/* Server Cards */}
      {filteredServers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <Server className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800">No servers found</h3>
          <p className="text-sm text-slate-500">Try adjusting your search or create a new server.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredServers.map((server) => (
            <div 
              key={server.id} 
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Server Header */}
              <div className="p-5 border-b border-slate-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-sky-100 flex items-center justify-center">
                      <Server className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{server.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${getStatusColor(server.status)}`}>
                          {server.status}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500">{server.type}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500">{server.plan}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {server.status === 'Running' ? (
                      <button className="p-2 rounded-lg hover:bg-slate-100 transition-all text-red-500" title="Stop Server">
                        <PowerOff className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="p-2 rounded-lg hover:bg-slate-100 transition-all text-green-500" title="Start Server">
                        <Power className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-2 rounded-lg hover:bg-slate-100 transition-all text-slate-400" title="Edit Server">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Server Details */}
              <div className="p-5 space-y-4">
                {/* IP & Location */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Globe className="w-4 h-4" />
                    <span>{server.ip}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span>{server.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>Uptime: {server.uptime}</span>
                  </div>
                </div>

                {/* Resources */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>CPU</span>
                      <span>{server.resources.cpu}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: server.resources.cpu }} />
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Memory</span>
                      <span>{server.resources.memory}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Storage</span>
                      <span>{server.resources.storage}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Bandwidth</span>
                      <span>{server.resources.bandwidth}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '64%' }} />
                    </div>
                  </div>
                </div>

                {/* Domains */}
                {server.domains.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-2">Assigned Domains</p>
                    <div className="flex flex-wrap gap-2">
                      {server.domains.map((domain, idx) => (
                        <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span>Created: {server.created}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Next Payment: {server.nextPayment}</span>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                      <RefreshCw className="w-3.5 h-3.5" />
                      Restart
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-700 text-xs font-medium hover:bg-cyan-100 transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Missing icons
const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Filter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 13 10 21 14 18 14 13 22 3" />
  </svg>
);

export default HostingTab;