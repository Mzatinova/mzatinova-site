import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/contact/Contact";
import Support from "./pages/support/Support";
// import ProductsPage from "./pages/ProductsPage";
import ScrollToTop from "./components/ScrollToTop"; // <--- ADD THIS IMPORT
import ProductsPage from "./pages/products/ProductsPage";
import IndustriesPage from "./pages/industries/IndustriesPage";
import ServicesPage from "./pages/services/ServicesPage";
import CompanyPage from "./pages/company/CompanyPage";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop /> {/* <--- ADD THIS LINE HERE */}
          <Routes>
            {/* Main Home Page */}
            <Route path="/" element={<Index />} />

            {/* Full Pages */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/Services" element={<ServicesPage />} />
            <Route path="/Company" element={<CompanyPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "@/components/theme-provider";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import Contact from "./pages/contact/Contact";
// import BranchesShowcase from "./components/BranchesShowcase";
// import Support from "./pages/support/Support";

// const queryClient = new QueryClient();

// const App = () => (
//   <ThemeProvider defaultTheme="dark">
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="ProductsPage/" element={<Index />} />
//             <Route path="IndustriesPage/" element={<Index />} />
//             <Route path="ServicesPage/" element={<Index />} />
//             <Route path="CompanyPage/" element={<Index />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/support" element={<Support />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   </ThemeProvider>
// );

// export default App;
