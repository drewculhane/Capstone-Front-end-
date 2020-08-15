import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

const EditPostForm= ({ post, handleSubmit, handleChange}) => {
  return (
    <>
    <form  onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          className=""
          placeholder="Title"
          value={post.title}
          name="title"
          onChange={handleChange}
        />
        <br />
        <label>Content: </label>
        <input
          className=""
          placeholder="Content"
          value={post.content}
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
export default EditPostForm;