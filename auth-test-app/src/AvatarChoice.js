import React from 'react';
import {useState, useEffect} from 'react';

function AvatarChoice (props, { handleAvatarClick, setSpotlight, spotlight }) {
    // console.log("avatarchoice", props)
    // userInfoAvatar=props.userInfoAvatar
    const avatarImg=props.avatarImg 
    // console.log("avatarimg", avatarImg)
    // console.log("userinfoavatar", props.userInfoAvatar)
    useEffect(() => {
        const populateAvatar = () => {
    const userInfoAvatar= props.userInfoAvatar 
    if (avatarImg == userInfoAvatar)
    props.setSpotlight(userInfoAvatar)
    
}; 
populateAvatar(); 
    },[])
    const handleAvatar= (e) => {
        props.handleAvatarClick(avatarImg)
    }
    return (
        <>
        <img 
            style={ avatarImg == props.spotlight ? {border: "2px solid green"} : {border: "none"}}
            onClick={handleAvatar}
            src={avatarImg} alt="Elf Avatar" 
            />
            </>
    )
}

export default AvatarChoice