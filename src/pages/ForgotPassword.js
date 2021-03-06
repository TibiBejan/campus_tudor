import React from 'react';

// COMPONENTS
import UserAccountBanner from '../components/UserAccountComponents/UserAccountBanner/UserAccountBanner';
import ForgotPasswordSection from '../components/UserAccountComponents/ForgotPasswordWrapper/ForgotPasswordWrapper';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

const data = {
    isLoginPage: false,
    subtitle: "Register and join our family."
}

function ForgotPassword() {
    return (
        <>
            <main className="page-content">
                <UserAccountBanner  sectionData={ data }/> 
                <ForgotPasswordSection />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default ForgotPassword;
