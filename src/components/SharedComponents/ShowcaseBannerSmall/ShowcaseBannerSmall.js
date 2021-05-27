import React from 'react';
import './ShowcaseBannerSmall.scss';

function ShowcaseBannerSmall({ bannerData, bannerImage }) {
    return (
        <div className="showcase-banner-small">
            <div className="showcase-banner-small-media">
                {/* <img src={bannerImage} alt="" className="background-image" /> */}
            </div>
            <div className="showcase-banner-small-content">
                <div className="content-heading-wrapper">
                    <div className="heading-wrapper-line">
                        <h1 className="heading-one">{bannerData.title}</h1>
                    </div>
                </div>
                <div className="paragraph-wrapper">
                    <p className="paragraph-showcase">{bannerData.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseBannerSmall;
