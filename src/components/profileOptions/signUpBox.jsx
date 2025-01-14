import React, { useState, useEffect } from 'react';
import "../../styles/profileOptions/profileInfo.css";
import "../../styles/buyerProfile/buyerSignUp.css";
import client from '../AWSdatabase'
import { ADD_ACCOUNT } from '../addAccount';
import { useMutation, useQuery, gql } from '@apollo/client';
import { ADD_BANK } from '../addBank';
import { ADD_TOKEN} from '../addToken';
import { supabase } from '../supaBaseClient';
import generateToken from '../genTokens';

const GET_ID = gql`
  query getID($email: String!) {
    account_information(where: { email: { _eq: $email } }) {
      user_id
    }
  }
`;

const DELETE_ACCOUNT = gql`
  mutation deleteAccount($_eq: String!) {
    delete_account_information(where: {email: {_eq: $_eq}}) {
      affected_rows
    }
  }
`;

const DELETE_BANK = gql`
  mutation deleteBank($_eq: String!) {
    delete_bank_information(where: {email: {_eq: $_eq}}) {
      affected_rows
    }
  }
`;

const ProfileInfo = ({user}) => {
    const [accountData, setAccountData] = useState({
        username: "",
        email: "",
        account_manager_name: "",
        account_type: user,
        company_address: "",
        company_name: "",
        created_at: "",
        passport_expiry_date: "",
        passport_image: "",
        passport_issue_date: "",
        passport_number: "",
        password: "",
        tax_number: "",
        telephone_number: "",
        title: "",
        user_id: "",
        chat_token: "",
      });

      const [bankData, setBankData] = useState({
        bank_name: "",
        account_name: "",
        account_number: "",
        account_email: "",
        swift_code: "",
        iban: "",
        bank_phone_number: "",
        bank_email: "",
        user_id: " "
        });

        const getSession = async () => {
                const { data: { session } } = await supabase.auth.getSession();
                console.log(session);
            };
        useEffect(() => {
          getSession();
        }, []);


        const changeBankData = async () => {
          const userIdResult = await client.query({
            query: GET_ID,
            variables: { email: accountData.email },
          });
        
          const updatedBankData = {
            ...bankData,
            user_id: userIdResult.data.account_information[0].user_id,
            account_email: accountData.email,
          };
        
          setBankData(updatedBankData); // Update the state for UI consistency
          return updatedBankData; // Return the updated value for immediate use
        };
        
        const validateEmail = (email) => {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(String(email).toLowerCase());
        };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission


        // Validate email
        if (!validateEmail(accountData.email)) {
          alert('Invalid email address');
          return; // Exit the function early
        }
        // Add the account data to the database
        try {
          const result = await client.mutate({
            mutation: ADD_ACCOUNT,
            variables: { ...accountData }
          });
        } catch (err) {
          alert('Error adding account details');
          return;
        }
        
        // Add the bank data to the database
        try {
            const updatedBankData = await changeBankData();
            const bankResult = await client.mutate({
              mutation: ADD_BANK,
              variables: { ...updatedBankData }, // Use the updated data directly
            });
          } catch (err) {
            alert('Error adding bank details');
            await client.mutate({
              mutation: DELETE_ACCOUNT,
              variables: { _eq: accountData.email },
            });
            return;
          }

          //supabase sign up
          try {
            const { data, error } = await supabase.auth.signUp({
              email: accountData.email,
              password: accountData.password,
            });
          
            if (error) {
              alert(`Error signing up user: ${error.message}`);
              await client.mutate({
                mutation: DELETE_ACCOUNT,
                variables: { _eq: accountData.email },
              })
              await client.mutate({
                mutation: DELETE_BANK,
                variables: { _eq: accountData.email },
              })
              return;
            }
          
            const userIdResult = await client.query({
              query: GET_ID,
              variables: { email: accountData.email },
            });

            alert('User signed up successfully!');
            const { data : { session }, error: sessionError } = await supabase.auth.signInWithPassword({
              email: accountData.email,
              password: accountData.password,
              });

            if (sessionError) {
              throw sessionError;
            }else{
              window.location.href = '/Fuel-Exchange/#/profile/' + userIdResult.data.account_information[0].user_id;
            }
          } catch (error) {
            alert(`Unexpected error: ${error.message}`);
            await client.mutate({
              mutation: DELETE_ACCOUNT,
              variables: { _eq: accountData.email },
            })
            await client.mutate({
              mutation: DELETE_BANK,
              variables: { _eq: accountData.email },
            })
            return;
          }
        
          
      };

    
      const handleAccountChange = (e) => {
        const { name, value } = e.target;
        setAccountData((accountData) => ({
          ...accountData,
          [name]: value
        }));
      };

      const handleEmailChange = (e) => {
        setAccountData({
            ...accountData,
            email: e.target.value.toLowerCase()
        });
    };
        const handleBankChange = (e) => {
            const { name, value } = e.target;
            setBankData((bankData) => ({
              ...bankData,
              [name]: value
            }));
          };

    return (
        <div className='mainProfile'>
            <form onSubmit={handleSubmit}>
                <div className='entryInfo'>
                        <label >Account Manager Name</label>
                        <input type='text' id='account_manager_name' name='account_manager_name' value={accountData.account_manager_name} onChange={handleAccountChange} required/>
                        <label >Username</label>
                        <input type='text' id='username' name='username' value={accountData.username} onChange={handleAccountChange} required/>
                        <label >Email</label>
                        <input type='text' id='email' name='email' value={accountData.email} onChange={handleEmailChange} required/>
                        <label >Password</label>
                        <input type='text' id='password' name='password' value={accountData.password} onChange={handleAccountChange} required/>
                </div>
                <h4>Corporate Information</h4>
                <div className='corporateInfo'>
                    <div className='textInfo'>
                            <label >Company Name</label>
                            <input type='text' id='company_name' name='company_name' value={accountData.company_name} onChange={handleAccountChange} required/>
                            <label >Company Address</label>
                            <input type='text' id='company_address' name='company_address' value={accountData.company_address} onChange={handleAccountChange} required/>
                            <label >Telephone Number</label>
                            <input type='text' id='telephone_number' name='telephone_number' value={accountData.telephone_number} onChange={handleAccountChange} required/>
                            <label >Tax Number</label>
                            <input type='text' id='tax_number' name='tax_number' value={accountData.tax_number} onChange={handleAccountChange} required/>
                            {/* <label >Authorized Person</label>
                            <input type='text' id='authorized_person' name='authorized_person' value={accountData.authorized_person} onChange={handleAccountChange} required/>
                            */}
                            <label >Title</label>
                            <input type='text' id='title' name='title' value={accountData.title} onChange={handleAccountChange} required/>
                            <label >Passport Number</label>
                            <input type='text' id='passport_number' name='passport_number' value={accountData.passport_number} onChange={handleAccountChange} required/>
                            <label >Passport Issue Date</label>
                            <input type='text' id='passport_issue_date' name='passport_issue_date' placeholder='YYYY-MM-DD' value={accountData.passport_issue_date} onChange={handleAccountChange} required/>
                            <label >Passport Expiry Date</label>
                            <input type='text' id='passport_expiry_date' name='passport_expiry_date' placeholder='YYYY-MM-DD' value={accountData.passport_expiry_date} onChange={handleAccountChange} required/>
                    </div>
                    <div className='addImage'>
                        <label >Passport Image</label>
                        <input type='file' id='passport_image' name='passport_image' value={accountData.passport_image} onChange={handleAccountChange}/>
                    </div>
                </div>
                <h4>Bank Information</h4>
                <div className='bankInfo'>
                        <label >Bank Name</label>
                        <input type='text' id='bankName' name='bank_name' value={bankData.bank_name} onChange={handleBankChange} required/>
                        <label >Account Name</label>
                        <input type='text' id='accountName' name='account_name' value={bankData.account_name} onChange={handleBankChange} required/>
                        <label >Account Number</label>
                        <input type='text' id='accountNumber' name='account_number' value={bankData.account_number} onChange={handleBankChange} required/>
                        <label >SWIFT Code</label>
                        <input type='text' id='swiftCode' name='swift_code' value={bankData.swift_code} onChange={handleBankChange} required/>
                        <label >IBAN</label>
                        <input type='text' id='iban' name='iban' value={bankData.iban} onChange={handleBankChange} required/>
                        <label >Bank Phone Number</label>
                        <input type='text' id='bankPhoneNumber' name='bank_phone_number' value={bankData.bank_phone_number} onChange={handleBankChange} required/>
                        <label >Bank Email</label>
                        <input type='text' id='bankEmail' name='bank_email' value={bankData.bank_email} onChange={handleBankChange} required/>
                </div>
                <div className='button'>
                    <div className='buttonRow'>
                    <input type='checkbox' id='terms' name='terms' required />
                    <label >I accept the terms and conditions</label>
                    </div>
                    <button type='submit' >Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileInfo;