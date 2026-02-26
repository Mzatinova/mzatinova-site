import React, { useState } from 'react';
import { Mail, Lock, User, Building2, Layers, ArrowRight, Shield, Loader2, Eye, EyeOff, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SignUpPage: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        sector: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call to provision the new workspace
        setTimeout(() => {
            setIsLoading(false);
            // After successful signup, route them to login to authenticate
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-blue-500/30 relative">
            <Header />

            <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden pt-24 pb-12">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

                {/* Notice it's max-w-2xl now to accommodate the grid layout */}
                <div className="w-full max-w-2xl relative z-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
                            Initialize <span className="text-blue-500">Workspace</span>
                        </h1>
                        <p className="text-slate-400">Join the Mzatinova ecosystem and transform your operations.</p>
                    </div>

                    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative">

                        {/* THE ESCAPE HATCH (X BUTTON) */}
                        <Link
                            to="/"
                            className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </Link>

                        <form onSubmit={handleSignUp} className="space-y-6 mt-2">

                            {/* TWO-COLUMN GRID FOR DESKTOP */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* FULL NAME */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-slate-500" />
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                </div>

                                {/* WORK EMAIL */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Work Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-slate-500" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                                            placeholder="jane@organization.com"
                                        />
                                    </div>
                                </div>

                                {/* ORGANIZATION NAME */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Organization Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Building2 className="h-5 w-5 text-slate-500" />
                                        </div>
                                        <input
                                            type="text"
                                            name="organization"
                                            required
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                                            placeholder="e.g. Lincoln High School"
                                        />
                                    </div>
                                </div>

                                {/* SECTOR DROPDOWN */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Operating Sector</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Layers className="h-5 w-5 text-slate-500" />
                                        </div>
                                        <select
                                            name="sector"
                                            required
                                            value={formData.sector}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                        >
                                            <option value="" disabled className="text-slate-500">Select your space...</option>
                                            <option value="eduspace">EduSpace (Education)</option>
                                            <option value="healthspace">HealthSpace (Healthcare)</option>
                                            <option value="agrispace">AgriSpace (Agriculture)</option>
                                            <option value="finspace">FinSpace (Finance)</option>
                                            <option value="tradespace">TradeSpace (Commerce)</option>
                                            <option value="govspace">GovSpace (Government)</option>
                                        </select>
                                        {/* Custom dropdown arrow to match theme */}
                                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                            <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PASSWORD FIELD (Full Width) */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Create Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-slate-500" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                                <p className="text-xs text-slate-500 ml-1 pt-1">Must be at least 8 characters long.</p>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 mt-4 font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Provisioning Workspace...
                                    </>
                                ) : (
                                    <>
                                        Create Account
                                        <ArrowRight className="h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* BACK TO LOGIN PROMPT */}
                        <div className="mt-8 text-center text-sm text-slate-400 border-t border-slate-800/60 pt-6">
                            Already have a workspace?{' '}
                            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                                Sign in here
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
                        <Shield className="h-4 w-4 text-emerald-500" />
                        <span>Protected by Mzatinova Core Security</span>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SignUpPage;