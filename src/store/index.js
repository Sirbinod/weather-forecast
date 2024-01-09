import { createStore } from "vuex";
import weatherModule from "./weather";

const store = createStore({
  modules: {
    weather: weatherModule,
  },
});

export default store;
