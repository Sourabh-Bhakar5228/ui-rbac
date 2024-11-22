import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Dashboard</Link>
            <Link to="/users">Users</Link>
            <Link to="/roles">Roles</Link>
            <Link to="/permissions">Permissions</Link>
        </nav>
    );
};

export default Navbar;
