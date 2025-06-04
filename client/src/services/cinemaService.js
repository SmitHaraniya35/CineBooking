import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api" })

export const getAllCinemas = async () => {
  try {
    const res = await API.get("/cinemas", { withCredentials: true })
    return res.data
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch cinemas")
  }
}

export const addCinema = async (cinemaData) => {
  try {
    const res = await API.post("/cinemas/addCinema", cinemaData, { withCredentials: true })
    return res.data
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to add cinema")
  }
}

// Update cinema
export const updateCinema = async (id, cinemaData) => {
  try{
    const res = await API.put(`/cinemas/${id}`, cinemaData, { withCredentials: true });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to update cinema")
  }
  
};

// Delete cinema
export const deleteCinema = async (id) => {
  try{
    const res = await API.delete(`/cinemas/${id}`, { withCredentials: true });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to delete cinema")
  }
};

export const getCinemaById = async (id) => {
  try{
    console.log(id)
    const res = await API.get(`/cinemas/${id}`, { withCredentials: true });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch cinema by id")
  }
};