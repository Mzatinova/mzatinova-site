import React, { useState } from 'react';
import {
  Globe, Search, Filter, Plus, MoreVertical,
  CheckCircle2, XCircle, Clock, AlertCircle,
  Edit, Trash2, RefreshCw, Eye, ExternalLink,
  Copy, Check, Shield, Lock, Users, Server,
  Calendar, DollarSign, Award, Ban, UserCheck,
  Download, Upload, ArrowUpRight, MessageCircle
} from 'lucide-react';

interface Domain {
  id: string;
  name: string;
  owner: string;
  ownerEmail: string;
  status: 'Active' | 'Pending' | 'Expired' | 'Suspended' | 'Transferring';
  expires: string;
  registered: string;
  registrar: string;
  nameservers: string[];
  ssl: boolean;
  autoRenew: boolean;
  dns: string;
  hosting: string;
  userCount: number;
  plan: string;
  country: string;
}

const AdminDomainsTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [planFilter, setPlanFilter] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock data - replace with real API data
  const domains: Domain[] = [
    {
      id: 'dom-1',
      name: 'myschool.com',
      owner: 'John Doe',
      ownerEmail: 'john@mybusiness.com',
      status: 'Active',
      expires: '2027-06-15',
      registered: '2024-06-15',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: true,
      autoRenew: true,
      dns: 'CloudSpace DNS',
      hosting: 'Business Hosting',
      userCount: 5,
      plan: 'Business',
      country: 'Malawi',
    },
    {
      id: 'dom-2',
      name: 'mybusiness.com',
      owner: 'John Doe',
      ownerEmail: 'john@mybusiness.com',
      status: 'Active',
      expires: '2027-08-22',
      registered: '2024-08-22',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: true,
      autoRenew: true,
      dns: 'CloudSpace DNS',
      hosting: 'Business Hosting',
      userCount: 8,
      plan: 'Business',
      country: 'Malawi',
    },
    {
      id: 'dom-3',
      name: 'myportfolio.com',
      owner: 'John Doe',
      ownerEmail: 'john@mybusiness.com',
      status: 'Active',
      expires: '2027-12-01',
      registered: '2024-12-01',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: false,
      autoRenew: false,
      dns: 'CloudSpace DNS',
      hosting: 'Starter Hosting',
      userCount: 2,
      plan: 'Starter',
      country: 'Malawi',
    },
    {
      id: 'dom-4',
      name: 'techsolutions.com',
      owner: 'Mary Kalima',
      ownerEmail: 'mary@school.com',
      status: 'Active',
      expires: '2027-09-10',
      registered: '2025-09-10',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: true,
      autoRenew: true,
      dns: 'CloudSpace DNS',
      hosting: 'Enterprise Hosting',
      userCount: 15,
      plan: 'Enterprise',
      country: 'Malawi',
    },
    {
      id: 'dom-5',
      name: 'oldproject.com',
      owner: 'Peter Mwale',
      ownerEmail: 'peter@enterprise.com',
      status: 'Expired',
      expires: '2026-01-15',
      registered: '2023-01-15',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: false,
      autoRenew: false,
      dns: 'CloudSpace DNS',
      hosting: 'None',
      userCount: 0,
      plan: 'Starter',
      country: 'Malawi',
    },
    {
      id: 'dom-6',
      name: 'staging.mybusiness.com',
      owner: 'John Doe',
      ownerEmail: 'john@mybusiness.com',
      status: 'Pending',
      expires: '2027-09-10',
      registered: '2025-09-10',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: false,
      autoRenew: true,
      dns: 'CloudSpace DNS',
      hosting: 'Starter Hosting',
      userCount: 1,
      plan: 'Starter',
      country: 'Malawi',
    },
    {
      id: 'dom-7',
      name: 'schoolportal.mw',
      owner: 'Mary Kalima',
      ownerEmail: 'mary@school.com',
      status: 'Suspended',
      expires: '2026-11-20',
      registered: '2024-11-20',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: false,
      autoRenew: false,
      dns: 'CloudSpace DNS',
      hosting: 'Business Hosting',
      userCount: 3,
      plan: 'Business',
      country: 'Malawi',
    },
    {
      id: 'dom-8',
      name: 'globaltrade.com',
      owner: 'Grace Phiri',
      ownerEmail: 'grace@reseller.com',
      status: 'Active',
      expires: '2028-03-01',
      registered: '2025-03-01',
      registrar: 'CloudSpace',
      nameservers: ['ns1.cloudspace.com', 'ns2.cloudspace.com'],
      ssl: true,
      autoRenew: true,
      dns: 'CloudSpace DNS',
      hosting: 'Enterprise Hosting',
      userCount: 25,
      plan: 'Enterprise',
      country: 'Malawi',
    },
  ];

  const stats = [
    { label: 'Total Domains', value: domains.length, icon: Globe, color: 'cyan' },
    { label: 'Active', value: domains.filter(d => d.status === 'Active').length, icon: CheckCircle2, color: 'green' },
    { label: 'Expiring Soon', value: domains.filter(d => {
      const expDate = new Date(d.expires);
      const now = new Date();
      const daysToExpire = Math.ceil((expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      return daysToExpire <= 30 && daysToExpire > 0 && d.status === 'Active';
    }).length, icon: Clock, color: 'amber' },
    { label: 'Expired/Suspended', value: domains.filter(d => d.status === 'Expired' || d.status === 'Suspended').length, icon: AlertCircle, color: 'red' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50';
      case 'Pending': return 'text-amber-600 bg-amber-50';
      case 'Expired': return 'text-red-600 bg-red-50';
      case 'Suspended': return 'text-orange-600 bg-orange-50';
      case 'Transferring': return 'text-blue-600 bg-blue-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Pending': return <Clock className="w-3.5 h-3.5" />;
      case 'Expired': return <XCircle className="w-3.5 h-3.5" />;
      case 'Suspended': return <Ban className="w-3.5 h-3.5" />;
      case 'Transferring': return <ArrowUpRight className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Enterprise': return 'text-purple-700 bg-purple-50';
      case 'Business': return 'text-blue-700 bg-blue-50';
      case 'Starter': return 'text-cyan-700 bg-cyan-50';
      default: return 'text-slate-700 bg-slate-50';
    }
  };

  const filteredDomains = domains.filter(domain => {
    const matchesSearch = domain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          domain.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          domain.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || domain.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesPlan = planFilter === 'all' || domain.plan.toLowerCase() === planFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesPlan;
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
              placeholder="Search domains or owners..." 
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
            <option value="transferring">Transferring</option>
          </select>
          <select 
            className="h-10 rounded-xl border border-slate-200 px-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 bg-white w-full sm:w-auto"
            value={planFilter}
            onChange={(e) => setPlanFilter(e.target.value)}
          >
            <option value="all">All Plans</option>
            <option value="starter">Starter</option>
            <option value="business">Business</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all w-full sm:w-auto justify-center">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md w-full sm:w-auto justify-center"
          >
            <Plus className="w-4 h-4" />
            Add Domain
          </button>
        </div>
      </div>

      {/* Domains Table */}
      {filteredDomains.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <Globe className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800">No domains found</h3>
          <p className="text-sm text-slate-500">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Domain</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Owner</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Plan</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">SSL</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Expires</th>
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
                        <div>
                          <p className="text-slate-800">{domain.owner}</p>
                          <p className="text-xs text-slate-500">{domain.ownerEmail}</p>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getPlanColor(domain.plan)}`}>
                          {domain.plan}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(domain.status)}`}>
                          {getStatusIcon(domain.status)}
                          {domain.status}
                        </span>
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
                            None
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col">
                          <span className="text-slate-700">{domain.expires}</span>
                          {(() => {
                            const expDate = new Date(domain.expires);
                            const now = new Date();
                            const daysToExpire = Math.ceil((expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
                            if (daysToExpire <= 30 && daysToExpire > 0 && domain.status === 'Active') {
                              return (
                                <span className="text-xs text-amber-600 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {daysToExpire} days left
                                </span>
                              );
                            }
                            if (daysToExpire <= 0 && domain.status === 'Active') {
                              return (
                                <span className="text-xs text-red-600 flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" />
                                  Expired
                                </span>
                              );
                            }
                            return null;
                          })()}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5">
                          <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600" title="View">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600" title="Edit">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600" title="DNS Management">
                            <RefreshCw className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-red-50 transition-all text-slate-400 hover:text-red-600" title="Delete">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Expanded row */}
                    {selectedDomain === domain.id && (
                      <tr className="bg-slate-50/50">
                        <td colSpan={7} className="px-5 py-4">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
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
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Hosting</p>
                              <p className="text-slate-700">{domain.hosting}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Users</p>
                              <p className="text-slate-700">{domain.userCount}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Auto-Renew</p>
                              <p className="text-slate-700">{domain.autoRenew ? 'Enabled' : 'Disabled'}</p>
                            </div>
                            <div className="md:col-span-2">
                              <p className="text-xs font-medium text-slate-500 mb-1">Nameservers</p>
                              <div className="flex flex-wrap gap-2">
                                {domain.nameservers.map((ns, idx) => (
                                  <span key={idx} className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full font-mono">
                                    {ns}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="md:col-span-4 pt-2 border-t border-slate-200 flex gap-3">
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                                <MessageCircle className="w-3.5 h-3.5" />
                                Contact Owner
                              </button>
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                                <Server className="w-3.5 h-3.5" />
                                View Hosting
                              </button>
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                                <ExternalLink className="w-3.5 h-3.5" />
                                Visit Website
                              </button>
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

          {/* Pagination */}
          <div className="px-5 py-4 border-t border-slate-200 flex items-center justify-between">
            <p className="text-xs text-slate-500">Showing {filteredDomains.length} of {domains.length} domains</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-sky-600 text-white text-xs font-medium">1</button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">2</button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">Next</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Domain Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Add Domain</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Domain Name</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="example" 
                    className="flex-1 h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                  <select className="h-11 rounded-xl bg-slate-50 border border-slate-200 px-3 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                    <option value=".com">.com</option>
                    <option value=".mw">.mw</option>
                    <option value=".org">.org</option>
                    <option value=".net">.net</option>
                    <option value=".biz">.biz</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Owner</label>
                <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="john">John Doe (john@mybusiness.com)</option>
                  <option value="mary">Mary Kalima (mary@school.com)</option>
                  <option value="peter">Peter Mwale (peter@enterprise.com)</option>
                  <option value="grace">Grace Phiri (grace@reseller.com)</option>
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Nameservers</label>
                <input 
                  type="text" 
                  placeholder="ns1.cloudspace.com" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
                <input 
                  type="text" 
                  placeholder="ns2.cloudspace.com" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all mt-2"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" defaultChecked className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                  Auto-Renew
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" defaultChecked className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                  SSL Certificate
                </label>
              </div>
              <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                Add Domain
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

export default AdminDomainsTab;