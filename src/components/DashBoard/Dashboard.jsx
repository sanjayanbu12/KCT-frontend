import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
const Dashboard = () => {
  return (

    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header"><a id="nav-title">Student Details<i class="fab fa-codepen"></i></a>
        {/* <label for="nav-toggle"><span id="nav-toggle-burger"></span></label> */}
        <hr />
      </div>
      <div id="nav-content">
        <Link to="/home" className="nav-button"><i class="fas fa-images"></i><span>Home</span></Link>
        <Link to="/form" className="nav-button"><i class="fas fa-images"></i><span>Form</span></Link>
        <Link to="/table" className="nav-button"><i class="fas fa-images"></i><span>Table</span></Link>
        <hr />
        {/* <div id="nav-content-highlight"></div> */}
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" /></div>
          <div id="nav-footer-titlebox"><a id="nav-footer-title">Keerthana</a><span id="nav-footer-subtitle">Admin</span></div>
          <label for="nav-footer-toggle"><i class="fas fa-caret-up"></i></label>
        </div>
        <div id="nav-footer-content">
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
