import React, { useState } from 'react';
import {
  Settings, Globe, Shield, Bell, Lock, Key,
  Mail, Phone, MapPin, Building2, Users,
  CheckCircle2, AlertCircle, XCircle, Clock,
  Edit, Save,  Plus, Trash2, RefreshCw,
  Eye, EyeOff, Smartphone, Fingerprint,
  MessageCircle, Calendar, DollarSign,
  Download, Upload, LogOut, HelpCircle,
  Moon, Sun, Monitor, Languages, ChevronRight,
  Server, Database, Cloud, HardDrive, Cpu,
  Activity, BarChart3, PieChart, Award,
  UserCog, FolderCog, Wifi, Zap, ShieldCheck,
  CreditCard, FileText, Printer, QrCode
} from 'lucide-react';

interface SystemSetting {
  id: string;
  key: string;
  value: string;
  category: string;
  description: string;
  type: 'text' | 'number' | 'select' | 'toggle' | 'textarea';
  options?: string[];
}

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  description: string;
  lastModified: string;
  status: 'Active' | 'Draft' | 'Inactive';
}

interface SystemLog {
  id: string;
  event: string;
  user: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'success';
  ip: string;
  details: string;
}

const AdminSettingsTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'general' | 'email' | 'security' | 'integrations' | 'logs' | 'backup'>('general');
  const [editMode, setEditMode] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showBackupModal, setShowBackupModal] = useState(false);

  // Mock data - replace with real API data
  const systemSettings: SystemSetting[] = [
    { id: 's-1', key: 'site_name', value: 'CloudSpace Hosting', category: 'General', description: 'Site name displayed in the header', type: 'text' },
    { id: 's-2', key: 'site_url', value: 'https://cloudspace.mzatinova.com', category: 'General', description: 'Main site URL', type: 'text' },
    { id: 's-3', key: 'default_language', value: 'English', category: 'General', description: 'Default language for all users', type: 'select', options: ['English', 'Chichewa', 'French', 'Portuguese'] },
    { id: 's-4', key: 'timezone', value: 'Africa/Maputo (GMT+2)', category: 'General', description: 'Default timezone for the system', type: 'select', options: ['Africa/Maputo (GMT+2)', 'Africa/Lagos (GMT+1)', 'Africa/Nairobi (GMT+3)', 'UTC'] },
    { id: 's-5', key: 'maintenance_mode', value: 'Disabled', category: 'General', description: 'Put the site in maintenance mode', type: 'select', options: ['Enabled', 'Disabled'] },
    { id: 's-6', key: 'allow_registration', value: 'Enabled', category: 'General', description: 'Allow new user registration', type: 'select', options: ['Enabled', 'Disabled'] },
    { id: 's-7', key: 'email_from', value: 'support@cloudspace.com', category: 'Email', description: 'Default email sender address', type: 'text' },
    { id: 's-8', key: 'email_from_name', value: 'CloudSpace Support', category: 'Email', description: 'Default email sender name', type: 'text' },
    { id: 's-9', key: 'smtp_host', value: 'smtp.cloudspace.com', category: 'Email', description: 'SMTP server hostname', type: 'text' },
    { id: 's-10', key: 'smtp_port', value: '587', category: 'Email', description: 'SMTP server port', type: 'number' },
    { id: 's-11', key: 'smtp_encryption', value: 'TLS', category: 'Email', description: 'SMTP encryption method', type: 'select', options: ['None', 'SSL', 'TLS'] },
    { id: 's-12', key: 'session_timeout', value: '3600', category: 'Security', description: 'Session timeout in seconds', type: 'number' },
    { id: 's-13', key: 'max_login_attempts', value: '5', category: 'Security', description: 'Max failed login attempts before lockout', type: 'number' },
    { id: 's-14', key: 'two_factor_required', value: 'Disabled', category: 'Security', description: 'Require 2FA for all users', type: 'select', options: ['Enabled', 'Disabled'] },
    { id: 's-15', key: 'backup_frequency', value: 'Daily', category: 'Backup', description: 'How often to run automated backups', type: 'select', options: ['Hourly', 'Daily', 'Weekly', 'Monthly'] },
    { id: 's-16', key: 'backup_retention', value: '30', category: 'Backup', description: 'Number of days to keep backups', type: 'number' },
  ];

  const emailTemplates: EmailTemplate[] = [
    { id: 'et-1', name: 'Welcome Email', subject: 'Welcome to CloudSpace!', description: 'Sent when a new user registers', lastModified: '2026-06-01', status: 'Active' },
    { id: 'et-2', name: 'Password Reset', subject: 'Reset Your Password', description: 'Sent when a user requests password reset', lastModified: '2026-05-28', status: 'Active' },
    { id: 'et-3', name: 'Invoice Payment Confirmation', subject: 'Payment Confirmation', description: 'Sent when an invoice is paid', lastModified: '2026-06-10', status: 'Active' },
    { id: 'et-4', name: 'Domain Expiry Reminder', subject: 'Domain Expiring Soon', description: 'Sent 30 days before domain expiry', lastModified: '2026-05-15', status: 'Draft' },
    { id: 'et-5', name: 'New Ticket Notification', subject: 'Support Ticket Created', description: 'Sent when a user creates a support ticket', lastModified: '2026-06-05', status: 'Inactive' },
  ];

  const systemLogs: SystemLog[] = [
    { id: 'log-1', event: 'System Startup', user: 'System', timestamp: '2026-06-16 00:00:00', level: 'info', ip: '127.0.0.1', details: 'System restarted successfully' },
    { id: 'log-2', event: 'User Login', user: 'John Doe', timestamp: '2026-06-16 08:30:15', level: 'success', ip: '192.168.1.100', details: 'User logged in from Chrome/Windows' },
    { id: 'log-3', event: 'Failed Login Attempt', user: 'Unknown', timestamp: '2026-06-16 09:45:22', level: 'warning', ip: '10.0.0.50', details: 'Failed login attempt from unknown device' },
    { id: 'log-4', event: 'Database Backup', user: 'System', timestamp: '2026-06-16 02:00:00', level: 'success', ip: '127.0.0.1', details: 'Database backup completed successfully' },
    { id: 'log-5', event: 'User Created', user: 'Admin', timestamp: '2026-06-16 10:15:30', level: 'info', ip: '192.168.1.100', details: 'New user created: david@startup.com' },
    { id: 'log-6', event: 'Payment Processing Error', user: 'System', timestamp: '2026-06-16 11:20:45', level: 'error', ip: '127.0.0.1', details: 'Payment gateway connection timeout' },
    { id: 'log-7', event: 'Server Update', user: 'System', timestamp: '2026-06-16 03:00:00', level: 'info', ip: '127.0.0.1', details: 'Security patches applied to all servers' },
  ];

  const integrations = [
    { name: 'Payment Gateway', provider: 'PayPal', status: 'Connected', icon: CreditCard, color: 'blue' },
    { name: 'Email Service', provider: 'SendGrid', status: 'Connected', icon: Mail, color: 'green' },
    { name: 'Analytics', provider: 'Google Analytics', status: 'Pending', icon: BarChart3, color: 'amber' },
    { name: 'SMS Service', provider: 'Africa\'s Talking', status: 'Connected', icon: MessageCircle, color: 'cyan' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Connected':
      case 'success': return 'text-green-600 bg-green-50';
      case 'Draft':
      case 'Pending':
      case 'warning': return 'text-amber-600 bg-amber-50';
      case 'Inactive':
      case 'error': return 'text-red-600 bg-red-50';
      case 'info': return 'text-blue-600 bg-blue-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Connected':
      case 'success': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Draft':
      case 'Pending':
      case 'warning': return <Clock className="w-3.5 h-3.5" />;
      case 'Inactive':
      case 'error': return <XCircle className="w-3.5 h-3.5" />;
      case 'info': return <AlertCircle className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'info': return 'text-blue-600 bg-blue-50';
      case 'success': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-amber-600 bg-amber-50';
      case 'error': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'info': return <AlertCircle className="w-3.5 h-3.5" />;
      case 'success': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'warning': return <Clock className="w-3.5 h-3.5" />;
      case 'error': return <XCircle className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div>
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
        <button
          onClick={() => setActiveSection('general')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'general'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Settings className="w-4 h-4" />
            General
          </div>
        </button>
        <button
          onClick={() => setActiveSection('email')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'email'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </div>
        </button>
        <button
          onClick={() => setActiveSection('security')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'security'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Security
          </div>
        </button>
        <button
          onClick={() => setActiveSection('integrations')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'integrations'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Plug className="w-4 h-4" />
            Integrations
          </div>
        </button>
        <button
          onClick={() => setActiveSection('logs')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'logs'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" />
            Logs
          </div>
        </button>
        <button
          onClick={() => setActiveSection('backup')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'backup'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <HardDrive className="w-4 h-4" />
            Backup
          </div>
        </button>
      </div>

      {/* ========== GENERAL SETTINGS ========== */}
      {activeSection === 'general' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-800">General Settings</h3>
              <p className="text-sm text-slate-500">Configure system-wide settings and preferences.</p>
            </div>
            <button
              onClick={() => setEditMode(!editMode)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-50 text-cyan-600 text-sm font-medium hover:bg-cyan-100 transition-all"
            >
              {editMode ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
              {editMode ? 'Cancel' : 'Edit Settings'}
            </button>
          </div>

          <div className="p-6 space-y-5">
            {systemSettings.filter(s => s.category === 'General').map((setting) => (
              <div key={setting.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div>
                  <label className="text-sm font-medium text-slate-700">{setting.key.replace(/_/g, ' ').toUpperCase()}</label>
                  <p className="text-xs text-slate-400">{setting.description}</p>
                </div>
                <div className="md:col-span-2">
                  {setting.type === 'select' ? (
                    <select 
                      className={`w-full h-11 rounded-xl border px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                        editMode ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent cursor-default'
                      }`}
                      disabled={!editMode}
                    >
                      {setting.options?.map((opt) => (
                        <option key={opt} value={opt} selected={opt === setting.value}>{opt}</option>
                      ))}
                    </select>
                  ) : setting.type === 'textarea' ? (
                    <textarea 
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none ${
                        editMode ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent cursor-default'
                      }`}
                      rows={3}
                      value={setting.value}
                      disabled={!editMode}
                    />
                  ) : (
                    <input 
                      type={setting.type} 
                      className={`w-full h-11 rounded-xl border px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                        editMode ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent cursor-default'
                      }`}
                      value={setting.value}
                      disabled={!editMode}
                    />
                  )}
                </div>
              </div>
            ))}

            {editMode && (
              <div className="flex justify-end pt-4 border-t border-slate-200">
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md">
                  <Save className="w-4 h-4 inline mr-2" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========== EMAIL SETTINGS ========== */}
      {activeSection === 'email' && (
        <div className="space-y-6">
          {/* Email Configuration */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-800">Email Configuration</h3>
              <p className="text-sm text-slate-500">Configure SMTP settings for outgoing emails.</p>
            </div>
            <div className="p-6 space-y-5">
              {systemSettings.filter(s => s.category === 'Email').map((setting) => (
                <div key={setting.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div>
                    <label className="text-sm font-medium text-slate-700">{setting.key.replace(/_/g, ' ').toUpperCase()}</label>
                    <p className="text-xs text-slate-400">{setting.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    {setting.type === 'select' ? (
                      <select className="w-full h-11 rounded-xl bg-white border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                        {setting.options?.map((opt) => (
                          <option key={opt} value={opt} selected={opt === setting.value}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input 
                        type={setting.type} 
                        className="w-full h-11 rounded-xl bg-white border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        value={setting.value}
                      />
                    )}
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-4 border-t border-slate-200">
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md">
                  <Save className="w-4 h-4 inline mr-2" />
                  Save Email Settings
                </button>
              </div>
            </div>
          </div>

          {/* Email Templates */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-800">Email Templates</h3>
                <p className="text-sm text-slate-500">Manage email templates for system notifications.</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-50 text-cyan-600 text-sm font-medium hover:bg-cyan-100 transition-all">
                <Plus className="w-4 h-4" />
                New Template
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subject</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Modified</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {emailTemplates.map((template) => (
                    <tr key={template.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-slate-800">{template.name}</td>
                      <td className="px-5 py-4 text-slate-600">{template.subject}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(template.status)}`}>
                          {getStatusIcon(template.status)}
                          {template.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-500 text-xs">{template.lastModified}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5">
                          <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600">
                            <Edit className="w-4 h-4" />
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

      {/* ========== SECURITY SETTINGS ========== */}
      {activeSection === 'security' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-800">Security Settings</h3>
            <p className="text-sm text-slate-500">Configure system security parameters.</p>
          </div>
          <div className="p-6 space-y-5">
            {systemSettings.filter(s => s.category === 'Security').map((setting) => (
              <div key={setting.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div>
                  <label className="text-sm font-medium text-slate-700">{setting.key.replace(/_/g, ' ').toUpperCase()}</label>
                  <p className="text-xs text-slate-400">{setting.description}</p>
                </div>
                <div className="md:col-span-2">
                  {setting.type === 'select' ? (
                    <select className="w-full h-11 rounded-xl bg-white border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                      {setting.options?.map((opt) => (
                        <option key={opt} value={opt} selected={opt === setting.value}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input 
                      type={setting.type} 
                      className="w-full h-11 rounded-xl bg-white border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      value={setting.value}
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="flex justify-end pt-4 border-t border-slate-200">
              <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md">
                <Save className="w-4 h-4 inline mr-2" />
                Save Security Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========== INTEGRATIONS ========== */}
      {activeSection === 'integrations' && (
        <div className="grid md:grid-cols-2 gap-6">
          {integrations.map((integration, idx) => {
            const Icon = integration.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              amber: 'bg-amber-100 text-amber-600',
              cyan: 'bg-cyan-100 text-cyan-600',
            };
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[integration.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{integration.name}</h4>
                      <p className="text-sm text-slate-500">{integration.provider}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(integration.status)}`}>
                    {getStatusIcon(integration.status)}
                    {integration.status}
                  </span>
                </div>
                <div className="mt-4 flex gap-3">
                  <button className="flex-1 py-2 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">
                    {integration.status === 'Connected' ? 'Reconnect' : 'Connect'}
                  </button>
                  {integration.status === 'Connected' && (
                    <button className="flex-1 py-2 rounded-lg border border-slate-200 text-xs font-medium text-red-600 hover:bg-red-50 transition-all">
                      Disconnect
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center hover:border-cyan-500 transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
              <Plus className="w-6 h-6 text-slate-400" />
            </div>
            <h4 className="font-semibold text-slate-800">Add Integration</h4>
            <p className="text-sm text-slate-500">Connect third-party services</p>
          </div>
        </div>
      )}

      {/* ========== SYSTEM LOGS ========== */}
      {activeSection === 'logs' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-800">System Logs</h3>
              <p className="text-sm text-slate-500">Monitor system events and activities.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Event</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Level</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">IP</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Timestamp</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {systemLogs.map((log) => (
                  <tr key={log.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4">
                      <div>
                        <p className="font-medium text-slate-800">{log.event}</p>
                        <p className="text-xs text-slate-400">{log.details}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{log.user}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getLevelColor(log.level)}`}>
                        {getLevelIcon(log.level)}
                        {log.level}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-500 font-mono text-xs">{log.ip}</td>
                    <td className="px-5 py-4 text-slate-500 text-xs">{log.timestamp}</td>
                    <td className="px-5 py-4">
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 border-t border-slate-200 flex items-center justify-between">
            <p className="text-xs text-slate-500">Showing 7 of 247 log entries</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-sky-600 text-white text-xs font-medium">1</button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">2</button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">3</button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-all">Next</button>
            </div>
          </div>
        </div>
      )}

      {/* ========== BACKUP SETTINGS ========== */}
      {activeSection === 'backup' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-800">Backup Settings</h3>
              <p className="text-sm text-slate-500">Configure automated backups and retention.</p>
            </div>
            <div className="p-6 space-y-5">
              {systemSettings.filter(s => s.category === 'Backup').map((setting) => (
                <div key={setting.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div>
                    <label className="text-sm font-medium text-slate-700">{setting.key.replace(/_/g, ' ').toUpperCase()}</label>
                    <p className="text-xs text-slate-400">{setting.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    {setting.type === 'select' ? (
                      <select className="w-full h-11 rounded-xl bg-white border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                        {setting.options?.map((opt) => (
                          <option key={opt} value={opt} selected={opt === setting.value}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input 
                        type={setting.type} 
                        className="w-full h-11 rounded-xl bg-white border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        value={setting.value}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backup Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mx-auto mb-3">
                <Database className="w-7 h-7 text-cyan-600" />
              </div>
              <h4 className="font-bold text-slate-800">Database Backup</h4>
              <p className="text-sm text-slate-500">Backup all database content</p>
              <button className="mt-3 px-4 py-2 rounded-lg bg-cyan-50 text-cyan-700 text-sm font-medium hover:bg-cyan-100 transition-all">
                Run Now
              </button>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                <FileText className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="font-bold text-slate-800">Files Backup</h4>
              <p className="text-sm text-slate-500">Backup all uploaded files</p>
              <button className="mt-3 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium hover:bg-blue-100 transition-all">
                Run Now
              </button>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-3">
                <Cloud className="w-7 h-7 text-green-600" />
              </div>
              <h4 className="font-bold text-slate-800">Full Backup</h4>
              <p className="text-sm text-slate-500">Complete system backup</p>
              <button 
                onClick={() => setShowBackupModal(true)}
                className="mt-3 px-4 py-2 rounded-lg bg-green-50 text-green-700 text-sm font-medium hover:bg-green-100 transition-all"
              >
                Run Now
              </button>
            </div>
          </div>

          {/* Backup History */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h4 className="font-bold text-slate-800">Backup History</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Size</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-slate-800">backup_2026-06-16_02-00</td>
                    <td className="px-5 py-4 text-slate-600">Database</td>
                    <td className="px-5 py-4 text-slate-600">256 MB</td>
                    <td className="px-5 py-4 text-slate-500">2026-06-16 02:00</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 transition-all text-slate-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-slate-800">backup_2026-06-15_02-00</td>
                    <td className="px-5 py-4 text-slate-600">Full</td>
                    <td className="px-5 py-4 text-slate-600">1.2 GB</td>
                    <td className="px-5 py-4 text-slate-500">2026-06-15 02:00</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 transition-all text-slate-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========== BACKUP CONFIRM MODAL ========== */}
      {showBackupModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Start Full Backup</h2>
              <button onClick={() => setShowBackupModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <p className="text-sm text-amber-700">A full backup will be created. This may take a few minutes depending on your data size.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Backup Name</label>
                <input 
                  type="text" 
                  placeholder="backup_2026-06-16_manual" 
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  defaultValue={`backup_${new Date().toISOString().slice(0, 10)}_manual`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Include</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                    Database
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                    Files
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                    Logs
                  </label>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowBackupModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md">
                  Start Backup
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

const Plug = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-5" />
    <path d="M9 8V2" />
    <path d="M15 8V2" />
    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
  </svg>
);

export default AdminSettingsTab;