import React from "react";
import { useState, useEffect } from "react";
import "../../styles/buyerProfile/buyerHome.css";
import { supabase } from '../supaBaseClient';
import client from '../AWSdatabase'
import { useMutation, useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
    query MyQuery {
      posting_list {
        fuel_name
        trial_amount
        contract
        origin
        posting_list_id
      }
    }
`;
const HomeOp = ({ setPageOptions, setIDOption }) => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const result = await client.query({
            query: GET_POSTS
        });
        setPosts(result.data.posting_list);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleClick = (event) => {
        console.log(event.currentTarget.id);
        const id = event.currentTarget.id;
        setIDOption(id);
        setPageOptions("info");

    };

    return (
        <div className="homeOp">
            <form className="filter">
                <input type="text" placeholder="Search" className="search" />
                <input type="submit" value="filter" className="filterBtn"/>
            </form>
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
    );
};

export default HomeOp;