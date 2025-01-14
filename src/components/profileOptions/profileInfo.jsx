import React, { useState, useEffect } from 'react';
import "../../styles/profileOptions/profileInfo.css";
import { supabase } from '../supaBaseClient';
import client from '../AWSdatabase'
import { gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GENERAL_INFO = gql`
    query generalInfo($_eq: uuid!, $_eq1: uuid!) {
      account_information(where: {user_id: {_eq: $_eq1}}) {
        account_manager_name
        username
        email
        password
        company_name
        company_address
        telephone_number
        tax_number
        title
        passport_number
        passport_issue_date
        passport_expiry_date
      }
      banking_information(where: {user_id: {_eq: $_eq}}) {
        bank_name
        account_name
        account_number
        swift_code
        iban
        bank_phone_number
        bank_email
      }
    }
`;

const ProfileInfo = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);

    const fetchInfo = async () => {
        try {
            const { data } = await client.query({
                query: GENERAL_INFO,
                variables: { _eq: id, _eq1: id },
            });
            setInfo(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className='mainProfile'>
            <div className='profileContainer'>
                <div className='entryInfo'>
                    <h4>Account manager name</h4>
                    <p>{info?.account_information?.[0]?.account_manager_name || 'N/A'}</p>
                    <h4>Username</h4>
                    <p>{info?.account_information[0].username || 'N/A'}</p>
                    <h4>Email</h4>
                    <p>{info?.account_information[0].email || 'N/A'}</p>
                    <h4>Password</h4>
                    <p>{info?.account_information[0].password || 'N/A'}</p>
                </div>
                <h4>Corporate Information</h4>
                <div className='corpInfo'>
                    <h4>Company Name</h4>
                    <p>{info?.account_information[0].company_name || 'N/A'}</p>
                    <h4>Company Address</h4>
                    <p>{info?.account_information[0].company_address || 'N/A'}</p>
                    <h4>Telephone Number</h4>
                    <p>{info?.account_information[0].telephone_number || 'N/A'}</p>
                    <h4>Tax Number</h4>
                    <p>{info?.account_information[0].tax_number || 'N/A'}</p>
                    <h4>Title</h4>
                    <p>{info?.account_information[0].title || 'N/A'}</p>
                    <h4>Passport Number</h4>
                    <p>{info?.account_information[0].passport_number || 'N/A'}</p>
                    <h4>Passport Issue date</h4>
                    <p>{info?.account_information[0].passport_issue_date || 'N/A'}</p>
                    <h4>Passport Expiry date</h4>
                    <p>{info?.account_information[0].passport_expiry_date || 'N/A'}</p>
                </div>
                <h4>Bank Information</h4>
                <div className='bankInfo'>
                    <h4>Bank Name</h4>
                    <p>{info?.banking_information[0].bank_name || 'N/A'}</p>
                    <h4>Account Name</h4>
                    <p>{info?.banking_information[0].account_name || 'N/A'}</p>
                    <h4>Account Number</h4>
                    <p>{info?.banking_information[0].account_number || 'N/A'}</p>
                    <h4>SWIFT Code</h4>
                    <p>{info?.banking_information[0].swift_code || 'N/A'}</p>
                    <h4>IBAN</h4>
                    <p>{info?.banking_information[0].iban || 'N/A'}</p>
                    <h4>Bank Phone Number</h4>
                    <p>{info?.banking_information[0].bank_phone_number || 'N/A'}</p>
                    <h4>Bank Email</h4>
                    <p>{info?.banking_information[0].bank_email || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;