import React from 'react'; 
import './Dashboard.css'
const Dashboard = props => {
    return (
        <> 
            <div className="Dashboard-Container">
                <h1> Dashboard </h1>    
                <h1> Status: {props.loggedInStatus} </h1>   
                <h4> Welcome back, 'insert username' </h4>
            </div> 
            </>
    )
}
export default Dashboard; 