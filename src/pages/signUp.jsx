import React, { useState } from 'react';
import HomePageLayout from "../components/homePageLayout";
import '../styles/signUp.css';
import logo from '../assets/logo.png';

const SignUp = () => {

    const handleButtonClick = (page) => {
        if (page === 'buyer') {
            window.location.href = '/signup/buyer';
        } else if (page === 'seller') {
            window.location.href = '/signup/seller';
        }
    }

    const handleLogoPress = () => {
        window.location.href = "/";
    }
    
    return (
        <div className='signUpPage'>
        <div className='topBar'>
            <img src={logo} alt="Logo" className='logo' onClick={handleLogoPress}/>
        </div>
        <div className='signUp'>
            <h3>Welcome to the Fuel Exchange</h3>
            <h3>Are you a Buyer or a Seller?</h3>
            <div className='signUpButtons'>
                <button className='buyerButton' onClick={() => handleButtonClick('buyer')}>I am a Buyer</button>
                <button className='sellerButton' onClick={() => handleButtonClick('seller')}>I am a Seller</button>
            </div>
            <p>Already have an account? <a href='/login'>Sign In</a></p>
        </div>
        </div>
    );
};

export default SignUp;