import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Update this to match your backend URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to register user");
  }
};
