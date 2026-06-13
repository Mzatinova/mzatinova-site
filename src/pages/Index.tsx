import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';


const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>mzatinova | software, cloud & ai solutions</title>
        <meta name="description" content="mzatinova is a malawi-based software, cloud, and artificial intelligence company building intelligent digital platforms for education, healthcare, agriculture, business, and financial services across africa." />
        <meta name="keywords" content="mzatinova, software development malawi, ai solutions malawi, school management system, eduspace, cloud services, artificial intelligence, technology company malawi" />
        <meta name="author" content="mzatinova" />
        <meta property="og:title" content="mzatinova | software, cloud & ai solutions" />
        <meta property="og:description" content="building intelligent digital platforms for education, healthcare, agriculture, business, and financial services across africa." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:site_name" content="mzatinova" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="mzatinova | software, cloud & ai solutions" />
        <meta name="twitter:description" content="building intelligent digital platforms for education, healthcare, agriculture, business, and financial services across africa." />
        <meta name="twitter:image" content="/og.jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "mzatinova",
              "url": "https://mzatinova.com",
              "logo": "https://mzatinova.com/logo.png",
              "description": "software, cloud and artificial intelligence company based in malawi.",
              "founder": {
                "@type": "Person",
                "name": "Wadi Mkweza"
              }
            }
          `}
        </script>
      </Helmet>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </>
  );
};

export default Index;


// import React from 'react';
// import AppLayout from '@/components/AppLayout';
// import { AppProvider } from '@/contexts/AppContext';

// const Index: React.FC = () => {
//   return (
//     <AppProvider>
//       <AppLayout />
//     </AppProvider>
//   );
// };

// export default Index;
