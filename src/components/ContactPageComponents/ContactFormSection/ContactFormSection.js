import React from 'react';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import { useForm } from "react-hook-form";
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import './ContactFormSection.scss';

function ContactForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="contact-form-section">
            <div className="contact-form-section-inner">
                <div className="contact-form-section-heading">
                    <p className="contact-form-paragraph paragraph">Prin programare sau telefonic</p>
                    <h3 className="contact-form-title heading-three">Alegeți ora întâlnirii noastre la confortul dvs., în biroul nostru sau online.</h3>
                </div>
                <form className="contact-form-section-wrapper" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-block">
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
                                {...register('lastName', { 
                                    required: 'Last Name is required.',
                                    pattern: {
                                        value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                                        message: 'Last Name is not valid.'
                                    }
                                })}
                            />
                            {errors.lastName && (<ErrorMessageEl>{errors.lastName.message}</ErrorMessageEl>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber" className="form-group-label label">Telefonul dvs.*</label>
                            <input 
                                type="text" 
                                id="phoneNumber" 
                                className="form-group-input"
                                {...register('phoneNumber', { 
                                    required: 'Phone Number is required.',
                                    pattern: {
                                        value: /((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/,
                                        message: 'Phone Number is not valid.'
                                    }
                                 })}    
                            />
                            {errors.phoneNumber && (<ErrorMessageEl>{errors.phoneNumber.message}</ErrorMessageEl>)}
                        </div>
                    </div>
                    <div className="form-block">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-group-label label">Cum va decurge intâlnirea?*</label>
                            <div className="form-group-buttons">
                                <div className="radio-button-group">
                                    <label htmlFor="appointment" className="button-group-label label">
                                        <input 
                                            type="radio" 
                                            id="appointment" 
                                            value="appointment" 
                                            className="button-group-input"
                                            {...register('appointment', { required: 'Appointment type is required.' })}        
                                        />
                                        <div className="radio-button-el" />
                                        Fizic, cu programare
                                    </label>
                                </div>
                                <div className="radio-button-group">
                                    <label htmlFor="phone" className="button-group-label label">
                                        <input 
                                            type="radio" 
                                            id="phone" 
                                            value="phone" 
                                            className="button-group-input"
                                            checked
                                            {...register('appointment', { required: 'Appointment type is required.' })}        
                                        />
                                        <div className="radio-button-el" />
                                        Telefonic
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date" className="form-group-label label">Data dorită*</label>
                            <input 
                                type="date" 
                                id="date" 
                                className="form-group-input"
                                {...register('date', { required: 'Date is required.'})}       
                            />
                            {errors.date && (<ErrorMessageEl>{errors.date.message}</ErrorMessageEl>)}
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
                    </div>
                    <div className="form-block text-area-group">
                        <div className="form-group">
                            <label htmlFor="message" className="form-group-label label">Mesajul sau remarca dvs.*</label>
                            <textarea 
                                id="message" 
                                className="form-group-input text-area" 
                                placeholder="Describe your request"
                                {...register('message', { 
                                    required: 'Message is required.', 
                                })}      
                            />
                            {errors.message && (<ErrorMessageEl>{errors.message.message}</ErrorMessageEl>)}
                        </div>
                    </div>
                    <ButtonPrimary type="submit" textLabel="Stabiliți o întâlnire" />
                </form>
            </div>
        </section>
    )
}

export default ContactForm;
