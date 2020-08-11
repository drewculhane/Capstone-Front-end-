import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from "react-router-dom"; 
import Home from "./Home";
import Dashboard from "./Dashboard";
import axios from 'axios'
import DreamwayHome from './DreamwayHome';
export default class App extends Component {
  constructor() {
    super(); 

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN", 
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true }).then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
      this.setState({
        loggedInStatus: "LOGGED_IN", 
        user: response.data.user 
      })
    } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN", 
        user: {}
      })
    }
    })
    .catch(error=> {
      console.log("check login error", error);
    });
  }
  componentDidMount() {
    this.checkLoginStatus();
  }
  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user 
    })
  }
  render() {
    return (
      <div className='app'>
       <BrowserRouter>
       <Switch> 
       <Route exact path={"/"} 
       render={props => (
         <Home {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
       )}
       />
       <Route exact path={"/dashboard"} 
       render={props => (
         <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
       )}
       />
       <Route exact path={"/DreamwayHome"} component={DreamwayHome} />
      </Switch> 
      </BrowserRouter>
      </div>
    )
  }
}
