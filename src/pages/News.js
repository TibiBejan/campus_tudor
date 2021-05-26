import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import NewsSection from '../components/NewsPageComponents/NewsSection/NewsSection';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA AND MEDIA
import bannerImage from '../assets/images/CampusNews/campus-00009.jpg';

function News() {
    return (
        <>
            <HeaderBannerSmall bannerImage={bannerImage}/>
            <main className="page-content">
                <NewsSection />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default News;
