import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './Post.css'
import { Link } from 'react-router-dom'
import { dreamwayApi } from './apiConfig';
import { useState, useEffect } from 'react';
import axios from 'axios'
function Post(props) {
    const [post, setPost] = useState([]);
    let postId=props.match.params.postid 
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`${dreamwayApi}/posts/${postId}`);
            console.log("Ideas - useEffect - response", response);
            setPost(response.data);
          } catch (err) {
            console.error(err);
          }
        };  
        makeAPICall();
      }, [])

      let commentsArray; 
      if (!post.comments)
      commentsArray = (
          <div> 
              <p>Loading...</p>
          </div>
      );
      else {
          if(!post.comments[0])
          commentsArray = (
            <div>
            <p>There are no comments for this post yet. Do you have a solution?</p>
          </div>
          );
      else {
      commentsArray = post.comments.map((comment)=> {
        return (
        <>
  <div class="card text-white bg-dark mb-3" >
  <div class="card-header">{comment.updated_at}</div>
  <div class="card-body">
  <h5 class="card-title">{comment.id}</h5>
  <p class="card-text">{comment.content}</p>
  </div>
  </div>
      </>
    ); 
      });
    }
      }
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Post </h1>
        </div>
        <div class="card text-white bg-dark mb-3" >
        <div class="card-header">{post.updated_at}</div>
        <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
         <p class="card-text">{post.content}</p>
        </div>
        </div>
        {commentsArray}
        </>
    )
}

export default Post 