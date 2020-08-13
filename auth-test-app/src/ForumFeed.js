import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './ForumFeed.css'
import { Link } from 'react-router-dom'
import { dreamwayApi } from './apiConfig';
import { useState, useEffect } from 'react';
import axios from 'axios'

function ForumFeed(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`${dreamwayApi}/posts`);
            console.log("Ideas - useEffect - response", response);
            setPosts(response.data);
          } catch (err) {
            console.error(err);
          }
        };  
        makeAPICall();
      }, [])
      const postArray = posts.map((post)=> (
          <>
    <div class="card text-white bg-dark mb-3" >
    <div class="card-header">{post.updated_at}</div>
    <div class="card-body">
    <Link to={"/Forum/Feed/Post/" + post.id} >
    <h5 class="card-title">{post.title}</h5>
    </Link> 
    <p class="card-text">{post.content}</p>
    </div>
    </div>
        </>
      ))
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Forum Feed </h1>
        {postArray}
        </div>
       
        
        </>
    )
}

export default ForumFeed