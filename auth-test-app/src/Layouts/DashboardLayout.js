import React from 'react';
import { Link } from 'react-router-dom'
import './DashboardLayout.css'
const DashboardLayout =(props) => {
    return (
             <header>
      <nav className="navbar fixed-top navbar-expand-md navbar-light">
        <a className="navbar-brand" >
          <img
            className="Logo"
            src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1597247907/Untitled_15_nw4jfi.png"
            alt="Ideate Logo"
          />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Druid Intel 
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item">
              <Link to="/DruidIntel/GettingStarted" className="navLink">
                  Getting started 
              </Link>
            </a>
        <a className="dropdown-item">
              <Link to="/DruidIntel/AdventureGuide" className="navLink">
                  AdventureGuide 
              </Link> 
        </a>
        <a className="dropdown-item">
              <Link to="/DruidIntel/ClassQuests" className="navLink">
                  Class Quests
              </Link> 
        </a>
        <a className="dropdown-item">
              <Link to="/DruidIntel/TalentTrees" className="navLink">
                  Talent Trees 
              </Link> 
        </a>
  
     </div>
          </li>
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Forum  
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item">
              <Link to="/Forum/Feed" className="navLink">
                  Browse Posts 
              </Link>
            </a>
        <a className="dropdown-item">
              <Link to="/Forum/CreatePost" className="navLink">
                  Create a Post 
              </Link> 
        </a>
  
            </div>
               </li>
               <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile Dashboard 
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item">
              <Link to="/Dashboard/ProfileSettings" className="navLink">
                  Profile Settings 
              </Link>
            </a>
        <a className="dropdown-item">
              <Link to="/Dashboard/PostActivity" className="navLink">
                  Post Activity
              </Link> 
        </a>
     </div>
          </li>
          <li class="nav-item">
        <a class="nav-link">
        <Link to="/" className="navLink">
                Portal 
              </Link>
          </a>
        </li>
                    </ul> 
                      </div> 
      </nav>
    </header>
    )
}; 

export default DashboardLayout