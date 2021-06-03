import React from 'react';

// COMPONENTS
import UserAccountBanner from '../components/UserAccountComponents/UserAccountBanner/UserAccountBanner';
import UserLoginWrapper from '../components/UserAccountComponents/UserLoginWrapper/UserLoginWrapper';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

const data = {
    isLoginPage: true,
    subtitle: "Don't have an account?"
}

function Login() {
    return (
        <>
            <main className="page-content">
                <UserAccountBanner sectionData={ data }/>
                <UserLoginWrapper />
                <StatsSection />
            </main>   
            <Footer />
        </>
    )
}

export default Login;
