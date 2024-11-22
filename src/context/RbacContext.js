import React, { createContext, useState } from "react";

export const RbacContext = createContext();

export const RbacProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissions] = useState(["Read", "Write", "Delete"]); // Removed setPermissions

  const addUser = (user) => setUsers([...users, user]);
  const addRole = (role) => setRoles([...roles, role]);

  return (
    <RbacContext.Provider
      value={{ users, roles, permissions, addUser, addRole }}
    >
      {children}
    </RbacContext.Provider>
  );
};
