import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchUsers = () => api.get("/users");
export const fetchRoles = () => api.get("/roles");
export const createUser = (user) => api.post("/users", user);
export const createRole = (role) => api.post("/roles", role);
