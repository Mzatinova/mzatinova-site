import React, { useState } from 'react';
import {
  CreditCard, FileText, Download, Eye, CheckCircle2,
  XCircle, Clock, AlertCircle, Plus, Search, Filter,
  Calendar, DollarSign, Zap, Shield, Lock, ChevronRight,
  Trash2, Edit, Printer, ArrowUpRight, RefreshCw,
  Wallet, Receipt, ShoppingBag, TrendingUp, TrendingDown,
  Building2, User, Mail, Phone, MapPin
} from 'lucide-react';

interface Invoice {
  id: string;
  number: string;
  date: string;
  dueDate: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Cancelled';
  plan: string;
  period: string;
  description: string;
  items: InvoiceItem[];
}

interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: string;
  total: string;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'mobile' | 'bank';
  name: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

interface Subscription {
  plan: string;
  price: string;
  period: string;
  nextBilling: string;
  status: 'Active' | 'Cancelled' | 'Expired';
  features: string[];
  renews: boolean;
}

const BillingTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'invoices' | 'payment' | 'subscription'>('invoices');
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Mock data - replace with real API data
  const invoices: Invoice[] = [
    {
      id: 'inv-1',
      number: 'INV-2026-001',
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
    },
    {
      id: 'inv-2',
      number: 'INV-2026-002',
      date: '2026-07-01',
      dueDate: '2026-07-30',
      amount: 'MWK 25,000',
      status: 'Pending',
      plan: 'Business',
      period: 'July 2026',
      description: 'Business Plan - Monthly Hosting',
      items: [
        { description: 'Business Hosting - Monthly', quantity: 1, unitPrice: 'MWK 25,000', total: 'MWK 25,000' },
        { description: 'Domain Registration - mybusiness.com', quantity: 1, unitPrice: 'MWK 0', total: 'MWK 0' },
      ],
    },
    {
      id: 'inv-3',
      number: 'INV-2026-003',
      date: '2026-05-01',
      dueDate: '2026-05-30',
      amount: 'MWK 25,000',
      status: 'Paid',
      plan: 'Business',
      period: 'May 2026',
      description: 'Business Plan - Monthly Hosting',
      items: [
        { description: 'Business Hosting - Monthly', quantity: 1, unitPrice: 'MWK 25,000', total: 'MWK 25,000' },
      ],
    },
    {
      id: 'inv-4',
      number: 'INV-2026-004',
      date: '2026-04-01',
      dueDate: '2026-04-30',
      amount: 'MWK 10,000',
      status: 'Paid',
      plan: 'Starter',
      period: 'April 2026',
      description: 'Starter Plan - Monthly Hosting',
      items: [
        { description: 'Starter Hosting - Monthly', quantity: 1, unitPrice: 'MWK 10,000', total: 'MWK 10,000' },
      ],
    },
    {
      id: 'inv-5',
      number: 'INV-2026-005',
      date: '2026-03-01',
      dueDate: '2026-03-30',
      amount: 'MWK 10,000',
      status: 'Paid',
      plan: 'Starter',
      period: 'March 2026',
      description: 'Starter Plan - Monthly Hosting',
      items: [
        { description: 'Starter Hosting - Monthly', quantity: 1, unitPrice: 'MWK 10,000', total: 'MWK 10,000' },
      ],
    },
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'pm-1',
      type: 'card',
      name: 'Visa',
      last4: '4242',
      expiry: '12/2027',
      isDefault: true,
    },
    {
      id: 'pm-2',
      type: 'mobile',
      name: 'Airtel Money',
      last4: '888 447 122',
      expiry: 'N/A',
      isDefault: false,
    },
    {
      id: 'pm-3',
      type: 'bank',
      name: 'Bank Transfer',
      last4: '1234567890',
      expiry: 'N/A',
      isDefault: false,
    },
  ];

  const subscription: Subscription = {
    plan: 'Business',
    price: 'MWK 25,000',
    period: 'Monthly',
    nextBilling: '2026-08-01',
    status: 'Active',
    renews: true,
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
  };

  const stats = [
    { label: 'Total Paid', value: 'MWK 85,000', icon: CheckCircle2, color: 'green' },
    { label: 'Pending', value: 'MWK 25,000', icon: Clock, color: 'amber' },
    { label: 'Overdue', value: 'MWK 0', icon: AlertCircle, color: 'red' },
    { label: 'Total Invoices', value: invoices.length, icon: FileText, color: 'cyan' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-green-600 bg-green-50';
      case 'Pending': return 'text-amber-600 bg-amber-50';
      case 'Overdue': return 'text-red-600 bg-red-50';
      case 'Cancelled': return 'text-slate-600 bg-slate-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Paid': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Pending': return <Clock className="w-3.5 h-3.5" />;
      case 'Overdue': return <AlertCircle className="w-3.5 h-3.5" />;
      case 'Cancelled': return <XCircle className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
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
                          invoice.plan.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || invoice.status.toLowerCase() === filterStatus.toLowerCase();
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
            Invoices
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
            Subscription
          </div>
        </button>
      </div>

      {/* ========== INVOICES SECTION ========== */}
      {activeSection === 'invoices' && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const colorClasses = {
                green: 'bg-green-100 text-green-600',
                amber: 'bg-amber-100 text-amber-600',
                red: 'bg-red-100 text-red-600',
                cyan: 'bg-cyan-100 text-cyan-600',
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
                  placeholder="Search invoices..." 
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
              </select>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all w-full sm:w-auto justify-center">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md w-full sm:w-auto justify-center">
                <Plus className="w-4 h-4" />
                Pay Now
              </button>
            </div>
          </div>

          {/* Invoices Table */}
          {filteredInvoices.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <Receipt className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-800">No invoices found</h3>
              <p className="text-sm text-slate-500">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Invoice</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Due Date</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
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
                              <p className="text-xs text-slate-500">{invoice.plan} Plan</p>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-slate-600">{invoice.date}</td>
                          <td className="px-5 py-4 text-slate-600">{invoice.dueDate}</td>
                          <td className="px-5 py-4 font-semibold text-slate-800">{invoice.amount}</td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(invoice.status)}`}>
                              {getStatusIcon(invoice.status)}
                              {invoice.status}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-1.5">
                              <button 
                                className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600"
                                title="View Invoice"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600"
                                title="Download PDF"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                              {invoice.status === 'Pending' && (
                                <button 
                                  className="p-1.5 rounded-lg hover:bg-cyan-50 transition-all text-cyan-600"
                                  title="Pay Now"
                                >
                                  <CreditCard className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                        {selectedInvoice === invoice.id && (
                          <tr className="bg-slate-50/50">
                            <td colSpan={6} className="px-5 py-4">
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
        </>
      )}

      {/* ========== PAYMENT METHODS SECTION ========== */}
      {activeSection === 'payment' && (
        <>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Payment Methods */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800">Payment Methods</h3>
                <button 
                  onClick={() => setShowPaymentModal(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-600 text-sm font-medium hover:bg-cyan-100 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add Method
                </button>
              </div>

              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div key={method.id} className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    method.isDefault ? 'border-cyan-200 bg-cyan-50/30' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                      {getPaymentMethodIcon(method.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-slate-800">{method.name}</p>
                        {method.isDefault && (
                          <span className="text-xs text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full">Default</span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500">•••• {method.last4}</p>
                      {method.expiry !== 'N/A' && (
                        <p className="text-xs text-slate-400">Expires: {method.expiry}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-50 transition-all text-slate-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Billing Information */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-slate-800 mb-4">Billing Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Account Holder</p>
                  <p className="text-slate-800 font-medium">John Doe</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Business Name</p>
                  <p className="text-slate-800">Mwale Enterprises</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email</p>
                  <p className="text-slate-800">john@mybusiness.com</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Phone</p>
                  <p className="text-slate-800">+265 888 447 122</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Address</p>
                  <p className="text-slate-800">Lilongwe, Malawi</p>
                </div>
                <button className="w-full py-2.5 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all">
                  <Edit className="w-4 h-4 inline mr-2" />
                  Update Billing Information
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ========== SUBSCRIPTION SECTION ========== */}
      {activeSection === 'subscription' && (
        <>
          {/* Current Plan */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6">
            <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-cyan-50 to-sky-50">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-slate-800">{subscription.plan}</span>
                    <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                      subscription.status === 'Active' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                    }`}>
                      {subscription.status === 'Active' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {subscription.status}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm">{subscription.period} subscription</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Next Billing</p>
                    <p className="font-semibold text-slate-800">{subscription.nextBilling}</p>
                  </div>
                  <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-slate-800 mb-4">What's Included</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {subscription.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan Comparison */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
            <h3 className="font-bold text-slate-800 mb-4">Compare Plans</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-all">
                <h4 className="font-semibold text-slate-800">Starter</h4>
                <p className="text-2xl font-bold text-slate-800 mb-2">MWK 10,000</p>
                <p className="text-xs text-slate-500 mb-4">/month</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />10 GB Storage</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />100 GB Bandwidth</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />5 Email Accounts</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />1 Domain Included</li>
                </ul>
                <button className="w-full mt-4 py-2 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all">
                  Switch Plan
                </button>
              </div>

              <div className="border-2 border-cyan-500 rounded-xl p-4 bg-cyan-50/20 hover:shadow-md transition-all relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-sky-600 px-4 py-1 rounded-full">Current Plan</span>
                </div>
                <h4 className="font-semibold text-slate-800">Business</h4>
                <p className="text-2xl font-bold text-slate-800 mb-2">MWK 25,000</p>
                <p className="text-xs text-slate-500 mb-4">/month</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />50 GB Storage</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />500 GB Bandwidth</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />20 Email Accounts</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />3 Domains Included</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />Priority Support</li>
                </ul>
                <button className="w-full mt-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 text-white text-sm font-semibold shadow-md opacity-70 cursor-not-allowed">
                  Current Plan
                </button>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-all">
                <h4 className="font-semibold text-slate-800">Enterprise</h4>
                <p className="text-2xl font-bold text-slate-800 mb-2">MWK 50,000</p>
                <p className="text-xs text-slate-500 mb-4">/month</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />200 GB Storage</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />Unlimited Bandwidth</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />Unlimited Emails</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />10 Domains Included</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />Dedicated Support</li>
                </ul>
                <button className="w-full mt-4 py-2 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all">
                  Switch Plan
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add Payment Method Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Add Payment Method</h2>
              <button onClick={() => setShowPaymentModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Payment Type</label>
                <select className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="card">Credit/Debit Card</option>
                  <option value="mobile">Mobile Money</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                <input 
                  type="text" 
                  placeholder="4242 4242 4242 4242" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Expiry</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
                  <input 
                    type="text" 
                    placeholder="123" 
                    className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300" />
                <label className="text-sm text-slate-600">Set as default payment method</label>
              </div>
              <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                Add Payment Method
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

export default BillingTab;