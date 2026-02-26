import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

// --- CORE COMPONENTS ---
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// --- MARKETING PAGES ---
import EduSpacePage from "./pages/solutions/eduspace/EduSpacePage";
import HealthSpacePage from "./pages/solutions/healthspace/HealthSpacePage";
import AgriSpacePage from "./pages/solutions/agrispace/AgriSpacePage";
import FinSpacePage from "./pages/solutions/finspace/FinSpacePage";
import TradeSpacePage from "./pages/solutions/tradespace/TradeSpacePage";
import GovSpacePage from "./pages/solutions/govspace/GovSpacePage";

// --- APP PAGES ---
import UniversalLogin from "./pages/auth/UniversalLogin";
import EduDashboard from "./pages/dashboard/eduspace/EduDashboard";
import HealthDashboard from "./pages/dashboard/healthspace/HealthDashboard";
import AgriDashboard from "./pages/dashboard/agrispace/AgriDashboard";
import FinDashboard from "./pages/dashboard/finspace/FinDashboard";
import TradeDashboard from "./pages/dashboard/tradespace/TradeDashboard";
import GovDashboard from "./pages/dashboard/govspace/GovDashboard";
import Contact from "./pages/solutions/contact/Contact";
import EnginesPage from "./pages/engines/EnginesPage";
import LabsPage from "./pages/lab/LabsPage";
import SignUpPage from "./pages/auth/SignUpPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* 1. MARKETING ROUTES */}
              <Route path="/" element={<Index />} />
              <Route path="/solutions/eduspace" element={<EduSpacePage />} />

              <Route path="/solutions/healthspace" element={<HealthSpacePage />} />
              <Route path="/solutions/agrispace" element={<AgriSpacePage />} />
              <Route path="/solutions/finspace" element={<FinSpacePage />} />
              <Route path="/solutions/tradespace" element={<TradeSpacePage />} />
              <Route path="/solutions/govspace" element={<GovSpacePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/engines" element={<EnginesPage />} />
              <Route path="/labs" element={<LabsPage />} />

              {/* 2. AUTH ROUTE (No more redirects!) */}
              <Route path="/login" element={<UniversalLogin />} />
              <Route path="/signup" element={<SignUpPage />} />

              {/* 3. DASHBOARD ROUTES */}
              <Route path="/dashboard/eduspace" element={<EduDashboard />} />
              <Route path="/dashboard/healthspace" element={<HealthDashboard />} />
              <Route path="/dashboard/agrispace" element={<AgriDashboard />} />
              <Route path="/dashboard/finspace" element={<FinDashboard />} />
              <Route path="/dashboard/tradespace" element={<TradeDashboard />} />
              <Route path="/dashboard/govspace" element={<GovDashboard />} />

              {/* 4. FALLBACK */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;


// import React, { useEffect } from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { ThemeProvider } from "@/components/theme-provider";

// // --- CORE COMPONENTS ---
// import ScrollToTop from "./components/ScrollToTop";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// // --- MARKETING PAGES (Showrooms) ---
// import EduSpacePage from "./pages/eduspace/EduSpacePage";
// import HealthSpacePage from "./pages/healthspace/HealthSpacePage";
// import AgriSpacePage from "./pages/agrispace/AgriSpacePage";
// import FinSpacePage from "./pages/finspace/FinSpacePage";
// import TradeSpacePage from "./pages/tradespace/TradeSpacePage";
// import GovSpacePage from "./pages/govspace/GovSpacePage";

// // --- APP PAGES (Software/Dashboards) ---
// import UniversalLogin from "./pages/auth/UniversalLogin";
// import EduDashboard from "./pages/dashboard/eduspace/EduDashboard";
// import HealthDashboard from "./pages/dashboard/healthspace/HealthDashboard";
// import AgriDashboard from "./pages/dashboard/agrispace/AgriDashboard";
// import FinDashboard from "./pages/dashboard/finspace/FinDashboard";
// import TradeDashboard from "./pages/dashboard/tradespace/TradeDashboard";
// import GovDashboard from "./pages/dashboard/govspace/GovDashboard";

// const queryClient = new QueryClient();

// // Helper Component: Safely pushes a user to a different domain (Used for Production)
// const ExternalRedirect = ({ url }: { url: string }) => {
//   useEffect(() => {
//     window.location.href = url;
//   }, [url]);
//   return null;
// };

// // ==========================================
// // 1. THE SOFTWARE ROUTER (app.mzatinova.com)
// // ==========================================
// const AppRouter = () => (
//   <Routes>
//     {/* Core App Routes */}
//     <Route path="/login" element={<UniversalLogin />} />

//     {/* The Industry Dashboards */}
//     <Route path="/dashboard/eduspace" element={<EduDashboard />} />
//     <Route path="/dashboard/healthspace" element={<HealthDashboard />} />
//     <Route path="/dashboard/agrispace" element={<AgriDashboard />} />
//     <Route path="/dashboard/finspace" element={<FinDashboard />} />
//     <Route path="/dashboard/tradespace" element={<TradeDashboard />} />
//     <Route path="/dashboard/govspace" element={<GovDashboard />} />

//     {/* If they go to the root of the app, force them to login */}
//     <Route path="/" element={<Navigate to="/login" replace />} />

//     {/* Catch-all for missing app pages */}
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );

// // ==========================================
// // 2. THE MARKETING ROUTER (mzatinova.com)
// // ==========================================
// const MarketingRouter = () => (
//   <Routes>
//     {/* Main Home Page */}
//     <Route path="/" element={<Index />} />

//     {/* Industry Solutions Pages */}
//     <Route path="/solutions/eduspace" element={<EduSpacePage />} />
//     <Route path="/solutions/healthspace" element={<HealthSpacePage />} />
//     <Route path="/solutions/agrispace" element={<AgriSpacePage />} />
//     <Route path="/solutions/finspace" element={<FinSpacePage />} />
//     <Route path="/solutions/tradespace" element={<TradeSpacePage />} />
//     <Route path="/solutions/govspace" element={<GovSpacePage />} />

//     {/* PRODUCTION REDIRECT: If live on the internet, push them to app.mzatinova.com */}
//     {/* LOCAL REDIRECT: We handle local routing in the MainContent component below! */}
//     <Route path="/login" element={<ExternalRedirect url="https://app.mzatinova.com/login" />} />

//     {/* Catch-all for missing marketing pages */}
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );

