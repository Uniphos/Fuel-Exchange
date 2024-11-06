import React from 'react';
import "../../styles/profileOptions/profileInfo.css";
import "../../styles/buyerProfile/buyerSignUp.css";

const ProfileInfo = ({user}) => {
    const handleButtonClick = () => {
        if (user === "buyer") {
            window.location.href = "/buyerprofile";
        } else if (user === "seller") {
            window.location.href = "/sellerprofile";
        }
    }


    return (
        <div className='mainProfile'>
            <div className='entryInfo'>
                <form>
                    <label >Account Manager Name</label>
                    <input type='text' id='accountManager' name='accountManager' />
                    <label >Username</label>
                    <input type='text' id='username' name='username' />
                    <label >Email</label>
                    <input type='text' id='email' name='email' />
                    <label >Password</label>
                    <input type='text' id='password' name='password' />
                </form>
            </div>
            <h4>Corporate Information</h4>
            <div className='corporateInfo'>
                <div className='textInfo'>
                    <form>
                        <label >Company Name</label>
                        <input type='text' id='companyName' name='companyName' />
                        <label >Company Address</label>
                        <input type='text' id='companyAddress' name='companyAddress' />
                        <label >Telephone Number</label>
                        <input type='text' id='telephoneNumber' name='telephoneNumber' />
                        <label >Tax Number</label>
                        <input type='text' id='taxNumber' name='taxNumber' />
                        <label >Authorized Person</label>
                        <input type='text' id='authorizedPerson' name='authorizedPerson' />
                        <label >Title</label>
                        <input type='text' id='title' name='title' />
                        <label >Passport Number</label>
                        <input type='text' id='passportNumber' name='passportNumber' />
                        <label >Passport Issue Date</label>
                        <input type='text' id='passportIssueDate' name='passportIssueDate' />
                        <label >Passport Expiry Date</label>
                        <input type='text' id='passportExpiryDate' name='passportExpiryDate' />
                    </form>
                </div>
                <div className='addImage'>
                    <input type='file' id='passport' name='passport' />
                </div>
            </div>
            <h4>Bank Information</h4>
            <div className='bankInfo'>
                <form>
                    <label >Bank Name</label>
                    <input type='text' id='bankName' name='bankName' />
                    <label >Account Name</label>
                    <input type='text' id='accountName' name='accountName' />
                    <label >Account Number</label>
                    <input type='text' id='accountNumber' name='accountNumber' />
                    <label >SWIFT Code</label>
                    <input type='text' id='swiftCode' name='swiftCode' />
                    <label >IBAN</label>
                    <input type='text' id='iban' name='iban' />
                    <label >Bank Phone Number</label>
                    <input type='text' id='bankPhoneNumber' name='bankPhoneNumber' />
                    <label >Bank Email</label>
                    <input type='text' id='bankEmail' name='bankEmail' />
                </form>
            </div>

            <div className='button'>
                <div className='buttonRow'>
                <input type='checkbox' id='terms' name='terms' required />
                <label >I accept the terms and conditions</label>
                </div>
                <button type='submit' onClick={handleButtonClick}>Submit</button>
            </div>
        </div>
    );
};

export default ProfileInfo;