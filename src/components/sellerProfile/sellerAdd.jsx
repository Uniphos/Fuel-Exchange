import React, { useState, useEffect } from 'react';
import "../../styles/sellerProfile/sellerAdd.css";
import { CREATE_POSTING } from '../createPosting';
import { useMutation, useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { supabase } from '../supaBaseClient';
import client from '../AWSdatabase'

const GET_ID = gql`
  query getID($email: String!) {
    account_information(where: { email: { _eq: $email } }) {
      user_id
    }
  }
`;

const SellerHome = () => {
    const { id } = useParams();
    const [listing, setListing] = useState({
        account_emaill: "",
        contract: "",
        description: "",
        fuel_name: "",
        max_price: "",
        max_quantity: "",
        min_price: "",
        min_quantity: "",
        origin: "",
        trial_amount: "",
        user_id: id
    });

    const getAccountEmail = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setListing((prevListing) => ({
            ...prevListing,
            account_email: session.user.email
        }));
    }

    useEffect(() => {
        getAccountEmail();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await client.mutate({
                mutation: CREATE_POSTING,
                variables: { ...listing }
              });
        } catch (error) {
            console.error(error);
        }

        window.location.reload();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListing((prevListing) => ({
            ...prevListing,
            [name]: value
        }));
    }

    return (
        <div className='addListing'>
            <p>Add Listing</p>
            <form onSubmit={handleSubmit}>
                <div className='mainListingInfo'>
                    <div className='formItems'>
                        <label>Fuel name:</label>
                        <input type="text" name="fuel_name" id='fuel_name' value={listing.fuel_name} onChange={handleChange} />
                        <label>Trial Amount:</label>
                        <input type="text" name="trial_amount" id='trial_amount' value={listing.trial_amount} placeholder="Optional" onChange={handleChange} />
                        <label>Contract:</label>
                        <input type="text" name="contract" value={listing.contract} id='contract' onChange={handleChange} />
                        <label>Origin:</label>
                        <input type="text" name="origin" id='origin' value={listing.origin} onChange={handleChange} />
                    </div>
                    <label>Description:</label>
                    <textarea name="description" id='description' value={listing.description} onChange={handleChange} cols="50" rows="5"></textarea>
                </div>
                <br/>
                <div className='otherDetails'>
                    <div className='otherDetailsForm'>
                        <label>Max Quantity:</label>
                        <input type="text" name="max_quantity" id='max_quantity' value={listing.max_quantity} onChange={handleChange} />
                        <label>Min Quantity:</label>
                        <input type="text" name="min_quantity" id='min_quantity' value={listing.min_quantity} onChange={handleChange} />
                        <label>Max Price:</label>
                        <input type="text" name="max_price" id='max_price' value={listing.max_price} onChange={handleChange} />
                        <label>Min Price:</label>
                        <input type="text" name="min_price" id='min_price' value={listing.min_price} onChange={handleChange} />
                    </div>
                </div>
                <div className='addSubmit'>
                    <button className='addBtn' type='submit'>Create Listing</button>
                </div>
            </form>
        </div>
    );
};

export default SellerHome;