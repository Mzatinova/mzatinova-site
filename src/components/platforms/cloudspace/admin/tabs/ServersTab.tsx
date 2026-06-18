import React, { useState } from 'react';
import {
  Server, Search, Filter, Plus, MoreVertical,
  CheckCircle2, XCircle, Clock, AlertCircle,
  Edit, Trash2, RefreshCw, Eye, Power,
  PowerOff, HardDrive, Cpu, Database, Activity,
  Globe, MapPin, Users, Cloud, Shield,
  Download, Upload, Terminal, BarChart3,
  Zap, Layers, Box, Wifi, Award
} from 'lucide-react';

interface Server {
  id: string;
  name: string;
  type: 'Web Hosting' | 'Database' | 'Email' | 'DNS' | 'Backup';
  status: 'Online' | 'Offline' | 'Maintenance' | 'Provisioning';
  plan: string;
  ip: string;
  location: string;
  uptime: string;
  cpu: number;
  memory: { used: string; total: string };
  storage: { used: string; total: string };
  bandwidth: { used: string; total: string };
  domains: number;
  users: number;
  created: string;
  lastRestart: string;
  assignedTo: string;
  specs: {
    cpu: string;
    ram: string;
    disk: string;
    network: string;
  };
}

const ServersTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedServer, setSelectedServer] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock data - replace with real API data
  const servers: Server[] = [
    {
      id: 'srv-1',
      name: 'Web Server - Primary',
      type: 'Web Hosting',
      status: 'Online',
      plan: 'Enterprise',
      ip: '192.168.1.100',
      location: 'South Africa',
      uptime: '99.99%',
      cpu: 32,
      memory: { used: '12 GB', total: '16 GB' },
      storage: { used: '40 GB', total: '50 GB' },
      bandwidth: { used: '320 GB', total: '500 GB' },
      domains: 45,
      users: 127,
      created: '2026-01-15',
      lastRestart: '2026-06-10 03:00',
      assignedTo: 'Jane Mwale',
      specs: {
        cpu: '8 vCPUs',
        ram: '16 GB',
        disk: '50 GB SSD',
        network: '1 Gbps',
      },
    },
    {
      id: 'srv-2',
      name: 'Web Server - Secondary',
      type: 'Web Hosting',
      status: 'Online',
      plan: 'Business',
      ip: '192.168.1.101',
      location: 'South Africa',
      uptime: '99.98%',
      cpu: 45,
      memory: { used: '8 GB', total: '16 GB' },
      storage: { used: '30 GB', total: '50 GB' },
      bandwidth: { used: '180 GB', total: '500 GB' },
      domains: 28,
      users: 89,
      created: '2026-02-20',
      lastRestart: '2026-06-12 02:00',
      assignedTo: 'Peter Kalima',
      specs: {
        cpu: '8 vCPUs',
        ram: '16 GB',
        disk: '50 GB SSD',
        network: '1 Gbps',
      },
    },
    {
      id: 'srv-3',
      name: 'Database Server - Primary',
      type: 'Database',
      status: 'Online',
      plan: 'Enterprise',
      ip: '192.168.1.102',
      location: 'South Africa',
      uptime: '99.97%',
      cpu: 78,
      memory: { used: '28 GB', total: '32 GB' },
      storage: { used: '180 GB', total: '200 GB' },
      bandwidth: { used: '120 GB', total: '500 GB' },
      domains: 0,
      users: 0,
      created: '2026-01-20',
      lastRestart: '2026-06-08 04:00',
      assignedTo: 'Jane Mwale',
      specs: {
        cpu: '16 vCPUs',
        ram: '32 GB',
        disk: '200 GB SSD',
        network: '10 Gbps',
      },
    },
    {
      id: 'srv-4',
      name: 'Email Server',
      type: 'Email',
      status: 'Maintenance',
      plan: 'Business',
      ip: '192.168.1.103',
      location: 'South Africa',
      uptime: '99.95%',
      cpu: 12,
      memory: { used: '4 GB', total: '8 GB' },
      storage: { used: '120 GB', total: '200 GB' },
      bandwidth: { used: '50 GB', total: '200 GB' },
      domains: 12,
      users: 34,
      created: '2026-03-10',
      lastRestart: '2026-06-15 06:00',
      assignedTo: 'Peter Kalima',
      specs: {
        cpu: '4 vCPUs',
        ram: '8 GB',
        disk: '200 GB SSD',
        network: '1 Gbps',
      },
    },
    {
      id: 'srv-5',
      name: 'Backup Server',
      type: 'Backup',
      status: 'Offline',
      plan: 'Starter',
      ip: '192.168.1.104',
      location: 'South Africa',
      uptime: 'N/A',
      cpu: 0,
      memory: { used: '0 GB', total: '8 GB' },
      storage: { used: '0 GB', total: '500 GB' },
      bandwidth: { used: '0 GB', total: '100 GB' },
      domains: 0,
      users: 0,
      created: '2026-04-05',
      lastRestart: '2026-06-14 08:00',
      assignedTo: 'Unassigned',
      specs: {
        cpu: '2 vCPUs',
        ram: '8 GB',
        disk: '500 GB HDD',
        network: '1 Gbps',
      },
    },
    {
      id: 'srv-6',
      name: 'DNS Server',
      type: 'DNS',
      status: 'Online',
      plan: 'Enterprise',
      ip: '192.168.1.105',
      location: 'South Africa',
      uptime: '99.99%',
      cpu: 8,
      memory: { used: '2 GB', total: '4 GB' },
      storage: { used: '10 GB', total: '20 GB' },
      bandwidth: { used: '30 GB', total: '100 GB' },
      domains: 89,
      users: 0,
      created: '2026-01-01',
      lastRestart: '2026-06-05 02:00',
      assignedTo: 'Jane Mwale',
      specs: {
        cpu: '2 vCPUs',
        ram: '4 GB',
        disk: '20 GB SSD',
        network: '1 Gbps',
      },
    },
  ];

  const stats = [
    { label: 'Total Servers', value: servers.length, icon: Server, color: 'cyan' },
    { label: 'Online', value: servers.filter(s => s.status === 'Online').length, icon: CheckCircle2, color: 'green' },
    { label: 'Maintenance', value: servers.filter(s => s.status === 'Maintenance').length, icon: Clock, color: 'amber' },
    { label: 'Offline', value: servers.filter(s => s.status === 'Offline').length, icon: AlertCircle, color: 'red' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': return 'text-green-600 bg-green-50';
      case 'Offline': return 'text-red-600 bg-red-50';
      case 'Maintenance': return 'text-amber-600 bg-amber-50';
      case 'Provisioning': return 'text-blue-600 bg-blue-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Online': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Offline': return <XCircle className="w-3.5 h-3.5" />;
      case 'Maintenance': return <Clock className="w-3.5 h-3.5" />;
      case 'Provisioning': return <Activity className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Web Hosting': return <Globe className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Email': return <Mail className="w-4 h-4" />;
      case 'DNS': return <Wifi className="w-4 h-4" />;
      case 'Backup': return <HardDrive className="w-4 h-4" />;
      default: return <Server className="w-4 h-4" />;
    }
  };

  const filteredServers = servers.filter(server => {
    const matchesSearch = server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          server.ip.includes(searchQuery) ||
                          server.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || server.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesType = typeFilter === 'all' || server.type.toLowerCase() === typeFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const colorClasses = {
            cyan: 'bg-cyan-100 text-cyan-600',
            green: 'bg-green-100 text-green-600',
            amber: 'bg-amber-100 text-amber-600',
            red: 'bg-red-100 text-red-600',
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
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
          <select 
            className="h-10 rounded-xl border border-slate-200 px-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 bg-white w-full sm:w-auto"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="maintenance">Maintenance</option>
            <option value="provisioning">Provisioning</option>
          </select>
          <select 
            className="h-10 rounded-xl border border-slate-200 px-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 bg-white w-full sm:w-auto"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="web hosting">Web Hosting</option>
            <option value="database">Database</option>
            <option value="email">Email</option>
            <option value="dns">DNS</option>
            <option value="backup">Backup</option>
          </select>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all w-full sm:w-auto justify-center">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md w-full sm:w-auto justify-center"
          >
            <Plus className="w-4 h-4" />
            New Server
          </button>
        </div>
      </div>

      {/* Server Cards */}
      {filteredServers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <Server className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800">No servers found</h3>
          <p className="text-sm text-slate-500">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredServers.map((server) => (
            <div 
              key={server.id} 
              className={`bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-all overflow-hidden ${
                server.status === 'Online' ? 'border-green-200' :
                server.status === 'Offline' ? 'border-red-200' :
                server.status === 'Maintenance' ? 'border-amber-200' :
                'border-slate-200'
              }`}
            >
              {/* Server Header */}
              <div className={`p-5 border-b ${
                server.status === 'Online' ? 'bg-green-50/30 border-green-100' :
                server.status === 'Offline' ? 'bg-red-50/30 border-red-100' :
                server.status === 'Maintenance' ? 'bg-amber-50/30 border-amber-100' :
                'bg-slate-50/30 border-slate-100'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      server.status === 'Online' ? 'bg-green-100 text-green-600' :
                      server.status === 'Offline' ? 'bg-red-100 text-red-600' :
                      server.status === 'Maintenance' ? 'bg-amber-100 text-amber-600' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      <Server className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{server.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full font-medium ${getStatusColor(server.status)}`}>
                          {getStatusIcon(server.status)}
                          {server.status}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500">{server.type}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          server.plan === 'Enterprise' ? 'text-purple-700 bg-purple-50' :
                          server.plan === 'Business' ? 'text-blue-700 bg-blue-50' :
                          'text-cyan-700 bg-cyan-50'
                        }`}>
                          {server.plan}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {server.status === 'Online' ? (
                      <button className="p-2 rounded-lg hover:bg-red-50 transition-all text-red-500" title="Stop Server">
                        <PowerOff className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="p-2 rounded-lg hover:bg-green-50 transition-all text-green-500" title="Start Server">
                        <Power className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-2 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600" title="Edit Server">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600" title="More">
                      <MoreVertical className="w-4 h-4" />
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
                    <span className="font-mono">{server.ip}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span>{server.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>Uptime: {server.uptime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users className="w-4 h-4" />
                    <span>{server.users} users</span>
                  </div>
                </div>

                {/* Resource Usage */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> CPU</span>
                      <span>{server.cpu}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${
                        server.cpu > 80 ? 'bg-red-500' :
                        server.cpu > 60 ? 'bg-amber-500' :
                        'bg-cyan-500'
                      }`} style={{ width: `${server.cpu}%` }} />
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> Memory</span>
                      <span>{server.memory.used} / {server.memory.total}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(parseInt(server.memory.used) / parseInt(server.memory.total)) * 100}%` }} />
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="flex items-center gap-1"><HardDrive className="w-3 h-3" /> Storage</span>
                      <span>{server.storage.used} / {server.storage.total}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${(parseInt(server.storage.used) / parseInt(server.storage.total)) * 100}%` }} />
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> Bandwidth</span>
                      <span>{server.bandwidth.used} / {server.bandwidth.total}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${(parseInt(server.bandwidth.used) / parseInt(server.bandwidth.total)) * 100}%` }} />
                    </div>
                  </div>
                </div>

                {/* Specs & Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <div className="bg-slate-50 rounded-lg px-3 py-2">
                    <p className="text-slate-400">CPU</p>
                    <p className="font-medium text-slate-700">{server.specs.cpu}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2">
                    <p className="text-slate-400">RAM</p>
                    <p className="font-medium text-slate-700">{server.specs.ram}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2">
                    <p className="text-slate-400">Disk</p>
                    <p className="font-medium text-slate-700">{server.specs.disk}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2">
                    <p className="text-slate-400">Network</p>
                    <p className="font-medium text-slate-700">{server.specs.network}</p>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span>Created: {server.created}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Last Restart: {server.lastRestart}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Assigned to: <span className="text-slate-600">{server.assignedTo}</span></span>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                      <Terminal className="w-3.5 h-3.5" />
                      SSH
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                      <BarChart3 className="w-3.5 h-3.5" />
                      Metrics
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-700 text-xs font-medium hover:bg-cyan-100 transition-all">
                      <Eye className="w-3.5 h-3.5" />
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Server Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">New Server</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Server Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Web Server - Primary" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Server Type</label>
                <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="web">Web Hosting</option>
                  <option value="database">Database</option>
                  <option value="email">Email</option>
                  <option value="dns">DNS</option>
                  <option value="backup">Backup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="south-africa">South Africa</option>
                  <option value="kenya">Kenya</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Plan</label>
                <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="starter">Starter</option>
                  <option value="business">Business</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Assigned To</label>
                <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="jane">Jane Mwale</option>
                  <option value="peter">Peter Kalima</option>
                  <option value="unassigned">Unassigned</option>
                </select>
              </div>
              <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                Create Server
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Missing icons
const X = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default ServersTab;