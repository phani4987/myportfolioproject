import api from "../api/api";

// Signup
export const signup = (data) => {
    return api.post("/signup", data);
};

// Signin
export const signin = (data) => {
    return api.post("/signin", data);
};

// Logout
export const logout = () => {
    return api.post("/logout");
};