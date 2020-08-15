import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './Post.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import CommentForm from './CommentForm';
import DeletePost from './DeletePost';
import DeleteComment from './DeleteComment';
import {dreamwayApi} from './apiConfig.js'
function Post(props) {
  console.log("Inside Post", props.user)
    const userDelete = props.user 
    const [post, setPost] = useState([]);
    let postId=props.match.params.postid 
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`${dreamwayApi}posts/${postId}`);
            console.log("Ideas - useEffect - response", response);
            setPost(response.data);
          } catch (err) {
            console.error(err);
          }
        };  
        makeAPICall();
      }, [])
      let displayChoice; 
    if (props.user) {
      if (!props.user.nickname) {
        displayChoice = "Anonymous Druid"
    } else {
         displayChoice = props.user.nickname
    }
  }
    let avatarChoice; 
    if (props.user) {
    if (!props.user.avatar || props.user.avatar == "") {
        avatarChoice = "https://res.cloudinary.com/dgmpgmo60/image/upload/v1597366961/Screen_Shot_2020-08-13_at_9.02.19_PM_ominua.png"
    } else if (props.user.avatar) {
        avatarChoice = props.user.avatar 
    }
  }
      
    let timeStamp; 
    if (post.updated_at) {
      const yearMonth = post.updated_at.slice(0,10)
      const clockData = post.updated_at.slice(11,16)
      timeStamp = (
        <>
          {yearMonth}
          {clockData}
        </>

      )
    }
    const [input, setInput]=useState({content: ""})
    

    const handleChange = (event) => {
        setInput({
            ...input, 
            [event.target.name]: event.target.value, 
        });
    };
    const dataInputThree={
        user_avatar: avatarChoice, 
        user_display: displayChoice
    }
    console.log("input test", dataInputThree)
    const handleSubmit = (event) => {
        console.log("submit", input)
        event.preventDefault(); 
        const dataInputTwo={
            ...input, 
            ...dataInputThree
        }
        
        axios({
            url: `${dreamwayApi}posts/${postId}/users/${props.user.id}/comments`,
            method: "POST",
            data: dataInputTwo
          })
          props.history.push(`/Forum/Feed/Post/${postId}`)
          window.location.reload()
    }
    let postCommentForm; 
    let editLinkPost;
    let editLinkComment;  
    let deletePost; 
    if (props.loggedInStatus === "NOT_LOGGED_IN") 
    postCommentForm = (
        <div> 
            <a href="/"> Please Log in to make a comment.</a>
        </div>
    ); 
    
      else {
        if (!props.user) 
        postCommentForm = (
            <div>
                <p> Loading... </p>
            </div>
        );
         else if (props.user) {
           
            postCommentForm = (
                <>
                <h4> {displayChoice}</h4>
                <img src={avatarChoice} />
                <CommentForm 
                comment={input}
                setInput={setInput}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
                </>
                )
                if (props.user.id === post.user_id)
                editLinkPost = (
                  <Link to={"/Forum/Feed/Post/Edit/" + postId} >
                    <button> Edit </button>
                  </Link> 
                );
                deletePost = (
                  <DeletePost 
                    postId={postId}
                    user={userDelete}
                    post={post}
                  />
                )
        }
    }
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
      let timeStampComment; 
        const yearMonthComment = comment.updated_at.slice(0,10)
      const clockDataComment = comment.updated_at.slice(11,16)
      timeStampComment = (
        <>
          {yearMonthComment}
          {clockDataComment}
        </>

      )
      if (props.user) {
        if (props.user.id === comment.user_id)
        editLinkComment = (
          <>
          <DeleteComment 
          comment={comment}
          user={props.user}
          post={post}
          />
          <Link to={"/Forum/Feed/Post/" + postId + "/Comment/Edit/" + comment.id} >
            <button> Edit </button>
          </Link> 
          </>
        );
      }
      return (
      <>
<div class="card text-white bg-dark mb-3" >
<div class="card-header">
<img src={comment.user_avatar} />
  {timeStampComment}</div>
  {editLinkComment}
<div class="card-body">
 
<h5 class="card-title">{comment.user_display}</h5>
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
        <div class="card-header">
          <img src={post.user_avatar} alt="avatar image" />
          {post.user_display}
          {editLinkPost}
          {deletePost}
          {timeStamp} </div>
        <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
         <p class="card-text">{post.content}</p>
        </div>
        </div>
        {commentsArray}
        <div>
        {postCommentForm}
        </div> 
        </>
    )
}

export default Post 