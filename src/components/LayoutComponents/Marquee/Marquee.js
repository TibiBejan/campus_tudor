import React from 'react';
import './Marquee.scss';

function Marquee() {

    const arr = [...Array(5).keys()];

    return (
        <div className="marquee-section">
            <div className="container-fluid">
                <div className="marquee">
                    <div className="marquee-content">

                        {arr.map((_, index) => (
                            <div className="marquee-content-label" key={`marquee-label-${index}`}>
                                <span className="marquee-text marquee-label">About</span>
                                <span className="marquee-line" />
                            </div>
                        ))}

                    </div>
                    <div className="marquee-content">

                        {arr.map((_, index) => (
                            <div className="marquee-content-label" key={`marquee-label-${index}`}>
                                <span className="marquee-text marquee-label">About</span>
                                <span className="marquee-line" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee;
