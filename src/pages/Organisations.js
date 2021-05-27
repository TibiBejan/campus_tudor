import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import OrganisationsSection from '../components/OrganisationsPageComponents/OrganisationsSection/OrganisationsSection';
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

const bannerData = {
    title: 'Organizații studențesti',
    description: 'La TUIASI studenții sunt implicați și în discuțiile legate de viitorul universității. Dincolo de procentele de reprezentativitate, respectiv 25% în structurile de conducere de la nivelul facultății sau a Senatului, la Universitatea Tehnică studenții au fost implicați în multe dintre proiectele majore care au schimbat felul în care arată, spre exemplu, campusul studențesc.'
}

function Organisations() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData}/>
            <main className="page-content">
                <OrganisationsSection />
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Organisations;
