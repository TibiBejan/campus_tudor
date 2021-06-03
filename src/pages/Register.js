import React from 'react';

// COMPONENTS
import UserAccountBanner from '../components/UserAccountComponents/UserAccountBanner/UserAccountBanner';
import RegisterFormWrapper from '../components/UserAccountComponents/RegisterFormWrapper/RegisterFormWrapper';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

const data = {
    isLoginPage: false,
    subtitle: "Register and join our family."
}

function Register() {
    return (
        <>
            <main className="page-content">
                <UserAccountBanner sectionData={data}/>    
                <RegisterFormWrapper />
                <StatsSection />
            </main>   
            <Footer />
        </>
    )
}

export default Register;
