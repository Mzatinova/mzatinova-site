import React, { useState } from 'react';
import {
  Mail, Search, Filter, Plus, MoreVertical,
  CheckCircle2, XCircle, Clock, ExternalLink,
  Edit, Trash2, RefreshCw, ArrowUpRight,
  AlertCircle, Copy, Check, Shield, Lock,
  Users, Inbox, Send, Star, Archive,
  User, Key, Settings, Download, Upload
} from 'lucide-react';

interface EmailAccount {
  id: string;
  email: string;
  name: string;
  status: 'Active' | 'Suspended' | 'Pending';
  storageUsed: string;
  storageLimit: string;
  lastLogin: string;
  quota: string;
  aliases: string[];
  forwardTo?: string;
  autoReply?: boolean;
}

interface EmailAlias {
  id: string;
  alias: string;
  target: string;
  status: 'Active' | 'Inactive';
}

const EmailTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAliasModal, setShowAliasModal] = useState(false);

  // Mock data - replace with real API data
  const emailAccounts: EmailAccount[] = [
    {
      id: 'email-1',
      email: 'info@myschool.com',
      name: 'School Admin',
      status: 'Active',
      storageUsed: '2.4 GB',
      storageLimit: '10 GB',
      lastLogin: '2026-06-16 14:30',
      quota: '10 GB',
      aliases: ['admin@myschool.com', 'principal@myschool.com'],
      forwardTo: '',
      autoReply: false,
    },
    {
      id: 'email-2',
      email: 'john@mybusiness.com',
      name: 'John Doe',
      status: 'Active',
      storageUsed: '5.8 GB',
      storageLimit: '10 GB',
      lastLogin: '2026-06-16 09:15',
      quota: '10 GB',
      aliases: ['jd@mybusiness.com'],
      forwardTo: 'john.personal@gmail.com',
      autoReply: false,
    },
    {
      id: 'email-3',
      email: 'support@mybusiness.com',
      name: 'Support Team',
      status: 'Active',
      storageUsed: '1.2 GB',
      storageLimit: '10 GB',
      lastLogin: '2026-06-15 16:45',
      quota: '10 GB',
      aliases: ['help@mybusiness.com'],
      forwardTo: '',
      autoReply: true,
    },
    {
      id: 'email-4',
      email: 'pending@mybusiness.com',
      name: 'New Staff',
      status: 'Pending',
      storageUsed: '0 GB',
      storageLimit: '5 GB',
      lastLogin: 'Never',
      quota: '5 GB',
      aliases: [],
      forwardTo: '',
      autoReply: false,
    },
    {
      id: 'email-5',
      email: 'finance@mybusiness.com',
      name: 'Finance Department',
      status: 'Suspended',
      storageUsed: '3.1 GB',
      storageLimit: '10 GB',
      lastLogin: '2026-05-20 11:00',
      quota: '10 GB',
      aliases: ['accounts@mybusiness.com'],
      forwardTo: '',
      autoReply: false,
    },
  ];

  const emailAliases: EmailAlias[] = [
    { id: 'alias-1', alias: 'admin@myschool.com', target: 'info@myschool.com', status: 'Active' },
    { id: 'alias-2', alias: 'principal@myschool.com', target: 'info@myschool.com', status: 'Active' },
    { id: 'alias-3', alias: 'jd@mybusiness.com', target: 'john@mybusiness.com', status: 'Active' },
    { id: 'alias-4', alias: 'help@mybusiness.com', target: 'support@mybusiness.com', status: 'Active' },
    { id: 'alias-5', alias: 'accounts@mybusiness.com', target: 'finance@mybusiness.com', status: 'Inactive' },
  ];

  const stats = [
    { label: 'Email Accounts', value: emailAccounts.length, icon: Mail, color: 'cyan' },
    { label: 'Active Accounts', value: emailAccounts.filter(e => e.status === 'Active').length, icon: CheckCircle2, color: 'green' },
    { label: 'Aliases', value: emailAliases.filter(a => a.status === 'Active').length, icon: Users, color: 'purple' },
    { label: 'Storage Used', value: '12.5 GB', icon: Inbox, color: 'blue' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50';
      case 'Pending': return 'text-amber-600 bg-amber-50';
      case 'Suspended': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Pending': return <Clock className="w-3.5 h-3.5" />;
      case 'Suspended': return <XCircle className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  const filteredAccounts = emailAccounts.filter(account => {
    const matchesSearch = account.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          account.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || account.status.toLowerCase() === statusFilter.toLowerCase();
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
            purple: 'bg-purple-100 text-purple-600',
            blue: 'bg-blue-100 text-blue-600',
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
              placeholder="Search email accounts..." 
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
            <option value="suspended">Suspended</option>
          </select>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button 
            onClick={() => setShowAliasModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all w-full sm:w-auto justify-center"
          >
            <Users className="w-4 h-4" />
            Aliases
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md w-full sm:w-auto justify-center"
          >
            <Plus className="w-4 h-4" />
            Create Email
          </button>
        </div>
      </div>

      {/* Email Accounts Table */}
      {filteredAccounts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <Mail className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800">No email accounts found</h3>
          <p className="text-sm text-slate-500">Try adjusting your search or create a new email account.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Storage</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Aliases</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Login</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAccounts.map((account) => (
                  <React.Fragment key={account.id}>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-slate-400" />
                            <span className="font-medium text-slate-800">{account.email}</span>
                            <button 
                              onClick={() => copyToClipboard(account.email, account.id)}
                              className="p-1 rounded hover:bg-slate-200 transition-all text-slate-400 hover:text-slate-600"
                              title="Copy email"
                            >
                              {copied === account.id ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                          <span className="text-xs text-slate-500 ml-6">{account.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(account.status)}`}>
                          {getStatusIcon(account.status)}
                          {account.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-slate-700">{account.storageUsed} / {account.storageLimit}</span>
                          <div className="w-full max-w-[100px] h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-cyan-500 rounded-full" 
                              style={{ width: `${(parseFloat(account.storageUsed) / parseFloat(account.storageLimit)) * 100}%` }} 
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-slate-700">{account.aliases.length}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-slate-500 text-xs">{account.lastLogin}</span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5">
                          <button 
                            className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600"
                            title="Access Webmail"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600"
                            title="Edit Account"
                          >
                            <Settings className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-1.5 rounded-lg hover:bg-red-50 transition-all text-slate-400 hover:text-red-600"
                            title="Delete Account"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded row - shows when account is selected */}
                    {selectedAccount === account.id && (
                      <tr className="bg-slate-50/50">
                        <td colSpan={6} className="px-5 py-4">
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Quota</p>
                              <p className="text-slate-700">{account.quota}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Forwarding</p>
                              <p className="text-slate-700">{account.forwardTo || 'Not configured'}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Auto-Reply</p>
                              <p className="text-slate-700">{account.autoReply ? 'Enabled' : 'Disabled'}</p>
                            </div>
                            {account.aliases.length > 0 && (
                              <div className="md:col-span-3">
                                <p className="text-xs font-medium text-slate-500 mb-1">Aliases</p>
                                <div className="flex flex-wrap gap-2">
                                  {account.aliases.map((alias, idx) => (
                                    <span key={idx} className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full">
                                      {alias}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
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

      {/* Create Email Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Create Email Account</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="username" 
                    className="flex-1 h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                  <span className="text-slate-500 text-sm">@myschool.com</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Display Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Storage Quota</label>
                <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="5">5 GB</option>
                  <option value="10" selected>10 GB</option>
                  <option value="20">20 GB</option>
                  <option value="50">50 GB</option>
                  <option value="100">100 GB</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300" />
                <label className="text-sm text-slate-600">Enable auto-reply</label>
              </div>
              <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Aliases Modal */}
      {showAliasModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Email Aliases</h2>
              <button onClick={() => setShowAliasModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mb-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md">
                <Plus className="w-4 h-4" />
                Create Alias
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Alias</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Target</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {emailAliases.map((alias) => (
                    <tr key={alias.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-slate-800">{alias.alias}</td>
                      <td className="px-4 py-3 text-slate-600">→ {alias.target}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                          alias.status === 'Active' ? 'text-green-600 bg-green-50' : 'text-slate-400 bg-slate-100'
                        }`}>
                          {alias.status === 'Active' ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          {alias.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-red-50 transition-all text-slate-400 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

export default EmailTab;