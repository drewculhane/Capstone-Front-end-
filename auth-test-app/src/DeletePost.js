import axios from "axios";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import {dreamwayApi} from './apiConfig.js'
function DeletePost (props, {post}) {
    let userId; 
  if (props.user) {
  userId = props.user.id 
  }
  
  const [isDeleted, setIsDeleted] = useState(false);
  const destroy = async (link) => {
    await axios({
      url: `${link}`,
      method: "DELETE",
    });
    setIsDeleted(true);
    console.log(isDeleted);
  };

  const handleClick = async (e) => {
    const postId = props.postId;
    const url = `${dreamwayApi}posts/${postId}`;
    await destroy(url);
    window.location = "/Forum/Feed";
  };

  if (userId == props.post.user_id) {
    return (
      <>
        <Popup
          trigger={<button className="btn btn-warning">Delete</button>}
          position="top right"
        >
          {(close) => (
            <div>
              <span> </span>
              <button className="btn btn-warning" onClick={handleClick}>
                Confirm Post Deletion
              </button>
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>
          )}
        </Popup>
      </>
    );
  } else {
    return <></>;
  }
};
export default DeletePost;