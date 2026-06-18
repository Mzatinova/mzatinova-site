import React, { useState } from 'react';
import { 
  Globe, Search, Filter, Plus, MoreVertical,
  CheckCircle2, XCircle, Clock, ExternalLink,
  Edit, Trash2, RefreshCw, ArrowUpRight,
  AlertCircle, Copy, Check, Shield, Lock
} from 'lucide-react';

interface Domain {
  id: string;
  name: string;
  status: 'Active' | 'Pending' | 'Expired' | 'Suspended';
  expires: string;
  registered: string;
  registrar: string;
  nameservers: string[];
  ssl: boolean;
  autoRenew: boolean;
  dns: string;
}

const DomainsTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  // Mock data - replace with real API data
  const domains: Domain[] = [
    {
      id: 'dom-1',
      name: 'myschool.com',
      status: 'Active',
      expires: '2027-06-15',
      registered: '2024-06-15',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: true,
      autoRenew: true,
      dns: 'CloudSpace DNS',
    },
    {
      id: 'dom-2',
      name: 'mybusiness.com',
      status: 'Active',
      expires: '2027-08-22',
      registered: '2024-08-22',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: true,
      autoRenew: true,
      dns: 'CloudSpace DNS',
    },
    {
      id: 'dom-3',
      name: 'myportfolio.com',
      status: 'Active',
      expires: '2027-12-01',
      registered: '2024-12-01',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: false,
      autoRenew: false,
      dns: 'CloudSpace DNS',
    },
    {
      id: 'dom-4',
      name: 'staging.mybusiness.com',
      status: 'Pending',
      expires: '2027-09-10',
      registered: '2025-09-10',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: false,
      autoRenew: true,
      dns: 'CloudSpace DNS',
    },
    {
      id: 'dom-5',
      name: 'oldproject.com',
      status: 'Expired',
      expires: '2026-01-15',
      registered: '2023-01-15',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: false,
      autoRenew: false,
      dns: 'CloudSpace DNS',
    },
  ];

  const stats = [
    { label: 'Total Domains', value: domains.length, icon: Globe, color: 'cyan' },
    { label: 'Active Domains', value: domains.filter(d => d.status === 'Active').length, icon: CheckCircle2, color: 'green' },
    { label: 'Expiring Soon', value: domains.filter(d => new Date(d.expires) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) && d.status === 'Active').length, icon: Clock, color: 'amber' },
    { label: 'SSL Protected', value: domains.filter(d => d.ssl).length, icon: Shield, color: 'purple' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50';
      case 'Pending': return 'text-amber-600 bg-amber-50';
      case 'Expired': return 'text-red-600 bg-red-50';
      case 'Suspended': return 'text-slate-600 bg-slate-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Pending': return <Clock className="w-3.5 h-3.5" />;
      case 'Expired': return <XCircle className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  const filteredDomains = domains.filter(domain => {
    const matchesSearch = domain.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || domain.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

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
            purple: 'bg-purple-100 text-purple-600',
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
              placeholder="Search domains..." 
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
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="expired">Expired</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md w-full sm:w-auto justify-center">
          <Plus className="w-4 h-4" />
          Register Domain
        </button>
      </div>

      {/* Domains Table */}
      {filteredDomains.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <Globe className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800">No domains found</h3>
          <p className="text-sm text-slate-500">Try adjusting your search or register a new domain.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Domain</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Expires</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">SSL</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Auto-Renew</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDomains.map((domain) => (
                  <React.Fragment key={domain.id}>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-slate-400" />
                          <span className="font-medium text-slate-800">{domain.name}</span>
                          <button 
                            onClick={() => copyToClipboard(domain.name, domain.id)}
                            className="p-1 rounded hover:bg-slate-200 transition-all text-slate-400 hover:text-slate-600"
                            title="Copy domain"
                          >
                            {copied === domain.id ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(domain.status)}`}>
                          {getStatusIcon(domain.status)}
                          {domain.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col">
                          <span className="text-slate-700">{domain.expires}</span>
                          {new Date(domain.expires) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) && domain.status === 'Active' && (
                            <span className="text-xs text-amber-600 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              Expiring soon
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        {domain.ssl ? (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600">
                            <Shield className="w-3.5 h-3.5" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                            <Lock className="w-3.5 h-3.5" />
                            Not enabled
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        {domain.autoRenew ? (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            On
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                            <XCircle className="w-3.5 h-3.5" />
                            Off
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5">
                          <button 
                            className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600"
                            title="Manage DNS"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600"
                            title="Edit Domain"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-1.5 rounded-lg hover:bg-red-50 transition-all text-slate-400 hover:text-red-600"
                            title="Delete Domain"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600"
                            title="View Details"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded row - shows when domain is selected */}
                    {selectedDomain === domain.id && (
                      <tr className="bg-slate-50/50">
                        <td colSpan={6} className="px-5 py-4">
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Registrar</p>
                              <p className="text-slate-700">{domain.registrar}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Registered</p>
                              <p className="text-slate-700">{domain.registered}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">DNS</p>
                              <p className="text-slate-700">{domain.dns}</p>
                            </div>
                            <div className="md:col-span-3">
                              <p className="text-xs font-medium text-slate-500 mb-1">Nameservers</p>
                              <div className="flex flex-wrap gap-2">
                                {domain.nameservers.map((ns, idx) => (
                                  <span key={idx} className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full">
                                    {ns}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DomainsTab;