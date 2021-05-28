import React from 'react';

// COMPONENTS
import PrimarySection from '../components/AboutPageComponents/PrimarySection/PrimarySection';
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

function About() {
    return (
        <>
            <main className="page-content">
                <PrimarySection />
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default About;
