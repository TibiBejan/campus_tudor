import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import FAQSection from '../components/FAQPageComponents/FAQSection/FAQSection';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, questionsData } from '../data/FAQPageData';

function FAQ() {
    return (
        <>
            <HeaderBannerSmall bannerData={ bannerData } bannerImage={ bannerData.image.default }/>
            <main className="page-content">
                <FAQSection sectionData={ questionsData }/>
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default FAQ;
