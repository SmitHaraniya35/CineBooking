import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signup = async (userData) => {
  try {
    return await axios.post(`${API_URL}/register`, userData);
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    return await axios.post(`${API_URL}/login`, userData,{
      withCredentials: true
    });
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

export const getMe = async () => {
  try {
    const res = await axios.get(`${API_URL}/me`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("getMe error:", error.response?.data?.msg || error.message);
    throw new Error(error.response?.data?.msg || "Failed to fetch user.");
  }
};

export const logout = async () => {
  try {
    const res = await axios.get(`${API_URL}/logout`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Logout error:", error.response?.data?.msg || error.message);
    throw new Error(error.response?.data?.msg || "Logout failed.");
  }
};


