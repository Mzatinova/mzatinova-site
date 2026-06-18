import React, { useState } from 'react';
import {
  Settings, User, Shield, Bell, Lock, Key,
  Globe, Mail, Phone, MapPin, Building2,
  CheckCircle2, AlertCircle, XCircle, Clock,
  Edit, Save, Plus, Trash2, RefreshCw,
  Eye, EyeOff, Smartphone, Fingerprint,
  MessageCircle, Users, Calendar, DollarSign,
  Download, Upload, LogOut, HelpCircle,
  Moon, Sun, Monitor, Languages, ChevronRight
} from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  timezone: string;
  language: string;
  twoFactorEnabled: boolean;
}

interface NotificationSetting {
  id: string;
  name: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

interface SecurityLog {
  id: string;
  event: string;
  ip: string;
  device: string;
  location: string;
  timestamp: string;
  status: 'Success' | 'Failed' | 'Pending';
}

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  status: 'Active' | 'Expired' | 'Revoked';
}

const SettingsTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'profile' | 'security' | 'notifications' | 'api' | 'billing' | 'preferences'>('profile');
  const [editMode, setEditMode] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [apiKeyName, setApiKeyName] = useState('');
  const [showKey, setShowKey] = useState<string | null>(null);

  // Mock data - replace with real API data
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john@mybusiness.com',
    phone: '+265 888 447 122',
    company: 'Mwale Enterprises',
    address: 'Lilongwe, Malawi',
    timezone: 'Africa/Maputo (GMT+2)',
    language: 'English',
    twoFactorEnabled: false,
  });

  const notificationSettings: NotificationSetting[] = [
    {
      id: 'notif-1',
      name: 'Hosting Alerts',
      description: 'Server status, uptime, and performance notifications',
      email: true,
      push: true,
      sms: false,
    },
    {
      id: 'notif-2',
      name: 'Billing Updates',
      description: 'Invoices, payments, and subscription reminders',
      email: true,
      push: true,
      sms: true,
    },
    {
      id: 'notif-3',
      name: 'Security Alerts',
      description: 'Login attempts, password changes, and security events',
      email: true,
      push: true,
      sms: true,
    },
    {
      id: 'notif-4',
      name: 'Domain Notifications',
      description: 'Domain expirations, renewals, and DNS updates',
      email: true,
      push: false,
      sms: false,
    },
    {
      id: 'notif-5',
      name: 'Support Updates',
      description: 'Ticket responses and status changes',
      email: true,
      push: true,
      sms: false,
    },
  ];

  const securityLogs: SecurityLog[] = [
    {
      id: 'log-1',
      event: 'Successful Login',
      ip: '192.168.1.100',
      device: 'Chrome / Windows',
      location: 'Lilongwe, Malawi',
      timestamp: '2026-06-16 14:30',
      status: 'Success',
    },
    {
      id: 'log-2',
      event: 'Password Changed',
      ip: '192.168.1.100',
      device: 'Chrome / Windows',
      location: 'Lilongwe, Malawi',
      timestamp: '2026-06-15 09:15',
      status: 'Success',
    },
    {
      id: 'log-3',
      event: 'Failed Login Attempt',
      ip: '10.0.0.50',
      device: 'Unknown',
      location: 'Unknown',
      timestamp: '2026-06-14 23:45',
      status: 'Failed',
    },
    {
      id: 'log-4',
      event: 'API Key Generated',
      ip: '192.168.1.100',
      device: 'Chrome / Windows',
      location: 'Lilongwe, Malawi',
      timestamp: '2026-06-13 11:00',
      status: 'Success',
    },
  ];

  const apiKeys: ApiKey[] = [
    {
      id: 'api-1',
      name: 'Production API Key',
      key: 'cs_live_abc123def456ghi789jkl',
      created: '2026-06-01',
      lastUsed: '2026-06-16 12:30',
      status: 'Active',
    },
    {
      id: 'api-2',
      name: 'Staging API Key',
      key: 'cs_test_mno456pqr789stu012vwx',
      created: '2026-05-15',
      lastUsed: '2026-06-10 08:45',
      status: 'Active',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'text-green-600 bg-green-50';
      case 'Failed': return 'text-red-600 bg-red-50';
      case 'Pending': return 'text-amber-600 bg-amber-50';
      case 'Active': return 'text-green-600 bg-green-50';
      case 'Expired': return 'text-amber-600 bg-amber-50';
      case 'Revoked': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Success':
      case 'Active': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'Failed':
      case 'Revoked': return <XCircle className="w-3.5 h-3.5" />;
      case 'Pending':
      case 'Expired': return <Clock className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated profile:', profile);
    setEditMode(false);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password changed:', passwordData);
    setShowPasswordModal(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleApiKeyCreate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('API Key created:', apiKeyName);
    setShowApiKeyModal(false);
    setApiKeyName('');
  };

  return (
    <div>
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
        <button
          onClick={() => setActiveSection('profile')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'profile'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <User className="w-4 h-4" />
            Profile
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
          onClick={() => setActiveSection('notifications')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'notifications'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </div>
        </button>
        <button
          onClick={() => setActiveSection('api')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'api'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Key className="w-4 h-4" />
            API Keys
          </div>
        </button>
        <button
          onClick={() => setActiveSection('preferences')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 min-w-[80px] ${
            activeSection === 'preferences'
              ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Settings className="w-4 h-4" />
            Preferences
          </div>
        </button>
      </div>

      {/* ========== PROFILE SECTION ========== */}
      {activeSection === 'profile' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Profile Information</h3>
              <p className="text-sm text-slate-500">Manage your personal and business information.</p>
            </div>
            <button
              onClick={() => setEditMode(!editMode)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-50 text-cyan-600 text-sm font-medium hover:bg-cyan-100 transition-all"
            >
              {editMode ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
              {editMode ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <form onSubmit={handleProfileUpdate} className="p-6 space-y-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-2xl font-bold">
                {profile.name.charAt(0)}
              </div>
              <div>
                <button className="text-sm text-cyan-600 font-medium hover:underline">Change Photo</button>
                <p className="text-xs text-slate-400">Upload a new profile picture</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className={`w-full h-11 rounded-xl border px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                    editMode ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent cursor-default'
                  }`}
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  disabled={!editMode}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className={`w-full h-11 rounded-xl border px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                    editMode ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent cursor-default'
                  }`}
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!editMode}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  className={`w-full h-11 rounded-xl border px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                    editMode ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent cursor-default'
                  }`}
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!editMode}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company / Organization</label>
                <input
                  type="text"
                  className={`w-full h-11 rounded-xl border px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                    editMode ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent cursor-default'
                  }`}
                  value={profile.company}
                  onChange={(e) => setProfile({...profile, company: e.target.value})}
                  disabled={!editMode}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <input
                  type="text"
                  className={`w-full h-11 rounded-xl border px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                    editMode ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent cursor-default'
                  }`}
                  value={profile.address}
                  onChange={(e) => setProfile({...profile, address: e.target.value})}
                  disabled={!editMode}
                />
              </div>
            </div>

            {editMode && (
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      )}

      {/* ========== SECURITY SECTION ========== */}
      {activeSection === 'security' && (
        <div className="space-y-6">
          {/* Password */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-cyan-600" />
                  Password
                </h4>
                <p className="text-sm text-slate-500">Change your password to keep your account secure.</p>
              </div>
              <button
                onClick={() => setShowPasswordModal(true)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all"
              >
                Change Password
              </button>
            </div>
          </div>

          {/* Two-Factor Authentication */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                    <Fingerprint className="w-5 h-5 text-cyan-600" />
                    Two-Factor Authentication
                  </h4>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    profile.twoFactorEnabled ? 'text-green-600 bg-green-50' : 'text-slate-400 bg-slate-100'
                  }`}>
                    {profile.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <p className="text-sm text-slate-500">Add an extra layer of security to your account.</p>
              </div>
              <button
                onClick={() => setShowTwoFactorModal(true)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  profile.twoFactorEnabled
                    ? 'border border-slate-200 hover:bg-slate-50 text-slate-700'
                    : 'bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white shadow-md'
                }`}
              >
                {profile.twoFactorEnabled ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h4 className="font-bold text-slate-800 flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-600" />
                Recent Activity
              </h4>
              <p className="text-sm text-slate-500">Security events and login history.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Event</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">IP Address</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Device</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Time</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {securityLogs.map((log) => (
                    <tr key={log.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3 font-medium text-slate-800">{log.event}</td>
                      <td className="px-5 py-3 text-slate-600 font-mono text-xs">{log.ip}</td>
                      <td className="px-5 py-3 text-slate-600 text-xs">{log.device}</td>
                      <td className="px-5 py-3 text-slate-600 text-xs">{log.location}</td>
                      <td className="px-5 py-3 text-slate-500 text-xs">{log.timestamp}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(log.status)}`}>
                          {getStatusIcon(log.status)}
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 rounded-2xl border border-red-200 shadow-sm overflow-hidden p-6">
            <h4 className="font-bold text-red-700 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Danger Zone
            </h4>
            <p className="text-sm text-red-600 mb-4">Irreversible actions that will affect your account.</p>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all shadow-sm"
            >
              Delete Account
            </button>
          </div>
        </div>
      )}

      {/* ========== NOTIFICATIONS SECTION ========== */}
      {activeSection === 'notifications' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Bell className="w-5 h-5 text-cyan-600" />
              Notification Preferences
            </h3>
            <p className="text-sm text-slate-500">Choose how you want to receive notifications.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Notification</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Description</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Push</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">SMS</th>
                </tr>
              </thead>
              <tbody>
                {notificationSettings.map((setting) => (
                  <tr key={setting.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-slate-800">{setting.name}</td>
                    <td className="px-5 py-4 text-slate-500 text-xs">{setting.description}</td>
                    <td className="px-5 py-4 text-center">
                      <input
                        type="checkbox"
                        checked={setting.email}
                        className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                        onChange={() => {}}
                      />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <input
                        type="checkbox"
                        checked={setting.push}
                        className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                        onChange={() => {}}
                      />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <input
                        type="checkbox"
                        checked={setting.sms}
                        className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-slate-200 flex justify-end">
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md">
              <Save className="w-4 h-4 inline mr-2" />
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* ========== API KEYS SECTION ========== */}
      {activeSection === 'api' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <Key className="w-5 h-5 text-cyan-600" />
                  API Keys
                </h4>
                <p className="text-sm text-slate-500">Create and manage API keys for programmatic access.</p>
              </div>
              <button
                onClick={() => setShowApiKeyModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md"
              >
                <Plus className="w-4 h-4" />
                Create Key
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">API Key</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Created</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Used</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {apiKeys.map((key) => (
                    <tr key={key.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-slate-800">{key.name}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <code className="text-xs bg-slate-100 px-3 py-1 rounded font-mono text-slate-600">
                            {showKey === key.id ? key.key : '•'.repeat(20)}
                          </code>
                          <button
                            onClick={() => setShowKey(showKey === key.id ? null : key.id)}
                            className="p-1 rounded hover:bg-slate-200 transition-all text-slate-400 hover:text-slate-600"
                          >
                            {showKey === key.id ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-500 text-xs">{key.created}</td>
                      <td className="px-5 py-4 text-slate-500 text-xs">{key.lastUsed}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(key.status)}`}>
                          {getStatusIcon(key.status)}
                          {key.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5">
                          <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600">
                            <RefreshCw className="w-4 h-4" />
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

      {/* ========== PREFERENCES SECTION ========== */}
      {activeSection === 'preferences' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-600" />
              General Preferences
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Language</label>
                <select className="w-full md:w-64 h-11 rounded-xl bg-white border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="en">English</option>
                  <option value="ny">Chichewa</option>
                  <option value="fr">French</option>
                  <option value="pt">Portuguese</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Time Zone</label>
                <select className="w-full md:w-64 h-11 rounded-xl bg-white border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer">
                  <option value="Africa/Maputo">Africa/Maputo (GMT+2)</option>
                  <option value="Africa/Lagos">Africa/Lagos (GMT+1)</option>
                  <option value="Africa/Nairobi">Africa/Nairobi (GMT+3)</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-cyan-600" />
              Display Preferences
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <div>
                  <p className="text-sm font-medium text-slate-700">Dark Mode</p>
                  <p className="text-xs text-slate-500">Switch between light and dark theme</p>
                </div>
                <button className="relative w-12 h-6 rounded-full bg-slate-200 transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform" />
                </button>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <div>
                  <p className="text-sm font-medium text-slate-700">Compact Mode</p>
                  <p className="text-xs text-slate-500">Reduce spacing for more content</p>
                </div>
                <button className="relative w-12 h-6 rounded-full bg-slate-200 transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform" />
                </button>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-slate-700">Show Tips</p>
                  <p className="text-xs text-slate-500">Display helpful tips and suggestions</p>
                </div>
                <button className="relative w-12 h-6 rounded-full bg-cyan-500 transition-colors">
                  <div className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-md">
              <Save className="w-4 h-4 inline mr-2" />
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* ========== CHANGE PASSWORD MODAL ========== */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Change Password</h2>
              <button onClick={() => setShowPasswordModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                Update Password
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========== DELETE ACCOUNT MODAL ========== */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-600">Delete Account</h2>
              <button onClick={() => setShowDeleteModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <p className="text-sm text-red-700 font-medium">Warning: This action is irreversible!</p>
                <p className="text-sm text-red-600 mt-1">Deleting your account will permanently remove all your data including hosting, domains, and email accounts.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Type "DELETE" to confirm</label>
                <input
                  type="text"
                  placeholder="Type DELETE here"
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-mono"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all shadow-sm">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== API KEY MODAL ========== */}
      {showApiKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Create API Key</h2>
              <button onClick={() => setShowApiKeyModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleApiKeyCreate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Key Name</label>
                <input
                  type="text"
                  placeholder="e.g., Production API Key"
                  className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  value={apiKeyName}
                  onChange={(e) => setApiKeyName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Permissions</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                    Read
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                    Write
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                    Delete
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                Create API Key
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========== TWO-FACTOR MODAL ========== */}
      {showTwoFactorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                {profile.twoFactorEnabled ? 'Disable 2FA' : 'Enable Two-Factor Authentication'}
              </h2>
              <button onClick={() => setShowTwoFactorModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {!profile.twoFactorEnabled ? (
                <>
                  <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200 text-center">
                    <Smartphone className="w-12 h-12 text-cyan-600 mx-auto mb-2" />
                    <p className="text-sm text-slate-700">Scan this QR code with your authenticator app</p>
                    <div className="w-32 h-32 bg-white rounded-xl mx-auto my-3 border border-cyan-200 flex items-center justify-center">
                      <div className="w-24 h-24 bg-slate-200 rounded flex items-center justify-center text-slate-400 text-xs">QR Code</div>
                    </div>
                    <p className="text-xs text-slate-500">Or enter this code manually: <code className="font-mono bg-white px-2 py-1 rounded">123456</code></p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Verification Code</label>
                    <input
                      type="text"
                      placeholder="Enter 6-digit code"
                      className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono text-center text-lg"
                      maxLength={6}
                    />
                  </div>
                  <button className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-md">
                    Enable 2FA
                  </button>
                </>
              ) : (
                <>
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <p className="text-sm text-amber-700">Are you sure you want to disable Two-Factor Authentication? This will make your account less secure.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Verification Code</label>
                    <input
                      type="text"
                      placeholder="Enter 6-digit code"
                      className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono text-center text-lg"
                      maxLength={6}
                    />
                  </div>
                  <button className="w-full h-11 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all shadow-sm">
                    Disable 2FA
                  </button>
                </>
              )}
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

export default SettingsTab;