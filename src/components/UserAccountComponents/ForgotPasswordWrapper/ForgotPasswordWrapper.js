import React from 'react';
import { useForm } from "react-hook-form";
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import './ForgotPasswordWrapper.scss';

function ForgotPasswordWrapper() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="forgot-password-section">
            <div className="forgot-password-section-inner">
                <div className="forgot-password-content">
                    <div className="forgot-password-paragraph-wrapper">
                        <p className="forgot-password-paragraph paragraph-quote-large">Forgot your password ? Please enter your username or email address. You will receive a link by email to create a new password.</p>
                    </div>
                    <form className="forgot-password-form" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="username" className="form-group-label label">Numele utilizatorului sau e-mail-ul dvs.*</label>
                            <input 
                                type="text" 
                                id="username" 
                                className="form-group-input"
                                name="username" 
                                {...register('username', { required: 'Username or e-mail is required.' })}
                            />
                            {errors.username && (<ErrorMessageEl>{errors.username.message}</ErrorMessageEl>)}
                        </div>
                        <ButtonPrimary type="submit" textLabel="Reset Password" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPasswordWrapper;
