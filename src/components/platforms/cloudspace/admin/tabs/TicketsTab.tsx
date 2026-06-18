import React, { useState } from 'react';
import {
  MessageCircle, Search, Filter, Plus, MoreVertical,
  CheckCircle2, XCircle, Clock, AlertCircle,
  Edit, Trash2, RefreshCw, Eye, User,
  Mail, Phone, ArrowUpRight, Download, Upload,
  Send, Paperclip, Smile, Users, Award,
  Shield, Star, Ban, UserCheck, MessageSquare,
  ChevronRight, Calendar, Tag, 
  ThumbsUp, ThumbsDown,  Forward
} from 'lucide-react';

interface Ticket {
  id: string;
  subject: string;
  category: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  created: string;
  updated: string;
  user: string;
  userEmail: string;
  messages: TicketMessage[];
  assignedTo?: string;
  attachments: number;
  rating?: number;
}

interface TicketMessage {
  id: string;
  sender: string;
  senderType: 'user' | 'agent';
  message: string;
  timestamp: string;
  attachments?: string[];
}

interface TicketStats {
  open: number;
  inProgress: number;
  resolved: number;
  closed: number;
  urgent: number;
  high: number;
  avgResponseTime: string;
  satisfaction: string;
}

const AdminTicketsTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'tickets' | 'analytics'>('tickets');
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: 'Hosting',
    priority: 'Medium',
    message: '',
    userEmail: '',
  });

  // Mock data - replace with real API data
  const tickets: Ticket[] = [
    {
      id: 'ticket-1',
      subject: 'Website loading slowly',
      category: 'Hosting',
      priority: 'High',
      status: 'In Progress',
      created: '2026-06-16 14:30',
      updated: '2026-06-16 16:45',
      user: 'John Doe',
      userEmail: 'john@mybusiness.com',
      messages: [
        {
          id: 'msg-1',
          sender: 'John Doe',
          senderType: 'user',
          message: 'My website myschool.com has been loading very slowly for the past 2 hours. Can you please look into this?',
          timestamp: '2026-06-16 14:30',
        },
        {
          id: 'msg-2',
          sender: 'Jane Mwale',
          senderType: 'agent',
          message: 'We\'re looking into this now. It appears there may be a spike in traffic. We\'ll update you shortly.',
          timestamp: '2026-06-16 15:15',
        },
        {
          id: 'msg-3',
          sender: 'Jane Mwale',
          senderType: 'agent',
          message: 'We\'ve identified the issue and are scaling resources to resolve it. Should be back to normal in 15 minutes.',
          timestamp: '2026-06-16 16:45',
        },
      ],
      assignedTo: 'Jane Mwale',
      attachments: 0,
    },
    {
      id: 'ticket-2',
      subject: 'Domain renewal issue',
      category: 'Domains',
      priority: 'Medium',
      status: 'Open',
      created: '2026-06-16 10:00',
      updated: '2026-06-16 10:00',
      user: 'Mary Kalima',
      userEmail: 'mary@school.com',
      messages: [
        {
          id: 'msg-4',
          sender: 'Mary Kalima',
          senderType: 'user',
          message: 'I\'m trying to renew my domain mybusiness.com but the payment is not going through. Please help.',
          timestamp: '2026-06-16 10:00',
        },
      ],
      assignedTo: '',
      attachments: 0,
    },
    {
      id: 'ticket-3',
      subject: 'Need to increase storage',
      category: 'Hosting',
      priority: 'Low',
      status: 'Resolved',
      created: '2026-06-15 09:30',
      updated: '2026-06-15 14:20',
      user: 'Peter Mwale',
      userEmail: 'peter@enterprise.com',
      messages: [
        {
          id: 'msg-5',
          sender: 'Peter Mwale',
          senderType: 'user',
          message: 'I need to increase my storage from 50GB to 100GB. How do I do this?',
          timestamp: '2026-06-15 09:30',
        },
        {
          id: 'msg-6',
          sender: 'Peter Kalima',
          senderType: 'agent',
          message: 'You can upgrade your plan from the Billing section. I\'ve also sent a direct link to the upgrade page.',
          timestamp: '2026-06-15 10:15',
        },
        {
          id: 'msg-7',
          sender: 'Peter Mwale',
          senderType: 'user',
          message: 'Thanks! I\'ve upgraded successfully.',
          timestamp: '2026-06-15 14:20',
        },
      ],
      assignedTo: 'Peter Kalima',
      attachments: 0,
      rating: 5,
    },
    {
      id: 'ticket-4',
      subject: 'Email not receiving messages',
      category: 'Email',
      priority: 'Urgent',
      status: 'Closed',
      created: '2026-06-14 08:00',
      updated: '2026-06-14 11:30',
      user: 'Sarah Banda',
      userEmail: 'sarah@tech.com',
      messages: [
        {
          id: 'msg-8',
          sender: 'Sarah Banda',
          senderType: 'user',
          message: 'URGENT: My business email is not receiving any new messages since yesterday.',
          timestamp: '2026-06-14 08:00',
        },
        {
          id: 'msg-9',
          sender: 'Jane Mwale',
          senderType: 'agent',
          message: 'We\'ve found the issue. Your mailbox was full. We\'ve increased the quota and cleared the queue.',
          timestamp: '2026-06-14 09:30',
        },
        {
          id: 'msg-10',
          sender: 'Sarah Banda',
          senderType: 'user',
          message: 'Thank you! Everything is working now.',
          timestamp: '2026-06-14 11:30',
        },
      ],
      assignedTo: 'Jane Mwale',
      attachments: 0,
      rating: 5,
    },
    {
      id: 'ticket-5',
      subject: 'Billing discrepancy',
      category: 'Billing',
      priority: 'High',
      status: 'In Progress',
      created: '2026-06-13 16:20',
      updated: '2026-06-16 09:00',
      user: 'Grace Phiri',
      userEmail: 'grace@reseller.com',
      messages: [
        {
          id: 'msg-11',
          sender: 'Grace Phiri',
          senderType: 'user',
          message: 'I was charged twice for this month\'s hosting. Please investigate.',
          timestamp: '2026-06-13 16:20',
        },
        {
          id: 'msg-12',
          sender: 'Peter Kalima',
          senderType: 'agent',
          message: 'I see the duplicate charge. I\'m processing a refund and will update you shortly.',
          timestamp: '2026-06-16 09:00',
        },
      ],
      assignedTo: 'Peter Kalima',
      attachments: 2,
    },
    {
      id: 'ticket-6',
      subject: 'SSL certificate installation',
      category: 'Security',
      priority: 'Medium',
      status: 'Open',
      created: '2026-06-16 11:45',
      updated: '2026-06-16 11:45',
      user: 'David Chisale',
      userEmail: 'david@startup.com',
      messages: [
        {
          id: 'msg-13',
          sender: 'David Chisale',
          senderType: 'user',
          message: 'I need help installing an SSL certificate on my website. Can you assist?',
          timestamp: '2026-06-16 11:45',
        },
      ],
      assignedTo: '',
      attachments: 0,
    },
  ];

  const stats: TicketStats = {
    open: tickets.filter(t => t.status === 'Open').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    resolved: tickets.filter(t => t.status === 'Resolved').length,
    closed: tickets.filter(t => t.status === 'Closed').length,
    urgent: tickets.filter(t => t.priority === 'Urgent').length,
    high: tickets.filter(t => t.priority === 'High').length,
    avgResponseTime: '2.5 hrs',
    satisfaction: '4.8 / 5.0',
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-blue-600 bg-blue-50';
      case 'In Progress': return 'text-amber-600 bg-amber-50';
      case 'Resolved': return 'text-green-600 bg-green-50';
      case 'Closed': return 'text-slate-600 bg-slate-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <AlertCircle className="w-3.5 h-3.5" />;
      case 'In Progress': return <Clock className="w-3.5 h-3.5" />;
      case 'Resolved': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Closed': return <XCircle className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent': return 'text-red-600 bg-red-50';
      case 'High': return 'text-orange-600 bg-orange-50';
      case 'Medium': return 'text-amber-600 bg-amber-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'Urgent': return <AlertCircle className="w-3.5 h-3.5" />;
      case 'High': return <ArrowUpRight className="w-3.5 h-3.5" />;
      case 'Medium': return <Clock className="w-3.5 h-3.5" />;
      case 'Low': return <CheckCircle2 className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ticket.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ticket.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ticket.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status.toLowerCase().replace(' ', '') === filterStatus.toLowerCase();
    const matchesPriority = filterPriority === 'all' || ticket.priority.toLowerCase() === filterPriority.toLowerCase();
    const matchesCategory = filterCategory === 'all' || ticket.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
  });

  const selectedTicketData = tickets.find(t => t.id === selectedTicket);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleNewTicket = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New ticket:', ticketForm);
    setShowCreateModal(false);
    setTicketForm({ subject: '', category: 'Hosting', priority: 'Medium', message: '', userEmail: '' });
  };

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stats.open + stats.inProgress}</p>
              <p className="text-xs text-slate-500">Open Tickets</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stats.resolved + stats.closed}</p>
              <p className="text-xs text-slate-500">Resolved/Closed</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <Flag className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stats.urgent + stats.high}</p>
              <p className="text-xs text-slate-500">High Priority</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stats.satisfaction}</p>
              <p className="text-xs text-slate-500">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search tickets or users..." 
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
            <option value="open">Open</option>
            <option value="inprogress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
          <select 
            className="h-10 rounded-xl border border-slate-200 px-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 bg-white w-full sm:w-auto"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="all">All Priority</option>
            <option value="urgent">Urgent</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select 
            className="h-10 rounded-xl border border-slate-200 px-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 bg-white w-full sm:w-auto"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="hosting">Hosting</option>
            <option value="domains">Domains</option>
            <option value="email">Email</option>
            <option value="billing">Billing</option>
            <option value="security">Security</option>
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
            New Ticket
          </button>
        </div>
      </div>

      {/* Tickets List */}
      {filteredTickets.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800">No tickets found</h3>
          <p className="text-sm text-slate-500">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTickets.map((ticket) => (
            <div 
              key={ticket.id} 
              className={`bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all overflow-hidden ${
                ticket.priority === 'Urgent' ? 'border-red-300' :
                ticket.priority === 'High' ? 'border-orange-300' :
                ticket.status === 'Open' ? 'border-blue-200' :
                'border-slate-200'
              }`}
            >
              <div 
                className="p-5 cursor-pointer"
                onClick={() => setSelectedTicket(selectedTicket === ticket.id ? null : ticket.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-slate-800">{ticket.subject}</h4>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${getPriorityColor(ticket.priority)}`}>
                        {getPriorityIcon(ticket.priority)}
                        {ticket.priority}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {ticket.user}
                      </span>
                      <span>•</span>
                      <span>{ticket.category}</span>
                      <span>•</span>
                      <span className={`inline-flex items-center gap-1 ${getStatusColor(ticket.status)} px-2 py-0.5 rounded-full`}>
                        {getStatusIcon(ticket.status)}
                        {ticket.status}
                      </span>
                      <span>•</span>
                      <span>Created: {ticket.created}</span>
                      {ticket.assignedTo && (
                        <>
                          <span>•</span>
                          <span>Assigned to: {ticket.assignedTo}</span>
                        </>
                      )}
                      {ticket.rating && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-amber-600">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            {ticket.rating}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {ticket.attachments > 0 && (
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Paperclip className="w-3.5 h-3.5" />
                        {ticket.attachments}
                      </span>
                    )}
                    <span className="text-xs text-slate-400">{ticket.messages.length} messages</span>
                    <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${
                      selectedTicket === ticket.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              </div>

              {/* Expanded ticket details */}
              {selectedTicket === ticket.id && (
                <div className="border-t border-slate-100 p-5 bg-slate-50/50">
                  <div className="space-y-4">
                    {/* Messages */}
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {ticket.messages.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 ${msg.senderType === 'agent' ? 'justify-start' : 'justify-end'}`}>
                          {msg.senderType === 'agent' && (
                            <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-cyan-600" />
                            </div>
                          )}
                          <div className={`max-w-[80%] ${msg.senderType === 'agent' ? 'order-1' : 'order-2'}`}>
                            <div className={`rounded-2xl p-4 ${
                              msg.senderType === 'agent' 
                                ? 'bg-white border border-slate-200' 
                                : 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white'
                            }`}>
                              <p className="text-sm">{msg.message}</p>
                            </div>
                            <div className={`flex items-center gap-2 mt-1 text-xs text-slate-400 ${msg.senderType === 'agent' ? '' : 'justify-end'}`}>
                              <span>{msg.sender}</span>
                              <span>•</span>
                              <span>{msg.timestamp}</span>
                            </div>
                          </div>
                          {msg.senderType === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 order-1">
                              <User className="w-4 h-4 text-slate-600" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Reply input */}
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Type your reply..." 
                        className="flex-1 h-11 rounded-xl bg-white border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <button className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all text-slate-500">
                        <Paperclip className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={handleSendMessage}
                        className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white transition-all shadow-md"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Ticket actions */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                        <RefreshCw className="w-3.5 h-3.5" />
                        Refresh
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                        <User className="w-3.5 h-3.5" />
                        Assign
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Resolve
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 text-xs font-medium text-red-600 hover:bg-red-50 transition-all">
                        <XCircle className="w-3.5 h-3.5" />
                        Close
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-200 text-xs font-medium text-amber-600 hover:bg-amber-50 transition-all">
                        <Flag className="w-3.5 h-3.5" />
                        Escalate
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ========== NEW TICKET MODAL ========== */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Create Support Ticket</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleNewTicket} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">User Email</label>
                <input 
                  type="email" 
                  placeholder="user@example.com" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  value={ticketForm.userEmail}
                  onChange={e => setTicketForm({...ticketForm, userEmail: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Brief description" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  value={ticketForm.subject}
                  onChange={e => setTicketForm({...ticketForm, subject: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                <select 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer"
                  value={ticketForm.category}
                  onChange={e => setTicketForm({...ticketForm, category: e.target.value})}
                >
                  <option value="Hosting">Hosting</option>
                  <option value="Domains">Domains</option>
                  <option value="Email">Email</option>
                  <option value="Billing">Billing</option>
                  <option value="Security">Security</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Priority</label>
                <select 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer"
                  value={ticketForm.priority}
                  onChange={e => setTicketForm({...ticketForm, priority: e.target.value})}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  placeholder="Describe the issue..." 
                  rows={4}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  value={ticketForm.message}
                  onChange={e => setTicketForm({...ticketForm, message: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Attachment (optional)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-cyan-500 transition-all cursor-pointer">
                  <Paperclip className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400">Max file size: 10MB</p>
                </div>
              </div>
              <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                Create Ticket
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

const Flag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const Reply = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 17 4 12 9 7" />
    <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
  </svg>
);

export default AdminTicketsTab;