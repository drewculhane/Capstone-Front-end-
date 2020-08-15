import React, { useState, useEffect } from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './ProfileSettingsEdit.css'
import AvatarChoice from './AvatarChoice';
import axios from 'axios';
import ProfEditForm from './ProfEditForm';
import {dreamwayApi} from './apiConfig.js'
function ProfileSettingsEdit(props) {
    const [spotlight, setSpotlight]=useState("")
    const [input, setInput]=useState({ nickname: "", server:"", server_region: "", spec: "", avatar: null })
    const userId=props.user.id 
    console.log("SPOTLIGHT", spotlight)
    const userInfo=props.user 
    
    const handleAvatarClick = (avatar) => {
        setSpotlight(avatar)
    }
    const handleChange = (event, {spotlight}) => {
        setInput({
            ...input, 
            [event.target.name]: event.target.value, 
            avatar: {spotlight}
        });
    };
    const dataInputThree={
        input, 
        avatar: spotlight 
    }
    console.log("input state", dataInputThree)
    const handleSubmit = (event) => {
        const dataInput = input; 
        const dataInputTwo={
            dataInput, 
            avatar: spotlight 
        }
        event.preventDefault(); 
        axios({
            url: `${dreamwayApi}users/${userId}`,
            method: "PUT",
            data: dataInputTwo
          })
          props.history.push("/Dashboard/ProfileSettings")
          window.location.reload()
    }
    
    console.log(props.loggedInStatus)
    

    
   
    
  


    console.log("input check", input)






    const avatar=props.user.avatar 
    let userDataForm; 
    const avatarArray=[
        {src:"https://res.cloudinary.com/dgmpgmo60/image/upload/v1597278126/Screen_Shot_2020-08-12_at_8.18.03_PM_kanw0g.png"}, 
        {src: "https://res.cloudinary.com/dgmpgmo60/image/upload/v1597278154/Screen_Shot_2020-08-12_at_8.19.16_PM_rthpvr.png"},
        {src: "https://res.cloudinary.com/dgmpgmo60/image/upload/v1597278140/Screen_Shot_2020-08-12_at_8.19.36_PM_ypyldm.png"},
        {src: "https://res.cloudinary.com/dgmpgmo60/image/upload/v1597278112/Screen_Shot_2020-08-12_at_8.18.29_PM_pmw8yt.png"},
        {src: "https://res.cloudinary.com/dgmpgmo60/image/upload/v1597278106/Screen_Shot_2020-08-12_at_8.18.42_PM_nix7xw.png"},
        {src: "https://res.cloudinary.com/dgmpgmo60/image/upload/v1597278094/Screen_Shot_2020-08-12_at_8.20.58_PM_dzxmhw.png"}
    ]
    

    const avatarArrayChoices = avatarArray.map((avatarImg) => {
        console.log("in settings edit", props.user)
        if (props.loggedInStatus === "NOT_LOGGED_IN") {
            return (
                <div> </div>
            )
        }
        return (
            <AvatarChoice userInfoAvatar={avatar} avatarImg={avatarImg.src} 
            setSpotlight={setSpotlight}
            spotlight={spotlight}
            handleAvatarClick={handleAvatarClick} />
        )
    }); 

    if (props.loggedInStatus === "NOT_LOGGED_IN") 
    userDataForm = (
        <div> 
            <a href="/"> Please Log in to edit your dashboard. </a>
        </div>
    ); 
      else {
        if (!props.user) 
        userDataForm = (
            <div>
                <p> Loading... </p>
            </div>
        );
         else if (props.user) {
           
            userDataForm = (
                    <>
                <h4> Email: {userInfo.email} </h4>
                <ProfEditForm 
                user={input}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setInput={setInput}
                userInfo={userInfo}
                spotlight={spotlight}
                />
                </>
                )
            
        }
    }
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Profile Settings Edit </h1>
        {avatarArrayChoices}
        </div>
        {userDataForm}
        </>
    )
}

export default ProfileSettingsEdit  