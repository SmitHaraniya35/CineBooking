// src/services/movieService.js
import axios from "axios";

// const API = "http://localhost:5000/api/movies"; // adjust if needed
const API = import.meta.env.VITE_BACKEND_API_URL;

export const getAllMovies = async () => {
  try {
    const res = await axios.get(`${API}/api/movies`);
    console.log(`${API}/api/movies`)
    return res.data;
  } catch (error) {
    console.error("Get all movies error:", error.response?.data?.msg || error.message);
    throw new Error(error.response?.data?.msg || "Failed to fetch movies.");
  }
};

export const getMovieById = async (id) => {
  try {
    const res = await axios.get(`${API}/api/movies/${id}`);
    return res.data;
  } catch (error) {
    console.error("Get movie by ID error:", error.response?.data?.msg || error.message);
    throw new Error(error.response?.data?.msg || "Failed to fetch movie.");
  }
};

export const addMovie = async (movieData) => {
  try {
    const res = await axios.post(`${API}/api/movies/addMovie`, movieData);
    return res.data;
  } catch (error) {
    console.error("Add movie error:", error.response?.data?.msg || error.message);
    throw new Error(error.response?.data?.msg || "Failed to add movie.");
  }
};

export const updateMovie = async (id, movieData) => {
  try {
    const res = await axios.put(`${API}/api/movies/${id}`, movieData, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error("Update movie error:", error.response?.data?.msg || error.message);
    throw new Error(error.response?.data?.msg || "Failed to update movie.");
  }
};

export const deleteMovie = async (id) => {
  try {
    const res = await axios.delete(`${API}/api/movies/${id}`,{ withCredentials: true });
    return res.data;
  } catch (error) {
    console.error("Delete movie error:", error.response?.data?.msg || error.message);
    throw new Error(error.response?.data?.msg || "Failed to delete movie.");
  }
};
