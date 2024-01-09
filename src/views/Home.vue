<script>
import { mapState, mapActions } from "vuex";
import Sunnyday from "@/assets/sunnyday.jpg";
import Search from "../components/Search.vue";
import BasicInfoCard from "@/components/BasicInfoCard.vue";
import { formatTime } from "@/utils/helper";

export default {
  components: {
    Search,
    BasicInfoCard,
  },
  computed: {
    ...mapState("weather", ["weatherData"]),
  },
  methods: {
    ...mapActions("weather", ["fetchWeatherData"]),
    async fetchDataOnMount() {
      await this.fetchWeatherData("kathmandu");
    },
  },
  mounted() {
    this.fetchDataOnMount();
  },

  data() {
    return {
      imagePath: Sunnyday,
      formatTime,
    };
  },
};
</script>

<template>
  <div :style="{ backgroundImage: `url(${imagePath})` }" class="home_page">
    <main class="weather_wrap">
      <div class="weather_info_search">
        <Search />
      </div>
      <div class="weather_info_data">
        <h2 class="weather_temp">{{ weatherData?.main?.temp }}°</h2>
        <h3 class="weather_day">{{ weatherData?.name }}</h3>
        <h4>
          {{
            `Today, expect a ${
              weatherData?.weather?.[0]?.description
            }. Sunrise: ${formatTime(
              weatherData?.sys?.sunrise
            )} and sunset: ${formatTime(weatherData?.sys?.sunset)}`
          }}
        </h4>
      </div>
      <div class="weather_info_grid">
        <BasicInfoCard
          icon="/src/assets/thermometer.svg"
          title="Feel Likes"
          :value="weatherData?.main?.feels_like + '°'"
        />
        <BasicInfoCard
          icon="/src/assets/visibility.svg"
          title="Visibility"
          :value="weatherData?.visibility / 1000 + ' KM'"
        />

        <BasicInfoCard
          icon="/src/assets/humidity.svg"
          title="Humidity"
          :value="weatherData?.main?.humidity + ' %'"
        />
        <BasicInfoCard
          icon="/src/assets/wind.svg"
          title="Wind"
          :value="weatherData?.wind?.speed + ' kM'"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
.home_page {
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  opacity: 0.9;
  display: flex;
}

.weather_info_search {
  width: 50%;
  margin: auto;
}

.weather_wrap {
  width: 90%;
  height: 90vh;
  margin: auto;
  background: rgba(0, 0, 0, 0.574);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
  z-index: 9;
}

.weather_info_data {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  text-align: center;
  color: white;
}

.weather_temp {
  font-size: 10rem;
  font-weight: 600;
  line-height: 99%;
}
.weather_day {
  font-size: 5rem;
  font-weight: 500;
  line-height: 100%;
}

.weather_info_grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

/* Media query for laptop view */
@media (min-width: 1024px) {
  .weather_info_grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
