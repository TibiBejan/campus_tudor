import React from 'react';

// COMPONENTS
import UserAccountBanner from '../components/UserAccountPageComponents/UserAccountBanner/UserAccountBanner';
import UserAccountWrapper from '../components/UserAccountPageComponents/UserAccountWrapper/UserAccountWrapper';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

function UserAccount() {
    return (
        <>  
            <UserAccountBanner />
            <main className="page-content">
                <UserAccountWrapper />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default UserAccount;
