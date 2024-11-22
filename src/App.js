import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";
import { RbacProvider } from "./context/RbacContext";
import "./App.css";

const App = () => {
  return (
    <RbacProvider>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permissions" element={<Permissions />} />
          </Routes>
        </div>
      </Router>
    </RbacProvider>
  );
};

export default App;
