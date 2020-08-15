import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './PostActivity.css'
import {dreamwayApi} from './apiConfig.js'

function PostActivity() {
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Post Activity </h1>
        </div>
        </>
    )
}

export default PostActivity 