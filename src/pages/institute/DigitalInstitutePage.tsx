import React from 'react';
import InstituteHeroSection from './InstituteHeroSection';
import InstituteNavigation from './InstituteNavigation';
import InstituteLearningPaths from './InstituteLearningPaths';
import InstituteAIAppBuilder from './InstituteAIAppBuilder';
import InstituteDeviceLoan from './InstituteDeviceLoan';
import InstituteCert from './InstituteCert';
// import HeroSection from './HeroSection';
// import LearningPaths from './LearningPaths';
// import CertificationSection from './CertificationSection';
// import DeviceLoan from './DeviceLoan';
// import Footer from './Footer';

// import Header from './Header';
// import Navigation from './Navigation';
// import AIAppBuilder from './AIAppBuilder';

const DigitalInstitutePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* <Header /> */}
            <InstituteNavigation isOpen={false} onToggle={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <InstituteHeroSection />
            <InstituteLearningPaths />
            <InstituteAIAppBuilder />
            <InstituteDeviceLoan />
            <InstituteCert />



        </div>
    );
};

export default DigitalInstitutePage;