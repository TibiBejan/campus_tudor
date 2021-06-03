import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';

import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall'
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData } from '../data/ResidenceHallsPageData';

function ResidenceHalls() {
    return (
        <>
            <HeaderBannerSmall bannerData={ bannerData } bannerImage={ bannerData.image.default } />  
            <main className="page-content">
                
                <ContactSectionSmall title="Pentru orice fel de sugestii sau nemulțumiri care ar ajuta la îmbunătăţirea serviciilor noastre vă rugăm să ne contactaţi"/>
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default ResidenceHalls;
