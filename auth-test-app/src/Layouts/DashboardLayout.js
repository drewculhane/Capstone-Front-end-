import React from 'react';
import { Link } from 'react-router-dom'
import './DashboardLayout.css'
const DashboardLayout =(props) => {
    return (
             <header>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light">
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
          <a className="nav-item nav-link ideas">
            <Link to="/Profile" className="navLink ideas">
              <div
                className="togglewrapperrr"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Profile
              </div>
            </Link>
            </a>
            <a className="nav-item nav-link new-idea">
            <Link to="/Forum" className="navLink">
              <div
                className="togglewrapperrr"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Forum
              </div>
            </Link>
            </a>
            {/* <a className="nav-item nav-link about">
            <Link to="/Forum" className="navLink about">
              <div
                className="togglewrapperrr"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Forum 
              </div>
            </Link>
            </a> */}
            <a className="nav-item nav-link login">
              <Link to="/" className="navLink">
                <div
                  className="togglewrapperrr account-info"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <div className="ProfileContainer">
                    <span className="nav-username"> {props.username}</span>
                  </div>
                </div>
              </Link>
              </a>
            </div>
          </div>
        
      </nav>
    </header>
    )
}; 

export default DashboardLayout