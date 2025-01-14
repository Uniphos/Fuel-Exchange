import React, { useState, useEffect } from "react";
import "../../styles/infoOp.css";
import { supabase } from '../supaBaseClient';
import client from '../AWSdatabase'
import { useMutation, useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
    query GET_POSTS($_neq: uuid!) {
      posting_list(where: {posting_list_id: {_neq: $_neq}}) {
        fuel_name
        trial_amount
        contract
        origin
        posting_list_id
      }
    }
`;

const GET_INFO = gql`
    query GET_INFO($activeID: uuid!) {
      posting_list(where: {posting_list_id: {_eq: $activeID}}) {
        account_email
        contract
        created_at
        description
        fuel_name
        max_price
        max_quantity
        min_price
        min_quantity
        origin
        posting_list_id
        trial_amount
        user_id
      }
    }
`;

const InfoOp = ({ Id }) => {
    const [activeID, setActiveID] = useState(Id); // Correctly initialize state
    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState([]);

    const fetchPosts = async () => {
        if (!activeID) {
            console.error("activeID is undefined");
            return;
        }

        try {
            const result = await client.query({
                query: GET_POSTS,
                variables: { _neq: activeID }
            });
            setPosts(result.data.posting_list);
            console.log(result.data.posting_list[0]);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }

        try {
            const result = await client.query({
                query: GET_INFO,
                variables: { activeID },
            });
            setInfo(result.data.posting_list[0]);
            console.log(result.data.posting_list[0]);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [activeID]);

    const handleClick = (event) => {
        setActiveID(event.currentTarget.id);
    };

    return (
        <div className="oilInfo">
            <div className="topInfo">
                <div>
                    <div className="infoRow">
                        <h1>{info.fuel_name}:</h1> 
                        <p>Platts +12</p>
                    </div>
                    <div className="description">
                        <p>Contract: {info.contract}</p>
                        <p>Trial amount: {info.trial_amount} </p>
                        <p>Origin: {info.origin} </p>
                    </div>
                </div>
                <button className="startOrder">Start order</button>
            </div>
            <div className="bottomInfo">
            <div className="infoDiscrp">
                <p>Description</p>
                <p>{info.description}</p>
            </div>
            <div className="order">
                <p>Name your order</p>
                <div className="orderDis">
                    <form className="orderDis">
                        <select id="Qty" name="Qty">
                            <option value="Qty">Qty</option>
                        </select>
                        <input type="text" id="maxPrice" name="maxPrice" placeholder="Max Price"/>
                        <input type="text" id="minPrice" name="minPrice" placeholder="Min Price"/>
                        <select id="location" name="location">
                            <option value="location">Port of delivery</option>
                        </select>
                    </form>
                </div>
            </div>
            </div>
            <div className="moreOptions">
                <div className="homeOpContainer">
                {posts.map((post, index) => (
                    <div className="homeOpItem" key={index} id={post.posting_list_id} onClick={handleClick}>
                        <h1>{post.fuel_name}</h1>
                        <div className="description">
                            <p>Contract: {post.contract}</p>
                            <p>Trial amount: {post.trial_amount}</p>
                            <p>Origin: {post.origin}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default InfoOp;