import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './EditComment.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import EditCommentForm from './EditCommentForm';
import {dreamwayApi} from './apiConfig.js'
function EditComment(props) {
    const [comment, setComment] = useState([]);
    const [input, setInput]=useState({content: ""})
    let postId = props.match.params.postid; 
    let commentId=props.match.params.commentid; 
    console.log(postId)
    
   
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`${dreamwayApi}comments/${commentId}`);
            console.log("Ideas - useEffect - response", response);
            setComment(response.data);
            setInput({content: response.data.content})
          } catch (err) {
            console.error(err);
          }
        };  
        makeAPICall();
      }, [])

      
      
      const handleChange = (event) => {
        setInput({
            ...input, 
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault(); 
        axios({
            url: `${dreamwayApi}comments/${commentId}`,
            method: "PUT",
            data: input 
          })
          props.history.push(`/Forum/Feed/Post/${postId}`)
          window.location.reload()
    }
    let commentEdit;

    if (props.loggedInStatus != "LOGGED_IN" || props.user.id !== comment.user_id) {
        commentEdit = (
            <div> 
                <p> 404: Sorry, we have no record of this comment belonging to you. We suspect murlocs are behind it. 
                    <br /> 
                    Your session may have also expired. 
                    Try logging in to edit a comment from your Dashboard's post history, or from the forum feed. 
                </p>
                <a href="/" >  Login to portal.  </a>
            </div>
        )
         } else if (props.user && props.user.id == comment.user_id) {
        commentEdit = (
            <>
            {props.user.avatar.length > 2 ? 
          <img src={props.user.avatar} alt="avatar" /> :
           <img src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1597366961/Screen_Shot_2020-08-13_at_9.02.19_PM_ominua.png" />
        }
            {props.user.nickname.length > 2 ? 
            <p> {props.user.nickname} </p> :
            <p> Anonymous Druid </p>    
        } 
            <EditCommentForm
                comment={input}
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
        <h1> Edit Comment </h1>
        {commentEdit}
        </div>
        </>
    )
}

export default EditComment  