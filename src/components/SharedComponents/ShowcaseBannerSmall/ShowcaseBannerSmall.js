import React from 'react';
import './ShowcaseBannerSmall.scss';

function ShowcaseBannerSmall({ bannerImage }) {
    return (
        <div className="showcase-banner-small">
            <div className="showcase-banner-small-media">
                {/* <img src={bannerImage} alt="" className="background-image" /> */}
            </div>
            <div className="showcase-banner-small-content">
                <div className="content-heading-wrapper">
                    <div className="heading-wrapper-line">
                        <h1 className="heading-one">Campus News</h1>
                    </div>
                </div>
                <div className="paragraph-wrapper">
                    <p className="paragraph-showcase">Studenții Politehnicii ieșene învață să manipuleze întreaga lume din jurul lor: o dezmembrează și o remodelează după chipul și îndrăzneala fiecărei generații. Cele 11 facultăți nu sunt fortărețe individuale, ci felii dintr-un „quattro stagioni” gustos – se completează în compoziție și arome. O să descoperiți asta în campus, în proiectele asociațiilor studențești și la toate evenimentele #TUIASI.</p>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseBannerSmall;
