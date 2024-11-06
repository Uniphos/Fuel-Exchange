import React from 'react';
import "../../styles/sellerProfile/sellerAdd.css";

const SellerHome = () => {
    return (
        <div className='addListing'>
            <p>Add Listing</p>
            <div className='mainListingInfo'>
                <form>
                    <div className='formItems'>
                        <label>Fuel name:</label>
                        <input type="text" name="fuel" />
                        <label>Trial Amount:</label>
                        <input type="text" name="tAmount" placeholder="Optional" />
                        <label>Contract:</label>
                        <input type="text" name="contract" />
                        <label>Origin:</label>
                        <input type="text" name="origin"/>
                    </div>
                    <label>Description:</label>
                    <textarea name="description" cols="50" rows="5"></textarea>
                </form>
            </div>

            <div className='otherDetails'>
                <form>
                    <label>Max Quantity:</label>
                    <input type="text" name="maxQuantity"/>
                    <label>Min Quantity:</label>
                    <input type="text" name="minQuantity"/>
                    <label>Max Price:</label>
                    <input type="text" name="maxPrice"/>
                    <label>Min Price:</label>
                    <input type="text" name="minPrice"/>
                </form>
            </div>
            
            <div className='addSubmit'>
                <p className='addBtn'>Create Listing</p>
            </div>
        </div>
    );
};

export default SellerHome;