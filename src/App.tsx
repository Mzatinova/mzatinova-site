import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import EduSpaceDemo from "./pages/EduSpaceDemo";
import NotFound from "./pages/NotFound";
import EduSpacePlatform from "./components/platforms/eduspace/EduSpacePlatform";
import HealthSpacePlatform from "./components/platforms/healthspace/HealthSpacePlatform";
import AgriSpacePlatform from "./components/platforms/agrispace/AgriSpacePlatform";
import TradeSpacePlatform from "./components/platforms/tradespace/TradeSpacePlatform";
import GovSpacePlatform from "./components/platforms/govspace/GovSpacePlatform";
import CloudSpacePlatform from "./components/platforms/cloudspace/CloudSpacePlatform";
import CloudSpaceDashboard from "./components/platforms/cloudspace/CloudSpaceDashboard";
import AdminDashboard from "./components/platforms/cloudspace/admin/AdminDashboard";

const queryClient = new QueryClient();

const getPlatformComponent = (hostname: string) => {
  switch (hostname) {
    case "eduspace.mzatinova.com":
      return <EduSpacePlatform />;
    case "healthspace.mzatinova.com":
      return <HealthSpacePlatform />;
    case "agrispace.mzatinova.com":
      return <AgriSpacePlatform />;
    case "tradespace.mzatinova.com":
      return <TradeSpacePlatform />;
    case "govspace.mzatinova.com":
      return <GovSpacePlatform />;
    case "cloudspace.mzatinova.com":
      return <CloudSpacePlatform />;
    default:
      return <Index />;
  }
};

const App = () => {
  const hostname = window.location.hostname;
   console.log("Current hostname:", hostname); 
  const platformComponent = getPlatformComponent(hostname);
   console.log("Platform component:", platformComponent);

  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={platformComponent} />
              <Route path="/eduspace-demo" element={<EduSpaceDemo />} />
              <Route path="/platforms/eduspace" element={<EduSpacePlatform />} />
              <Route path="/platforms/healthspace" element={<HealthSpacePlatform />} />
              <Route path="/platforms/agrispace" element={<AgriSpacePlatform />} />
              <Route path="/platforms/tradespace" element={<TradeSpacePlatform />} />
              <Route path="/platforms/govspace" element={<GovSpacePlatform />} />
              <Route path="/platforms/cloudspace" element={<CloudSpacePlatform />} />
              <Route path="/platforms/cloudspace/dashboard" element={
                <CloudSpaceDashboard 
                  user={{
                    name: "John Doe",
                    email: "john@example.com",
                    plan: "Business"
                  }}
                  onLogout={() => {
                    window.location.href = "/platforms/cloudspace";
                  }}
                />
              } />
              <Route path="/platforms/cloudspace/admin" element={
                <AdminDashboard 
                  admin={{
                    name: "Admin User",
                    email: "admin@cloudspace.com",
                    role: "Super Admin"
                  }}
                  onLogout={() => {
                    window.location.href = "/platforms/cloudspace";
                  }}
                />
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "@/components/theme-provider";
// import Index from "./pages/Index";
// import EduSpaceDemo from "./pages/EduSpaceDemo";
// import NotFound from "./pages/NotFound";
// import EduSpacePlatform from "./components/platforms/eduspace/EduSpacePlatform";
// import HealthSpacePlatform from "./components/platforms/healthspace/HealthSpacePlatform";
// import AgriSpacePlatform from "./components/platforms/agrispace/AgriSpacePlatform";
// import TradeSpacePlatform from "./components/platforms/tradespace/TradeSpacePlatform";
// import GovSpacePlatform from "./components/platforms/govspace/GovSpacePlatform";
// import CloudSpacePlatform from "./components/platforms/cloudspace/CloudSpacePlatform";
// import CloudSpaceDashboard from "./components/platforms/cloudspace/CloudSpaceDashboard";
// import AdminDashboard from "./components/platforms/cloudspace/admin/AdminDashboard";


// const queryClient = new QueryClient();

// const App = () => {
//   // Check if the user arrived via the dedicated subdomain
//   const isEduSpaceSubdomain = window.location.hostname === "eduspace.mzatinova.com";

//   return (
//     <ThemeProvider defaultTheme="dark">
//       <QueryClientProvider client={queryClient}>
//         {/* <AuthProvider> */}
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <Routes>
//               {/* If on the subdomain, serve EduSpace at the root path, otherwise show main Index */}
//               {/* <Route 
//                 path="/" 
//                 element={isEduSpaceSubdomain ? <EduSpaceLanding /> : <Index />} 
//               /> */}
//               <Route path="/" element={isEduSpaceSubdomain ? <EduSpacePlatform /> : <Index />} />
              
//               <Route path="/eduspace-demo" element={<EduSpaceDemo />} />
              
             
//               {/* <Route path="/platforms/eduspace" element={<EduSpaceLanding />} /> */}
//               <Route path="/platforms/eduspace" element={<EduSpacePlatform />} />
//                <Route path="/platforms/healthspace" element={<HealthSpacePlatform />} /> 
//                <Route path="/platforms/agrispace" element={<AgriSpacePlatform />} />
//                <Route path="/platforms/tradespace" element={<TradeSpacePlatform />} />
//                <Route path="/platforms/govspace" element={<GovSpacePlatform />} />
//                <Route path="/platforms/cloudspace" element={<CloudSpacePlatform />} />
             
// <Route path="/platforms/cloudspace/dashboard" element={
//   <CloudSpaceDashboard 
//     user={{
//       name: "John Doe",
//       email: "john@example.com",
//       plan: "Business"
//     }}
//     onLogout={() => {
//       // Handle logout - redirect to login or home
//       window.location.href = "/platforms/cloudspace";
//     }}
//   />
// } />

// <Route path="/platforms/cloudspace/admin" element={
//   <AdminDashboard 
//     admin={{
//       name: "Admin User",
//       email: "admin@cloudspace.com",
//       role: "Super Admin"
//     }}
//     onLogout={() => {
//       window.location.href = "/platforms/cloudspace";
//     }}
//   />
// } />
              
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </TooltipProvider>
//         {/* </AuthProvider> */}
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
// import EduSpaceDemo from "./pages/EduSpaceDemo";
// import NotFound from "./pages/NotFound";
// // import { AuthProvider } from "./contexts/AuthContext";
// import EduSpaceLanding from "./components/platforms/eduspace/EduSpaceLanding";

// const queryClient = new QueryClient();

// const App = () => (
//   <ThemeProvider defaultTheme="dark">
//     <QueryClientProvider client={queryClient}>
//         {/* <AuthProvider> */}
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/eduspace-demo" element={<EduSpaceDemo />} />
//             <Route path="/platforms/eduspace" element={<EduSpaceLanding />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//       {/* </AuthProvider> */}
//     </QueryClientProvider>
//   </ThemeProvider>
// );

// export default App;
