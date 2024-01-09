<script>
import Locationsign from "@/assets/locationsign.svg";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      Locationsign,
      searchTerm: "",
    };
  },
  methods: {
    ...mapActions("weather", ["fetchWeatherData"]),
    async search() {
      if (this.searchTerm.trim() !== "") {
        try {
          await this.fetchWeatherData(this.searchTerm);
        } catch (error) {
          console.error("Error fetching weather data:", error);
          // Handle error, e.g., show an error message to the user
        }
      }
    },
  },
};
</script>

<template>
  <div class="search">
    <div class="search_map_icon">
      <img src="@/assets/locationsign.svg" alt="" />
    </div>
    <input
      type="text"
      id="simple-search"
      class="search_input"
      placeholder="Enter city name..."
      required
      v-model="searchTerm"
      @keyup.enter="search"
    />
  </div>
</template>

<style scoped>
.search {
  position: relative;
  z-index: 11;
}

.search_map_icon {
  position: absolute;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
}

.search_input {
  width: 100%;
  background-color: #1b1d1e;
  border: 1px solid #1b1d1e;
  border-radius: 1.6rem;
  padding: 0.625rem 0.625rem 0.625rem 2.5rem;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>
