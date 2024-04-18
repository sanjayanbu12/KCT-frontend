import React from 'react';
import Dashboard from './DashBoard/Dashboard';
import Addbutton from './addButton/Addbutton';
import { Add } from '@mui/icons-material';
import Table from './Table/Table';

const AllIndex = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Dashboard />
      <div style={{ position: 'fixed', top: '50%',left: '60%', transform: 'translate(-50%, -50%)' }}>
        <Addbutton />
      </div>
    </div>
  );
};

export default AllIndex;