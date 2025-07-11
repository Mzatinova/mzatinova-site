import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';
import { BrowserRouter } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppProvider>
          <AppLayout />
        </AppProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Index />);

export default Index;