<script>
export default {
  props: {
    submitHandler: Function,
    buttonText: String,
    buttonClass: String,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      this.submitHandler(this.email, this.password);
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm" class="auth_form">
    <label for="email">Email:</label>
    <input type="email" placeholder="Email" v-model="email" required />

    <label for="password">Password:</label>
    <input type="password" placeholder="Password" v-model="password" required />

    <button type="submit" :class="buttonClass">{{ buttonText }}</button>
  </form>
</template>

<style scoped>
.auth_form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
}
</style>
