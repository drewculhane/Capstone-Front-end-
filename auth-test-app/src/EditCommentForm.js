import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

const EditCommentForm= ({ comment, handleSubmit, handleChange}) => {
  return (
    <>
    <form  onSubmit={handleSubmit}>
        <label>Content: </label>
        <input
          className=""
          placeholder="Content"
          value={comment.content}
          name="content"
          onChange={handleChange}
        />
        <br />
        <button className="submit" type="submit">
          Submit
        </button>
    </form>
    </>
  );
};
export default EditCommentForm;