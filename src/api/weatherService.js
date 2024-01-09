import axios, { Axios } from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export default {
  async getWeather(city) {
    try {
      const response = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  },
};
