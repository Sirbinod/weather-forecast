import weatherService from "@/api/weatherService";

const state = {
  weatherData: null,
};

const mutations = {
  setWeatherData(state, weatherData) {
    state.weatherData = weatherData;
  },
};

const actions = {
  async fetchWeatherData({ commit }, city) {
    try {
      const weatherData = await weatherService.getWeather(city);
      commit("setWeatherData", weatherData);
    } catch (error) {
      console.error("Error fetching weather data for cities:", error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
