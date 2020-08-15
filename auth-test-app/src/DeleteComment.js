import axios from "axios";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import {dreamwayApi} from './apiConfig.js'
function DeleteComment (props) {
    let userId; 
  if (props.user) {
  userId = props.user.id 
  }
  console.log("yoyo", props.comment)
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
    const commentId = props.comment.id;
    const url = `${dreamwayApi}comments/${commentId}`;
    await destroy(url);
    window.location = `/Forum/Feed/Post/${props.post.id}`;
  };

  if (userId == props.comment.user_id) {
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
                Confirm Comment Deletion
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
export default DeleteComment;