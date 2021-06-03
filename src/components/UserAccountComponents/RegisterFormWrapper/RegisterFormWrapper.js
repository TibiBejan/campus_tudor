import React from 'react';
import { useForm } from "react-hook-form";
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import './RegisterFormwrapper.scss';

function RegisterFormWrapper() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="register-form-section">
            <div className="register-form-section-inner">
                <div className="register-heading-wrapper">
                    <h3 className="register-title heading-three">Create an account</h3>    
                </div>              
                <form className="register-form" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="firstName" className="form-group-label label">Prenumele dvs.*</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            className="form-group-input"
                            name="firstName" 
                            {...register('firstName', { 
                                required: 'First Name is required.',
                                pattern: {
                                    value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                                    message: 'First Name is not valid.'
                                }
                            })}
                        />
                        {errors.firstName && (<ErrorMessageEl>{errors.firstName.message}</ErrorMessageEl>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="form-group-label label">Numele dvs.*</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            className="form-group-input"
                            name="lastName" 
                            {...register('lastName', { 
                                required: 'Lasr Name is required.',
                                pattern: {
                                    value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                                    message: 'Last Name is not valid.'
                                }
                            })}
                        />
                        {errors.firstName && (<ErrorMessageEl>{errors.firstName.message}</ErrorMessageEl>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-group-label label">Email-ul dvs.*</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-group-input"
                            {...register('email', { 
                                required: 'Email is required.',
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Email is not valid.'
                                }
                            })}       
                        />
                        {errors.email && (<ErrorMessageEl>{errors.email.message}</ErrorMessageEl>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-group-label label">Parola dvs.*</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="form-group-input"
                            {...register('password', { 
                                required: 'Password is required.',
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Password is not valid.'
                                }
                            })}       
                        />
                        {errors.email && (<ErrorMessageEl>{errors.email.message}</ErrorMessageEl>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2" className="form-group-label label">Reintroduceti parola dvs.*</label>
                        <input 
                            type="password" 
                            id="password2" 
                            className="form-group-input"
                            {...register('password2', { 
                                required: 'Password is required.',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long'
                                },
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Password is not valid.'
                                }
                            })}       
                        />
                        {errors.email && (<ErrorMessageEl>{errors.email.message}</ErrorMessageEl>)}
                    </div>
                    <ButtonPrimary type="submit" textLabel="Inregistreaza-te" />
                </form>
            </div>
        </section>
    )
}

export default RegisterFormWrapper;
