import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary'
import { IconContext } from 'react-icons';
import { ImEye } from "react-icons/im";
import './UserLoginWrapper.scss'

function UserLogin() {

    // STATE
    const [ visiblePassword, setVisiblePassword ] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <div className="user-login-wrapper">
           <div className="user-login-inner">
                <div className="user-login-heading-wrapper">
                    <h3 className="user-login-title heading-three">Log In</h3>    
                </div>
                <form className="user-login-form" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="username" className="form-group-label label">Numele utilizatorului sau e-mail-ul dvs..*</label>
                        <input 
                            type="text" 
                            id="username" 
                            className="form-group-input"
                            name="username" 
                            {...register('username', { required: 'Username is required.' })}
                        />
                        {errors.username && (<ErrorMessageEl>{errors.username.message}</ErrorMessageEl>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-group-label label">Parola dvs..*</label>
                        <div className="input-wrapper">
                            <input 
                                type={visiblePassword ? "text" : "password"}
                                id="password" 
                                className="form-group-input"
                                name="password" 
                                {...register('password', { 
                                    required: 'Password is required.',
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    }
                                })}
                            />
                            <button type="button" onClick={() => setVisiblePassword(prevState => !prevState)} className="show-password-button">
                                <IconContext.Provider value={{size: '30px', color: visiblePassword ? '#464646' : '#fafafa'}}>
                                    <ImEye />
                                </IconContext.Provider>
                            </button>
                        </div>
                        {errors.password && (<ErrorMessageEl>{errors.password.message}</ErrorMessageEl>)}
                    </div>
                    <ButtonPrimary type="submit" textLabel="Conectare" />
                </form>
                <Link to="/login/forgot-password" className="link-wrapper">
                    <span className="link-wrapper-label label-medium">Forgot your password?</span>
                </Link>
            </div>     
        </div>
    )
}

export default UserLogin