// // ==========================================
// // 3. THE SMART TRAFFIC COP
// // ==========================================
// const MainContent = () => {
//   const location = useLocation();
//   const hostname = window.location.hostname;

//   // Rule 1: Are they on the live production app domain? (app.mzatinova.com)
//   const isLiveAppDomain = hostname.startsWith("app.");

//   // Rule 2: Is the developer testing on their computer AND trying to view the software?
//   const isLocalHost = hostname === "localhost" || hostname === "127.0.0.1";
//   const isTryingToAccessSoftware = location.pathname.startsWith("/login") || location.pathname.startsWith("/dashboard");

//   // Final Decision: Show the Software if they are on the App domain OR testing locally
//   if (isLiveAppDomain || (isLocalHost && isTryingToAccessSoftware)) {
//     return <AppRouter />;
//   }

//   // Otherwise, show the Marketing Website
//   return <MarketingRouter />;
// };

// // ==========================================
// // 4. THE MASTER APP WRAPPER
// // ==========================================
// const App = () => {
//   return (
//     <ThemeProvider defaultTheme="dark">
//       <QueryClientProvider client={queryClient}>
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <ScrollToTop />

//             {/* We moved the logic inside here so it can read the URL path accurately! */}
//             <MainContent />

//           </BrowserRouter>
//         </TooltipProvider>
//       </QueryClientProvider>
//     </ThemeProvider>
//   );
// };

// export default App;


// import React, { useEffect } from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { ThemeProvider } from "@/components/theme-provider";

// // --- CORE COMPONENTS ---
// import ScrollToTop from "./components/ScrollToTop";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// // --- MARKETING PAGES (Showrooms) ---
// import EduSpacePage from "./pages/eduspace/EduSpacePage";
// import HealthSpacePage from "./pages/healthspace/HealthSpacePage";
// import AgriSpacePage from "./pages/agrispace/AgriSpacePage";
// import FinSpacePage from "./pages/finspace/FinSpacePage";
// import TradeSpacePage from "./pages/tradespace/TradeSpacePage";
// import GovSpacePage from "./pages/govspace/GovSpacePage";

// // --- APP PAGES (Software/Dashboards) ---
// import UniversalLogin from "./pages/auth/UniversalLogin";
// import EduDashboard from "./pages/dashboard/eduspace/EduDashboard";
// import HealthDashboard from "./pages/dashboard/healthspace/HealthDashboard";
// import AgriDashboard from "./pages/dashboard/agrispace/AgriDashboard";
// import FinDashboard from "./pages/dashboard/finspace/FinDashboard";
// import TradeDashboard from "./pages/dashboard/tradespace/TradeDashboard";
// import GovDashboard from "./pages/dashboard/govspace/GovDashboard";

// const queryClient = new QueryClient();

