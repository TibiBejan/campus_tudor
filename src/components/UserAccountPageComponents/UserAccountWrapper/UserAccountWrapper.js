import React from 'react';
import UserLogin from '../UserLoginWrapper/UserLogin';
import './UserAccountWrapper.scss';

function UserAccountWrapper() {
    return (
        <section className="user-account-wrapper">
            <div className="user-account-wrapper-inner">
               <UserLogin />
            </div>
        </section>
    )
}

export default UserAccountWrapper;
