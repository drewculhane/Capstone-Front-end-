import React from 'react';
import { Link } from 'react-router-dom'
import './DreamwayLayout.css'
const DreamwayLayout =(props) => {
    return (
             <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/DreamwayHome">
          <img
            className="Logo"
            src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1597016965/Untitled_14_w0dmit.png"
            alt="Ideate Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navbar-light">
          <a className="nav-item nav-link">
            <Link to="/dashboard" className="navLink">
              <div
                className="togglewrapperrr"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Dashboard 
              </div>
            </Link>
            </a>
            <a className="nav-item nav-link">
            <Link to="/GettingStarted" className="navLink">
              <div
                className="togglewrapperrr"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Getting Started 
              </div>
            </Link>
            </a>
            <a className="nav-item nav-link">
            <Link to="/ClassQuests" className="navLink">
              <div
                className="togglewrapperrr"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Class Quests 
              </div>
            </Link>
            </a>
            <a className="nav-item nav-link">
              <Link to="/TalentTrees" className="navLink">
                <div
                  className="togglewrapperrr account-info"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Talent Trees 
                </div>
              </Link>
              </a>
              <a className="nav-item nav-link">
              <Link to="/Forum" className="navLink">
                <div
                  className="togglewrapperrr account-info"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Forum 
                </div>
              </Link>
              </a>
              <a className="nav-item nav-link">
              <Link to="/MoreResources" className="navLink">
                <div
                  className="togglewrapperrr account-info"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  More Resources 
                </div>
              </Link>
              </a>
            </div>
          </div>
        
      </nav>
    </header>
    )
}; 

export default DreamwayLayout 