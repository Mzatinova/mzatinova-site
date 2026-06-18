import React, { useState } from 'react';
import {
  Users, Search, Filter, Plus, MoreVertical,
  CheckCircle2, XCircle, Clock, AlertCircle,
  Edit, Trash2, RefreshCw, Eye, Mail, Phone,
  Globe, Server, CreditCard, Calendar, UserPlus,
  Shield, Award, Star, Crown, Ban, UserCheck,
  MessageCircle, ArrowUpRight, Download, Upload
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  status: 'Active' | 'Suspended' | 'Pending' | 'Inactive';
  registered: string;
  lastLogin: string;
  domains: number;
  sites: number;
  invoices: number;
  country: string;
  role: 'user' | 'admin' | 'reseller';
}

const UsersTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [planFilter, setPlanFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock data - replace with real API data
  const users: User[] = [
    {
      id: 'user-1',
      name: 'John Doe',
      email: 'john@mybusiness.com',
      phone: '+265 888 447 122',
      plan: 'Business',
      status: 'Active',
      registered: '2026-01-15',
      lastLogin: '2026-06-16 14:30',
      domains: 3,
      sites: 5,
      invoices: 12,
      country: 'Malawi',
      role: 'user',
    },
    {
      id: 'user-2',
      name: 'Mary Kalima',
      email: 'mary@school.com',
      phone: '+265 999 123 456',
      plan: 'Starter',
      status: 'Active',
      registered: '2026-02-20',
      lastLogin: '2026-06-16 09:15',
      domains: 1,
      sites: 2,
      invoices: 8,
      country: 'Malawi',
      role: 'user',
    },
    {
      id: 'user-3',
      name: 'Peter Mwale',
      email: 'peter@enterprise.com',
      phone: '+265 888 789 012',
      plan: 'Enterprise',
      status: 'Active',
      registered: '2026-03-10',
      lastLogin: '2026-06-15 16:45',
      domains: 8,
      sites: 15,
      invoices: 6,
      country: 'Malawi',
      role: 'admin',
    },
    {
      id: 'user-4',
      name: 'Sarah Banda',
      email: 'sarah@tech.com',
      phone: '+265 999 456 789',
      plan: 'Business',
      status: 'Suspended',
      registered: '2026-04-05',
      lastLogin: '2026-06-10 11:20',
      domains: 2,
      sites: 4,
      invoices: 4,
      country: 'Malawi',
      role: 'user',
    },
    {
      id: 'user-5',
      name: 'David Chisale',
      email: 'david@startup.com',
      phone: '+265 888 345 678',
      plan: 'Starter',
      status: 'Pending',
      registered: '2026-06-01',
      lastLogin: 'Never',
      domains: 0,
      sites: 0,
      invoices: 0,
      country: 'Malawi',
      role: 'user',
    },
    {
      id: 'user-6',
      name: 'Grace Phiri',
      email: 'grace@reseller.com',
      phone: '+265 999 234 567',
      plan: 'Enterprise',
      status: 'Active',
      registered: '2026-05-15',
      lastLogin: '2026-06-16 08:00',
      domains: 12,
      sites: 25,
      invoices: 10,
      country: 'Malawi',
      role: 'reseller',
    },
  ];

  const stats = [
    { label: 'Total Users', value: users.length, icon: Users, color: 'cyan' },
    { label: 'Active Users', value: users.filter(u => u.status === 'Active').length, icon: CheckCircle2, color: 'green' },
    { label: 'Pending', value: users.filter(u => u.status === 'Pending').length, icon: Clock, color: 'amber' },
    { label: 'Suspended', value: users.filter(u => u.status === 'Suspended').length, icon: AlertCircle, color: 'red' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50';
      case 'Suspended': return 'text-red-600 bg-red-50';
      case 'Pending': return 'text-amber-600 bg-amber-50';
      case 'Inactive': return 'text-slate-600 bg-slate-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Suspended': return <XCircle className="w-3.5 h-3.5" />;
      case 'Pending': return <Clock className="w-3.5 h-3.5" />;
      case 'Inactive': return <AlertCircle className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'text-purple-700 bg-purple-50';
      case 'reseller': return 'text-blue-700 bg-blue-50';
      case 'user': return 'text-slate-700 bg-slate-50';
      default: return 'text-slate-700 bg-slate-50';
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

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.phone.includes(searchQuery);
    const matchesStatus = statusFilter === 'all' || user.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesPlan = planFilter === 'all' || user.plan.toLowerCase() === planFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesPlan;
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
              placeholder="Search users..." 
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
            <option value="inactive">Inactive</option>
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
            <UserPlus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      {/* Users Table */}
      {filteredUsers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800">No users found</h3>
          <p className="text-sm text-slate-500">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Plan</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Domains</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Login</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <React.Fragment key={user.id}>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 to-sky-100 flex items-center justify-center text-cyan-700 font-bold text-sm">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{user.name}</p>
                            <p className="text-xs text-slate-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getPlanColor(user.plan)}`}>
                          {user.plan}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(user.status)}`}>
                          {getStatusIcon(user.status)}
                          {user.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getRoleColor(user.role)}`}>
                          {user.role === 'admin' && <Shield className="w-3 h-3" />}
                          {user.role === 'reseller' && <Award className="w-3 h-3" />}
                          {user.role === 'user' && <Users className="w-3 h-3" />}
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-700">{user.domains}</td>
                      <td className="px-5 py-4 text-slate-500 text-xs">{user.lastLogin}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5">
                          <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600" title="View">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600" title="Edit">
                            <Edit className="w-4 h-4" />
                          </button>
                          {user.status === 'Active' ? (
                            <button className="p-1.5 rounded-lg hover:bg-red-50 transition-all text-slate-400 hover:text-red-600" title="Suspend">
                              <Ban className="w-4 h-4" />
                            </button>
                          ) : (
                            <button className="p-1.5 rounded-lg hover:bg-green-50 transition-all text-slate-400 hover:text-green-600" title="Activate">
                              <UserCheck className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>

                    {/* Expanded row */}
                    {selectedUser === user.id && (
                      <tr className="bg-slate-50/50">
                        <td colSpan={7} className="px-5 py-4">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Phone</p>
                              <p className="text-slate-700">{user.phone}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Country</p>
                              <p className="text-slate-700">{user.country}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Sites</p>
                              <p className="text-slate-700">{user.sites}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">Invoices</p>
                              <p className="text-slate-700">{user.invoices}</p>
                            </div>
                            <div className="md:col-span-4 pt-2 border-t border-slate-200 flex gap-3">
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                                <MessageCircle className="w-3.5 h-3.5" />
                                Contact
                              </button>
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                                <Server className="w-3.5 h-3.5" />
                                View Sites
                              </button>
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                                <CreditCard className="w-3.5 h-3.5" />
                                Invoices
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
            <p className="text-xs text-slate-500">Showing {filteredUsers.length} of {users.length} users</p>
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

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Add New User</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  placeholder="+265 999 000 000" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="user">User</option>
                  <option value="reseller">Reseller</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                Create User
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

export default UsersTab;