import React from "react";
import { Stack, Grid } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/DashBoard/Dashboard";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import Table from "./components/Table/StudentTable"
import StudentTable from "./components/Table/StudentTable";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Stack>
        <Grid container>
          <Grid item xs={3}> 
            <Dashboard />
          </Grid>
          <Grid item xs={9}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/table" element={<StudentTable />} />
              
            </Routes>
          </Grid>
        </Grid>
      </Stack>
    </Router>
  );
}

export default App;
