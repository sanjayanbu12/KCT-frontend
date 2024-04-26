import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import HomeIcon from '@mui/icons-material/Home';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import TableChartIcon from '@mui/icons-material/TableChart';
import LogoutIcon from '@mui/icons-material/Logout';
const Dashboard = () => {
  return (

    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header"><a id="nav-title">KCT<i class="fab fa-codepen"></i></a>
        {/* <label for="nav-toggle"><span id="nav-toggle-burger"></span></label> */}
        <hr />
      </div>
      <div id="nav-content"> 
        <Link to="/home" className="nav-button"><i class="fas fa-images"><HomeIcon sx={{mt:'1px',fontSize:'1.3rem'}}/></i><span>Home</span></Link>
        <Link to="/form" className="nav-button"><i class="fas fa-images"><ContactEmergencyIcon sx={{mt:'1px',fontSize:'1.3rem'}}/></i><span>Form</span></Link>
        <Link to="/table" className="nav-button"><i class="fas fa-images"><TableChartIcon sx={{mt:'1px',fontSize:'1.3rem'}}/></i><span>Table</span></Link>
        <hr />
        {/* <div id="nav-content-highlight"></div> */}
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" /></div>
          <div id="nav-footer-titlebox"><a id="nav-footer-title">Keerthana</a><span id="nav-footer-subtitle">Admin</span></div>
         
          <div className="logout">
            
          <Link to="/"><LogoutIcon/></Link>
            </div>
        </div>
        
        <div >
          
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
