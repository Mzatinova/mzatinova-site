import React, { useState } from 'react';
import {
  CreditCard, FileText, Download, Eye, CheckCircle2,
  XCircle, Clock, AlertCircle, Plus, Search, Filter,
  Calendar, DollarSign, Zap, Shield, Lock, ChevronRight,
  Trash2, Edit, Printer, ArrowUpRight, RefreshCw,
  Wallet,  ShoppingBag, TrendingUp, TrendingDown,
  Building2, User, Mail, Phone, MapPin, Users,
  Award, Ban, UserCheck, MessageCircle, Server,
  Globe, HardDrive, Activity, BarChart3
} from 'lucide-react';

interface Invoice {
  id: string;
  number: string;
  user: string;
  userEmail: string;
  date: string;
  dueDate: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Cancelled' | 'Refunded';
  plan: string;
  period: string;
  description: string;
  items: InvoiceItem[];
  paymentMethod: string;
  transactionId?: string;
}

interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: string;
  total: string;
}

interface PaymentMethod {
  id: string;
  user: string;
  userEmail: string;
  type: 'card' | 'mobile' | 'bank';
  name: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
  status: 'Active' | 'Expired' | 'Revoked';
}

interface Subscription {
  id: string;
  user: string;
  userEmail: string;
  plan: string;
  price: string;
  period: string;
  nextBilling: string;
  status: 'Active' | 'Cancelled' | 'Expired' | 'Suspended';
  features: string[];
  renews: boolean;
  paymentMethod: string;
}

const AdminBillingTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'invoices' | 'payment' | 'subscription'>('invoices');
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPlan, setFilterPlan] = useState('all');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);

  // Mock data - replace with real API data
  const invoices: Invoice[] = [
    {
      id: 'inv-1',
      number: 'INV-2026-001',
      user: 'John Doe',
      userEmail: 'john@mybusiness.com',
      date: '2026-06-01',
      dueDate: '2026-06-30',
      amount: 'MWK 25,000',
      status: 'Paid',
      plan: 'Business',
      period: 'June 2026',
      description: 'Business Plan - Monthly Hosting',
      items: [
        { description: 'Business Hosting - Monthly', quantity: 1, unitPrice: 'MWK 25,000', total: 'MWK 25,000' },
        { description: 'Domain Registration - myschool.com', quantity: 1, unitPrice: 'MWK 0', total: 'MWK 0' },
      ],
      paymentMethod: 'Visa ****4242',
      transactionId: 'TXN-001-2026',
    },
    {
      id: 'inv-2',
      number: 'INV-2026-002',
      user: 'Mary Kalima',
      userEmail: 'mary@school.com',
      date: '2026-06-01',
      dueDate: '2026-06-30',
      amount: 'MWK 10,000',
      status: 'Pending',
      plan: 'Starter',
      period: 'June 2026',
      description: 'Starter Plan - Monthly Hosting',
      items: [
        { description: 'Starter Hosting - Monthly', quantity: 1, unitPrice: 'MWK 10,000', total: 'MWK 10,000' },
      ],
      paymentMethod: 'Airtel Money',
      transactionId: undefined,
    },
    {
      id: 'inv-3',
      number: 'INV-2026-003',
      user: 'Peter Mwale',
      userEmail: 'peter@enterprise.com',
      date: '2026-06-01',
      dueDate: '2026-06-30',
      amount: 'MWK 50,000',
      status: 'Paid',
      plan: 'Enterprise',
      period: 'June 2026',
      description: 'Enterprise Plan - Monthly Hosting',
      items: [
        { description: 'Enterprise Hosting - Monthly', quantity: 1, unitPrice: 'MWK 50,000', total: 'MWK 50,000' },
        { description: 'Domain Registration - techsolutions.com', quantity: 1, unitPrice: 'MWK 0', total: 'MWK 0' },
        { description: 'Additional Storage - 100GB', quantity: 1, unitPrice: 'MWK 0', total: 'MWK 0' },
      ],
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-003-2026',
    },
    {
      id: 'inv-4',
      number: 'INV-2026-004',
      user: 'Grace Phiri',
      userEmail: 'grace@reseller.com',
      date: '2026-05-15',
      dueDate: '2026-06-14',
      amount: 'MWK 50,000',
      status: 'Overdue',
      plan: 'Enterprise',
      period: 'May 2026',
      description: 'Enterprise Plan - Monthly Hosting',
      items: [
        { description: 'Enterprise Hosting - Monthly', quantity: 1, unitPrice: 'MWK 50,000', total: 'MWK 50,000' },
      ],
      paymentMethod: 'Visa ****5678',
      transactionId: undefined,
    },
    {
      id: 'inv-5',
      number: 'INV-2026-005',
      user: 'Sarah Banda',
      userEmail: 'sarah@tech.com',
      date: '2026-05-01',
      dueDate: '2026-05-30',
      amount: 'MWK 25,000',
      status: 'Refunded',
      plan: 'Business',
      period: 'May 2026',
      description: 'Business Plan - Monthly Hosting',
      items: [
        { description: 'Business Hosting - Monthly', quantity: 1, unitPrice: 'MWK 25,000', total: 'MWK 25,000' },
      ],
      paymentMethod: 'Visa ****4242',
      transactionId: 'TXN-005-2026',
    },
    {
      id: 'inv-6',
      number: 'INV-2026-006',
      user: 'David Chisale',
      userEmail: 'david@startup.com',
      date: '2026-06-01',
      dueDate: '2026-06-30',
      amount: 'MWK 10,000',
      status: 'Pending',
      plan: 'Starter',
      period: 'June 2026',
      description: 'Starter Plan - Monthly Hosting',
      items: [
        { description: 'Starter Hosting - Monthly', quantity: 1, unitPrice: 'MWK 10,000', total: 'MWK 10,000' },
      ],
      paymentMethod: 'Airtel Money',
      transactionId: undefined,
    },
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'pm-1',
      user: 'John Doe',
      userEmail: 'john@mybusiness.com',
      type: 'card',
      name: 'Visa',
      last4: '4242',
      expiry: '12/2027',
      isDefault: true,
      status: 'Active',
    },
    {
      id: 'pm-2',
      user: 'Mary Kalima',
      userEmail: 'mary@school.com',
      type: 'mobile',
      name: 'Airtel Money',
      last4: '888 447 122',
      expiry: 'N/A',
      isDefault: true,
      status: 'Active',
    },
    {
      id: 'pm-3',
      user: 'Peter Mwale',
      userEmail: 'peter@enterprise.com',
      type: 'bank',
      name: 'Bank Transfer',
      last4: '1234567890',
      expiry: 'N/A',
      isDefault: true,
      status: 'Active',
    },
    {
      id: 'pm-4',
      user: 'Grace Phiri',
      userEmail: 'grace@reseller.com',
      type: 'card',
      name: 'Visa',
      last4: '5678',
      expiry: '09/2026',
      isDefault: true,
      status: 'Expired',
    },
  ];

  const subscriptions: Subscription[] = [
    {
      id: 'sub-1',
      user: 'John Doe',
      userEmail: 'john@mybusiness.com',
      plan: 'Business',
      price: 'MWK 25,000',
      period: 'Monthly',
      nextBilling: '2026-07-01',
      status: 'Active',
      renews: true,
      paymentMethod: 'Visa ****4242',
      features: [
        '50 GB Storage',
        '500 GB Bandwidth',
        '20 Email Accounts',
        '3 Domains Included',
        'SSL Certificate',
        '24/7 Priority Support',
        'Daily Backups',
        'Advanced Security',
      ],
    },
    {
      id: 'sub-2',
      user: 'Mary Kalima',
      userEmail: 'mary@school.com',
      plan: 'Starter',
      price: 'MWK 10,000',
      period: 'Monthly',
      nextBilling: '2026-07-01',
      status: 'Active',
      renews: true,
      paymentMethod: 'Airtel Money',
      features: [
        '10 GB Storage',
        '100 GB Bandwidth',
        '5 Email Accounts',
        '1 Domain Included',
        'SSL Certificate',
        '24/7 Support',
      ],
    },
    {
      id: 'sub-3',
      user: 'Peter Mwale',
      userEmail: 'peter@enterprise.com',
      plan: 'Enterprise',
      price: 'MWK 50,000',
      period: 'Monthly',
      nextBilling: '2026-07-01',
      status: 'Active',
      renews: true,
      paymentMethod: 'Bank Transfer',
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
        'SLA Guarantee',
      ],
    },
    {
      id: 'sub-4',
      user: 'Grace Phiri',
      userEmail: 'grace@reseller.com',
      plan: 'Enterprise',
      price: 'MWK 50,000',
      period: 'Monthly',
      nextBilling: '2026-06-15',
      status: 'Suspended',
      renews: false,
      paymentMethod: 'Visa ****5678',
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
        'SLA Guarantee',
      ],
    },
  ];

  const stats = [
    { label: 'Total Revenue', value: 'MWK 170,000', icon: DollarSign, color: 'green' },
    { label: 'Pending', value: 'MWK 20,000', icon: Clock, color: 'amber' },
    { label: 'Overdue', value: 'MWK 50,000', icon: AlertCircle, color: 'red' },
    { label: 'Total Invoices', value: invoices.length, icon: FileText, color: 'cyan' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-green-600 bg-green-50';
      case 'Pending': return 'text-amber-600 bg-amber-50';
      case 'Overdue': return 'text-red-600 bg-red-50';
      case 'Cancelled': return 'text-slate-600 bg-slate-50';
      case 'Refunded': return 'text-purple-600 bg-purple-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Paid': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Pending': return <Clock className="w-3.5 h-3.5" />;
      case 'Overdue': return <AlertCircle className="w-3.5 h-3.5" />;
      case 'Cancelled': return <XCircle className="w-3.5 h-3.5" />;
      case 'Refunded': return <ArrowUpRight className="w-3.5 h-3.5" />;
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

  const getPaymentMethodIcon = (type: string) => {
    switch (type) {
      case 'card': return <CreditCard className="w-5 h-5" />;
      case 'mobile': return <Zap className="w-5 h-5" />;
      case 'bank': return <Building2 className="w-5 h-5" />;
      default: return <Wallet className="w-5 h-5" />;
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          invoice.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          invoice.userEmail.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || invoice.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesPlan = filterPlan === 'all' || invoice.plan.toLowerCase() === filterPlan.toLowerCase();
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const totalRevenue = invoices
    .filter(i => i.status === 'Paid')
    .reduce((sum, i) => sum + parseInt(i.amount.replace(/[^0-9]/g, '')), 0);

  const pendingAmount = invoices
    .filter(i => i.status === 'Pending')
    .reduce((sum, i) => sum + parseInt(i.amount.replace(/[^0-9]/g, '')), 0);

  const overdueAmount = invoices
    .filter(i => i.status === 'Overdue')
    .reduce((sum, i) => sum + parseInt(i.amount.replace(/[^0-9]/g, '')), 0);

  return (
    <div>
      {/* Revenue Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">MWK {(totalRevenue / 1000).toFixed(0)}K</p>
              <p className="text-xs text-slate-500">Total Revenue</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">MWK {(pendingAmount / 1000).toFixed(0)}K</p>
              <p className="text-xs text-slate-500">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">MWK {(overdueAmount / 1000).toFixed(0)}K</p>
              <p className="text-xs text-slate-500">Overdue</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{invoices.length}</p>
              <p className="text-xs text-slate-500">Total Invoices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
        <button
          onClick={() => setActiveSection('invoices')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeSection === 'invoices'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" />
            All Invoices
          </div>
        </button>
        <button
          onClick={() => setActiveSection('payment')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeSection === 'payment'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <CreditCard className="w-4 h-4" />
            Payment Methods
          </div>
        </button>
        <button
          onClick={() => setActiveSection('subscription')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeSection === 'subscription'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            Subscriptions
          </div>
        </button>
      </div>

      {/* ========== INVOICES SECTION ========== */}
      {activeSection === 'invoices' && (
        <>
          {/* Search and Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search invoices or users..." 
                  className="pl-9 pr-4 h-10 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select 
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 bg-white w-full sm:w-auto"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
                <option value="cancelled">Cancelled</option>
                <option value="refunded">Refunded</option>
              </select>
              <select 
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 bg-white w-full sm:w-auto"
                value={filterPlan}
                onChange={(e) => setFilterPlan(e.target.value)}
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
                onClick={() => setShowPaymentModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md w-full sm:w-auto justify-center"
              >
                <Plus className="w-4 h-4" />
                Create Invoice
              </button>
            </div>
          </div>

          {/* Invoices Table */}
          {filteredInvoices.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <Receipt className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-800">No invoices found</h3>
              <p className="text-sm text-slate-500">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Invoice</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Plan</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Due Date</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((invoice) => (
                      <React.Fragment key={invoice.id}>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="px-5 py-4">
                            <div>
                              <p className="font-medium text-slate-800">{invoice.number}</p>
                              <p className="text-xs text-slate-500">{invoice.date}</p>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <div>
                              <p className="text-slate-800">{invoice.user}</p>
                              <p className="text-xs text-slate-500">{invoice.userEmail}</p>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getPlanColor(invoice.plan)}`}>
                              {invoice.plan}
                            </span>
                          </td>
                          <td className="px-5 py-4 font-semibold text-slate-800">{invoice.amount}</td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(invoice.status)}`}>
                              {getStatusIcon(invoice.status)}
                              {invoice.status}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-slate-700">{invoice.dueDate}</td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-1.5">
                              <button 
                                className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600"
                                title="View Invoice"
                                onClick={() => setSelectedInvoice(selectedInvoice === invoice.id ? null : invoice.id)}
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600" title="Download PDF">
                                <Download className="w-4 h-4" />
                              </button>
                              {invoice.status === 'Pending' && (
                                <button className="p-1.5 rounded-lg hover:bg-green-50 transition-all text-green-600" title="Mark as Paid">
                                  <CheckCircle2 className="w-4 h-4" />
                                </button>
                              )}
                              {invoice.status === 'Paid' && (
                                <button 
                                  onClick={() => setShowRefundModal(true)}
                                  className="p-1.5 rounded-lg hover:bg-amber-50 transition-all text-amber-600" 
                                  title="Refund"
                                >
                                  <ArrowUpRight className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                        {selectedInvoice === invoice.id && (
                          <tr className="bg-slate-50/50">
                            <td colSpan={7} className="px-5 py-4">
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-semibold text-slate-800">Invoice Details</p>
                                  <p className="text-xs text-slate-500">Period: {invoice.period}</p>
                                </div>
                                <div className="space-y-1">
                                  {invoice.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between text-sm border-b border-slate-100 pb-1">
                                      <span className="text-slate-600">{item.description} x{item.quantity}</span>
                                      <span className="font-medium text-slate-800">{item.total}</span>
                                    </div>
                                  ))}
                                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                                    <span className="font-semibold text-slate-800">Total</span>
                                    <span className="font-bold text-slate-800">{invoice.amount}</span>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200 text-xs">
                                  <div>
                                    <p className="text-slate-400">Payment Method</p>
                                    <p className="text-slate-700">{invoice.paymentMethod}</p>
                                  </div>
                                  {invoice.transactionId && (
                                    <div>
                                      <p className="text-slate-400">Transaction ID</p>
                                      <p className="text-slate-700 font-mono">{invoice.transactionId}</p>
                                    </div>
                                  )}
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
                <p className="text-xs text-slate-500">Showing {filteredInvoices.length} of {invoices.length} invoices</p>
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
        </>
      )}

      {/* ========== PAYMENT METHODS SECTION ========== */}
      {activeSection === 'payment' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h3 className="font-bold text-slate-800">User Payment Methods</h3>
            <p className="text-sm text-slate-500">Manage payment methods across all users.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Method</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Details</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Default</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paymentMethods.map((method) => (
                  <tr key={method.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4">
                      <div>
                        <p className="text-slate-800">{method.user}</p>
                        <p className="text-xs text-slate-500">{method.userEmail}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        {getPaymentMethodIcon(method.type)}
                        <span className="text-slate-700">{method.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div>
                        <p className="text-slate-700">•••• {method.last4}</p>
                        {method.expiry !== 'N/A' && (
                          <p className="text-xs text-slate-400">Expires: {method.expiry}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                        method.status === 'Active' ? 'text-green-600 bg-green-50' :
                        method.status === 'Expired' ? 'text-amber-600 bg-amber-50' :
                        'text-red-600 bg-red-50'
                      }`}>
                        {method.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      {method.isDefault && (
                        <span className="text-xs text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full">Default</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
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
      )}

      {/* ========== SUBSCRIPTIONS SECTION ========== */}
      {activeSection === 'subscription' && (
        <div className="grid md:grid-cols-2 gap-6">
          {subscriptions.map((sub) => (
            <div key={sub.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className={`p-5 border-b ${
                sub.status === 'Active' ? 'bg-green-50/30 border-green-100' :
                sub.status === 'Suspended' ? 'bg-red-50/30 border-red-100' :
                'bg-slate-50/30 border-slate-100'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold text-slate-800">{sub.plan}</h4>
                      <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                        sub.status === 'Active' ? 'text-green-600 bg-green-50' :
                        sub.status === 'Suspended' ? 'text-red-600 bg-red-50' :
                        'text-slate-600 bg-slate-50'
                      }`}>
                        {sub.status === 'Active' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {sub.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{sub.user}</p>
                    <p className="text-xs text-slate-400">{sub.userEmail}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-slate-800">{sub.price}</p>
                    <p className="text-xs text-slate-500">{sub.period}</p>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-slate-400">Next Billing</p>
                    <p className="font-medium text-slate-700">{sub.nextBilling}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Payment Method</p>
                    <p className="font-medium text-slate-700">{sub.paymentMethod}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Auto-Renew</p>
                    <p className="font-medium text-slate-700">{sub.renews ? 'Enabled' : 'Disabled'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Status</p>
                    <p className={`font-medium ${sub.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                      {sub.status}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-2">Features</p>
                  <div className="grid grid-cols-2 gap-1">
                    {sub.features.map((feature, idx) => (
                      <span key={idx} className="text-xs text-slate-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-slate-100">
                  <button className="flex-1 py-2 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                    Edit
                  </button>
                  {sub.status === 'Active' ? (
                    <button className="flex-1 py-2 rounded-lg border border-red-200 text-red-600 text-xs font-medium hover:bg-red-50 transition-all">
                      Suspend
                    </button>
                  ) : (
                    <button className="flex-1 py-2 rounded-lg border border-green-200 text-green-600 text-xs font-medium hover:bg-green-50 transition-all">
                      Activate
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========== REFUND MODAL ========== */}
      {showRefundModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Process Refund</h2>
              <button onClick={() => setShowRefundModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <p className="text-sm text-amber-700">You are about to refund this invoice. This action is reversible.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Refund Amount</label>
                <input 
                  type="text" 
                  placeholder="MWK 25,000" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Reason</label>
                <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="">Select reason</option>
                  <option value="customer-request">Customer Request</option>
                  <option value="duplicate">Duplicate Payment</option>
                  <option value="error">Billing Error</option>
                  <option value="fraud">Fraud</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowRefundModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button className="flex-1 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold transition-all shadow-sm">
                  Process Refund
                </button>
              </div>
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

const Receipt = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 17.5v-11" />
  </svg>
);

export default AdminBillingTab;