// // Helper Component: Safely pushes a user to a different domain
// const ExternalRedirect = ({ url }: { url: string }) => {
//   useEffect(() => {
//     window.location.href = url;
//   }, [url]);
//   return null;
// };

// // ==========================================
// // 1. THE SOFTWARE ROUTER (app.mzatinova.com)
// // ==========================================
// const AppRouter = () => (
//   <Routes>
//     {/* Core App Routes */}
//     <Route path="/login" element={<UniversalLogin />} />

//     {/* The Industry Dashboards */}
//     <Route path="/dashboard/eduspace" element={<EduDashboard />} />
//     <Route path="/dashboard/healthspace" element={<HealthDashboard />} />
//     <Route path="/dashboard/agrispace" element={<AgriDashboard />} />
//     <Route path="/dashboard/finspace" element={<FinDashboard />} />
//     <Route path="/dashboard/tradespace" element={<TradeDashboard />} />
//     <Route path="/dashboard/govspace" element={<GovDashboard />} />

//     {/* If they go to the root of the app subdomain, force them to login */}
//     <Route path="/" element={<Navigate to="/login" replace />} />

//     {/* Catch-all for missing app pages */}
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );

// // ==========================================
// // 2. THE MARKETING ROUTER (mzatinova.com)
// // ==========================================
// const MarketingRouter = () => (
//   <Routes>
//     {/* Main Home Page */}
//     <Route path="/" element={<Index />} />

//     {/* Industry Solutions Pages */}
//     <Route path="/solutions/eduspace" element={<EduSpacePage />} />
//     <Route path="/solutions/healthspace" element={<HealthSpacePage />} />
//     <Route path="/solutions/agrispace" element={<AgriSpacePage />} />
//     <Route path="/solutions/finspace" element={<FinSpacePage />} />
//     <Route path="/solutions/tradespace" element={<TradeSpacePage />} />
//     <Route path="/solutions/govspace" element={<GovSpacePage />} />

//     {/* If they click login on the marketing site, push them to the app subdomain */}
//     {/* NOTE: For local testing, change this URL to "http://app.localhost:8080/login" */}
//     <Route path="/login" element={<ExternalRedirect url="https://app.mzatinova.com/login" />} />

//     {/* Catch-all for missing marketing pages */}
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );

// // ==========================================
// // 3. THE MASTER TRAFFIC COP (Main App)
// // ==========================================
// const App = () => {
//   const hostname = window.location.hostname;
//   const isAppDomain = hostname.startsWith("app.");

//   return (
//     <ThemeProvider defaultTheme="dark">
//       <QueryClientProvider client={queryClient}>
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <ScrollToTop />
//             {/* THE MAGIC SPLIT */}
//             {isAppDomain ? <AppRouter /> : <MarketingRouter />}
//           </BrowserRouter>
//         </TooltipProvider>
//       </QueryClientProvider>
//     </ThemeProvider>
//   );
// };

// export default App;

// import React, { useEffect } from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { ThemeProvider } from "@/components/theme-provider";

// // --- CORE COMPONENTS ---
// import ScrollToTop from "./components/ScrollToTop";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// // --- MARKETING PAGES (Showrooms) ---
// import EduSpacePage from "./pages/eduspace/EduSpacePage";
// import HealthSpacePage from "./pages/healthspace/HealthSpacePage";
// import AgriSpacePage from "./pages/agrispace/AgriSpacePage";
// import FinSpacePage from "./pages/finspace/FinSpacePage";
// import TradeSpacePage from "./pages/tradespace/TradeSpacePage";
// import GovSpacePage from "./pages/govspace/GovSpacePage";

// // --- APP PAGES (Software/Dashboards) ---
// import UniversalLogin from "./pages/auth/UniversalLogin";
// import EduDashboard from "./pages/dashboard/eduspace/EduDashboard";

// // (Commented out for future use, just like you had them!)
// // import Contact from "./pages/contact/Contact";
// // import Support from "./pages/support/Support";
// // import ProductsPage from "./pages/products/ProductsPage";
// // import IndustriesPage from "./pages/industries/IndustriesPage";
// // import ServicesPage from "./pages/services/ServicesPage";
// // import CompanyPage from "./pages/company/CompanyPage";

// const queryClient = new QueryClient();

// // Helper Component: Safely pushes a user to a different domain
// const ExternalRedirect = ({ url }: { url: string }) => {
//   useEffect(() => {
//     window.location.href = url;
//   }, [url]);
//   return null;
// };

// // ==========================================
// // 1. THE SOFTWARE ROUTER (app.mzatinova.com)
// // ==========================================
// const AppRouter = () => (
//   <Routes>
//     {/* Core App Routes */}
//     <Route path="/login" element={<UniversalLogin />} />
//     <Route path="/dashboard/eduspace" element={<EduDashboard />} />

