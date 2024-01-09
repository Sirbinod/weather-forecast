<script>
import { mapState } from "vuex";

export default {
  props: {
    icon: String,
    title: String,
    value: Number,
  },
};
</script>

<template>
  <div class="basic_info">
    <div class="basic_info_heading">
      <img :src="icon" alt="" />
      <h4 class="basic_info_title">{{ title }}</h4>
    </div>

    <h2 class="basic_info_data">{{ value }}</h2>
  </div>
</template>

<style scoped>
.basic_info {
  background-color: #0e0d0dc9;
  color: white;
  z-index: 11;
  border-radius: 1rem;
  padding: 1rem;
}
.basic_info_heading {
  display: flex;
  align-items: center;
  gap: 3px;
}

.basic_info_title {
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
}
.basic_info_data {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.basic_info_desc {
  font-size: 0.8rem;
  font-weight: 400;
}
</style>
