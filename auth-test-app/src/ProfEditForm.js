import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

const ProfEditForm= ({ userInfo, user, handleSubmit, spotlight, handleChange, setInput}) => {
    console.log("prof edit form", userInfo)
    useEffect(() => {
        const populate = () => {
    if (userInfo.nickname) {
        setInput({
            nickname: userInfo.nickname, 
            server: userInfo.server, 
            server_region: userInfo.server, 
            spec: userInfo.spec,
        })
    }
    }; populate()
    }, [])
  return (
    <>
    <form  onSubmit={handleSubmit}>
        <label>Nickname: </label>
        <input
          className=""
          placeholder="nickname"
          value={user.nickname}
          name="nickname"
          onChange={handleChange}
        />
        <br />
        <label>Server Region: </label>
        <textarea
          autosize
          className=""
          placeholder="Server Region"
          value={user.server_region}
          name="server_region"
          onChange={handleChange}
        />
        <br />
        <label>Server: </label>
        <input
          className=""
          placeholder="Server"
          value={user.server}
          name="server"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Spec: </label>
        <input
          className=""
          placeholder="Spec(s)"
          value={user.spec}
          name="spec"
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
export default ProfEditForm;