//     {/* If they go to the root of the app subdomain, force them to login */}
//     <Route path="/" element={<Navigate to="/login" replace />} />

//     {/* Catch-all for missing app pages */}
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );

// // ==========================================
// // 2. THE MARKETING ROUTER (mzatinova.com)
// // ==========================================
// const MarketingRouter = () => (
//   <Routes>
//     {/* Main Home Page */}
//     <Route path="/" element={<Index />} />

//     {/* Industry Solutions Pages */}
//     <Route path="/solutions/eduspace" element={<EduSpacePage />} />
//     <Route path="/solutions/healthspace" element={<HealthSpacePage />} />
//     <Route path="/solutions/agrispace" element={<AgriSpacePage />} />
//     <Route path="/solutions/finspace" element={<FinSpacePage />} />
//     <Route path="/solutions/tradespace" element={<TradeSpacePage />} />
//     <Route path="/solutions/govspace" element={<GovSpacePage />} />

//     {/* If they click login on the marketing site, push them to the app subdomain */}
//     {/* NOTE: For local testing, change this URL to "http://app.localhost:8080/login" */}
//     <Route path="/login" element={<ExternalRedirect url="https://app.mzatinova.com/login" />} />

//     {/* Catch-all for missing marketing pages */}
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );

// // ==========================================
// // 3. THE MASTER TRAFFIC COP (Main App)
// // ==========================================
// const App = () => {
//   // Check the URL the user is currently visiting
//   const hostname = window.location.hostname;

//   // If we are on app.mzatinova.com (or app.localhost for local testing)
//   const isAppDomain = hostname.startsWith("app.");

//   return (
//     <ThemeProvider defaultTheme="dark">
//       <QueryClientProvider client={queryClient}>
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <ScrollToTop />

//             {/* THE MAGIC SPLIT */}
//             {isAppDomain ? <AppRouter /> : <MarketingRouter />}

//           </BrowserRouter>
//         </TooltipProvider>
//       </QueryClientProvider>
//     </ThemeProvider>
//   );
// };

// export default App;

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "@/components/theme-provider";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import Contact from "./pages/contact/Contact";
// import Support from "./pages/support/Support";
// // import ProductsPage from "./pages/ProductsPage";
// import ScrollToTop from "./components/ScrollToTop"; // <--- ADD THIS IMPORT
// import ProductsPage from "./pages/products/ProductsPage";
// import IndustriesPage from "./pages/industries/IndustriesPage";
// import ServicesPage from "./pages/services/ServicesPage";
// import CompanyPage from "./pages/company/CompanyPage";
// import EduSpacePage from "./pages/eduspace/EduSpacePage";
// import HealthSpacePage from "./pages/healthspace/HealthSpacePage";
// import AgriSpacePage from "./pages/agrispace/AgriSpacePage";
// import FinSpacePage from "./pages/finspace/FinSpacePage";
// import TradeSpacePage from "./pages/tradespace/TradeSpacePage";
// import GovSpacePage from "./pages/govspace/GovSpacePage";
// import UniversalLogin from "./pages/auth/UniversalLogin";
// import EduDashboard from "./pages/dashboard/eduspace/EduDashboard";

// const queryClient = new QueryClient();

// const App = () => (
//   <ThemeProvider defaultTheme="dark">
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <ScrollToTop /> {/* <--- ADD THIS LINE HERE */}
//           <Routes>
//             {/* Main Home Page */}
//             <Route path="/" element={<Index />} />

//             {/* The Login Gate (The Bridge) */}
//             <Route path="/login" element={<UniversalLogin />} />

//             {/* 2. ADD THIS LINE: THE FACTORY DASHBOARDS */}
//             <Route path="/dashboard/eduspace" element={<EduDashboard />} />

//             {/* Full Pages */}
//             <Route path="/solutions/eduspace" element={<EduSpacePage />} />
//             <Route path="/solutions/healthspace" element={<HealthSpacePage />} />
//             <Route path="/solutions/agrispace" element={<AgriSpacePage />} />
//             <Route path="/solutions/finspace" element={<FinSpacePage />} />
//             <Route path="/solutions/tradespace" element={<TradeSpacePage />} />
//             <Route path="/solutions/govspace" element={<GovSpacePage />} />
//             {/* <Route path="/products" element={<ProductsPage />} />
//             <Route path="/industries" element={<IndustriesPage />} />
//             <Route path="/Services" element={<ServicesPage />} />
//             <Route path="/Company" element={<CompanyPage />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/support" element={<Support />} /> */}

//             {/* Catch-all */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   </ThemeProvider>
// );

// export default App;