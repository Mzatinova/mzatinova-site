import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Shield, Loader2, Eye, EyeOff } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UniversalLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // NEW: State for password visibility
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const userEmail = email.toLowerCase();
            if (userEmail.includes('hospital') || userEmail.includes('health')) navigate('/dashboard/healthspace');
            else if (userEmail.includes('farm') || userEmail.includes('agri')) navigate('/dashboard/agrispace');
            else if (userEmail.includes('bank') || userEmail.includes('finance')) navigate('/dashboard/finspace');
            else if (userEmail.includes('trade') || userEmail.includes('commerce')) navigate('/dashboard/tradespace');
            else if (userEmail.includes('gov') || userEmail.includes('city')) navigate('/dashboard/govspace');
            else navigate('/dashboard/eduspace');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-blue-500/30 relative">
            {/* 1. FIXED HEADER */}
            <Header />

            {/* 2. MAIN CONTENT AREA */}
            <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden pt-24 pb-12">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="w-full max-w-md relative z-10">
                    <div className="text-center mb-10">
                        {/* <div className="inline-flex h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                            <span className="text-white font-bold text-3xl leading-none">M</span>
                        </div> */}
                        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
                            Mzatinova <span className="text-blue-500">ID</span>
                        </h1>
                        <p className="text-slate-400">One secure credential for all spaces.</p>
                    </div>

                    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
                        <form onSubmit={handleLogin} className="space-y-6">

                            {/* EMAIL FIELD */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Work Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-slate-500" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                                        placeholder="Enter your work email..."
                                    />
                                </div>
                            </div>

                            {/* PASSWORD FIELD */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-slate-500" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                                        placeholder="••••••••"
                                    />
                                    {/* HIDE/SHOW PASSWORD TOGGLE */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>

                                {/* FORGOT PASSWORD (Moved below the input, aligned right) */}
                                <div className="flex justify-end pt-1">
                                    <a href="#" className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Authenticating...
                                    </>
                                ) : (
                                    <>
                                        Sign In securely
                                        <ArrowRight className="h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* SIGN UP PROMPT */}
                        <div className="mt-8 text-center text-sm text-slate-400 border-t border-slate-800/60 pt-6">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                                Sign up here
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
                        <Shield className="h-4 w-4 text-emerald-500" />
                        <span>Protected by Mzatinova Core Security</span>
                    </div>
                </div>
            </main>

            {/* 3. FOOTER */}
            <Footer />
        </div>
    );
};

export default UniversalLogin;

// import React, { useState } from 'react';
// import { Mail, Lock, ArrowRight, Shield, Loader2 } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const UniversalLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleLogin = (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setTimeout(() => {
//             setIsLoading(false);
//             const userEmail = email.toLowerCase();
//             if (userEmail.includes('hospital') || userEmail.includes('health')) navigate('/dashboard/healthspace');
//             else if (userEmail.includes('farm') || userEmail.includes('agri')) navigate('/dashboard/agrispace');
//             else if (userEmail.includes('bank') || userEmail.includes('finance')) navigate('/dashboard/finspace');
//             else if (userEmail.includes('trade') || userEmail.includes('commerce')) navigate('/dashboard/tradespace');
//             else if (userEmail.includes('gov') || userEmail.includes('city')) navigate('/dashboard/govspace');
//             else navigate('/dashboard/eduspace');
//         }, 1500);
//     };

//     return (
//         <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-blue-500/30 relative">
//             {/* 1. FIXED HEADER */}
//             <Header />

//             {/* 2. MAIN CONTENT AREA */}
//             <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden pt-24 pb-12">
//                 {/* Background Glow */}
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

//                 <div className="w-full max-w-md relative z-10">
//                     <div className="text-center mb-10">
//                         <div className="inline-flex h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
//                             <span className="text-white font-bold text-3xl leading-none">M</span>
//                         </div>
//                         <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
//                             Mzatinova <span className="text-blue-500">ID</span>
//                         </h1>
//                         <p className="text-slate-400">One secure credential for all spaces.</p>
//                     </div>

//                     <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
//                         <form onSubmit={handleLogin} className="space-y-6">
//                             <div className="space-y-2">
//                                 <label className="text-sm font-medium text-slate-300 ml-1">Work Email</label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                         <Mail className="h-5 w-5 text-slate-500" />
//                                     </div>
//                                     <input
//                                         type="email"
//                                         required
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
//                                         placeholder="Enter your work email..."
//                                     />
//                                 </div>
//                             </div>

//                             <div className="space-y-2">
//                                 <div className="flex justify-between items-center ml-1">
//                                     <label className="text-sm font-medium text-slate-300">Password</label>
//                                     <a href="#" className="text-xs text-blue-400 hover:text-blue-300 font-medium">Forgot?</a>
//                                 </div>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                         <Lock className="h-5 w-5 text-slate-500" />
//                                     </div>
//                                     <input
//                                         type="password"
//                                         required
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
//                                         placeholder="••••••••"
//                                     />
//                                 </div>
//                             </div>

//                             <button
//                                 type="submit"
//                                 disabled={isLoading}
//                                 className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                             >
//                                 {isLoading ? (
//                                     <>
//                                         <Loader2 className="h-5 w-5 animate-spin" />
//                                         Authenticating...
//                                     </>
//                                 ) : (
//                                     <>
//                                         Sign In securely
//                                         <ArrowRight className="h-5 w-5" />
//                                     </>
//                                 )}
//                             </button>
//                         </form>
//                     </div>

//                     <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
//                         <Shield className="h-4 w-4 text-emerald-500" />
//                         <span>Protected by Mzatinova Core Security</span>
//                     </div>
//                 </div>
//             </main>

//             {/* 3. FOOTER */}
//             <Footer />
//         </div>
//     );
// };

// export default UniversalLogin;


// import React, { useState } from 'react';
// import { Mail, Lock, ArrowRight, Shield, Loader2 } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const UniversalLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const navigate = useNavigate();

//     const handleLogin = (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);

//         // --- THE MZATINOVA ENGINE SMART ROUTER ---
//         setTimeout(() => {
//             setIsLoading(false);

//             const userEmail = email.toLowerCase();

//             // 1. HEALTHSPACE (Doctors, Hospitals)
//             if (userEmail.includes('hospital') || userEmail.includes('health') || userEmail.includes('med')) {
//                 navigate('/dashboard/healthspace');
//             }
//             // 2. AGRISPACE (Farmers, Cooperatives)
//             else if (userEmail.includes('greenvalley') || userEmail.includes('farm') || userEmail.includes('agri')) {
//                 navigate('/dashboard/agrispace');
//             }
//             // 3. FINSPACE (Banks, FinTech)
//             else if (userEmail.includes('bank') || userEmail.includes('finance') || userEmail.includes('apex')) {
//                 navigate('/dashboard/finspace');
//             }
//             // 4. TRADESPACE (Commerce, Supply Chain)
//             else if (userEmail.includes('nexus') || userEmail.includes('trade') || userEmail.includes('commerce')) {
//                 navigate('/dashboard/tradespace');
//             }
//             // 5. GOVSPACE (Municipalities, Gov)
//             else if (userEmail.includes('metro') || userEmail.includes('gov') || userEmail.includes('city')) {
//                 navigate('/dashboard/govspace');
//             }
//             // 6. EDUSPACE (Fallback / Schools)
//             else {
//                 navigate('/dashboard/eduspace');
//             }

//         }, 1500);
//     };

//     return (
//         <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 selection:bg-blue-500/30 font-sans relative overflow-hidden">
//             <Header />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none">

//                 <div className="w-full max-w-md relative z-10">
//                     <div className="text-center mb-10">
//                         <div className="inline-flex h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
//                             <span className="text-white font-bold text-3xl leading-none">M</span>
//                         </div>
//                         <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
//                             Mzatinova <span className="text-blue-500">ID</span>
//                         </h1>
//                         <p className="text-slate-400">One secure credential for all spaces.</p>
//                     </div>

//                     <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
//                         <form onSubmit={handleLogin} className="space-y-6">
//                             <div className="space-y-2">
//                                 <label className="text-sm font-medium text-slate-300 ml-1">Work Email</label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                         <Mail className="h-5 w-5 text-slate-500" />
//                                     </div>
//                                     <input
//                                         type="email"
//                                         required
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
//                                         placeholder="Enter your work email..."
//                                     />
//                                 </div>
//                             </div>

//                             <div className="space-y-2">
//                                 <div className="flex justify-between items-center ml-1">
//                                     <label className="text-sm font-medium text-slate-300">Password</label>
//                                     <a href="#" className="text-xs text-blue-400 hover:text-blue-300 font-medium">Forgot?</a>
//                                 </div>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                         <Lock className="h-5 w-5 text-slate-500" />
//                                     </div>
//                                     <input
//                                         type="password"
//                                         required
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
//                                         placeholder="••••••••"
//                                     />
//                                 </div>
//                             </div>

//                             <button
//                                 type="submit"
//                                 disabled={isLoading}
//                                 className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                             >
//                                 {isLoading ? (
//                                     <>
//                                         <Loader2 className="h-5 w-5 animate-spin" />
//                                         Authenticating...
//                                     </>
//                                 ) : (
//                                     <>
//                                         Sign In securely
//                                         <ArrowRight className="h-5 w-5" />
//                                     </>
//                                 )}
//                             </button>
//                         </form>
//                     </div>

//                     <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
//                         <Shield className="h-4 w-4 text-emerald-500" />
//                         <span>Protected by Mzatinova Core Security</span>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>

//         </div>

//     );
// };

// export default UniversalLogin;

// import React, { useState } from 'react';
// import { Mail, Lock, ArrowRight, Shield, Loader2 } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'; // <-- 1. IMPORT THIS

// const UniversalLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const navigate = useNavigate(); // <-- 2. INITIALIZE THE STEERING WHEEL

//     const handleLogin = (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);

//         // --- THE MZATINOVA ENGINE MAGIC ---
//         // Simulating checking the database...
//         setTimeout(() => {
//             setIsLoading(false);

//             // 3. THE REDIRECT!
//             // When the database says "This is a school admin", we drive them to the EduDashboard!
//             navigate('/dashboard/eduspace');

//         }, 1500); // Wait 1.5 seconds to show the cool loading animation
//     };

//     return (
//         <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 selection:bg-blue-500/30 font-sans relative overflow-hidden">

//             {/* Background Ambient Glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

//             <div className="w-full max-w-md relative z-10">
//                 {/* Logo Area */}
//                 <div className="text-center mb-10">
//                     <div className="inline-flex h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
//                         <span className="text-white font-bold text-3xl leading-none">M</span>
//                     </div>
//                     <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
//                         Mzatinova <span className="text-blue-500">ID</span>
//                     </h1>
//                     <p className="text-slate-400">One secure credential for all spaces.</p>
//                 </div>

//                 {/* Login Card */}
//                 <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
//                     <form onSubmit={handleLogin} className="space-y-6">

//                         {/* Email Field */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-medium text-slate-300 ml-1">Work Email</label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                     <Mail className="h-5 w-5 text-slate-500" />
//                                 </div>
//                                 <input
//                                     type="email"
//                                     required
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
//                                     placeholder="admin@hillside.edu"
//                                 />
//                             </div>
//                         </div>

//                         {/* Password Field */}
//                         <div className="space-y-2">
//                             <div className="flex justify-between items-center ml-1">
//                                 <label className="text-sm font-medium text-slate-300">Password</label>
//                                 <a href="#" className="text-xs text-blue-400 hover:text-blue-300 font-medium">Forgot?</a>
//                             </div>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                     <Lock className="h-5 w-5 text-slate-500" />
//                                 </div>
//                                 <input
//                                     type="password"
//                                     required
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
//                                     placeholder="••••••••"
//                                 />
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                         >
//                             {isLoading ? (
//                                 <>
//                                     <Loader2 className="h-5 w-5 animate-spin" />
//                                     Authenticating...
//                                 </>
//                             ) : (
//                                 <>
//                                     Sign In securely
//                                     <ArrowRight className="h-5 w-5" />
//                                 </>
//                             )}
//                         </button>
//                     </form>
//                 </div>

//                 {/* Security Footer */}
//                 <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
//                     <Shield className="h-4 w-4 text-emerald-500" />
//                     <span>Protected by Mzatinova Core Security</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UniversalLogin;

// import React, { useState } from 'react';
// import { Mail, Lock, ArrowRight, Shield, Loader2 } from 'lucide-react';

// const UniversalLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleLogin = (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);

//         // --- THE MZATINOVA ENGINE MAGIC HAPPENS HERE ---
//         // In your real backend, you will send the email to your database.
//         // The database will reply: "This email belongs to a Doctor at HealthSpace."
//         // Then, you redirect them to the HealthSpace Dashboard!

//         setTimeout(() => {
//             setIsLoading(false);
//             // Example routing logic (pseudocode):
//             // if (user.role === 'teacher') navigate('/eduspace/dashboard');
//             // if (user.role === 'doctor') navigate('/healthspace/dashboard');
//             alert(`Engine routing initialized for: ${email}`);
//         }, 2000);
//     };

//     return (
//         <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 selection:bg-blue-500/30 font-sans relative overflow-hidden">

//             {/* Background Ambient Glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

//             <div className="w-full max-w-md relative z-10">
//                 {/* Logo Area */}
//                 <div className="text-center mb-10">
//                     <div className="inline-flex h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
//                         <span className="text-white font-bold text-3xl leading-none">M</span>
//                     </div>
//                     <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
//                         Mzatinova <span className="text-blue-500">ID</span>
//                     </h1>
//                     <p className="text-slate-400">One secure credential for all spaces.</p>
//                 </div>

//                 {/* Login Card */}
//                 <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
//                     <form onSubmit={handleLogin} className="space-y-6">

//                         {/* Email Field */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-medium text-slate-300 ml-1">Work Email</label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                     <Mail className="h-5 w-5 text-slate-500" />
//                                 </div>
//                                 <input
//                                     type="email"
//                                     required
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
//                                     placeholder="name@institution.com"
//                                 />
//                             </div>
//                         </div>

//                         {/* Password Field */}
//                         <div className="space-y-2">
//                             <div className="flex justify-between items-center ml-1">
//                                 <label className="text-sm font-medium text-slate-300">Password</label>
//                                 <a href="#" className="text-xs text-blue-400 hover:text-blue-300 font-medium">Forgot?</a>
//                             </div>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                     <Lock className="h-5 w-5 text-slate-500" />
//                                 </div>
//                                 <input
//                                     type="password"
//                                     required
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
//                                     placeholder="••••••••"
//                                 />
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                         >
//                             {isLoading ? (
//                                 <>
//                                     <Loader2 className="h-5 w-5 animate-spin" />
//                                     Authenticating...
//                                 </>
//                             ) : (
//                                 <>
//                                     Sign In securely
//                                     <ArrowRight className="h-5 w-5" />
//                                 </>
//                             )}
//                         </button>
//                     </form>
//                 </div>

//                 {/* Security Footer */}
//                 <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
//                     <Shield className="h-4 w-4 text-emerald-500" />
//                     <span>Protected by Mzatinova Core Security</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UniversalLogin;