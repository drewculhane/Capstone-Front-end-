import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './EditPost.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import EditPostForm from './EditPostForm';
import {dreamwayApi} from './apiConfig.js'
function EditPost(props) {
    const [post, setPost] = useState({});
    const [input, setInput]=useState({title: "", content: ""})
    let postId=props.match.params.postid; 
    console.log(postId)
    
   
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`${dreamwayApi}posts/${postId}`);
            console.log("Ideas - useEffect - response", response);
            setPost(response.data);
            setInput({title: response.data.title, content: response.data.content});
          } catch (err) {
            console.error(err);
          }
        };  
        makeAPICall();
      }, [])

      
      
      console.log("post state", post)
      const handleChange = (event) => {
        setInput({
            ...input, 
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault(); 
        axios({
            url: `${dreamwayApi}posts/${postId}`,
            method: "PUT",
            data: input 
          })
          props.history.push(`/Forum/Feed/Post/${postId}`)
          window.location.reload()
    }
    let postEdit; 
    console.log("log in user id", props.user.id)
    console.log("post id", post)

    if (props.loggedInStatus != "LOGGED_IN" || props.user.id !== post.user_id) {
        postEdit = (
            <div> 
                <p> 404: Sorry, we have no record of this post belonging to you. We suspect murlocs are behind it. 
                    <br /> 
                    Your session may have expired. 
                    Try logging in to edit a post from your Dashboard's post history, or from the forum feed. 
                </p>
                <a href="/" >  Login to portal.  </a>
            </div>
        )
         } else if (props.user && props.user.id == post.user_id) {
        postEdit = (
            <>
            {props.user.avatar.length > 2 ? 
          <img src={props.user.avatar} alt="avatar" /> :
           <img src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1597366961/Screen_Shot_2020-08-13_at_9.02.19_PM_ominua.png" />
        }
            {props.user.nickname.length > 2 ? 
            <p> {props.user.nickname} </p> :
            <p> Anonymous Druid </p>    
        } 
            <EditPostForm
                post={input}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
                </>
        )
        }
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Edit Post </h1>
        {postEdit}
        </div>
        </>
    )
}

export default EditPost 