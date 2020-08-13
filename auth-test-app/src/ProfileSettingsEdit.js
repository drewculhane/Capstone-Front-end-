import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './ProfileSettingsEdit.css'

function ProfileSettingsEdit(props) {
    console.log(props.user)
    console.log(props.loggedInStatus)
    const userInfo=props.user 
    let userDataForm; 
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
                <h3> Avatar: </h3>
                <p> Avatar picker placeholder. </p>
                <form>
                    <label> Nickname </label>
                    <input /> 
                    <label> Server Region </label>
                    <input /> 
                    <label> Server </label>
                    <input /> 
                    <label> Nickname </label>
                    <input /> 
                    <label> Spec </label>
                    <input /> 
                </form>
                </>
                )
            
        }
    }
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Profile Settings Edit </h1>
        </div>
        {userDataForm}
        </>
    )
}

export default ProfileSettingsEdit  