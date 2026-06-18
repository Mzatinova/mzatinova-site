import React, { useState } from 'react';
import {
  HelpCircle, MessageCircle, Phone, Mail, Search, Filter, Plus,
  CheckCircle2, Clock, AlertCircle, XCircle, ChevronRight,
  FileText, Download, ExternalLink, User, Calendar,
  Star, StarOff, ThumbsUp, ThumbsDown, MessageSquare,
  Send, Paperclip, Image, Smile, MoreVertical,
  Edit, Trash2, Archive, RefreshCw, ArrowUpRight,
  Users, Globe, Zap, Shield, BookOpen, Video,
  LifeBuoy, Headphones, Mic, Camera, Monitor,
  Server
} from 'lucide-react';

interface Ticket {
  id: string;
  subject: string;
  category: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  created: string;
  updated: string;
  messages: TicketMessage[];
  assignedTo?: string;
  attachments: number;
}

interface TicketMessage {
  id: string;
  sender: string;
  senderType: 'user' | 'agent';
  message: string;
  timestamp: string;
  attachments?: string[];
}

interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  views: number;
  helpful: number;
  notHelpful: number;
  updated: string;
}

const SupportTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'tickets' | 'knowledge' | 'contact'>('tickets');
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [newTicketOpen, setNewTicketOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [newMessage, setNewMessage] = useState('');
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: 'Hosting',
    priority: 'Medium',
    message: '',
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
          sender: 'Support Agent',
          senderType: 'agent',
          message: 'We\'re looking into this now. It appears there may be a spike in traffic. We\'ll update you shortly.',
          timestamp: '2026-06-16 15:15',
        },
        {
          id: 'msg-3',
          sender: 'Support Agent',
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
      messages: [
        {
          id: 'msg-4',
          sender: 'John Doe',
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
      messages: [
        {
          id: 'msg-5',
          sender: 'John Doe',
          senderType: 'user',
          message: 'I need to increase my storage from 50GB to 100GB. How do I do this?',
          timestamp: '2026-06-15 09:30',
        },
        {
          id: 'msg-6',
          sender: 'Support Agent',
          senderType: 'agent',
          message: 'You can upgrade your plan from the Billing section. I\'ve also sent a direct link to the upgrade page.',
          timestamp: '2026-06-15 10:15',
        },
        {
          id: 'msg-7',
          sender: 'John Doe',
          senderType: 'user',
          message: 'Thanks! I\'ve upgraded successfully.',
          timestamp: '2026-06-15 14:20',
        },
      ],
      assignedTo: 'Peter Kalima',
      attachments: 0,
    },
    {
      id: 'ticket-4',
      subject: 'Email not receiving messages',
      category: 'Email',
      priority: 'Urgent',
      status: 'Closed',
      created: '2026-06-14 08:00',
      updated: '2026-06-14 11:30',
      messages: [
        {
          id: 'msg-8',
          sender: 'John Doe',
          senderType: 'user',
          message: 'URGENT: My business email is not receiving any new messages since yesterday.',
          timestamp: '2026-06-14 08:00',
        },
        {
          id: 'msg-9',
          sender: 'Support Agent',
          senderType: 'agent',
          message: 'We\'ve found the issue. Your mailbox was full. We\'ve increased the quota and cleared the queue.',
          timestamp: '2026-06-14 09:30',
        },
        {
          id: 'msg-10',
          sender: 'John Doe',
          senderType: 'user',
          message: 'Thank you! Everything is working now.',
          timestamp: '2026-06-14 11:30',
        },
      ],
      assignedTo: 'Jane Mwale',
      attachments: 0,
    },
  ];

  const knowledgeArticles: KnowledgeArticle[] = [
    {
      id: 'art-1',
      title: 'How to set up your first website',
      category: 'Getting Started',
      views: 245,
      helpful: 78,
      notHelpful: 12,
      updated: '2026-06-10',
    },
    {
      id: 'art-2',
      title: 'Understanding domain registration',
      category: 'Domains',
      views: 189,
      helpful: 56,
      notHelpful: 8,
      updated: '2026-06-08',
    },
    {
      id: 'art-3',
      title: 'How to create email accounts',
      category: 'Email',
      views: 156,
      helpful: 45,
      notHelpful: 6,
      updated: '2026-06-05',
    },
    {
      id: 'art-4',
      title: 'Troubleshooting website performance',
      category: 'Hosting',
      views: 234,
      helpful: 72,
      notHelpful: 15,
      updated: '2026-06-01',
    },
    {
      id: 'art-5',
      title: 'Setting up SSL certificates',
      category: 'Security',
      views: 167,
      helpful: 52,
      notHelpful: 10,
      updated: '2026-05-28',
    },
  ];

  const stats = [
    { label: 'Open Tickets', value: tickets.filter(t => t.status === 'Open' || t.status === 'In Progress').length, icon: AlertCircle, color: 'amber' },
    { label: 'Resolved', value: tickets.filter(t => t.status === 'Resolved' || t.status === 'Closed').length, icon: CheckCircle2, color: 'green' },
    { label: 'Total Tickets', value: tickets.length, icon: MessageSquare, color: 'cyan' },
    { label: 'Avg Response Time', value: '2.5 hrs', icon: Clock, color: 'blue' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent': return 'text-red-600 bg-red-50';
      case 'High': return 'text-orange-600 bg-orange-50';
      case 'Medium': return 'text-amber-600 bg-amber-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-slate-600 bg-slate-50';
    }
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

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ticket.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status.toLowerCase().replace(' ', '') === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const selectedTicketData = tickets.find(t => t.id === selectedTicket);

  const handleNewTicket = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New ticket:', ticketForm);
    setNewTicketOpen(false);
    setTicketForm({ subject: '', category: 'Hosting', priority: 'Medium', message: '' });
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div>
      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
        <button
          onClick={() => setActiveSection('tickets')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeSection === 'tickets'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" />
            My Tickets
          </div>
        </button>
        <button
          onClick={() => setActiveSection('knowledge')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeSection === 'knowledge'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" />
            Knowledge Base
          </div>
        </button>
        <button
          onClick={() => setActiveSection('contact')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeSection === 'contact'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <LifeBuoy className="w-4 h-4" />
            Contact Support
          </div>
        </button>
      </div>

      {/* ========== TICKETS SECTION ========== */}
      {activeSection === 'tickets' && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const colorClasses = {
                amber: 'bg-amber-100 text-amber-600',
                green: 'bg-green-100 text-green-600',
                cyan: 'bg-cyan-100 text-cyan-600',
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
                  placeholder="Search tickets..." 
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
            </div>
            <button 
              onClick={() => setNewTicketOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md w-full sm:w-auto justify-center"
            >
              <Plus className="w-4 h-4" />
              New Ticket
            </button>
          </div>

          {/* Tickets List */}
          {filteredTickets.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-800">No tickets found</h3>
              <p className="text-sm text-slate-500">Try adjusting your search or create a new ticket.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden ${
                    selectedTicket === ticket.id ? 'border-cyan-500 ring-2 ring-cyan-500/20' : ''
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
                            {ticket.priority}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
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
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {ticket.attachments > 0 && (
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Paperclip className="w-3.5 h-3.5" />
                            {ticket.attachments}
                          </span>
                        )}
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
                            <Archive className="w-3.5 h-3.5" />
                            Archive
                          </button>
                          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Resolve
                          </button>
                          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 text-xs font-medium text-red-600 hover:bg-red-50 transition-all">
                            <XCircle className="w-3.5 h-3.5" />
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ========== KNOWLEDGE BASE SECTION ========== */}
      {activeSection === 'knowledge' && (
        <>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-slate-800">Getting Started</h4>
              <p className="text-xs text-slate-500 mt-1">5 articles</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                <Server className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-800">Hosting</h4>
              <p className="text-xs text-slate-500 mt-1">8 articles</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-800">Security</h4>
              <p className="text-xs text-slate-500 mt-1">6 articles</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search knowledge base..." 
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 bg-white"
            />
          </div>

          {/* Articles */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Article</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Views</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Helpful</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Updated</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {knowledgeArticles.map((article) => (
                    <tr key={article.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-slate-400" />
                          <span className="font-medium text-slate-800">{article.title}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                          {article.category}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-600">{article.views}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 flex items-center gap-1">
                            <ThumbsUp className="w-3.5 h-3.5" />
                            {article.helpful}
                          </span>
                          <span className="text-red-500 flex items-center gap-1">
                            <ThumbsDown className="w-3.5 h-3.5" />
                            {article.notHelpful}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-500">{article.updated}</td>
                      <td className="px-5 py-4">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-700 text-xs font-medium hover:bg-cyan-100 transition-all">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Read
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* ========== CONTACT SUPPORT SECTION ========== */}
      {activeSection === 'contact' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Live Chat</h3>
              <p className="text-sm text-slate-500">Chat with our support team in real-time.</p>
              <p className="text-xs text-slate-400 mt-2">Available 24/7</p>
              <button className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Email Support</h3>
              <p className="text-sm text-slate-500">We'll respond within 24 hours.</p>
              <p className="text-xs text-slate-400 mt-2">support@cloudspace.com</p>
              <button className="mt-4 px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all">
                Send Email
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Phone Support</h3>
              <p className="text-sm text-slate-500">Call us for urgent issues.</p>
              <p className="text-xs text-slate-400 mt-2">+265 888 447 122</p>
              <p className="text-xs text-slate-400">Available 24/7</p>
              <button className="mt-4 px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all">
                Call Now
              </button>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-green-50 rounded-2xl border border-green-200 p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <MessageCircle className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-slate-800">Prefer WhatsApp?</span>
            </div>
            <p className="text-slate-600 text-sm">Reach us instantly on WhatsApp for quick support.</p>
            <a 
              href="https://wa.me/265888447122" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* ========== NEW TICKET MODAL ========== */}
      {newTicketOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">New Support Ticket</h2>
              <button onClick={() => setNewTicketOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleNewTicket} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Brief description of your issue" 
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
                  placeholder="Describe your issue in detail..." 
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
                Submit Ticket
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

export default SupportTab;