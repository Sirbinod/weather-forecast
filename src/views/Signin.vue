<script>
import AuthForm from "@/components/AuthForm.vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export default {
  components: {
    AuthForm,
  },
  methods: {
    async signIn(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        this.$router.push("/");
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>

<template>
  <div class="auth_page">
    <div class="auth_container">
      <h2>Sign In</h2>
      <AuthForm
        :submitHandler="signIn"
        buttonText="Sign In"
        buttonClass="signin_button"
      />
      <div class="signup_link">
        Don't have an account? <router-link to="/signup">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth_page {
  display: flex;
  align-items: center;
  height: 100vh;
}

.auth_container {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: rgba(49, 47, 47, 0.6);
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.signup_link {
  margin-top: 0.4rem;
}
.signup_link a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
