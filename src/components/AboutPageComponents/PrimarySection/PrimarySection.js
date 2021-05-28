import React from 'react';
import Marquee from '../../LayoutComponents/Marquee/Marquee';
import './PrimarySection.scss';

function PrimarySection() {
    return (
        <section className="primary-section">
            <div className="primary-section-inner"></div>
            <Marquee />
        </section>
    )
}

export default PrimarySection;
