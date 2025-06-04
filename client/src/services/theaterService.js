import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api" })

export const getAllTheaters = async () => {
  try {
    const res = await API.get("/theaters", { withCredentials: true })
    return res.data
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch theaters")
  }
}

export const getTheaterById = async (id) => {
  try {
    const res = await API.get(`/theaters/${id}`, { withCredentials: true });
    console.log(res.data)
    return res.data;
  } catch (err) {
    console.error("Fetch theater error:", err.response?.data?.msg || err.message);
    throw new Error(err.response?.data?.msg || "Failed to fetch theater.");
  }
};

export const getTheatersByCinemaId = async (cinemaId) => {
  try {
    const res = await API.get(`/theaters/by-cinema/${cinemaId}`, { withCredentials: true });
    return res.data;
  } catch(err) {
    console.error("Fetch theater error:", err.response?.data?.msg || err.message);
    throw new Error(err.response?.data?.msg || "Failed to fetch theater by cinema id.");
  }
};

export const addTheater = async (theaterData) => {
  try {
    const res = await API.post("/theaters/addTheater", theaterData, { withCredentials: true })
    return res.data
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to add theater")
  }
}

export const updateTheater = async (id, theaterData) => {
  try{
    const res = await API.put(`/theaters/${id}`, theaterData, { withCredentials: true });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to add theater")
  }
};

export const deleteTheater = async (id) => {
  try {
    const res = await API.delete(`/theaters/${id}`, { withCredentials: true });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to delete theater")
  }
};