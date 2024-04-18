import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/DashBoard/Dashboard";
import AllIndex from "./components/AllIndex";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/allindex" element={<AllIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
