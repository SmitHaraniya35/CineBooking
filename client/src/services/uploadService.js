import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" })

export const uploadPhoto = async (file) => {
  const formData = new FormData();
  formData.append("photo", file);

  try{
    const response = await API.post("/movies/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true
  });   
} catch(err){
    console.log(err)
}

  return response.data; // { url: '/uploads/filename.jpg' }
};
