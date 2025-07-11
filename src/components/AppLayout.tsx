import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Hero from './Hero';
import Contact from './Contact';
import { AppProvider } from '@/contexts/AppContext';
import DigitalInstitutePage from '@/pages/institute/DigitalInstitutePage';
import StorePage from '@/pages/store/StorePage';
import { WishlistProvider } from '@/pages/store/StoreWishlistContext';
import StudioPage from '@/pages/studio/StudioPage';
import LabPage from '@/pages/labs/LabPage';
import AIPage from '@/pages/ai/AIPage';
import SupportPage from '@/pages/support/Support';
import StorePages from '@/pages/store/StorePages';
import InstitutePage from '@/pages/institute/InstitutePage';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
    </>
  );
};

const ComingSoon = ({ sectionName }: { sectionName: string }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          {sectionName} Coming Soon
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          We're working hard to bring you an amazing {sectionName.toLowerCase()} experience.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <WishlistProvider>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
            <Navigation />

            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/institute" element={<InstitutePage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/studio" element={<StudioPage />} />
                <Route path="/labs" element={<LabPage />} />
                <Route path="/ai" element={<AIPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="*" element={<ComingSoon sectionName="Page Not Found" />} />
              </Routes>
            </main>
            <Contact />
            <Footer />
          </div>
        </WishlistProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default AppLayout;