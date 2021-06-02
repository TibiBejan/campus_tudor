import React from 'react';

// COMPONENTS
import UserAccountBanner from '../components/UserAccountPageComponents/UserAccountBanner/UserAccountBanner';
import ForgotPasswordSection from '../components/UserAccountPageComponents/ForgotPasswordSection/ForgotPasswordSection';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

function ForgotPassword() {
    return (
        <>
            <UserAccountBanner />
            <main className="page-content">
                <ForgotPasswordSection />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default ForgotPassword;
