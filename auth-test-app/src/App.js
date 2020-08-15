import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from "react-router-dom"; 
import Home from "./Home";
import Dashboard from "./Dashboard";
import axios from 'axios'
import DashboardLayout from './Layouts/DashboardLayout';
import GettingStarted from './GettingStarted.js'
import AdventureGuide from './AdventureGuide';
import ClassQuests from './ClassQuests';
import TalentTrees from './TalentTrees';
import CreatePost from './CreatePost';
import ForumFeed from './ForumFeed';
import Post from './Post';
import EditComment from './EditComment';
import EditPost from './EditPost';
import ProfileSettings from './ProfileSettings';
import ProfileSettingsEdit from './ProfileSettingsEdit';
import PostActivity from './PostActivity';
import {dreamwayApi} from './apiConfig.js'
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
    axios.get(`${dreamwayApi}logged_in`, { withCredentials: true }).then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
      this.setState({
        loggedInStatus: "LOGGED_IN", 
        user: response.data.user 
      })
      console.log(response.data.user)
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
       <Route exact path={"/welcome"} 
       render={props => (
         <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
       )}
       />
       <Route exact path={"/DruidIntel/GettingStarted"} component={GettingStarted} />
       <Route exact path={"/DruidIntel/AdventureGuide"} component={AdventureGuide} />
       <Route exact path={"/DruidIntel/ClassQuests"} component={ClassQuests} />
       <Route exact path={"/DruidIntel/TalentTrees"} component={TalentTrees} />
       <Route exact path={"/Forum/CreatePost"} render={props => (
         <CreatePost {...props} user={this.state.user} loggedInStatus={this.state.loggedInStatus} />
       )} /> 
       <Route exact path={"/Forum/Feed"} component={ForumFeed} />
       <Route exact path={"/Forum/Feed/Post/:postid"} 
       render={(routerProps) => <Post  {...routerProps} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>} /> 
       <Route exact path={"/Forum/Feed/Post/Edit/:postid"} render={(routerProps) => <EditPost  {...routerProps} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>} /> 
       <Route exact path={"/Forum/Feed/Post/:postid/Comment/Edit/:commentid"} render={(routerProps) => <EditComment {...routerProps} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>} /> 
       <Route exact path={"/Dashboard/ProfileSettings"} render={props => (
         <ProfileSettings {...props} user={this.state.user} loggedInStatus={this.state.loggedInStatus} />
       )} /> 
       <Route exact path={"/Dashboard/ProfileSettings/Edit"} render={props => (
         <ProfileSettingsEdit {...props} user={this.state.user} loggedInStatus={this.state.loggedInStatus} />
       )} /> 
       <Route exact path={"/Dashboard/PostActivity"} component={PostActivity} />
      </Switch> 
      </BrowserRouter>
      </div>
    )
  }
}
