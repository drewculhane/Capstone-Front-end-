import React, {Component} from "react"
import Registration from "./auth/Registration"
import axios from 'axios';
import Login from "./auth/Login";
import DashboardLayout from "./Layouts/DashboardLayout";
import {dreamwayApi} from './apiConfig.js'
import './Home.css'  

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
    }
    handleSuccessfulAuth(data) {
        this.props.handleLogin(data); 
        this.props.history.push("/welcome")
    }

    handleLogoutClick() {
        axios.delete(`${dreamwayApi}logout`, { withCredentials: true }).then(response => {
        this.props.handleLogout()
        }).catch(error => {
            console.log("logout error", error);
        });
    }

    render() {
    return (
        <>
        <DashboardLayout/>
        <div className="Login-Portal">
            <h1> Home </h1>
            <h1>Status: {this.props.loggedInStatus} </h1>
            <button onClick={() => this.handleLogoutClick()}> Log out </button>
            <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> 
            <h4> Login </h4>
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> 
        </div>
        </>
    ); 
    }
}