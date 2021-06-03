import React from 'react';
import { Link } from 'react-router-dom';
import './UserAccountBanner.scss';

function UserAccountBanner({ sectionData }) {
    return (
        <div className="user-account-banner">
            <div className="user-account-banner-content">
                <div className="content-heading-wrapper">
                    <h1 className="content-heading-title heading-one">Portalul utilizatorului</h1>
                </div>
                <div className="content-subtitle-wrapper">
                    <h3 className="content-subtitle heading-three">{sectionData.subtitle}</h3>
                    <Link to={sectionData.isLoginPage ? '/register' : '/login'} className="content-link-wrapper">
                        <span className="content-link-label label-large">{sectionData.isLoginPage ? 'Register' : 'Log In'}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserAccountBanner;
