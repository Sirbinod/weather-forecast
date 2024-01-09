<script>
export default {
  name: "NotFound",
};
</script>

<template>
  <div class="not_found_container">
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<style scoped>
.not_found_container {
  text-align: center;
  margin-top: 27%;
}
</style>
